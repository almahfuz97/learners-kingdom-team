import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ReviewCard from "./ReviewCard";
import CardSlider from "../Slider/CardSlider";

export default function Review({ reviews }) {
    return (
        <div className=" mx-8 my-20">
            <h2 className="text-3xl mb-8 text-primary_color font-bold text-center my-2" > Our Learner's Feedback </h2>
            <CardSlider which='review' data={reviews} />

        </div>

    );
}

