/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

//gather all the sections in an array 
let Sections=[...document.querySelectorAll("section")];
let nav_bar=document.getElementById('navbar__list');
/**
 * End Global Variables
 * Main Helper Functions
 * 
*/

// build the nav

let CreateNavBar=()=>{
    for(let section of Sections){
        //get section id
        let currentSectionLink=section.getAttribute('id');
        //get section name
        let currentSectionName=section.getAttribute('data-nav');
        let newListItem=document.createElement('li');
        let newListItemData=`<a class='menu__link' href='#${currentSectionLink}'>${currentSectionName}</a>`;
        //adding an anchor to the list item after setting the id and name
        newListItem.innerHTML=newListItemData;
        //adding the list item into the nav bar 
        nav_bar.appendChild(newListItem);
    }
};

// Add class 'your-active-class' to section when near top of viewport

let AddActive=()=>{
    for(section of Sections){
        //get section top
        let rect=section.getBoundingClientRect().top;
        //Add class 'your-active-class' when it is near top of viewport
        if(rect>=0 && rect<=window.innerHeight*0.4)
        {
            section.classList.add('your-active-class');
        }
        else
        {
        section.classList.remove('your-active-class');
        }
    }   
};

// Scroll to anchor ID using scrollIntoView 
let scrollToSection=()=>{document.querySelectorAll('.menu__link').forEach((link)=>{
    link.addEventListener('click',(event)=>{
        //prevent default events
        event.preventDefault();
        //get the section id 
        let sectionID=link.getAttribute('href').slice(1);
        document.getElementById(sectionID).scrollIntoView({behavior :"smooth"})
    }
    );
}
)};

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
CreateNavBar();
// Scroll to section on link click
scrollToSection();
// Set sections as active
window.addEventListener('scroll',AddActive);


