/**
 * first create a navbar
 * second create an active class
 * third scroll
 */

const sections = Array.from(document.querySelectorAll('section'));
const secLength = sections.length;

const navList = document.getElementById('navbar__list');
//Create a navbar




const navBar=sections.forEach(function(section){

  const navItem = document.createElement('li');
  navItem.innerHTML =   `<a class="menu__link ${section.id}" href = "#${section.id} ">${section.id}</a>`;
  navList.appendChild(navItem);
}
)



/**
 * todo creating an active class
 * 
 */

function createMyActive(){
  //get size and position
  sections.forEach(section =>{
 
  const position = Math.round(section.getBoundingClientRect().top);


    


  if(position<120 && position>=-120){
    section.classList.add('your-active-class');
    
   
    

   
    
    
    
  }else{
    section.classList.remove('your-active-class')
  }
})}

window.addEventListener('scroll', createMyActive)


