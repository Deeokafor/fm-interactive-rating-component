import { useRef, useEffect } from 'react';

export default function RatingList({ selectedRating, setSelectedRating }) {
  const ratingRefs = useRef([]);

  useEffect(() => {
    if (selectedRating !== null) {
      // Remove the class from all ratings
      ratingRefs.current.forEach((ref) => {
        if (ref) {
          ref.classList.remove('tw-bg-ir-light-grey/80', 'tw-text-white');
        }
      });

      // Add the class to the selected rating
      const selectedRef = ratingRefs.current[selectedRating - 1];
      if (selectedRef) {
        selectedRef.classList.add('tw-bg-ir-light-grey/80', 'tw-text-white');
      }
    }
  }, [selectedRating]);

  function listItems() {
    const items = [];
    for (let i = 1; i <= 5; i++) {
      items.push(
        <li
          key={i}
          ref={(el) => (ratingRefs.current[i - 1] = el)}
          onClick={() => handleRatingClick(i)}
          className="rating tw-flex tw-items-center tw-justify-center tw-h-12 tw-w-12 tw-bg-ir-light-grey/20 tw-text-ir-light-grey tw-rounded-full tw-cursor-pointer hover:tw-bg-ir-orange hover:tw-text-white tw-transition-colors tw-duration-300 tw-font-bold"
        >
          {i}
        </li>
      );
    }
    return items;
  }

  function handleRatingClick(rating) {
    setSelectedRating(rating);
    console.log(`Selected Rating: ${rating}`);
  }

  return (
    <ul className="tw-flex tw-flex-row tw-justify-between tw-select-none tw-w-full tw-py-6">
      {listItems()}
    </ul>
  );
}