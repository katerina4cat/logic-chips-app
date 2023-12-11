import { EditPage } from "./ViewModel/EditPage";

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
        <>
            <EditPage />
        </>
    );
}

export default App;
