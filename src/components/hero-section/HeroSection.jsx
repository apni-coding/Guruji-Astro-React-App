import React, { useState } from 'react';
import { Box, Button, IconButton, Image, useBreakpointValue } from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';
import Banner from './../../assets/images/background.svg';
import Verified from './../../assets/images/Verified.svg';
import Refund from './../../assets/images/Refund.svg';
import Confidential from './../../assets/images/Confidential.svg';
import CustomerSupport from './../../assets/images/CustomerSupport.svg';
import SecurePayment from './../../assets/images/SecurePayment.svg';
import './hero-section.css';

// Settings for the slider
const settings = {
    dots: true,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 50000,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
};

export default function HeroSection() {
    // As we have used custom buttons, we need a reference variable to
    // change the state
    const [slider, setSlider] = useState(null);

    // These are the breakpoints which changes the position of the
    // buttons as the screen size changes
    const top = useBreakpointValue({ base: '90%', md: '50%' });
    const side = useBreakpointValue({ base: '30%', md: '10px' });

    // These are the images used in the slide
    const cards = [
        Banner, Banner, Banner
    ];

    const features = [
        { icon: CustomerSupport, text: "24 * 7 Customer <br/> support" },
        { icon: Refund, text: "100% Refund if <br/> Unsatisfied " },
        { icon: Confidential, text: "Private & <br/> Confidential" },
        { icon: Verified, text: "Verified <br/> Astrologer" },
        { icon: SecurePayment, text: "Secure <br/> payment" }
    ]

    return (
        <Box
            position={'relative'}
            height={'70vh'}
            width={'full'}
            overflow={'hidden'}
            className='heroSection'>
            <link
                rel="stylesheet"
                type="text/css"
                charSet="UTF-8"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
            />
            <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
            />
            <IconButton
                aria-label="left-arrow"
                colorScheme="messenger"
                borderRadius="full"
                position="absolute"
                left={side}
                top={top}
                transform={'translate(0%, -50%)'}
                zIndex={2}
                onClick={() => slider?.slickPrev()}>
                <BiLeftArrowAlt />
            </IconButton>
            <IconButton
                aria-label="right-arrow"
                colorScheme="messenger"
                borderRadius="full"
                position="absolute"
                right={side}
                top={top}
                transform={'translate(0%, -50%)'}
                zIndex={2}
                onClick={() => slider?.slickNext()}>
                <BiRightArrowAlt />
            </IconButton>
            <Slider {...settings} ref={(slider) => setSlider(slider)}>
                {cards.map((url, index) => (
                    <Box
                        key={index}
                        height={'70vh'}
                        position="relative"
                        backgroundPosition="top"
                        backgroundRepeat="no-repeat"
                        backgroundSize="cover"
                        backgroundImage={`url(${url})`}
                    >
                        <Box className="custom-container">
                            <Box className="text-container">
                                <h1>“Astrology for Clarity”</h1>
                                <h4>Your Name is a Vedic Astrologer and has expertise in Vaastu  and Mantra Theraphy </h4>
                                <Button w='20%' h='4rem' mt='2rem' borderRadius='2rem' bgColor='#D97122' color='#FFFFFF'>Consult Now</Button>
                            </Box>
                            <Box display='flex' w='90%' ml='5%' justifyContent='space-evenly' fontSize='20px' >
                                {
                                    features.map((item) => {
                                        return (
                                            <Box display='flex'>
                                                <Image src={item?.icon} />
                                                <span style={{ width: '13rem', paddingLeft: '15px' }}>{item?.text}</span>
                                            </Box>
                                        )
                                    })
                                }


                            </Box>
                        </Box>
                    </Box>
                ))}
            </Slider>
        </Box>
    );
}