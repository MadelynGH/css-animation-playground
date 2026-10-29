import Tool from "../_components/Tool.js";

export default function Page() {
    return (
        <div style={{
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            flexFlow: "column nowrap",
            alignItems: "center"
        }}>
            <h1 style={{
                marginBottom: "5vh"
            }} id="title">CSS Animation Playground</h1>
            <Tool />
        </div>
    );
}