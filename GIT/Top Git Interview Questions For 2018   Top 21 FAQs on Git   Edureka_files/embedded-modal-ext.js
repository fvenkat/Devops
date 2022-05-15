function lqQuizModal(w,d,lq,l_q){if(!lq.quizId)return;var s=d.createElement('script'),css=d.createElement('link'),vendorCss=d.createElement('link'),cb=Date.now(),b=d.getElementsByTagName('body')[0],h=d.getElementsByTagName('head')[0],textEl,angular;if(!b){b=d.createElement('body');d.getElementsByTagName('html')[0].appendChild(b);}
var initEmbed=function(){angular=l_q.angular;var id='lq-'+lq.quizId+'-'+cb;b.insertAdjacentHTML('beforeend','<div id="'+id+'" embedded-modal></div>');var el=d.getElementById(id);angular.module('deployedQuiz').decorator('embeddedModal',function(){return lq;});angular.bootstrap(el,['deployedQuiz']);bindEvents(id,lq,textEl);}
var createFBIframe=function(){var src=lq.baseUrl+'fb.php',iframe=d.createElement('iframe');iframe.src=src;iframe.classList.add('lq-fb-iframe');b.appendChild(iframe);lq.fbIframe=iframe;lq.fbAction=function(action,params){lq.fbIframe.contentWindow.postMessage({_from_lq:true,action:action,params:params||null},'*');}
lq.onFBCallback=function(fn){if(!lq._fb_queue){lq._fb_queue=[];}
lq._fb_queue.push(fn);}
lq.handleFBCallback=function(data){if(!lq._fb_queue||!lq._fb_queue.length)return;var cbs=lq._fb_queue.splice(0,Number.MAX_VALUE);for(var i=0,ii=cbs.length;i<ii;i++){cbs[i](data);}}
window.addEventListener('message',function(event){var data=event.data;if(data._from_lq){lq.handleFBCallback(data);}});}
var onOpen=createFBIframe;var insertText=function(lq){var str=lq.text,scriptId='lq-embed-'+lq.quizId,triggerId='lq-trigger-'+lq.quizId,me=document.getElementById(scriptId);me.insertAdjacentHTML('afterend','<a id="'+triggerId+'" class="lq-trigger" href="#">'+str+'</a>');return document.getElementById(triggerId);}
var bindEvents=function(id,lq,textEl){var el=document.getElementById(id);var showModal=function(ev){ev.stopPropagation();ev.preventDefault();el.classList.add('display');setTimeout(function(){el.classList.add('fade-in');},10);if(onOpen){onOpen();onOpen=null;}
if(lq.onOpen&&angular.isFunction(lq.onOpen)){lq.onOpen();lq.onOpen=null;}
return false;};if(lq.trigger=='text'){textEl.addEventListener('click',showModal);}else if(lq.trigger=='exit'){b.addEventListener('mouseleave',showModal);}
var closeModal=function(){el.classList.remove('fade-in');if(lq.trigger=='exit'){b.removeEventListener('mouseleave',showModal);}
setTimeout(function(){el.classList.remove('display');},10);}
el.getElementsByClassName('close')[0].addEventListener('click',closeModal);lq.onError=closeModal;}
if(!document.getElementById("lq-vendor-css")){vendorCss.href=lq.baseUrl+'css/deployed-vendor.css?cb='+cb;vendorCss.rel=css.rel="stylesheet";vendorCss.type=css.type="text/css";vendorCss.setAttribute('id','lq-vendor-css');h.appendChild(vendorCss);}
if(!document.getElementById("lq-deployed-css")){css.href=lq.baseUrl+'css/deployed.css?cb='+cb;css.setAttribute('id','lq-deployed-css');h.appendChild(css);}
if(!document.getElementById("lq-deployed-app")){s.async=s.defer=true;s.src=lq.baseUrl+'js/deployed-app.js?cb='+cb;s.setAttribute('id','lq-deployed-app');b.appendChild(s);}
var waitEmbed=function(method){if(l_q.angular){method();}else{setTimeout(function(){waitEmbed(method);},1000);}}
waitEmbed(initEmbed);if(lq.trigger=='text'){textEl=insertText(lq);}}