function createRow(user){
    return`<tr>
                <td>${user.fname}</td>
                <td>${user.lname}</td>
                <td>${user.email}</td>
                <td>${user.age}</td>
                <td>${user.phone}</td>
                <td>${user.address}</td>
                
           </tr>`;
}