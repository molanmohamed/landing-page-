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
let collapseBtn=document.querySelectorAll(".collapse");
/**
 * End Global Variables
 * begin helper Functions
 * 
*/
// this function changes the collapse button inner text  from + to - and vise versa
function changePtoN(element)
{
    (element.innerText=='+')?element.innerText='-':element.innerText='+';
}
/**
 * End helper Functions
 * begin main Functions
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

window.addEventListener('scroll',()=>{
    let Links=document.querySelectorAll('.menu__link');
    for(let i=0;i<Sections.length;i++){
        //get section top
        let rect=Sections[i].getBoundingClientRect().top;
        //Add and remove class 'your-active-class' when it is near top of viewport
        //Add and remove class 'active' for links when it's appropriate near top of viewport and not collapsed
       
        if(rect>=0 && rect<=window.innerHeight*0.4){
            Sections[i].classList.add('your-active-class');
            if(Sections[i].querySelectorAll('p')[0].style.display!='none'){
               Links[i].classList.add('active');
            }
        }
        else{
            Sections[i].classList.remove('your-active-class');
            Links[i].classList.remove('active');
        }
    }
});

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

for(let i=0;i<collapseBtn.length;i++)
{
   //on hover the inner text of the button changes form + to - and vice versa
    collapseBtn[i].addEventListener('mouseover',()=>{
        changePtoN(collapseBtn[i])
    });
    collapseBtn[i].addEventListener('mouseout',()=>{
        changePtoN(collapseBtn[i])
    });
    //on click the paragraphs in the section collapse by changing its display property form block to hide
    collapseBtn[i].addEventListener('click',()=>{
        changePtoN(collapseBtn[i])
        Sections[i].querySelectorAll('p').forEach((par)=>{
            if(par.style.display=='none'){
                par.style.display='block';
            }else{
                par.style.display='none';
            }
        });
    });
}

//create navigation bar
CreateNavBar();
// Scroll to section on link click
scrollToSection();


