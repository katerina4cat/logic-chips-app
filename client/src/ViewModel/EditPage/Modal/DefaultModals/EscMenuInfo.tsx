import { ViewModel, view } from "@yoskutik/react-vvm";
import { makeObservable } from "mobx";
import { Options } from "../../../MainMenu/Informations/Options";
import { MainMenuViewModel } from "../../../MainMenu/MainMenu";

interface RequiredProps {
    closeEsc: () => void;
    toMainMenu: () => void;
}

export class EscMenuInfoViewModel extends ViewModel<
    MainMenuViewModel,
    React.HTMLAttributes<HTMLDivElement> & RequiredProps
> {
    constructor() {
        super();
        makeObservable(this);
    }
}

export const EscMenuInfo = view(EscMenuInfoViewModel)<RequiredProps>(
    ({ viewModel }) => {
        return (
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "stretch",
                }}
            >
                <h1 style={{ textAlign: "center" }}>Меню</h1>
                <button onClick={viewModel.viewProps.closeEsc}>
                    Продолжить
                </button>
                <button
                    onClick={() =>
                        viewModel.parent.setCurrentInfo(
                            <Options
                                backOther={
                                    <EscMenuInfo {...viewModel.viewProps} />
                                }
                            />
                        )
                    }
                >
                    Настройки
                </button>
                <button onClick={viewModel.viewProps.toMainMenu}>
                    Выйти в меню
                </button>
            </div>
        );
    }
);
