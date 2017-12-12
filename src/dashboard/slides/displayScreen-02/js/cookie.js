function setCookie(name,value,expires)
{
    var oDate=new Date();
    oDate.setDate(oDate.getDate()+expires);
    document.cookie=name+'='+value+';expires='+oDate;
}

function getCookie(name)
{
    var arr=new Array();
    arr=document.cookie.split("; ");
    var i=0;
    for(i=0; i<arr.length;i++)
    {
        arr2=arr[i].split("=");
        if(arr2[0]==name)
        {
            return arr2[1];
        }
    }
    return '';
}


function removeCookie(name)
{
    setCookie(name,'随便什么值，反正都要被删除了',-1);
}

//判断a和b的原因是第一次打开，cookie中并没有相应的参数，所以当有参数时执行，
//a和b只需要判断一个就好了

window.onload=function()
{
    var oDiv=document.getElementById('div1');

    var a=getCookie('xPosition');
    var b=getCookie('yPosition');

    if(a)
    {
        oDiv.style.left=a+'px';
        oDiv.style.top=b+'px';
    }


    oDiv.onmousedown=function(ev)
    {
        var oEvent=ev||event;
        var x=0;
        var y=0;
        x=oEvent.clientX-oDiv.offsetLeft;
        y=oEvent.clientY-oDiv.offsetTop;
        document.onmousemove=function(ev)
        {
            var oEvent=ev||event;
            var out1=oEvent.clientX-x;
            var out2=oEvent.clientY-y;

            var oWidth=document.documentElement.clientWidth-oDiv.offsetWidth;
            var oHeight=document.documentElement.clientHeight-oDiv.offsetHeight;

            if(out1<0)
            {out1=0;}
            else if (out1>oWidth)
            {
                out1=oWidth;
            }


            if(out2<0)
            {out2=0;}
            else if (out2>oHeight)
            {
                out2=oHeight;
            }

            oDiv.style.left=out1+'px';
            oDiv.style.top=out2+'px';
        }
        document.onmouseup=function()
        {
            document.onmousemove=null;
            document.onmouseup=null;
            setCookie('xPosition',oDiv.offsetLeft,1);
            setCookie('yPosition',oDiv.offsetTop,1);
            /* alert(document.cookie);
            alert(oDiv.offsetLeft);
            alert(getCookie('password'));
            alert(getCookie('expires'));*/
        }
        return false;//解决firefox低版本的bug问题,消除默认行为
    }
}

//<div id="div1" style="width:100px; height:100px; background:#060; border:1px solid #039; position:absolute;"></div>

