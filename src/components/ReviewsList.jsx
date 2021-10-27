import React from "react";
import { FaQuoteRight } from "react-icons/fa";
const ReviewsList = ({ review, orderSlides }) => {
    return (
        <>
            {review.map((item) => {
                const { id, image, name, quote, title } = item;
                return (
                    <article key={id} className={orderSlides(id)}>
                        <img className="person-img" src={image} alt={name} />
                        <h4>{name}</h4>
                        <h5 className="title">{title}</h5>
                        <p className="text">{quote}</p>
                        <FaQuoteRight className="icon" />
                    </article>
                );
            })}
        </>
    );
};

export default ReviewsList;
