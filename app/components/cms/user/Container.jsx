"use client";
import React, { useRef, useEffect } from "react";
import { useNode } from "@craftjs/core";

export const Container = ({ background, padding = 0, children }) => {
    const { connectors: { connect, drag } } = useNode();
    const ref = useRef(null);

    useEffect(() => {
        if (ref.current) {
            connect(drag(ref.current));
        }
    }, [connect, drag]);

    return (
        <div
            ref={ref}
            style={{ background, padding: `${padding}px` }}
            className="m-2 border-dotted border-2 min-h-[100px] relative"
        >
            {children}
        </div>
    );
};

export const ContainerSettings = () => {
    const { actions: { setProp }, background, padding } = useNode((node) => ({
        background: node.data.props.background,
        padding: node.data.props.padding
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
        </div>
    );
};

Container.craft = {
    related: {
        settings: ContainerSettings
    }
};