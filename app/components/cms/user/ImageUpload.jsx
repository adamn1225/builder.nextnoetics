"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from 'next/image';
import { Link2, Link2Off } from 'lucide-react';
import { useNode, Element } from "@craftjs/core";
import FetchImages from './FetchImages';

export const ImageUpload = ({ src = '/default-image.jpg', alt = '', width = '100%', height = 'auto', objectFit = 'cover', objectPosition = 'center', overlayColor = 'transparent', overlayOpacity = 0.4, children }) => {
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
      <div
        className="absolute inset-0"
        style={{ backgroundColor: overlayColor, opacity: overlayOpacity, zIndex: 1 }}
      />
      <div className="absolute inset-0 z-10">
        {children}
      </div>
    </div>
  );
};

export const ImageUploadSettings = () => {
    const { actions: { setProp }, src, alt, width, height, objectFit, objectPosition, opacity, overlayColor, overlayOpacity } = useNode((node) => ({
      src: node.data.props.src,
      alt: node.data.props.alt,
      width: node.data.props.width,
      height: node.data.props.height,
      objectFit: node.data.props.objectFit,
      objectPosition: node.data.props.objectPosition,
      opacity: node.data.props.opacity,
      overlayColor: node.data.props.overlayColor,
      overlayOpacity: node.data.props.overlayOpacity
    }));
  
    const [showImageLibrary, setShowImageLibrary] = useState(false);
    const [linkedDimensions, setLinkedDimensions] = useState(true);
  
    const handleSelectImage = (url) => {
      setProp((props) => props.src = url);
      setShowImageLibrary(false);
    };
  
    const handleImageUpload = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setProp((props) => props.src = reader.result);
        };
        reader.readAsDataURL(file);
      }
    };
  
    const handleWidthChange = (e) => {
      const newWidth = e.target.value;
      setProp((props) => props.width = newWidth);
      if (linkedDimensions) {
        const aspectRatio = width / height;
        setProp((props) => props.height = newWidth / aspectRatio);
      }
    };
  
    const handleHeightChange = (e) => {
      const newHeight = e.target.value;
      setProp((props) => props.height = newHeight);
      if (linkedDimensions) {
        const aspectRatio = width / height;
        setProp((props) => props.width = newHeight * aspectRatio);
      }
    };
  
    return (
      <div className="mt-2 flex justify-center">
        <form className="flex flex-col space-y-2 w-fit border border-gray-200 p-2 rounded-md bg-gray-950 text-gray-50">
          <button
            type="button"
            onClick={() => setShowImageLibrary(!showImageLibrary)}
            className="w-full bg-blue-500 text-white py-2 rounded"
          >
            {showImageLibrary ? 'Hide Image Library' : 'Show Image Library'}
          </button>
          {showImageLibrary && <FetchImages onSelectImage={handleSelectImage} />}
          <div className="w-full flex items-end justify-start">
           <span className="w-fit flex flex-col items-center justify-center">
              <label className="w-full font-semibold text-sm text-nowrap">Upload Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="w-full text-gray-950"
              />
           </span>
           <span className="w-full flex flex-col items-start justify-center">
              <label className="font-semibold text-sm">Alt Text</label>
              <input
                type="text"
                placeholder="Alt Text"
                value={alt}
                onChange={(e) => setProp((props) => props.alt = e.target.value)}
                className="w-full p-1 text-gray-950"
              />
           </span>
            
          </div>
            <h3 className="font-semibold text-base text-center underline">Alter Image</h3>
          <div className="flex items-end justify-evenly gap-1">
            <span className="flex flex-col items-start justify-center">
              <label className="font-semibold text-sm">Overlay Color</label>
              <input
                type="color"
                value={overlayColor}
                onChange={(e) => setProp((props) => props.overlayColor = e.target.value)}
                className="w-full text-gray-950 -p-1"
              />
            </span>
                        <span className="flex flex-col items-start justify-center">
              <label className="font-semibold text-sm">Overlay Opacity</label>
              <input
            type="number"
            value={overlayOpacity}
            min="0"
            max="1"
            step="0.1"
            onChange={(e) => setProp((props) => props.overlayOpacity = e.target.value)}
                className="w-full px-1 text-gray-950"
              />
            </span>
          </div>
          <div className="flex items-end justify-center gap-1">
            <label className="font-semibold text-sm underline">Width
              <input
                type="number"
                value={width}
                onChange={handleWidthChange}
                className="w-full text-gray-950 p-1"
              />
            </label>
            <span className="flex flex-col items-center justify-center gap-2">
              <button
                type="button"
                onClick={() => setLinkedDimensions(!linkedDimensions)}
                className="text-gray-50 p-1"
              >
                {linkedDimensions ? <Link2 /> : <Link2Off />}
              </button>
            </span>
            <label className="font-semibold text-sm underline">Height
              <input
                type="number"
                value={height}
                onChange={handleHeightChange}
                className="w-full text-gray-950 p-1"
              />
            </label>
          </div>
          <label className="font-semibold text-sm underline">Object Fit</label>
          <select
            value={objectFit}
            onChange={(e) => setProp((props) => props.objectFit = e.target.value)}
            className="w-full text-gray-950 p-1"
          >
            <option value="cover">Cover</option>
            <option value="contain">Contain</option>
          </select>
          <label className="font-semibold text-sm underline">Object Position</label>
          <select
            value={objectPosition}
            onChange={(e) => setProp((props) => props.objectPosition = e.target.value)}
            className="w-full text-gray-950 p-1"
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
    props: { src: '/default-image.jpg', alt: '', width: '100%', height: 'auto', objectFit: 'cover', objectPosition: 'center', opacity: 1, overlayColor: '#000', overlayOpacity: 0.4 },
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