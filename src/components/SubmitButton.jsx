export function SubmitButton({ selectedRating }) {
    const handleModalClick = () => {
        const ratingCard = document.querySelector(".rating-card");
        const modal = document.querySelector(".thank-you-card");

        // console.log(modal, ratingCard)
        if (selectedRating !== null) {
            ratingCard.classList.add("tw-hidden");
            modal.classList.remove("tw-hidden");
        }
    }

    return (
        <button onClick={handleModalClick} type="submit" className="submit tw-text-center tw-w-full tw-bg-ir-orange hover:tw-bg-white hover:tw-text-ir-orange tw-transition-colors tw-duration-300 tw-py-4 tw-uppercase tw-rounded-full tw-tracking-widest tw-font-bold tw-leading-[15px]">submit</button>
    );
}