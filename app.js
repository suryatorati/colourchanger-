const button= document.querySelector("button")
const body=document.querySelector("body")
const color=['red','green','blue','brown','violet','yellow']
button.addEventListener('click',change)
function change(){
document.body.style.background=color[Math.floor(Math.random()*color.length)]
}