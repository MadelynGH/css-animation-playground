"use client"
import { useState } from "react";
import Form from "next/form";
import styles from "./Tool.module.css";

function PreviewBox({ baseItemStyle, animationProperties }) {
   const itemStyle = Object.assign(baseItemStyle, animationProperties);

    return (
        <div style={{
            margin: "30px",
            border: "1px solid navy",
            padding: "40px",
            borderRadius: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }}>
            <div style={ itemStyle }></div>
        </div>
    );
}

export default function Tool() {
    const [animationName, updateAnimationName] = useState(styles.pulse);
    const animationProperties = {
        animationName: animationName,
        animationIterationCount: "infinite",
        animationDuration: "1s",
    };

    return (
        <div>
            <Form>
                <label htmlFor="animationName">Animation Choice: </label>
                <select id="animationName" value={animationName} onChange={e => {
                    updateAnimationName(e.target.value);
                }}>
                    <option value={styles.pulse}>Pulse</option>
                    <option value={styles.spin}>Spin</option>
                </select>
            </Form>
            
            <PreviewBox baseItemStyle={{
                    width: "100px",
                    height: "100px",
                    backgroundColor: "#4f379e",
                    boxShadow: "0px 0px 20px 10px #4f379e73",
                    borderRadius: "20px",
                    boxSizing: "content-box"
                }} animationProperties={animationProperties} />
        </div>
    );
}