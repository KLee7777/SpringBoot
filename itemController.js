/*
   ProductController perform action to the products to be displayed


   (1) Display all products to be retrieved from the back-end
   (2) Add product to the product list (send the new project to the back-end)
   --- edit an existing product detail
   -- remove an existing product from the product list
*/


//development APIs
const addAPI= 'http://localhost:8080/item/add';
const displayAPI = 'http://localhost:8080/item/all';
let productController = [];


function displayItem()
{
      //fetch data from database using the REST API endpoint from Spring Boot
      fetch(displayAPI)
          .then((resp) => resp.json())
          .then(function(data) {
              console.log("2. receive data")
              console.log(data);


              data.forEach(function (item) {
                  const itemObj = {
                      id: item.id,
                      title: item.title,
                      description: item.description,
                      targetDate: item.targetDate,

                 };



                  itemController.push(itemObj);
            });


           //Display all the 12 objects from the productController array
            renderProductPage();
          })
          .catch(function(error) {
              console.log(error);
          });
}


//(3)  Display all products when user launch the product.html page
function renderTodolistPage() {


   let display = "";


   for (let i = 0; i < itemController.length; i++ ) {


       display += `
           <tr>
             <td>${itemController[i].title}</td>
             <td>${itemController[i].description}</td>
             <td>${itemController[i].targetdate}</td>
            </tr>
           `

   }


   document.querySelector("#row").innerHTML= display;


} //End of renderTodolistPage function


function displayDetails(index) {

  console.log("testing " + itemController[index].title);


   document.querySelector("#modalTitle").innerHTML =  itemController[index].title;
   document.querySelector("#modalDescription").innerHTML =  itemController[index].description;
   document.querySelector("#modalTargetDate").innerHTML =  itemController[index].targetDate;
}




function addItem(title, description, targetDate)
{
  const formData = new FormData();
  formData.append('title', title);
  formData.append('description', description);
  formData.append('targetDate', targetDate);


 fetch(addAPI, {
       method: 'POST',
       body: formData
       })
       .then(function(response) {
           console.log(response.status); // Will show you the status
           if (response.ok) {
               alert("Successfully Added Item!")
           }
           else {
              alert("Something went wrong. Please try again")
           }
       })
       .catch((error) => {
           console.error('Error:', error);
           alert("Error adding item to Item")
       });
}
