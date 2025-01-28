import "./App.css";
import "./custom.css";
import SubmitButton from "./components/SubmitButton.jsx";
import Footer from "./components/Footer.jsx";
import RatingList from "./components/RatingList.jsx";
import { ThankYou } from "./components/ThankYou.jsx";

function App() {
  return (
    <div className="tw-min-h-screen tw-flex tw-flex-col tw-justify-center tw-items-center tw-text-[15px] tw-text-white tw-bg-ir-very-dark-blue">
      <main className="tw-hidden tw-rounded-3xl tw-flex tw-flex-col tw-items-start tw-justify-between tw-h-[25rem] tw-w-[25rem] tw-px-8 tw-py-9 tw-bg-gradient-to-b tw-from-ir-dark-blue tw-to-ir-dark-blue/40">
        <div className="tw-h-11 tw-w-11 tw-flex tw-items-center tw-justify-center tw-bg-ir-medium-grey/15 tw-rounded-full">
          <img src="src/assets/images/icon-star.svg" alt="star" className="tw-shrink-0 tw-w-[17px]"/>
        </div>
        <h1 className="tw-text-2xl tw-font-bold tw-mt-8">How did we do?</h1>
        <p className="tw-text-sm tw-text-ir-medium-grey tw-my-2">
          Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
        </p>
        <RatingList />
        <SubmitButton />
      </main>

      <ThankYou />
      <Footer />
    </div>
  );
}

export default App;
