let username=document.getElementById("username");
let button=document.getElementById("send");
let title=document.getElementById("title");
let img=document.getElementById("img");
let followers=document.getElementById("followers");
let following=document.getElementById("following");
let repos=document.getElementById("repos");
let reposlist=document.getElementById("reposlist");

button.addEventListener("click",function()
{

let request=new XMLHttpRequest();
request.open("GET",`https://api.github.com/users/${username.value}`,true);
request.addEventListener("load",function(){
  let obj=JSON.parse(request.responseText);
  img.setAttribute("src",obj.avatar_url);
  title.innerHTML=`${obj.name} (@${obj.login})`;
  followers.innerHTML="Followers :"+obj.followers;
})
request.send();

let reporequest=new XMLHttpRequest();
reporequest.open("GET",`https://api.github.com/users/${username.value}/repos`,true);
reporequest.addEventListener("load",function(){
  let obj=JSON.parse(reporequest.responseText);
 obj.forEach(function(repo){
   let span=document.createElement("Span");
   span.innerHTML=repo.name;
   reposlist.appendChild(span);
   
 })
})
reporequest.send();





})
