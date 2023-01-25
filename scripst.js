
var flag=0;

function display()
{
    document.getElementById("displaying").innerHTML=document.getElementById("namein").value;
    document.getElementById("con2").style.display="block";
}

function food()
{
    document.getElementById("eat").style.display="block";
    document.getElementById("eat").scrollIntoView();
    flag=1;
}

function clean()
{
    if(flag!=1)
    alert("Fill feeback for food first");
    else
    {
        document.getElementById("clea").style.display="block";
        document.getElementById("clea").scrollIntoView();
        flag=2;
    }
}

function staff()
{
    if(flag!=2)
    alert("Fill feeback for cleaning first");
    else
    {
        document.getElementById("sta").style.display="block";
        document.getElementById("sta").scrollIntoView();
        flag=3;
    }
}

function price()
{
    if(flag!=3)
    alert("Fill feeback for behaviour first");
    else
    {
        document.getElementById("pri").style.display="block";
        document.getElementById("take").style.display="inline-block";
        document.getElementById("pri").scrollIntoView();
        flag=4;
    }
}

function foods()
{
    document.getElementById("con3").style.display="block";
    var ele = document.getElementsByName('foods');
              
        for(i = 0; i < ele.length; i++)
        {
                if(ele[i].checked)
                document.getElementById("vin").innerHTML="Vegetables : "+ele[i].value;
        }

    var ele = document.getElementsByName('breadd');
        for(i = 0; i < ele.length; i++)
        {
                if(ele[i].checked)
                document.getElementById("bin").innerHTML="Breads : "+ele[i].value;
        }          
            
    var ele = document.getElementsByName('ricee');
    for(i = 0; i < ele.length; i++)
    {
                if(ele[i].checked)
                document.getElementById("rin").innerHTML="Rice : "+ele[i].value;
    } 

    var ele = document.getElementsByName('cleaning');
    for(i = 0; i < ele.length; i++)
    {
                if(ele[i].checked)
                document.getElementById("tin").innerHTML="Table : "+ele[i].value;
    } 
    var ele = document.getElementsByName('cleanings');
        for(i = 0; i < ele.length; i++)
        {
                if(ele[i].checked)
                document.getElementById("cin").innerHTML="Cutlery : "+ele[i].value;
        } 
        var ele = document.getElementsByName('cleaned');
        for(i = 0; i < ele.length; i++)
        {
                if(ele[i].checked)
                document.getElementById("din").innerHTML="Dining area : "+ele[i].value;
        } 
        var ele = document.getElementsByName('time');
        for(i = 0; i < ele.length; i++)
        {
                if(ele[i].checked)
                document.getElementById("fin").innerHTML="Was your order served at time ? : "+ele[i].value;
        } 
        var ele = document.getElementsByName('timee');
        for(i = 0; i < ele.length; i++)
        {
                if(ele[i].checked)
                document.getElementById("pin").innerHTML="Was your order served properly ? : "+ele[i].value;
        } 
        var ele = document.getElementsByName('timed');
        for(i = 0; i < ele.length; i++)
        {
                if(ele[i].checked)
                document.getElementById("ain").innerHTML="Pricing of the menu : "+ele[i].value;
        } 
        document.getElementById("con3").scrollIntoView();
    
}

