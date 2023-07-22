let sectionslist=document.getElementsByTagName("section"); // a variable to store the sections as array
const unordered=document.querySelector(".navcontain"); //a constant to store unordered list element 
let createlist=[]; // used to store lists as array
function linkname(i){createlist[i].textContent=sectionslist[i].getAttribute("data-nav");} //function used to store the value of (data-nav) attribute of the sections in the text content of each list element.

/*for loop used to make list elements equal to number of sections and append each list as last child to the unordered list element.
 *then,it will be used to repeat the addeventlistener function to make a navigate to the section related to this list element.
*/
for(let i=0;i<sectionslist.length;i++){
  createlist[i]= document.createElement("LI");
  createlist[i].classList.add("menu__link");
  linkname(i); 
  unordered.appendChild(createlist[i]);
  createlist[i].addEventListener('click',function clickscroll(){
    sectionslist[i].scrollIntoView();
   });
}
/*addeventlistener function used to add active class for the list element and its section that is viewed in viewboard to add new styles for them
* and remove thier old class if it exists then remove this active class and add the old class again when this section becomes not in the viewboard. 
*/
window.addEventListener('scroll',function addclass(){
  for (let k=0;k<sectionslist.length;k++){
   let sectionstop=sectionslist[k].getBoundingClientRect().top;
   if(sectionstop>=0 && sectionstop<=250){
    if(!sectionslist[k].classList.contains("your-active-class")){
     sectionslist[k].classList.add("your-active-class");
    }
    if(createlist[k].classList.contains("menu__link")){
     createlist[k].classList.remove("menu__link");
     createlist[k].classList.add("activelink");
    }
   }
   else{
    sectionslist[k].classList.remove("your-active-class");
    if(createlist[k].classList.contains("activelink")){
     createlist[k].classList.remove("activelink");
     createlist[k].classList.add("menu__link");
    }
   }    
  }
 });