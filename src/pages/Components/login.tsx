import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Button, Flex, Input, Text } from '@chakra-ui/react';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
   
    const router = useRouter();


    const handleLogin = () => {
        sessionStorage.setItem('user', JSON.stringify({ username }));
        router.push('../Form');
    };

    return (
        <Flex
            height="350px"
            maxHeight="500px"
            width="400px"
            maxW={"90%"}
            alignItems="center"
            justifyContent="center"
            margin="auto"
            border="solid 1px #F7F7F7"
            borderRadius="13px"
            flexDirection="column"
            bg={"white"}
        >

            <Text
                textColor="black"
                fontSize="24pt"
                fontFamily="Cairo"
                fontWeight="bold"
                mb={"15px"}
            >
                Log in
            </Text>

            <Flex
                flexDirection="column"
                width={"80%"}
                gap={6}
                minHeight={"250px"}
            >
                <Input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={username}
                    height={"45px"}
                    bg={"#FAFAFA"}
                    border={"solid 1px #EFEFEF"}
                    borderRadius={"5px"}
                    padding={"9px"}
                    textColor={"black"}
                />
                <Input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    height={"45px"}
                    bg={"#FAFAFA"}
                    border={"solid 1px #EFEFEF"}
                    borderRadius={"5px"}
                    padding={"9px"}
                    textColor={"black"}
                />
                <Button
                    height={"45px"}
                    bg={"#2196F3"}
                    border={"solid 1px #EFEFEF"}
                    borderRadius={"5px"}
                    padding={"9px"}
                    mt={"15px"}
                    textColor={"white"}
                    onClick={handleLogin}
                >
                    Login
                </Button>
            </Flex>

        </Flex>
    );
};

export default Login;
