canvas = document.getElementById('Canvas1');
function f()
{
    console.log("You have clicked in the canvas");
}
canvas.addEventListener('click',f);
document.addEventListener('click',function(){
    console.log("You click outside the canvas");
});
function f2(e)
{
    console.log("key got pressed is ",e.key);
}
document.addEventListener('keydown',f2);