"use client";
import React, { useRef, useEffect } from "react";
import { useNode, Element } from "@craftjs/core";
import { Container } from "../Container";

export const Column = ({ children }) => {
    const { connectors: { connect, drag } } = useNode();
    return (
        <div ref={(ref) => connect(drag(ref))} className="border-2 border-dashed border-gray-300 p-2">
            {children}
        </div>
    );
};

Column.craft = {
    rules: {
        canMoveIn: (incomingNodes) => {
            // Allow any type of node to be moved in
            return true;
        }
    }
};

export const ThreeColumnContainer = ({ background, padding = 0, borderColor = 'gray-400', height = '', gap = '4', layout = 'grid' }) => {
    const { connectors: { connect, drag } } = useNode();
    const ref = useRef(null);

    useEffect(() => {
        if (ref.current) {
            connect(drag(ref.current));
        }
    }, [connect, drag]);

    // Conditional Tailwind classes for flex or grid layout
    const layoutClass = layout === "grid"
        ? `grid grid-cols-1 md:grid-cols-3 gap-${gap}`
        : "flex flex-col gap-2";

    return (
        <div
            ref={ref}
            style={{ background, padding: `${padding}px`, borderColor, height: height || 'auto' }}
            className={`m-2 border-dotted border-2 w-full ${layoutClass}`}
        >
            <Element is={Column} id="column1" canvas>
                <Container background={background} padding={padding} />
            </Element>
            <Element is={Column} id="column2" canvas>
                <Container background={background} padding={padding} />
            </Element>
            <Element is={Column} id="column3" canvas>
                <Container background={background} padding={padding} />
            </Element>
        </div>
    );
};

export const ThreeColumnContainerSettings = () => {
    const { actions: { setProp }, background, padding, height, gap, layout } = useNode((node) => ({
        background: node.data.props.background,
        padding: node.data.props.padding,
        height: node.data.props.height,
        gap: node.data.props.gap,
        layout: node.data.props.layout
    }));

    return (
        <div>
            <div className="flex flex-col gap-2 mb-2">
                <label className="block text-sm font-medium text-gray-100">Background Color</label>
                <input type="color" value={background} onChange={(e) => setProp((props) => props.background = e.target.value)} className="w-full h-6 border border-gray-300 rounded-md" />
            </div>
            <div className="flex flex-col gap-2 mb-2">
                <label className="block text-sm font-medium text-gray-100">Padding</label>
                <input type="number" value={padding} onChange={(e) => setProp((props) => props.padding = e.target.value)} className="w-full h-6 border border-gray-300 rounded-md" />
            </div>
            <div className="flex flex-col gap-2 mb-2">
                <label className="block text-sm font-medium text-gray-100">Height</label>
                <input type="text" value={height || ''} onChange={(e) => setProp((props) => props.height = e.target.value || 'auto')} className="w-full h-6 border border-gray-300 rounded-md" />
            </div>
            <div className="flex flex-col gap-2 mb-2">
                <label className="block text-sm font-medium text-gray-100">Gap</label>
                <input type="number" value={gap} onChange={(e) => setProp((props) => props.gap = e.target.value)} className="w-full h-6 border border-gray-300 rounded-md" />
            </div>
            <div className="flex flex-col gap-2 mb-2">
                <label className="block text-sm font-medium text-gray-100">Layout</label>
                <select
                    value={layout}
                    onChange={(e) => setProp((props) => props.layout = e.target.value)}
                    className="w-full h-8 border border-gray-300 rounded-md"
                >
                    <option value="grid">Grid</option>
                    <option value="flex">Flex Column</option>
                </select>
            </div>
        </div>
    );
};

ThreeColumnContainer.craft = {
    related: {
        settings: ThreeColumnContainerSettings
    }
};