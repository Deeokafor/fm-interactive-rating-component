export function SubmitButton({selectedRating}) {
    function handleClick() {
        alert(`You selected ${selectedRating} stars!`);
    }

    return (
        <button onClick={handleClick} type="submit" className="submit tw-text-center tw-w-full tw-bg-ir-orange hover:tw-bg-white hover:tw-text-ir-orange tw-transition-colors tw-duration-300 tw-py-4 tw-uppercase tw-rounded-full tw-tracking-widest tw-font-bold tw-leading-[15px]">submit</button>
    );
}