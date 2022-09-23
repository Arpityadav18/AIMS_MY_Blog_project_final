function Submit(){
   
    var name = document.getElementById('name').value;
    var mobile = document.getElementById('mobile').value;
    var email = document.getElementById('email').value;
    var msg = document.getElementById('msg').value;


    if(name==null || name==''){
        alert("Name can not Blank")
        }else if (mobile==null || mobile==""){
        alert("Mobile No. can not be blank");
        }else if (email==null || email==""){
        alert("Email Id can not be blank");
        }else if (msg==null ||msg==""){
        alert("Massage can not be blank");
        }else{
        alert("form is submitted successfully");
        }
        document.getElementById("myform").reset();    
         
}




  