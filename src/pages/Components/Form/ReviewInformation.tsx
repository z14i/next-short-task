import React from 'react';
import { Flex, Text } from '@chakra-ui/react';

interface ReviewInformationProps {
    selectedMake: string;
    selectedModel: string;
    selectedYear: string;
    images: File[];
    setImages: React.Dispatch<React.SetStateAction<File[]>>;
}

const ReviewInformation: React.FC<ReviewInformationProps> = ({ selectedMake, selectedModel, selectedYear, images }) => {
    return (
        <Flex flexDirection="column" alignItems="center" gap={4}>
            <Text>Selected Make: {selectedMake}</Text>
            <Text>Selected Model: {selectedModel}</Text>
            <Text>Selected Year: {selectedYear}</Text>
            <Flex>
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={URL.createObjectURL(image)}
                        alt={`Image ${index + 1}`}
                        style={{ width: '150px', height: 'auto', marginRight: '10px' }}
                    />
                ))}
            </Flex>
        </Flex>
    );
};

export default ReviewInformation;
