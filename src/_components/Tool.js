"use client"
import React, { useState, useEffect } from "react";
import Form from "next/form";
import  "./Tool.css";
import { Roboto_Mono, Montserrat } from "next/font/google";

const robotoMono = Roboto_Mono({
    weight: ["400"]
});

const montserrat = Montserrat({
    weight: ["300", "400", "500", "600", "700", "800"]
});

const animations = {
pulse: 
`@keyframes pulse {
    0% {transform: scale(1);}
    50% {transform: scale(1.2);}
    100% {transform: scale(1);}
}`,

spin: 
`@keyframes spin {
    from {transform: rotate(0);}
    to {transform: rotate(360deg)}
}`,

fade: 
`@keyframes fade {
    0% {opacity: 100;}
    50% {opacity: 0;}
    100% {opacity: 100;}
}`,

slide: `Code not available for the Slide animation. Sorry!`,

bounce: `Code not available for the Bounce animation. Sorry!`};

function PreviewBox({ baseItemStyle, animationProperties, children }) {
    const itemStyle = {...baseItemStyle, ...animationProperties};

    return (
        <div style={{
            margin: "30px",
            border: "1px solid navy",
            borderRadius: "35px",
            height: "200px",
            width: "200px",
            padding: "30px",
            boxSizing: "content-box",
            backgroundColor: "white",
            boxShadow: "0px 0px 20px 10px #ffffff73"
        }}>
            <div style={ itemStyle }>{children}</div>
        </div>
    );
}

function formatAnimationProperties(animationProperties) {
    if (animationProperties["animationName"] != "slide" && animationProperties["animationName"] != "bounce") {
        return `
.${animationProperties.animationName}-animation {
    animation-iteration-count: infinite;
    animation-name: ${animationProperties["animationName"]};
    animation-duration: ${animationProperties["animationDuration"]};
    animation-timing-function: ${animationProperties["animationTimingFunction"]};
    animation-direction: ${animationProperties["animationDirection"]};
}`;
    } else {
        return "";
    }
}

export default function Tool() {
    const [animationProperties, updateAnimationProperties] = useState({
        animationIterationCount: "infinite",
        
        animationName: "pulse",
        animationDuration: "1s",
        animationTimingFunction: "linear",
        animationDirection: "normal"
    });
    const [currentCode, updateCurrentCode] = useState(
`${animations[animationProperties.animationName]}

${formatAnimationProperties(animationProperties)}`);
    const [copiedIndicatorList, updateCopiedIndicatorList] = useState([]);

    useEffect(() => {updateCurrentCode(
`${animations[animationProperties.animationName]}

${formatAnimationProperties(animationProperties)}`)}, [animationProperties]);

    function PropertySelect({ propertyName, displayTitle, children }) {
        return (
            <div style={{
                marginBottom: "20px"
            }}>
                <label htmlFor={propertyName} style={{
                    fontWeight: "500",
                    color: "navy"
                }}>{displayTitle}: </label>
                <select id={propertyName} value={animationProperties[propertyName]} onChange={e => {
                    let tempAnimationProperties = {...animationProperties};
                    tempAnimationProperties[propertyName] = e.target.value;
                    updateAnimationProperties(tempAnimationProperties);
                }}>
                    {children}
                </select>
            </div>
        );
    }

    return (
        <div>
            <Form style={{
                marginTop: "12px",
                marginBottom: "40px"
            }}>
                <PropertySelect propertyName="animationName" displayTitle="Animation Choice">
                    <option value={"pulse"}>Pulse</option>
                    <option value={"spin"}>Spin</option>
                    <option value={"fade"}>Fade</option>
                    <option value={"slide"}>Slide</option>
                    <option value={"bounce"}>Bounce</option>
                </PropertySelect>

                <PropertySelect propertyName="animationDuration" displayTitle="Animation Duration">
                    <option>1s</option>
                    <option>2s</option>
                    <option>3s</option>
                    <option>4s</option>
                </PropertySelect>

                <PropertySelect propertyName="animationTimingFunction" displayTitle="Animation Timing Function">
                    <option value="linear">Linear</option>
                    <option value="ease">Ease</option>
                    <option value="ease-in">Ease In</option>
                    <option value="ease-out">Ease Out</option>
                    <option value="step-start">Step Start</option>
                    <option value="step-end">Step End</option>
                </PropertySelect>

                <PropertySelect propertyName="animationDirection" displayTitle="Animation Direction">
                    <option value="normal">Normal</option>
                    <option value="reverse">Reverse</option>
                    <option value="alternate">Alternate</option>
                    <option value="alternate-reverse">Alternate Reverse</option>
                </PropertySelect>
            </Form>

            <hr />
            
            <div style={{
                display: "flex",
                justifyContent: "center",
                flexFlow: "row wrap",
                marginBottom: "20px",
                marginTop: "20px"
            }}>
                <PreviewBox baseItemStyle={{
                        width: "100px",
                        height: "100px",
                        backgroundColor: "#4f379e",
                        boxShadow: "0px 0px 20px 10px #4f379e73",
                        borderRadius: "20px",
                        marginLeft: "auto",
                        marginRight: "auto",
                        marginTop: "50px"
                    }} animationProperties={animationProperties} />
                <PreviewBox baseItemStyle={{
                        width: "100px",
                        height: "100px",
                        backgroundColor: "#4f379e",
                        boxShadow: "0px 0px 20px 10px #4f379e73",
                        borderRadius: "50px",
                        marginLeft: "auto",
                        marginRight: "auto",
                        marginTop: "50px"
                    }} animationProperties={animationProperties} />
                <PreviewBox baseItemStyle={{
                    width: "100px",
                    height: "100px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "6em",
                    color: "#4f379e",
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginTop: "50px",
                    textShadow: "0px 0px 15px #4f379e73"
                }} animationProperties={animationProperties}><span className={robotoMono.className}>E</span></PreviewBox>
            </div>

            <hr />

            <div style={{
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginTop: "40px",
                    width: "60vw",
                    textAlign: "left",
                    width: "fit-content",
                    backgroundColor: "#00042d",
                    color: "white",
                    padding: "0",
                    borderRadius: "20px",
                    boxShadow: "0px 0px 15px 5px #261a4c5f"
                }}>
                <pre style={{
                    padding: "20px"
                }}>
                    <code>{currentCode}</code>
                </pre>
                <div style={{
                    width: "100%",
                    display: "flex",
                    flexFlow: "row nowrap",
                    justifyContent: "space-between",
                    alignItems: "end"
                }}>
                    <p style={{
                        margin: "12px",
                        marginBottom: "8px",
                        height: "1.5em"
                    }}>{copiedIndicatorList[copiedIndicatorList.length-1]}</p>
                    <button style={{
                        backgroundColor: "#00042d",
                        color: "white",
                        border: "1.5px solid white",
                        borderRightColor: "transparent",
                        borderBottomColor: "transparent",
                        borderRadius: "8px 0 20px 0",
                        padding: "8px",
                        fontSize: "1em"
                    }} onClick={() => {
                        navigator.clipboard.writeText(currentCode);
                        let tempCopiedIndicatorList = copiedIndicatorList.slice();
                        tempCopiedIndicatorList.push(<span style={{
                            animationIterationCount: "1",
                            animationName: "copied-fadeInOut",
                            animationDuration: "2s",
                            animationTimingFunction: "ease-in",
                            opacity: "0",
                            fontSize: "1em"
                    }} key={copiedIndicatorList.length}>Copied!</span>)
                    updateCopiedIndicatorList(tempCopiedIndicatorList);
                    }} className={`${montserrat.className} copyButton`}>❏ Copy</button>
                </div>
            </div>
        </div>
    );
}