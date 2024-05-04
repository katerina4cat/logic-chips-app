export const roots = {
    auth: {
        userInfo: "/api/users/info",
        loginByGoogle: "/api/users/login/google",
        loginByEmail: "/api/users/login/email",
        logout: "api/users/logout",
        refresh: "api/users/refresh",
        registerByEmail: "/api/users/register",
    },
    saves: {
        createSave: "/api/saves/createSave",
        createSaves: "/api/saves/createSaves",
        saveChip: "/api/saves/saveChip",
        deleteChip: "/api/saves/deleteChip",
        syncChanges: "/api/saves/getSync",
    },
};
