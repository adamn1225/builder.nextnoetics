"use client";
import React, { useRef, useEffect } from "react";
import Image from 'next/image';
import { useNode } from "@craftjs/core";

export const ImageUpload = ({ src = '/default-image.jpg', alt = 'Default Image', width = 300, height = 200, objectFit = 'cover', objectPosition = 'center', children }) => {
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
            style={{ width: `${width}px`, height: `${height}px` }}
            className="relative overflow-hidden"
        >
            <Image
                src={src}
                alt={alt}
                layout="fill"
                objectFit={objectFit}
                objectPosition={objectPosition}
            />
            <div className="absolute inset-0">
                {children}
            </div>
        </div>
    );
};

export const ImageUploadSettings = () => {
    const { actions: { setProp }, src, alt, width, height, objectFit, objectPosition } = useNode((node) => ({
        src: node.data.props.src,
        alt: node.data.props.alt,
        width: node.data.props.width,
        height: node.data.props.height,
        objectFit: node.data.props.objectFit,
        objectPosition: node.data.props.objectPosition
    }));

    return (
        <div className="mt-2">
            <form className="flex flex-col space-y-2 w-fit border border-gray-200 p-2 rounded-md bg-white">
                <label className="font-semibold text-sm underline">Image URL</label>
                <input
                    type="text"
                    value={src}
                    onChange={(e) => setProp((props) => props.src = e.target.value)}
                    className="w-full"
                />
                <label className="font-semibold text-sm underline">Alt Text</label>
                <input
                    type="text"
                    value={alt}
                    onChange={(e) => setProp((props) => props.alt = e.target.value)}
                    className="w-full"
                />
                <label className="font-semibold text-sm underline">Width (px)</label>
                <input
                    type="number"
                    value={width}
                    onChange={(e) => setProp((props) => props.width = parseInt(e.target.value))}
                    className="w-full"
                />
                <label className="font-semibold text-sm underline">Height (px)</label>
                <input
                    type="number"
                    value={height}
                    onChange={(e) => setProp((props) => props.height = parseInt(e.target.value))}
                    className="w-full"
                />
                <label className="font-semibold text-sm underline">Object Fit</label>
                <select
                    value={objectFit}
                    onChange={(e) => setProp((props) => props.objectFit = e.target.value)}
                    className="w-full"
                >
                    <option value="cover">Cover</option>
                    <option value="contain">Contain</option>
                </select>
                <label className="font-semibold text-sm underline">Object Position</label>
                <select
                    value={objectPosition}
                    onChange={(e) => setProp((props) => props.objectPosition = e.target.value)}
                    className="w-full"
                >
                    <option value="left">Left</option>
                    <option value="center">Center</option>
                    <option value="right">Right</option>
                </select>
            </form>
        </div>
    );
};

ImageUpload.craft = {
    props: { src: '/default-image.jpg', alt: 'Default Image', width: 300, height: 200, objectFit: 'cover', objectPosition: 'center' },
    related: {
        settings: ImageUploadSettings
    }
};