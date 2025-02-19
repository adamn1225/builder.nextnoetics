"use client";
import React, { useRef, useEffect } from "react";
import { useNode, Element } from "@craftjs/core";
import { Container, ContainerSettings } from "../Container";

export const ContainerOne = ({ children }) => {
    const { connectors: { connect, drag } } = useNode();
    return (
        <div ref={connect}>
            {children}
        </div>
    )
};

ContainerOne.craft = {
    rules: {
        canMoveIn: (incomingNodes) => incomingNodes.every(incomingNode => incomingNode.data.type === Container)
    }
};

export const ContainerTwo = ({ children }) => {
    const { connectors: { connect, drag } } = useNode();
    return (
        <div ref={connect}>
            {children}
        </div>
    )
};

ContainerTwo.craft = {
    rules: {
        canMoveIn: (incomingNodes) => incomingNodes.every(incomingNode => incomingNode.data.type === Container)
    }
};

export const ContainerThree = ({ children }) => {
    const { connectors: { connect, drag } } = useNode();
    return (
        <div ref={connect}>
            {children}
        </div>
    )
};

ContainerThree.craft = {
    rules: {
        canMoveIn: (incomingNodes) => incomingNodes.every(incomingNode => incomingNode.data.type === Container)
    }
};

export const ThreeColumnContainer = ({ background, padding = 0, borderColor = 'gray-400' }) => {
    const { connectors: { connect, drag } } = useNode();
    const ref = useRef(null);

    useEffect(() => {
        if (ref.current) {
            connect(drag(ref.current));
        }
    }, [connect, drag]);

    return (
        <Container style={{ background, padding: `${padding}px`, borderColor, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }} className="m-2 border-dotted border-2 w-full" ref={ref}>
            <div className="grid grid-cols-3 gap-2 text-nowrap -mx-2 w-full">
                <Element is={ContainerOne} id="column1" background={background} padding={padding} borderColor={borderColor} canvas >
                    <Container className="w-1/3" id="column1" background={background} padding={padding} borderColor={borderColor} canvas />
                </Element>
                <Element is={ContainerTwo} id="column2" background={background} padding={padding} borderColor={borderColor} canvas >
                    <Container className="w-1/3" id="column2" background={background} padding={padding} borderColor={borderColor} canvas />
                </Element>
                <Element is={ContainerThree} id="column3" background={background} padding={padding} borderColor={borderColor} canvas >
                    <Container className="w-1/3" id="column3" background={background} padding={padding} borderColor={borderColor} canvas />
                </Element>
            </div>
        </Container>
    );
};

ThreeColumnContainer.craft = {
    related: {
        settings: ContainerSettings
    }
};