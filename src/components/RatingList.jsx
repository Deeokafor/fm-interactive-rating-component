export default function RatingList() {
  return (
    <ul id="ul" className="tw-flex tw-flex-row tw-justify-between tw-select-none tw-w-full tw-py-6">
    {listItems()}
    </ul>
  );
}

function listItems() {
  const items = []; 
  for (let list = 1; list <= 5; list++) {
    items.push(
      <li key={list} className="rating tw-flex tw-items-center tw-justify-center tw-h-12 tw-w-12 tw-bg-ir-light-grey/20 tw-text-ir-light-grey tw-rounded-full tw-cursor-pointer hover:tw-bg-ir-orange hover:tw-text-white tw-transition-colors tw-duration-300 tw-font-bold">
        {list}
      </li>
    );
  }

  return items;
}