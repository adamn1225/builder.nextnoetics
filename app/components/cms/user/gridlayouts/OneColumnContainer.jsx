"use client";
import React from "react";
import { useNode, Element } from "@craftjs/core";
import { Container } from "../Container";

export const OneColumnContainer = ({ background, padding = 0, children, borderColor = 'gray-400' }) => {
    const { connectors: { connect, drag } } = useNode();

    return (
        <Container background={background} padding={padding} borderColor={borderColor}>
            <div ref={ref => connect(drag(ref))} style={{ display: 'grid', gridTemplateColumns: '1fr' }}>
                {children}
            </div>
        </Container>
    );
};

OneColumnContainer.craft = {
    rules: {
        canMoveIn: (incomingNodes) => incomingNodes.every(incomingNode => incomingNode.data.type === Element)
    }
};