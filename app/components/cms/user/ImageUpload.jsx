"use client";
import React, { useState } from "react";
import Image from 'next/image';
import { useNode } from "@craftjs/core";

export const ImageUpload = ({ src, alt, width, height }) => {
    const { connectors: { connect, drag }, actions: { setProp } } = useNode();

    return (
        <div
            ref={ref => { if (ref) connect(drag(ref)); }}
            style={{ width, height }}>
            <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                layout="responsive"
            />
        </div>
    )
};

export const ImageUploadSettings = () => {
    const { actions: { setProp }, src, alt, width, height } = useNode((node) => ({
        src: node.data.props.src,
        alt: node.data.props.alt,
        width: node.data.props.width,
        height: node.data.props.height
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
                <label className="font-semibold text-sm underline">Width</label>
                <input
                    type="text"
                    value={width}
                    onChange={(e) => setProp((props) => props.width = e.target.value)}
                    className="w-full"
                />
                <label className="font-semibold text-sm underline">Height</label>
                <input
                    type="text"
                    value={height}
                    onChange={(e) => setProp((props) => props.height = e.target.value)}
                    className="w-full"
                />
            </form>
        </div>
    );
};

ImageUpload.craft = {
    props: { src: '', alt: '', width: 'auto', height: 'auto' },
    related: {
        settings: ImageUploadSettings
    }
};