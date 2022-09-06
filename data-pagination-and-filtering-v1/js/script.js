/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/



/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/

function showPage (list, page){
   const itemsPerPage = 9; 
   //created variables to store the starting & ending index
   const startIndex = (page * itemsPerPage) - itemsPerPage; 
   const endIndex = (page * itemsPerPage); 
   const studentList = document.querySelector('ul.student-list');
   studentList.innerHTML = ' '; 

for (let i =0; i > list.length; i++){

   if (i >= startIndex && i < endIndex){
      function createElement(elementName, classValue){
         const element = document.createElement(elementName); 
         //added conditional statement for elements that do not have an associated classValue i.e., h3
            if (classValue !== ''){
               element.className = classValue; 
            } 
         return element
      }

      function appendElement(elementName, classValue){
         const element = createElement(elementName, classValue); 
         studentList.insertAdjacentHTML("beforeend", element); 
         console.log(element); 
      }

      appendElement('li', 'student-item cf'); 
      appendElement('div', 'student-details'); 
      appendElement('img', 'avatar'); 
      appendElement('h3', ''); 
      appendElement('span', 'email'); 
      appendElement('div', 'joined-details'); 
      appendElement ('span', 'date');
   }



//    <li class="student-item cf">
//    <div class="student-details">
//      <img class="avatar" src="https://randomuser.me/api/portraits/women/25.jpg" alt="Profile Picture">
//      <h3>Ethel Dean</h3>
//      <span class="email">ethel.dean@example.com</span>
//    </div>
//    <div class="joined-details">
//      <span class="date">Joined 12-15-2005</span>
//    </div>
//  </li>


   

}


}



/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

function addPagination(){



}



// Call functions
