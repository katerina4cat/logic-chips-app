-- Saves
DROP PROCEDURE IF EXISTS `CreateNewSave`;
DROP PROCEDURE IF EXISTS `SaveChip`;
DROP PROCEDURE IF EXISTS `DeleteChip`;
DROP PROCEDURE IF EXISTS `GetSyncChange`;
DROP PROCEDURE IF EXISTS `GetRelatedChips`;
DELIMITER //
CREATE PROCEDURE `CreateNewSave`(IN userUUID VARCHAR(36), IN title TINYTEXT)
BEGIN
    DECLARE userID INT;
    SELECT id INTO userID FROM `users` WHERE uuid = userUUID;
    
    IF EXISTS (SELECT 1 FROM `saves` WHERE `saves`.userID = userID AND `saves`.title = title) THEN
        SELECT 0 AS result;
    ELSE
        INSERT INTO `saves`(userID, title, wheelConfig) VALUES (userID, title, '[["AND","NOT","TRI-STATE BUFFER"],[],[],[],[],[],[],[],[]]');
        SELECT 1 AS result;
    END IF;
END //

CREATE PROCEDURE `SaveChip`(
    IN userUUID VARCHAR(36),
    IN saveName TINYTEXT,
    IN title TINYTEXT,
    IN color MEDIUMINT UNSIGNED,
    IN chipStyle SMALLINT UNSIGNED,
    IN screenX INT UNSIGNED,
    IN screenY INT UNSIGNED,
    IN inputPins JSON,
    IN outputPins JSON,
    IN subChips JSON,
    IN buses JSON,
    IN wires JSON,
    IN lastEditTime DATETIME,
    IN rewrite BOOLEAN
)
BEGIN
    DECLARE userID INT;
    DECLARE saveID BIGINT UNSIGNED;
    DECLARE chipLastEdit DATETIME;

    SELECT id INTO userID FROM `users` WHERE uuid = userUUID;
    SELECT id INTO saveID FROM `saves` WHERE `saves`.title = saveName AND `saves`.`userID` = userID;

    IF EXISTS (SELECT 1 FROM `saves` WHERE `id` = saveID AND `saves`.`userID` = userID) THEN
        SELECT `lastEdit` INTO chipLastEdit FROM `chips` WHERE `chipName` = title AND `chips`.`saveID` = saveID;
        IF chipLastEdit IS NULL OR chipLastEdit < lastEditTime OR rewrite THEN
            IF EXISTS (SELECT 1 FROM `chips` WHERE `chipName` = title AND `chips`.`saveID` = saveID) THEN
                UPDATE `chips`
                SET `lastEdit` = lastEditTime,
                    `color` = color,
                    `chipStyle` = chipStyle,
                    `screenX` = screenX,
                    `screenY` = screenY,
                    `inputPins` = inputPins,
                    `outputPins` = outputPins,
                    `subChips` = subChips,
                    `buses` = buses,
                    `wires` = wires
                WHERE `chipName` = title AND `chips`.`saveID` = saveID;
            ELSE
                INSERT INTO `chips`(
                `saveID`,
                `chipName`,
                `lastEdit`,
                `color`,
                `chipStyle`,
                `screenX`,
                `screenY`,
                `inputPins`,
                `outputPins`,
                `subChips`,
                `buses`,
                `wires`) 
                VALUES (
                saveID, 
                title,
                lastEditTime,
                color, 
                chipStyle, 
                screenX, 
                screenY, 
                inputPins, 
                outputPins, 
                subChips, 
                buses, 
                wires);
            END IF;
            UPDATE `saves`
            SET `lastEdit` = lastEditTime
            WHERE `id` = saveID;
        ELSE
            SELECT chipLastEdit as lastEdit;
        END IF;
    END IF;
END //


CREATE PROCEDURE `DeleteChip`(
    IN userUUID VARCHAR(36),
    IN saveName TINYTEXT,
    IN title TINYTEXT,
    IN deleteTime DATETIME
)
BEGIN
    DECLARE userID INT;
    DECLARE saveID BIGINT UNSIGNED;
    
    SELECT id INTO userID FROM `users` WHERE uuid = userUUID;
    SELECT id INTO saveID FROM `saves` WHERE `saves`.title = saveName AND `saves`.`userID` = userID;

    DELETE FROM `chips`
        WHERE `chipName` = title AND 
              `chips`.`saveID` = saveID AND 
              `chips`.`lastEdit` < deleteTime;

    IF ROW_COUNT() > 0 THEN
        INSERT INTO DeletingLog (saveID, deletedAt, chipName) 
        VALUES (saveID, CURRENT_TIMESTAMP, title);
        
        UPDATE saves 
        SET lastEdit = CURRENT_TIMESTAMP 
        WHERE saves.id = saveID;
    END IF;
END //


CREATE PROCEDURE `GetSyncChange`(
    IN userUUID VARCHAR(36),
    IN lastLoadDate DATETIME
)
BEGIN
    DECLARE userID INT;
    SELECT id INTO userID FROM `users` WHERE uuid = userUUID;

    -- 1. Найти все сохранения, которые были сделаны после lastLoadDate и выводить их в результат.
    SELECT `saves`.title, `saves`.created, `saves`.lastEdit, `saves`.wheelConfig FROM `saves`
    INNER JOIN `users` ON `users`.id = `saves`.`userID`
    WHERE `users`.`uuid` = userUUID AND `saves`.`lastEdit` > lastLoadDate;

    -- 2. Найти все удалённые чипы у пользователя после lastLoadDate и выводить их в результат.
    SELECT `saves`.title, `DeletingLog`.chipName, `DeletingLog`.deletedAt FROM `DeletingLog`
    INNER JOIN `saves` ON `DeletingLog`.saveID = `saves`.id 
    WHERE `saves`.`userID` = userID AND `DeletingLog`.`deletedAt` > lastLoadDate;

    -- 3. Найти все созданные чипы у пользователя после lastLoadDate и выводить их в результат.
    SELECT `saves`.title, chipName, `chips`.lastEdit, color, chipStyle, screenX, screenY, inputPins, outputPins, subChips, buses, wires FROM `chips`
    INNER JOIN `saves` ON `chips`.saveID = `saves`.id 
    WHERE `saves`.`userID` = userID AND `chips`.`lastEdit` > lastLoadDate;
END //

DELIMITER ;