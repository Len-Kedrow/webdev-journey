let total=0; 
let currentdigit=0; // not used may need flag for track user input
let previouspush=0; //flag used to hold the last number entered by user. 
let maths = "none"; //flag to track operation to be done on user input. Not implemented completely
let screeninfo = ""; //string used for screen output. 

//number buttons
document.querySelector('#one').addEventListener('click', one);
document.querySelector('#two').addEventListener('click', two);
document.querySelector('#three').addEventListener('click', three);
document.querySelector('#four').addEventListener('click', four);
document.querySelector('#five').addEventListener('click', five);
document.querySelector('#six').addEventListener('click', six);
document.querySelector('#seven').addEventListener('click', seven);
document.querySelector('#eight').addEventListener('click', eight);
document.querySelector('#nine').addEventListener('click', nine );
document.querySelector('#zero').addEventListener('click', zero);

//operator buttons
document.querySelector('#plus').addEventListener('click', plus);
document.querySelector('#minus').addEventListener('click', minus);
document.querySelector('#times').addEventListener('click', times);
document.querySelector('#divide').addEventListener('click', divide);
document.querySelector('#clear').addEventListener('click', clear);
document.querySelector('#equal').addEventListener('click', equal);

//numberbutton functions
function one(){
        previouspush=1;
        screeninfo = screeninfo+"1";
        document.querySelector("#screen p").innerHTML = screeninfo; 
}

function two(){
    previouspush=2;
    screeninfo = screeninfo+"2";
    document.querySelector("#screen p").innerHTML = screeninfo; 
}

function three(){
    previouspush=3;
    screeninfo = screeninfo+"3";
    document.querySelector("#screen p").innerHTML = screeninfo; ; 
}

function four(){
    previouspush=4;
    screeninfo = screeninfo+"4";
    document.querySelector("#screen p").innerHTML = screeninfo; 
}

function five(){
    previouspush=5;
    screeninfo = screeninfo+"5";
    document.querySelector("#screen p").innerHTML = screeninfo; 
}

function six(){
    previouspush=6;
    screeninfo = screeninfo+"6";
    document.querySelector("#screen p").innerHTML = screeninfo; 
}

function seven(){
    previouspush=7;
    screeninfo = screeninfo+"7";
    document.querySelector("#screen p").innerHTML = screeninfo; 
}

function eight(){
    previouspush=8;
    screeninfo = screeninfo+"8";
    document.querySelector("#screen p").innerHTML = screeninfo; 
}

function nine(){
    previouspush=9;
    screeninfo = screeninfo+"9";
    document.querySelector("#screen p").innerHTML = screeninfo; 
}

function zero(){
    previouspush=0;
    screeninfo = screeninfo+"0";
    document.querySelector("#screen p").innerHTML = screeninfo; 
}

//operator button functoins 

function plus(){
//creates a string with first user value and the operator sign. There has to be a betterway.     
    if(maths=="none"){
    maths = "plus";
    screeninfo = screeninfo + "+";
    document.querySelector('#screen p' ).innerHTML = screeninfo;    
    }
    else{
        document.querySelector('#screen p').innerHTML = screeninfo;
    }
}


//same as plus but for subtraction. 
    function minus(){
        if(maths=="none"){
            maths = "minus";
            screeninfo = screeninfo + "-";
            document.querySelector('#screen p' ).innerHTML = screeninfo;    
            }
            else{
                document.querySelector('#screen p').innerHTML = screeninfo;    
        }
}

//when pressed returns teh calculator to starting state 
    function clear(){
    total=0; 
    currentdigit=0; 
    previouspush=0;
    maths = "none";
    screeninfo ="";
    document.querySelector('#screen p' ).innerHTML = "TExt here maybe";
    }
/*when pressed will calculate user input. Currently the function is janky as all get out and my javascript knowledge is
limited, so I may or may not come back to this idea*/
  
function equal(){
        let numbers =  screeninfo.match(/\d+/g);
        if(maths=="plus"){
            document.querySelector('#screen p' ).innerHTML = (parseInt(numbers[0])+parseInt(numbers[1]));
        }
        else if(maths=="minus"){
            document.querySelector('#screen p').innerHTML = (parseInt(numbers[0])-parseInt(numbers[1]));
        }
        else{
            screeninfo="That functionality is still cooking"
            document.quereySelector('#screen p').innerHTML = screen;
        }
    }

