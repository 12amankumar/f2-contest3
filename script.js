function validation(){
 let Name=document.getElementById('name').value;
 let Email=document.getElementById('email').value;
 let Password=document.getElementById('password').value;
 let cpass=document.getElementById('confirm').value;

    if(Name==''){
      document.getElementById("userr").innerHTML='please  enter your name';
      return false;
    }
    if(Name.length<2){
        document.getElementById("userr").innerHTML='please enter atleast 2 characters';
        return false;
    }
    if(!isNaN(Name)){
        document.getElementById("userr").innerHTML='please enter alpha-numeric characters';
        return false;
    }
    else {
        document.getElementById("userr").innerHTML='';

    }
    if(Email==''){
        document.getElementById("emaill").innerHTML='please enter your email';
        return false;
    }
    if(Email.indexOf('@')<=0)
    {
        document.getElementById("emaill").innerHTML='please enter valid email';
        return false;
    }
    else {
        document.getElementById("emaill").innerHTML='';

    }

    if(Password==''){
        document.getElementById("passs").innerHTML='please enter your password';
        return false;
    }
    if(Password.length<8){
        document.getElementById("passs").innerHTML='please enter more than 8 characters';
        return false;
    }
    if(Password.search(/[0-9]/)==-1)
    {
        document.getElementById("passs").innerHTML='please enter atleast one numeric characters';
        return false;
    }
    if(Password.search(/[a-z]/)==-1)
    {
        document.getElementById("passs").innerHTML='please enter atleast one lower characters';
        return false;
    }
    if(Password.search(/[A-Z]/)==-1)
    {
        document.getElementById("passs").innerHTML='please enter atleast one capital characters';
        return false;
    }
    if(Password.search(/[!/@/#/$/%/^/&/*/(/)/_/+/</>/?]/)==-1)
    {
        document.getElementById("passs").innerHTML='please enter atleast one speacial  characters';
        return false;
    }
    else {
        document.getElementById("passs").innerHTML='';

    }
    if(cpass!=conpass){
        document.getElementById("conpass").innerHTML='password do not match';
        return false;
    }
    else {
        document.getElementById("conpass").innerHTML='';

    }

//   let arr=[
//     {id: 1, name: "Abhishek", email: "abhishek@gmail.com", password: "Abhishek123#!" },
//     {id: 2, name: "Abhi", email: "abhi@gmail.com", password: "452255njjnA@" },
//     {id: 3, name: "Aman", email: "aman@gmail.com", password: "Ajjjhghghvfgf12@" },
//     {id: 4, name: "Raj", email: "raj@gmail.com", password: "Abghgfgfg123#!" },
//     {id: 5, name: "Manoj", email: "manoj@gmail.com", password: "Aasdghhh12@" },
   
//   ]
 
//   let table=document.createElement('table');
//   for(let i of arr){
//     tr=table.insertRow(-1);

//     for(let key in i){
//         let td=tr.insertCell(-1);
//         td.innerHTML=${key}:${i[key]};

//     }
//   }

}