"use client";
import React from 'react';
import { Toolbox } from '@/app/components/cms/Toolbox';
import { SettingsPanel } from '@/app/components/cms/SettingsPanel';
import { Container } from '@/app/components/cms/user/Container';
import { Button } from '@/app/components/cms/user/Button';
import { Card, CardTop, CardBottom } from '@/app/components/cms/user/Card';
import { Text } from '@/app/components/cms/user/Text';
import { Editor, Frame, Element } from "@craftjs/core";

export default function App() {
  return (
    <div className='w-full h-screen'>
      <div className="pb-4 w-full h-full">
        <Editor resolver={{ Card, Button, Text, Container, CardTop, CardBottom }}>
          <div className="w-full h-full flex">
            <div className="w-full h-full px-3 lg:mb-0">
              <Frame className="h-screen page-canvas">
                <Element is={Container} padding={5} background="white" canvas>
                  <Card background="#fff" text="Sample Text" />
                  <Text size="small" text="Hi world!" />
                  <Container padding={6} background="gray-600">
                    <Text size="small" text="It's me again!" />
                  </Container>
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