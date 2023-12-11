<<<<<<< Updated upstream
import EditChip from "./pages/EditPage/EditChip";
=======
import { useRef } from "react";
import { EditPage } from "./ViewModel/EditPage";
>>>>>>> Stashed changes

export const debug = true;

type localStorage = string | null | undefined;

function App() {
    let VisibleAllPinTitles: localStorage | boolean =
        window.localStorage.getItem("VisibleAllPinTitles");
    let VisiblePinTitles: localStorage | boolean =
        window.localStorage.getItem("VisiblePinTitles");
    VisibleAllPinTitles =
        VisibleAllPinTitles != null
            ? VisibleAllPinTitles === "true"
            : undefined;
    VisiblePinTitles =
        VisiblePinTitles != null ? VisiblePinTitles === "true" : undefined;

    return (
        //onContextMenu={(e) => e.preventDefault()}
<<<<<<< Updated upstream
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
=======
        <>
            <EditPage />
        </>
>>>>>>> Stashed changes
    );
}

export default App;
