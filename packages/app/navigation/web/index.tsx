import * as React from 'react';

import { useLink } from "solito/link";
import { Menu } from "@tamagui/lucide-icons";

import "./nav.css";

const drawerWidth = 240;


import { Stack, XStack, YStack, ZStack, Text, Button, Square, AnimatePresence } from '@my/ui'


const MobileDrawer = (props) => {

  return (
  <AnimatePresence>
        {props.isVisible &&
        <ZStack
          zIndex={2}
          fullscreen
          onClick={props.clickHandler}
          opacity={1}
          key={"drawerContainer"}
        > 
          <XStack
            bc={"rgba(0,0,0,0.85)"}
            fullscreen
            animation={"medium"}
            exitStyle={{
              o: 0
            }}
          >
          </XStack>


          <YStack
              className='Drawer'
              zIndex={2002}
              bg={"$backgroundSoft"}
              height={"100%"}
              width={drawerWidth}
              ov={"scroll"}
              x={0}
              animation={"medium"}
              enterStyle={{
                x: 0-drawerWidth
              }}
              exitStyle={{
                x: 0-drawerWidth
              }}
            >
            <Text>Mobile Drawer</Text>
    
          </YStack>

          
        </ZStack>
        }
      </AnimatePresence>
  );
}

export const WebNavigation = ({children}: {children: React.ReactNode}) => {

  const signInLinkProps = useLink({
    href: "/signin",
  });

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  
  return (
    <ZStack bc={"$background"} flex={1}>
      
      <MobileDrawer isVisible={mobileOpen} clickHandler={handleDrawerToggle} />

      <XStack
        zi={1}
        className='AppBar'
        h={"$5"}
        ov={"hidden"}
        $gtMd={{pl: drawerWidth}}
        jc={"space-between"}
        bc={"$backgroundSoft"}
        elevation={2}
        bbw={1}
        bbc={"$borderColor"}
        ai={"center"}
        >
        <Stack f={1} ai={"flex-start"} w={"$2"} pl={"$2"}>
          <Button
            size={"$3"} p={"$1"} 
            onPress={handleDrawerToggle}
            chromeless icon={Menu} scaleIcon={2}
            $gtMd={{dsp: "none"}} />
        </Stack>
        <Stack f={2} ai={"center"}><Text fontFamily="$body">Test</Text></Stack>
        <Stack f={1} ai={"flex-end"} w={"$2"} pr={"$2"}>
          <Text fontFamily="$body">Test</Text>
        </Stack>
      </XStack> 
      
      <XStack>
        
        <YStack width={drawerWidth} bg={"$backgroundSoft"}
              className='Drawer' t={"$9"} b={0} f={1}
              ov={"scroll"} dsp={"none"} $gtMd={{dsp: "flex"}} brc={"$borderColor"} brw={1}>
          <Text>Desktop Drawer</Text>
          <Text>Desktop Drawer</Text>
          <Text>Desktop Drawer</Text>
          <Text>Desktop Drawer</Text>
          <Text>Desktop Drawer</Text>
          <Text>Desktop Drawer</Text>
        </YStack>
        
        <YStack f={1} top={"$9"} $md={{marginLeft: 0}} $gtMd={{marginLeft: drawerWidth}}>
          { children }
        </YStack>
        
      </XStack>

      
      
      
    </ZStack>
  );
}