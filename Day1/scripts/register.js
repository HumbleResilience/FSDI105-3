console.log("User register");
//create constructor
class User{
    constructor(email, pass, first, last, age, address, phone, payment, color){
        //this.attribute = parameter
        this.email=email;
        this.password=pass;
        this.fname=first;
        this.lname=last;
        this.age=age;
        this.address=address;
        this.phone=phone;
        this.payment=payment;
        this.color=color;

    }
}



function isValid(user){
    //return false when user is not valid
    //return true when user is valid
    let valid=true;

    //we reset the original appearance all inputs
    //by removing the error in class (style.css)
    $('input').removeClass('error');

    if(user.fname.length==0){
        //if we get here then the first name has not a valid value
        valid=false;
        $("#txtFirstName").addClass('error');
    }
    if(user.lname.length==0){
        //is not a valid value
        $('#txtLastName').addClass('error');
        valid=false;
    }
    if(user.password.length==0){
        //is not a valid value
        $("#txtPassword").addClass('error');
        valid=false;
        
    }
    if(user.email.length==0){
        //not a valid value
        $("#txtEmail").addClass('error');
        valid=false;
    }
    clearInputs();

    return valid;

    
}


function registerUser(){
    let email=$("#txtEmail").val(); //email id on html
    let password=$("#txtPassword").val();//password id
    let fname=$("#txtFirstName").val();
    let lname=$("#txtLastName").val();
    let age=$("#txtAge").val();
    let address=$("#txtAddress").val();
    let phone=$("#txtPhone").val();
    let payment=$("#selPayment").val();
    let color=$("#txtColor").val();
   
    //create an object
    let user=new User(email, password, fname, lname, age, address, phone, payment, color);

    //creating an instance
    if(isValid(user)){
        // $('#usersTable').append(createRow(user));
        saveUser(user); // this fn is on the storeManager.js
    }
    
    console.log(user);
}


// clears inputs from html
function clearInputs(){
    $('#txtFirstName').val('');
    $('#txtLastName').val('');
    $('#txtPassword').val('');
    $('#txtEmail').val('');
    $('#txtAge').val('');
    $('#txtAddress').val('');
    $('#txtPhone').val('');
    $('#selPayment').val('');
    $('#txtColor').val('');
    
}



function init(){
    console.log("Init Function");

}

window.onload=init;