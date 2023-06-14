import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Cards from './Cards'
import Star from './../../assets/images/Star.svg';


const Astrologer = () => {
    // const astrologers = []
    return (
        <Box w='100%' display='flex' alignItems='center' justifyContent='center'>
            <Box backgroundColor='#FFEFE3' w='90%'>
                <div style={{ color: 'D97122', textAlign: 'center', fontSize: '2rem', margin: '2rem 0px 1rem', color: '#D97122', display:'flex' , justifyContent:'center'}}>
                <Image src={Star} w='3rem' h='3rem'/> <Text>Premium Astrologers </Text> <Image src={Star} w='3rem' h='3rem'/> 
                </div>

                <Box w='100%' display='flex' flexWrap='wrap' backgroundColor='#FFEFE3' justifyContent='space-around'>
                    <Cards />
                    <Cards />
                    <Cards />
                    <Cards />
                    <Cards />
                    <Cards />
                    <Cards />
                    <Cards />
                    <Cards />
                </Box>
            </Box>
        </Box>
    )
}

export default Astrologer