"use client";
import React from "react";
import { useNode, Element } from "@craftjs/core";
import { Container } from "../Container";

export const ContainerOne = ({ children }) => {
  const { connectors: { connect } } = useNode();
  return (
    <div ref={connect} style={{ padding: '10px', border: '1px solid #ccc' }}>
      {children}
    </div>
  );
};

ContainerOne.craft = {
  rules: {
    canMoveIn: (incomingNodes) => incomingNodes.every(incomingNode => incomingNode.data.type === Element)
  }
};

export const ContainerTwo = ({ children }) => {
  const { connectors: { connect } } = useNode();
  return (
    <div ref={connect} style={{ padding: '10px', border: '1px solid #ccc' }}>
      {children}
    </div>
  );
};

ContainerTwo.craft = {
  rules: {
    canMoveIn: (incomingNodes) => incomingNodes.every(incomingNode => incomingNode.data.type === Element)
  }
};

export const TwoColumnContainer = ({ background, padding = 0, borderColor = 'gray-400' }) => {
  const { connectors: { connect, drag } } = useNode();

  return (
    <Container background={background} padding={padding} borderColor={borderColor}>
      <div ref={ref => connect(drag(ref))} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
        <Element is={ContainerOne} canvas />
        <Element is={ContainerTwo} canvas />
      </div>
    </Container>
  );
};

TwoColumnContainer.craft = {
  rules: {
    canMoveIn: (incomingNodes) => incomingNodes.every(incomingNode => incomingNode.data.type === Element)
  }
};