let inputFill = document.getElementById("input-fill")

let checkBtn= document.getElementById("btn-check")


let fullResult=document.getElementById("result-show")
let allAlert = document.getElementById("alertOne")



checkBtn.addEventListener("click",function(){
 
 
    if(inputFill.value=="" ){
        allAlert.innerHTML=` <div class="alert alert-primary mt-4" role="alert">
        please write anything to check vowel
        </div>`
        allAlert.style.fontSize="1.3rem"
        setTimeout(()=>{
            allAlert.innerHTML=""
        },2000)
    }else{
        
    
   
   
   
    let inputShow =inputFill.value 
   


vowelCheck=()=>{
    
    let vowels=["a","e","i","o","u","A","E","I","O","U"]
let count =0;
for(let i=0; i<inputShow.length;i++){
    if(vowels.includes(inputShow[i])){
        count++;
    }
}
return count
}
let vowlVal= vowelCheck()
// console.log(vowlVal)

 if(vowlVal==1){
    fullResult.innerHTML=`<div class='alert alert-success mt-5' role='alert'>
    <h4 class="alert-heading">Well done!</h4>`+ "yeah!! there is "+" "+ vowlVal +" "+`vowel 💯
    
    </div>`
    
    fullResult.style.fontSize="1.3rem"
    fullResult.style.textDecoration="uppercase"
 }else if(vowlVal==0){
    fullResult.innerHTML=`<div class='alert alert-success mt-5' role='alert'>
    <h4 class="alert-heading">Well done!</h4>`+ "Sorry!!! no"+" "+`vowel ⚪
    
    </div>`
    
    fullResult.style.fontSize="1.3rem"
    
 }else{
    fullResult.innerHTML=`<div class='alert alert-success mt-5' role='alert'>
    <h4 class="alert-heading">Well done!</h4>`+ "nice!! there are "+" "+ vowlVal +" "+`vowels 💯
    
    </div>`
    
    fullResult.style.fontSize="1.3rem"
    fullResult.style.textDecoration="uppercase"
 }


 setTimeout(()=>{
    fullResult.innerHTML=""
 },3000)

    

inputFill.value =""
    }
})
