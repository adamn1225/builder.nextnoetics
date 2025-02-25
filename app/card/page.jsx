"use client";
import React from 'react';
import { Editor, Frame, Element } from "@craftjs/core";
import { Layers } from '@craftjs/layers';
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

const CardPage = () => {
  return (
    <div className='w-full h-screen flex'>
      <div className="w-full h-screen flex">
        <Editor resolver={{ Post, Button, Header, ImageUploadSettings, ImageUpload, Container, PostTop, TwoColumnContainer, ThreeColumnContainerSettings, TextArea, ThreeColumnContainer, TwoColumnContainerSettings, OneColumnContainer, OneColumnContainerSettings, CardsContainer, MainContainerSettings, ButtonSettings, CardSettings,  IconsComponent, IconsSettings }}>
          <div className="w-4/5 h-screen flex">
            <div className="w-full h-full px-20 mt-12 lg:mb-0">
              <Frame>
                <Element is={CardsContainer} padding={5} background="#fff" canvas>
                  <Element is={Post} padding={5} background={"fff"} />
                </Element>
              </Frame>
            </div>
          </div>
          <div className='fixed right-0 z-10 w-[20vw] max-w-[20vw] min-w-[20vw] bg-gray-950 h-full overflow-y-auto pb-20'>
            <div className='flex flex-col justify-center items-center gap-1 px-2 overflow-y-auto'>
              <CardTools />
              <SettingsPanel />
              <span className='bg-white w-full mt-4'><Layers expanded/></span>
            </div>
          </div>
        </Editor>
      </div>
    </div>
  );
}

export default CardPage;