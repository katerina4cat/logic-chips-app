import EditPage from "./pages/EditPage/EditPage";

function App() {
    return (
        <div onContextMenu={(e) => e.preventDefault()}>
            <EditPage />
        </div>
    );
}

export default App;
