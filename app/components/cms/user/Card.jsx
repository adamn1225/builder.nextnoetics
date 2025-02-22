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
        canMoveIn: (incomingNodes) => incomingNodes.every(incomingNode => 
            incomingNode.data.type === Header || 
            incomingNode.data.type === TextArea || 
            incomingNode.data.type === Button
        )
    }
};

export const Card = ({ background, padding = 20 }) => {
    return (
        <Container background={background} padding={padding}>
            <Element is={CardTop} id="card-top" canvas>
                <Header text="Title" fontSize={20} />
                <Header text="Subtitle" fontSize={15} />
                <TextArea text="Small excerpt about your services" fontSize={18} />
                <Container padding={5} height={5} background="#fff">
                <Button size="small" variant="contained" color="primary">
                        Learn more
                    </Button>
            </Container>
            </Element>
        </Container>
    );
};

Card.craft = {
    related: {
        settings: ContainerSettings
    },
    rules: {
        canMoveIn: () => {
            return true; // Allow any node to move in
        },
        canDrag: () => {
            return true;
        },
        canDrop: () => {
            return true;
         }
    }
};