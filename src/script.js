// // initialized all variables to be worked with
// let rating = document.querySelectorAll('.rating');
// let user_selected_rating = document.querySelector('#user_selected_rating').innerHTML;
// let rating_card = document.querySelector('.rating-card');
// let thank_you_card = document.querySelector('.thank-you-card')
// let submit_btn = document.querySelector('.submit');

// // using a for loop mapped to html elements to get user selection
// function get_user_selected_rating() {
//     for (let i = 0; i < rating.length; i++) {
//         rating[i].addEventListener('click', function () {
//             user_selected_rating = rating[i].innerHTML;
//             console.log(`you clicked ${rating[i].innerHTML}`, user_selected_rating);
//         })
//     }
// }
// get_user_selected_rating();

// console.log(user_selected_rating);

// // functions for adding and/or removing classNames to html elements
// function add_class(element, class_name) {
//     element.classList.add(class_name);
// }

// function remove_class(element, class_name) {
//     element.classList.remove(class_name);
// }

// submit_btn.addEventListener('click', () => {
//     add_class(rating_card, 'tw-hidden');
//     remove_class(thank_you_card, 'tw-hidden');
//     console.log(`Submit has been clicked`);
// })
