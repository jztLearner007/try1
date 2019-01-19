//other lang this and other are different everything is weried here 

//there are 4 rules basically in ===>This sector 

//common sennse vs js this

function hello(){
    console.log(this);
}

hello();

//Everything is window  everything is defaulty binded everything is getting globaly leeked anything can access this hello inner function anyother function can access it .


//2


//THIS IS CALLED DEFAULT BINDING

function hello1(){
    var x = 100 // This is a functional scope
    this.x = 19 ; //this is global scope

    add();
}

function add(){
    console.log(this);
}


hello1();


//2 IMPLICIT BINDING


var obj = {
    fruit:function (){
        console.log(this);
    }
}

obj.fruit();

// /do check what is the left sde of the function calling this if there and whatever that is that become this //#endregion


//Explict binding :->Controlling the value of this forcefully ;

// To xplicity bind use method .call(vale of this )


//Constructive Binding //#endregion

//Every function in js is a class 
// Function and obj cant be seprated You crate a func and you will get obj itself //#endregion
//How class keyword works nternally 


function Greet(){
    this.name = 'Sham';
    this.category = 'player';
}

var player1 = Greet();
console.log(player1);




//call apply this new  protype 