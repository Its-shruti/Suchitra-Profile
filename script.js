import { arrData } from "./jsonData/project.js";
import { skillData } from "./jsonData/skills.js"


console.log("arr project : ",arrData);
console.log("skill arr : ", skillData);


//** Reference ========================================== */
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let slider_box = document.querySelector(".slider-box");
let skillDiv = document.getElementById("skillDiv");
let section_robot = document.getElementById("section-robot");
let cross_box = document.getElementById("cross-box");

let counter = 1;




//? pop-section ====================================================================================================================
setTimeout(()=>{
    section_robot.style.display = "block";
}
,7000)

cross_box.addEventListener("click", ()=>{
    section_robot.style.display = "none";
})




//? Project data =====================================================================================================================
let newArrProject = arrData.map((curElem, index)=>{
    return `<li class="slider slider1 p-20 ">
                                <h2 class="text-white">Project ${index+1}</h2>
                                <p class="text-20 fw-thick text-blue m-t-20">${curElem.title}:</p>
                                <p class="text-16 fw-thin text-white m-t-10"><span class="text-blue">Explanation:</span> ${curElem.detail}</p>
                                <p class="text-blue text-18 fw-thick m-t-20">Technology used:</p>
                                <p class="text-white text-16 fw-thin m-t-10">${curElem.technology}</p>
                            </li>`
});

slider_box.innerHTML = newArrProject.join('');





//? My Skills Data =============================================================================================================
let newArrSkills = skillData.map((curElem)=>{
    return `<li class="col col1 p-20 text-center">
                        <div class="d-flex justify-center">
                            <i class="${curElem.icon_class} icon p-20 bg-blue text-20 text-dark border-50"></i>
                        </div>
                        <div class="content">
                            <p class="heading text-blue text-18 m-t-20">${curElem.skill}</p>
                            <p class="detail text-16 text-white fw-thin m-t-10">${curElem.detail}</p>
                        </div>
                    </li>`
});

skillDiv.innerHTML = newArrSkills.join('');






//? next button function=============================================
let slider = document.querySelectorAll(".slider");
let length = slider.length;
let slideWidth = 50;        // Default width is 50rem

// Function to update slide width based on screen size
const updateSlideWidth = () => {
    const mediaQuery600 = window.matchMedia('(max-width: 599px)');
    const mediaQuery500 = window.matchMedia('(max-width: 499px)');
    const mediaQuery450 = window.matchMedia('(max-width: 449px)');
    
    if(mediaQuery450.matches){
        slideWidth = 33;
    }
    else if(mediaQuery500.matches){
        slideWidth = 35;
    }
    else if(mediaQuery600.matches){
        slideWidth = 40;
    }
    else{
        slideWidth = 50;
    }
};
  
  // Call the function initially to set the correct width
  updateSlideWidth();
  
  // Listen for screen size changes and update the slide width accordingly
  window.addEventListener('resize', updateSlideWidth);


const nextSlide = () =>{
    slider_box.style.transform = `translateX(-${counter * slideWidth}rem)`;
    counter++;
}

const getFirstSlide = () =>{
    slider_box.style.transform = `translateX(0rem)`;
    counter = 1; 
}

next.addEventListener("click", ()=>{
    (counter < length) ? nextSlide(): getFirstSlide();
});



//? Previous button function=============================================
const prevSlide = () =>{
    slider_box.style.transform = `translateX(-${(counter-2) * slideWidth}rem)`;
    counter--;
}

const getLastSlide = () =>{
    slider_box.style.transform = `translateX(-${(length-1)*slideWidth}rem)`;
    counter = 1; 
}

prev.addEventListener("click", ()=>{
    (counter > 1) ? prevSlide(): getLastSlide();
});
