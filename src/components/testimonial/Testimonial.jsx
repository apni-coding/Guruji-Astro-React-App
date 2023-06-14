import React, { useEffect, useState } from 'react'

import ReactCardSlider from 'react-card-slider-component';
import './testimonial.css';
const Testimonial = () => {
    const [index, setIndex] = useState(2);
    const [scroll, setScroll] = useState(0)
    const sliderClick = () =>{
        console.log('this is clicked')
    }

    

    useEffect(()=>{
        var d = document.getElementById("slider");
        console.log(index)
        for(var i=0; i<d.childNodes.length-1;i++){
            if(i===index){
                d.childNodes[index].className += " active"
            } else {
                d.childNodes[i].className = 'slider-card'
            }
        }
        
        d.addEventListener('scroll',function(e){
            e.preventDefault();
            const x = d.scrollLeft.toFixed();
            if(x > scroll) {
                setScroll(x)
                index<3 && setIndex(index+ Math.floor(x/200))
            } else if (x<scroll) {
                setScroll(x)
               index > 5 && setIndex(index - Math.floor(x/200))
            } else {
                return null
            }
        })
    },[index])
    const slides = [
        { image: "https://picsum.photos/200/300", title: "This is a title", description: "This is a description", clickEvent: sliderClick, class:'active'},
        { image: "https://picsum.photos/600/500", title: "This is a second title", description: "This is a second description", clickEvent: sliderClick },
        { image: "https://picsum.photos/700/600", title: "This is a third title", description: "This is a third description", clickEvent: sliderClick },
        { image: "https://picsum.photos/500/400", title: "This is a fourth title", description: "This is a fourth description", clickEvent: sliderClick },
        { image: "https://picsum.photos/200/300", title: "This is a fifth title", description: "This is a fifth description", clickEvent: sliderClick },
        { image: "https://picsum.photos/800/700", title: "This is a sixth title", description: "This is a sixth description", clickEvent: sliderClick },
        { image: "https://picsum.photos/300/400", title: "This is a seventh title", description: "This is a seventh description", clickEvent: sliderClick },
    ]
  return (
    // a slide object contains the image link, title and function/click event for when a user clicks on a card

        < ReactCardSlider slides = { slides } className='customSlideCard'/>
  )
}

export default Testimonial;