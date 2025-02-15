"use client";
import React from 'react';
import { Toolbox } from '../components/cms/Toolbox';
import { SettingsPanel } from '../components/cms/SettingsPanel';
import { Container } from '../components/cms/user/Container';
import { Button } from '../components/cms/user/Button';
import { Card, CardTop, CardBottom } from '../components/cms/user/Card';
import { Text } from '../components/cms/user/Text';
import { Editor, Frame, Element } from "@craftjs/core";

export default function App() {
  return (
    <div className='w-full bg-gray-950 p-1 over'>
      <div className="py-4 pb-4 w-full">
        <Editor resolver={{ Card, Button, Text, Container, CardTop, CardBottom }}>
          <div className="w-full flex flex-wrap">
            <div className="w-full px-3 mb-6 lg:mb-0">
              <Frame>
                <Element is={Container} padding={5} background="white" canvas>
                  <Card background="#fff" text="Sample Text" />
                  <Text size="small" text="Hi world!" />
                  <Container padding={6} background="gray-600">
                    <Text size="small" text="It's me again!" />
                  </Container>
                </Element>
              </Frame>
            </div>
            <div className="w-[25vw] max-w-[25vw] min-w-[25vw] mt-2 bg-gray-950">
                <div className='max-w-[20vw] min-w-[20vw] flex flex-col gap-1 bg-gray-950'>
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