import { Rating } from "@mui/material";
import { useState } from "react";

const TestimonialsCarousel = ({ feedbacks }) => {
    const testimonials = feedbacks || []

    const [current, setCurrent] = useState(0);

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="w-full flex flex-col items-center text-white">
            <h2 className="text-3xl font-bold mb-8 tracking-wide">Testimonials</h2>

            {/* Carousel Outer */}
            <div className="w-full max-w-3xl flex items-center gap-4">

                {/* LEFT Arrow */}
                <button
                    onClick={prevSlide}
                    className="text-3xl px-2 py-1 hover:text-red-400 transition"
                >
                    ❮
                </button>

                {/* Slider Container */}
                <div className="overflow-hidden w-full">
                    <div
                        className="flex transition-transform duration-700 ease-in-out"
                        style={{ transform: `translateX(-${current * 100}%)` }}
                    >
                        {testimonials.map((item, index) => (
                            <div
                                key={index}
                                className="min-w-full px-8 py-10 rounded-2xl bg-white/10 backdrop-blur-xl shadow-[0_8px_25px_rgba(0,0,0,0.25)] border border-white/20"
                            >
                                <div className="flex flex-col items-center text-center space-y-5">

                                    {/* Shop Name */}
                                    <h3 className="text-2xl font-bold tracking-wide text-white drop-shadow-sm">
                                        {item.shop_name}
                                    </h3>

                                    <div className="flex items-center justify-between w-full text-gray-300 px-3">

                                        {/* Owner */}
                                        <p className="text-gray-200 text-sm">
                                            <span className="font-medium text-white/90">Owner:</span> {item.owner_name}
                                        </p>

                                        {/* Rating */}
                                        <div className="flex items-center gap-1">
                                            <Rating value={item.rating} readOnly precision={0.5} />
                                            <span className="text-white/90 text-sm font-semibold">
                                                {item.rating}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Divider */}
                                    <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>

                                    {/* Description */}
                                    <p className="text-gray-100 italic leading-relaxed text-base max-w-2xl">
                                        “{item.description}”
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* RIGHT Arrow */}
                <button
                    onClick={nextSlide}
                    className="text-3xl px-2 py-1 hover:text-red-400 transition"
                >
                    ❯
                </button>
            </div>

            {/* Dots */}
            <div className="flex mt-4 gap-2">
                {testimonials.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`w-3 h-3 rounded-full ${current === index ? "bg-red-400" : "bg-white"
                            }`}
                    />
                ))}
            </div>
        </div>

    );
};

export default TestimonialsCarousel;
