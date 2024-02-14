import React from 'react';
import { Flex, Text, Select, Box } from '@chakra-ui/react';

export interface BasicInformationProps {
    selectedMake: string;
    selectedModel: string;
    selectedYear: string;
    onMakeChange: (make: string) => void;
    onModelChange: (model: string) => void;
    onYearChange: (year: string) => void;
}

const BasicInformation: React.FC<BasicInformationProps> = ({ selectedMake, selectedModel, selectedYear, onMakeChange, onModelChange, onYearChange }) => {
    
    return (
        <Flex flexDirection="column" gap={30} alignItems="center">
            <Box>
                <Text>Select a Make</Text>
                <Select
                    value={selectedMake}
                    onChange={(e) => onMakeChange(e.target.value)}
                    height="45px"
                    style={{ width: '30vw', maxWidth: '300px' }}
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
                    onChange={(e) => onModelChange(e.target.value)} 
                    height="45px"
                    style={{ width: '30vw', maxWidth: '300px' }}
                >
                    <option value="Model1">Model 1</option>
                    <option value="Model2">Model 2</option>
                    <option value="Model3">Model 3</option>
                </Select>
            </Box>
            <Box>
                <Text>Select a Year</Text>
                <Select
                    value={selectedYear}
                    onChange={(e) => onYearChange(e.target.value)} 
                    height="45px"
                    style={{ width: '30vw', maxWidth: '300px' }}
                >
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                </Select>
            </Box>
        </Flex>
    );
};

export default BasicInformation;
