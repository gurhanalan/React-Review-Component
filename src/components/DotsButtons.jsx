import React from "react";
import { GoPrimitiveDot } from "react-icons/go";

const DotsButtons = ({review, setDotsClass, goToReview}) => {
    return <div className="dots">
    {review.map((item) => {
        const { id } = item;
        return (
            <>
                <button
                    className={`dots-btn ${setDotsClass(id)}`}
                    key={id}
                    onClick={() => {
                        goToReview(id);
                    }}
                >
                    <GoPrimitiveDot />
                </button>
            </>
        );
    })}
</div>;
};

export default DotsButtons;
