



let users = [
    { id: 1, email: "e.rahimi2019@gmail.com", password: "123456", name: "Elyass" },
    
  ];



let log = document.getElementById("login");
log.onclick =function(){
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;


       let userIndex = users.findIndex(user => user.email === email && user.password === password);
  
        if (userIndex !== -1) {
      
          alert("welcome");
   
          window.location.href= "../pages/admindata.html"; 
          
      
 
        }
        
        else {
          
        alert("faild");
      
        window.location.href= "../pages/admindata.html"; 
        }
     

}

