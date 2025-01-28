function ThankYou() {
    return (
        <div className="thank-you-card tw-h-[25rem] tw-w-[25rem] tw-px-8 tw-py-9 tw-rounded-3xl tw-flex tw-flex-col tw-items-center tw-justify-between tw-bg-gradient-to-b tw-from-ir-dark-blue tw-to-ir-dark-blue/40 tw-hidde">
            <div className="tw-flex tw-flex-row tw-justify-center tw-p-4">
                <img src="./src/assets/images/illustration-thank-you.svg" alt="thank you" className="tw-w-36" />
            </div>

            <div className="tw-flex tw-items-center tw-justify-center tw-bg-ir-medium-grey/10 tw-rounded-full tw-px-4 tw-h-8 tw-text-ir-orange/90 tw-leading-[1]">
            You selected <span id="user_selected_rating" className="tw-px-1">0</span>out of 5
            </div>

            <div className="tw-text-center">
                <h1 className="tw-font-bold tw-text-2xl tw-my-3">Thank you!</h1>
                <p className="tw-text-ir-medium-grey">
                    We appreciate you taking the time to give a rating. If you ever need more support,
                    don’t hesitate to get in touch!
                </p>
            </div>
        </div>
    );
}

export {ThankYou};