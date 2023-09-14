// let wishlist = [];

// function setup(){
//    const products = document.querySelectorAll(".but");
//    for(let i=0; i<products.length; i++){
//       products[i].onclick = function(e){
//          addItem(e);
//       }
//    }
// }

// function addItem(e){
//    const productId = e.target.getAttribute("id");

//    if(!wishlist.find(item => item === productId)){
//       const productDiv = document.getElementById("product" + productId);
   
//       const wishDiv = document.createElement("div");
//       wishDiv.setAttribute("id", "wish" + productId);
//       wishDiv.setAttribute("class", "music-items");
//       wishDiv.innerHTML = productDiv.innerHTML;
   
//       const removeBtn = document.createElement("input");
//       removeBtn.setAttribute("type", "button");
//       removeBtn.setAttribute("value", "Remove");
//       removeBtn.onclick = function(){removeItem(productId)}
//       wishDiv.appendChild(removeBtn);
   
//       let aside = document.getElementById("wishlist");
//       aside.appendChild(wishDiv);
   
//       wishlist.push(productId);
//       console.log(wishlist);
//    }
// }


// function removeItem(productId){
//    const product = document.getElementById("wish" + productId);
//    product.remove();
//    wishlist = wishlist.filter(item => item !== productId);
//    console.log(wishlist);
// }

// window.addEventListener("load", setup);