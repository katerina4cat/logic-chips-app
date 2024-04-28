import { action, makeObservable, observable } from "mobx";
import { UserSettings } from "./UserSettings";
import { userInfo } from "./Apis/Authentification";

class UserManager {
    @observable email: string = "-";
    @observable nick: string = "-";
    @observable photoUrl: string = "";
    @observable registered: Date = new Date(0);
    @observable coins: number = 0;
    @observable donate: number = 0;
    @observable signedIn = false;
    @observable settings = new UserSettings();
    @observable loaded = false;
    donateLevel = 0b1;

    constructor() {
        makeObservable(this);
        if ("accessToken" in localStorage) {
            userInfo();
        } else {
            this.loaded = true;
        }
    }

    @action public initWithError = () => {
        this.loaded = true;
    };

    @action public init = (info: {
        email: string;
        nick: string;
        photoUrl: string;
        registered: string;
        coins?: number;
        donate?: number;
    }): void => {
        this.email = info.email;
        this.nick = info.nick;
        this.photoUrl = info.photoUrl;
        this.registered = new Date(Date.parse(info.registered));
        this.coins = info.coins || 0;
        this.donate = info.donate || 0;
        this.signedIn = true;
        this.loaded = true;
    };

    @action logOut = () => {
        this.email = "-";
        this.nick = "-";
        this.photoUrl = "";
        this.coins = 0;
        this.donate = 0;
        this.registered = new Date(0);
        this.signedIn = false;
        localStorage.removeItem("accessToken");
    };
}
const userManager = new UserManager();
export default userManager;
export const userSettings = userManager.settings;
