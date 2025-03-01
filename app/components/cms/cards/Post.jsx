"use client";
import React, { useRef, useEffect } from "react";
import { Element, useNode } from "@craftjs/core";
import { Header } from "../user/Header";
import { ImageUpload } from "../user/ImageUpload";

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

export const Post = ({ background, padding = 0, borderColor = 'gray-400', height = 'auto', width = 'auto', containerType }) => {
    const { connectors: { connect, drag } } = useNode();
    const ref = useRef(null);

    useEffect(() => {
        if (ref.current) {
            connect(drag(ref.current));
        }
    }, [connect, drag]);

    const isFacebook = containerType === 'facebook';
    const isInstagram = containerType === 'instagram';

    const containerStyles = {
        background,
        padding: `${padding}px`,
        borderColor,
        height: isFacebook ? '628px' : '1080px',
        width: isFacebook ? '1200px' : '1350px',
        maxWidth: isFacebook ? '1200px' : '1350px',
        maxHeight: isFacebook ? '628px' : '1080px',
        position: 'relative'
    };

    return (    
        <div
        ref={ref}
        style={containerStyles}
        className={`w-full`}
      >                   
        <span flex className="flex flex-col justify-center items-start gap-10">
         <span className="text-white"><Element is={Header} text="Company Logo" id="title" background={background} fontSize={isFacebook ? 28 : 24}/>
         </span>
           <span> 
            <Element is={Header} text="Subtitle" fontSize={isFacebook ? 20 : 18} id="subtitle" background={background}/></span>
        </span>
        <Element is={ImageUpload} id="image" width={isFacebook ? 1200 : 1350} height={isFacebook ? 628 : 1080} alt="" canvas style={{ position: 'absolute', bottom: '10px', left: '10px' }} />
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