function varTest(){
    var num1 =10;	    
    console.log(num1);  //output 10
    if(true){
     var num2=20;       
     console.log(num2); //output 20
    }
    console.log(num1);  //output 10
    console.log(num2);  //output 20
  }

 function letTest(){
    var num1 =10;	    
    console.log(num1);  //output 10
    if(true){
     let num2=20;       
     console.log(num2); //output 20
    }
    console.log(num1);  //output 10
    //console.log(num2);  //Cannot be accessed here
  }

  varTest()
  letTest()
