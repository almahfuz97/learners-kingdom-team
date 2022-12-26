import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ReviewCard from "./ReviewCard";

export default class Responsive extends Component {

    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }
    next() {
        this.slider.slickNext();
    }
    previous() {
        this.slider.slickPrev();
    }


    render() {

        const settings = {
            dots: false,
            infinite: true,
            speed: 1000,
            slidesToShow: 4,
            slidesToScroll: 4,
            autoplay: true,
            initialSlide: 4,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 2,
                        infinite: true
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true
                    }
                }
            ]
        };
        return (
        <div className="w-11/12 mx-auto">

               
            <h1 className="text-2xl font-bold my-8">Our Learner's Feedback</h1>

            
                <div >
                    <button className="button mx-2 text-2xl p-2 rounded-full bg-secondary_color" onClick={this.previous}>

                    <img src="/left-arrow.svg" alt="book" class="w-8" />
                    </button>
                    <button className="button mx-2 text-2xl p-2 rounded-full bg-secondary_color" onClick={this.next}>
                    <img src="/right-arrow.svg" alt="book" className="w-8"/></button>
                </div>
                <Slider  ref={c => (this.slider = c)} {...settings}>
                    {

                        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map(review => <ReviewCard key={review.id} props={review}></ReviewCard>)
                     }
                </Slider>
           
        </div>

        );
    }
}
