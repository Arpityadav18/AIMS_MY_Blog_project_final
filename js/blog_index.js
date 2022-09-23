function adduser(){
    const arr1=["a","b"];
    var title = document.getElementById('title').value;
    var author = document.getElementById('author').value;
    var date = document.getElementById('date').value;
    var massage = document.getElementById('massage').value;
    
    var obj1={
        title:title,
        author:author,
        date:date,
        massage:massage
    }
       
    arr1.unshift(obj1);

        

       


    
    
    // document.getElementById('result').innerHTML=arr1;
    
    document.getElementById('result').innerHTML="<b>Title: </b>"+title+' '+"<br>"+"<b>Author: </b> "+author+' '+"<br>"+"<b>Date: </b>"+date+"<br>"+"<b>Article: </b>"+massage
    
    if(title==null || title==''){
        alert("Title can not Blank")
        }else if (author==null || author==""){
        alert("Author Name can not be blank");
        }else if (date==null || date==""){
        alert("Date can not be blank");
        }else if (massage==null ||massage==""){
        alert("Massage can not be blank");
        }else{
        alert("form is submitted successfully");
        }
        document.getElementById("myform");    


    
}


var loadFile = function(event) {
    var image = document.getElementById('output');
    image.src = URL.createObjectURL(event.target.files[0]);
};