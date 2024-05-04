export interface clientLoginByGoogle {
    googleID: string;
    email: string;
    photo: string;
    nick: string;
}

export interface clientLoginByEmail {
    email: string;
    password: string;
}

export interface serverUserInfo {
    accessToken: string;
    uuid: string;
    email: string;
    nick: string;
    photoUrl: string;
    registered: string;
    coins: number;
    donate: number;
}

export interface clientRegisterByEmail {
    email: string;
    nick: string;
    password: string;
}
