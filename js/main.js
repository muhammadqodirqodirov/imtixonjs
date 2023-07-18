const getLinku="https://api.github.com/users/muhammadqodirqodirov";
const getLinkf="https://api.github.com/users/muhammadqodirqodirov/followers";
const getLinkr="https://api.github.com/users/muhammadqodirqodirov/repos";
const btna=document.querySelectorAll(".btns")
const btnover=document.querySelector(".todo__btn1");
const btnrepo=document.querySelector(".todo__btn2");
const gitTodo=document.querySelector(".git__todo");
const followerText=document.querySelector(".follow__link");
const contentMain=document.querySelector(".main__content-block");
const inputype=document.querySelector(".main__content-box");
const reposite=document.querySelector(".reposit__content")
const box = document.querySelector(".box");
const box2= document.querySelector(".box2");
const box3=document.querySelector(".box3");
// to do list lina
const todoList=document.querySelector(".todo__list")
const todoList2=document.querySelector(".list2")
// 
const span=document.querySelector(".span1");
//
const link = document.querySelector(".git__title"); 
const logoa= document.querySelector(".logo__block");
// 

logoa.addEventListener('click', async (qiymat)=>{
    if(qiymat.target.className=="git__title"){
        try {
            const res = await fetch(getLinku);
            const data = res.json();
        } catch (error) {
            console.log(error);
        }
    }
})
gitTodo.addEventListener('click',async (e)=>{
    e.preventDefault();
    if(e.target.classList.contains("todo__btn2")){
        console.log("hello");
        box3.style.display="none";
        contentMain.style.display="inline-block";
        inputype.style.display="none";  
        box2.style.display="inline-block";
        todoList.style.display="none";
        todoList2.style.display="inline-block";
    }
})
gitTodo.addEventListener('click',(e)=>{
if(e.target.classList.contains("todo__btn1")){
    box3.style.display="inline-block";
    box3.style.display="flex";
    box3.style.flexWrap="wrap";
    box2.style.display="none";
    contentMain.style.display="none";
    inputype.style.display="inline-block";  
    inputype.style.display="flex";
    todoList.style.display="inline-block";
    todoList2.style.display="none"; 
}
})
const renderLs=(data)=>{
    box2.innerHTML=data?.map(
        (el)=>`
        <div class="reposit__content">
                        <div class="reposit__content-block">
                            <a target="_blank" class="reposit__link" href="${el.html_url}">${el.name}</a>
                            <span class="reposit__span item__span">${el.visibility}</span>
                            <div class="reposit__mini-block">
                                <span class="span1 item__content-span"></span>
                                <span class="reposit__content-text">${el.language}</span>
                                <span class="reposit__content-text">${el.updated_at}</span></div>
                        </div>
                        <div class="reposit__btn">
                            <form>
                                <div class="reposit__box">
                                    <button class="reposit__btn-b" type="button">
                                        Star
                                    </button>
                                    <button class="reposit__btn-s" type="button"></button>
                                </div>
                            </form>
                        </div>
                    </div>
        `
        ).join("");
}
const getRepost= async ()=>{
    try {
        const res = await fetch(getLinkr) ;
        const data = await res.json();
        renderLs(data);
    } catch (error) {
        console.log(error);
    }
}
getRepost();
const renderOver=(data)=>{
 box3.innerHTML=data?.map((el)=>`
 <div class="main__content">
 <ul class="main__list">
   <li class="main__item">
   <div class="content__text">
       <a target="_blank" class="item__link" href="${el.html_url}">${el.name}</a>
       <span class="item__span">${el.visibility}</span>
   </div>
   <div class="item__text">
       <span class="item__content-span"></span>
       <p class="item__content-text">${el.language}</p>
   </div>
</li>
   </ul>
   </div>
   ` ).join("");
}
const getOver= async ()=>{
   try{ const res = await fetch(getLinkr);
    const data = await res.json();
    renderOver(data);
}catch (err){
 console.log(err);
}
}
getOver();
const render =(data)=>{
    box.innerHTML=data?.map(
        (el)=>`
        <div class="content__js">
        <div class="content__jss">
        <img class="img" src="${el?.avatar_url}">
        <p>${el?.login}</p>
        </div>
        <button class="btn__unfollow">unfollow</button>
        </div>
        `
    ).join("");
}

const getData= async ()=>{
    try {
        const res = await fetch(getLinkf);
        const data = await res.json();
         render(data);
     } catch (error) {
         console.log(error);
     }
}
followerText.addEventListener("click",async (e)=>{
    e.preventDefault();
       if(e.target.className=="follow__text"){
        try {
            const res = await fetch(getLinkf,
            {
               method:"GET",
               headers:{
                "Content-Type":"application/github"
               } 
            }
            );
            const data = await res.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        }finally{
            getData();
        }
        box3.style.display="none";
        // inputype.style.display="none";
        box2.style.display="none";
        todoList.style.display="none";
        todoList2.style.display="none";
       }
})





