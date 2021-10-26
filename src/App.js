import React, { useState, useEffect, useCallback } from "react";
import data from "./data";
import Header from "./components/Header";
import Buttons from "./components/Buttons";
import ReviewsList from "./components/ReviewsList";
import DotsButtons from "./components/DotsButtons";
function App() {
    const [review, SetReview] = useState(data);

    const [order, setOrder] = useState(1);

    const orderSlides = (id) => {
        if (id === order) {
            return "activeSlide";
        } else if (id === order + 1) {
            return "nextSlide";
        } else if (id === order - 1) {
            return "lastSlide";
        } else if (order === 1 && id === review.length) {
            return "lastSlide";
        } else if (order === review.length && id === 1) {
            return "nextSlide";
        }
    };

    const orderChange = useCallback(
        (type) => {
            if (type === "left") {
                setOrder((prev) => (prev - 1 === 0 ? review.length : prev - 1));
            } else if (type === "right") {
                setOrder((prev) => (prev === review.length ? 1 : prev + 1));
            }
        },
        [review, order]
    );

    const setDotsClass = (id) => {
        if (id === order) {
            return "dot-active";
        }
    };

    const goToReview = (id) => {
        setOrder(id);
    };

    useEffect(() => {
        let slider = setInterval(() => {
            orderChange("right");
        }, 3000);
        return () => {
            clearInterval(slider);
        };
    }, [orderChange]);

    return (
        <section className="section">
            <Header />
            <section className="section-center">
                <ReviewsList orderSlides={orderSlides} review={review} />
                <Buttons orderChange={orderChange} />
                <DotsButtons
                    review={review}
                    goToReview={goToReview}
                    setDotsClass={setDotsClass}
                />
            </section>
        </section>
    );
}

export default App;
