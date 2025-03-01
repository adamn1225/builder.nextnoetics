"use client";
import React, { useState, useEffect } from 'react';
import { Editor, Frame, Element } from "@craftjs/core";
import { CardTools } from './cms/CardTools';
import { Layers } from '@craftjs/layers';
import { FbContainerSettings, FbContainer } from './cms/cards/FbContainer';
import { SettingsPanel } from './cms/SettingsPanel';
import { Container } from './cms/user/Container';
import { Button, ButtonSettings } from './cms/user/Button';
import { CardSettings } from './cms/user/Card';
import { Post, PostTop } from './cms/cards/Post';
import { Header } from './cms/user/Header';
import { TextArea } from './cms/user/TextArea';
import { ImageUpload, ImageUploadSettings } from './cms/user/ImageUpload';
import { OneColumnContainer, OneColumnContainerSettings } from './cms/user/gridlayouts/OneColumnContainer';
import { TwoColumnContainerSettings, TwoColumnContainer } from './cms/user/gridlayouts/TwoColumnContainer';
import { ThreeColumnContainer, ThreeColumnContainerSettings } from './cms/user/gridlayouts/ThreeColumnContainer';
import { MainContainerSettings } from './cms/MainContainer';
import { IconsComponent, IconsSettings } from './cms/cards/IconsComponent';
import SaveTemplate from './SaveTemplate';
import StoredTemplates from './StoredTemplates';
import CustomModal from './CustomModal';
import { Topbar } from './cms/Topbar';
import { IgContainer, IgContainerSettings } from './cms/cards/IgContainer';
import UrlConverter from './UrlConverter';

const SmmCards = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState('Facebook');
  const [convertedData, setConvertedData] = useState(null);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleCardChange = (card) => {
    setSelectedCard(card);
  };

  const handleConvert = (data) => {
    setConvertedData(data);
  };

  useEffect(() => {
    // This effect will run whenever convertedData changes
    console.log('Converted data updated:', convertedData);
  }, [convertedData]);

  return (
    <div className='w-full h-screen bg-white dark:bg-gray-800 overflow-x-hidden'>
      <Editor resolver={{ Post, Button, Header, ImageUploadSettings, ImageUpload, Container, PostTop, TwoColumnContainer, ThreeColumnContainerSettings, TextArea, ThreeColumnContainer, TwoColumnContainerSettings, OneColumnContainer, OneColumnContainerSettings, FbContainerSettings, FbContainer, MainContainerSettings, ButtonSettings, CardSettings, IconsComponent, IconsSettings, IgContainer, IgContainerSettings, Post }} >
        <UrlConverter onConvert={handleConvert} className="url-converter-sidebar" />
        <div className="grid grid-cols-[3fr_1fr] h-full w-full ml-10 lg:mb-0">
          <div className='flex justify-center items-normal mt-24 h-full w-full'>
            {selectedCard === 'Facebook' && (
              <Frame>
                <Element is={FbContainer} canvas>
                  <Element is={Post} padding={15} background={"#fff"} containerType="facebook" h1={convertedData?.h1} h2={convertedData?.h2} img={convertedData?.img} />
                </Element>
              </Frame>
            )}
            {selectedCard === 'Instagram' && (
              <Frame>
                <div className='flex justify-center items-center h-full w-full'>
                  <div style={{ transform: 'scale(0.5)', transformOrigin: 'top left' }}>
                    <Element is={IgContainer} canvas>
                      <Element is={Post} padding={15} background={"#fff"} containerType="instagram" h1={convertedData?.h1} h2={convertedData?.h2} img={convertedData?.img} />
                    </Element>
                  </div>
                </div>
              </Frame>
            )}
          </div>
          <div className='fixed right-0 top-0 z-10 w-[20vw] max-w-[20vw] min-w-[20vw] bg-stone-900 h-full overflow-y-auto'>
              <Topbar />
            <div className='flex flex-col justify-center items-center gap-1 px-2 overflow-y-auto'>
              <h1 className='text-white text-2xl font-bold'>Social Media Card Types</h1>
              <select className='bg-white border border-gray-300 rounded-md p-2' value={selectedCard} onChange={(e) => handleCardChange(e.target.value)}>
                <option value="Facebook">Facebook Card</option>
                <option value="Instagram">Instagram Card</option>
              </select>
              <CardTools />
              <SettingsPanel />
              <span className='bg-white w-full mt-4'><Layers expanded/></span>
              <button onClick={openModal} className="text-gradient font-bold border border-1 border-primary p-2 text-center mt-4 hover:bg-primary hover:text-white ">
                Save Template
              </button>
              <div className='w-full mt-8 bg-white p-4'>
                <StoredTemplates />
              </div>
            </div>
          </div>
        </div>
      </Editor>

      <CustomModal isOpen={modalIsOpen} onClose={closeModal}>
        <SaveTemplate />
      </CustomModal>
    </div>
  );
}

export default SmmCards;