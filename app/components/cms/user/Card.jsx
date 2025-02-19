"use client";
import React from "react";
import { Element, useNode } from "@craftjs/core";
import { Container, ContainerSettings } from "./Container";
import { TextArea, TextAreaSettings } from "./TextArea";
import { Header, HeaderSettings } from "./Header";
import { Button, ButtonSettings } from "./Button";

export const CardTop = ({ children }) => {
    const { connectors: { connect } } = useNode();
    return (
        <div ref={connect} className="text-only">
            {children}
        </div>
    );
};

CardTop.craft = {
    rules: {
        canMoveIn: (incomingNodes) => incomingNodes.every(incomingNode => incomingNode.data.type === Text || incomingNode.data.type === TextArea)
    }
};

export const CardBottom = ({ children }) => {
    const { connectors: { connect } } = useNode();
    return (
        <div ref={connect}>
            {children}
        </div>
    );
};

CardBottom.craft = {
    rules: {
        canMoveIn: (incomingNodes) => incomingNodes.every(incomingNode => incomingNode.data.type === Button)
    }
};

export const Card = ({ background, padding = 20 }) => {
    return (
        <Container background={background} padding={padding}>
            <Element is={CardTop} id="card-top" canvas>
                <Header text="Title" fontSize={20} />
                <Header text="Subtitle" fontSize={15} />
                <TextArea text="Description" fontSize={12} />
            </Element>
            <Element is={CardBottom} id="card-bottom" canvas>
                <Button size="small" variant="contained" color="primary">
                    Learn more
                </Button>
            </Element>
        </Container>
    );
};

Card.craft = {
    related: {
        settings: ContainerSettings
    }
};