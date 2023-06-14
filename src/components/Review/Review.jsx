import React from 'react';
import './review.css';
import Vector from './../../assets/images/Vector.svg';
import User1 from './../../assets/images/User1.svg';
import { Box, Image, position, Text } from '@chakra-ui/react';

const Review = () => {
    // padding: 5rem 10rem;
    // text - align: center;
    // font - size: 17px;
    // font - weight: 500;
    return (
        <div style={{ width: '100%', height: '54vh', marginBottom: '3rem', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }} className='container'>
            <Box w='80%' h='44vh' backgroundColor='#F2D2BA' padding='2% 3%' display='flex' flexDirection='column' alignItems='center'>
                <h1 style={{ marginBottom: '2%' }}>User Review</h1>
                <Box textAlign='center' fontSize='17px' fontWeight='500' backgroundColor='#FFF5EE' w='70%' h='80%' color='#5B2800' padding='5rem 10rem'>
                    <Text>Explore the Mysteries of the Universe with Our Expert Astrology Services Explore the Mysteries of the Universe with Our Expert Astrology ServicesExplore the Mysteries of the Universe with </Text>
                </Box>
                <Box display='flex' position='absolute' bottom='4rem' w='35%' justifyContent='space-between' alignItems='center'>
                    <Image src={User1} className='profile-image' />
                    <Image src={User1} className='profile-image' />
                    <Image src={User1} className='profile-image' />
                    <Image src={User1} className='profile-image center-image' />
                    <Image src={User1} className='profile-image' />
                    <Image src={User1} className='profile-image' />
                    <Image src={User1} className='profile-image' />
                </Box>
            </Box>
            <Image src={Vector} width='80.5%' h='11vh' />
        </div>
    )
}

export default Review