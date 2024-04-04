import { ViewModel, view } from "@yoskutik/react-vvm";
import { action, makeObservable, observable } from "mobx";
import { MainMenuViewModel } from "../MainMenu";
import cl from "./HotKeys.module.scss";
import { userSettings } from "../../../Managers/UserManager";
import { Options } from "./Options";
import { defaultHotKeys, hotkeyInfo } from "../../../common/DefaultSettings";
import { hotKeyItem } from "../../../common/hotKeyItem";

interface RequiredProps {}

export class HotKeysViewModel extends ViewModel<
    MainMenuViewModel,
    RequiredProps
> {
    constructor() {
        super();
        makeObservable(this);
    }
    @observable changeSync = false;
    currentChanging?: hotKeyItem;
    @action setChangeSync = (value: boolean) =>
        localStorage.setItem("Sett:changeSync", value.toString());
    back = () => {
        this.parent.setCurrentInfo(<Options />);
    };
    onKeyDown = (e: KeyboardEvent) => {
        if (this.currentChanging) this.currentChanging.setKeys([e.code]);
        e.preventDefault();
        this.currentChanging = undefined;
        window.removeEventListener("keydown", this.onKeyDown);
    };
}

export const HotKeys = view(HotKeysViewModel)<RequiredProps>(
    ({ viewModel }) => {
        return (
            <>
                <h1 style={{ textAlign: "center" }}>Горячие клавиши</h1>
                <div className={cl.HotKeyEditor}>
                    {Object.keys(hotkeyInfo).map((hotkeyName) => {
                        const keyInfo = (
                            userSettings.hotKeys as unknown as {
                                [key: string]: hotKeyItem;
                            }
                        )[hotkeyName];
                        return (
                            <div className={cl.HotKeyElement}>
                                <div className={cl.HotkeyTitle}>
                                    {
                                        (
                                            hotkeyInfo as unknown as {
                                                [key: string]: {
                                                    title: string;
                                                };
                                            }
                                        )[hotkeyName].title
                                    }
                                </div>
                                <div className={cl.AdditionalKeys}>
                                    <div className={cl.Options}>
                                        <div className={cl.OptionKey}>
                                            <input
                                                type="checkbox"
                                                checked={keyInfo.altKey}
                                                onChange={(e) =>
                                                    keyInfo.setAlt(
                                                        e.target.checked
                                                    )
                                                }
                                            />
                                            alt
                                        </div>
                                        <div className={cl.OptionKey}>
                                            <input
                                                type="checkbox"
                                                checked={keyInfo.ctrlKey}
                                                onChange={(e) =>
                                                    keyInfo.setCtrl(
                                                        e.target.checked
                                                    )
                                                }
                                            />
                                            ctrl
                                        </div>
                                        <div className={cl.OptionKey}>
                                            <input
                                                type="checkbox"
                                                checked={keyInfo.shiftKey}
                                                onChange={(e) =>
                                                    keyInfo.setShift(
                                                        e.target.checked
                                                    )
                                                }
                                            />
                                            shift
                                        </div>
                                    </div>
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-evenly",
                                        }}
                                    >
                                        <button
                                            className={cl.KeyInfo}
                                            title="Нажмите для изменения клавиши"
                                            onClick={() => {
                                                viewModel.currentChanging =
                                                    keyInfo;
                                                window.addEventListener(
                                                    "keydown",
                                                    viewModel.onKeyDown
                                                );
                                            }}
                                        >
                                            {keyInfo.keys[0]}
                                        </button>
                                        <button
                                            className={cl.ResetButton}
                                            onClick={() =>
                                                keyInfo.setKeys(
                                                    (
                                                        defaultHotKeys as unknown as {
                                                            [
                                                                key: string
                                                            ]: hotKeyItem;
                                                        }
                                                    )[hotkeyName].keys
                                                )
                                            }
                                        >
                                            Сброс
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <button onClick={viewModel.back}>Назад</button>
            </>
        );
    }
);
