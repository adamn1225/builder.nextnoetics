"use client";
import React from 'react';
import { Editor, Frame, Element } from "@craftjs/core";
import { Toolbox } from './components/cms/Toolbox';
import { SettingsPanel } from './components/cms/SettingsPanel';
import { Container } from './components/cms/user/Container';
import { Button } from './components/cms/user/Button';
import { Card, CardTop, CardBottom } from './components/cms/user/Card';
import { Text } from './components/cms/user/Text';
import { TextArea } from './components/cms/user/TextArea';
import { OneColumnContainer } from './components/cms/user/gridlayouts/OneColumnContainer';
import { TwoColumnContainer } from './components/cms/user/gridlayouts/TwoColumnContainer';
import { ThreeColumnContainer } from './components/cms/user/gridlayouts/ThreeColumnContainer';

export default function App() {
  return (
    <div className='w-full h-screen'>
      <div className="pb-4 w-full h-full">
        <Editor resolver={{ Card, Button, Text, Container, CardTop, CardBottom, OneColumnContainer, TextArea, TwoColumnContainer, ThreeColumnContainer }}>
          <div className="w-full h-full flex">
            <div className="w-full h-full px-3 lg:mb-0">
              <Frame>
                <Element is={Container} padding={5} background="#eee" canvas>
                  <Card />
                  <ThreeColumnContainer background="#ddd" padding={10} borderColor="gray-400" />
                </Element>
              </Frame>
            </div>
            <div className="w-[18vw] max-w-[18vw] min-w-[18vw] bg-gray-950 h-full">
              <div className='w-full flex flex-col items-center gap-1 bg-gray-950 h-full'>
                <Toolbox />
                <SettingsPanel />
              </div>
            </div>
          </div>
        </Editor>
      </div>
    </div>
  );
}