"use client"
import { useState } from "react";
import Form from "next/form";
import styles from "./Tool.module.css";
import { Roboto_Mono } from "next/font/google";

const robotoMono = Roboto_Mono({
    weight: ["400"]
});

function PreviewBox({ baseItemStyle, animationProperties, children }) {
    const itemStyle = {...baseItemStyle, ...animationProperties};

    return (
        <div style={{
            margin: "30px",
            border: "1px solid navy",
            borderRadius: "20px",
            height: "200px",
            width: "200px",
            padding: "30px",
            boxSizing: "content-box"
        }}>
            <div style={ itemStyle }>{children}</div>
        </div>
    );
}

export default function Tool() {
    const [animationProperties, updateAnimationProperties] = useState({
        animationIterationCount: "infinite",
        
        animationName: styles.pulse,
        animationDuration: "1s",
        animationTimingFunction: "linear"
    });

    function PropertySelect({ propertyName, displayTitle, children }) {
        return (
            <div style={{
                marginBottom: "15px"
            }}>
                <label htmlFor={propertyName}>{displayTitle}: </label>
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
            <Form>
                <PropertySelect propertyName="animationName" displayTitle="Animation Choice">
                    <option value={styles.pulse}>Pulse</option>
                    <option value={styles.spin}>Spin</option>
                    <option value={styles.fade}>Fade</option>
                    <option value={styles.slide}>Slide</option>
                    <option value={styles.bounce}>Bounce</option>
                </PropertySelect>

                <PropertySelect propertyName="animationDuration" displayTitle="Animation Duration">
                    <option>0.2s</option>
                    <option>0.5s</option>
                    <option>1s</option>
                    <option>2s</option>
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
            
            <div style={{
                display: "flex",
                justifyContent: "center",
                flexFlow: "row wrap"
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
                    textShadow: "0px 0px 20px 10px #4f379e73",
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginTop: "50px"
                }} animationProperties={animationProperties}><span className={robotoMono.className}>E</span></PreviewBox>
                </div>
        </div>
    );
}