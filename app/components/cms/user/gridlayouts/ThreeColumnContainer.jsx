"use client";
import React, { useRef, useEffect } from "react";
import { useNode, Element } from "@craftjs/core";
import { Container, ContainerSettings } from "../Container";

export const ThreeColumnContainer = ({ background, padding = 0, borderColor = 'gray-400' }) => {
    const { connectors: { connect, drag } } = useNode();
    const ref = useRef(null);

    useEffect(() => {
        if (ref.current) {
            connect(drag(ref.current));
        }
    }, [connect, drag]);

    return (
        <div ref={ref} style={{ background, padding: `${padding}px`, borderColor, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }} className="m-2 border-dotted border-2">
            <Element is={Container} id="column1" background={background} padding={padding} borderColor={borderColor} canvas />
            <Element is={Container} id="column2" background={background} padding={padding} borderColor={borderColor} canvas />
            <Element is={Container} id="column3" background={background} padding={padding} borderColor={borderColor} canvas />
        </div>
    );
};

ThreeColumnContainer.craft = {
    related: {
        settings: ContainerSettings
    }
};