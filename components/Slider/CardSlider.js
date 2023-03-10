import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ReviewCard from "../Review/ReviewCard";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

export default function CardSlider({ data }) {
    console.log(data)
    let slider;
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        initialSlide: 3,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    // slidesToScroll: 2,
                    // initialSlide: 2,
                    infinite: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    // slidesToScroll: 1,
                    infinite: true
                }
            }
        ]
    };
    return (
        <div className="relative px-10 md:px-14 rounded-xl" >

            <button className="button mx-2 text-2xl md:text-3xl p-1 md:p-2 rounded-full bg-primary_color text-white absolute top-1/2 z-10 left-0" onClick={() => slider.slickPrev()}>
                <FaAngleLeft className="pr-1"></FaAngleLeft>
            </button>
            <button className="button mx-2 text-2xl md:text-3xl p-1 md:p-2 rounded-full bg-primary_color text-white absolute top-1/2 z-10 right-0" onClick={() => slider.slickNext()}>
                <FaAngleRight className="pl-1"></FaAngleRight>
            </button>
            {

                <Slider ref={c => (slider = c)} {...settings}>
                    {
                        data?.map((d, index) => <ReviewCard key={index + 'r'} review={d}></ReviewCard>)
                    }
                </Slider>
            }

        </div>
    )
}
