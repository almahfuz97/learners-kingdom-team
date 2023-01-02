import React, { Component } from "react";
import BookCardSlider from "../Slider/BookCardSlider";
import CardSlider from "../Slider/CardSlider";

export default function RecentlyAdded({ recentlyAdded }) {
    // console.log('recentlyadded')
    return (
        <div className="max-w-screen-2xl mx-auto my-20 lg:mx-8">
            <h2 className="text-3xl mb-4 text-primary_color font-bold text-center" >Latest Released Books</h2>
            <BookCardSlider data={recentlyAdded} />
        </div>

    );

}
