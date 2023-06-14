import React from 'react'
import Astrologer from '../components/astrologer/Astrologer'
import Display from '../components/display/Display'
import Footer from '../components/Footer/Footer'
import HeroSection from '../components/hero-section/HeroSection'
import Navbar from '../components/navbar/Navbar'
import Review from '../components/Review/Review'
import Testimonial from '../components/testimonial/Testimonial'

const Homepage = () => {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <Testimonial />
            <Display />
            <Astrologer />
            <Review />
            <Footer />
        </div>
    )
}

export default Homepage