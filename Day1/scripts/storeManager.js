function saveUser(user){
    //load the old data
    let data=readUsers();
    //merge the data (new with old)
    data.push(user);

    let val =JSON.stringify(data);
    localStorage.setItem("users", val);
    // val is the string
    //user is the object local storage does not accept objects 
    //so we need to stringify it (turns object into string)

}

function readUsers(){
    let data=localStorage.getItem("users");
    if(!data){// if no data, create array 
        return[]; //create an array the first registration
    }else{
        let list=JSON.parse(data); //parse the string back into an object
        return list; //return object
    }
}


