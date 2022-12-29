import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import RecentlyAddedCard from "../RecentlyAdded/RecentlyAddedCard";
import ReviewCard from "../Review/ReviewCard";

export default function CardSlider({ data, which }) {
    let slider;
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        initialSlide: 3,
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
                breakpoint: 1023,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    infinite: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true
                }
            }
        ]
    };
    return (
        <div className=" relative" >

            <button className="button mx-2 text-2xl p-2 rounded-full bg-secondary_color absolute top-1/2 z-10 -translate-x-8" onClick={() => slider.slickPrev()}>

                <img src="/left-arrow.svg" alt="book" className="w-8" />
            </button>
            <button className="button mx-2 text-2xl p-2 rounded-full bg-secondary_color  absolute top-1/2 z-10 right-0 translate-x-8" onClick={() => slider.slickNext()}>
                <img src="/right-arrow.svg" alt="book" className="w-8" />

            </button>
            {

                <Slider ref={c => (slider = c)} {...settings}>
                    {
                        which === 'review' ? data?.map((d, index) => <ReviewCard key={index + 'r'} review={d}></ReviewCard>) :

                            data?.map((d, index) => <RecentlyAddedCard data={d} key={index}></RecentlyAddedCard>)
                    }
                </Slider>
            }

        </div>
    )
}
