"use client";
import React from 'react';
import { Editor, Frame, Element } from "@craftjs/core";
import { CardTools } from '../components/cms/CardTools';
import { CardsContainer } from '../components/cms/cards/CardsContainer';
import { SettingsPanel } from '../components/cms/SettingsPanel';
import { Container } from '../components/cms/user/Container';
import { Button, ButtonSettings } from '../components/cms/user/Button';
import { Card, CardTop, CardSettings } from '../components/cms/user/Card';
import { Post, PostTop } from '../components/cms/cards/Post';
import { Header } from '../components/cms/user/Header';
import { TextArea } from '../components/cms/user/TextArea';
import { ImageUpload, ImageUploadSettings } from '../components/cms/user/ImageUpload';
import { OneColumnContainer, OneColumnContainerSettings } from '../components/cms/user/gridlayouts/OneColumnContainer';
import { TwoColumnContainerSettings, TwoColumnContainer } from '../components/cms/user/gridlayouts/TwoColumnContainer';
import { ThreeColumnContainer, ThreeColumnContainerSettings } from '../components/cms/user/gridlayouts/ThreeColumnContainer';
import { MainContainer, MainContainerSettings } from '../components/cms/MainContainer';
import { IconsComponent, IconsSettings } from '../components/cms/cards/IconsComponent';

export default function App() {
  return (
    <div className='w-full h-screen'>
      <div className="pb-4 w-full h-screen">
        <Editor resolver={{ Post, Button, Header, ImageUploadSettings, ImageUpload, Container, PostTop, TwoColumnContainer, ThreeColumnContainerSettings, TextArea, ThreeColumnContainer, TwoColumnContainerSettings, OneColumnContainer, OneColumnContainerSettings, CardsContainer, MainContainerSettings, ButtonSettings, CardSettings, IconsComponent, IconsSettings }}>
          <div className="w-full h-full flex">
            <div className="w-full h-full px-20 mt-12 lg:mb-0">
              <Frame>
                <Element is={CardsContainer} padding={5} background="#fff" canvas>
                  <Post />
                </Element>
              </Frame>
            </div>
            <div className="w-[20vw] max-w-[20vw] min-w-[20vw] bg-gray-950 h-[100vh]">
              <div className='w-full flex flex-col items-center gap-1 bg-gray-950 h-screen'>
                <CardTools />
                <SettingsPanel />
              </div>
            </div>
          </div>
        </Editor>
      </div>
    </div>
  );
}