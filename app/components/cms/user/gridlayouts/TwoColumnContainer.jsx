"use client";
import React, { useRef, useEffect } from "react";
import { useNode, Element } from "@craftjs/core";
import { Container, ContainerSettings } from "../Container";

export const FirstContainer = ({ children }) => {
    const { connectors: { connect, drag } } = useNode();
    return (
        <div ref={connect}>
            {children}
        </div>
    )
};

FirstContainer.craft = {
    rules: {
        canMoveIn: (incomingNodes) => incomingNodes.every(incomingNode => incomingNode.data.type === Container)
    }
};

export const SecondContainer = ({ children }) => {
    const { connectors: { connect, drag } } = useNode();
    return (
        <div ref={connect}>
            {children}
        </div>
    )
};

SecondContainer.craft = {
    rules: {
        canMoveIn: (incomingNodes) => incomingNodes.every(incomingNode => incomingNode.data.type === Container)
    }
};

export const TwoColumnContainer = ({ background, padding = 0, borderColor = 'gray-400' }) => {
    const { connectors: { connect, drag } } = useNode();
    const ref = useRef(null);

    useEffect(() => {
        if (ref.current) {
            connect(drag(ref.current));
        }
    }, [connect, drag]);

    return (
        <Container style={{ background, padding: `${padding}px`, borderColor, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }} className="m-2 border-dotted border-2 w-full" ref={ref}>
            <div className="grid grid-cols-2 gap-2 text-nowrap -mx-2 w-full">
                <Element is={FirstContainer} id="columnone" background={background} padding={padding} borderColor={borderColor} canvas >
                    <Container className="w-1/2" id="columnone" background={background} padding={padding} borderColor={borderColor} canvas />
                </Element>
                <Element is={SecondContainer} id="columntwo" background={background} padding={padding} borderColor={borderColor} canvas >
                    <Container className="w-1/2" id="columntwo" background={background} padding={padding} borderColor={borderColor} canvas />
                </Element>
            </div>
        </Container>
    );
};

TwoColumnContainer.craft = {
    related: {
        settings: ContainerSettings
    }
};