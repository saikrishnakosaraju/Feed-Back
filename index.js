const ratingEls= document.querySelectorAll(".rating");
const bt=document.getElementById("btn")
const cnt=document.getElementById("container");

let selectedRating = "";
ratingEls.forEach((ratingEl) =>{
    ratingEl.addEventListener("click",(event)=>{
       removeActive();
       selectedRating=event.target.innerText ||
       event.target.parentNode.innerText;
       
        event.target.classList.add("active")
        event.target.parentNode.classList.add("active")


    });
});

bt.addEventListener("click",()=>{
    if(selectedRating !== "")
    {
        cnt.innerHTML=`<strong>Thank You for you feedbacck</strong>
        <br><br><strong> Status = "${selectedRating}" </strong>`   
     }
    
});

function removeActive(){
    ratingEls.forEach((ratingEl)=>{
        ratingEl.classList.remove("active");
        ratingEl.parentNode.classList.remove("active");


    })
}


