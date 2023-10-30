import EditChip from "./pages/EditPage/EditChip";

export const debug = true;

function App() {
    const VisibleAllPinTitles = window.localStorage.getItem(
        "VisibleAllPinTitles"
    );
    const VisiblePinTitles = window.localStorage.getItem("VisiblePinTitles");
    return (
        //onContextMenu={(e) => e.preventDefault()}
        <div>
            <EditChip
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
            />
        </div>
    );
}

export default App;
