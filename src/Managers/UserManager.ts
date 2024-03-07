class UserManager {
    private _email: string = "-";
    private _nick: string = "-";
    private _photoUrl: string = "";
    private _registered: Date = new Date(0);
    private _coins: number = 0;
    private _donate: number = 0;
    signedIn = false;

    listeners: Array<() => void> = [];

    private sendListeners = () =>
        this.listeners.forEach((listener) => listener());

    constructor() {}

    public init = (info: {
        email: string;
        nick: string;
        photoUrl: string;
        registered: string;
        coins?: number;
        donate?: number;
    }): void => {
        this._email = info.email;
        this._nick = info.nick;
        this._photoUrl = info.photoUrl;
        this._registered = new Date(Date.parse(info.registered));
        this._coins = info.coins || 0;
        this._donate = info.donate || 0;
        this.signedIn = true;
        this.sendListeners();
    };

    public get email(): string {
        return this._email;
    }
    public set email(value: string) {
        this._email = value;
        this.sendListeners();
    }
    public get nick(): string {
        return this._nick;
    }
    public set nick(value: string) {
        this._nick = value;
        this.sendListeners();
    }
    public get photoUrl(): string {
        return this._photoUrl;
    }
    public set photoUrl(value: string) {
        this._photoUrl = value;
        this.sendListeners();
    }
    public get registered(): Date {
        return this._registered;
    }
    public set registered(value: Date) {
        this._registered = value;
        this.sendListeners();
    }
    public get coins(): number {
        return this._coins;
    }
    public set coins(value: number) {
        this._coins = value;
        this.sendListeners();
    }
    public get donate(): number {
        return this._donate;
    }
    public set donate(value: number) {
        this._donate = value;
        this.sendListeners();
    }
}
export default new UserManager();
