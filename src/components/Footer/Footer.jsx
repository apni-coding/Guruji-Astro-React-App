import { Box, Button, Input, Textarea, Image, Text, } from '@chakra-ui/react'
import React from 'react';
import Logo from './../../assets/images/logo.svg';
import Instagram from './../../assets/images/Instagram.svg';
import Razor from './../../assets/images/Razor.svg';
import './footer.css';

const Footer = () => {
    // width: 100 %;
    // height: 50vh;
    // background - color: #BD5300;
    // padding: 1.5rem 6.5rem;
    // display: flex;
    // align - items: center;
    // justify - content: center;
    return (
        <Box w='100%' h='50vh' backgroundColor='#BD5300' padding='1.5rem 6.5rem' display='flex' alignItems='center' justifyContent='center' color='white'>
            <Box w='30%' >
                <Image src={Logo} />
                <Text w='80%' fontSize='18px' marginBottom='1rem' >About Guruji s2 to 3 lines what guruji do and how it works About Guruji s2 to 3 lines what guruji do and how it works</Text>
                <Box display='flex' >
                    <div className='social-icon'><Image src={Instagram} /></div>
                    <div className='social-icon'><Image src={Instagram} /></div>
                    <div className='social-icon'><Image src={Instagram} /></div>
                    <div className='social-icon'><Image src={Instagram} /></div>
                </Box>
                <Text w='80%' fontSize='18px' margin='1rem 0px 0px'>Trusted & Seals</Text>
                <Box display='flex' justifyContent='space-between' padding='1rem 4rem 1rem 0px' flexWrap='wrap'>
                    <div className='payment-option'><Image src={Razor} /> </div>
                    <div className='payment-option'><Image src={Razor} /> </div>
                    <div className='payment-option'><Image src={Razor} /> </div>
                </Box>
            </Box>
            <Box w='15%' display='flex' flexDirection='column' justifyContent='center'>
                <Box>
                    <Text className='headings'>Company</Text>
                    <Text className='text'>Home</Text>
                    <Text className='text'>Home</Text>
                    <Text className='text'>Home</Text>
                    <Text className='text'>Home</Text>
                </Box>
                <Box>
                    <Text className='headings'>Collaborate</Text>
                    <Text className='text'>Youtube</Text>
                    <Text className='text'>Youtube</Text>
                    <Text className='text'>Youtube</Text>
                    <Text className='text'>Youtube</Text>
                </Box>
            </Box>
            <Box w='15%' display='flex' flexDirection='column' justifyContent='center'>
                <Box>
                    <Text className='headings'>Company</Text>
                    <Text className='text'>Home</Text>
                    <Text className='text'>Home</Text>
                    <Text className='text'>Home</Text>
                    <Text className='text'>Home</Text>
                </Box>
                <Box>
                    <Text className='headings'>Collaborate</Text>
                    <Text className='text'>Youtube</Text>
                    <Text className='text'>Youtube</Text>
                    <Text className='text'>Youtube</Text>
                    <Text className='text'>Youtube</Text>
                </Box>
            </Box>
            <Box w='30%'>
                <Input placeholder='Your Name' />
                <Input placeholder='Mail ID' />
                <Textarea placeholder='Your Query' />
                <Button>Submit</Button>
            </Box>
        </Box>
    )
}

export default Footer