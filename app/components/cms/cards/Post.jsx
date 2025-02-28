"use client";
import React, { useRef, useEffect } from "react";
import { Element, useNode } from "@craftjs/core";
import { Header } from "../user/Header";
import { ImageUpload } from "../user/ImageUpload";
import { IconsComponent } from "../cards/IconsComponent";

export const PostTop = ({ children }) => {
    const { connectors: { connect } } = useNode();
    return (
        <div ref={connect} className="text-only flex flex-col gap-10">
            {children}
        </div>
    );
};

PostTop.craft = {
    rules: {
        canMoveIn: (incomingNodes) => incomingNodes.every(incomingNode => 
            incomingNode.data.type === Header || 
            incomingNode.data.type === TextArea
        )
    }
};

export const Post = ({background, padding = 0, borderColor = 'gray-400', height = 'auto', width = '800px' }) => {
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
        style={{ background, padding: `${padding}px`, borderColor, height, width, maxWidth: '1200px', maxHeight: '628px', position: 'relative' }}
        className={`w-full`}
      >                   
        <span flex className="flex flex-col justify-center items-start gap-10">
         <span className="text-white"><Element is={Header} text="Company Logo" id="title" background={background} fontSize={28}/>
         </span>
           <span> 
            <Element is={Header} text="Subtitle" fontSize={20} id="subtitle" background={background}/></span>
        </span>
        <Element is={ImageUpload} id="image" width={1200} height={628} alt="" canvas style={{ position: 'absolute', bottom: '10px', left: '10px' }} />
      </div>
    );
};

export const PostSettings = () => {
    const { actions: { setProp }, background, padding, height, width, gap } = useNode((node) => ({
        background: node.data.props.background,
        padding: node.data.props.padding,
        height: node.data.props.height,
        width: node.data.props.width,
        gap: node.data.props.gap
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
                <input type="text" value={height} onChange={(e) => setProp((props) => props.height = e.target.value || 'auto')} className="w-full h-6 border border-gray-300 rounded-md" />
            </div>
            <div className="flex flex-col gap-2 mb-2">
                <label className="block text-sm font-medium text-gray-100">Width</label>
                <input type="text" value={width} onChange={(e) => setProp((props) => props.width = e.target.value || '800px')} className="w-full h-6 border border-gray-300 rounded-md" />
            </div>
            <div className="flex flex-col gap-2 mb-2">
                <label className="block text-sm font-medium text-gray-100">Gap</label>
                <input type="number" value={gap} onChange={(e) => setProp((props) => props.gap = e.target.value)} className="w-full h-6 border border-gray-300 rounded-md" />
            </div>
        </div>
    );
};

Post.craft = {
    displayName: "Post",
    props: {
        background: "#b3b3b3",
        padding: 20,
        height: 'auto',
        width: '800px',
        gap: 0
    },
    related: {
        settings: PostSettings
    },
    rules: {
        canDrop: () => true,
        canDrag: () => true,
        canMoveIn: () => true,
        canMoveOut: () => true
    },
    isCanvas: true
};