
const btn=document.querySelector("#xml");
const btn1=document.querySelector("#fetch");
const btn3=document.querySelector("#axios");
const paragraph=document.querySelector(".text");
const url='https://ron-swanson-quotes.herokuapp.com/v2/quotes';

btn.addEventListener("click",()=>{

    const request=new XMLHttpRequest();
    request.open('GET',url);
    request.send();
    request.addEventListener("load",()=>{
        if(request.readyState===4 && request.status===200){
            const quotes=JSON.parse(request.responseText)[0];
            console.log(quotes);
            paragraph.innerText=quotes;
        }
    })
});
btn1.addEventListener("click",()=>{
    fetch(url)
        .then((response)=>{
            return response.json()
        })
        .then((data)=>{
            console.log(data)
            paragraph.innerText=data[0]
        })
        .catch((error)=>{
            error="message not found"
            alert(error)
        })
})


    $("#jquery").click(function(){

       $.ajax({
           method:'GET',
           url:url,
           dataType:'json'
       })
           .done(function(response){
               console.log(response)
               $("#text").text(response[0])
           })
           .fail(function(error){
               alert(error)
           })
    })


btn3.addEventListener("click",()=>{

    axios.get(url)
        .then((res)=>{
            paragraph.innerText=res.data[0]
        })
        .catch((error)=>{
            error="message not found"
            alert(error)
        })
})