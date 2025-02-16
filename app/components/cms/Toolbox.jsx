"use client";
import React, { useRef, useEffect, forwardRef } from 'react';
import { useEditor } from "@craftjs/core";
import { Container } from "./user/Container";
import { Card } from "./user/Card";
import { Button } from "./user/Button";
import { Text } from "./user/Text";
import { TextArea } from "./user/TextArea";
import { ImageUpload } from "./user/ImageUpload";
import { TwoColumnContainer } from "./user/gridlayouts/TwoColumnContainer";
import { ThreeColumnContainer } from "./user/gridlayouts/ThreeColumnContainer";

const DraggableButton = forwardRef((props, ref) => (
    <button ref={ref} {...props} />
));
DraggableButton.displayName = 'DraggableButton';

export const Toolbox = () => {
    const { connectors } = useEditor();
    const inputRef = useRef(null);

    useEffect(() => {
        if (inputRef.current) {
            connectors.create(inputRef.current, <div />);
        }
    }, [connectors]);

    return (
        <div className="pt-10">
            <div className="flex flex-col items-center space-y-2">
                <div className='text-nowrap mb-10'>
                    <span className="text-xl underline underline-offset-4 font-medium text-gray-100">Drag & Drop Components</span>
                </div>
                <div className="grid grid-cols-2 gap-2 w-full text-nowrap -mx-2">
                    <DraggableButton ref={ref => { if (ref) connectors.create(ref, <TwoColumnContainer background="#fff" padding={20} />); }} className="btn-gradient py-2 px-4 rounded">Two Column</DraggableButton>
                    <DraggableButton ref={ref => { if (ref) connectors.create(ref, <ThreeColumnContainer background="#fff" padding={20} />); }} className="btn-gradient py-2 px-4 rounded">Three Column</DraggableButton>
                    <DraggableButton ref={ref => { if (ref) connectors.create(ref, <Container padding={20} background="#fff" canvas>{null}</Container>); }} className="btn-gradient py-2 px-4 rounded">Container</DraggableButton>
                    <DraggableButton ref={ref => { if (ref) connectors.create(ref, <Text text="Hi world" />); }} className="btn-gradient py-2 px-4 rounded">Text</DraggableButton>
                    <DraggableButton ref={ref => { if (ref) connectors.create(ref, <Button size="small" variant="contained" color="secondary">Click me</Button>); }} className="btn-gradient py-2 px-4 rounded">Button</DraggableButton>
                    <DraggableButton ref={ref => { if (ref) connectors.create(ref, <Card background="#fff" padding={20} text="Card content" />); }} className="btn-gradient py-2 px-4 rounded">Card</DraggableButton>
                    <DraggableButton ref={ref => { if (ref) connectors.create(ref, <TextArea text="This is a text area" />); }} className="btn-gradient py-2 px-4 rounded">TextArea</DraggableButton>
                    <DraggableButton ref={ref => { if (ref) connectors.create(ref, <ImageUpload src="" alt="" width="100%" height="auto" />); }} className="btn-gradient py-2 px-4 rounded">ImageUpload</DraggableButton>
                </div>
            </div>
        </div>
    )
};