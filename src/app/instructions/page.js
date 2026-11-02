import Link from "next/link";

export const metadata = {
    title: "Instructions | CSS Animation Playground"
}

export default function Page() {
    return (
        <>
            <Link href="/" style={{
                    position: "fixed",
                    left: "25px",
                    top: "25px"
                }}>← Back to Tool</Link>
            <div style={{
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                flexFlow: "column nowrap",
                alignItems: "center",
                width: "50vw",
                marginLeft: "auto",
                marginRight: "auto",
                lineHeight: "1.7"
            }}>
                <h1 style={{
                    marginBottom: "0"
                }}>Instructions</h1>
                <h2>About the Tool</h2>
                    <p><b>CSS Animation Playground</b> is a tool that allows you to play with CSS animations. I created five different animations: Pulse, Spin, Fade, Slide, and Bounce. Certain CSS properties related to animations are customizable via dropdowns. (Note that the dropdowns may not include all possible property values.)</p>
                <h2>Dropdowns</h2>
                    <p>The tool includes three dropdowns, each for customizing a specific CSS property: <b>animation duration</b>, <b>animation timing function</b>, and <b>animation direction</b>. Here are some steps for changing a dropdown:</p>
                    <ol style={{
                        textAlign: "left",
                        margin: "0"
                    }}>
                        <li>Click on the dropdown box (looks like a rounded rectangle).</li>
                        <li>Click on your desired value.</li>
                    </ol>
                <h2>Previews</h2>
                    <p>In the tool, you'll see three preview boxes; the previews are designed to show you what your currently configured animation looks like. These each have an element in them that the animation gets applied to; the three preview elements are <b>a rounded square</b>, <b>a circle</b>, and <b>an "E" letterform</b>.</p>
                <h2>Code Snippet Copying</h2>
                    <p><b>DISCLAIMER: Code snippet copying can be used with Pulse, Spin, and Fade. It cannot be used with Slide and Bounce.</b>
                    <br />
                    As you are customizing and playing with the various properties, a CSS code snippet displayed below the preview boxes will update. If you want to copy the CSS code to use in your project, click the "Copy" button.<br />In your project, you will have to assign a CSS class of "[lowercase animation name]-animation" to the elements you would like the animation to be used on.</p>
            </div>
        </>
    );
}