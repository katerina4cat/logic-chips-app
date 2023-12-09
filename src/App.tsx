import { EditPage } from "./EditPage/EditPage";

export const debug = true;

function App() {
    let VisibleAllPinTitles: string | null | undefined | boolean =
        window.localStorage.getItem("VisibleAllPinTitles");
    let VisiblePinTitles: string | null | undefined | boolean =
        window.localStorage.getItem("VisiblePinTitles");

    VisiblePinTitles =
        VisiblePinTitles != null ? VisiblePinTitles === "true" : undefined;
    VisibleAllPinTitles =
        VisibleAllPinTitles != null
            ? VisibleAllPinTitles === "true"
            : undefined;
    return (
        //onContextMenu={(e) => e.preventDefault()}
        <div style={{ width: "100%", height: "100%" }}>
            <EditPage />
        </div>
    );
}

export default App;
