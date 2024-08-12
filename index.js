 //myShop constructor

 class itemz{
    constructor(image,name,price,details){
       this.image = image;
       this.name = name;
       this.price = price;
       this.details = details
    }
 };

//myshop items in the array
 let shopArray = [];
 
 //div holding my cart items
let myCart = document.getElementById("myCart");
let cartQuantities=new Map()
let cartItems=[]


//function to add items in my shop array
 function addItemzToMyShop (image,name,price,details) {
    let commodity = new itemz (image,name,price,details);
    shopArray.push(commodity);
 };

 //items in my shop 
 addItemzToMyShop('dmax1.jpg','Isuzu-Dmax','900000',"silver,4*4 drive,turbo charger");
 addItemzToMyShop("download-5.jpg","wheelBarrow","5000","dark-grey,medium gauge metal")
 addItemzToMyShop("Dumuzas-Mabati-Price-List.webp","mabati","1500","zinc coated,gauge 30")

console.log(shopArray);//end of items innmy shop


 // h5 element to hold subtotal in my cart
 let totalAmount = document.createElement("h5")
let totAmount=0;

 //function to add items to my cart
 function addToCart(shopItem)
 {
   if(cartQuantities.has(shopItem.name))
   {
      prevNum=cartQuantities.get(shopItem.name)
      cartQuantities.set(shopItem.name,prevNum+1)
   } else {
      cartItems.push(shopItem);
      cartQuantities.set(shopItem.name,1)
   }

   reloadCart();
 }

 function reloadCart()
 {
   totAmount=0.0;
   myCart.innerHTML=""
   for(let i=0;i<cartItems.length;i++)
      //console.log(cartItems[i]);
     drawCartItem(cartItems[i]);
   // totalAmount.innerHTML=totAmount;
   myCart.innerHTML+=`<br><p>Grand Total : ${totAmount} </p>`
 }
 function drawCartItem(shopItem){
      //container to hold properties my cart items
      let container=document.createElement("div");

      //properties in cart container
      let listImage = document.createElement("li");
      let listName = document.createElement("li");
      let listPrice = document.createElement("li");
      let removeButton = document.createElement("button");
      let listQuantity=document.createElement("li");
      listQuantity.innerHTML=cartQuantities.get(shopItem.name)+" items"
      removeButton.textContent = "remove";
      removeButton.setAttribute("class","removeFromCart");
      removeButton.onclick=function(){
        container.remove(shopItem)
      }
   
      //appending properties of items in cart container
      container.append(listImage,listName,listPrice,removeButton,listQuantity)
      
      //declaring the innerHTMl of h5 created with a function to calculate total
     

         //image property setting to be displayed in my cart
      let image = document.createElement("img")
      image.setAttribute("class","Cart-image")
      image.src = shopItem.image
      listImage.append(image)
     
      // declaring inner html variables of cart properties
      listName.innerHTML += shopItem.name
      let subTotal=shopItem.price*cartQuantities.get(shopItem.name)
      listPrice.innerHTML +=` Price : ${subTotal}`
      totAmount+=parseFloat(subTotal);
//let Amount = Number (totAmount)
      //appending the container of cart properties to the cart
      myCart.append(container)

     
 }//end of function to add and remove items in my cart


 

//section to hold items in my shop
let ItemzDiv = document.getElementById("itemzDiv")

//loop  to get each item my shop array
for (i in shopArray) {
   console.log(shopArray[i].price);//display prices of items in my shop

   // div to hold each item in to be displayed in itemzdiv
   let demo = document.createElement("ul")
   demo.setAttribute("class","lists")

   //properties of items in my shop
   let addButton = document.createElement("button");//button to add each item
   addButton.textContent = "addToCart";//name of the button
   addButton.setAttribute("class","addToCart")//class iof the button
   let shopItem=shopArray[i];//properties of items in my shop variable
   addButton.onclick = function(){addToCart(shopItem)};//function to add each items
  //properties of items
   let listImage = document.createElement("li")
   let listName = document.createElement("li")
   let listPrice = document.createElement("li")
//functipon to show items properties i my shop
   let detailsBtn = document.createElement("button")
   detailsBtn.textContent = "showDetails";
   let Details = shopArray[i]
   detailsBtn.onclick = function () { showdetails (Details)}
   let h4 = document.createElement("h4");
    
//variable to select amount needed
   let quantity = document.createElement("input");
 quantity.setAttribute("type","number");
 quantity.placeholder = "selecet quantity"
 quantity.setAttribute("min",1)
 quantity.setAttribute("class","quantity")
 quantity.defaultValue=1;
 

 //function to calculate totalCost
 function totalCost () {
   let amount = quantity.value
   let numAmount = Number(amount)
   console.log(numAmount)
   let numPrice = Number(shopArray[i].price)

   let Cost = numAmount * numPrice
   console.log(Cost);

 }
 

//div  to append properties of each of the item
   demo.append(listImage,listName,listPrice,addButton,quantity,detailsBtn,h4,)
//display of shop image
let image = document.createElement("img")
 image.setAttribute("class","image")
 image.src = shopArray[i].image
 listImage.append(image)

 listName.innerHTML += shopArray[i].name
 listPrice.innerHTML +=` Price : ${shopArray[i].price}` 

 ItemzDiv.append(demo);//appending of each item details section to the main section in my shop

 //function to show details when clicked
 function showdetails (Details){
   
   h4.innerHTML = Details.details;
}
//eventListener to remove details
h4.addEventListener("click",function (){
   h4.innerHTML = " "
});



}//end of the loop to display my shop items

let myCartBtn = document.querySelector(".cartButton")// this is a div to dispaly my cart button

//creation of my cart button 
 let cartButton =  document.createElement("button");
 cartButton.textContent = "View Cart"
 myCartBtn.append(cartButton)//appending my cart button to the div mycartbutton

 //event listener to dispaly my cart
 cartButton.addEventListener("click",function () {
   myCart.style.display ="block"
 })
//event listener to hide my cart
 cartButton.addEventListener("dblclick",function(){
    myCart.style.display ="none"
 })













 



