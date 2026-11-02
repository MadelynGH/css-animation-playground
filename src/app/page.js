import Tool from "../_components/Tool.js";
import Link from "next/link";

export default function Page() {
    return (
        <>
            <Link href="/instructions" style={{
                    position: "fixed",
                    left: "25px",
                    top: "25px"
                }}>View Instructions</Link>
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
        </>
    );
}