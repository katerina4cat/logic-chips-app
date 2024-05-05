-- Autentifications
DROP PROCEDURE IF EXISTS `Registration`;
DROP PROCEDURE IF EXISTS `RemoveUser`;
DROP PROCEDURE IF EXISTS `LoginByEmail`;
DROP PROCEDURE IF EXISTS `LoginByGoogle`;
DROP PROCEDURE IF EXISTS `AddSession`;
DROP PROCEDURE IF EXISTS `UpdateSession`;
DROP PROCEDURE IF EXISTS `GetSessions`;
DROP PROCEDURE IF EXISTS `RemoveSession`;
DROP PROCEDURE IF EXISTS `UserByUuid`;
DELIMITER //
CREATE PROCEDURE `Registration` (IN email TINYTEXT, IN pass TINYTEXT, IN nick TINYTEXT)
BEGIN
    INSERT INTO users(email, nick)
    VALUES(email, nick);
    
    SET @userID = LAST_INSERT_ID();
    SET @encrypted_passw = SHA2(pass, 256);
    
    INSERT INTO accountSecrets(id, password)
    VALUES(@userID, @encrypted_passw);
    INSERT INTO donate(id)
    VALUES(@userID);
    SELECT uuid, email, nick, photo, registered, coins, donate FROM `users` WHERE `users`.email = email;
END //

CREATE PROCEDURE `RemoveUser` (IN uuid VARCHAR(36))
BEGIN
    DECLARE deleteID INT;
    SELECT id INTO deleteID FROM users WHERE uuid = uuid;

    IF deleteID IS NOT NULL THEN
        DELETE FROM sessions WHERE userID = deleteID;
        DELETE FROM loginLog WHERE userID = deleteID;
        DELETE FROM accountSecrets WHERE id = deleteID;
        DELETE FROM accountGoogle WHERE id = deleteID;
        DELETE FROM donate WHERE id = deleteID;
        DELETE FROM save WHERE userID = deleteID;
        DELETE FROM settings WHERE id = deleteID;
        DELETE FROM users WHERE id = deleteID;
    END IF;
END //

CREATE PROCEDURE `LoginByEmail` (IN email VARCHAR(256), IN pass TINYTEXT)
BEGIN
	SELECT uuid, email, nick, photoUrl, registered, coins, donate FROM `users`, `accountSecrets` WHERE `users`.email = email AND `accountSecrets`.password = SHA2(pass, 256) LIMIT 1;
END //

CREATE PROCEDURE `UserByUuid` (IN userUUID VARCHAR(36))
BEGIN
	SELECT uuid, email, nick, photoUrl, registered, coins, donate FROM `users`WHERE `users`.uuid = userUUID LIMIT 1;
END //

CREATE PROCEDURE `LoginByGoogle` (IN email VARCHAR(256), IN googleID VARCHAR(256), IN nick VARCHAR(256), IN photo VARCHAR(512))
BEGIN
    DECLARE user_exists INT;
    SELECT COUNT(*) INTO user_exists FROM `users` INNER JOIN `accountGoogle` ON `users`.id = `accountGoogle`.id WHERE `users`.email = email AND `accountGoogle`.googleID = googleID;
    IF user_exists = 0 THEN
		SELECT COUNT(*) INTO user_exists FROM `users` WHERE `users`.email = email;
        IF user_exists = 0 THEN
			INSERT INTO `users` (email, nick, photoUrl) VALUES (email, nick, photo);
			INSERT INTO `accountGoogle` (id, googleID) VALUES (LAST_INSERT_ID(), googleID);
            SELECT `users`.uuid, `users`.email, `users`.photoUrl, `users`.registered, `users`.coins, `users`.donate FROM `users` INNER JOIN `accountGoogle` ON `users`.id = `accountGoogle`.id WHERE `users`.email = email AND `accountGoogle`.googleID = googleID LIMIT 1;
        END IF;
    END IF;
    SELECT `users`.uuid, `users`.email, `users`.nick, `users`.photoUrl, `users`.registered, `users`.coins, `users`.donate FROM `users` INNER JOIN `accountGoogle` ON `users`.id = `accountGoogle`.id WHERE `users`.email = email AND `accountGoogle`.googleID = googleID LIMIT 1;
	END //

CREATE PROCEDURE `AddSession`(IN userUUID VARCHAR(36), IN refreshToken VARCHAR(512), IN ip INT)
BEGIN
    DECLARE userID INT;
    SELECT id INTO userID FROM `users` WHERE uuid = userUUID;
    
    IF userID IS NOT NULL THEN
        INSERT INTO `sessions` (userID, refresh) VALUES (userID, refreshToken);
        INSERT INTO `loginLog` (userID, ip, sessionID) VALUES (userID, ip, LAST_INSERT_ID());
        SELECT 1 AS result;
    ELSE
        SELECT 0 AS result;
    END IF;
END //

CREATE PROCEDURE `UpdateSession`(IN oldRefreshToken VARCHAR(512), IN newRefreshToken VARCHAR(512))
BEGIN
    UPDATE `sessions` SET refresh = newRefreshToken WHERE refresh = oldRefreshToken;
    SELECT 1 AS result;
END //

CREATE PROCEDURE `GetSessions`(IN userUUID VARCHAR(36))
BEGIN
    SELECT sessions.id, sessions.refresh 
    FROM `sessions`
    INNER JOIN `loginLog` ON loginLog.sessionID = sessions.id
    INNER JOIN `users` ON users.id = loginLog.userID 
    WHERE users.uuid = userUUID;
END //

CREATE PROCEDURE `RemoveSession` (IN refreshToken VARCHAR(512))
BEGIN
	DECLARE sessionID INT;
    SELECT id INTO sessionID FROM sessions WHERE refresh = refreshToken;
    
    IF sessionID IS NOT NULL THEN
        UPDATE loginLog SET sessionID = NULL WHERE sessionID = sessionID;
        DELETE FROM sessions WHERE id = sessionID;
    END IF;
	SELECT 1 AS result;
END //
DELIMITER ;