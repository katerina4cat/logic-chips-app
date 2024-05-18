import { ViewModel, view } from "@yoskutik/react-vvm";
import { makeObservable } from "mobx";
import { Modal } from "../Modal";
import { EditPageViewModel } from "../../EditPage";
import { EscMenuInfo } from "./EscMenuInfo";
import { MainMenu } from "../../../MainMenu/MainMenu";

interface RequiredProps {}

export class EscMenuViewModel extends ViewModel<
    EditPageViewModel,
    React.HTMLAttributes<HTMLDivElement> & RequiredProps
> {
    constructor() {
        super();
        makeObservable(this);
    }
}

export const EscMenu = view(EscMenuViewModel)<RequiredProps>(
    ({ viewModel }) => {
        return (
            <Modal
                enabled={viewModel.parent.statesManager.escWindow}
                setEnabled={viewModel.parent.statesManager.switchEscWindow}
                style={{ padding: "2em" }}
            >
                {viewModel.parent.statesManager.escWindow && (
                    <MainMenu
                        startInfo={
                            <EscMenuInfo
                                closeEsc={() =>
                                    viewModel.parent.statesManager.switchEscWindow(
                                        false
                                    )
                                }
                                toMainMenu={() =>
                                    viewModel.parent.parent.setCurrentPage(
                                        <MainMenu />
                                    )
                                }
                            />
                        }
                    />
                )}
            </Modal>
        );
    }
);
