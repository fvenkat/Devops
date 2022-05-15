function gbi(layidNew){return document.getElementById(layidNew)}
function gbTN(layidNew){return document.getElementsByTagName(layidNew)}
function crtDiv(){return document.createElement('div')}
function ddBd(){return document.body;}

/*Form element*/
function txtBlur(ele, action, defVal) {
     if(action == "blur") {
         ele.value = ele.value.replace(/^\s+/,'');
         ele.value = ele.value.replace(/\s+$/,'');
         if(ele.value=="") {
             ele.value=defVal;
             ele.style.color="#8d8d8d";
         } else {
             ele.style.color="#333";
         }
     }
     else if(action == "focus" && ele.value == defVal) {
         ele.value="";
         ele.style.color="#333";
         //ele.className +=" active";
     }
}


/*carousel*/
function gebtn(id, tagN){
  return gbi(id).getElementsByTagName(tagN);
}
function outerWidth(getLIA){
  return getLIA[0].offsetWidth;
}
function outerHeight(getLIA){
  return getLIA[0].offsetHeight;
}
function getn(id, tagName){
  return gbi(id).getElementsByTagName(tagName);
}


function setCss(obj){
  for(i=1; i<arguments.length; i++){
    var getSplit=arguments[i].split(":");
    obj.style[getSplit[0]]=getSplit[1];
  }
}
var carousel=function(id, timer){
  if(gbi(id)) {
  noofLI=getn(id, 'li');
  knowM=gbi(id+'knowMore');
  bottomLnk=getn(id+'mp', 'a');
  lftLnk=gbi(id+'leftA');
  rgtLnk=gbi(id+'rgtA');
  currentObj=bottomLnk[0];
  setLft=0;
  function start(){
    lftLnk.onclick=function(){
      setLft=1;
      moveLR(id, timer);
	  if(slideStart_p+1 && slideStart_p<4)
	  callArr('m');
    }
    rgtLnk.onclick=function(){
      setLft=0;
      moveLR(id, timer);
	  if(slideStart_p+1 && slideStart_p<4)
	  callArr('p');
    }
    if(bottomLnk.length>0){
      for(i=0; i<bottomLnk.length; i++){
        bottomLnk[i].onclick=function(i){
          return function(){
            setLft=0;
            moveLR(id, timer, bottomLnk[i]);
			//callArr("p_pag");
          }
        }(i)
      }
    }
    if(timer){
      setInterval('moveLR("'+id+'", '+timer+', 0)', timer);
	    setInterval('callArr("p")', timer);
    }
  }

  start();
  }
}
function moveLR(id, timer, obj){
  if(gbi(id)) {
  noofLI=getn(id, 'li');
  knowM=gbi(id+'knowMore');
  bottomLnk=getn(id+'mp', 'a');
  lftLnk=gbi(id+'leftA');
  rgtLnk=gbi(id+'rgtA');
  currentObj=bottomLnk[0];

  if(obj){
    for(i=0; i<bottomLnk.length; i++){
      bottomLnk[i].className='midPoint';
      noofLI[i].style.display='none';
    }
    bottomLnk[parseInt(obj.rel)-1].className='midPointSel';
    noofLI[parseInt(obj.rel)-1].style.display='';
  }
  else{
    for(i=0; i<bottomLnk.length; i++){
      if(bottomLnk[i].className=='midPointSel'){
        bottomLnk[i].className='midPoint';
        noofLI[i].style.display='none';
        if(setLft==1){
          if(i-1>=0){
            currentObj=bottomLnk[i-1];
            noofLI[i-1].style.display='';
          }
          else{
            currentObj=bottomLnk[bottomLnk.length-1];
            noofLI[bottomLnk.length-1].style.display='';
          }
        }
        else{
          if(i+1<bottomLnk.length){
            currentObj=bottomLnk[i+1];
            noofLI[i+1].style.display='';
          }
          else{
            currentObj=bottomLnk[0];
            noofLI[0].style.display='';
          }
        }       
      }
    }
    currentObj.className='midPointSel';
  }
  setLft=0;
  }
}

/*Subnav JS*/
var $a={
	show:function(id){
		$a.gObj(id).style.display='';
	},
	showInl:function(id){
		$a.gObj(id).style.display='inline';
	},
	showb:function(id){
		$a.gObj(id).style.display='block';
	},
	hide:function(id){
		$a.gObj(id).style.display='none';
	},
	setFocus:function(id){
		$a.gObj(id).focus();
	},
	classChange:function(id, oC, nC){
    	aObj=$a.gObj(id);
		if(aObj.className==oC)
			aObj.className=nC;
	},
	changeTxt:function(id, nT){
    	$a.gObj(id).innerHTML=nT;
	},
	changeClass:function(id, nC){
    	$a.gObj(id).className=nC;
	},
	toggleSH:function(id){
		aObj=$a.gObj(id);
		aObj.style.display=='' ? aObj.style.display='none' : aObj.style.display='';
	},
	toggletxt:function(id, oT, nT){
		aObj=$a.gObj(id);
		aObj.innerHTML==oT ? aObj.innerHTML=nT : aObj.innerHTML=oT;
	},
	toggleclass:function(id, oC, nC){
		aObj=$a.gObj(id);
		aObj.className==oC ? aObj.className=nC : aObj.className=oC;
	},
	classChangeLoop:function(id, oC, nC, curObj){
		aObj=$a.gObj(id);
		var getA=$a.gtn(aObj, 'a');
		for(i=0; i<getA.length; i++){
			$a.classChange(getA[i], oC, nC);
		}
		curObj.className=oC;
	},
	gObj:function(id){
		return (typeof id == 'object' ? id : $a.gbi(id)); 
	},
	gbi:function(id){
		return document.getElementById(id);
	},
	gtn:function(curObj, tagName){
		curObj=$a.gObj(curObj);
		return curObj.getElementsByTagName(tagName);
	},
	getPositionX:function(obj){
		var curleft = 0;
		if(obj.offsetParent)
			while(1) 
			{
			  curleft += obj.offsetLeft;
			  if(!obj.offsetParent)
				break;
			  obj = obj.offsetParent;
			}
		else if(obj.x)
			curleft += obj.x;
		return curleft;
	},
	getPositionY:function(obj){
		var curtop = 0;
		if(obj.offsetParent)
			while(1)
			{
			  curtop += obj.offsetTop;
			  if(!obj.offsetParent)
				break;
			  obj = obj.offsetParent;
			}
		else if(obj.y)
			curtop += obj.y;
		return curtop;
	}
}

$showLayer={
	addEvent:function(id){
		var getA=$a.gtn(id, 'a');
		for(i=0; i<getA.length; i++){
			if(getA[i].rel!=''){
			getA[i].onmouseover=function(i){
				return function(){
					for(j=0; j<getA.length; j++){
						if(getA[j].rel!=''){
						$a.hide(getA[j].rel);
						getA[j].className='';
						}
					}
					getA[i].className='sel'
					$showLayer.show(getA[i]);
				}
			}(i);
			getA[i].onmouseout=function(i){
				return function(){
					for(j=0; j<getA.length; j++){
						if(getA[j].rel!=''){
						$a.hide(getA[j].rel);
						getA[j].className='';
						}
					}
				}
			}(i)
			}
		}
	},
	show:function(obj){
		getLeft=$a.getPositionX(obj);
		getTop=$a.getPositionY(obj)+obj.offsetHeight-2;
		var getObj=$a.gbi(obj.rel);
		getObj.onmouseover=function(){
			$a.showb(getObj);
			obj.className='sel';
		}
		getObj.onmouseout=function(){
			$a.hide(getObj);
			obj.className='';
		}
		getObj.style.left=getLeft+'px';
		getObj.style.top=getTop+1+'px';
		$a.showb(getObj);
		if(getObj.offsetWidth<obj.offsetWidth)
		getObj.style.width=obj.offsetWidth-2+'px';
	}
}


window.onload=function(){
	if($a.gbi('pLayer'))
	$showLayer.addEvent('pLayer');
	
}

/*SubNav JS ends*/

function showAddSrvcs(hideCont, hideCont1, showCont, showCont1){
	gbi(hideCont).style.display= 'none';
	if(gbi(hideCont1) != null)
		gbi(hideCont1).style.display= 'none';
	gbi(showCont).style.display = 'block';
	if(gbi(showCont1) != null)
		gbi(showCont1).style.display = 'block';
}

function showHdResT(resType, moreResTxt){
	if(gbi(resType).style.display== 'none')
	{
		gbi(resType).style.display = 'block';
		gbi(moreResTxt).className = 'showMor selMore';
		gbi(moreResTxt).innerHTML = '<span class="fl">Hide More</span> <em></em><span class="cl dispBlk"></span>';
	}
	else
	{
		gbi(resType).style.display = 'none';
		gbi(moreResTxt).className = 'showMor';
		gbi(moreResTxt).innerHTML = '<span class="fl">Show More</span> <em></em><span class="cl dispBlk"></span>';	
	}
}

function toggleSt(togCont, togSign){
	if(gbi(togCont).style.display== 'none')
	{
		gbi(togCont).style.display = 'block';
		gbi(togSign).className = 'expandSel';
	}
	else
	{
		gbi(togCont).style.display = 'none';
		gbi(togSign).className = 'expand';
	}
}

/*Pricing tabs*/
function priceTabCh(pTab,pCont){
   /*for(i=1; i<4; i++){
     document.getElementById('priceTab'+i).className='notSel';
     document.getElementById(pTab).className='sel';
     document.getElementById('priceCont'+i).style.display='none';
     document.getElementById(pCont).style.display='block';
   }*/

   document.getElementById('priceTabResWr').className = 'notSel';
   document.getElementById('priceTabResSp').className = 'notSel';
   document.getElementById('priceTabJobs4u').className = 'notSel';

   document.getElementById('priceContResWr').style.display = 'none';
   document.getElementById('priceContResSp').style.display = 'none';
   document.getElementById('priceContJobs4u').style.display = 'none';

	document.getElementById("successCl").style.display = "none";
   document.getElementById(pTab).className = 'sel';
   document.getElementById(pCont).style.display = 'block'; }


function usrLog(usrLogT,usrLogC){
	for(i=1; i<3; i++){
		gbi('usrLogTab'+i).className='notSel';
		gbi(usrLogT).className='sel';
		gbi('usrLogCont'+i).style.display='none';
		gbi(usrLogC).style.display='block';
	}
}

function updateOpt(txtCh, contCh){
	if(gbi(contCh).style.display == 'none'){
		gbi(contCh).style.display = 'block';
		gbi(txtCh).innerHTML = 'Update';
	}
	else{
		gbi(contCh).style.display = 'none';
		gbi(txtCh).innerHTML = 'Change';
	}
}

function winOpen(jpgName, winName)
{
  winName="pop";
  myWindow=window.open(jpgName,winName,'width=850,height=600, scrollbars=yes')
}

function togStatus(contName, signCont){
	gbi(contName).style.display=='none' ? gbi(contName).style.display='' : gbi(contName).style.display='none';
	gbi(signCont).className=='add' ? gbi(signCont).className='minus' : gbi(signCont).className='add';	
}

function getAjaxObject() {
   var xmlHttp;
   if (window.XMLHttpRequest) {
     xmlHttp = new XMLHttpRequest();
   } else if (window.ActiveXObject) {
     try {
       xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
     } catch(e) {
       try {
         xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
       } catch (e) {
         throw(e);
       }
     }
   }
   return xmlHttp;
}

function generateFormString (formId) {
   var formElem = document.getElementById(formId);
   var qStr = "";
   for (i=0;i<formElem.elements.length;i++) {
     qStr += formElem.elements[i].name + "=" + formElem.elements[i].value + "&";
   }
   return qStr.substr(0,qStr.length-1);
}

function sendAjaxRequest (url, requestString, func_callback, arg_str) {
   var xmlHttp = getAjaxObject();
   xmlHttp.onreadystatechange = function () {
     if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
       data = eval('('+xmlHttp.responseText+')');
       str = "func_callback (data , arg_str)";
       eval(str);
     }
   }

   xmlHttp.open("POST", url, true);
   xmlHttp.setRequestHeader('Content-Type',
'application/x-www-form-urlencoded');
   xmlHttp.send(requestString);
}
/*widgets border*/
$n(document).ready(function(){	
	var rightCont = $n(".sBarCont ul");
	for(var i=0;i<rightCont.length;i++){
		var lastLI = rightCont.eq(i).last();
		lastLI.css({'border-bottom':"none"});
	}
});
/*archive widget*/
$(document).ready(function(){
	$('.acc_trigger:first').addClass('active')
	$('.acc_trigger').click(function(){
		$('.acc_trigger').removeClass('active');
		$(this).addClass('active')
	});
});