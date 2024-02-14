import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import { Button, Flex, Box, Text } from '@chakra-ui/react';
import { Stepper, Step, StepLabel } from '@mui/material';
import BasicInformation from './Components/Form/BasicInformation';
import ImagesUpload from './Components/Form/ImagesUpload';
import ReviewInformation from './Components/Form/ReviewInformation';

const steps = [
    { label: 'Personal Information', component: BasicInformation },
    { label: 'Company Overview', component: ImagesUpload },
    { label: 'Review Information', component: ReviewInformation }
];

const MultiStepFormPage = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [selectedMake, setSelectedMake] = useState('');
    const [selectedModel, setSelectedModel] = useState('');
    const [selectedYear, setSelectedYear] = useState('');
    const [images, setImages] = useState<File[]>([]);

    const handleMakeChange = (make: string) => {
        setSelectedMake(make);
    };

    const handleModelChange = (model: string) => {
        setSelectedModel(model);
    };

    const handleYearChange = (year: string) => {
        setSelectedYear(year);
    };

    const handleNext = () => {
        setActiveStep(prevActiveStep => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
    };

    const handleSubmit = (values: any, { setSubmitting }: any) => {
        setSubmitting(false);
    };

    const CurrentStepComponent = steps[activeStep].component;

    return (
        <Box h="99vh" bg="#FAFAFA" alignContent="center" alignItems="center" fontFamily="cairo">
            <Flex
                w="100%"
                h="100%"
                bg="#F2F8FF"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                gap={50}
            >
                <Text fontWeight="bold" fontSize="30pt">Post Your Ad</Text>
                <Stepper activeStep={activeStep} alternativeLabel>
                    {steps.map(({ label }) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                <Flex
                    height="fit-content"
                    minHeight="300px"
                    width="800px"
                    maxW="90%"
                    justifyContent="center"
                    border="solid 1px #F7F7F7"
                    borderRadius="13px"
                    flexDirection="column"
                    bg="white"
                    padding="1rem"
                >
                    <CurrentStepComponent
                        selectedMake={selectedMake}
                        selectedModel={selectedModel}
                        selectedYear={selectedYear}
                        onMakeChange={handleMakeChange}
                        onModelChange={handleModelChange}
                        onYearChange={handleYearChange}
                        images={images}
                        setImages={setImages}
                    />
                </Flex>
                <Formik
                    initialValues={{}}
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting }) => (
                        <Form>
                            <Flex gap="10px">
                                {activeStep > 0 && (
                                    <Button width="170px" height="45px" bg="white" border="solid 1px #EFEFEF" borderRadius="5px" textColor="black" fontWeight="bold" type="button" onClick={handleBack}>
                                        Previous
                                    </Button>
                                )}
                                {activeStep < steps.length - 1 && (
                                    <Button width="170px" height="45px" bg="#2196F3" border="none" borderRadius="5px" textColor="white" fontWeight="bold" type="button" onClick={handleNext} disabled={isSubmitting}>
                                        Next
                                    </Button>
                                )}
                            </Flex>
                        </Form>
                    )}
                </Formik>
            </Flex>
        </Box>
    );
};

export default MultiStepFormPage;
