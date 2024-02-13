import Head from "next/head";
import Login from "./Components/login";
import { Box, Flex } from "@chakra-ui/react";
import Image from "next/image";
import logo from "../../public/RWG.png"


export default function Home() {
  return (
    <>
    
      <Head>
        <title>Next Short Task</title>
        <meta name="description" content="Done by Abdulrahim" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

        <main>

          {/* Header */}
        


        <Box
         
          h="99vh" 
                      bg="#FAFAFA"
          alignContent="center"
          alignItems="center" 
        >
          <Flex
            w="100%" 
            h="100%" 
            bg="#F2F8FF"
            
            
>
          <Login />
          </Flex>
        </Box>
      </main>
      
    </>
  );
}
