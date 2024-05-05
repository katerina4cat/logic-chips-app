import { RWire } from "./Wires/RWire";
import { RWireIncomplete } from "./Wires/RWireIncomplete";
import { SidePinField } from "./SidePinField";
import { DefaultChip } from "./Chips/DefaultChip";
import { CircleAdding } from "./CircleAdding/CircleAdding";
import { Modal } from "./Modal/Modal";
import { SaveChip } from "./Modal/SaveChip";
import { ChipList } from "./Modal/ChipList";
import cl from "./EditPage.module.scss";
import { AddingChipsBox } from "./Chips/AddingChipsBox";
import { RBus } from "./Wires/RBus";
import { BusIncomplete } from "./Wires/RBusIncomplete";
import { view } from "@yoskutik/react-vvm";
import { EditPageViewModel } from "./EditPageViewModel";

export interface RequiredProps {
    saveName: string;
}

export const EditPage = view(EditPageViewModel)<RequiredProps>((props) => {
    const { viewModel } = props;
    return (
        <div className={cl.EditPage}>
            <svg
                className={cl.EditView}
                onClick={(e) => {
                    viewModel.wireIncompleteViewModel?.wirePointClick(e);
                    viewModel.clearSelection();
                }}
            >
                <RWireIncomplete />
                <BusIncomplete />

                <g
                    onClick={(e) => {
                        e.stopPropagation();
                    }}
                >
                    {viewModel.currentChip.wires.map((wire) => (
                        <RWire wire={wire} key={wire.id} />
                    ))}
                </g>
                <g>
                    {viewModel.currentChip.buses.map((bus) => (
                        <RBus Bus={bus} key={bus.id} />
                    ))}
                </g>
            </svg>
            <SidePinField Pins={viewModel.currentChip.input} isInput />
            <div className={cl.ChipField}>
                {viewModel.currentChip.subChips.map((chip) => (
                    <DefaultChip key={chip.id} chip={chip} />
                ))}
                <AddingChipsBox />
            </div>
            <SidePinField Pins={viewModel.currentChip.output} />
            <div>
                {viewModel.showCircleAdding.map((enabledI, i) => (
                    <CircleAdding
                        key={i}
                        circleID={i}
                        enabled={enabledI}
                        addNewChip={viewModel.setAddingChip}
                        setEnabled={(e: boolean) => {
                            viewModel.setCircleState(i, e);
                        }}
                        saveManager={viewModel.saveManager}
                    />
                ))}
            </div>
            <ChipList />
            {/** maximum 12 элементов */}
            <Modal
                setEnabled={viewModel.setModal}
                enabled={viewModel.modalActive}
            >
                <SaveChip
                    saveManager={viewModel.saveManager}
                    currentChip={viewModel.currentChip}
                    setEnabled={viewModel.setModal}
                />
            </Modal>
        </div>
    );
});
