import React, { useState } from 'react';
import { Box, Button, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import UploadIcon from "../../../../public/UploadIcon.png";


export interface imagesProps {
    images: File[];
    setImages: React.Dispatch<React.SetStateAction<File[]>>;
} 


const ImagesUpload = () => {
    const [images, setImages] = useState<File[]>([]);


    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const fileList = e.target.files;
        handleFiles(fileList);
    };

    const handleFiles = (fileList: FileList | null) => {
        const newImages: File[] = [];

        if (fileList) {
            for (let i = 0; i < fileList.length; i++) {
                const file = fileList[i];
                if (file.size <= 2 * 1024 * 1024) { 
                    newImages.push(file);
                    if (newImages.length === 5) break; 
                } else {
                    alert(`File ${file.name} exceeds the maximum size limit of 2MB.`);
                }
            }
        }

        setImages((prevImages) => [...prevImages, ...newImages.slice(0, 5 - prevImages.length)]);
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const fileList = e.dataTransfer.files;
        handleFiles(fileList);
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    };

    const handleDeleteImage = (index: number) => {
        setImages((prevImages) => prevImages.filter((_, i) => i !== index));
    };

    return (
        <Flex direction="column" alignItems="center" justifyContent="center" padding=".6rem">
            <form>
            <Flex
                width="100%"
                minWidth="50%"
                border="solid 1px #EFEFEF"
                borderRadius="6px"
                direction="column"
                alignItems="center"
                justifyContent="center"
                height="250px"
                m=".5rem"
                onDrop={handleDrop}
                onDragOver={handleDragOver}
            >
                <input
                    type="file"
                    accept="image/*"
                    multiple
                    style={{ display: 'none' }}
                    id="upload-button"
                    onChange={handleImageChange}
                />
                <label htmlFor="upload-button">
                    <Button as="span" mt="2">
                        <Flex direction="column" alignItems="center" justifyContent="center">
                            <Image src={UploadIcon} height={25} width={25} alt={''} />
                            <Text>Drag files or click to upload</Text>
                        </Flex>
                    </Button>
                </label>
            </Flex>

            <Flex>
                {images.map((image, index) => (
                    <Flex key={index} padding="3px" border="solid 1px #EFEFEF" bg="#FCFCFC" borderRadius="7px" margin="3px">
                        <img
                            src={URL.createObjectURL(image)}
                            alt={`Image ${index + 1}`}
                            style={{ width: '50%', height: '30px', marginRight: '5px', marginBottom: '5px' }}
                        />
                        <Text fontSize="9pt">{image.name}</Text>
                        <Button onClick={() => handleDeleteImage(index)} w="18px" h="18px" border="solid 1px"
                        borderRadius="50%">
                            X
                        </Button>
                    </Flex>
                ))}
            </Flex>
            </form>
        </Flex>
    );
};

export default ImagesUpload;
