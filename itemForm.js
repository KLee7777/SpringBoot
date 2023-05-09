//Global variable - to store the image object
let storeItem = ""


//When user clicks on 'Save Item':
//1) store all the inputs into variables
//2) do validation
//3) calls a function from the productController.js to access the API to add items to the database


//Add an 'onsubmit' event listener for productform to add a product
newItemForm.addEventListener('submit', (event) => {


  // Prevent default action of the Form submission
  event.preventDefault();


  //1) Select the inputs
  const name = document.querySelector('#inputTitle').value;
  const description = document.querySelector('#inputDescription').value;
  const targetDate = document.querySelector('#inputTargetDate').value;




  // 3)  calls a function from the productController.js to access the API to add items to the database
  addItem(title, description, targetDate);  //arguments


});

// add event listener
input.addEventListener('change', () => {
  storeItem = input.files[0]; //array of files for us to access
});
