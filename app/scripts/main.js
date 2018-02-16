// Global variables
const navigationList = document.querySelector('.navigation__list');  /* Main navigaton list */
const mobileNav = document.querySelector('.mobile__nav--checkbox');  /* Checkbox in hidden mobile navigation  */
const mobileNavLinks = Array.from(document.querySelectorAll('.mobile__nav--list-item__link'));  /* Array from list of links in hidden mobile navigation */
const inputs = document.querySelectorAll('input:not([type=checkbox])'); /* All inputs except for checkbox */
const textarea = document.querySelector('.form-text_message');

// Function to get navbar smaller after having scrolled 5% of page height

function smallerNavbar(){
    const distance = calculateScrollHeight();
    (distance >= 5) ? navigationList.style.height = '3.25rem': navigationList.style.height = '6.25rem';
}

// Function to calculate how much percentage of the page has been scrolled down by the user

function calculateScrollHeight() {
    const windowHeight = window.innerHeight; /* Get the height of the browser window */
    const scrollTop = window.pageYOffset; /* How much user scrolled page vertically */
    const docHeight = getDocumentHeight(); /* Document height */
    const heightDiff = docHeight - windowHeight;/* Difference between document height and browser height */
    const percentageScrolled = Math.floor(scrollTop/heightDiff * 100); /* Percentage of page scrolled by the user */
    return percentageScrolled;
}

// Helper function to calculate document height

function getDocumentHeight(){
    const doc = document;
    return Math.max(doc.body.scrollHeight,
                    doc.body.offsetHeight,
                    doc.body.clientHeight);
}

// Function to hide mobile navigation after clicking in a mobile nav-link
function closeMobileNavbar(){
       mobileNav.click();
}

// Function to clear inputs when element gets focus

function clearInput() {
    if (this.value !== ''){
        this.value = '';
    }   
}
// Function to get the default input value if user hasn't written anything and clicked outside of input field.

function defaultValue(){
    if (this.value === ''){
        this.value = this.getAttribute('value');
    }
}

// Throttle function for better browser performance found here : https://codepen.io/SitePoint/pen/RRLVAL

function throttle(fn, wait) {
    var time = Date.now();
   
    return function() {
      if ((time + wait - Date.now()) < 0) {
        fn();
        time = Date.now();
      }
    }
  }

/* Events */

inputs.forEach( item => item.addEventListener('focus',clearInput,false)); /* Clearing  inputs  */
inputs.forEach( item => item.addEventListener('blur', defaultValue,false)); /* Getting default value when focus is lost */
textarea.addEventListener('focus',clearInput,false); /* Textarea cleared */
textarea.addEventListener('blur',defaultValue,false); /* Default textarea value */

mobileNavLinks.forEach( item => item.addEventListener('click',closeMobileNavbar,false)); /* Hiding mobile nav */

window.addEventListener('scroll',throttle(smallerNavbar,200),false);/* Smaller main navbar - throttled scroll event */




