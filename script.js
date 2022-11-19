console.log(sessionStorage)

button= document.querySelector("button")
a=document.querySelectorAll("input")

button.addEventListener("click",()=>{
    i=0;
    while (i<a.length) {
        sessionStorage.setItem(a[i].name,a[i].value)
        i++
    }
    console.log(sessionStorage)
})