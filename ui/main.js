console.log('Loaded!');

var button=document.getElementById("counter");
var count=document.getElementById("count");
var counter=0;

button.onclick = function(){
    counter=counter+1;
    count.innerHTML=counter.toString();
};

var nameinput=document.getElementById("name");
var name=nameinput.value;
var submit=document.getElementById("submit_btn");
submit.onclick=function(){
    
    var request=new XMLHttpRequest();
    
    request.onreadystatechange=function(){
      if(request.readyState===XMLHttpRequest.Done){
          if(request.status===200){
               var names=["name1","name2","name3"];
                var list="";
                for(var i=0;i<names.length;i++){
                     list+="<li>"+names[i]+"</li>";
                    }
                var ul=document.getElementById("namelist");
                ul.innerHTML=list;
   
          }
      }  
    };
    request.open('GET',"http://ramkumar2611v.imad.hasura-app.io/submit-name?name=" + nameinput,true);
    request.send(null);
    
};
