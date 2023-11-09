import { CurrentChip } from "./pages/EditPage/CurrentChip";

export const debug = true;

function App() {
    const VisibleAllPinTitles = window.localStorage.getItem(
        "VisibleAllPinTitles"
    );
    const VisiblePinTitles = window.localStorage.getItem("VisiblePinTitles");
    return (
        //onContextMenu={(e) => e.preventDefault()}
        <div>
            <CurrentChip
                VisibleAllPinTitles={
                    VisibleAllPinTitles != null
                        ? VisibleAllPinTitles === "true"
                        : undefined
                }
                VisiblePinTitles={
                    VisiblePinTitles != null
                        ? VisiblePinTitles === "true"
                        : undefined
                }
                chipName={"NAND"}
            />
        </div>
    );
}

export default App;
