"use client";
import React, { useRef, useEffect, forwardRef } from 'react';
import { useEditor } from "@craftjs/core";
import { Container } from "./user/Container";
import { Card } from "./user/Card";
import { Header } from "./user/Header";
import { ImageUpload } from "./user/ImageUpload";
import { OneColumnContainer } from "./user/gridlayouts/OneColumnContainer";
import { TwoColumnContainer } from "./user/gridlayouts/TwoColumnContainer";
import { ThreeColumnContainer } from "./user/gridlayouts/ThreeColumnContainer";
import { Square } from "lucide-react";
import { IconsComponent } from "./cards/IconsComponent";
import { BeakerIcon } from '@heroicons/react/solid';

const DraggableButton = forwardRef((props, ref) => (
  <button ref={ref} {...props} />
));
DraggableButton.displayName = 'DraggableButton';

export const CardTools = () => {
  const { connectors } = useEditor();

  return (
    <div className="pt-10 h-screen">
      <div className="flex flex-col items-center space-y-2">
        <div className='text-nowrap mb-6'>
          <span className="text-xl underline underline-offset-8 font-bold text-cyan-400">Components</span>
        </div>
        <span className="text-lg underline underline-offset-8 font-semibold text-gray-100">Section Type</span>
        <span className="text-lg font-medium text-gray-100 pt-2">Grid Containers Selection</span>
        <div className="flex justify-center items-center w-fit h-auto gap-2 text-sm border-0 border-b-2 border-white pb-8">
          <DraggableButton ref={ref => { if (ref) connectors.create(ref, <TwoColumnContainer background="#fff" padding={10} />); }} className="btn-gradient p-2 grid grid-cols-2 justify-items-center place items-stretch gap-0 rounded "><Square className='text-gray-950' size={32} /><Square className='text-gray-950' size={32} /></DraggableButton>
          <DraggableButton ref={ref => { if (ref) connectors.create(ref, <ThreeColumnContainer background="#fff" padding={5} />); }} className="btn-gradient p-2 justify-items-center grid grid-cols-3 rounded"><Square className='text-gray-950' size={32}/><Square className='text-gray-950' size={32} /><Square className='text-gray-950' size={32} /></DraggableButton>
        </div>
        <span className="text-lg font-medium text-white pt-2">Add-on Components</span>
        <div className="grid grid-cols-1 gap-x-4 gap-y-2 w-3/4 text-nowrap mx-2 ">
          <DraggableButton ref={ref => { if (ref) connectors.create(ref, <Header text="Header" />); }} className="p-2 btn-gradient rounded text-center">Text</DraggableButton>  
          <DraggableButton ref={ref => { if (ref) connectors.create(ref, <ImageUpload src="" alt="" width="100%" height="auto" />); }} className="p-2 btn-gradient rounded text-center">ImageUpload</DraggableButton>
          <DraggableButton ref={ref => { if (ref) connectors.create(ref, <Container padding={0} background="#fff" canvas>{null}</Container>); }} className="p-2 btn-gradient rounded text-center">Container</DraggableButton>
          <DraggableButton ref={ref => { if (ref) connectors.create(ref, <IconsComponent icon="BeakerIcon" />); }} className="p-2 btn-gradient rounded text-center">Icon</DraggableButton>
        </div>
      </div>
    </div>
  );
};