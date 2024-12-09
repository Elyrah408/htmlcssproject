
let dataArray = [     

    {
      id:1,
      pname:"iphon x",
      description: "sunset at the beach.",
      image: "../img/pr3.jpg",
      price:'100',
    },
    {
      id:2,
      pname:"iphone 12 with computer",
      description: " of hiking in the mountains.",
      image:  "../img/pr2.jpg",
      price:'110',
    },
    {
      id: 3,
      pname:"Keyboard",
      description: " nightlife in the city.",
      image:  "../img/pr4.jpeg",
      price:'120',
    },
    {
    id:4,
      pname:"Headphone",
      description: "Relax in the  green forest.",
      image:  "../img/pr5.jpeg",
      price:'130',

    },

    {
        id:5,
          pname:"power Bnank",
         
          description: "Relax in the  green forest.",
          image:  "../img/pr6.jpeg",
          price:'130',
    
        },
    
  ];









// let mydata = localStorage.getItem("mydata");
// let productData = localStorage.getItem("mydata");

// alert(productData);
 // <button id="view">View</button>

function loaddata(data) {

    const container = document.querySelector(".section2");


    container.innerHTML = "";

    data.forEach((item) => {

      const product = document.createElement("div");
      const view = document.createElement("button");
      const delet = document.createElement("button");
      view.id="view";
      view.textContent="View";
      delet.id="delete";
      delet.textContent="Delete";

      product.classList.add("productitem");
      product.innerHTML = `<img src="${item.image}" alt="${item.pname}" id="productphoto">
         <br>
        <h3 id="pname">${item.pname}</h3>
         <br>
          <p id="pdesciption">${item.description}</p>
         <br>
          <p id="price">${item.price}</p>
         
          <button id="approve">Approve</button>
          <button id="update">Update</button>
         

      
       
      `;

      container.appendChild(product);
      product.appendChild(delet);
      product.appendChild(view);
     
     

      view.addEventListener("click",()=>{

        showPopup(item.pname, item.image, item.description, item.price);
       


        

      });

      delet.addEventListener("click",()=>{
       
       

        
      });
      

    

    });
  }

  window.onload = () => {
    loaddata(dataArray);
  };


  function showPopup(title, image ,description,price) {

    // alert(title + image + description);
    document.getElementById("title1").textContent = title;
    document.getElementById("image1").src = image;
    document.getElementById("description").textContent = description;
    document.getElementById("price1").innerText = price;
    document.getElementById("modal1").style.display = 'flex';
    // alert("ok");
  
    
 

}

function closePopup() {
    // Hide the modal
    document.getElementById('modal1').style.display = 'none';
}