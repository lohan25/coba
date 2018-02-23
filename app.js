window.onload = function(){
  //  let
//  var x= 10;
  //  if(x > 5 ){
    //  let x=5;
      //console.log("Inside: " + x);
    //}
    //console.log("Outside: " + x );
//default parameter
  //  function log(name="lehon",belt="black",age="28"){
    //  console.log("My name is" + name + "and my belt is" + belt + "and my age is" + age);
  //  }
    //log();
//The spread Operator
    // var nums= [1,2,3];
    //
    // function addNums(a,b,c){
    //   console.log(a+b+c);
    // }
    // addNums(...nums);

  var name= "Crystal";
  var belt= "Black";

  var ninja={
    name: belt,
    chop : function(x){
      console.log('you chooped the enemy ${x} times ')
    }
  };
  console.log(ninja.chop(5));
}
