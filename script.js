const body= document.querySelector("body");
const buttons= document.querySelectorAll(".button");
const reset_btn= document.querySelector('.reset-btn');
console.log(body);
console.log(buttons);
buttons.forEach(function(button){
    console.log(button);
    button.addEventListener('click',function(e){
        console.log(e.target);
        console.log(e.target.id);
        if(e.target.id=== 'red'){
            body.style.backgroundColor= e.target.id;
        }
        if(e.target.id=== 'yellow'){
            body.style.backgroundColor= e.target.id;
        }
        if(e.target.id=== 'green'){
            body.style.backgroundColor= e.target.id;
        }
        if(e.target.id=== 'aqua'){
            body.style.backgroundColor= e.target.id;
        }
    })
});
console.log(reset_btn);
reset_btn.addEventListener('click', function(e){
console.log(e.target.id);
if(e.target.id==='reset'){
    body.style.backgroundColor="white";
}
});





