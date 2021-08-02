function myinput(val)
{
    document.getElementById("calc").value+=val;
}
function input(val)
{
    document.getElementById("calc").value=val;
}
function solve()
{
    input(eval(document.getElementById("calc").value))
}