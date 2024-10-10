let seletedItem = document.querySelector(".dropdown-selected-item-txt")
const dropdown_items = document.querySelectorAll(".dropdown-items")
const dropdown_item = document.querySelector(".item")
let selectedItemTxt = document.querySelector(".seleted-item")
dropdown_items.forEach((opt)=>{
   opt.addEventListener("click",()=>{
      let seletedItem = document.querySelector(".dropdown-selected-item-txt")
      seletedItem.innerHTML = opt.innerHTML
   })
})

