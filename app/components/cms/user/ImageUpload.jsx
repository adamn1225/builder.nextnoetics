"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from 'next/image';
import { useNode, Element } from "@craftjs/core";
import FetchImages from './FetchImages';

export const ImageUpload = ({ src = '/default-image.jpg', alt = 'Default Image', width = '100%', height = 'auto', objectFit = 'cover', objectPosition = 'center', children }) => {
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
            style={{ width, height }}
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
  
    const [showImageLibrary, setShowImageLibrary] = useState(false);
  
    const handleSelectImage = (url) => {
      setProp((props) => props.src = url);
      setShowImageLibrary(false);
    };

    return (
        <div className="mt-2 flex justify-center">
        <form className="flex flex-col space-y-2 w-fit border border-gray-200 p-2 rounded-md bg-gray-950 text-gray-950">
          <button
            type="button"
            onClick={() => setShowImageLibrary(!showImageLibrary)}
            className="w-full bg-blue-500 text-white py-2 rounded"
          >
            {showImageLibrary ? 'Hide Image Library' : 'Show Image Library'}
          </button>
          {showImageLibrary && <FetchImages onSelectImage={handleSelectImage} />}
          <label className="font-semibold text-sm underline text-white">Alt Text</label>
          <input
            type="text"
            value={alt}
            onChange={(e) => setProp((props) => props.alt = e.target.value)}
            className="w-full text-gray-950"
          />
          <label className="font-semibold text-sm underline text-white text-white">Object Fit</label>
          <select
            value={objectFit}
            onChange={(e) => setProp((props) => props.objectFit = e.target.value)}
            className="w-full text-gray-950"
          >
            <option value="cover">Cover</option>
            <option value="contain">Contain</option>
          </select>
          <label className="font-semibold text-sm underline text-white">Object Position</label>
          <select
            value={objectPosition}
            onChange={(e) => setProp((props) => props.objectPosition = e.target.value)}
            className="w-full text-gray-950"
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
    props: { src: '/default-image.jpg', alt: 'Default Image', width: '100%', height: 'auto', objectFit: 'cover', objectPosition: 'center' },
    related: {
        settings: ImageUploadSettings
    },
    rules: {
        canDrop: () => true,
        canDrag: () => true,
        canMoveIn: () => true,
        canMoveOut: () => true
    },
    isCanvas: true,
};