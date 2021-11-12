let sign = 'X';
function clickMe(event)
{
    let tikBox = document.getElementById("div"+event).innerText;
    if(tikBox =="")
    {
        document.getElementById("div"+event).innerText = sign;
        checkTik();
        document.getElementById('turn').innerText = sign+"'s";
    }
    if(getWinner()==true)
    {
        document.getElementById('winning-message').style.display = "block";
    }
    else 
    {
        if(checkDraw() == true)
        {
            document.getElementById('draw-message').style.display = "block";
        }
    }
}

function checkTik()
{
    if(sign=="X")
    {
        sign = "0";
    }
    else 
    {
        sign = "X"
    }
}
document.getElementById('restart-button').addEventListener('click',function()
{
    for(let i=1; i<=9; i++)
    {
        document.getElementById('div'+i).innerText = '';
    }
    document.getElementById('winning-message').style.display = "none";
    document.getElementById('draw-message').style.display = "none";
   
})
function getData(div)
{
    return document.getElementById(div).innerHTML;
}
function getWinner()
{
    if(checkTicCondition('div1','div2','div3') || checkTicCondition('div1','div4','div7') ||
    checkTicCondition('div1','div5','div9') || checkTicCondition('div3','div6','div9') ||
    checkTicCondition('div4','div5','div6') || checkTicCondition('div7','div8','div9') ||
    checkTicCondition('div3','div5','div7') 
    )
    {
        return true;
    }
   
}
function checkTicCondition(tic1,tic2,tic3)
{
    if(getData(tic1)!="" && getData(tic2)!="" && getData(tic3)!="")
    {
        if(getData(tic1)==getData(tic2) && getData(tic2)==getData(tic3))
        {
            return true;
        }
    }
}
function checkDraw()
{
    if(
        getData('div1')!="" &&  getData('div2')!="" &&  getData('div3')!="" &&
        getData('div4')!="" &&  getData('div5')!="" &&  getData('div6')!="" &&
        getData('div7')!="" &&  getData('div8')!="" &&  getData('div9')!=""
    )
    {
        return true;
    }
}