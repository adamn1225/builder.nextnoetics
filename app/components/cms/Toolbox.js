"use client";
import React, { useRef, useEffect, forwardRef } from 'react';
import { Element, useEditor } from "@craftjs/core";
import { Container } from "./user/Container";
import { Card } from "./user/Card";
import { Button } from "./user/Button";
import { Text } from "./user/Text";
import { TextArea } from "./user/TextArea";

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
        <div className="px-2">
            <div className="flex flex-col items-center space-y-2">
                <div className='text-nowrap'>
                    <span style={{ padding: '8px' }} className="text-xl underline font-semibold text-gray-100">Drag to add</span>
                </div>
                <div className="flex flex-col space-y-2 w-full text-nowrap">
                    <DraggableButton ref={ref => { if (ref) connectors.create(ref, <Element is={Container} padding={20} background="#fff" canvas>{null}</Element>); }} className="btn-gradient py-2 px-4 rounded">Container</DraggableButton>
                    <DraggableButton ref={ref => { if (ref) connectors.create(ref, <Text text="Hi world" />); }} className="btn-gradient py-2 px-4 rounded">Text</DraggableButton>
                    <DraggableButton ref={ref => { if (ref) connectors.create(ref, <Button size="small" variant="contained" color="secondary">Click me</Button>); }} className="btn-gradient py-2 px-4 rounded">Button</DraggableButton>
                    <DraggableButton ref={ref => { if (ref) connectors.create(ref, <Card background="#fff" padding={20} text="Card content" />); }} className="btn-gradient py-2 px-4 rounded">Card</DraggableButton>
                    <DraggableButton ref={ref => { if (ref) connectors.create(ref, <TextArea text="This is a text area" />); }} className="btn-gradient py-2 px-4 rounded">TextArea</DraggableButton>
                </div>
            </div>
        </div>
    )
};