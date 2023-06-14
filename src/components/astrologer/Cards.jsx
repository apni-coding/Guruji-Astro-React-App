import React from 'react';
import { Card, CardBody, CardFooter, Button, Divider, ButtonGroup, Image, Stack, Heading, Text, Box } from '@chakra-ui/react'
import Banner from './../../assets/images/User1.svg';
import './astrologer.css';
import Star from './../../assets/images/Star.svg';

const Cards = () => {
  return (
    <Card w='27%' className='profile-card' h='50vh' overflow='hidden' border='1px solid #A74800' borderRadius='8px'>
      <CardBody background={`url(${Banner})`} p='0px' backgroundPosition='center' backgroundRepeat='no-repeat' backgroundSize='cover'>
        <Box w='100%' h='101%' mt='-3vh' className='card-overlay'>
          <Box mt='6' spacing='3' display='flex' flexDirection='column' h='100%' justifyContent='space-between' color='white'>
            <Box display='flex' justifyContent='space-between' fontSize='16px' fontWeight='600' m='1rem 1.5rem'>
              <span>10+ years</span>
              <span>Online</span>
            </Box>
            <Box p='1rem 1.5rem 2rem' fontWeight='600'>
              <Text >
                <Image src={Star} display='inline' /> 4.7
              </Text>
              <Text fontSize='20px'>Astrologer Ramraj</Text>
              <Text color='#FFDBC0'>Specialties</Text>
              <Text fontWeight='500'>Love, Business, Life </Text>
              <Box display='flex'>
                <Box w='65%'>
                  <Text color='#FFDBC0'>Skills</Text>
                  <Text fontWeight='500'>Vedic Astrology, Kundali, </Text>
                </Box>
                <Box w='35%' display='flex' alignItems='center' flexDirection='column'>
                  <Text color='#5CE449'>Price</Text>
                  <Text color='#5CE449'><span style={{ fontSize: '30px' }}> &#x20B9; 10</span>/min</Text>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </CardBody>
      <Divider />
      <CardFooter h='6vh' w='100%' p='0px'>
        <ButtonGroup spacing='2' h='100%' w='100%' p='0px'>
          <Button variant='solid' className='button'>
            Buy now
          </Button>
          <Button className='button live-button'>Live</Button>
          <Button variant='solid' className='button' >
            Add to cart
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  )
}

export default Cards