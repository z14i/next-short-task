import React, { useState } from 'react';
import { Flex, Text, Select, Box } from '@chakra-ui/react';


const BasicInformation = () => {
    const [selectedMake, setSelectedMake] = useState('');
    const [selectedModel, setSelectedModel] = useState('');
    const [selectedYear, setSelectedYear] = useState('');

    const handleMakeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedMake(event.target.value);
    };
    const handleModelChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedModel(event.target.value);
    };
    const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedYear(event.target.value);
    };

    return (
        <Flex 
        flexDirection="column"
        gap={30}
        alignItems="center"
 >
<form>
        <Flex gap={30}>
            <Box>
                <Text>Select a Make</Text>
                <Select
                    value={selectedMake}
                    onChange={handleMakeChange}
                    height={"45px"}
                    style={{ width: "30vw", maxWidth: "300px" }}
                >
                    <option value="Make1">Make 1</option>
                    <option value="Make2">Make 2</option>
                    <option value="Make3">Make 3</option>
                </Select>
            </Box>
            <Box>
                <Text>Select a Model</Text>
                <Select
                    value={selectedModel}
                    onChange={handleModelChange}
                    height={"45px"}
                    style={{ width: "30vw", maxWidth: "300px" }}
                >
                    <option value="Model1">Model 1</option>
                    <option value="Model2">Model 2</option>
                    <option value="Model3">Model 3</option>
                </Select>
            </Box>
           
        </Flex>
        <Box>
                <Text>Select a Year</Text>
                <Select
                    value={selectedYear}
                    onChange={handleYearChange}
                    height={"45px"}
                    style={{ width: "30vw", maxWidth: "300px" }}
                >
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                </Select>
            </Box>
        
            </form>
        </Flex>    );
};

export default BasicInformation;
