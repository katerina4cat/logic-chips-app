import { CreateChip } from "./common/LoadSave/LoadSave";

export const debug = true;

function App() {
    const VisibleAllPinTitles = window.localStorage.getItem(
        "VisibleAllPinTitles"
    );
    const VisiblePinTitles = window.localStorage.getItem("VisiblePinTitles");
    return (
        //onContextMenu={(e) => e.preventDefault()}
        <div>
            <CreateChip chipName={"NAND"} chipID={0} isEditChip={true} />
        </div>
    );
}

export default App;
