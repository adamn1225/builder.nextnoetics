"use client";
import React from "react";
import { Text } from "./Text";
import { Button } from "./Button";
import { useNode } from "@craftjs/core";
import { Container } from "./Container";
import { TextArea } from "./TextArea";

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
    canMoveIn: (incomingNodes) => incomingNodes.every(incomingNode => incomingNode.data.type === Text)
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
      <CardTop>
          <Text text="Title" fontSize={20} />
          <Text text="Subtitle" fontSize={15} />
          <TextArea text="Description" fontSize={12} />
      </CardTop>
      <CardBottom>
        <Button size="small" variant="contained" color="primary">
          Learn more
        </Button>
      </CardBottom>
    </Container>
  );
};