import React, { Component } from "react";
import BookCardSlider from "../Slider/BookCardSlider";
import CardSlider from "../Slider/CardSlider";

export default function RecentlyAdded({ recentlyAdded }) {
    // console.log('recentlyadded')
    return (
        <div className="max-w-screen-2xl mx-8 lg:mx-auto my-20">
            <h2 className="text-3xl text-primary_color font-bold text-center mb-8" >Latest Released Books</h2>
            <BookCardSlider data={recentlyAdded} />
        </div>

    );

}
