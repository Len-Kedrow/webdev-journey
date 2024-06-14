let total=0; 
let num1= "q" ; 
let num2= "q";  
let maths= "none"
let screeninfo = ""; //string used for screen output. 



for(let i=0; i<document.querySelectorAll(".box").length; i++){

    document.querySelectorAll(".box")[i].addEventListener("click", buttonPressed);
}


//Single Function for all buttons but clear
function buttonPressed(){
    if(this.innerHTML=="C"){
    total=0; 
    currentdigit=0; 
    previouspush=0;
    maths = "none";
    screeninfo ="";
    document.querySelector('#screen').innerHTML = "Cleared";
    }
    
    else if(this.innerHTML=="+"){
        
        if(num1=="q"||num2=="q")
            document.querySelector('#screen').innerHTML = add(num1,num2);     
        else{
            screeninfo = screen = "+";
        }
    }

    else{

        document.querySelector("#screen p").innerHTML = this.innerHTML;;
    }
}





function add(n1, n2){
    return n1+n2;
}

function calculator(n1, n2, operator){
    return(operator(n1, n2));

}