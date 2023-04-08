function buttonClick(input){
 
    document.getElementById("screen").value+=input
}
function clearDisplay(){
    document.getElementById('screen').value=""
}
function equal(){
    var text=document.getElementById('screen').value
    var result=eval(text);
    document.getElementById('screen').value=result

}