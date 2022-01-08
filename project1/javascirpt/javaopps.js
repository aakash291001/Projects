//Object oriented programming in javascript
//Javascript allows you to create object without defining class
var bird = {
    color:["Orange","Blue","Silver"],
    // xpos:30,
    // ypos:40,
    xpos:0,
    ypos:0,
    name:"Chiguana",
    fun:function(x,y)
    {
        if(x!=0&&y!=0)
        console.log("Bird is Flying");
        else
        console.log("Bird is not flying");
    }
};
for(let i=0;i<bird.color["length"];i++)
{
    console.log(bird.color[i]);
}
bird.color.forEach(function(idx,val)
{
    console.log(idx," :",val);
});