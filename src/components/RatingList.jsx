import { useState } from 'react';

export default function RatingList() {
  const [selectedRating, setSelectedRating] = useState(null);

  function listItems() {
    const items = [];
    for (let i = 1; i <= 5; i++) {
      items.push(
        <li key={i} onClick={() => handleRatingClick(i)} className="rating tw-flex tw-items-center tw-justify-center tw-h-12 tw-w-12 tw-bg-ir-light-grey/20 tw-text-ir-light-grey tw-rounded-full tw-cursor-pointer hover:tw-bg-ir-orange hover:tw-text-white tw-transition-colors tw-duration-300 tw-font-bold">
          {i}
        </li>
      );
    }
    return items;
  }

  function handleRatingClick(rating) {
    const selectedRating = getUserSelectedRating(rating);
    console.log(`Selected Rating: ${selectedRating}`);
    setSelectedRating(selectedRating);
  }

  function getUserSelectedRating(rating) {
    return rating;
  }

  return (
    <ul className="tw-flex tw-flex-row tw-justify-between tw-select-none tw-w-full tw-py-6">
      {listItems()}
    </ul>
  );
}