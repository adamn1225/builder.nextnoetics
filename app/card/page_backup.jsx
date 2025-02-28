// "use client";
// import React from 'react';
// import { Editor, Frame, Element } from "@craftjs/core";
// import { Toolbox } from '@components/cms/Toolbox';
// import { SettingsPanel } from '@components/cms/SettingsPanel';
// import { Container } from '@components/cms/user/Container';
// import { Button, ButtonSettings } from '@components/cms/user/Button';
// import { Card, CardTop, CardSettings } from '@components/cms/user/Card';
// import { Header } from '@components/cms/user/Header';
// import { TextArea } from '@components/cms/user/TextArea';
// import { OneColumnContainer, OneColumnContainerSettings } from '@components/cms/user/gridlayouts/OneColumnContainer';
// import { TwoColumnContainerSettings, TwoColumnContainer } from '@components/cms/user/gridlayouts/TwoColumnContainer';
// import { ThreeColumnContainer, ThreeColumnContainerSettings } from '@components/cms/user/gridlayouts/ThreeColumnContainer';
// import {MainContainer, MainContainerSettings} from '@components/cms/MainContainer';

// export default function App() {
//   return (
//     <div className='w-full h-screen'>
//       <div className="pb-4 w-full h-screen">
//         <Editor resolver={{ Card, Button, Header, Container, CardTop, TwoColumnContainer, ThreeColumnContainerSettings, TextArea, ThreeColumnContainer, TwoColumnContainerSettings, OneColumnContainer, OneColumnContainerSettings, MainContainer, MainContainerSettings, ButtonSettings, CardSettings }}>
//           <div className="w-full h-full flex">
//             <div className="w-full h-full px-20 mt-12 lg:mb-0">
//               <Frame>
//                 <Element is={MainContainer} padding={5} background="#fff" canvas>
//                   <Card />
//                   <ThreeColumnContainer background="#fff" padding={10} borderColor="gray-400" height=""  layout="grid" />
//                   {/* <TwoColumnContainer background="#fff" padding={10} borderColor="gray-400" height="" layout="grid" /> */}
//                 </Element>
//               </Frame>
//             </div>
//             <div className="w-[20vw] max-w-[20vw] min-w-[20vw] bg-gray-950 h-full">
//               <div className='w-full flex flex-col items-center gap-1 bg-gray-950 h-full'>
//                 <Toolbox />
//                 <SettingsPanel />
//               </div>
//             </div>
//           </div>
//         </Editor>
//       </div>
//     </div>
//   );
// }