// initialized all variables to be worked with
let rating = document.querySelectorAll('.rating');
let user_selected_rating = document.querySelector('#user_selected_rating').textContent;

// using a for loop mapped to html elements to get user selection
function get_user_selected_rating() {
    for (let i = 0; i < rating.length; i++) {
        rating[i].addEventListener('click', function () {
            // console.log('you clicked' + ' ' + rating[i].innerHTML);
            // user_selected_rating = rating.innerHtml;
        })
    }
}
get_user_selected_rating();

// functions for adding and/or removing classNames to html elements
function add_class(element, class_name) {
    element.classList.add(element, class_name);
}

function remove_class(element, class_name) {
    element.classList.remove(element, class_name);
}

