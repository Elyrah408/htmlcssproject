let dataArray = [     

    {
      id:1,
      pname:"Iphone with computer",
      description: "sunset at the beach.",
      image: "../img/pr4.jpeg",
      price:100,
      stock:"3",
    },
    {
      id:2,
      pname:"telephone",
      description: " of hiking in the mountains.",
      image:  "../img/pr5.jpeg",
      price:110,
      stock:"3",
    },
    {
      id: 3,
      pname:"Power Bank",
      description: " nightlife in the city.",
      image:  "../img/pr6.jpeg",
      price:120,
      stock:"4",
    },
    {
    id:4,
      pname:"iphone4",
      description: "Relax in the  green forest.",
      image:  "../img/pr2.jpg",
      price:130,
      stock:"5",

    },

    {
        id:5,
          pname:"Keboard",
         
          description: "Relax in the  green forest.",
          image:  "../img/pr2.jpg",
          price:130,
          stock:"6",
    
        },
    
  ];


 


  localStorage.setItem("mydata", JSON.stringify(dataArray));





  let datadetail =[];
  let total= 0;
  
 





  


  function loadCards(data) {
    const container = document.getElementById("container");


    container.innerHTML = "";

    data.forEach((item) => {

      const product = document.createElement("div");
      const  addToBox = document.createElement("a");
      addToBox.id="boxid";
      addToBox.textContent="Buy now";
      product.classList.add("product");

      product.innerHTML = `
        <img src="${item.image}" alt="${item.pname}">
         <h4>${item.pname}</h4>
        <p>${item.description}</p>
        
        <p id ="price"> $${item.price}</p>
        <br>
        <p>stock ${item.stock}</p>
        
      `;

      container.appendChild(product);
      product.appendChild(addToBox);

      addToBox.addEventListener("click",()=>{
       
        datadetail.push(item);
        // alert(datadetail);
        alert("Product added Successfuly");
     

        total += item.price;
        const x = document.getElementById("tot");
        const number = document.getElementById("num");

        x.innerText=total;
        number.innerText=datadetail.length;

      
        // datadetail.forEach((data,arryIndex)=>{
        

        // });
     


      });
    });
  }

  window.onload = () => {
    loadCards(dataArray);
  };

  // <a href=''>Buy Now</a>