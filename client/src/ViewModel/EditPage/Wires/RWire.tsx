import cl from "./RWire.module.scss";
import { Wire } from "../../../Simulating/Wire";
import { ViewModel, view } from "@yoskutik/react-vvm";
import { action, makeObservable, observable } from "mobx";
import { EditPageViewModel } from "../EditPageViewModel";
import { getColorWithState } from "../../../common/Colors";

interface RequiredProps {
    wire: Wire;
}

class WireViewModel extends ViewModel<EditPageViewModel, RequiredProps> {
    @observable wire = this.viewProps.wire;
    constructor() {
        super();
        makeObservable(this);
    }
    @action handleKeydown = (e: KeyboardEvent) => {
        if (e.key == "Backspace") this.parent.removeWire(this.wire);
    };
    protected onViewUnmounted(): void {
        document.removeEventListener("keydown", this.handleKeydown);
    }
}

export const RWire = view(WireViewModel)<RequiredProps>(({ viewModel }) => {
    return (
        <path
            className={cl.RWire}
            onMouseOver={() =>
                document.addEventListener("keydown", viewModel.handleKeydown)
            }
            onMouseOut={() =>
                document.removeEventListener("keydown", viewModel.handleKeydown)
            }
            stroke={getColorWithState(
                viewModel.wire.source.totalState,
                viewModel.wire.source.color
            )}
            d={viewModel.wire.drawWire}
        ></path>
    );
});
