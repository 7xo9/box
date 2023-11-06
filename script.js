let btn1 = document.getElementById("button1")

let Wuser = document.getElementById("Wuser")
let Huser = document.getElementById("Huser")


let select = document.getElementById("Selcet")
let sub = document.getElementById("sub")
let reset = document.getElementById("re")
let border = document.getElementById("br")

sub.addEventListener("click", ()=>{




   if (select.value == "red"){
    btn1.style.cssText = `Width: ${Wuser.value}%; height: ${Huser.value}%; background-color: red; border-radius:${border.value}% ;`
   }else if(select.value == "blue"){
    btn1.style.cssText = `Width: ${Wuser.value}%; height: ${Huser.value}%; background-color: blue; border-radius:${border.value}% ;`
   }else if(select.value == "green"){
    btn1.style.cssText = `Width: ${Wuser.value}%; height: ${Huser.value}%; background-color: green; border-radius:${border.value}% ;`
   }


   

   
   
})

reset.addEventListener("click", ()=>{

    border.value=""
    Huser.value = ""
    Wuser.value= ""
    select.value= ""

    btn1.style.cssText= "Width: 30%; height: 30%; background-color: rgba(0, 255, 255, 0.679);"
})