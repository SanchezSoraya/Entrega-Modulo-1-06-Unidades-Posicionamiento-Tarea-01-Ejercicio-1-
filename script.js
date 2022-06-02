
const textHideOrShow = document.getElementById("imagenHideOrShow") 


document.querySelector(".hide").addEventListener("click", ()=>{
  textHideOrShow.classList.add("hide-element")
})
document.querySelector(".show").addEventListener("click", ()=>{
  textHideOrShow.classList.remove("hide-element")
})