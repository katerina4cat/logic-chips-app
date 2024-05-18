import cl from "./Modal.module.scss";
import { ViewModel, view } from "@yoskutik/react-vvm";
import { makeObservable } from "mobx";

interface RequiredProps {
    enabled: boolean;
    setEnabled: (e?: boolean) => void;
    modalBG?: string;
}

export class ModalViewModel extends ViewModel<
    undefined,
    React.HTMLAttributes<HTMLDivElement> & RequiredProps
> {
    constructor() {
        super();
        makeObservable(this);
    }
}
export const Modal = view(ModalViewModel)<
    React.HTMLAttributes<HTMLDivElement> & RequiredProps
>(({ viewModel }) => {
    return (
        <div
            className={`${cl.Modal}`}
            style={{
                display: viewModel.viewProps.enabled ? "flex" : "none",
            }}
            onClick={(e) => {
                e.stopPropagation();
                viewModel.viewProps.setEnabled(false);
            }}
        >
            <div
                {...viewModel.viewProps}
                onClick={(e) => {
                    e.stopPropagation();
                }}
                className={`${cl.ModalWindow} ${viewModel.viewProps.className}`}
                style={{
                    backgroundColor: viewModel.viewProps.modalBG
                        ? viewModel.viewProps.modalBG
                        : undefined,
                    ...viewModel.viewProps.style,
                }}
            />
        </div>
    );
});
