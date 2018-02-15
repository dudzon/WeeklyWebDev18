// console.log('\'Allo \'Allo!');
const navigationList = document.querySelector('.navigation__list');


// Function to get navbar smaller after having scrolled 5% of page height

function smallerNavbar(){
    const distance = calculateScrollHeight();
    (distance >= 5) ? navigationList.style.height = '3.25rem': navigationList.style.height = '6.25rem';
    console.log('scrolled');
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


window.addEventListener('scroll',smallerNavbar,false);