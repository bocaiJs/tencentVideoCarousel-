window.onload = function()
{
	var oDiv = document.getElementById('box');
	var oPicLi = document.getElementById('pic_list').getElementsByTagName('li');
	var oTextLi = document.getElementById('text_list').getElementsByTagName('li');
	var oIconLi = document.getElementById('icon_list').getElementsByTagName('li');	
	var oBtnPrev =document.getElementById('btn-prev');
	var oBtnNext = document.getElementById('btn-next');
	var oIconUl = document.getElementById('icon_list').getElementsByTagName('ul')[0];
	var iNowUlLeft = 0 ;
	var i =0 ;
	var iNow = 0;
	// alert(oIconLi[0].offsetWidth);

	oBtnNext.onclick = function()
	{
		if(iNowUlLeft>7-oIconLi.length)
		{
			iNowUlLeft --;
		    oIconUl.style.left =(oIconLi[0].offsetWidth+2)*iNowUlLeft+'px';
		}
		oBtnPrev.className = iNowUlLeft == 0?'btn':'btn showBtn';
		this.className  = iNowUlLeft == -3?'btn':'btn showBtn';
		
	}
	
	oBtnPrev.onclick = function()
	{
		    if(iNowUlLeft<0)
		    {
		    	iNowUlLeft++;
				document.title = iNowUlLeft;
			    oIconUl.style.left =(oIconLi[0].offsetWidth+2)*iNowUlLeft+'px';
		    }
		    document.title = iNowUlLeft;
            this.className = iNowUlLeft == 0?'btn':'btn showBtn';
            oBtnNext.className = iNowUlLeft != -3 ?'btn showBtn':'btn ';
    }
	for(var i =0;i<oIconLi.length;i++)
	{   
		oIconLi[i].index = i;
		oIconLi[i].onclick = function()
		{
			if(iNow == this.index)
			{
				return;
			}
			iNow = this.index;
			tab();
		}
	}
	var  timer = setInterval(autoPlay,1000);
	oDiv.onmousemove = function()
	{
		clearInterval(timer);
	}
    oDiv.onmouseout = function()
    {
    	timer = setInterval(autoPlay,1000);
    }
  function  autoPlay()
  {
	    iNow ++;
		if(iNow>oIconLi.length-1)
		{
			iNow =0;
		}

		if(iNow >6)
		{
             iNowUlLeft = iNow -6;
			 oIconUl.style.left =-(oIconLi[0].offsetWidth+2)*iNowUlLeft+'px';
			 // alert(oIconUl.style.left);

		}else if(iNow == 0)
		{
		     oBtnPrev.className = 'btn';	
		    
		}else 
		{
		    oIconUl.style.left =0;	
		    oBtnPrev.className = 'btn showBtn';	
		}
		tab();
  }
 function tab()
	 {
	 	for(var i = 0;i<oIconLi.length;i++)
				{
					oIconLi[i].className = '';
					oTextLi[i].getElementsByTagName('h2')[0].className = '';
					oPicLi[i].style.filter = 'alpha(opacity:0)';
					oPicLi[i].style.opacity = 0;

				}
				oIconLi[iNow].className ='active';
				oTextLi[iNow].getElementsByTagName('h2')[0].className = 'show';
				oPicLi[iNow].style.filter = 'alpha(opacity:100)';
				oPicLi[iNow].style.opacity = 1;
				// document.title = iNow;
	 }

}
