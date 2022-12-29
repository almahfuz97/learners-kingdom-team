import React, { Component } from "react";
import CardSlider from "../Slider/CardSlider";

export default function RecentlyAdded({ recentlyAdded }) {
    return (
        <div className=" mx-12 my-20">
            <h2 className="text-3xl mb-8 text-primary_color font-bold text-center my-2" > New Books Releases </h2>
            <CardSlider data={recentlyAdded} />
        </div>

    );

}
