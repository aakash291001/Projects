var bird = {};
var bird_str = {
    eggs : 4,
    color : ["RED","BLUE","YELLOW"],
    height : 4.2,
    x : 20,
    y:30,
    fly:function()
    {
        console.log("the bird id flying at ",this.x,this.y);
    }
};
for(let i = 0;i<bird_str.color.length;i++)
{
    console.log(bird_str.color[i]);
}
bird_str.color.forEach(function(idx,val)//First parameter is array element,Second parameter is always index
{
    console.log(idx," :",val);
});
bird_str.color.forEach(myfun);
function myfun(item,index)
{
    console.log(item,":",index);
}
// data types:
// undefined,null,Boolean,string,symbol,number,object

function 