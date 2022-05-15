/*============================parameters
1.	a.sTextBox = set id of secont text box in which first suggestion will be show
2.	a.typeahead = define it with value true if we have only one text box and show ahead suggestion
3.	a.countSugg = set integer amount to set number of suggestion to be shown
4.	a.domain = set it true if we want to show the suggestion after @
============================================*/
var suggester=function(a){
	var obj=this;
	var obj2='';
	var suggCount='';
	if(!(a && typeof a=='object')) {return false};//handling arguments
		obj2=(a.sTextBox)?$n('#'+a.sTextBox):'';(obj2)?obj2.attr('value',''):'';
		suggCount=(a.countSugg)?a.countSugg:false;
		obj.id=$n(a.id[0]);
		obj.url=a.url;
		obj.layer=null;
		obj.layer2=null;
		obj.cur = -1;
		obj.startVal=a.startVal;
		obj.position=0;	
		obj.client=a.client;
		obj.suggestions =a.arry || [];	
		obj.ob=obj.id.currObj();
		obj.val4='';
		obj.suggCount1=0;
		obj.reqsess='';
		obj.app_id=a.app_id;
		obj.suggestorName=a.suggestorName;
		obj.countPage=0;
		obj.aSuggestions=[];
		obj.objNew=a.objNew;
		obj.serverArray=[];
		obj.width = a.width;
	obj.init=function(){
		
		obj.flagForCreate=0;
		obj.requestKeyword();
		var oEvent=(!oEvent)?window.event:oEvent;
		for(var x=0; x<a.id.length; x++){
			obj.id=$n(a.id[x])
		obj.id.addEvent('keyup',function(oEvent){
			if(!obj.flagForCreate){
				obj.createDropDown();
				obj.flagForCreate=1;
			}
			obj.id=$n(this);obj.ob=obj.id.currObj();
									  if(a.domain){
									 var reg=/\@[A-Z,0-9,a-z]{1}/;
									 var objVal=obj.id.attr('value');
									if(!reg.test(objVal)){obj.hideSuggestions();return false;}
									  }
									  obj.handleKeyUp(oEvent);									  
									  }).addEvent('keydown',function(oEvent){obj.id=$n(this);obj.ob=obj.id.currObj();obj.handleKeyDown(oEvent)}).addEvent('blur',function(){obj.id=$n(this);obj.ob=obj.id.currObj();obj.hideSuggestions()});}
					
		
		}//init function end here	

	obj.requestKeyword=function(url){						// save data on client machine
		if(obj.url && obj.client!='server'){
			obj.callTheJsonp((url || obj.url+"?q=&app_id="+obj.app_id+'&suggestor='+obj.suggestorName+'&offset='+500*obj.countPage+'&limit=500&callback='+obj.objNew+'.parseRequest'))
		}
	}
	
	obj.callTheJsonp = function(url){
                var script = document.createElement('script');
                script.setAttribute('src', url);
                document.getElementsByTagName('head')[0].appendChild(script);
    }
	
	obj.parseRequest=function(resp){
                if (resp == 'ERROR') {
                    return false;
                }
                for(var x in resp){
                    if(x != 'CONTD...')
                        obj.suggestions[x]=resp[x]
                     else if(x == 'CONTD...'){
                        obj.countPage++;
                        obj.requestKeyword(obj.url+"?q=&app_id="+obj.app_id+'&suggestor='+obj.suggestorName+'&offset='+((500*obj.countPage)+1)+'&limit=500&callback='+obj.objNew+'.parseRequest');
					}
                }
			}
	
	obj.requestKeywordOnRequest=function(url, keyword){
		if(url && obj.client=='server'){
			keyword = decodeURIComponent(keyword).replace(/[\s]+/g," ").replace(/^\s/,"");
			keyword = keyword.split(',');
			var lastKeyword=$n.trim(keyword[keyword.length-1]).toLowerCase();
			if(obj.serverArray[lastKeyword]){
				obj.handlekeywordOnRequest(obj.serverArray[lastKeyword]);
				return false;
			}

			obj.callTheJsonp(url+"?q="+encodeURIComponent(lastKeyword)+"&app_id="+obj.app_id+'&suggestor='+obj.suggestorName+'&offset=0&limit='+suggCount+'&callback='+obj.objNew+'.handlekeywordOnRequest')
		}
	}
	
	obj.handlekeywordOnRequest=function(resp){
			obj.suggestions=resp;
			var bTypeAhead=false;
			obj.aSuggestions.length=0;
        	
			var sTxtValue=obj.id.attr('value');
			var splitTxtValue=sTxtValue.split(',')
			obj.serverArray[($n.trim(splitTxtValue[splitTxtValue.length-1])).toLowerCase()]=resp;
			obj.position=$n(obj.ob).position();
			obj.val4='';
			if(sTxtValue.length>obj.startVal){
				obj.showBold(sTxtValue);					
			}
			obj.reqautoSuggest(bTypeAhead);

			}
	
	obj.showBold=function(sTxtValue){
		sTxtValue=sTxtValue.replace(/&amp;/gi, '&');
		for(var i in obj.suggestions){
			obj.suggestions[i]=obj.suggestions[i].replace(/&amp;/gi, '&')
				if(a.domain){
					var setTxtVal=sTxtValue.split('@');
					if(obj.suggestions[i].indexOf(setTxtVal[1].toLowerCase())==0){obj.aSuggestions.push(setTxtVal[0]+'@'+obj.suggestions[i])}
					}else{
						var val2=sTxtValue.split(',');
						if(val2[1]){
						obj.val4='';
						sTxtValue=val2[val2.length-1];
						for(var k=0; k<(val2.length-1); k++){
							obj.val4+=$n.trim(val2[k])+', ';
						}
					}
					
					sTxtValue = sTxtValue.replace(/[\s]+/g," ").replace(/^\s/,"");
               		if(sTxtValue.length>obj.startVal){
						var str=obj.suggestions[i];
						var getPos=(str.toLowerCase()).indexOf(sTxtValue.toLowerCase());
						var strLower = str.toLowerCase();
						var sTxtValueLower = sTxtValue.toLowerCase();
						var spaceVal = strLower.indexOf(' '+sTxtValueLower);
						var bracketVal = strLower.indexOf('('+sTxtValueLower);
						var slashVal = strLower.indexOf('/'+sTxtValueLower);
						if(getPos>=0 && ((spaceVal || bracketVal || slashVal) != -1) || getPos==0){
							if(spaceVal != -1){
								getPos = spaceVal+1
							} else if(bracketVal != -1){
								getPos = bracketVal+1
							} else if(slashVal != -1){
								getPos = slashVal+1
							}
							var new1=str.substr(0, getPos);
							var e='<b>'+str.substr(getPos, sTxtValue.length)+'</b>';
							var new2=str.substr(getPos+sTxtValue.length, str.length);
							obj.aSuggestions.push(new1+e+new2);
						}
					}			
				   }
				}
	}
	obj.ajax=function(url, callback){
		$n(document).ajaxReq({                
			   url : url,            
			   datatype : 'json', 
			   data :  '',
			success : function(resp){
				callback(resp)
			},         
			error : function(){              
				alert('Reqest not complete');              
			}          
		  });
	}
	obj.requestSuggestions=function(bTypeAhead){		// on request data received.
		obj.aSuggestions.length=0;
        
		var sTxtValue=obj.id.attr('value');
		obj.position=$n(obj.ob).position();
		obj.val4='';
		if(sTxtValue.length>obj.startVal){
			clearTimeout(obj.reqsess)
			if(obj.url && obj.client=='server'){
			obj.reqsess= setTimeout(function(){
				obj.requestKeywordOnRequest(obj.url, encodeURIComponent(sTxtValue));
			}, 400);
			}
			else{
				obj.showBold(sTxtValue);		
			}
		}
		else{
		obj.hideSuggestions();return false;
		}
		obj.reqautoSuggest(bTypeAhead)

	}//RequestSuggestion	
	
	obj.reqautoSuggest=function(bTypeAhead){
		if((obj.aSuggestions.length>0)&&(suggCount)){obj.aSuggestions=obj.aSuggestions.slice(0,suggCount);}
		obj.autosuggest(obj.aSuggestions,bTypeAhead);	
		obj.id.setFocus();
        /*
		obj.selectRange(obj.id.attr('value').length, obj.id.attr('value').length)
		obj.id.attr('value', obj.id.attr('value'));
		setTimeout(function(){obj.id.setFocus()}, 10)		
        */
	}
	
	obj.autosuggest=function(sSuggestions,bTypeAhead){
		if(sSuggestions.length>0){
			if(bTypeAhead){obj.typeAhead(sSuggestions[0])}
			obj.showSuggestions(sSuggestions);			
			}else {obj.hideSuggestions();}
		}//autosuggest end here	
		
	obj.typeAhead=function(sSuggestions){
		if(obj.id.currObj().createTextRange||obj.id.currObj().setSelectionRange){
			if(obj2){obj2.attr('value',sSuggestions)}
			else{var iLen=obj.id.attr('value').length;			
			obj.id.attr('value',sSuggestions);	
			obj.selectRange(iLen,sSuggestions.length)}			
			}
		}//typeAhead end here			
	
	obj.selectRange=function(iStart,iEnd){
		if(obj.id.currObj().createTextRange){
			var oRng=obj.id.currObj().createTextRange();
			oRng.moveStart('character',iStart);
			oRng.moveEnd('character',iEnd-obj.id.attr('value').length)
			oRng.select();
			}
		else if(obj.id.currObj().setSelectionRange){obj.id.currObj().setSelectionRange(iStart,iEnd)}
		obj.id.setFocus();
		}//selectRange end here
	
	obj.handleKeyDown=function(oEvent){
		switch(oEvent.keyCode){
			case 38://up arrow
			obj.previousSuggestion();
			break;	
			case 39://right arrow
			obj.currentSuggestion(oEvent);
			break;	
			case 40: //down arrow
           	obj.nextSuggestion();
            break;
        	case 13: //enter
			var divObj=obj.layer.childrens('div');
                        for(var i=0; i<divObj.length; i++){
                              var curObj=divObj.eq(i)
							  if(curObj.getStyle(obj.layer.currObj(), 'visibility')=='visible' && curObj.hasClass('current')=='current'){
					  			//obj.id.currObj().blur();

									obj.id.attr('value',(obj.val4+curObj.text()).replace(/&amp;/gi, '&'));
						(obj2)?obj2.attr('value',(obj.val4+curObj.text()).replace(/&amp;/gi, '&')):'';
						obj.id.setFocus();
						obj.selectRange(obj.id.attr('value').length, obj.id.attr('value').length)
						obj.id.attr('value', obj.id.attr('value'));
						setTimeout(function(){obj.id.setFocus()}, 10)			  
                                     $n.preventDefault(oEvent);
							  }
                        }
                        obj.hideSuggestions();return false;
			break;			
			}		
		}//handleKeyDown
		
	obj.handleKeyUp=function(oEvent){		
		var iKeyCode=oEvent.keyCode;
		if (iKeyCode == 8 || iKeyCode == 46) {//backspace and del
		obj.cur=-1;
		(obj2)?obj.requestSuggestions(true):obj.requestSuggestions(false)}
		else if(iKeyCode<32||(iKeyCode>=33&&iKeyCode<=46)||(iKeyCode >= 112 && iKeyCode <= 123)){}
		else {(obj2||a.typeahead)?obj.requestSuggestions(true):obj.requestSuggestions(false)}
		}//handleKeyUp end	
	
	obj.hideSuggestions =function(){// Added for xtra funct.
    if(obj.layer){
		obj.layer.html('');
		obj.layer.css({visibility:'hidden'});
		obj.layer2.css({visibility:'hidden'});
		(obj2)?obj2.attr('value',''):'';
		obj.cur=-1;
        }
	}//hideSuggestions
	
	obj.highlightSuggestion=function(oSuggestionNode){// Added for xtra funct.
	    for(var i=0;i<obj.layer.childrens('div').length;i++){
			var oNd=obj.layer.childrens('div').eq(i);
			if(oNd.currObj()==oSuggestionNode.currObj()){oNd.addClass('current'); obj.cur=i;}
			else if(oNd.hasClass('current')){oNd.changeClass('')}
			}
		}//highlightSuggestion
	
	obj.nextSuggestion=function(){		
		var cSuggestionNodes = obj.layer.childrens('div');
		if (cSuggestionNodes.length > 0 && obj.cur < cSuggestionNodes.length-1) {
        var oNode = cSuggestionNodes.eq(++obj.cur);
        obj.highlightSuggestion(oNode);
		obj.id.attr('value',(obj.val4+oNode.text()).replace(/&amp;/gi, '&'));
		(obj2)?obj2.attr('value',(obj.val4+oNode.text()).replace(/&amp;/gi, '&')):'';
		obj.id.setFocus();
						obj.selectRange(obj.id.attr('value').length, obj.id.attr('value').length)
						obj.id.attr('value', obj.id.attr('value'));
						setTimeout(function(){obj.id.setFocus()}, 100)		
		}
		else if(cSuggestionNodes.length>0){
			obj.cur=-1;
			var oNode = cSuggestionNodes.eq(++this.cur);
			obj.highlightSuggestion(oNode);
			obj.id.attr('value',(obj.val4+oNode.text()).replace(/&amp;/gi, '&'));
			(obj2)?obj2.attr('value',(obj.val4+oNode.text()).replace(/&amp;/gi, '&')):'';
			obj.id.setFocus();
						obj.selectRange(obj.id.attr('value').length, obj.id.attr('value').length)
						obj.id.attr('value', obj.id.attr('value'));
						setTimeout(function(){obj.id.setFocus()}, 100)

			}		
		}//nextSuggestion
	
	obj.previousSuggestion=function(){
		var cSuggestionNodes = obj.layer.childrens('div');
		obj.cur--;
		if (cSuggestionNodes.length > 0 && obj.cur > -1){
			var oNode = cSuggestionNodes.eq(obj.cur);
			obj.highlightSuggestion(oNode);	
			obj.id.attr('value',(obj.val4+oNode.text()).replace(/&amp;/gi, '&'));
			(obj2)?obj2.attr('value',(obj.val4+oNode.text()).replace(/&amp;/gi, '&')):'';
			obj.id.setFocus();
						obj.selectRange(obj.id.attr('value').length, obj.id.attr('value').length)
						obj.id.attr('value', obj.id.attr('value'));
						setTimeout(function(){obj.id.setFocus()}, 100)
			}
		else if(cSuggestionNodes.length > 0){
			obj.cur=cSuggestionNodes.length-1;
			var oNode = cSuggestionNodes.eq(obj.cur);
			obj.highlightSuggestion(oNode);
			obj.id.attr('value',(obj.val4+oNode.text()).replace(/&amp;/gi, '&'));
			(obj2)?obj2.attr('value',(obj.val4+oNode.text()).replace(/&amp;/gi, '&')):'';
			obj.id.setFocus();
						obj.selectRange(obj.id.attr('value').length, obj.id.attr('value').length)
						obj.id.attr('value', obj.id.attr('value'));
						setTimeout(function(){obj.id.setFocus()}, 100)
			}		
		}//previousSuggestion

	obj.currentSuggestion=function(e){
		var iCaretPos = 0;
    	if (document.selection) { //for IE
          obj.id.setFocus ();
          var oSel = document.selection.createRange ();
          oSel.moveStart ('character', -obj.id.attr('value').length);
          iCaretPos = oSel.text.length;
		  }
    	 // Firefox support
    	 else if (obj.id.currObj().selectionStart || obj.id.currObj().selectionStart == '0'){iCaretPos = obj.id.currObj().selectionStart;}
    	if(obj.id.attr('value').length==iCaretPos){
		
		if(obj.layer.first()){			
		var cN=obj.layer.childrens('div').eq((obj.cur>=0)?obj.cur:0);
		
		obj.id.attr('value',(obj.val4+cN.text()).replace(/&amp;/gi, '&'));
		(obj2)?obj2.attr('value',(obj.val4+cN.text()).replace(/&amp;/gi, '&')):'';
		obj.id.setFocus();
		obj.selectRange(obj.id.attr('value').length, obj.id.attr('value').length)
		obj.id.attr('value', obj.id.attr('value'));
		setTimeout(function(){obj.id.setFocus()}, 10)
		$n.preventDefault(e);			  
		obj.hideSuggestions();}}
		else {return false}
		}//currentSuggestion end here
		
	obj.createDropDown=function(){
		obj.layer=$n('<div>').addClass('suggestions').css({visibility:'hidden',top:'-1000px'});
		//obj.layer=$n('div.suggestions');
		obj.layer2=$n('<iframe>');
		obj.layer2.addClass('suggestions2').css({visibility:'hidden',top:'-1000px'});
		obj.layer2.attr({scrolling:'no',frameborder:'0',marginheight:'0',marginwidth:'0'});
		$n('body').append(obj.layer.currObj());
		$n('body').append(obj.layer2.currObj());
		var events=['mousedown','mouseover','mouseup'];
		for(var i in events){
			(function(){
					  var cevnt=events[i];
					 // obj.layer=$n('.suggestions');
					  obj.layer.addEvent(cevnt,function(oEvent){
						oTarget=$n(oEvent.target||oEvent.srcElement);
						
						if(oEvent.type=='mousedown'){
						obj.id.attr('value',(obj.val4+oTarget.text()).replace(/&amp;/gi, '&'));
						(obj2)?obj2.attr('value',(obj.val4+oTarget.text()).replace(/&amp;/gi, '&')):'';
						obj.hideSuggestions();
						obj.id.setFocus();
						obj.selectRange(obj.id.attr('value').length, obj.id.attr('value').length)
						obj.id.attr('value', obj.id.attr('value'));
						setTimeout(function(){obj.id.setFocus()}, 10)
						$n.preventDefault(oEvent);
						}				 
						else if(oEvent.type=='mouseover'){obj.highlightSuggestion(oTarget);	}	
						else {obj.id.setFocus()}
						});				  
					  })();	
			}
		}//createDropDown
	
	obj.showSuggestions=function(aSuggestions){
		var oDiv=null;
//		obj.width = (obj.width == 'fixed') ? obj.id.width()-5 : 'auto';
		obj.layer.html('').css({'width':'auto'});
		for(var i=0;i<aSuggestions.length;i++){
			
			oDiv=$n('<div>').append(aSuggestions[i]);			
			obj.layer.append(oDiv.currObj());
			
			}
			var getPadding = ($n.brewser().name=='msie' && $n.brewser().version=='6.0') ? 2 : 0;
			var widthLayer = (obj.width == 'fixed') ? obj.id.width() : (obj.id.width() > obj.layer.width()) ? obj.id.width() : (obj.layer.width()+5);
		obj.layer.css({left:obj.id.position().left+'px',top:(obj.id.position().top+obj.id.height())+'px',width:widthLayer - getPadding+'px',visibility:'visible'});
		obj.layer2.css({left:obj.id.position().left+'px',top:(obj.id.position().top+obj.id.height())+'px',width:widthLayer+'px',height:obj.layer.height()+'px',visibility:'visible'})
		}//showSuggestions
	obj.init();	
}//suggester end here
