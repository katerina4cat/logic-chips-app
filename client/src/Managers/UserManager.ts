import { action, makeObservable, observable } from "mobx";
import { UserSettings } from "./UserSettings";
import { logout, userInfo } from "./Apis/Authentification";
import { serverUserInfo } from "@shared/models/authorization/exchangeTypes";

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
    donateLevel = 0b111;

    getCookie(cname: string) {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(";");
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == " ") {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    constructor() {
        makeObservable(this);
        console.log(this.getCookie("refreshToken"));
        if ("accessToken" in localStorage) {
            userInfo();
        } else {
            this.loaded = true;
        }
    }

    @action public initWithError = () => {
        this.loaded = true;
    };

    @action public init = (userData: serverUserInfo): void => {
        this.email = userData.email;
        this.nick = userData.nick;
        this.photoUrl = userData.photoUrl;
        this.registered = new Date(Date.parse(userData.registered));
        this.coins = userData.coins || 0;
        this.donate = userData.donate || 0;
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
        logout();
        localStorage.removeItem("accessToken");
    };
}
const userManager = new UserManager();
export default userManager;
export const userSettings = userManager.settings;
