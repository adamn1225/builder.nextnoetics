"use client";
import React from 'react';
import { Editor, Frame, Element } from "@craftjs/core";
import { Toolbox } from './components/cms/Toolbox';
import { SettingsPanel } from './components/cms/SettingsPanel';
import { Container } from './components/cms/user/Container';
import { Button } from './components/cms/user/Button';
import { Card, CardTop, CardBottom } from './components/cms/user/Card';
import { Header } from './components/cms/user/Header';
import { TextArea } from './components/cms/user/TextArea';
import { OneColumnContainer } from './components/cms/user/gridlayouts/OneColumnContainer';
import { TwoColumnContainer, FirstContainer, SecondContainer } from './components/cms/user/gridlayouts/TwoColumnContainer';
import { ContainerOne, ContainerTwo, ContainerThree, ThreeColumnContainer } from './components/cms/user/gridlayouts/ThreeColumnContainer';

export default function App() {
  return (
    <div className='w-full h-screen'>
      <div className="pb-4 w-full h-full">
        <Editor resolver={{ Card, Button, Header, Container, CardTop, CardBottom, ContainerOne, ContainerTwo, ContainerThree, OneColumnContainer, TextArea, TwoColumnContainer, ThreeColumnContainer, FirstContainer, SecondContainer }}>
          <div className="w-full h-full flex">
            <div className="w-full h-full px-3 lg:mb-0">
              <Frame>
                <Element is={Container} padding={5} background="#fff" canvas>
                  <Card />
                  <ThreeColumnContainer background="#fff" padding={10} borderColor="gray-400" />
                </Element>
              </Frame>
            </div>
            <div className="w-[20vw] max-w-[20vw] min-w-[20vw] bg-gray-950 h-full">
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