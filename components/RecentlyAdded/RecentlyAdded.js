import React, { Component } from "react";
import Slider from "react-slick";
import RecentlyAddedCard from "./RecentlyAddedCard";

export default class Responsive extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 0,
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
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <div>
                <h2 className="text-2xl font-bold my-8" > New Books Releases </h2>
                <Slider {...settings}>
                    {

                        [1, 2, 3, 4, 5, 6, 7].map(card => <RecentlyAddedCard></RecentlyAddedCard>)
                    }


                </Slider>
            </div>
        );
    }
}