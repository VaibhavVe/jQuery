$("h1") .addClass("big-tittle");
// $("h1").removeClass("big-tittle");
//$("h1") .text("Vaibhav")
//$("button") .html("<em>Click Me<em>");
//$("img") .attr("src");
//$("a") .attr("href", "");//In this you can see what is href and in second "" yoou change it from here.
//$("h1") .click(function(){

    //$("h1").css("color", "purple")
//});
//$("button").click(function(){
 //   $("h1").css("color","purple")
//})
//$("input").keypress(function(event){
  //  $("h1") .text(event.key)

//})
//very useful efficient than other
//$("h1") .on("mouseover", function () {
//    $("h1") .css("color", "red")
//})

$("h1") .on("click", function(){
    $("h1").animate({opacity:0.5})// you can use only in the {} which have numerical value.
})