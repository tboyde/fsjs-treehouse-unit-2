/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/


/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/
//Global scoped variables: 
const itemsPerPage = 9; 
/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/

function showPage (list, page){
   //created two variables to store the starting & ending index
   const startIndex = (page * itemsPerPage) - itemsPerPage; 
   const endIndex = (page * itemsPerPage); 
   // selected element with class of 'student-list' and assigned it to variable
   const studentList = document.querySelector('.student-list');
   studentList.innerHTML = ' '; 
//for loop for looping through each object in the 'list' data 
   for (let i = 0; i < list.length; i++ ){
      //if the items index matches critera, then code below runs
      if( i >= startIndex && i < endIndex){
         //since the creation of each element, each class, and the sources were lengthy. I used object literals to create each item needed w/o it becoming too complex. 
      let studentItem = 
      `<li class="student-item cf">
        <div class="student-details">
          <img class="avatar" src="${list[i].picture.medium}" alt="Profile Picture">
          <h3>${list[i].name.first} ${list[i].name.last}</h3>
          <span class="email">${list[i].email}</span>
        </div>
        <div class="joined-details">
          <span class="date">Joined: ${list[i].registered.date}</span>
        </div>
      </li>
      `; 
      studentList.insertAdjacentHTML('beforeend', studentItem); 
      }
   }
}

// showPage(data,1); 

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

function addPagination(list){
   //variable for calculating pages required
   const numOfPages = Math.ceil(list.length/itemsPerPage); 
   //selecting the element with a class of '.link-list' 
   const linkedList = document.querySelector('.link-list');
   linkedList.innerHTML = ''; 
   //for loop that creates buttons for each page needed for objects
   for (let i = 1; i <= numOfPages; i++ ){
      let button = `
      <li>
         <button type="button">${i}</button>
      </li>
      `;
      linkedList.insertAdjacentHTML('beforeend', button); 
   }
   //selects first button element and assigns active class
   document.querySelector('button').className = 'active'; 
   //created event listener for when user clicks page buttons
   linkedList.addEventListener('click', (e) => {
      if (e.target.tagName === 'BUTTON'){
         let activeBtn = document.querySelector('.active'); 
         //adding in varibles to identify button target and value
         let targetBtn = e.target; 
         let pageNum = targetBtn.textContent; 
         //removing 'active' class from button 
         activeBtn.className = ''; 
         //add active class to button
         targetBtn.className = 'active'; 
         //call the showPage function passing the 'list' as a parameter and page to display as arguments
         showPage(list, pageNum); 
      }

   })
}; 


// Call functions
showPage(data,1); 
addPagination(data); 