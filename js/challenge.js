document.addEventListener('DOMContentLoaded', () =>{
let counter = document.getElementById("counter");
let minus = document.getElementById("minus");
let plus = document.getElementById("plus");
let heart = document.getElementById("heart");
let pause = document.getElementById("pause");
let int = 0;
let buttons = document.querySelectorAll("button");
let paused = 0;
let form = document.getElementById("comment-form");
let likesObj = {
}

let secondCounter = setInterval(()=> {
    counter.textContent = (parseInt(counter.textContent) + 1)
},1000)

plus.addEventListener("click",function(){
    int++;
    counter.innerHTML = int;
    updateLikes()
    
})

minus.addEventListener("click", function(){
    int--;
    counter.innerHTML = int;
    updateLikes()
})

pause.addEventListener("click",function(){
  
    if(paused === 0){
      pause.innerHTML = "resume";
      clearInterval(secondCounter);
      minus.disabled = true;
      plus.disabled = true;
      heart.disabled = true;
      submit.disabled = true;
      paused = 1;
      updateLikes()
    }
  else{
      pause.innerHTML = "pause";
      minus.disabled = false;
      plus.disabled = false;
      heart.disabled = false;
      submit.disabled = false;
      paused = 0;
      secondCounter = setInterval(()=> {
        counter.textContent = (parseInt(counter.textContent) + 1)
    },1000)
    updateLikes()
    }
})

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let comment = document.getElementById('comment-input');
    let list = document.getElementById('list');
    let p = document.createElement('p');
    p.textContent = comment.value;
    list.appendChild(p)
    comment.value = ''
})
heart.addEventListener('click', ()=> {
    if(likesObj[counter.textContent]){
        likesObj[counter.textContent] += 1
    }
    else{
        likesObj[counter.textContent] = 1
    }
    likes.replaceChildren()
    for (const [k, v] of Object.entries(likesObj)){
        let li = document.createElement('li')
        let optionalS = ''
        if (v>1){
            optionalS = 's'
        }
        li.textContent = `${k} has ${v} like${optionalS}`
        likes.appendChild(li)
    }
})


})

