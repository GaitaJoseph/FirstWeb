const bars = document.getElementById("bar-container");
const bar_singles=bars.children;
const bar1=bar_singles[0]
const bar2=bar_singles[1]
const bar3=bar_singles[2]

// Assign an event listener to the bars element
bars.onclick = function() {
    const menu = document.getElementById('menu-container');
    
    // Check the current display style of the menu
   //  const currentDisplay = menu.style.display;
   const currHeight=menu.style.height;
   
    console.log(currHeight)
    // Toggle the menu display
   //  if (currentDisplay === "block") {
   //      menu.style.display = "none"; // Hide the menu
   //  } else {
   //      menu.style.display = "block"; // Show the menu
   //  }
   if(currHeight=="100%")
   {
      menu.style.height='0px';
      menu.style.opacity='0%'
      bar2.style.display='block'

      bar3.style.transform="rotate(0deg)"
      // bar3.style.translate="0px -13px"

      bar1.style.transform="rotate(0deg)"
      bar1.style.translate="0px 0px"

   } else{
      menu.style.height='100%'
      menu.style.opacity='100%'
      bar2.style.display='none'

      bar3.style.transform="rotate(45deg)"
      // bar3.style.translate="0px -13px"

      bar1.style.transform="rotate(-45deg)"
      bar1.style.translate="0px 7px"
      
   }
};
 
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
  //div holding my cart items
let myCart = document.getElementById("myCart");
let cartQuantities=new Map()
let cartItems=[]
console.log(cartItems)
let totAmount=0;

 //function to add items to my cart
 function addToCart(shopItem)
 {
   if(cartQuantities.has(shopItem.name))
   {
      prevNum=cartQuantities.get(shopItem.name)//gives a  numeral value
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
    // console.log(cartItems[i]);
     
     drawCartItem(cartItems[i]);
   // totalAmount.innerHTML=totAmount;
   let totAmountDiv=document.createElement("div");
   totAmountDiv.innerHTML=`<br><p>Grand Total : ${totAmount} </p>`
   myCart.append(totAmountDiv)
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
      removeButton.innerHTML = "remove";
      removeButton.setAttribute("class","removeFromCart");
      removeButton.id="removeButton"//+shopItem.name
      removeButton.onclick=function(){
         console.log("removing")
         console.log(shopItem)
        removeFromCart(shopItem);
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

function removeFromCart(shopItem)
{
   let items=cartQuantities.get(shopItem.name)-1;
   if(items<=0)
   {
      cartItems=cartItems.filter(item=>item.name!=shopItem.name)
      
      console.log(shopItem.name);
      cartQuantities.delete(shopItem.name)
   } else{
      cartQuantities.set(shopItem.name,items)
   }
   console.log(cartItems)
   console.log(cartQuantities)
      
   reloadCart();
}
 

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
   let shopItem=shopArray[i]//;properties of items in my shop variable
   addButton.onclick = function(){addToCart(shopItem)};//function to add each items
  //properties of items
   let listImage = document.createElement("li")
   let listName = document.createElement("li")
   let listPrice = document.createElement("li")
//functipon to show items properties in my shop
   let detailsBtn = document.createElement("button")
   detailsBtn.setAttribute("class","add")
   detailsBtn.textContent = "Description..";
   let Details = shopArray[i]
   detailsBtn.onclick = function () { showdetails (Details)}
   let h4 = document.createElement("h4");
    
 
//div  to append properties of each of the item
   demo.append(listImage,listName,listPrice,addButton,detailsBtn,h4,)
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


listName.addEventListener("click",()=>{
   console.log("hovering")
})

}//end of the loop to display my shop items

let myCartBtn = document.querySelector(".cartButton")// this is a div to dispaly my cart button

//creation of my cart button 
 let cartButton =  document.createElement("button");

 cartButton.textContent = "View Cart";
 cartButton.setAttribute('class','viewCart')

 myCartBtn.append(cartButton)//appending my cart button to the div mycartbutton

 /*//event listener to dispaly my cart
 cartButton.addEventListener("click",function () {
   myCart.style.display ="block"
   ItemzDiv.style.display = "none"
 })
//event listener to hide my cart
 cartButton.addEventListener("dblclick",function(){
    myCart.style.display ="none"
    ItemzDiv.style.display = "flex"
 });*/

 cartButton.addEventListener("click",function () {
  let itemDis = document.getElementById("itemzDiv");
  let cartDis = document.getElementById("myCart")
   curretItem = itemDis.style.display
   curretCart = cartDis.style.display
  if(curretItem == "flex" && curretCart == "none"){
      itemDis.style.display = "none" 
       cartDis.style.display = "block"
  }
  else{
    itemDis.style.display = "flex" 
       cartDis.style.display = "none"
  }
 });













 



