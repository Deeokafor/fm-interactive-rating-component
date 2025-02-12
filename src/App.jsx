import React, { useState } from 'react';
import "./App.css";
import "./custom.css";
import {SubmitButton} from "./components/SubmitButton.jsx";
import {Footer} from "./components/Footer.jsx";
import RatingList from "./components/RatingList.jsx";
import {ThankYou} from "./components/ThankYou.jsx";

function App() {
  const [selectedRating, setSelectedRating] = useState(null);

  return (
    <>
      <main className="rating-card tw-rounded-3xl tw-flex tw-flex-col tw-items-start tw-justify-between md:tw-h-[25rem] md:tw-w-[25rem] tw-px-8 tw-py-9 tw-bg-gradient-to-b tw-from-ir-dark-blue tw-to-ir-dark-blue/40">
        <div className="tw-h-11 tw-w-11 tw-flex tw-items-center tw-justify-center tw-bg-ir-medium-grey/15 tw-rounded-full">
          <img src="src/assets/images/icon-star.svg" alt="star" className="tw-shrink-0 tw-w-[17px]"/>
        </div>
        <h1 className="tw-text-2xl tw-font-bold tw-mt-6">How did we do?</h1>
        <p className="tw-text-ir-medium-grey tw-my-2">
          Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
        </p>
        <RatingList selectedRating={selectedRating} setSelectedRating={setSelectedRating} />
        <SubmitButton selectedRating={selectedRating} />
      </main>

      <ThankYou selectedRating={selectedRating}/>
      <Footer />
    </>
  );
}

export default App;
