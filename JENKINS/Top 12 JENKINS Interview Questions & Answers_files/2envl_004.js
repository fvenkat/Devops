(function(){
var cx=scriptParams.google_search_engine_id;
var gcse=document.createElement('script');
gcse.type='text/javascript';
gcse.async=true;
gcse.src=(document.location.protocol=='https:' ? 'https:':'http:') +
'//www.google.com/cse/cse.js?cx=' + cx;
var s=document.getElementsByTagName('script')[0];
s.parentNode.insertBefore(gcse, s);
})();
(function($){
"use strict";
$(document).ready(function(){
var aviabodyclasses=AviaBrowserDetection('html');
$.avia_utilities=$.avia_utilities||{};
if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&'ontouchstart' in document.documentElement){
$.avia_utilities.isMobile=true;
}else{
$.avia_utilities.isMobile=false;
}
avia_hamburger_menu();
avia_scroll_top_fade();
aviaCalcContentWidth();
new $.AviaTooltip({"class": 'avia-search-tooltip',data: 'avia-search-tooltip', event:'click', position:'bottom', scope: "body", attach:'element', within_screen: true});
new $.AviaTooltip({"class": 'avia-related-tooltip', data: 'avia-related-tooltip', scope: ".related_posts, .av-share-box", attach:'element', delay:0});
new $.AviaAjaxSearch({scope:'#header, .avia_search_element'});
if($.fn.avia_iso_sort)
$('.grid-sort-container').avia_iso_sort();
$.avia_utilities.avia_ajax_call();
});
$.avia_utilities=$.avia_utilities||{};
$.avia_utilities.avia_ajax_call=function(container){
if(typeof container=='undefined'){ container='body';};
$('a.avianolink').on('click', function(e){ e.preventDefault(); });
$('a.aviablank').attr('target', '_blank');
if($.fn.avia_activate_lightbox){
$(container).avia_activate_lightbox();
}
if($.fn.avia_scrollspy){
if(container=='body'){
$('body').avia_scrollspy({target:'.main_menu .menu li > a'});
}else{
$('body').avia_scrollspy('refresh');
}}
if($.fn.avia_smoothscroll)
$('a[href*="#"]', container).avia_smoothscroll(container);
avia_small_fixes(container);
avia_hover_effect(container);
avia_iframe_fix(container);
if($.fn.avia_html5_activation&&$.fn.mediaelementplayer)
$(".avia_video, .avia_audio", container).avia_html5_activation({ratio:'16:9'});
}
$.avia_utilities.log=function(text, type, extra){
if(typeof console=='undefined'){return;} if(typeof type=='undefined'){type="log"} type="AVIA-" + type.toUpperCase();
console.log("["+type+"] "+text); if(typeof extra!='undefined') console.log(extra);
}
function aviaCalcContentWidth(){
var win=$(window),
width_select=$('html').is('.html_header_sidebar') ? "#main":"#header",
outer=$(width_select),
outerParent=outer.parents('div:eq(0)'),
the_main=$(width_select + ' .container:first'),
css_block="",
calc_dimensions=function(){
var css="",
w_12=Math.round(the_main.width()),
w_outer=Math.round(outer.width()),
w_inner=Math.round(outerParent.width());
css +=" #header .three.units{width:"	+(w_12 * 0.25)+	"px;}";
css +=" #header .six.units{width:"		+(w_12 * 0.50)+	"px;}";
css +=" #header .nine.units{width:"	+(w_12 * 0.75)+	"px;}";
css +=" #header .twelve.units{width:"	+(w_12)		+	"px;}";
css +=" .av-framed-box .av-layout-tab-inner .container{width:"	+(w_inner)+	"px;}";
css +=" .html_header_sidebar .av-layout-tab-inner .container{width:"	+(w_outer)+	"px;}";
css +=" .boxed .av-layout-tab-inner .container{width:"	+(w_outer)+	"px;}";
css +=" .av-framed-box#top .av-submenu-container{width:"	+(w_inner)+	"px;}";
try{
css_block.text(css);
}
catch(err){
css_block.remove();
css_block=$("<style type='text/css' id='av-browser-width-calc'>"+css+"</style>").appendTo('head:first');
}};
if($('.avia_mega_div').length > 0||$('.av-layout-tab-inner').length > 0||$('.av-submenu-container').length > 0){
css_block=$("<style type='text/css' id='av-browser-width-calc'></style>").appendTo('head:first')
win.on('debouncedresize', calc_dimensions);
calc_dimensions();
}}
function AviaScrollSpy(element, options){
var self=this;
var process=$.proxy(self.process, self)
, refresh=$.proxy(self.refresh, self)
, $element=$(element).is('body') ? $(window):$(element)
, href
self.$body=$('body')
self.$win=$(window)
self.options=$.extend({}, $.fn.avia_scrollspy.defaults, options)
self.selector=(self.options.target
|| ((href=$(element).attr('href'))&&href.replace(/.*(?=#[^\s]+$)/, ''))
|| '')
self.activation_true=false;
if(self.$body.find(self.selector + "[href*='#']").length){
self.$scrollElement=$element.on('scroll.scroll-spy.data-api', process);
self.$win.on('av-height-change', refresh);
self.$body.on('av_resize_finished', refresh);
self.activation_true=true;
self.checkFirst();
setTimeout(function(){
self.refresh()
self.process()
},100);
}}
AviaScrollSpy.prototype={
constructor: AviaScrollSpy
, checkFirst: function (){
var current=window.location.href.split('#')[0],
matching_link=this.$body.find(this.selector + "[href='"+current+"']").attr('href',current+'#top');
}
, refresh: function (){
if(!this.activation_true) return;
var self=this
, $targets
this.offsets=$([])
this.targets=$([])
$targets=this.$body
.find(this.selector)
.map(function (){
var $el=$(this)
, href=$el.data('target')||$el.attr('href')
, hash=this.hash
, hash=hash.replace(/\//g, "")
, $href=/^#\w/.test(hash)&&$(hash)
return($href
&& $href.length
&& [[ $href.position().top + (!$.isWindow(self.$scrollElement.get(0))&&self.$scrollElement.scrollTop()), href ]])||null
})
.sort(function (a, b){ return a[0] - b[0] })
.each(function (){
self.offsets.push(this[0])
self.targets.push(this[1])
})
}
, process: function (){
if(!this.offsets) return;
if(isNaN(this.options.offset)) this.options.offset=0;
var scrollTop=this.$scrollElement.scrollTop() + this.options.offset
, scrollHeight=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight
, maxScroll=scrollHeight - this.$scrollElement.height()
, offsets=this.offsets
, targets=this.targets
, activeTarget=this.activeTarget
, i
if(scrollTop >=maxScroll){
return activeTarget!=(i=targets.last()[0])
&& this.activate(i)
}
for (i=offsets.length; i--;){
activeTarget!=targets[i]
&& scrollTop >=offsets[i]
&& (!offsets[i + 1]||scrollTop <=offsets[i + 1])
&& this.activate(targets[i])
}}
, activate: function (target){
var active
, selector
this.activeTarget=target
$(this.selector)
.parent('.' + this.options.applyClass)
.removeClass(this.options.applyClass)
selector=this.selector
+ '[data-target="' + target + '"],'
+ this.selector + '[href="' + target + '"]'
active=$(selector)
.parent('li')
.addClass(this.options.applyClass)
if(active.parent('.sub-menu').length){
active=active.closest('li.dropdown_ul_available').addClass(this.options.applyClass)
}
active.trigger('activate')
}}
$.fn.avia_scrollspy=function (option){
return this.each(function (){
var $this=$(this)
, data=$this.data('scrollspy')
, options=typeof option=='object'&&option
if(!data) $this.data('scrollspy', (data=new AviaScrollSpy(this, options)))
if(typeof option=='string') data[option]()
})
}
$.fn.avia_scrollspy.Constructor=AviaScrollSpy
$.fn.avia_scrollspy.calc_offset=function(){
var 	offset_1=(parseInt($('.html_header_sticky #main').data('scroll-offset'), 10))||0,
offset_2=($(".html_header_sticky:not(.html_top_nav_header) #header_main_alternate").outerHeight())||0,
offset_3=($(".html_header_sticky.html_header_unstick_top_disabled #header_meta").outerHeight())||0,
offset_4=1,
offset_5=parseInt($('html').css('margin-top'),10)||0,
offset_6=parseInt($('.av-frame-top ').outerHeight(),10)||0;
return offset_1 + offset_2 + offset_3 + offset_4 + offset_5 + offset_6;
}
$.fn.avia_scrollspy.defaults =
{
offset: $.fn.avia_scrollspy.calc_offset(),
applyClass: 'current-menu-item'
}
function AviaBrowserDetection(outputClassElement){
var current_browser={},
uaMatch=function(ua){
ua=ua.toLowerCase();
var match=/(edge)\/([\w.]+)/.exec(ua) ||
/(opr)[\/]([\w.]+)/.exec(ua) ||
/(chrome)[ \/]([\w.]+)/.exec(ua) ||
/(iemobile)[\/]([\w.]+)/.exec(ua) ||
/(version)(applewebkit)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(ua) ||
/(webkit)[ \/]([\w.]+).*(version)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(ua) ||
/(webkit)[ \/]([\w.]+)/.exec(ua) ||
/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua) ||
/(msie) ([\w.]+)/.exec(ua) ||
ua.indexOf("trident") >=0&&/(rv)(?::|)([\w.]+)/.exec(ua) ||
ua.indexOf("compatible") < 0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua) ||
[];
return {
browser: match[ 5 ]||match[ 3 ]||match[ 1 ]||"",
version: match[ 2 ]||match[ 4 ]||"0",
versionNumber: match[ 4 ]||match[ 2 ]||"0"
};};
var matched=uaMatch(navigator.userAgent);
if(matched.browser){
current_browser.browser=matched.browser;
current_browser[ matched.browser ]=true;
current_browser.version=matched.version;
}
if(current_browser.chrome){
current_browser.webkit=true;
}else if(current_browser.webkit){
current_browser.safari=true;
}
if(typeof(current_browser)!=='undefined'){
var bodyclass='', version=current_browser.version ? parseInt(current_browser.version):"";
if(current_browser.msie||current_browser.rv||current_browser.iemobile){
bodyclass +='avia-msie';
}else if(current_browser.webkit){
bodyclass +='avia-webkit';
}else if(current_browser.mozilla){
bodyclass +='avia-mozilla';
}
if(current_browser.version) bodyclass +=' ' + bodyclass + '-' + version + ' ';
if(current_browser.browser) bodyclass +=' avia-' + current_browser.browser + ' avia-' +current_browser.browser +'-' + version + ' ';
}
if(outputClassElement) $(outputClassElement).addClass(bodyclass)
return bodyclass;
}
$.fn.avia_html5_activation=function(options){
var defaults =
{
ratio: '16:9'
};
var options=$.extend(defaults, options),
isMobile=$.avia_utilities.isMobile;
this.each(function(){
var fv=$(this),
id_to_apply='#' + fv.attr('id'),
posterImg=fv.attr('poster');
fv.mediaelementplayer({
defaultVideoWidth: 480,
defaultVideoHeight: 270,
videoWidth: -1,
videoHeight: -1,
audioWidth: 400,
audioHeight: 30,
startVolume: 0.8,
loop: false,
enableAutosize: false,
features: ['playpause','progress','current','duration','tracks','volume'],
alwaysShowControls: false,
iPadUseNativeControls: false,
iPhoneUseNativeControls: false,
AndroidUseNativeControls: false,
alwaysShowHours: false,
showTimecodeFrameCount: false,
framesPerSecond: 25,
enableKeyboard: true,
pauseOtherPlayers: false,
poster: posterImg,
success: function (mediaElement, domObject, instance){
$.AviaVideoAPI.players[ fv.attr('id').replace(/_html5/,'') ]=instance;
setTimeout(function(){
if(mediaElement.pluginType=='flash'){
mediaElement.addEventListener('canplay', function(){ fv.trigger('av-mediajs-loaded'); }, false);
}else{
fv.trigger('av-mediajs-loaded').addClass('av-mediajs-loaded');
}
mediaElement.addEventListener('ended', function(){  fv.trigger('av-mediajs-ended'); }, false);
},10);
},
error: function (){
},
keyActions: []
});
});
}
function avia_hover_effect(container){
if($.avia_utilities.isMobile) return;
var overlay="", cssTrans=$.avia_utilities.supports('transition');
if(container=='body'){
var elements=$('#main a img').parents('a').not('.noLightbox, .noLightbox a, .avia-gallery-thumb a, .ls-wp-container a, .noHover, .noHover a, .av-logo-container .logo a').add('#main .avia-hover-fx');
}else{
var elements=$('a img', container).parents('a').not('.noLightbox, .noLightbox a, .avia-gallery-thumb a, .ls-wp-container a, .noHover, .noHover a, .av-logo-container .logo a').add('.avia-hover-fx', container);
}
elements.each(function(e){
var link=$(this),
current=link.find('img:first');
if(current.hasClass('alignleft')) link.addClass('alignleft').css({float:'left', margin:0, padding:0});
if(current.hasClass('alignright')) link.addClass('alignright').css({float:'right', margin:0, padding:0});
if(current.hasClass('aligncenter')) link.addClass('aligncenter').css({float:'none','text-align':'center', margin:0, padding:0});
if(current.hasClass('alignnone')){
link.addClass('alignnone').css({margin:0, padding:0});;
if(!link.css('display')||link.css('display')=='inline'){ link.css({display:'inline-block'});}}
if(!link.css('position')||link.css('position')=='static'){ link.css({position:'relative', overflow:'hidden'});}
var url=link.attr('href'),
span_class="overlay-type-video",
opa=link.data('opacity')||0.7,
overlay_offset=5,
overlay=link.find('.image-overlay');
if(url){
if(url.match(/(jpg|gif|jpeg|png|tif)/)) span_class="overlay-type-image";
if(!url.match(/(jpg|gif|jpeg|png|\.tif|\.mov|\.swf|vimeo\.com|youtube\.com)/)) span_class="overlay-type-extern";
}
if(!overlay.length){
overlay=$("<span class='image-overlay "+span_class+"'><span class='image-overlay-inside'></span></span>").appendTo(link);
}
link.on('mouseenter', function(e){
var current=link.find('img:first'),
_self=current.get(0),
outerH=current.outerHeight(),
outerW=current.outerWidth(),
pos=current.position(),
linkCss=link.css('display'),
overlay=link.find('.image-overlay');
if(outerH > 100){
if(!overlay.length){
overlay=$("<span class='image-overlay "+span_class+"'><span class='image-overlay-inside'></span></span>").appendTo(link);
}
if(link.height()==0){ link.addClass(_self.className); _self.className=""; }
if(!linkCss||linkCss=='inline'){ link.css({display:'block'});}
overlay.css({left:(pos.left - overlay_offset) + parseInt(current.css("margin-left"),10), top:pos.top + parseInt(current.css("margin-top"),10)})
.css({overflow:'hidden',display:'block','height':outerH,'width':(outerW + (2*overlay_offset))});
if(cssTrans===false) overlay.stop().animate({opacity:opa}, 400);
}else{
overlay.css({display:"none"});
}}).on('mouseleave', elements, function(){
if(overlay.length){
if(cssTrans===false) overlay.stop().animate({opacity:0}, 400);
}});
});
}
(function($){
$.fn.avia_smoothscroll=function(apply_to_container){
if(!this.length) return;
var the_win=$(window),
$header=$('#header'),
$main=$('.html_header_top.html_header_sticky #main').not('.page-template-template-blank-php #main'),
$meta=$('.html_header_top.html_header_unstick_top_disabled #header_meta'),
$alt=$('.html_header_top:not(.html_top_nav_header) #header_main_alternate'),
menu_above_logo=$('.html_header_top.html_top_nav_header'),
shrink=$('.html_header_top.html_header_shrinking').length,
frame=$('.av-frame-top'),
fixedMainPadding=0,
isMobile=$.avia_utilities.isMobile,
sticky_sub=$('.sticky_placeholder:first'),
calc_main_padding=function(){
if($header.css('position')=="fixed"){
var tempPadding=parseInt($main.data('scroll-offset'),10)||0,
non_shrinking=parseInt($meta.outerHeight(),10)||0,
non_shrinking2=parseInt($alt.outerHeight(),10)||0;
if(tempPadding > 0&&shrink){
tempPadding=(tempPadding / 2) + non_shrinking + non_shrinking2;
}else{
tempPadding=tempPadding + non_shrinking + non_shrinking2;
}
tempPadding +=parseInt($('html').css('margin-top'),10);
fixedMainPadding=tempPadding;
}else{
fixedMainPadding=parseInt($('html').css('margin-top'),10);
}
if(frame.length){
fixedMainPadding +=frame.height();
}
if(menu_above_logo.length){
fixedMainPadding=$('.html_header_sticky #header_main_alternate').height() + parseInt($('html').css('margin-top'),10);
}
if(isMobile){
fixedMainPadding=0;
}};
if(isMobile) shrink=false;
calc_main_padding();
the_win.on("debouncedresize av-height-change",  calc_main_padding);
var hash=window.location.hash.replace(/\//g, "");
if(fixedMainPadding > 0&&hash&&apply_to_container=='body'&&hash.charAt(1)!="!"&&hash.indexOf("=")===-1){
var scroll_to_el=$(hash), modifier=0;
if(scroll_to_el.length){
the_win.on('scroll.avia_first_scroll', function(){
setTimeout(function(){
if(sticky_sub.length&&scroll_to_el.offset().top > sticky_sub.offset().top){ modifier=sticky_sub.outerHeight() - 3; }
the_win.off('scroll.avia_first_scroll').scrollTop(scroll_to_el.offset().top - fixedMainPadding - modifier);
},10);
});
}}
return this.each(function(){
$(this).click(function(e){
var newHash=this.hash.replace(/\//g, ""),
clicked=$(this),
data=clicked.data();
if(newHash!=''&&newHash!='#'&&newHash!='#prev'&&newHash!='#next'&&!clicked.is('.comment-reply-link, #cancel-comment-reply-link, .no-scroll')){
var container="", originHash="";
if("#next-section"==newHash){
originHash=newHash;
container=clicked.parents('.container_wrap:eq(0)').nextAll('.container_wrap:eq(0)');
newHash='#' + container.attr('id') ;
}else{
container=$(this.hash.replace(/\//g, ""));
}
if(container.length){
var cur_offset=the_win.scrollTop(),
container_offset=container.offset().top,
target=container_offset - fixedMainPadding,
hash=window.location.hash,
hash=hash.replace(/\//g, ""),
oldLocation=window.location.href.replace(hash, ''),
newLocation=this,
duration=data.duration||1200,
easing=data.easing||'easeInOutQuint';
if(sticky_sub.length&&container_offset > sticky_sub.offset().top){ target -=sticky_sub.outerHeight() - 3;}
if(oldLocation+newHash==newLocation||originHash){
if(cur_offset!=target){
if(!(cur_offset==0&&target <=0)){
the_win.trigger('avia_smooth_scroll_start');
$('html:not(:animated),body:not(:animated)').animate({ scrollTop: target }, duration, easing, function(){
if(window.history.replaceState)
window.history.replaceState("", "", newHash);
});
}}
e.preventDefault();
}}
}});
});
};})(jQuery);
function avia_iframe_fix(container){
var iframe=jQuery('iframe[src*="youtube.com"]:not(.av_youtube_frame)', container),
youtubeEmbed=jQuery('iframe[src*="youtube.com"]:not(.av_youtube_frame) object, iframe[src*="youtube.com"]:not(.av_youtube_frame) embed', container).attr('wmode','opaque');
iframe.each(function(){
var current=jQuery(this),
src=current.attr('src');
if(src){
if(src.indexOf('?')!==-1){
src +="&wmode=opaque&rel=0";
}else{
src +="?wmode=opaque&rel=0";
}
current.attr('src', src);
}});
}
function avia_small_fixes(container){
if(!container) container=document;
var win=jQuery(window),
iframes=jQuery('.avia-iframe-wrap iframe:not(.avia-slideshow iframe):not(iframe.no_resize):not(.avia-video iframe)', container),
adjust_iframes=function(){
iframes.each(function(){
var iframe=jQuery(this), parent=iframe.parent(), proportions=56.25;
if(this.width&&this.height){
proportions=(100/ this.width) * this.height;
parent.css({"padding-bottom":proportions+"%"});
}});
};
adjust_iframes();
}
function avia_scroll_top_fade(){
var win=$(window),
timeo=false,
scroll_top=$('#scroll-top-link'),
set_status=function(){
var st=win.scrollTop();
if(st < 500){
scroll_top.removeClass('avia_pop_class');
}
else if(!scroll_top.is('.avia_pop_class')){
scroll_top.addClass('avia_pop_class');
}};
win.on('scroll',  function(){ window.requestAnimationFrame(set_status)});
set_status();
}
function avia_hamburger_menu(){
var header=$('#header'),
header_main=$('#main .av-logo-container'),
menu=$('#avia-menu'),
burger_wrap=$('.av-burger-menu-main a'),
htmlEL=$('html').eq(0),
overlay=$('<div class="av-burger-overlay"></div>'),
overlay_scroll=$('<div class="av-burger-overlay-scroll"></div>').appendTo(overlay),
inner_overlay=$('<div class="av-burger-overlay-inner"></div>').appendTo(overlay_scroll),
bgColor=$('<div class="av-burger-overlay-bg"></div>').appendTo(overlay),
animating=false,
first_level={},
logo_container=$('.av-logo-container .inner-container'),
menu_in_logo_container=logo_container.find('.main_menu'),
cloneFirst=htmlEL.is('.html_av-submenu-display-click.html_av-submenu-clone, .html_av-submenu-display-hover.html_av-submenu-clone'),
menu_generated=false,
set_list_container_height=function(){
if($.avia_utilities.isMobile){
overlay_scroll.outerHeight(window.innerHeight);
}},
create_list=function(items , append_to){
if(!items) return;
var list, link, current, subitems, megacolumns, sub_current, sub_current_list, new_li, new_ul;
items.each(function(){
current=$(this);
subitems=current.find(' > .sub-menu > li');
if(subitems.length==0){
subitems=current.find(' > .children > li');
}
megacolumns=current.find('.avia_mega_div > .sub-menu > li.menu-item');
var cur_menu=current.find('>a');
var clone_events=true;
if(cur_menu.length){
if(cur_menu.get(0).hash=='#'||'undefined'==typeof cur_menu.attr('href')||cur_menu.attr('href')=='#'){
if(subitems.length > 0||megacolumns.length > 0){
clone_events=false;
}}
}
link=cur_menu.clone(clone_events).attr('style','');
if('undefined'==typeof cur_menu.attr('href')){
link.attr('href', '#');
}
new_li=$('<li>').append(link);
var cls=[];
if('undefined'!=typeof current.attr('class')){
cls=current.attr('class').split(/\s+/);
$.each(cls, function(index, value){
if(( value.indexOf('menu-item')!=0)&&(value.indexOf('page-item') < 0)&&(value.indexOf('page_item')!=0)&&(value.indexOf('dropdown_ul') < 0)){
new_li.addClass(value);
}
return true;
});
}
if('undefined'!=typeof current.attr('id')&&''!=current.attr('id')){
new_li.addClass(current.attr('id'));
}else{
$.each(cls, function(index, value){
if(value.indexOf('page-item-') >=0){
new_li.addClass(value);
return false;
}});
}
append_to.append(new_li);
if(subitems.length){
new_ul=$('<ul class="sub-menu">').appendTo(new_li);
if(cloneFirst&&(link.get(0).hash!='#'&&link.attr('href')!='#')){
new_li.clone(true).prependTo(new_ul);
}
new_li.addClass('av-width-submenu').find('>a').append('<span class="av-submenu-indicator">');
create_list(subitems , new_ul);
}
else if(megacolumns.length){
new_ul=$('<ul class="sub-menu">').appendTo(new_li);
if(cloneFirst&&(link.get(0).hash!='#'&&link.attr('href')!='#')){
new_li.clone(true).prependTo(new_ul);
}
megacolumns.each(function(iteration){
var megacolumn=$(this),
mega_current=megacolumn.find('> .sub-menu'),
mega_title=megacolumn.find('> .mega_menu_title'),
mega_title_link=mega_title.find('a').attr('href')||"#",
current_megas=mega_current.length > 0 ? mega_current.find('>li'):null,
mega_title_set=false,
mega_link=new_li.find('>a'),
hide_enty='';
if(( current_megas===null)||(current_megas.length==0)){
if(mega_title_link=='#'){
hide_enty=' style="display: none;"';
}}
if(iteration==0) new_li.addClass('av-width-submenu').find('>a').append('<span class="av-submenu-indicator">');
if(mega_title.length&&mega_title.text()!=""){
mega_title_set=true;
if(iteration > 0){
var check_li=new_li.parents('li').eq(0);
if(check_li.length) new_li=check_li;
new_ul=$('<ul class="sub-menu">').appendTo(new_li);
}
new_li=$('<li' + hide_enty + '>').appendTo(new_ul);
new_ul=$('<ul class="sub-menu">').appendTo(new_li);
$('<a href="'+mega_title_link+'"><span class="avia-bullet"></span><span class="avia-menu-text">' +mega_title.text()+ '</span></a>').insertBefore(new_ul);
mega_link=new_li.find('>a');
if(cloneFirst&&(mega_current.length > 0)&&(mega_link.length&&mega_link.get(0).hash!='#'&&mega_link.attr('href')!='#')){
new_li.clone(true).addClass('av-cloned-title').prependTo(new_ul);
}}
if(mega_title_set&&(mega_current.length > 0)) new_li.addClass('av-width-submenu').find('>a').append('<span class="av-submenu-indicator">');
create_list(current_megas , new_ul);
});
}});
burger_wrap.trigger('avia_burger_list_created');
return list;
};
var burger_ul, burger;
$('body').on('mousewheel DOMMouseScroll touchmove', '.av-burger-overlay-scroll', function (e){
var height=this.offsetHeight,
scrollHeight=this.scrollHeight,
direction=e.originalEvent.wheelDelta;
if(scrollHeight!=this.clientHeight){
if((this.scrollTop >=(scrollHeight - height)&&direction < 0)||(this.scrollTop <=0&&direction > 0)){
e.preventDefault();
}}else{
e.preventDefault();
}});
$(document).on('mousewheel DOMMouseScroll touchmove', '.av-burger-overlay-bg, .av-burger-overlay-active .av-burger-menu-main', function (e){
e.preventDefault();
});
var touchPos={};
$(document).on('touchstart', '.av-burger-overlay-scroll', function(e){
touchPos.Y=e.originalEvent.touches[0].clientY;
});
$(document).on('touchend', '.av-burger-overlay-scroll', function(e){
touchPos={};});
$(document).on('touchmove', '.av-burger-overlay-scroll', function (e){
if(!touchPos.Y){
touchPos.Y=e.originalEvent.touches[0].clientY;
}
var	differenceY=e.originalEvent.touches[0].clientY - touchPos.Y,
element=this,
top=element.scrollTop,
totalScroll=element.scrollHeight,
currentScroll=top + element.offsetHeight,
direction=differenceY > 0 ? "up":"down";
$('body').get(0).scrollTop=touchPos.body;
if(top <=0){
if(direction=="up") e.preventDefault();
}else if(currentScroll >=totalScroll){
if(direction=="down") e.preventDefault();
}});
$(window).on('debouncedresize', function (e){
if(burger&&burger.length){
if(! burger_wrap.is(':visible')){
burger.filter(".is-active").parents('a').eq(0).trigger('click');
}}
set_list_container_height();
});
$('.html_av-overlay-side').on('click', '.av-burger-overlay-bg', function (e){
e.preventDefault();
burger.parents('a').eq(0).trigger('click');
});
$(window).on('avia_smooth_scroll_start', function(){
if(burger&&burger.length){
burger.filter(".is-active").parents('a').eq(0).trigger('click');
}});
$('.html_av-submenu-display-hover').on('mouseenter', '.av-width-submenu', function (e){
$(this).children("ul.sub-menu").slideDown('fast');
});
$('.html_av-submenu-display-hover').on('mouseleave', '.av-width-submenu', function (e){
$(this).children("ul.sub-menu").slideUp('fast');
});
$('.html_av-submenu-display-hover').on('click', '.av-width-submenu > a', function (e){
e.preventDefault();
e.stopImmediatePropagation();
});
$('.html_av-submenu-display-hover').on('touchstart', '.av-width-submenu > a', function (e){
var menu=$(this);
toggle_submenu(menu, e);
});
$('.html_av-submenu-display-click').on('click', '.av-width-submenu > a', function (e){
var menu=$(this);
toggle_submenu(menu, e);
});
function toggle_submenu(menu, e){
e.preventDefault();
e.stopImmediatePropagation();
var parent=menu.parents('li').eq(0);
parent.toggleClass('av-show-submenu');
if(parent.is('.av-show-submenu')){
parent.children("ul.sub-menu").slideDown('fast');
}else{
parent.children("ul.sub-menu").slideUp('fast');
}};
(function normalize_layout(){
if(menu_in_logo_container.length) return;
var menu2=$('#header .main_menu').clone(true);
menu2.find('.menu-item:not(.menu-item-avia-special)').remove();
menu2.insertAfter(logo_container.find('.logo').first());
var social=$('#header .social_bookmarks').clone(true);
if(!social.length) social=$('.av-logo-container .social_bookmarks').clone(true);
if(social.length){
menu2.find('.avia-menu').addClass('av_menu_icon_beside');
menu2.append(social);
}
burger_wrap=$('.av-burger-menu-main a');
}());
burger_wrap.click(function(e){
if(animating) return;
burger=$(this).find('.av-hamburger'),
animating=true;
if(!menu_generated){
menu_generated=true;
burger.addClass("av-inserted-main-menu");
burger_ul=$('<ul>').attr({id:'av-burger-menu-ul', class:''});
var first_level_items=menu.find('> li:not(.menu-item-avia-special)');
var	list=create_list(first_level_items , burger_ul);
burger_ul.find('.noMobile').remove();
burger_ul.appendTo(inner_overlay);
first_level=inner_overlay.find('#av-burger-menu-ul > li');
if($.fn.avia_smoothscroll){
$('a[href*="#"]', overlay).avia_smoothscroll(overlay);
}}
if(burger.is(".is-active")){
burger.removeClass("is-active");
htmlEL.removeClass("av-burger-overlay-active-delayed");
overlay.animate({opacity:0}, function(){
overlay.css({display:'none'});
htmlEL.removeClass("av-burger-overlay-active");
animating=false;
});
}else{
set_list_container_height();
var offsetTop=header_main.length ? header_main.outerHeight() + header_main.position().top:header.outerHeight() + header.position().top;
overlay.appendTo($(e.target).parents('.avia-menu'));
burger_ul.css({padding:(offsetTop) + "px 0px"});
first_level.removeClass('av-active-burger-items');
burger.addClass("is-active");
htmlEL.addClass("av-burger-overlay-active");
overlay.css({display:'block'}).animate({opacity:1}, function(){
animating=false;
});
setTimeout(function(){
htmlEL.addClass("av-burger-overlay-active-delayed");
}, 100);
first_level.each(function(i){
var _self=$(this);
setTimeout(function(){
_self.addClass('av-active-burger-items');
}, (i + 1) * 125);
});
}
e.preventDefault();
});
}
$.AviaAjaxSearch=function(options){
var defaults={
delay: 300,
minChars: 3,
scope: 'body'
};
this.options=$.extend({}, defaults, options);
this.scope=$(this.options.scope);
this.timer=false;
this.lastVal="";
this.bind_events();
};
$.AviaAjaxSearch.prototype =
{
bind_events: function(){
this.scope.on('keyup', '#s:not(".av_disable_ajax_search #s")' , $.proxy(this.try_search, this));
},
try_search: function(e){
clearTimeout(this.timer);
if(e.currentTarget.value.length >=this.options.minChars&&this.lastVal!=$.trim(e.currentTarget.value)){
this.timer=setTimeout($.proxy(this.do_search, this, e), this.options.delay);
}
else if(e.currentTarget.value.length==0){
this.timer=setTimeout($.proxy(this.reset, this, e), this.options.delay);
}},
reset: function(e){
var form=$(e.currentTarget).parents('form:eq(0)'),
resultscontainer=form.find('.ajax_search_response'),
alternative_resultscontainer=$(form.attr('data-ajaxcontainer')).find('.ajax_search_response');
resultscontainer.hide('slow', function(){ resultscontainer.remove(); });
alternative_resultscontainer.hide('slow', function(){ resultscontainer.remove(); });
$('body > .ajax_search_response').hide('slow', function(){ $(this).remove(); });
},
do_search: function(e){
var obj=this,
currentField=$(e.currentTarget).attr("autocomplete", "off"),
currentFieldWrapper=$(e.currentTarget).parents('.av_searchform_wrapper:eq(0)'),
currentField_position=currentFieldWrapper.offset(),
currentField_width=currentFieldWrapper.outerWidth(),
currentField_height=currentFieldWrapper.outerHeight(),
form=currentField.parents('form:eq(0)'),
submitbtn=form.find('#searchsubmit'),
resultscontainer=form,
results=resultscontainer.find('.ajax_search_response'),
loading=$('<div class="ajax_load"><span class="ajax_load_inner"></span></div>'),
action=form.attr('action'),
values=form.serialize();
values     					+='&action=avia_ajax_search';
if(!results.length){
results=$('<div class="ajax_search_response"></div>');
}
if(form.attr('id')=='searchform_element'){
results.addClass('searchform_element_results');
}
if(action.indexOf('?')!=-1){
action=action.split('?');
values +="&" + action[1];
}
if(form.attr('data-ajaxcontainer')){
var rescon=form.attr('data-ajaxcontainer');
if($(rescon).length){
$(rescon).find('.ajax_search_response').remove();
resultscontainer=$(rescon);
}}
results_css={};
if(form.hasClass('av_results_container_fixed')){
$('body').find('.ajax_search_response').remove();
resultscontainer=$('body');
var results_css={
top: currentField_position.top + currentField_height,
left: currentField_position.left,
width: currentField_width
}
results.addClass('main_color');
$(window).resize(function(){
results.remove();
$.proxy(this.reset, this);
currentField.val('');
});
}
if(form.attr('data-results_style')){
var results_style=JSON.parse(form.attr('data-results_style'));
results_css=Object.assign(results_css, results_style);
if("color" in results_css){
results.addClass('av_has_custom_color');
}}
results.css(results_css);
if(resultscontainer.hasClass('avia-section')){
results.addClass('container');
}
results.appendTo(resultscontainer);
if(results.find('.ajax_not_found').length&&e.currentTarget.value.indexOf(this.lastVal)!=-1) return;
this.lastVal=e.currentTarget.value;
$.ajax({
url: avia_framework_globals.ajaxurl,
type: "POST",
data:values,
beforeSend: function(){
loading.insertAfter(submitbtn);
form.addClass('ajax_loading_now');
},
success: function(response){
if(response==0) response="";
results.html(response);
},
complete: function(){
loading.remove();
form.removeClass('ajax_loading_now');
}});
}};
$.AviaTooltip=function(options){
var defaults={
delay: 1500,
delayOut: 300,
delayHide: 0,
"class": "avia-tooltip",
scope: "body",
data:  "avia-tooltip",
attach:"body",
event: 'mouseenter',
position:'top',
extraClass:'avia-tooltip-class',
permanent: false,
within_screen: false
};
this.options=$.extend({}, defaults, options);
this.body=$('body');
this.scope=$(this.options.scope);
this.tooltip=$('<div class="'+this.options['class']+' avia-tt"><span class="avia-arrow-wrap"><span class="avia-arrow"></span></span></div>');
this.inner=$('<div class="inner_tooltip"></div>').prependTo(this.tooltip);
this.open=false;
this.timer=false;
this.active=false;
this.bind_events();
};
$.AviaTooltip.openTTs=[];
$.AviaTooltip.prototype =
{
bind_events: function(){
var perma_tooltips='.av-permanent-tooltip [data-'+this.options.data+']',
default_tooltips='[data-'+this.options.data+']:not(.av-permanent-tooltip [data-'+this.options.data+'])';
this.scope.on('av_permanent_show', perma_tooltips, $.proxy(this.display_tooltip, this));
$(perma_tooltips).addClass('av-perma-tooltip').trigger('av_permanent_show');
this.scope.on(this.options.event + ' mouseleave', default_tooltips, $.proxy(this.start_countdown, this));
if(this.options.event!='click'){
this.scope.on('mouseleave', default_tooltips, $.proxy(this.hide_tooltip, this));
}else{
this.body.on('mousedown', $.proxy(this.hide_tooltip, this));
}},
start_countdown: function(e){
clearTimeout(this.timer);
if(e.type==this.options.event){
var delay=this.options.event=='click' ? 0:this.open ? 0:this.options.delay;
this.timer=setTimeout($.proxy(this.display_tooltip, this, e), delay);
}
else if(e.type=='mouseleave'){
this.timer=setTimeout($.proxy(this.stop_instant_open, this, e), this.options.delayOut);
}
e.preventDefault();
},
reset_countdown: function(e){
clearTimeout(this.timer);
this.timer=false;
},
display_tooltip: function(e){
var _self=this,
target=this.options.event=="click" ? e.target:e.currentTarget,
element=$(target),
text=element.data(this.options.data),
newTip=element.data('avia-created-tooltip'),
extraClass=element.data('avia-tooltip-class'),
attach=this.options.attach=='element' ? element:this.body,
offset=this.options.attach=='element' ? element.position():element.offset(),
position=element.data('avia-tooltip-position'),
align=element.data('avia-tooltip-alignment'),
force_append=false;
text=$.trim(text);
if(element.is('.av-perma-tooltip')){
offset={top:0, left:0 };
attach=element;
force_append=true;
}
if(text=="") return;
if(position==""||typeof position=='undefined') position=this.options.position;
if(align==""||typeof align=='undefined') align='center';
if(typeof newTip!='undefined'){
newTip=$.AviaTooltip.openTTs[newTip];
}else{
this.inner.html(text);
newTip=this.tooltip.clone();
if(this.options.attach=='element'&&force_append!==true){
newTip.insertAfter(attach);
}else{
newTip.appendTo(attach);
}
if(extraClass!="") newTip.addClass(extraClass);
}
this.open=true;
this.active=newTip;
if((newTip.is(':animated:visible')&&e.type=='click')||element.is('.'+this.options['class'])||element.parents('.'+this.options['class']).length!=0) return;
var animate1={}, animate2={}, pos1="", pos2="";
if(position=="top"|| position=="bottom"){
switch(align){
case "left": pos2=offset.left; break;
case "right": pos2=offset.left + element.outerWidth() - newTip.outerWidth();  break;
default: pos2=(offset.left + (element.outerWidth() / 2)) - (newTip.outerWidth() / 2); break;
}
if(_self.options.within_screen){
var boundary=element.offset().left + (element.outerWidth() / 2) - (newTip.outerWidth() / 2) + parseInt(newTip.css('margin-left'),10);
if(boundary < 0){
pos2=pos2 - boundary;
}}
}else{
switch(align){
case "top": pos1=offset.top; break;
case "bottom": pos1=offset.top + element.outerHeight() - newTip.outerHeight();  break;
default: pos1=(offset.top + (element.outerHeight() / 2)) - (newTip.outerHeight() / 2); break;
}}
switch(position){
case "top":
pos1=offset.top - newTip.outerHeight();
animate1={top: pos1 - 10, left: pos2};
animate2={top: pos1};
break;
case "bottom":
pos1=offset.top + element.outerHeight();
animate1={top: pos1 + 10, left: pos2};
animate2={top: pos1};
break;
case "left":
pos2=offset.left  - newTip.outerWidth();
animate1={top: pos1, left: pos2 -10};
animate2={left: pos2};
break;
case "right":
pos2=offset.left + element.outerWidth();
animate1={top: pos1, left: pos2 + 10};
animate2={left: pos2};
break;
}
animate1['display']="block";
animate1['opacity']=0;
animate2['opacity']=1;
newTip.css(animate1).stop().animate(animate2,200);
newTip.find('input, textarea').focus();
$.AviaTooltip.openTTs.push(newTip);
element.data('avia-created-tooltip', $.AviaTooltip.openTTs.length - 1);
},
hide_tooltip: function(e){
var element=$(e.currentTarget) , newTip, animateTo,
position=element.data('avia-tooltip-position'),
align=element.data('avia-tooltip-alignment');
if(position==""||typeof position=='undefined') position=this.options.position;
if(align==""||typeof align=='undefined') align='center';
if(this.options.event=='click'){
element=$(e.target);
if(!element.is('.'+this.options['class'])&&element.parents('.'+this.options['class']).length==0){
if(this.active.length){ newTip=this.active; this.active=false;}}
}else{
newTip=element.data('avia-created-tooltip');
newTip=typeof newTip!='undefined' ? $.AviaTooltip.openTTs[newTip]:false;
}
if(newTip){
var animate={opacity:0};
switch(position){
case "top":
animate['top']=parseInt(newTip.css('top'),10) - 10;
break;
case "bottom":
animate['top']=parseInt(newTip.css('top'),10) + 10;
break;
case "left":
animate['left']=parseInt(newTip.css('left'), 10) - 10;
break;
case "right":
animate['left']=parseInt(newTip.css('left'), 10) + 10;
break;
}
newTip.animate(animate, 200, function(){
newTip.css({display:'none'});
});
}},
stop_instant_open: function(e){
this.open=false;
}};})(jQuery);
!function(){"use strict";function t(o){if(!o)throw new Error("No options passed to Waypoint constructor");if(!o.element)throw new Error("No element option passed to Waypoint constructor");if(!o.handler)throw new Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+e,this.options=t.Adapter.extend({},t.defaults,o),this.element=this.options.element,this.adapter=new t.Adapter(this.element),this.callback=o.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=t.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=t.Context.findOrCreateByElement(this.options.context),t.offsetAliases[this.options.offset]&&(this.options.offset=t.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),i[this.key]=this,e+=1}var e=0,i={};t.prototype.queueTrigger=function(t){this.group.queueTrigger(this,t)},t.prototype.trigger=function(t){this.enabled&&this.callback&&this.callback.apply(this,t)},t.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete i[this.key]},t.prototype.disable=function(){return this.enabled=!1,this},t.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},t.prototype.next=function(){return this.group.next(this)},t.prototype.previous=function(){return this.group.previous(this)},t.invokeAll=function(t){var e=[];for(var o in i)e.push(i[o]);for(var n=0,r=e.length;r>n;n++)e[n][t]()},t.destroyAll=function(){t.invokeAll("destroy")},t.disableAll=function(){t.invokeAll("disable")},t.enableAll=function(){t.invokeAll("enable")},t.refreshAll=function(){t.Context.refreshAll()},t.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},t.viewportWidth=function(){return document.documentElement.clientWidth},t.adapters=[],t.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},t.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}},window.Waypoint=t}(),function(){"use strict";function t(t){window.setTimeout(t,1e3/60)}function e(t){this.element=t,this.Adapter=n.Adapter,this.adapter=new this.Adapter(t),this.key="waypoint-context-"+i,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},t.waypointContextKey=this.key,o[t.waypointContextKey]=this,i+=1,this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}var i=0,o={},n=window.Waypoint,r=window.onload;e.prototype.add=function(t){var e=t.options.horizontal?"horizontal":"vertical";this.waypoints[e][t.key]=t,this.refresh()},e.prototype.checkEmpty=function(){var t=this.Adapter.isEmptyObject(this.waypoints.horizontal),e=this.Adapter.isEmptyObject(this.waypoints.vertical);t&&e&&(this.adapter.off(".waypoints"),delete o[this.key])},e.prototype.createThrottledResizeHandler=function(){function t(){e.handleResize(),e.didResize=!1}var e=this;this.adapter.on("resize.waypoints",function(){e.didResize||(e.didResize=!0,n.requestAnimationFrame(t))})},e.prototype.createThrottledScrollHandler=function(){function t(){e.handleScroll(),e.didScroll=!1}var e=this;this.adapter.on("scroll.waypoints",function(){(!e.didScroll||n.isTouch)&&(e.didScroll=!0,n.requestAnimationFrame(t))})},e.prototype.handleResize=function(){n.Context.refreshAll()},e.prototype.handleScroll=function(){var t={},e={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};for(var i in e){var o=e[i],n=o.newScroll>o.oldScroll,r=n?o.forward:o.backward;for(var s in this.waypoints[i]){var a=this.waypoints[i][s],l=o.oldScroll<a.triggerPoint,h=o.newScroll>=a.triggerPoint,p=l&&h,u=!l&&!h;(p||u)&&(a.queueTrigger(r),t[a.group.id]=a.group)}}for(var c in t)t[c].flushTriggers();this.oldScroll={x:e.horizontal.newScroll,y:e.vertical.newScroll}},e.prototype.innerHeight=function(){return this.element==this.element.window?n.viewportHeight():this.adapter.innerHeight()},e.prototype.remove=function(t){delete this.waypoints[t.axis][t.key],this.checkEmpty()},e.prototype.innerWidth=function(){return this.element==this.element.window?n.viewportWidth():this.adapter.innerWidth()},e.prototype.destroy=function(){var t=[];for(var e in this.waypoints)for(var i in this.waypoints[e])t.push(this.waypoints[e][i]);for(var o=0,n=t.length;n>o;o++)t[o].destroy()},e.prototype.refresh=function(){var t,e=this.element==this.element.window,i=this.adapter.offset(),o={};this.handleScroll(),t={horizontal:{contextOffset:e?0:i.left,contextScroll:e?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:e?0:i.top,contextScroll:e?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};for(var n in t){var r=t[n];for(var s in this.waypoints[n]){var a,l,h,p,u,c=this.waypoints[n][s],d=c.options.offset,f=c.triggerPoint,w=0,y=null==f;c.element!==c.element.window&&(w=c.adapter.offset()[r.offsetProp]),"function"==typeof d?d=d.apply(c):"string"==typeof d&&(d=parseFloat(d),c.options.offset.indexOf("%")>-1&&(d=Math.ceil(r.contextDimension*d/100))),a=r.contextScroll-r.contextOffset,c.triggerPoint=w+a-d,l=f<r.oldScroll,h=c.triggerPoint>=r.oldScroll,p=l&&h,u=!l&&!h,!y&&p?(c.queueTrigger(r.backward),o[c.group.id]=c.group):!y&&u?(c.queueTrigger(r.forward),o[c.group.id]=c.group):y&&r.oldScroll>=c.triggerPoint&&(c.queueTrigger(r.forward),o[c.group.id]=c.group)}}for(var g in o)o[g].flushTriggers();return this},e.findOrCreateByElement=function(t){return e.findByElement(t)||new e(t)},e.refreshAll=function(){for(var t in o)o[t].refresh()},e.findByElement=function(t){return o[t.waypointContextKey]},window.onload=function(){r&&r(),e.refreshAll()},n.requestAnimationFrame=function(e){var i=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||t;i.call(window,e)},n.Context=e}(),function(){"use strict";function t(t,e){return t.triggerPoint-e.triggerPoint}function e(t,e){return e.triggerPoint-t.triggerPoint}function i(t){this.name=t.name,this.axis=t.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),o[this.axis][this.name]=this}var o={vertical:{},horizontal:{}},n=window.Waypoint;i.prototype.add=function(t){this.waypoints.push(t)},i.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},i.prototype.flushTriggers=function(){for(var i in this.triggerQueues){var o=this.triggerQueues[i],n="up"===i||"left"===i;o.sort(n?e:t);for(var r=0,s=o.length;s>r;r+=1){var a=o[r];(a.options.continuous||r===o.length-1)&&a.trigger([i])}}this.clearTriggerQueues()},i.prototype.next=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints),o=i===this.waypoints.length-1;return o?null:this.waypoints[i+1]},i.prototype.previous=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints);return i?this.waypoints[i-1]:null},i.prototype.queueTrigger=function(t,e){this.triggerQueues[e].push(t)},i.prototype.remove=function(t){var e=n.Adapter.inArray(t,this.waypoints);e>-1&&this.waypoints.splice(e,1)},i.prototype.first=function(){return this.waypoints[0]},i.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},i.findOrCreate=function(t){return o[t.axis][t.name]||new i(t)},n.Group=i}(),function(){"use strict";function t(t){this.$element=e(t)}var e=window.jQuery,i=window.Waypoint;e.each(["innerHeight","innerWidth","off","offset","on","outerHeight","outerWidth","scrollLeft","scrollTop"],function(e,i){t.prototype[i]=function(){var t=Array.prototype.slice.call(arguments);return this.$element[i].apply(this.$element,t)}}),e.each(["extend","inArray","isEmptyObject"],function(i,o){t[o]=e[o]}),i.adapters.push({name:"jquery",Adapter:t}),i.Adapter=t}(),function(){"use strict";function t(t){return function(){var i=[],o=arguments[0];return t.isFunction(arguments[0])&&(o=t.extend({},arguments[1]),o.handler=arguments[0]),this.each(function(){var n=t.extend({},o,{element:this});"string"==typeof n.context&&(n.context=t(this).closest(n.context)[0]),i.push(new e(n))}),i}}var e=window.Waypoint;window.jQuery&&(window.jQuery.fn.waypoint=t(window.jQuery)),window.Zepto&&(window.Zepto.fn.waypoint=t(window.Zepto))}();
(function(){var lastTime=0;var vendors=['ms','moz','webkit','o'];for(var x=0;x<vendors.length&&!window.requestAnimationFrame;++x){window.requestAnimationFrame=window[vendors[x]+'RequestAnimationFrame'];window.cancelAnimationFrame=window[vendors[x]+'CancelAnimationFrame']||window[vendors[x]+'CancelRequestAnimationFrame']}if(!window.requestAnimationFrame)window.requestAnimationFrame=function(callback,element){var currTime=new Date().getTime();var timeToCall=Math.max(0,16-(currTime-lastTime));var id=window.setTimeout(function(){callback(currTime+timeToCall)},timeToCall);lastTime=currTime+timeToCall;return id};if(!window.cancelAnimationFrame)window.cancelAnimationFrame=function(id){clearTimeout(id)}}());
jQuery.expr[':'].regex=function(elem, index, match){
var matchParams=match[3].split(','),
validLabels=/^(data|css):/,
attr={
method: matchParams[0].match(validLabels) ?
matchParams[0].split(':')[0]:'attr',
property: matchParams.shift().replace(validLabels,'')
},
regexFlags='ig',
regex=new RegExp(matchParams.join('').replace(/^\s+|\s+$/g,''), regexFlags);
return regex.test(jQuery(elem)[attr.method](attr.property));
};
(function($){
"use strict";
$(document).ready(function(){
$.avia_utilities=$.avia_utilities||{};
if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&'ontouchstart' in document.documentElement){
$.avia_utilities.isMobile=true;
}else{
$.avia_utilities.isMobile=false;
}
if($.fn.avia_mobile_fixed)
$('.avia-bg-style-fixed').avia_mobile_fixed();
if($.fn.avia_parallax)
$('.av-parallax').avia_parallax();
if($.fn.avia_browser_height)
$('.av-minimum-height, .avia-fullscreen-slider, .av-cell-min-height').avia_browser_height();
if($.fn.avia_video_section)
$('.av-section-with-video-bg').avia_video_section();
new $.AviaTooltip({'class': "avia-tooltip", data: "avia-tooltip", delay:0, scope: "body"});
new $.AviaTooltip({'class': "avia-tooltip avia-icon-tooltip", data: "avia-icon-tooltip", delay:0, scope: "body"});
$.avia_utilities.activate_shortcode_scripts();
if($.fn.layer_slider_height_helper)
$('.avia-layerslider').layer_slider_height_helper();
if($.fn.avia_portfolio_preview){
$('.grid-links-ajax').avia_portfolio_preview();
}
if($.fn.avia_masonry)
$('.av-masonry').avia_masonry();
if($.fn.aviaccordion)
$('.aviaccordion').aviaccordion();
if($.fn.avia_textrotator)
$('.av-rotator-container').avia_textrotator();
if($.fn.avia_sc_tab_section){
$('.av-tab-section-container').avia_sc_tab_section();
}
if($.fn.avia_hor_gallery){
$('.av-horizontal-gallery').avia_hor_gallery();
}
if($.fn.avia_link_column){
$('.avia-link-column').avia_link_column();
}
if($.fn.avia_delayed_animation_in_container){
$('.av-animation-delay-container').avia_delayed_animation_in_container();
}});
$.avia_utilities=$.avia_utilities||{};
$.avia_utilities.activate_shortcode_scripts=function(container){
if(typeof container=='undefined'){ container='body';}
if($.fn.avia_ajax_form){
$('.avia_ajax_form:not(.avia-disable-default-ajax)', container).avia_ajax_form();
}
activate_waypoints(container);
if($.fn.aviaVideoApi){
$('.avia-slideshow iframe[src*="youtube.com"], .av_youtube_frame, .av_vimeo_frame, .avia-slideshow video').aviaVideoApi({}, 'li');
}
if($.fn.avia_sc_toggle){
$('.togglecontainer', container).avia_sc_toggle();
}
if($.fn.avia_sc_tabs){
$('.top_tab', container).avia_sc_tabs();
$('.sidebar_tab', container).avia_sc_tabs({sidebar:true});
}
if($.fn.avia_sc_gallery){
$('.avia-gallery', container).avia_sc_gallery();
}
if($.fn.avia_sc_animated_number){
$('.avia-animated-number', container).avia_sc_animated_number();
}
if($.fn.avia_sc_animation_delayed){
$('.av_font_icon', container).avia_sc_animation_delayed({delay:100});
$('.avia-image-container', container).avia_sc_animation_delayed({delay:100});
$('.av-hotspot-image-container', container).avia_sc_animation_delayed({delay:100});
$('.av-animated-generic', container).avia_sc_animation_delayed({delay:100});
}
if($.fn.avia_sc_iconlist){
$('.avia-icon-list.av-iconlist-big', container).avia_sc_iconlist();
}
if($.fn.avia_sc_progressbar){
$('.avia-progress-bar-container', container).avia_sc_progressbar();
}
if($.fn.avia_sc_testimonial){
$('.avia-testimonial-wrapper', container).avia_sc_testimonial();
}
if($.fn.aviaFullscreenSlider){
$('.avia-slideshow.av_fullscreen', container).aviaFullscreenSlider();
}
if($.fn.aviaSlider){
$('.avia-slideshow:not(.av_fullscreen)', container).aviaSlider();
$('.avia-content-slider-active', container).aviaSlider({wrapElement: '.avia-content-slider-inner', slideElement:'.slide-entry-wrap', fullfade:true});
$('.avia-slider-testimonials', container).aviaSlider({wrapElement: '.avia-testimonial-row', slideElement:'.avia-testimonial', fullfade:true});
}
if($.fn.aviaMagazine){
$('.av-magazine-tabs-active', container).aviaMagazine();
}
if($.fn.aviaHotspots){
$('.av-hotspot-image-container', container).aviaHotspots();
}
if($.fn.aviaCountdown){
$('.av-countdown-timer', container).aviaCountdown();
}
if($.fn.aviaPlayer){
$('.av-player', container).aviaPlayer();
}}
function activate_waypoints(container){
if($.fn.avia_waypoints){
if(typeof container=='undefined'){ container='body';};
$('.avia_animate_when_visible', container).avia_waypoints();
$('.avia_animate_when_almost_visible', container).avia_waypoints({ offset: '80%'});
if(container=='body') container='.avia_desktop body';
$('.av-animated-generic', container).avia_waypoints({ offset: '95%'});
}}
$.AviaParallaxElement=function(options, element){
this.$el=$(element).addClass('active-parallax');
this.$win=$(window);
this.$body=$('body');
this.$parent=this.$el.parent();
this.property={};
this.isMobile=$.avia_utilities.isMobile;
this.ratio=this.$el.data('avia-parallax-ratio')||0.5;
this.transform=document.documentElement.className.indexOf('avia_transform')!==-1 ? true:false;
this.transform3d=document.documentElement.className.indexOf('avia_transform3d')!==-1 ? true:false;
this.ticking=false;
if($.avia_utilities.supported.transition===undefined){
$.avia_utilities.supported.transition=$.avia_utilities.supports('transition');
}
this._init(options);
}
$.AviaParallaxElement.prototype={
_init: function(options){
var _self=this;
if(_self.isMobile){
return;
}
setTimeout(function(){
_self._fetch_properties();
},30);
this.$win.on("debouncedresize av-height-change",  $.proxy(_self._fetch_properties, _self));
this.$body.on("av_resize_finished",  $.proxy(_self._fetch_properties, _self));
setTimeout(function(){
_self.$win.on('scroll', $.proxy(_self._on_scroll, _self));
},100);
},
_fetch_properties: function(){
this.property.offset=this.$parent.offset().top;
this.property.wh=this.$win.height();
this.property.height=this.$parent.outerHeight();
this.$el.height(Math.ceil((this.property.wh * this.ratio) + this.property.height));
this._parallax_scroll();
},
_on_scroll: function(e){
var _self=this;
if(!_self.ticking){
_self.ticking=true;
window.requestAnimationFrame($.proxy(_self._parallax_scroll, _self));
}},
_parallax_scroll: function(e){
var winTop=this.$win.scrollTop(),
winBottom=winTop + this.property.wh,
scrollPos="0",
prop={};
if(this.property.offset < winBottom&&winTop <=this.property.offset + this.property.height){
scrollPos=Math.ceil((winBottom - this.property.offset) * this.ratio);
if(this.transform3d){
prop[$.avia_utilities.supported.transition+"transform"]="translate3d(0px,"+ scrollPos +"px, 0px)";
}
else if(this.transform){
prop[$.avia_utilities.supported.transition+"transform"]="translate(0px,"+ scrollPos +"px)";
}else{
prop["background-position"]="0px "+ scrollPos +"px";
}
this.$el.css(prop);
}
this.ticking=false;
}};
$.fn.avia_parallax=function(options){
return this.each(function(){
var self=$.data(this, 'aviaParallax');
if(!self){
self=$.data(this, 'aviaParallax', new $.AviaParallaxElement(options, this));
}});
}
$.fn.avia_mobile_fixed=function(options){
var isMobile=$.avia_utilities.isMobile;
if(!isMobile) return;
return this.each(function(){
var current=$(this).addClass('av-parallax-section'),
$background=current.attr('style'),
$attachment_class=current.data('section-bg-repeat'),
template="";
if($attachment_class=='stretch'||$attachment_class=='no-repeat'){
$attachment_class=" avia-full-stretch";
}else{
$attachment_class="";
}
template="<div class='av-parallax " + $attachment_class + "' data-avia-parallax-ratio='0.0' style='" + $background + "' ></div>";
current.prepend(template);
current.attr('style','');
});
}
$.fn.avia_sc_animation_delayed=function(options){
var global_timer=0,
delay=options.delay||50,
max_timer=10,
new_max=setTimeout(function(){ max_timer=20; }, 500);
return this.each(function(){
var elements=$(this);
elements.on('avia_start_animation', function(){
var element=$(this);
if(global_timer < max_timer) global_timer ++;
setTimeout(function(){
element.addClass('avia_start_delayed_animation');
if(global_timer > 0) global_timer --;
}, (global_timer * delay));
});
});
}
$.fn.avia_delayed_animation_in_container=function(options){
return this.each(function(){
var elements=$(this);
elements.on('avia_start_animation_if_current_slide_is_active', function(){
var current=$(this),
animate=current.find('.avia_start_animation_when_active');
animate.addClass('avia_start_animation').trigger('avia_start_animation');
});
elements.on('avia_remove_animation', function(){
var current=$(this),
animate=current.find('.avia_start_animation_when_active, .avia_start_animation');
animate.removeClass('avia_start_animation avia_start_delayed_animation');
});
});
}
$.fn.avia_browser_height=function(){
if(!this.length) return;
var win=$(window),
html_el=$('html'),
subtract=$('#wpadminbar, #header.av_header_top:not(.html_header_transparency #header), #main>.title_container'),
css_block=$("<style type='text/css' id='av-browser-height'></style>").appendTo('head:first'),
sidebar_menu=$('.html_header_sidebar #top #header_main'),
full_slider=$('.html_header_sidebar .avia-fullscreen-slider.avia-builder-el-0.avia-builder-el-no-sibling').addClass('av-solo-full'),
calc_height=function(){
var css="",
wh100=win.height(),
ww100=win.width(),
wh100_mod=wh100,
whCover=(wh100 / 9) * 16,
wwCover=(ww100 / 16) * 9,
wh75=Math.round(wh100 * 0.75),
wh50=Math.round(wh100 * 0.5),
wh25=Math.round(wh100 * 0.25),
solo=0;
if(sidebar_menu.length) solo=sidebar_menu.height();
subtract.each(function(){ wh100_mod -=this.offsetHeight - 1; });
var whCoverMod=(wh100_mod / 9) * 16;
css +=".avia-section.av-minimum-height .container{opacity: 1; }\n";
css +=".av-minimum-height-100 .container, .avia-fullscreen-slider .avia-slideshow, #top.avia-blank .av-minimum-height-100 .container, .av-cell-min-height-100 > .flex_cell{height:"+wh100+"px;}\n";
css +=".av-minimum-height-75 .container, .av-cell-min-height-75 > .flex_cell	{height:"+wh75+"px;}\n";
css +=".av-minimum-height-50 .container, .av-cell-min-height-50 > .flex_cell	{height:"+wh50+"px;}\n";
css +=".av-minimum-height-25 .container, .av-cell-min-height-25 > .flex_cell	{height:"+wh25+"px;}\n";
css +=".avia-builder-el-0.av-minimum-height-100 .container, .avia-builder-el-0.avia-fullscreen-slider .avia-slideshow, .avia-builder-el-0.av-cell-min-height-100 > .flex_cell{height:"+wh100_mod+"px;}\n";
css +="#top .av-solo-full .avia-slideshow {min-height:"+solo+"px;}\n";
if(ww100/wh100 < 16/9){
css +="#top .av-element-cover iframe, #top .av-element-cover embed, #top .av-element-cover object, #top .av-element-cover video{width:"+whCover+"px; left: -"+(whCover - ww100)/2+"px;}\n";
}else{
css +="#top .av-element-cover iframe, #top .av-element-cover embed, #top .av-element-cover object, #top .av-element-cover video{height:"+wwCover+"px; top: -"+(wwCover - wh100)/2+"px;}\n";
}
if(ww100/wh100_mod < 16/9){
css +="#top .avia-builder-el-0 .av-element-cover iframe, #top .avia-builder-el-0 .av-element-cover embed, #top .avia-builder-el-0 .av-element-cover object, #top .avia-builder-el-0 .av-element-cover video{width:"+whCoverMod+"px; left: -"+(whCoverMod - ww100)/2+"px;}\n";
}else{
css +="#top .avia-builder-el-0 .av-element-cover iframe, #top .avia-builder-el-0 .av-element-cover embed, #top .avia-builder-el-0 .av-element-cover object, #top .avia-builder-el-0 .av-element-cover video{height:"+wwCover+"px; top: -"+(wwCover - wh100_mod)/2+"px;}\n";
}
try{
css_block.text(css);
}
catch(err){
css_block.remove();
css_block=$("<style type='text/css' id='av-browser-height'>"+css+"</style>").appendTo('head:first');
}
setTimeout(function(){ win.trigger('av-height-change');  },100);
};
win.on('debouncedresize', calc_height);
calc_height();
}
$.fn.avia_video_section=function(){
if(!this.length) return;
var elements=this.length, content="",
win=$(window),
css_block=$("<style type='text/css' id='av-section-height'></style>").appendTo('head:first'),
calc_height=function(section, counter){
if(counter===0){ content="";}
var css="",
the_id='#' +section.attr('id'),
wh100=section.height(),
ww100=section.width(),
aspect=section.data('sectionVideoRatio').split(':'),
video_w=aspect[0],
video_h=aspect[1],
whCover=(wh100 / video_h) * video_w,
wwCover=(ww100 / video_w) * video_h;
if(ww100/wh100 < video_w/video_h){
css +="#top "+the_id+" .av-section-video-bg iframe, #top "+the_id+" .av-section-video-bg embed, #top "+the_id+" .av-section-video-bg object, #top "+the_id+" .av-section-video-bg video{width:"+whCover+"px; left: -"+(whCover - ww100)/2+"px;}\n";
}else{
css +="#top "+the_id+" .av-section-video-bg iframe, #top "+the_id+" .av-section-video-bg embed, #top "+the_id+" .av-section-video-bg object, #top "+the_id+" .av-section-video-bg video{height:"+wwCover+"px; top: -"+(wwCover - wh100)/2+"px;}\n";
}
content=content + css;
if(elements==counter + 1){
try{
css_block.text(content);
}
catch(err){
css_block.remove();
css_block=$("<style type='text/css' id='av-section-height'>"+content+"</style>").appendTo('head:first');
}}
};
return this.each(function(i){
var self=$(this);
win.on('debouncedresize', function(){ calc_height(self, i); });
calc_height(self, i);
});
}
$.fn.avia_link_column=function(){
return this.each(function(){
$(this).on('click', function(e){
if('undefined'!==typeof e.target&&'undefined'!==typeof e.target.href){
return;
}
var	column=$(this),
url=column.data('link-column-url'),
target=column.data('link-column-target');
if('undefined'===typeof url||'string'!==typeof url){
return;
}
if('undefined'!==typeof target||'_blank'==target){
window.open(url, '_blank');
}else{
window.location.href=url;
}
e.preventDefault();
return;
});
});
};
$.fn.avia_waypoints=function(options_passed){
if(! $('html').is('.avia_transform')) return;
var defaults={ offset: 'bottom-in-view' , triggerOnce: true},
options=$.extend({}, defaults, options_passed),
isMobile=$.avia_utilities.isMobile;
return this.each(function(){
var element=$(this);
setTimeout(function(){
if(isMobile){
element.addClass('avia_start_animation').trigger('avia_start_animation');
}else{
element.waypoint(function(direction){
var current=$(this.element),
parent=current.parents('.av-animation-delay-container:eq(0)');
if(parent.length){
current.addClass('avia_start_animation_when_active').trigger('avia_start_animation_when_active');
}
if(!parent.length||(parent.length&&parent.is('.__av_init_open'))){
current.addClass('avia_start_animation').trigger('avia_start_animation');
}}, options);
}},100)
});
};
var $event=$.event, $special, resizeTimeout;
$special=$event.special.debouncedresize={
setup: function(){
$(this).on("resize", $special.handler);
},
teardown: function(){
$(this).off("resize", $special.handler);
},
handler: function(event, execAsap){
var context=this,
args=arguments,
dispatch=function(){
event.type="debouncedresize";
$event.dispatch.apply(context, args);
};
if(resizeTimeout){
clearTimeout(resizeTimeout);
}
execAsap ?
dispatch() :
resizeTimeout=setTimeout(dispatch, $special.threshold);
},
threshold: 150
};
$.easing['jswing']=$.easing['swing'];
$.extend($.easing,
{
def: 'easeOutQuad',
swing: function (x, t, b, c, d){ return $.easing[$.easing.def](x, t, b, c, d); },
easeInQuad: function (x, t, b, c, d){ return c*(t/=d)*t + b; },
easeOutQuad: function (x, t, b, c, d){ return -c *(t/=d)*(t-2) + b; },
easeInOutQuad: function (x, t, b, c, d){ if((t/=d/2) < 1) return c/2*t*t + b; return -c/2 * ((--t)*(t-2) - 1) + b; },
easeInCubic: function (x, t, b, c, d){ return c*(t/=d)*t*t + b; },
easeOutCubic: function (x, t, b, c, d){ return c*((t=t/d-1)*t*t + 1) + b; },
easeInOutCubic: function (x, t, b, c, d){ if((t/=d/2) < 1) return c/2*t*t*t + b; return c/2*((t-=2)*t*t + 2) + b;	},
easeInQuart: function (x, t, b, c, d){ return c*(t/=d)*t*t*t + b;	},
easeOutQuart: function (x, t, b, c, d){ return -c * ((t=t/d-1)*t*t*t - 1) + b; },
easeInOutQuart: function (x, t, b, c, d){ if((t/=d/2) < 1) return c/2*t*t*t*t + b; return -c/2 * ((t-=2)*t*t*t - 2) + b;	},
easeInQuint: function (x, t, b, c, d){ return c*(t/=d)*t*t*t*t + b;	},
easeOutQuint: function (x, t, b, c, d){ return c*((t=t/d-1)*t*t*t*t + 1) + b;	},
easeInOutQuint: function (x, t, b, c, d){ if((t/=d/2) < 1) return c/2*t*t*t*t*t + b; return c/2*((t-=2)*t*t*t*t + 2) + b;	},
easeInSine: function (x, t, b, c, d){	return -c * Math.cos(t/d * (Math.PI/2)) + c + b;	},
easeOutSine: function (x, t, b, c, d){ return c * Math.sin(t/d * (Math.PI/2)) + b;	},
easeInOutSine: function (x, t, b, c, d){ return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;	},
easeInExpo: function (x, t, b, c, d){ return (t==0) ? b:c * Math.pow(2, 10 * (t/d - 1)) + b;	},
easeOutExpo: function (x, t, b, c, d){ return (t==d) ? b+c:c * (-Math.pow(2, -10 * t/d) + 1) + b;	},
easeInOutExpo: function (x, t, b, c, d){
if(t==0) return b;
if(t==d) return b+c;
if((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
},
easeInCirc: function (x, t, b, c, d){ return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;	},
easeOutCirc: function (x, t, b, c, d){return c * Math.sqrt(1 - (t=t/d-1)*t) + b;	},
easeInOutCirc: function (x, t, b, c, d){ if((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;	return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;	},
easeInElastic: function (x, t, b, c, d){
var s=1.70158;var p=0;var a=c;
if(t==0) return b;  if((t/=d)==1) return b+c;  if(!p) p=d*.3;
if(a < Math.abs(c)){ a=c; var s=p/4; }
else var s=p/(2*Math.PI) * Math.asin (c/a);
return -(a*Math.pow(2,10*(t-=1)) * Math.sin((t*d-s)*(2*Math.PI)/p)) + b;
},
easeOutElastic: function (x, t, b, c, d){
var s=1.70158;var p=0;var a=c;
if(t==0) return b;  if((t/=d)==1) return b+c;  if(!p) p=d*.3;
if(a < Math.abs(c)){ a=c; var s=p/4; }
else var s=p/(2*Math.PI) * Math.asin (c/a);
return a*Math.pow(2,-10*t) * Math.sin((t*d-s)*(2*Math.PI)/p) + c + b;
},
easeInOutElastic: function (x, t, b, c, d){
var s=1.70158;var p=0;var a=c;
if(t==0) return b;  if((t/=d/2)==2) return b+c;  if(!p) p=d*(.3*1.5);
if(a < Math.abs(c)){ a=c; var s=p/4; }
else var s=p/(2*Math.PI) * Math.asin (c/a);
if(t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin((t*d-s)*(2*Math.PI)/p)) + b;
return a*Math.pow(2,-10*(t-=1)) * Math.sin((t*d-s)*(2*Math.PI)/p)*.5 + c + b;
},
easeInBack: function (x, t, b, c, d, s){
if(s==undefined) s=1.70158;
return c*(t/=d)*t*((s+1)*t - s) + b;
},
easeOutBack: function (x, t, b, c, d, s){
if(s==undefined) s=1.70158;
return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
},
easeInOutBack: function (x, t, b, c, d, s){
if(s==undefined) s=1.70158;
if((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
},
easeInBounce: function (x, t, b, c, d){
return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
},
easeOutBounce: function (x, t, b, c, d){
if((t/=d) < (1/2.75)){
return c*(7.5625*t*t) + b;
}else if(t < (2/2.75)){
return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
}else if(t < (2.5/2.75)){
return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
}else{
return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
}},
easeInOutBounce: function (x, t, b, c, d){
if(t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
}});
})(jQuery);
(function($){
"use strict";
$.avia_utilities=$.avia_utilities||{};
$.avia_utilities.loading=function(attach_to, delay){
var loader={
active: false,
show: function(){
if(loader.active===false){
loader.active=true;
loader.loading_item.css({display:'block', opacity:0});
}
loader.loading_item.stop().animate({opacity:1});
},
hide: function(){
if(typeof delay==='undefined'){ delay=600; }
loader.loading_item.stop().delay(delay).animate({opacity:0}, function(){
loader.loading_item.css({display:'none'});
loader.active=false;
});
},
attach: function(){
if(typeof attach_to==='undefined'){ attach_to='body';}
loader.loading_item=$('<div class="avia_loading_icon"><div class="av-siteloader"></div></div>').css({display:"none"}).appendTo(attach_to);
}}
loader.attach();
return loader;
};
$.avia_utilities.playpause=function(attach_to, delay){
var pp={
active: false,
to1: "",
to2: "",
set: function(status){
pp.loading_item.removeClass('av-play av-pause');
pp.to1=setTimeout(function(){ pp.loading_item.addClass('av-' + status); },10);
pp.to2=setTimeout(function(){ pp.loading_item.removeClass('av-' + status); },1500);
},
attach: function(){
if(typeof attach_to==='undefined'){ attach_to='body';}
pp.loading_item=$('<div class="avia_playpause_icon"></div>').css({display:"none"}).appendTo(attach_to);
}}
pp.attach();
return pp;
};
$.avia_utilities.preload=function(options_passed){
new $.AviaPreloader(options_passed);
}
$.AviaPreloader=function(options){
this.win=$(window);
this.defaults	=
{
container:			'body',
maxLoops:			10,
trigger_single:		true,
single_callback:	function(){},
global_callback:	function(){}};
this.options=$.extend({}, this.defaults, options);
this.preload_images=0;
this.load_images();
}
$.AviaPreloader.prototype  =
{
load_images: function(){
var _self=this;
if(typeof _self.options.container==='string'){ _self.options.container=$(_self.options.container); }
_self.options.container.each(function(){
var container=$(this);
container.images=container.find('img');
container.allImages=container.images;
_self.preload_images +=container.images.length;
setTimeout(function(){ _self.checkImage(container); }, 10);
});
},
checkImage: function(container){
var _self=this;
container.images.each(function(){
if(this.complete===true){
container.images=container.images.not(this);
_self.preload_images -=1;
}});
if(container.images.length&&_self.options.maxLoops >=0){
_self.options.maxLoops-=1;
setTimeout(function(){ _self.checkImage(container); }, 500);
}else{
_self.preload_images=_self.preload_images - container.images.length;
_self.trigger_loaded(container);
}},
trigger_loaded: function(container){
var _self=this;
if(_self.options.trigger_single!==false){
_self.win.trigger('avia_images_loaded_single', [container]);
_self.options.single_callback.call(container);
}
if(_self.preload_images===0){
_self.win.trigger('avia_images_loaded');
_self.options.global_callback.call();
}}
}
$.avia_utilities.css_easings={
linear:			'linear',
swing:			'ease-in-out',
bounce:			'cubic-bezier(0.0, 0.35, .5, 1.3)',
easeInQuad:     'cubic-bezier(0.550, 0.085, 0.680, 0.530)' ,
easeInCubic:    'cubic-bezier(0.550, 0.055, 0.675, 0.190)' ,
easeInQuart:    'cubic-bezier(0.895, 0.030, 0.685, 0.220)' ,
easeInQuint:    'cubic-bezier(0.755, 0.050, 0.855, 0.060)' ,
easeInSine:     'cubic-bezier(0.470, 0.000, 0.745, 0.715)' ,
easeInExpo:     'cubic-bezier(0.950, 0.050, 0.795, 0.035)' ,
easeInCirc:     'cubic-bezier(0.600, 0.040, 0.980, 0.335)' ,
easeInBack:     'cubic-bezier(0.600, -0.280, 0.735, 0.04)' ,
easeOutQuad:    'cubic-bezier(0.250, 0.460, 0.450, 0.940)' ,
easeOutCubic:   'cubic-bezier(0.215, 0.610, 0.355, 1.000)' ,
easeOutQuart:   'cubic-bezier(0.165, 0.840, 0.440, 1.000)' ,
easeOutQuint:   'cubic-bezier(0.230, 1.000, 0.320, 1.000)' ,
easeOutSine:    'cubic-bezier(0.390, 0.575, 0.565, 1.000)' ,
easeOutExpo:    'cubic-bezier(0.190, 1.000, 0.220, 1.000)' ,
easeOutCirc:    'cubic-bezier(0.075, 0.820, 0.165, 1.000)' ,
easeOutBack:    'cubic-bezier(0.175, 0.885, 0.320, 1.275)' ,
easeInOutQuad:  'cubic-bezier(0.455, 0.030, 0.515, 0.955)' ,
easeInOutCubic: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)' ,
easeInOutQuart: 'cubic-bezier(0.770, 0.000, 0.175, 1.000)' ,
easeInOutQuint: 'cubic-bezier(0.860, 0.000, 0.070, 1.000)' ,
easeInOutSine:  'cubic-bezier(0.445, 0.050, 0.550, 0.950)' ,
easeInOutExpo:  'cubic-bezier(1.000, 0.000, 0.000, 1.000)' ,
easeInOutCirc:  'cubic-bezier(0.785, 0.135, 0.150, 0.860)' ,
easeInOutBack:  'cubic-bezier(0.680, -0.550, 0.265, 1.55)' ,
easeInOutBounce:'cubic-bezier(0.580, -0.365, 0.490, 1.365)',
easeOutBounce:	'cubic-bezier(0.760, 0.085, 0.490, 1.365)'
};
$.avia_utilities.supported={};
$.avia_utilities.supports=(function(){
var div=document.createElement('div'),
vendors=['Khtml', 'Ms','Moz','Webkit'];
return function(prop, vendor_overwrite){
if(div.style[prop]!==undefined){ return ""; }
if(vendor_overwrite!==undefined){ vendors=vendor_overwrite; }
prop=prop.replace(/^[a-z]/, function(val){
return val.toUpperCase();
});
var len=vendors.length;
while(len--){
if(div.style[vendors[len] + prop]!==undefined){
return "-" + vendors[len].toLowerCase() + "-";
}}
return false;
};}());
$.fn.avia_animate=function(prop, speed, easing, callback){
if(typeof speed==='function'){callback=speed; speed=false; }
if(typeof easing==='function'){callback=easing; easing=false;}
if(typeof speed==='string'){easing=speed; speed=false;}
if(callback===undefined||callback===false){ callback=function(){};}
if(easing===undefined||easing===false){ easing='easeInQuad'; }
if(speed===undefined||speed===false){ speed=400; }
if($.avia_utilities.supported.transition===undefined){
$.avia_utilities.supported.transition=$.avia_utilities.supports('transition');
}
if($.avia_utilities.supported.transition!==false){
var prefix=$.avia_utilities.supported.transition + 'transition',
cssRule={},
cssProp={},
thisStyle=document.body.style,
end=(thisStyle.WebkitTransition!==undefined) ? 'webkitTransitionEnd':(thisStyle.OTransition!==undefined) ? 'oTransitionEnd':'transitionend';
easing=$.avia_utilities.css_easings[easing];
cssRule[prefix]='all '+(speed/1000)+'s '+easing;
end=end + ".avia_animate";
for (var rule in prop){
if(prop.hasOwnProperty(rule)){ cssProp[rule]=prop[rule]; }}
prop=cssProp;
this.each(function(){
var element=$(this), css_difference=false, rule, current_css;
for (rule in prop){
if(prop.hasOwnProperty(rule)){
current_css=element.css(rule);
if(prop[rule]!=current_css&&prop[rule]!=current_css.replace(/px|%/g,"")){
css_difference=true;
break;
}}
}
if(css_difference){
if(!($.avia_utilities.supported.transition+"transform" in prop)){
prop[$.avia_utilities.supported.transition+"transform"]="translateZ(0)";
}
var endTriggered=false;
element.on(end,  function(event){
if(event.target!=event.currentTarget) return false;
if(endTriggered==true) return false;
endTriggered=true;
cssRule[prefix]="none";
element.off(end);
element.css(cssRule);
setTimeout(function(){ callback.call(element); });
});
setTimeout(function(){
if(!endTriggered&&!avia_is_mobile&&$('html').is('.avia-safari')){
element.trigger(end);
$.avia_utilities.log('Safari Fallback '+end+' trigger');
}}, speed + 100);
setTimeout(function(){ element.css(cssRule);},10);
setTimeout(function(){ element.css(prop);	},20);
}else{
setTimeout(function(){ callback.call(element); });
}});
}else{
this.animate(prop, speed, easing, callback);
}
return this;
};})(jQuery);
(function($){
"use strict";
$.fn.avia_keyboard_controls=function(options_passed){
var defaults	=
{
37: '.prev-slide',
39: '.next-slide'
},
methods={
mousebind: function(slider){
slider.hover(function(){  slider.mouseover=true;  },
function(){  slider.mouseover=false; }
);
},
keybind: function(slider){
$(document).keydown(function(e){
if(slider.mouseover&&typeof slider.options[e.keyCode]!=='undefined'){
var item;
if(typeof slider.options[e.keyCode]==='string'){
item=slider.find(slider.options[e.keyCode]);
}else{
item=slider.options[e.keyCode];
}
if(item.length){
item.trigger('click', ['keypress']);
return false;
}}
});
}};
return this.each(function(){
var slider=$(this);
slider.options=$.extend({}, defaults, options_passed);
slider.mouseover=false;
methods.mousebind(slider);
methods.keybind(slider);
});
};
$.fn.avia_swipe_trigger=function(passed_options){
var win=$(window),
isMobile=$.avia_utilities.isMobile,
defaults	=
{
prev: '.prev-slide',
next: '.next-slide',
event: {
prev: 'click',
next: 'click'
}},
methods={
activate_touch_control: function(slider){
var i, differenceX, differenceY;
slider.touchPos={};
slider.hasMoved=false;
slider.on('touchstart', function(event){
slider.touchPos.X=event.originalEvent.touches[0].clientX;
slider.touchPos.Y=event.originalEvent.touches[0].clientY;
});
slider.on('touchend', function(event){
slider.touchPos={};
if(slider.hasMoved){ event.preventDefault(); }
slider.hasMoved=false;
});
slider.on('touchmove', function(event){
if(!slider.touchPos.X){
slider.touchPos.X=event.originalEvent.touches[0].clientX;
slider.touchPos.Y=event.originalEvent.touches[0].clientY;
}else{
differenceX=event.originalEvent.touches[0].clientX - slider.touchPos.X;
differenceY=event.originalEvent.touches[0].clientY - slider.touchPos.Y;
if(Math.abs(differenceX) > Math.abs(differenceY)){
event.preventDefault();
if(slider.touchPos!==event.originalEvent.touches[0].clientX){
if(Math.abs(differenceX) > 50){
i=differenceX > 0 ? 'prev':'next';
if(typeof slider.options[i]==='string'){
slider.find(slider.options[i]).trigger(slider.options.event[i], ['swipe']);
}else{
slider.options[i].trigger(slider.options.event[i], ['swipe']);
}
slider.hasMoved=true;
slider.touchPos={};
return false;
}}
}}
});
}};
return this.each(function(){
if(isMobile){
var slider=$(this);
slider.options=$.extend({}, defaults, passed_options);
methods.activate_touch_control(slider);
}});
};}(jQuery));
(function($){
"use strict";
var autostarted=false,
container=null,
monitorStart=function(container){
var play_pause=container.find('.av-player-player-container .mejs-playpause-button');
if(play_pause.length==0){
setTimeout(function(){
monitorStart(container);
}, 200);
}
if(! play_pause.hasClass('mejs-pause')){
play_pause.trigger('click');
}};
$.fn.aviaPlayer=function(options){
if(! this.length) return;
return this.each(function(){
var _self={};
_self.container=$(this);
_self.stopLoop=false;
_self.container.find('audio').on('play', function(){
if(_self.stopLoop){
this.pause();
_self.stopLoop=false;
}});
if(_self.container.hasClass('avia-playlist-no-loop')){
_self.container.find('audio').on('ended', function(){
var lastTrack=_self.container.find('.wp-playlist-tracks .wp-playlist-item:last a');
if(this.currentSrc===lastTrack.attr('href')){
_self.stopLoop=true;
}});
}
if(_self.container.hasClass('avia-playlist-autoplay')&&! autostarted){
if(( _self.container.css('display')=='none')||(_self.container.css("visibility")=="hidden")){
return;
}
autostarted=true;
setTimeout(function(){
monitorStart(_self.container, _self);
}, 200);
}});
};}(jQuery));
(function($){
$.fn.avia_ajax_form=function(variables){
var defaults =
{
sendPath: 'send.php',
responseContainer: '.ajaxresponse'
};
var options=$.extend(defaults, variables);
return this.each(function(){
var form=$(this),
form_sent=false,
send =
{
formElements: form.find('textarea, select, input[type=text], input[type=checkbox], input[type=hidden]'),
validationError:false,
button:form.find('input:submit'),
dataObj:{}},
responseContainer=form.next(options.responseContainer+":eq(0)");
send.button.on('click', checkElements);
if($.avia_utilities.isMobile){
send.formElements.each(function(i){
var currentElement=$(this), is_email=currentElement.hasClass('is_email');
if(is_email) currentElement.attr('type','email');
});
}
function checkElements(e){
send.validationError=false;
send.datastring='ajax=true';
send.formElements.each(function(i){
var currentElement=$(this),
surroundingElement=currentElement.parent(),
value=currentElement.val(),
name=currentElement.attr('name'),
classes=currentElement.attr('class'),
nomatch=true;
if(currentElement.is(':checkbox')){
if(currentElement.is(':checked')){ value=true }else{value=''}}
send.dataObj[name]=encodeURIComponent(value);
if(classes&&classes.match(/is_empty/)){
if(value==''||value==null){
surroundingElement.removeClass("valid error ajax_alert").addClass("error");
send.validationError=true;
}else{
surroundingElement.removeClass("valid error ajax_alert").addClass("valid");
}
nomatch=false;
}
if(classes&&classes.match(/is_email/)){
if(!value.match(/^[\w|\.|\-]+@\w[\w|\.|\-]*\.[a-zA-Z]{2,20}$/)){
surroundingElement.removeClass("valid error ajax_alert").addClass("error");
send.validationError=true;
}else{
surroundingElement.removeClass("valid error ajax_alert").addClass("valid");
}
nomatch=false;
}
if(classes&&classes.match(/is_ext_email/)){
if(! value.match(/^[\w|\.|\-|ÄÖÜäöü]+@\w[\w|\.|\-|ÄÖÜäöü]*\.[a-zA-Z]{2,20}$/)){
surroundingElement.removeClass("valid error ajax_alert").addClass("error");
send.validationError=true;
}else{
surroundingElement.removeClass("valid error ajax_alert").addClass("valid");
}
nomatch=false;
}
if(classes&&classes.match(/is_phone/)){
if(!value.match(/^(\d|\s|\-|\/|\(|\)|\[|\]|e|x|t|ension|\.|\+|\_|\,|\:|\;){3,}$/)){
surroundingElement.removeClass("valid error ajax_alert").addClass("error");
send.validationError=true;
}else{
surroundingElement.removeClass("valid error ajax_alert").addClass("valid");
}
nomatch=false;
}
if(classes&&classes.match(/is_number/)){
if(!($.isNumeric(value))||value==""){
surroundingElement.removeClass("valid error ajax_alert").addClass("error");
send.validationError=true;
}else{
surroundingElement.removeClass("valid error ajax_alert").addClass("valid");
}
nomatch=false;
}
if(classes&&classes.match(/captcha/)){
var verifier=form.find("#" + name + "_verifier").val(),
lastVer=verifier.charAt(verifier.length-1),
finalVer=verifier.charAt(lastVer);
if(value!=finalVer){
surroundingElement.removeClass("valid error ajax_alert").addClass("error");
send.validationError=true;
}else{
surroundingElement.removeClass("valid error ajax_alert").addClass("valid");
}
nomatch=false;
}
if(nomatch&&value!=''){
surroundingElement.removeClass("valid error ajax_alert").addClass("valid");
}});
if(send.validationError==false){
if(form.data('av-custom-send')){
mailchimp_send();
}else{
send_ajax_form();
}}
return false;
}
function send_ajax_form(){
if(form_sent){ return false; }
form_sent=true;
send.button.addClass('av-sending-button');
send.button.val(send.button.data('sending-label'));
var redirect_to=form.data('avia-redirect')||false,
action=form.attr('action');
responseContainer.load(action+' '+options.responseContainer, send.dataObj, function(){
if(redirect_to&&action!=redirect_to){
form.attr('action', redirect_to);
location.href=redirect_to;
}else{
responseContainer.removeClass('hidden').css({display:"block"});
form.slideUp(400, function(){responseContainer.slideDown(400, function(){ $('body').trigger('av_resize_finished'); });send.formElements.val('');});
}});
}
function mailchimp_send(){
if(form_sent){ return false; }
form_sent=true;
var original_label=send.button.val();
send.button.addClass('av-sending-button');
send.button.val(send.button.data('sending-label'));
send.dataObj.ajax_mailchimp=true;
var redirect_to=form.data('avia-redirect')||false,
action=form.attr('action'),
error_msg_container=form.find('.av-form-error-container'),
form_id=form.data('avia-form-id');
$.ajax({
url: action,
type: "POST",
data:send.dataObj,
beforeSend: function(){
if(error_msg_container.length){
error_msg_container.slideUp(400, function(){
error_msg_container.remove();
$('body').trigger('av_resize_finished');
});
}},
success: function(responseText){
var response=jQuery("<div>").append(jQuery.parseHTML(responseText)),
error=response.find('.av-form-error-container');
if(error.length){
form_sent=false;
form.prepend(error);
error.css({display:"none"}).slideDown(400, function(){
$('body').trigger('av_resize_finished');
});
send.button.removeClass('av-sending-button');
send.button.val(original_label);
}else{
if(redirect_to&&action!=redirect_to){
form.attr('action', redirect_to);
location.href=redirect_to;
}else{
var success_text=response.find(options.responseContainer + "_" + form_id);
responseContainer.html(success_text).removeClass('hidden').css({display:"block"});
form.slideUp(400, function(){
responseContainer.slideDown(400, function(){
$('body').trigger('av_resize_finished');
});
send.formElements.val('');
});
}}
},
error: function(){
},
complete: function(){
}});
}});
};})(jQuery);
(function($){
"use strict";
$.AviaSlider=function(options, slider){
var self=this;
this.$win=$(window);
this.$slider=$(slider);
this.isMobile=$.avia_utilities.isMobile;
this._prepareSlides(options);
$.avia_utilities.preload({container: this.$slider , single_callback:  function(){ self._init(options); }});
}
$.AviaSlider.defaults={
interval:5,
autoplay:false,
stopinfiniteloop: false,
animation:'slide',
transitionSpeed:900,
easing:'easeInOutQuart',
wrapElement: '>ul',
slideElement: '>li',
hoverpause: false,
bg_slider: false,
show_slide_delay: 0,
fullfade: false,
carousel: 'no',
carouselSlidesToShow: 3,
carouselSlidesToScroll: 1,
carouselResponsive:new Array(),
};
$.AviaSlider.prototype =
{
_init: function(options){
this.options=this._setOptions(options);
this.$sliderUl=this.$slider.find(this.options.wrapElement);
this.$slides=this.$sliderUl.find(this.options.slideElement);
this.gotoButtons=this.$slider.find('.avia-slideshow-dots a');
this.permaCaption=this.$slider.find('>.av-slideshow-caption');
this.itemsCount=this.$slides.length;
this.current=0;
this.currentCarousel=0;
this.slideWidthCarousel='240';
this.loopCount=0;
this.isAnimating=false;
this.browserPrefix=$.avia_utilities.supports('transition');
this.cssActive=this.browserPrefix!==false ? true:false;
this.css3DActive=document.documentElement.className.indexOf('avia_transform3d')!==-1 ? true:false;
if(this.options.bg_slider==true){
this.imageUrls=[];
this.loader=$.avia_utilities.loading(this.$slider);
this._bgPreloadImages();
}else{
this._kickOff();
}
if(this.options.carousel==='yes'){
this.options.animation='carouselslide';
}},
_setOptions: function(options){
var newOptions=$.extend(true, {}, $.AviaSlider.defaults, options),
htmlData=this.$slider.data(),
i="";
for (i in htmlData){
if(htmlData.hasOwnProperty(i)){
if(typeof htmlData[i]==="string"||typeof htmlData[i]==="number"||typeof htmlData[i]==="boolean"){
newOptions[i]=htmlData[i];
}}
}
return newOptions;
},
_prepareSlides: function(options){
if(this.isMobile){
var alter=this.$slider.find('.av-mobile-fallback-image');
alter.each(function(){
var current=$(this).removeClass('av-video-slide').data({'avia_video_events': true, 'video-ratio':0}),
fallback=current.data('mobile-img'),
fallback_link=current.data('fallback-link'),
appendTo=current.find('.avia-slide-wrap');
current.find('.av-click-overlay, .mejs-mediaelement, .mejs-container').remove();
if(!fallback){
$('<p class="av-fallback-message"><span>Please set a mobile device fallback image for this video in your wordpress backend</span></p>').appendTo(appendTo);
}
if(options&&options.bg_slider){
current.data('img-url', fallback);
if(fallback_link!=""){
if(appendTo.is('a')){
appendTo.attr('href', fallback_link);
}else{
appendTo.find('a').remove();
appendTo.replaceWith(function(){
var cur_slide=$(this);
return $("<a>").attr({'data-rel': cur_slide.data('rel'), 'class': cur_slide.attr('class'), 'href': fallback_link}).append($(this).contents());
});
appendTo=current.find('.avia-slide-wrap');
}
if($.fn.avia_activate_lightbox){
current.parents('#main').avia_activate_lightbox();
}}
}else{
var image=$('<img src="'+fallback+'" alt="" title="" />');
var lightbox=false;
if('string'==typeof fallback_link&&fallback_link.trim()!=''){
image=$('<a href="' + fallback_link.trim() + '" rel="lightbox">' + image + '</a>');
lightbox=true;
}
if(lightbox&&$.fn.avia_activate_lightbox){
current.parents('#main').avia_activate_lightbox();
}
current.find('.avia-slide-wrap').append(image);
}});
}},
_bgPreloadImages:function(callback){
this._getImageURLS();
this._preloadSingle(0, function(){
this._kickOff();
this._preloadNext(1);
});
},
_getImageURLS: function(){
var _self=this;
this.$slides.each(function(i){
_self.imageUrls[i]=[];
_self.imageUrls[i]['url']=$(this).data("img-url");
if(typeof _self.imageUrls[i]['url']=='string'){
_self.imageUrls[i]['status']=false;
}else{
_self.imageUrls[i]['status']=true;
}});
},
_preloadSingle: function(key, callback){
var _self=this,
objImage=new Image();
if(typeof _self.imageUrls[key]['url']=='string'){
$(objImage).bind('load error', function(){
_self.imageUrls[key]['status']=true;
_self.$slides.eq(key).css('background-image','url(' + _self.imageUrls[key]['url'] + ')');
if(typeof callback=='function') callback.apply(_self, [objImage, key]);
});
if(_self.imageUrls[key]['url']!=""){
objImage.src=_self.imageUrls[key]['url'];
}else{
$(objImage).trigger('error');
}}else{
if(typeof callback=='function') callback.apply(_self, [objImage, key]);
}},
_preloadNext: function(key){
if(typeof this.imageUrls[key]!="undefined"){
this._preloadSingle(key, function(){
this._preloadNext(key + 1);
});
}},
_bindEvents: function(){
var self=this,
win=$(window);
this.$slider.on('click','.next-slide', $.proxy(this.next, this));
this.$slider.on('click','.prev-slide', $.proxy(this.previous, this));
this.$slider.on('click','.goto-slide', $.proxy(this.go2, this));
if(this.options.hoverpause){
this.$slider.on('mouseenter', $.proxy(this.pause, this));
this.$slider.on('mouseleave', $.proxy(this.resume, this));
}
if(this.options.stopinfiniteloop&&this.options.autoplay){
if(this.options.stopinfiniteloop=='last'){
this.$slider.on('avia_slider_last_slide', $.proxy(this._stopSlideshow, this));
}
else if(this.options.stopinfiniteloop=='first'){
this.$slider.on('avia_slider_first_slide', $.proxy(this._stopSlideshow, this));
}}
if(this.options.carousel==='yes'){
win.on('debouncedresize',  $.proxy(this._buildCarousel, this));
}else{
win.on('debouncedresize.aviaSlider',  $.proxy(this._setSize, this));
}
if(!this.isMobile){
this.$slider.avia_keyboard_controls();
}else{
this.$slider.avia_swipe_trigger();
}
self._attach_video_events();
},
_kickOff: function(){
var self=this,
first_slide=self.$slides.eq(0),
video=first_slide.data('video-ratio');
self._bindEvents();
this.$slider.removeClass('av-default-height-applied');
if(video){
self._setSize(true);
}else{
if(this.options.keep_pading!=true){
self.$sliderUl.css('padding',0);
self.$win.trigger('av-height-change');
}}
self._setCenter();
if(this.options.carousel==='no'){
first_slide.css({visibility:'visible', opacity:0}).avia_animate({opacity:1}, function(){
var current=$(this).addClass('active-slide');
if(self.permaCaption.length){
self.permaCaption.addClass('active-slide');
}});
}
if(self.options.autoplay){
self._startSlideshow();
}
if(self.options.carousel==='yes'){
self._buildCarousel();
}
self.$slider.trigger('_kickOff');
},
_buildCarousel:function(){
var self=this,
stageWidth=this.$slider.outerWidth(),
slidesWidth=parseInt(stageWidth / this.options.carouselSlidesToShow),
windowWidth=window.innerWidth||$(window).width();
if(this.options.carouselResponsive &&
this.options.carouselResponsive.length &&
this.options.carouselResponsive!==null){
for (var breakpoint in this.options.carouselResponsive){
var breakpointValue=this.options.carouselResponsive[breakpoint]['breakpoint'];
var newSlidesToShow=this.options.carouselResponsive[breakpoint]['settings']['carouselSlidesToShow'];
if(breakpointValue >=windowWidth){
slidesWidth=parseInt(stageWidth / newSlidesToShow);
this.options.carouselSlidesToShow=newSlidesToShow;
}}
}
this.slideWidthCarousel=slidesWidth;
this.$slides.each(function(i){
$(this).width(slidesWidth);
});
var slideTrackWidth=slidesWidth * this.itemsCount;
this.$sliderUl.width(slideTrackWidth).css('transform', 'translateX(0px)');
if(this.options.carouselSlidesToShow >=this.itemsCount){
this.$slider.find('.av-timeline-nav').hide();
}},
_navigate:function(dir, pos){
if(this.isAnimating||this.itemsCount < 2 ||!this.$slider.is(":visible")){
return false;
}
this.isAnimating=true;
this.prev=this.current;
if(pos!==undefined){
this.current=pos;
dir=this.current > this.prev ? 'next':'prev';
}
else if(dir==='next'){
this.current=this.current < this.itemsCount - 1 ? this.current + 1:0;
if(this.current===0&&this.options.autoplay_stopper==1&&this.options.autoplay){
this.isAnimating=false;
this.current=this.prev;
this._stopSlideshow();
return false;
}}
else if(dir==='prev'){
this.current=this.current > 0 ? this.current - 1:this.itemsCount - 1;
}
this.gotoButtons.removeClass('active').eq(this.current).addClass('active');
if(this.options.carousel==='no'){
this._setSize();
}
if(this.options.bg_slider==true){
if(this.imageUrls[this.current]['status']==true){
this['_' + this.options.animation].call(this, dir);
}else{
this.loader.show();
this._preloadSingle(this.current, function(){
this['_' + this.options.animation].call(this, dir);
this.loader.hide();
});
}}else{
this['_' + this.options.animation].call(this, dir);
}
if(this.current==0){
this.loopCount++;
this.$slider.trigger('avia_slider_first_slide');
}
else if(this.current==this.itemsCount - 1){
this.$slider.trigger('avia_slider_last_slide');
}else{
this.$slider.trigger('avia_slider_navigate_slide');
}},
_setSize: function(instant){
if(this.options.bg_slider==true) return;
var self=this,
slide=this.$slides.eq(this.current),
img=slide.find('img'),
current=Math.floor(this.$sliderUl.height()),
ratio=slide.data('video-ratio'),
setTo=ratio ? this.$sliderUl.width() / ratio:Math.floor(slide.height()),
video_height=slide.data('video-height'),
video_toppos=slide.data('video-toppos');
this.$sliderUl.height(current).css('padding',0);
if(setTo!=current){
if(instant==true){
this.$sliderUl.css({height:setTo});
this.$win.trigger('av-height-change');
}else{
this.$sliderUl.avia_animate({height:setTo}, function(){
self.$win.trigger('av-height-change');
});
}}
this._setCenter();
if(video_height&&video_height!="set"){
slide.find('iframe, embed, video, object, .av_youtube_frame').css({height: video_height + '%', top: video_toppos + '%'});
slide.data('video-height','set');
}},
_setCenter: function(){
var slide=this.$slides.eq(this.current),
img=slide.find('img'),
min_width=parseInt(img.css('min-width'),10),
slide_width=slide.width(),
caption=slide.find('.av-slideshow-caption'),
css_left=((slide_width - min_width) / 2);
if(caption.length){
if(caption.is('.caption_left')){
css_left=((slide_width - min_width) / 1.5);
}
else if(caption.is('.caption_right')){
css_left=((slide_width - min_width) / 2.5);
}}
if(slide_width >=min_width){
css_left=0;
}
img.css({left:css_left});
},
_carouselmove:function(){
var offset=this.slideWidthCarousel*this.currentCarousel;
this.$sliderUl.css('transform', 'translateX(-'+offset+'px)');
},
_carouselslide: function(dir){
if(dir==='next'){
if(this.options.carouselSlidesToShow + this.currentCarousel < this.itemsCount){
this.currentCarousel++;
this._carouselmove();
}}
else if(dir==='prev'){
if(this.currentCarousel > 0){
this.currentCarousel--;
this._carouselmove();
}}
this.isAnimating=false;
},
_slide: function(dir){
var dynamic=false,
modifier=dynamic==true ? 2:1,
sliderWidth=this.$slider.width(),
direction=dir==='next' ? -1:1,
property=this.browserPrefix + 'transform',
reset={}, transition={},  transition2={},
trans_val=(sliderWidth * direction * -1),
trans_val2=(sliderWidth * direction) / modifier;
if(this.cssActive){
property=this.browserPrefix + 'transform';
if(this.css3DActive){
reset[property]="translate3d(" + trans_val + "px, 0, 0)";
transition[property]="translate3d(" + trans_val2 + "px, 0, 0)";
transition2[property]="translate3d(0,0,0)";
}else{
reset[property]="translate(" + trans_val + "px,0)";
transition[property]="translate(" + trans_val2 + "px,0)";
transition2[property]="translate(0,0)";
}}else{
reset.left=trans_val;
transition.left=trans_val2;
transition2.left=0;
}
if(dynamic){
transition['z-index']="1";
transition2['z-index']="2";
}
this._slide_animate(reset, transition, transition2);
},
_slide_up: function(dir){
var dynamic=true,
modifier=dynamic==true ? 2:1,
sliderHeight=this.$slider.height(),
direction=dir==='next' ? -1:1,
property=this.browserPrefix + 'transform',
reset={}, transition={},  transition2={},
trans_val=(sliderHeight * direction * -1),
trans_val2=(sliderHeight * direction) / modifier;
if(this.cssActive){
property=this.browserPrefix + 'transform';
if(this.css3DActive){
reset[property]="translate3d(0," + trans_val + "px, 0)";
transition[property]="translate3d(0," + trans_val2 + "px, 0)";
transition2[property]="translate3d(0,0,0)";
}else{
reset[property]="translate(0," + trans_val + "px)";
transition[property]="translate(0," + trans_val2 + "px)";
transition2[property]="translate(0,0)";					}}else{
reset.top=trans_val;
transition.top=trans_val2;
transition2.top=0;
}
if(dynamic){
transition['z-index']="1";
transition2['z-index']="2";
}
this._slide_animate(reset, transition, transition2);
},
_slide_animate: function(reset , transition , transition2){
var self=this,
displaySlide=this.$slides.eq(this.current),
hideSlide=this.$slides.eq(this.prev);
hideSlide.trigger('pause');
if(!displaySlide.data('disableAutoplay')){
if(displaySlide.hasClass('av-video-lazyload')&&!displaySlide.hasClass('av-video-lazyload-complete')){
displaySlide.find('.av-click-to-play-overlay').trigger('click');
}else{
displaySlide.trigger('play');
}}
displaySlide.css({visibility:'visible', zIndex:4, opacity:1, left:0, top:0});
displaySlide.css(reset);
hideSlide.avia_animate(transition, this.options.transitionSpeed, this.options.easing);
var after_slide=function(){
self.isAnimating=false;
displaySlide.addClass('active-slide');
hideSlide.css({visibility:'hidden'}).removeClass('active-slide');
self.$slider.trigger('avia-transition-done');
}
if(self.options.show_slide_delay > 0){
setTimeout(function(){ displaySlide.avia_animate(transition2, self.options.transitionSpeed, self.options.easing, after_slide); },self.options.show_slide_delay);
}else{
displaySlide.avia_animate(transition2, self.options.transitionSpeed, self.options.easing, after_slide);
}},
_fade: function(){
var self=this,
displaySlide=this.$slides.eq(this.current),
hideSlide=this.$slides.eq(this.prev),
properties={visibility:'visible', zIndex:3, opacity:0},
fadeCallback=function(){
self.isAnimating=false;
displaySlide.addClass('active-slide');
hideSlide.css({visibility:'hidden', zIndex:2}).removeClass('active-slide');
self.$slider.trigger('avia-transition-done');
};
hideSlide.trigger('pause');
if(!displaySlide.data('disableAutoplay')){
if(displaySlide.hasClass('av-video-lazyload')&&!displaySlide.hasClass('av-video-lazyload-complete')){
displaySlide.find('.av-click-to-play-overlay').trigger('click');
}else{
displaySlide.trigger('play');
}}
if(self.options.fullfade==true){
hideSlide.avia_animate({opacity:0}, 200, 'linear', function(){
displaySlide.css(properties).avia_animate({opacity:1}, self.options.transitionSpeed, 'linear',fadeCallback);
});
}else{
displaySlide.css(properties).avia_animate({opacity:1}, self.options.transitionSpeed/2, 'linear', function(){
hideSlide.avia_animate({opacity:0}, 200, 'linear', fadeCallback);
});
}},
_attach_video_events: function(){
var self=this, $html=$('html');
self.$slides.each(function(i){
var currentSlide=$(this),
caption=currentSlide.find('.caption_fullwidth, .av-click-overlay'),
mejs=currentSlide.find('.mejs-mediaelement'),
lazyload=currentSlide.hasClass('av-video-lazyload') ? true:false;
if(currentSlide.data('avia_video_events')!=true){
currentSlide.data('avia_video_events', true);
currentSlide.on('av-video-events-bound', { slide: currentSlide, wrap: mejs , iteration: i , self: self, lazyload: lazyload }, onReady);
currentSlide.on('av-video-ended', { slide: currentSlide , self: self}, onFinish);
currentSlide.on('av-video-play-executed', function(){ setTimeout(function(){  self.pause() }, 100); });
caption.on('click', { slide: currentSlide }, toggle);
if(currentSlide.is('.av-video-events-bound')) currentSlide.trigger('av-video-events-bound');
if(lazyload&&i===0&&!currentSlide.data('disableAutoplay')){
currentSlide.find('.av-click-to-play-overlay').trigger('click');
}}
});
function onReady(event){
if(event.data.iteration===0){
event.data.wrap.css('opacity',0);
if(!event.data.self.isMobile&&!event.data.slide.data('disableAutoplay')){
event.data.slide.trigger('play');
} 
setTimeout(function(){ event.data.wrap.avia_animate({opacity:1}, 400); }, 50);
}
else if($html.is('.avia-msie')&&!event.data.slide.is('.av-video-service-html5')){
if(!event.data.slide.data('disableAutoplay')) event.data.slide.trigger('play');
}
if(event.data.slide.is('.av-video-service-html5')&&event.data.iteration!==0){
event.data.slide.trigger('pause');
}
if(event.data.lazyload){
event.data.slide.addClass('av-video-lazyload-complete');
event.data.slide.trigger('play');
}}
function onFinish(event){
if(!event.data.slide.is('.av-single-slide')&&!event.data.slide.is('.av-loop-video')){
event.data.slide.trigger('reset');
self._navigate('next');
self.resume();
}
if(event.data.slide.is('.av-loop-video')&&event.data.slide.is('.av-video-service-html5')){
if($html.is('.avia-safari-8')){
setTimeout(function(){ event.data.slide.trigger('play'); },1);
}}
}
function toggle(event){
if(event.target.tagName!="A"){
event.data.slide.trigger('toggle');
}}
},
_timer: function(callback, delay, first){
var self=this, start, remaining=delay;
self.timerId=0;
this.pause=function(){
window.clearTimeout(self.timerId);
remaining -=new Date() - start;
};
this.resume=function(){
start=new Date();
self.timerId=window.setTimeout(callback, remaining);
};
this.destroy=function(){
window.clearTimeout(self.timerId);
};
this.resume(true);
},
_startSlideshow: function(){
var self=this;
this.isPlaying=true;
this.slideshow=new this._timer(function(){
self._navigate('next');
if(self.options.autoplay){
self._startSlideshow();
}}, (this.options.interval * 1000));
},
_stopSlideshow: function(){
if(this.options.autoplay){
this.slideshow.destroy();
this.isPlaying=false;
this.options.autoplay=false;
}},
next:function(e){
e.preventDefault();
this._stopSlideshow();
this._navigate('next');
},
previous:function(e){
e.preventDefault();
this._stopSlideshow();
this._navigate('prev');
},
go2:function(pos){
if(isNaN(pos)){
pos.preventDefault();
pos=pos.currentTarget.hash.replace('#','');
}
pos -=1;
if(pos===this.current||pos >=this.itemsCount||pos < 0){
return false;
}
this._stopSlideshow();
this._navigate(false, pos);
},
play:function(){
if(!this.isPlaying){
this.isPlaying=true;
this._navigate('next');
this.options.autoplay=true;
this._startSlideshow();
}},
pause:function(){
if(this.isPlaying){
this.slideshow.pause();
}},
resume:function(){
if(this.isPlaying){
this.slideshow.resume();
}},
destroy:function(callback){
this.slideshow.destroy(callback);
}}
$.fn.aviaSlider=function(options){
return this.each(function(){
var self=$.data(this, 'aviaSlider');
if(!self){
self=$.data(this, 'aviaSlider', new $.AviaSlider(options, this));
}});
}})(jQuery);
(function($){
"use strict";
var _units=['weeks','days','hours','minutes','seconds'],
_second=1000,
_minute=_second * 60,
_hour=_minute * 60,
_day=_hour * 24,
_week=_day * 7,
ticker=function(_self){
var _time={},
_now=new Date(),
_timestamp=_self.end - _now;
if(_timestamp <=0){
clearInterval(_self.countdown);
return;
}
_self.time.weeks=Math.floor(_timestamp / _week);
_self.time.days=Math.floor((_timestamp % _week) / _day);
_self.time.hours=Math.floor((_timestamp % _day) / _hour);
_self.time.minutes=Math.floor((_timestamp % _hour) / _minute);
_self.time.seconds=Math.floor((_timestamp % _minute) / _second);
switch(_self.data.maximum){
case 1: _self.time.seconds=Math.floor(_timestamp / _second); break;
case 2: _self.time.minutes=Math.floor(_timestamp / _minute); break;
case 3: _self.time.hours=Math.floor(_timestamp / _hour); 	break;
case 4: _self.time.days=Math.floor(_timestamp / _day); 	break;
}
for (var i in _self.time){
if(typeof _self.update[i]=="object"){
if(_self.firstrun||_self.oldtime[i]!=_self.time[i]){
var labelkey=(_self.time[i]===1) ? "single":"multi";
_self.update[i].time_container.text(_self.time[i]);
_self.update[i].label_container.text(_self.update[i][labelkey]);
}}
}
if(_self.firstrun) _self.container.addClass('av-countdown-active');
_self.oldtime=$.extend({}, _self.time);
_self.firstrun=false;
};
$.fn.aviaCountdown=function(options){
if(!this.length) return;
return this.each(function(){
var _self={};
_self.update={};
_self.time={};
_self.oldtime={};
_self.firstrun=true;
_self.container=$(this);
_self.data=_self.container.data();
_self.end=new Date(_self.data.year, _self.data.month, _self.data.day, _self.data.hour, _self.data.minute);
for (var i in _units){
_self.update[_units[i]]={
time_container:  _self.container.find('.av-countdown-' + _units[i] + ' .av-countdown-time'),
label_container: _self.container.find('.av-countdown-' + _units[i] + ' .av-countdown-time-label')
};
if(_self.update[_units[i]].label_container.length){
_self.update[_units[i]].single=_self.update[_units[i]].label_container.data('label');
_self.update[_units[i]].multi=_self.update[_units[i]].label_container.data('label-multi');
}}
ticker(_self);
_self.countdown=setInterval(function(){ ticker(_self); }, 1000);
});
};}(jQuery));
(function($){
"use strict";
$.fn.avia_sc_gallery=function(options){
return this.each(function(){
var gallery=$(this), images=gallery.find('img'), big_prev=gallery.find('.avia-gallery-big');
gallery.on('avia_start_animation', function(){
images.each(function(i){
var image=$(this);
setTimeout(function(){ image.addClass('avia_start_animation') }, (i * 110));
});
});
if(gallery.hasClass('deactivate_avia_lazyload')) gallery.trigger('avia_start_animation');
if(big_prev.length){
gallery.on('mouseenter','.avia-gallery-thumb a', function(){
var _self=this;
big_prev.attr('data-onclick', _self.getAttribute("data-onclick"));
big_prev.height(big_prev.height());
big_prev.attr('href', _self.href)
var newImg=_self.getAttribute("data-prev-img"),
oldImg=big_prev.find('img'),
oldImgSrc=oldImg.attr('src');
if(newImg!=oldImgSrc){
var next_img=new Image();
next_img.src=newImg;
var $next=$(next_img);
if(big_prev.hasClass('avia-gallery-big-no-crop-thumb')){
$next.css({'height':big_prev.height(),'width':'auto'});
}
big_prev.stop().animate({opacity:0}, function(){
$next.insertAfter(oldImg);
oldImg.remove();
big_prev.animate({opacity:1});
big_prev.attr('title',$(_self).attr('title'));
});
}});
big_prev.on('click', function(){
var imagelink=gallery.find('.avia-gallery-thumb a').eq(this.getAttribute("data-onclick") - 1);
if(imagelink&&!imagelink.hasClass('aviaopeninbrowser')){
imagelink.trigger('click');
}
else if(imagelink){
var imgurl=imagelink.attr("href");
if(imagelink.hasClass('aviablank')&&imgurl!=''){
window.open(imgurl, '_blank');
}
else if(imgurl!=''){
window.open(imgurl, '_self');
}}
return false;
});
$(window).on("debouncedresize", function(){
big_prev.height('auto');
});
}});
}}(jQuery));
(function($){
"use strict";
$.fn.avia_hor_gallery=function(options){
var defaults =
{
slide_container:'.av-horizontal-gallery-inner',
slide_element:'.av-horizontal-gallery-slider',
slide_content:'.av-horizontal-gallery-wrap',
active:'av-active-gal-item',
prev:'.av-horizontal-gallery-prev',
next:'.av-horizontal-gallery-next'
};
var options=$.extend(defaults, options);
var win=$(window),
browserPrefix=$.avia_utilities.supports('transition'),
cssActive=this.browserPrefix!==false ? true:false,
isMobile=$.avia_utilities.isMobile,
transform3d=document.documentElement.className.indexOf('avia_transform3d')!==-1 ? true:false,
transition={};
return this.each(function(){
var container=$(this),
slide_container=container.find(options.slide_container),
slide_element=container.find(options.slide_element),
slide_content=container.find(options.slide_content),
prev=container.find(options.prev),
next=container.find(options.next),
imgs=container.find('img'),
all_elements_width=0,
currentIndex=false,
initial=container.data('av-initial'),
set_up=function(init){
var sl_height=(slide_container.width() / 100) * slide_container.data('av-height');
slide_container.css({'padding':0}).height(sl_height);
imgs.css('display','inline-block');
setTimeout(function(){ imgs.css('display','block'); }, 10);
all_elements_width=0;
slide_content.each(function(){
all_elements_width +=$(this).outerWidth(true);
});
slide_element.css('min-width' , all_elements_width);
if(currentIndex!==false){
change_active(currentIndex);
}},
change_active=function(index){
var current=slide_element.find(options.slide_content).eq(index),
viewport=slide_container.width(),
modifier=container.data('av-enlarge') > 1&&currentIndex==index ? container.data('av-enlarge'):1,
outerWidth=current.outerWidth(true) * modifier,
margin_right=parseInt(current.css('margin-right') , 10) / 2,
left_pos=viewport < all_elements_width ? (current.position().left * - 1) - (outerWidth / 2) + (viewport / 2): 0;
left_pos=left_pos + margin_right;
if(left_pos + all_elements_width < viewport) left_pos=(all_elements_width - viewport - parseInt(current.css('margin-right'),10)) * -1;
if(left_pos > 0) left_pos=0;
slide_element.css('left',left_pos);
slide_container.find("." +options.active).removeClass(options.active);
current.addClass(options.active);
currentIndex=index;
};
$.avia_utilities.preload({container: container , global_callback:  function(){
set_up('init');
win.on('debouncedresize', set_up);
if(initial) change_active(initial - 1);
setTimeout(function(){
container.addClass('av-horizontal-gallery-animated');
},10);
}});
slide_element.avia_swipe_trigger({prev:options.prev, next:options.next});
slide_content.on('click', function(e){
var current=$(this);
var index=slide_content.index(current);
if(currentIndex===index){
if(container.data('av-enlarge') > 1&&!$(e.target).is('a')){
}
return;
}
change_active(index);
});
prev.on('click', function(e){
if(currentIndex===false) currentIndex=1;
var index=currentIndex - 1;
if(index < 0) index=0;
change_active(index);
});
next.on('click', function(e){
if(currentIndex===false) currentIndex=-1;
var index=currentIndex + 1;
if(index > slide_content.length - 1) index=slide_content.length - 1;
change_active(index);
});
if(!isMobile){
container.avia_keyboard_controls({ 37: options.prev, 39: options.next });
}else{
container.avia_swipe_trigger({next: options.next, prev: options.prev});
}});
};}(jQuery));
(function($){
"use strict";
$.AviaTextRotator=function(options, slider){
this.$win=$(window);
this.$slider=$(slider);
this.$inner=this.$slider.find('.av-rotator-text');
this.$slides=this.$inner.find('.av-rotator-text-single');
this.$current=this.$slides.eq(0);
this.open=0;
this.count=this.$slides.length;
if($.avia_utilities.supported.transition===undefined){
$.avia_utilities.supported.transition=$.avia_utilities.supports('transition');
}
this.browserPrefix=$.avia_utilities.supported.transition;
this.cssActive=this.browserPrefix!==false ? true:false;
this.property=this.browserPrefix + 'transform',
this._init(options);
}
$.AviaTextRotator.prototype =
{
_init: function(options){
var _self=this;
if(this.count <=1) return;
_self.options=$.extend({}, options, this.$slider.data());
_self.$inner.addClass('av-rotation-active');
_self._autoplay();
if(_self.options.animation=="typewriter"){
_self.$slider.addClass('av-caret av-blinking-caret');
}},
_autoplay: function(){
var _self=this;
_self.autoplay=setTimeout(function(){
_self.open=_self.open===false ? 0:_self.open + 1;
if(_self.open >=_self.count) _self.open=0;
if(_self.options.animation!="typewriter"){
_self._move({}, _self.open);
_self._autoplay();
}else{
_self._typewriter();
}}, _self.options.interval * 1000)
},
_typewriter: function(event){
var _self=this;
_self.$current.css('background-color', _self.$current.css('color'));
_self.$slider.removeClass('av-caret av-blinking-caret').addClass('av-marked-text');
setTimeout(function(){
_self.$slider.addClass('av-caret av-blinking-caret').removeClass('av-marked-text');
_self.$current.data('av_typewriter_text', _self.$current.html());
_self.$current.css('background-color', 'transparent');
_self.$current.html("");
}, 800);
setTimeout(function(){
_self.$slider.removeClass('av-blinking-caret');
_self.$next=_self.$slides.eq(_self.open);
var content=_self.$next.data('av_typewriter_text')||_self.$next.html();
_self.$current.css({display:'none'});
_self.$next.css({display:'inline'});
_self.$next.html("");
var i=0;
var speed=50; 
function typeWriter(){
if(i < content.length){
_self.$next[0].innerHTML +=content.charAt(i);
i++;
setTimeout(typeWriter, speed + Math.floor(Math.random() * 100));
}else{
_self.$slider.addClass('av-caret av-blinking-caret');
_self.$current=_self.$slides.eq(_self.open);
_self._autoplay();
}}
typeWriter();
}, 1500);
},
_move: function(event){
var _self=this,
modifier=30 * _self.options.animation,
fade_out={opacity:0},
fade_start={display:'inline-block', opacity:0},
fade_in={opacity:1};
this.$next=_self.$slides.eq(this.open);
if(this.cssActive){
fade_out[_self.property]="translate(0px," + modifier +"px)";
fade_start[_self.property]="translate(0px," + (modifier * -1) +"px)";
fade_in[_self.property]="translate(0px,0px)";
}else{
fade_out['top']=modifier;
fade_start['top']=(modifier * -1);
fade_in['top']=0;
}
_self.$current.avia_animate(fade_out, function(){
_self.$current.css({display:'none'});
_self.$next.css(fade_start).avia_animate(fade_in, function(){
_self.$current=_self.$slides.eq(_self.open);
});
});
}};
$.fn.avia_textrotator=function(options){
return this.each(function(){
var active=$.data(this, 'AviaTextRotator');
if(!active){
$.data(this, 'AviaTextRotator', 1);
new $.AviaTextRotator(options, this);
}});
}}(jQuery));
(function($){
"use strict";
$.fn.avia_sc_iconlist=function(options){
return this.each(function(){
var iconlist=$(this), elements=iconlist.find('>li');
iconlist.on('avia_start_animation', function(){
elements.each(function(i){
var element=$(this);
setTimeout(function(){ element.addClass('avia_start_animation') }, (i * 350));
});
});
});
}}(jQuery));
(function($){
"use strict";
$.fn.aviaHotspots=function(options){
if(!this.length) return;
return this.each(function(){
var _self={};
_self.container=$(this);
_self.hotspots=_self.container.find('.av-image-hotspot');
_self.container.on('avia_start_animation', function(){
setTimeout(function(){
_self.hotspots.each(function(i){
var current=$(this);
setTimeout(function(){ current.addClass('av-display-hotspot'); },300 * i);
});
},400);
});
});
};}(jQuery));
(function($){
"use strict";
var animating=false,
methods={
switchMag: function(clicked, _self){
var current=$(clicked)
if(current.is('.active_sort')||animating) return;
var filter=current.data('filter'),
oldContainer=_self.container.filter(':visible'),
newContainer=_self.container.filter('.' + filter);
animating=true;
_self.sort_buttons.removeClass('active_sort');
current.addClass('active_sort');
_self.magazine.height(_self.magazine.outerHeight());
oldContainer.avia_animate({opacity:0}, 200, function(){
oldContainer.css({display:'none'});
newContainer.css({opacity:0, display:'block'}).avia_animate({opacity:1}, 150, function(){
_self.magazine.avia_animate({height: (newContainer.outerHeight() + _self.sort_bar.outerHeight())}, 150, function(){
_self.magazine.height('auto');
animating=false;
});
});
});
}};
$.fn.aviaMagazine=function(options){
if(!this.length) return;
return this.each(function(){
var _self={};
_self.magazine=$(this),
_self.sort_buttons=_self.magazine.find('.av-magazine-sort a');
_self.container=_self.magazine.find('.av-magazine-group');
_self.sort_bar=_self.magazine.find('.av-magazine-top-bar');
_self.sort_buttons.on('click', function(e){ e.preventDefault(); methods.switchMag(this, _self);  });
});
}}(jQuery));
!function(t,e){"function"==typeof define&&define.amd?define("jquery-bridget/jquery-bridget",["jquery"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("jquery")):t.jQueryBridget=e(t,t.jQuery)}(window,function(t,e){"use strict";function i(i,s,a){function u(t,e,n){var o,s="$()."+i+'("'+e+'")';return t.each(function(t,u){var h=a.data(u,i);if(!h)return void r(i+" not initialized. Cannot call methods, i.e. "+s);var d=h[e];if(!d||"_"==e.charAt(0))return void r(s+" is not a valid method");var l=d.apply(h,n);o=void 0===o?l:o}),void 0!==o?o:t}function h(t,e){t.each(function(t,n){var o=a.data(n,i);o?(o.option(e),o._init()):(o=new s(n,e),a.data(n,i,o))})}a=a||e||t.jQuery,a&&(s.prototype.option||(s.prototype.option=function(t){a.isPlainObject(t)&&(this.options=a.extend(!0,this.options,t))}),a.fn[i]=function(t){if("string"==typeof t){var e=o.call(arguments,1);return u(this,t,e)}return h(this,t),this},n(a))}function n(t){!t||t&&t.bridget||(t.bridget=i)}var o=Array.prototype.slice,s=t.console,r="undefined"==typeof s?function(){}:function(t){s.error(t)};return n(e||t.jQuery),i}),function(t,e){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",e):"object"==typeof module&&module.exports?module.exports=e():t.EvEmitter=e()}("undefined"!=typeof window?window:this,function(){function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var i=this._events=this._events||{},n=i[t]=i[t]||[];return n.indexOf(e)==-1&&n.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var i=this._onceEvents=this._onceEvents||{},n=i[t]=i[t]||{};return n[e]=!0,this}},e.off=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=i.indexOf(e);return n!=-1&&i.splice(n,1),this}},e.emitEvent=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=0,o=i[n];e=e||[];for(var s=this._onceEvents&&this._onceEvents[t];o;){var r=s&&s[o];r&&(this.off(t,o),delete s[o]),o.apply(this,e),n+=r?0:1,o=i[n]}return this}},t}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("get-size/get-size",[],function(){return e()}):"object"==typeof module&&module.exports?module.exports=e():t.getSize=e()}(window,function(){"use strict";function t(t){var e=parseFloat(t),i=t.indexOf("%")==-1&&!isNaN(e);return i&&e}function e(){}function i(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0;e<h;e++){var i=u[e];t[i]=0}return t}function n(t){var e=getComputedStyle(t);return e||a("Style returned "+e+". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"),e}function o(){if(!d){d=!0;var e=document.createElement("div");e.style.width="200px",e.style.padding="1px 2px 3px 4px",e.style.borderStyle="solid",e.style.borderWidth="1px 2px 3px 4px",e.style.boxSizing="border-box";var i=document.body||document.documentElement;i.appendChild(e);var o=n(e);s.isBoxSizeOuter=r=200==t(o.width),i.removeChild(e)}}function s(e){if(o(),"string"==typeof e&&(e=document.querySelector(e)),e&&"object"==typeof e&&e.nodeType){var s=n(e);if("none"==s.display)return i();var a={};a.width=e.offsetWidth,a.height=e.offsetHeight;for(var d=a.isBorderBox="border-box"==s.boxSizing,l=0;l<h;l++){var f=u[l],c=s[f],m=parseFloat(c);a[f]=isNaN(m)?0:m}var p=a.paddingLeft+a.paddingRight,y=a.paddingTop+a.paddingBottom,g=a.marginLeft+a.marginRight,v=a.marginTop+a.marginBottom,_=a.borderLeftWidth+a.borderRightWidth,I=a.borderTopWidth+a.borderBottomWidth,z=d&&r,x=t(s.width);x!==!1&&(a.width=x+(z?0:p+_));var S=t(s.height);return S!==!1&&(a.height=S+(z?0:y+I)),a.innerWidth=a.width-(p+_),a.innerHeight=a.height-(y+I),a.outerWidth=a.width+g,a.outerHeight=a.height+v,a}}var r,a="undefined"==typeof console?e:function(t){console.error(t)},u=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],h=u.length,d=!1;return s}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("desandro-matches-selector/matches-selector",e):"object"==typeof module&&module.exports?module.exports=e():t.matchesSelector=e()}(window,function(){"use strict";var t=function(){var t=Element.prototype;if(t.matches)return"matches";if(t.matchesSelector)return"matchesSelector";for(var e=["webkit","moz","ms","o"],i=0;i<e.length;i++){var n=e[i],o=n+"MatchesSelector";if(t[o])return o}}();return function(e,i){return e[t](i)}}),function(t,e){"function"==typeof define&&define.amd?define("fizzy-ui-utils/utils",["desandro-matches-selector/matches-selector"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("desandro-matches-selector")):t.fizzyUIUtils=e(t,t.matchesSelector)}(window,function(t,e){var i={};i.extend=function(t,e){for(var i in e)t[i]=e[i];return t},i.modulo=function(t,e){return(t%e+e)%e},i.makeArray=function(t){var e=[];if(Array.isArray(t))e=t;else if(t&&"number"==typeof t.length)for(var i=0;i<t.length;i++)e.push(t[i]);else e.push(t);return e},i.removeFrom=function(t,e){var i=t.indexOf(e);i!=-1&&t.splice(i,1)},i.getParent=function(t,i){for(;t!=document.body;)if(t=t.parentNode,e(t,i))return t},i.getQueryElement=function(t){return"string"==typeof t?document.querySelector(t):t},i.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},i.filterFindElements=function(t,n){t=i.makeArray(t);var o=[];return t.forEach(function(t){if(t instanceof HTMLElement){if(!n)return void o.push(t);e(t,n)&&o.push(t);for(var i=t.querySelectorAll(n),s=0;s<i.length;s++)o.push(i[s])}}),o},i.debounceMethod=function(t,e,i){var n=t.prototype[e],o=e+"Timeout";t.prototype[e]=function(){var t=this[o];t&&clearTimeout(t);var e=arguments,s=this;this[o]=setTimeout(function(){n.apply(s,e),delete s[o]},i||100)}},i.docReady=function(t){var e=document.readyState;"complete"==e||"interactive"==e?setTimeout(t):document.addEventListener("DOMContentLoaded",t)},i.toDashed=function(t){return t.replace(/(.)([A-Z])/g,function(t,e,i){return e+"-"+i}).toLowerCase()};var n=t.console;return i.htmlInit=function(e,o){i.docReady(function(){var s=i.toDashed(o),r="data-"+s,a=document.querySelectorAll("["+r+"]"),u=document.querySelectorAll(".js-"+s),h=i.makeArray(a).concat(i.makeArray(u)),d=r+"-options",l=t.jQuery;h.forEach(function(t){var i,s=t.getAttribute(r)||t.getAttribute(d);try{i=s&&JSON.parse(s)}catch(a){return void(n&&n.error("Error parsing "+r+" on "+t.className+": "+a))}var u=new e(t,i);l&&l.data(t,o,u)})})},i}),function(t,e){"function"==typeof define&&define.amd?define("outlayer/item",["ev-emitter/ev-emitter","get-size/get-size"],e):"object"==typeof module&&module.exports?module.exports=e(require("ev-emitter"),require("get-size")):(t.Outlayer={},t.Outlayer.Item=e(t.EvEmitter,t.getSize))}(window,function(t,e){"use strict";function i(t){for(var e in t)return!1;return e=null,!0}function n(t,e){t&&(this.element=t,this.layout=e,this.position={x:0,y:0},this._create())}function o(t){return t.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})}var s=document.documentElement.style,r="string"==typeof s.transition?"transition":"WebkitTransition",a="string"==typeof s.transform?"transform":"WebkitTransform",u={WebkitTransition:"webkitTransitionEnd",transition:"transitionend"}[r],h={transform:a,transition:r,transitionDuration:r+"Duration",transitionProperty:r+"Property",transitionDelay:r+"Delay"},d=n.prototype=Object.create(t.prototype);d.constructor=n,d._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},d.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},d.getSize=function(){this.size=e(this.element)},d.css=function(t){var e=this.element.style;for(var i in t){var n=h[i]||i;e[n]=t[i]}},d.getPosition=function(){var t=getComputedStyle(this.element),e=this.layout._getOption("originLeft"),i=this.layout._getOption("originTop"),n=t[e?"left":"right"],o=t[i?"top":"bottom"],s=this.layout.size,r=n.indexOf("%")!=-1?parseFloat(n)/100*s.width:parseInt(n,10),a=o.indexOf("%")!=-1?parseFloat(o)/100*s.height:parseInt(o,10);r=isNaN(r)?0:r,a=isNaN(a)?0:a,r-=e?s.paddingLeft:s.paddingRight,a-=i?s.paddingTop:s.paddingBottom,this.position.x=r,this.position.y=a},d.layoutPosition=function(){var t=this.layout.size,e={},i=this.layout._getOption("originLeft"),n=this.layout._getOption("originTop"),o=i?"paddingLeft":"paddingRight",s=i?"left":"right",r=i?"right":"left",a=this.position.x+t[o];e[s]=this.getXValue(a),e[r]="";var u=n?"paddingTop":"paddingBottom",h=n?"top":"bottom",d=n?"bottom":"top",l=this.position.y+t[u];e[h]=this.getYValue(l),e[d]="",this.css(e),this.emitEvent("layout",[this])},d.getXValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&!e?t/this.layout.size.width*100+"%":t+"px"},d.getYValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&e?t/this.layout.size.height*100+"%":t+"px"},d._transitionTo=function(t,e){this.getPosition();var i=this.position.x,n=this.position.y,o=parseInt(t,10),s=parseInt(e,10),r=o===this.position.x&&s===this.position.y;if(this.setPosition(t,e),r&&!this.isTransitioning)return void this.layoutPosition();var a=t-i,u=e-n,h={};h.transform=this.getTranslate(a,u),this.transition({to:h,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},d.getTranslate=function(t,e){var i=this.layout._getOption("originLeft"),n=this.layout._getOption("originTop");return t=i?t:-t,e=n?e:-e,"translate3d("+t+"px, "+e+"px, 0)"},d.goTo=function(t,e){this.setPosition(t,e),this.layoutPosition()},d.moveTo=d._transitionTo,d.setPosition=function(t,e){this.position.x=parseInt(t,10),this.position.y=parseInt(e,10)},d._nonTransition=function(t){this.css(t.to),t.isCleaning&&this._removeStyles(t.to);for(var e in t.onTransitionEnd)t.onTransitionEnd[e].call(this)},d.transition=function(t){if(!parseFloat(this.layout.options.transitionDuration))return void this._nonTransition(t);var e=this._transn;for(var i in t.onTransitionEnd)e.onEnd[i]=t.onTransitionEnd[i];for(i in t.to)e.ingProperties[i]=!0,t.isCleaning&&(e.clean[i]=!0);if(t.from){this.css(t.from);var n=this.element.offsetHeight;n=null}this.enableTransition(t.to),this.css(t.to),this.isTransitioning=!0};var l="opacity,"+o(a);d.enableTransition=function(){if(!this.isTransitioning){var t=this.layout.options.transitionDuration;t="number"==typeof t?t+"ms":t,this.css({transitionProperty:l,transitionDuration:t,transitionDelay:this.staggerDelay||0}),this.element.addEventListener(u,this,!1)}},d.onwebkitTransitionEnd=function(t){this.ontransitionend(t)},d.onotransitionend=function(t){this.ontransitionend(t)};var f={"-webkit-transform":"transform"};d.ontransitionend=function(t){if(t.target===this.element){var e=this._transn,n=f[t.propertyName]||t.propertyName;if(delete e.ingProperties[n],i(e.ingProperties)&&this.disableTransition(),n in e.clean&&(this.element.style[t.propertyName]="",delete e.clean[n]),n in e.onEnd){var o=e.onEnd[n];o.call(this),delete e.onEnd[n]}this.emitEvent("transitionEnd",[this])}},d.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(u,this,!1),this.isTransitioning=!1},d._removeStyles=function(t){var e={};for(var i in t)e[i]="";this.css(e)};var c={transitionProperty:"",transitionDuration:"",transitionDelay:""};return d.removeTransitionStyles=function(){this.css(c)},d.stagger=function(t){t=isNaN(t)?0:t,this.staggerDelay=t+"ms"},d.removeElem=function(){this.element.parentNode.removeChild(this.element),this.css({display:""}),this.emitEvent("remove",[this])},d.remove=function(){return r&&parseFloat(this.layout.options.transitionDuration)?(this.once("transitionEnd",function(){this.removeElem()}),void this.hide()):void this.removeElem()},d.reveal=function(){delete this.isHidden,this.css({display:""});var t=this.layout.options,e={},i=this.getHideRevealTransitionEndProperty("visibleStyle");e[i]=this.onRevealTransitionEnd,this.transition({from:t.hiddenStyle,to:t.visibleStyle,isCleaning:!0,onTransitionEnd:e})},d.onRevealTransitionEnd=function(){this.isHidden||this.emitEvent("reveal")},d.getHideRevealTransitionEndProperty=function(t){var e=this.layout.options[t];if(e.opacity)return"opacity";for(var i in e)return i},d.hide=function(){this.isHidden=!0,this.css({display:""});var t=this.layout.options,e={},i=this.getHideRevealTransitionEndProperty("hiddenStyle");e[i]=this.onHideTransitionEnd,this.transition({from:t.visibleStyle,to:t.hiddenStyle,isCleaning:!0,onTransitionEnd:e})},d.onHideTransitionEnd=function(){this.isHidden&&(this.css({display:"none"}),this.emitEvent("hide"))},d.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},n}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("outlayer/outlayer",["ev-emitter/ev-emitter","get-size/get-size","fizzy-ui-utils/utils","./item"],function(i,n,o,s){return e(t,i,n,o,s)}):"object"==typeof module&&module.exports?module.exports=e(t,require("ev-emitter"),require("get-size"),require("fizzy-ui-utils"),require("./item")):t.Outlayer=e(t,t.EvEmitter,t.getSize,t.fizzyUIUtils,t.Outlayer.Item)}(window,function(t,e,i,n,o){"use strict";function s(t,e){var i=n.getQueryElement(t);if(!i)return void(u&&u.error("Bad element for "+this.constructor.namespace+": "+(i||t)));this.element=i,h&&(this.$element=h(this.element)),this.options=n.extend({},this.constructor.defaults),this.option(e);var o=++l;this.element.outlayerGUID=o,f[o]=this,this._create();var s=this._getOption("initLayout");s&&this.layout()}function r(t){function e(){t.apply(this,arguments)}return e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e}function a(t){if("number"==typeof t)return t;var e=t.match(/(^\d*\.?\d*)(\w*)/),i=e&&e[1],n=e&&e[2];if(!i.length)return 0;i=parseFloat(i);var o=m[n]||1;return i*o}var u=t.console,h=t.jQuery,d=function(){},l=0,f={};s.namespace="outlayer",s.Item=o,s.defaults={containerStyle:{position:"relative"},initLayout:!0,originLeft:!0,originTop:!0,resize:!0,resizeContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}};var c=s.prototype;n.extend(c,e.prototype),c.option=function(t){n.extend(this.options,t)},c._getOption=function(t){var e=this.constructor.compatOptions[t];return e&&void 0!==this.options[e]?this.options[e]:this.options[t]},s.compatOptions={initLayout:"isInitLayout",horizontal:"isHorizontal",layoutInstant:"isLayoutInstant",originLeft:"isOriginLeft",originTop:"isOriginTop",resize:"isResizeBound",resizeContainer:"isResizingContainer"},c._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),n.extend(this.element.style,this.options.containerStyle);var t=this._getOption("resize");t&&this.bindResize()},c.reloadItems=function(){this.items=this._itemize(this.element.children)},c._itemize=function(t){for(var e=this._filterFindItemElements(t),i=this.constructor.Item,n=[],o=0;o<e.length;o++){var s=e[o],r=new i(s,this);n.push(r)}return n},c._filterFindItemElements=function(t){return n.filterFindElements(t,this.options.itemSelector)},c.getItemElements=function(){return this.items.map(function(t){return t.element})},c.layout=function(){this._resetLayout(),this._manageStamps();var t=this._getOption("layoutInstant"),e=void 0!==t?t:!this._isLayoutInited;this.layoutItems(this.items,e),this._isLayoutInited=!0},c._init=c.layout,c._resetLayout=function(){this.getSize()},c.getSize=function(){this.size=i(this.element)},c._getMeasurement=function(t,e){var n,o=this.options[t];o?("string"==typeof o?n=this.element.querySelector(o):o instanceof HTMLElement&&(n=o),this[t]=n?i(n)[e]:o):this[t]=0},c.layoutItems=function(t,e){t=this._getItemsForLayout(t),this._layoutItems(t,e),this._postLayout()},c._getItemsForLayout=function(t){return t.filter(function(t){return!t.isIgnored})},c._layoutItems=function(t,e){if(this._emitCompleteOnItems("layout",t),t&&t.length){var i=[];t.forEach(function(t){var n=this._getItemLayoutPosition(t);n.item=t,n.isInstant=e||t.isLayoutInstant,i.push(n)},this),this._processLayoutQueue(i)}},c._getItemLayoutPosition=function(){return{x:0,y:0}},c._processLayoutQueue=function(t){this.updateStagger(),t.forEach(function(t,e){this._positionItem(t.item,t.x,t.y,t.isInstant,e)},this)},c.updateStagger=function(){var t=this.options.stagger;return null===t||void 0===t?void(this.stagger=0):(this.stagger=a(t),this.stagger)},c._positionItem=function(t,e,i,n,o){n?t.goTo(e,i):(t.stagger(o*this.stagger),t.moveTo(e,i))},c._postLayout=function(){this.resizeContainer()},c.resizeContainer=function(){var t=this._getOption("resizeContainer");if(t){var e=this._getContainerSize();e&&(this._setContainerMeasure(e.width,!0),this._setContainerMeasure(e.height,!1))}},c._getContainerSize=d,c._setContainerMeasure=function(t,e){if(void 0!==t){var i=this.size;i.isBorderBox&&(t+=e?i.paddingLeft+i.paddingRight+i.borderLeftWidth+i.borderRightWidth:i.paddingBottom+i.paddingTop+i.borderTopWidth+i.borderBottomWidth),t=Math.max(t,0),this.element.style[e?"width":"height"]=t+"px"}},c._emitCompleteOnItems=function(t,e){function i(){o.dispatchEvent(t+"Complete",null,[e])}function n(){r++,r==s&&i()}var o=this,s=e.length;if(!e||!s)return void i();var r=0;e.forEach(function(e){e.once(t,n)})},c.dispatchEvent=function(t,e,i){var n=e?[e].concat(i):i;if(this.emitEvent(t,n),h)if(this.$element=this.$element||h(this.element),e){var o=h.Event(e);o.type=t,this.$element.trigger(o,i)}else this.$element.trigger(t,i)},c.ignore=function(t){var e=this.getItem(t);e&&(e.isIgnored=!0)},c.unignore=function(t){var e=this.getItem(t);e&&delete e.isIgnored},c.stamp=function(t){t=this._find(t),t&&(this.stamps=this.stamps.concat(t),t.forEach(this.ignore,this))},c.unstamp=function(t){t=this._find(t),t&&t.forEach(function(t){n.removeFrom(this.stamps,t),this.unignore(t)},this)},c._find=function(t){if(t)return"string"==typeof t&&(t=this.element.querySelectorAll(t)),t=n.makeArray(t)},c._manageStamps=function(){this.stamps&&this.stamps.length&&(this._getBoundingRect(),this.stamps.forEach(this._manageStamp,this))},c._getBoundingRect=function(){var t=this.element.getBoundingClientRect(),e=this.size;this._boundingRect={left:t.left+e.paddingLeft+e.borderLeftWidth,top:t.top+e.paddingTop+e.borderTopWidth,right:t.right-(e.paddingRight+e.borderRightWidth),bottom:t.bottom-(e.paddingBottom+e.borderBottomWidth)}},c._manageStamp=d,c._getElementOffset=function(t){var e=t.getBoundingClientRect(),n=this._boundingRect,o=i(t),s={left:e.left-n.left-o.marginLeft,top:e.top-n.top-o.marginTop,right:n.right-e.right-o.marginRight,bottom:n.bottom-e.bottom-o.marginBottom};return s},c.handleEvent=n.handleEvent,c.bindResize=function(){t.addEventListener("resize",this),this.isResizeBound=!0},c.unbindResize=function(){t.removeEventListener("resize",this),this.isResizeBound=!1},c.onresize=function(){this.resize()},n.debounceMethod(s,"onresize",100),c.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},c.needsResizeLayout=function(){var t=i(this.element),e=this.size&&t;return e&&t.innerWidth!==this.size.innerWidth},c.addItems=function(t){var e=this._itemize(t);return e.length&&(this.items=this.items.concat(e)),e},c.appended=function(t){var e=this.addItems(t);e.length&&(this.layoutItems(e,!0),this.reveal(e))},c.prepended=function(t){var e=this._itemize(t);if(e.length){var i=this.items.slice(0);this.items=e.concat(i),this._resetLayout(),this._manageStamps(),this.layoutItems(e,!0),this.reveal(e),this.layoutItems(i)}},c.reveal=function(t){if(this._emitCompleteOnItems("reveal",t),t&&t.length){var e=this.updateStagger();t.forEach(function(t,i){t.stagger(i*e),t.reveal()})}},c.hide=function(t){if(this._emitCompleteOnItems("hide",t),t&&t.length){var e=this.updateStagger();t.forEach(function(t,i){t.stagger(i*e),t.hide()})}},c.revealItemElements=function(t){var e=this.getItems(t);this.reveal(e)},c.hideItemElements=function(t){var e=this.getItems(t);this.hide(e)},c.getItem=function(t){for(var e=0;e<this.items.length;e++){var i=this.items[e];if(i.element==t)return i}},c.getItems=function(t){t=n.makeArray(t);var e=[];return t.forEach(function(t){var i=this.getItem(t);i&&e.push(i)},this),e},c.remove=function(t){var e=this.getItems(t);this._emitCompleteOnItems("remove",e),e&&e.length&&e.forEach(function(t){t.remove(),n.removeFrom(this.items,t)},this)},c.destroy=function(){var t=this.element.style;t.height="",t.position="",t.width="",this.items.forEach(function(t){t.destroy()}),this.unbindResize();var e=this.element.outlayerGUID;delete f[e],delete this.element.outlayerGUID,h&&h.removeData(this.element,this.constructor.namespace)},s.data=function(t){t=n.getQueryElement(t);var e=t&&t.outlayerGUID;return e&&f[e]},s.create=function(t,e){var i=r(s);return i.defaults=n.extend({},s.defaults),n.extend(i.defaults,e),i.compatOptions=n.extend({},s.compatOptions),i.namespace=t,i.data=s.data,i.Item=r(o),n.htmlInit(i,t),h&&h.bridget&&h.bridget(t,i),i};var m={ms:1,s:1e3};return s.Item=o,s}),function(t,e){"function"==typeof define&&define.amd?define("isotope/js/item",["outlayer/outlayer"],e):"object"==typeof module&&module.exports?module.exports=e(require("outlayer")):(t.Isotope=t.Isotope||{},t.Isotope.Item=e(t.Outlayer))}(window,function(t){"use strict";function e(){t.Item.apply(this,arguments)}var i=e.prototype=Object.create(t.Item.prototype),n=i._create;i._create=function(){this.id=this.layout.itemGUID++,n.call(this),this.sortData={}},i.updateSortData=function(){if(!this.isIgnored){this.sortData.id=this.id,this.sortData["original-order"]=this.id,this.sortData.random=Math.random();var t=this.layout.options.getSortData,e=this.layout._sorters;for(var i in t){var n=e[i];this.sortData[i]=n(this.element,this)}}};var o=i.destroy;return i.destroy=function(){o.apply(this,arguments),this.css({display:""})},e}),function(t,e){"function"==typeof define&&define.amd?define("isotope/js/layout-mode",["get-size/get-size","outlayer/outlayer"],e):"object"==typeof module&&module.exports?module.exports=e(require("get-size"),require("outlayer")):(t.Isotope=t.Isotope||{},t.Isotope.LayoutMode=e(t.getSize,t.Outlayer))}(window,function(t,e){"use strict";function i(t){this.isotope=t,t&&(this.options=t.options[this.namespace],this.element=t.element,this.items=t.filteredItems,this.size=t.size)}var n=i.prototype,o=["_resetLayout","_getItemLayoutPosition","_manageStamp","_getContainerSize","_getElementOffset","needsResizeLayout","_getOption"];return o.forEach(function(t){n[t]=function(){return e.prototype[t].apply(this.isotope,arguments)}}),n.needsVerticalResizeLayout=function(){var e=t(this.isotope.element),i=this.isotope.size&&e;return i&&e.innerHeight!=this.isotope.size.innerHeight},n._getMeasurement=function(){this.isotope._getMeasurement.apply(this,arguments)},n.getColumnWidth=function(){this.getSegmentSize("column","Width")},n.getRowHeight=function(){this.getSegmentSize("row","Height")},n.getSegmentSize=function(t,e){var i=t+e,n="outer"+e;if(this._getMeasurement(i,n),!this[i]){var o=this.getFirstItemSize();this[i]=o&&o[n]||this.isotope.size["inner"+e]}},n.getFirstItemSize=function(){var e=this.isotope.filteredItems[0];return e&&e.element&&t(e.element)},n.layout=function(){this.isotope.layout.apply(this.isotope,arguments)},n.getSize=function(){this.isotope.getSize(),this.size=this.isotope.size},i.modes={},i.create=function(t,e){function o(){i.apply(this,arguments)}return o.prototype=Object.create(n),o.prototype.constructor=o,e&&(o.options=e),o.prototype.namespace=t,i.modes[t]=o,o},i}),function(t,e){"function"==typeof define&&define.amd?define("masonry/masonry",["outlayer/outlayer","get-size/get-size"],e):"object"==typeof module&&module.exports?module.exports=e(require("outlayer"),require("get-size")):t.Masonry=e(t.Outlayer,t.getSize)}(window,function(t,e){var i=t.create("masonry");return i.compatOptions.fitWidth="isFitWidth",i.prototype._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns(),this.colYs=[];for(var t=0;t<this.cols;t++)this.colYs.push(0);this.maxY=0},i.prototype.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var t=this.items[0],i=t&&t.element;this.columnWidth=i&&e(i).outerWidth||this.containerWidth}var n=this.columnWidth+=this.gutter,o=this.containerWidth+this.gutter,s=o/n,r=n-o%n,a=r&&r<1?"round":"floor";s=Math[a](s),this.cols=Math.max(s,1)},i.prototype.getContainerWidth=function(){var t=this._getOption("fitWidth"),i=t?this.element.parentNode:this.element,n=e(i);this.containerWidth=n&&n.innerWidth},i.prototype._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth%this.columnWidth,i=e&&e<1?"round":"ceil",n=Math[i](t.size.outerWidth/this.columnWidth);n=Math.min(n,this.cols);for(var o=this._getColGroup(n),s=Math.min.apply(Math,o),r=o.indexOf(s),a={x:this.columnWidth*r,y:s},u=s+t.size.outerHeight,h=this.cols+1-o.length,d=0;d<h;d++)this.colYs[r+d]=u;return a},i.prototype._getColGroup=function(t){if(t<2)return this.colYs;for(var e=[],i=this.cols+1-t,n=0;n<i;n++){var o=this.colYs.slice(n,n+t);e[n]=Math.max.apply(Math,o)}return e},i.prototype._manageStamp=function(t){var i=e(t),n=this._getElementOffset(t),o=this._getOption("originLeft"),s=o?n.left:n.right,r=s+i.outerWidth,a=Math.floor(s/this.columnWidth);a=Math.max(0,a);var u=Math.floor(r/this.columnWidth);u-=r%this.columnWidth?0:1,u=Math.min(this.cols-1,u);for(var h=this._getOption("originTop"),d=(h?n.top:n.bottom)+i.outerHeight,l=a;l<=u;l++)this.colYs[l]=Math.max(d,this.colYs[l])},i.prototype._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var t={height:this.maxY};return this._getOption("fitWidth")&&(t.width=this._getContainerFitWidth()),t},i.prototype._getContainerFitWidth=function(){for(var t=0,e=this.cols;--e&&0===this.colYs[e];)t++;return(this.cols-t)*this.columnWidth-this.gutter},i.prototype.needsResizeLayout=function(){var t=this.containerWidth;return this.getContainerWidth(),t!=this.containerWidth},i}),function(t,e){"function"==typeof define&&define.amd?define("isotope/js/layout-modes/masonry",["../layout-mode","masonry/masonry"],e):"object"==typeof module&&module.exports?module.exports=e(require("../layout-mode"),require("masonry-layout")):e(t.Isotope.LayoutMode,t.Masonry)}(window,function(t,e){"use strict";var i=t.create("masonry"),n=i.prototype,o={_getElementOffset:!0,layout:!0,_getMeasurement:!0};for(var s in e.prototype)o[s]||(n[s]=e.prototype[s]);var r=n.measureColumns;n.measureColumns=function(){this.items=this.isotope.filteredItems,r.call(this)};var a=n._getOption;return n._getOption=function(t){return"fitWidth"==t?void 0!==this.options.isFitWidth?this.options.isFitWidth:this.options.fitWidth:a.apply(this.isotope,arguments)},i}),function(t,e){"function"==typeof define&&define.amd?define("isotope/js/layout-modes/fit-rows",["../layout-mode"],e):"object"==typeof exports?module.exports=e(require("../layout-mode")):e(t.Isotope.LayoutMode)}(window,function(t){"use strict";var e=t.create("fitRows"),i=e.prototype;return i._resetLayout=function(){this.x=0,this.y=0,this.maxY=0,this._getMeasurement("gutter","outerWidth")},i._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth+this.gutter,i=this.isotope.size.innerWidth+this.gutter;0!==this.x&&e+this.x>i&&(this.x=0,this.y=this.maxY);var n={x:this.x,y:this.y};return this.maxY=Math.max(this.maxY,this.y+t.size.outerHeight),this.x+=e,n},i._getContainerSize=function(){return{height:this.maxY}},e}),function(t,e){"function"==typeof define&&define.amd?define("isotope/js/layout-modes/vertical",["../layout-mode"],e):"object"==typeof module&&module.exports?module.exports=e(require("../layout-mode")):e(t.Isotope.LayoutMode)}(window,function(t){"use strict";var e=t.create("vertical",{horizontalAlignment:0}),i=e.prototype;return i._resetLayout=function(){this.y=0},i._getItemLayoutPosition=function(t){t.getSize();var e=(this.isotope.size.innerWidth-t.size.outerWidth)*this.options.horizontalAlignment,i=this.y;return this.y+=t.size.outerHeight,{x:e,y:i}},i._getContainerSize=function(){return{height:this.y}},e}),function(t,e){"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size","desandro-matches-selector/matches-selector","fizzy-ui-utils/utils","isotope/js/item","isotope/js/layout-mode","isotope/js/layout-modes/masonry","isotope/js/layout-modes/fit-rows","isotope/js/layout-modes/vertical"],function(i,n,o,s,r,a){return e(t,i,n,o,s,r,a)}):"object"==typeof module&&module.exports?module.exports=e(t,require("outlayer"),require("get-size"),require("desandro-matches-selector"),require("fizzy-ui-utils"),require("isotope/js/item"),require("isotope/js/layout-mode"),require("isotope/js/layout-modes/masonry"),require("isotope/js/layout-modes/fit-rows"),require("isotope/js/layout-modes/vertical")):t.Isotope=e(t,t.Outlayer,t.getSize,t.matchesSelector,t.fizzyUIUtils,t.Isotope.Item,t.Isotope.LayoutMode)}(window,function(t,e,i,n,o,s,r){function a(t,e){return function(i,n){for(var o=0;o<t.length;o++){var s=t[o],r=i.sortData[s],a=n.sortData[s];if(r>a||r<a){var u=void 0!==e[s]?e[s]:e,h=u?1:-1;return(r>a?1:-1)*h}}return 0}}var u=t.jQuery,h=String.prototype.trim?function(t){return t.trim()}:function(t){return t.replace(/^\s+|\s+$/g,"")},d=e.create("isotope",{layoutMode:"masonry",isJQueryFiltering:!0,sortAscending:!0});d.Item=s,d.LayoutMode=r;var l=d.prototype;l._create=function(){this.itemGUID=0,this._sorters={},this._getSorters(),e.prototype._create.call(this),this.modes={},this.filteredItems=this.items,this.sortHistory=["original-order"];for(var t in r.modes)this._initLayoutMode(t)},l.reloadItems=function(){this.itemGUID=0,e.prototype.reloadItems.call(this)},l._itemize=function(){for(var t=e.prototype._itemize.apply(this,arguments),i=0;i<t.length;i++){var n=t[i];n.id=this.itemGUID++}return this._updateItemsSortData(t),t},l._initLayoutMode=function(t){var e=r.modes[t],i=this.options[t]||{};this.options[t]=e.options?o.extend(e.options,i):i,this.modes[t]=new e(this)},l.layout=function(){return!this._isLayoutInited&&this._getOption("initLayout")?void this.arrange():void this._layout()},l._layout=function(){var t=this._getIsInstant();this._resetLayout(),this._manageStamps(),this.layoutItems(this.filteredItems,t),this._isLayoutInited=!0},l.arrange=function(t){this.option(t),this._getIsInstant();var e=this._filter(this.items);this.filteredItems=e.matches,this._bindArrangeComplete(),this._isInstant?this._noTransition(this._hideReveal,[e]):this._hideReveal(e),this._sort(),this._layout()},l._init=l.arrange,l._hideReveal=function(t){this.reveal(t.needReveal),this.hide(t.needHide)},l._getIsInstant=function(){var t=this._getOption("layoutInstant"),e=void 0!==t?t:!this._isLayoutInited;return this._isInstant=e,e},l._bindArrangeComplete=function(){function t(){e&&i&&n&&o.dispatchEvent("arrangeComplete",null,[o.filteredItems])}var e,i,n,o=this;this.once("layoutComplete",function(){e=!0,t()}),this.once("hideComplete",function(){i=!0,t()}),this.once("revealComplete",function(){n=!0,t()})},l._filter=function(t){var e=this.options.filter;e=e||"*";for(var i=[],n=[],o=[],s=this._getFilterTest(e),r=0;r<t.length;r++){var a=t[r];if(!a.isIgnored){var u=s(a);u&&i.push(a),u&&a.isHidden?n.push(a):u||a.isHidden||o.push(a)}}return{matches:i,needReveal:n,needHide:o}},l._getFilterTest=function(t){return u&&this.options.isJQueryFiltering?function(e){return u(e.element).is(t)}:"function"==typeof t?function(e){return t(e.element)}:function(e){return n(e.element,t)}},l.updateSortData=function(t){var e;t?(t=o.makeArray(t),e=this.getItems(t)):e=this.items,this._getSorters(),this._updateItemsSortData(e)},l._getSorters=function(){var t=this.options.getSortData;for(var e in t){var i=t[e];this._sorters[e]=f(i)}},l._updateItemsSortData=function(t){for(var e=t&&t.length,i=0;e&&i<e;i++){var n=t[i];n.updateSortData()}};var f=function(){function t(t){if("string"!=typeof t)return t;var i=h(t).split(" "),n=i[0],o=n.match(/^\[(.+)\]$/),s=o&&o[1],r=e(s,n),a=d.sortDataParsers[i[1]];
return t=a?function(t){return t&&a(r(t))}:function(t){return t&&r(t)}}function e(t,e){return t?function(e){return e.getAttribute(t)}:function(t){var i=t.querySelector(e);return i&&i.textContent}}return t}();d.sortDataParsers={parseInt:function(t){return parseInt(t,10)},parseFloat:function(t){return parseFloat(t)}},l._sort=function(){var t=this.options.sortBy;if(t){var e=[].concat.apply(t,this.sortHistory),i=a(e,this.options.sortAscending);this.filteredItems.sort(i),t!=this.sortHistory[0]&&this.sortHistory.unshift(t)}},l._mode=function(){var t=this.options.layoutMode,e=this.modes[t];if(!e)throw new Error("No layout mode: "+t);return e.options=this.options[t],e},l._resetLayout=function(){e.prototype._resetLayout.call(this),this._mode()._resetLayout()},l._getItemLayoutPosition=function(t){return this._mode()._getItemLayoutPosition(t)},l._manageStamp=function(t){this._mode()._manageStamp(t)},l._getContainerSize=function(){return this._mode()._getContainerSize()},l.needsResizeLayout=function(){return this._mode().needsResizeLayout()},l.appended=function(t){var e=this.addItems(t);if(e.length){var i=this._filterRevealAdded(e);this.filteredItems=this.filteredItems.concat(i)}},l.prepended=function(t){var e=this._itemize(t);if(e.length){this._resetLayout(),this._manageStamps();var i=this._filterRevealAdded(e);this.layoutItems(this.filteredItems),this.filteredItems=i.concat(this.filteredItems),this.items=e.concat(this.items)}},l._filterRevealAdded=function(t){var e=this._filter(t);return this.hide(e.needHide),this.reveal(e.matches),this.layoutItems(e.matches,!0),e.matches},l.insert=function(t){var e=this.addItems(t);if(e.length){var i,n,o=e.length;for(i=0;i<o;i++)n=e[i],this.element.appendChild(n.element);var s=this._filter(e).matches;for(i=0;i<o;i++)e[i].isLayoutInstant=!0;for(this.arrange(),i=0;i<o;i++)delete e[i].isLayoutInstant;this.reveal(s)}};var c=l.remove;return l.remove=function(t){t=o.makeArray(t);var e=this.getItems(t);c.call(this,t);for(var i=e&&e.length,n=0;i&&n<i;n++){var s=e[n];o.removeFrom(this.filteredItems,s)}},l.shuffle=function(){for(var t=0;t<this.items.length;t++){var e=this.items[t];e.sortData.random=Math.random()}this.options.sortBy="random",this._sort(),this._layout()},l._noTransition=function(t,e){var i=this.options.transitionDuration;this.options.transitionDuration=0;var n=t.apply(this,e);return this.options.transitionDuration=i,n},l.getFilteredItemElements=function(){return this.filteredItems.map(function(t){return t.element})},d});
!function(a,b){"function"==typeof define&&define.amd?define("packery/js/rect",b):"object"==typeof module&&module.exports?module.exports=b():(a.Packery=a.Packery||{},a.Packery.Rect=b())}(window,function(){function a(b){for(var c in a.defaults)this[c]=a.defaults[c];for(c in b)this[c]=b[c]}a.defaults={x:0,y:0,width:0,height:0};var b=a.prototype;return b.contains=function(a){var b=a.width||0,c=a.height||0;return this.x<=a.x&&this.y<=a.y&&this.x+this.width>=a.x+b&&this.y+this.height>=a.y+c},b.overlaps=function(a){var b=this.x+this.width,c=this.y+this.height,d=a.x+a.width,e=a.y+a.height;return this.x<d&&b>a.x&&this.y<e&&c>a.y},b.getMaximalFreeRects=function(b){if(!this.overlaps(b))return!1;var c,d=[],e=this.x+this.width,f=this.y+this.height,g=b.x+b.width,h=b.y+b.height;return this.y<b.y&&(c=new a({x:this.x,y:this.y,width:this.width,height:b.y-this.y}),d.push(c)),e>g&&(c=new a({x:g,y:this.y,width:e-g,height:this.height}),d.push(c)),f>h&&(c=new a({x:this.x,y:h,width:this.width,height:f-h}),d.push(c)),this.x<b.x&&(c=new a({x:this.x,y:this.y,width:b.x-this.x,height:this.height}),d.push(c)),d},b.canFit=function(a){return this.width>=a.width&&this.height>=a.height},a}),function(a,b){if("function"==typeof define&&define.amd)define("packery/js/packer",["./rect"],b);else if("object"==typeof module&&module.exports)module.exports=b(require("./rect"));else{var c=a.Packery=a.Packery||{};c.Packer=b(c.Rect)}}(window,function(a){function b(a,b,c){this.width=a||0,this.height=b||0,this.sortDirection=c||"downwardLeftToRight",this.reset()}var c=b.prototype;c.reset=function(){this.spaces=[];var b=new a({x:0,y:0,width:this.width,height:this.height});this.spaces.push(b),this.sorter=d[this.sortDirection]||d.downwardLeftToRight},c.pack=function(a){for(var b=0;b<this.spaces.length;b++){var c=this.spaces[b];if(c.canFit(a)){this.placeInSpace(a,c);break}}},c.columnPack=function(a){for(var b=0;b<this.spaces.length;b++){var c=this.spaces[b],d=c.x<=a.x&&c.x+c.width>=a.x+a.width&&c.height>=a.height-.01;if(d){a.y=c.y,this.placed(a);break}}},c.rowPack=function(a){for(var b=0;b<this.spaces.length;b++){var c=this.spaces[b],d=c.y<=a.y&&c.y+c.height>=a.y+a.height&&c.width>=a.width-.01;if(d){a.x=c.x,this.placed(a);break}}},c.placeInSpace=function(a,b){a.x=b.x,a.y=b.y,this.placed(a)},c.placed=function(a){for(var b=[],c=0;c<this.spaces.length;c++){var d=this.spaces[c],e=d.getMaximalFreeRects(a);e?b.push.apply(b,e):b.push(d)}this.spaces=b,this.mergeSortSpaces()},c.mergeSortSpaces=function(){b.mergeRects(this.spaces),this.spaces.sort(this.sorter)},c.addSpace=function(a){this.spaces.push(a),this.mergeSortSpaces()},b.mergeRects=function(a){var b=0,c=a[b];a:for(;c;){for(var d=0,e=a[b+d];e;){if(e==c)d++;else{if(e.contains(c)){a.splice(b,1),c=a[b];continue a}c.contains(e)?a.splice(b+d,1):d++}e=a[b+d]}b++,c=a[b]}return a};var d={downwardLeftToRight:function(a,b){return a.y-b.y||a.x-b.x},rightwardTopToBottom:function(a,b){return a.x-b.x||a.y-b.y}};return b}),function(a,b){"function"==typeof define&&define.amd?define("packery/js/item",["outlayer/outlayer","./rect"],b):"object"==typeof module&&module.exports?module.exports=b(require("outlayer"),require("./rect")):a.Packery.Item=b(a.Outlayer,a.Packery.Rect)}(window,function(a,b){var c=document.documentElement.style,d="string"==typeof c.transform?"transform":"WebkitTransform",e=function(){a.Item.apply(this,arguments)},f=e.prototype=Object.create(a.Item.prototype),g=f._create;f._create=function(){g.call(this),this.rect=new b};var h=f.moveTo;return f.moveTo=function(a,b){var c=Math.abs(this.position.x-a),d=Math.abs(this.position.y-b),e=this.layout.dragItemCount&&!this.isPlacing&&!this.isTransitioning&&1>c&&1>d;return e?void this.goTo(a,b):void h.apply(this,arguments)},f.enablePlacing=function(){this.removeTransitionStyles(),this.isTransitioning&&d&&(this.element.style[d]="none"),this.isTransitioning=!1,this.getSize(),this.layout._setRectSize(this.element,this.rect),this.isPlacing=!0},f.disablePlacing=function(){this.isPlacing=!1},f.removeElem=function(){this.element.parentNode.removeChild(this.element),this.layout.packer.addSpace(this.rect),this.emitEvent("remove",[this])},f.showDropPlaceholder=function(){var a=this.dropPlaceholder;a||(a=this.dropPlaceholder=document.createElement("div"),a.className="packery-drop-placeholder",a.style.position="absolute"),a.style.width=this.size.width+"px",a.style.height=this.size.height+"px",this.positionDropPlaceholder(),this.layout.element.appendChild(a)},f.positionDropPlaceholder=function(){this.dropPlaceholder.style[d]="translate("+this.rect.x+"px, "+this.rect.y+"px)"},f.hideDropPlaceholder=function(){this.layout.element.removeChild(this.dropPlaceholder)},e}),function(a,b){"function"==typeof define&&define.amd?define("packery/js/packery",["get-size/get-size","outlayer/outlayer","./rect","./packer","./item"],b):"object"==typeof module&&module.exports?module.exports=b(require("get-size"),require("outlayer"),require("./rect"),require("./packer"),require("./item")):a.Packery=b(a.getSize,a.Outlayer,a.Packery.Rect,a.Packery.Packer,a.Packery.Item)}(window,function(a,b,c,d,e){function f(a,b){return a.position.y-b.position.y||a.position.x-b.position.x}function g(a,b){return a.position.x-b.position.x||a.position.y-b.position.y}function h(a,b){var c=b.x-a.x,d=b.y-a.y;return Math.sqrt(c*c+d*d)}c.prototype.canFit=function(a){return this.width>=a.width-1&&this.height>=a.height-1};var i=b.create("packery");i.Item=e;var j=i.prototype;j._create=function(){b.prototype._create.call(this),this.packer=new d,this.shiftPacker=new d,this.isEnabled=!0,this.dragItemCount=0;var a=this;this.handleDraggabilly={dragStart:function(){a.itemDragStart(this.element)},dragMove:function(){a.itemDragMove(this.element,this.position.x,this.position.y)},dragEnd:function(){a.itemDragEnd(this.element)}},this.handleUIDraggable={start:function(b,c){c&&a.itemDragStart(b.currentTarget)},drag:function(b,c){c&&a.itemDragMove(b.currentTarget,c.position.left,c.position.top)},stop:function(b,c){c&&a.itemDragEnd(b.currentTarget)}}},j._resetLayout=function(){this.getSize(),this._getMeasurements();var a,b,c;this._getOption("horizontal")?(a=1/0,b=this.size.innerHeight+this.gutter,c="rightwardTopToBottom"):(a=this.size.innerWidth+this.gutter,b=1/0,c="downwardLeftToRight"),this.packer.width=this.shiftPacker.width=a,this.packer.height=this.shiftPacker.height=b,this.packer.sortDirection=this.shiftPacker.sortDirection=c,this.packer.reset(),this.maxY=0,this.maxX=0},j._getMeasurements=function(){this._getMeasurement("columnWidth","width"),this._getMeasurement("rowHeight","height"),this._getMeasurement("gutter","width")},j._getItemLayoutPosition=function(a){if(this._setRectSize(a.element,a.rect),this.isShifting||this.dragItemCount>0){var b=this._getPackMethod();this.packer[b](a.rect)}else this.packer.pack(a.rect);return this._setMaxXY(a.rect),a.rect},j.shiftLayout=function(){this.isShifting=!0,this.layout(),delete this.isShifting},j._getPackMethod=function(){return this._getOption("horizontal")?"rowPack":"columnPack"},j._setMaxXY=function(a){this.maxX=Math.max(a.x+a.width,this.maxX),this.maxY=Math.max(a.y+a.height,this.maxY)},j._setRectSize=function(b,c){var d=a(b),e=d.outerWidth,f=d.outerHeight;(e||f)&&(e=this._applyGridGutter(e,this.columnWidth),f=this._applyGridGutter(f,this.rowHeight)),c.width=Math.min(e,this.packer.width),c.height=Math.min(f,this.packer.height)},j._applyGridGutter=function(a,b){if(!b)return a+this.gutter;b+=this.gutter;var c=a%b,d=c&&1>c?"round":"ceil";return a=Math[d](a/b)*b},j._getContainerSize=function(){return this._getOption("horizontal")?{width:this.maxX-this.gutter}:{height:this.maxY-this.gutter}},j._manageStamp=function(a){var b,d=this.getItem(a);if(d&&d.isPlacing)b=d.rect;else{var e=this._getElementOffset(a);b=new c({x:this._getOption("originLeft")?e.left:e.right,y:this._getOption("originTop")?e.top:e.bottom})}this._setRectSize(a,b),this.packer.placed(b),this._setMaxXY(b)},j.sortItemsByPosition=function(){var a=this._getOption("horizontal")?g:f;this.items.sort(a)},j.fit=function(a,b,c){var d=this.getItem(a);d&&(this.stamp(d.element),d.enablePlacing(),this.updateShiftTargets(d),b=void 0===b?d.rect.x:b,c=void 0===c?d.rect.y:c,this.shift(d,b,c),this._bindFitEvents(d),d.moveTo(d.rect.x,d.rect.y),this.shiftLayout(),this.unstamp(d.element),this.sortItemsByPosition(),d.disablePlacing())},j._bindFitEvents=function(a){function b(){d++,2==d&&c.dispatchEvent("fitComplete",null,[a])}var c=this,d=0;a.once("layout",b),this.once("layoutComplete",b)},j.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&(this.options.shiftPercentResize?this.resizeShiftPercentLayout():this.layout())},j.needsResizeLayout=function(){var b=a(this.element),c=this._getOption("horizontal")?"innerHeight":"innerWidth";return b[c]!=this.size[c]},j.resizeShiftPercentLayout=function(){var b=this._getItemsForLayout(this.items),c=this._getOption("horizontal"),d=c?"y":"x",e=c?"height":"width",f=c?"rowHeight":"columnWidth",g=c?"innerHeight":"innerWidth",h=this[f];if(h=h&&h+this.gutter){this._getMeasurements();var i=this[f]+this.gutter;b.forEach(function(a){var b=Math.round(a.rect[d]/h);a.rect[d]=b*i})}else{var j=a(this.element)[g]+this.gutter,k=this.packer[e];b.forEach(function(a){a.rect[d]=a.rect[d]/k*j})}this.shiftLayout()},j.itemDragStart=function(a){if(this.isEnabled){this.stamp(a);var b=this.getItem(a);b&&(b.enablePlacing(),b.showDropPlaceholder(),this.dragItemCount++,this.updateShiftTargets(b))}},j.updateShiftTargets=function(a){this.shiftPacker.reset(),this._getBoundingRect();var b=this._getOption("originLeft"),d=this._getOption("originTop");this.stamps.forEach(function(a){var e=this.getItem(a);if(!e||!e.isPlacing){var f=this._getElementOffset(a),g=new c({x:b?f.left:f.right,y:d?f.top:f.bottom});this._setRectSize(a,g),this.shiftPacker.placed(g)}},this);var e=this._getOption("horizontal"),f=e?"rowHeight":"columnWidth",g=e?"height":"width";this.shiftTargetKeys=[],this.shiftTargets=[];var h,i=this[f];if(i=i&&i+this.gutter){var j=Math.ceil(a.rect[g]/i),k=Math.floor((this.shiftPacker[g]+this.gutter)/i);h=(k-j)*i;for(var l=0;k>l;l++)this._addShiftTarget(l*i,0,h)}else h=this.shiftPacker[g]+this.gutter-a.rect[g],this._addShiftTarget(0,0,h);var m=this._getItemsForLayout(this.items),n=this._getPackMethod();m.forEach(function(a){var b=a.rect;this._setRectSize(a.element,b),this.shiftPacker[n](b),this._addShiftTarget(b.x,b.y,h);var c=e?b.x+b.width:b.x,d=e?b.y:b.y+b.height;if(this._addShiftTarget(c,d,h),i)for(var f=Math.round(b[g]/i),j=1;f>j;j++){var k=e?c:b.x+i*j,l=e?b.y+i*j:d;this._addShiftTarget(k,l,h)}},this)},j._addShiftTarget=function(a,b,c){var d=this._getOption("horizontal")?b:a;if(!(0!==d&&d>c)){var e=a+","+b,f=-1!=this.shiftTargetKeys.indexOf(e);f||(this.shiftTargetKeys.push(e),this.shiftTargets.push({x:a,y:b}))}},j.shift=function(a,b,c){var d,e=1/0,f={x:b,y:c};this.shiftTargets.forEach(function(a){var b=h(a,f);e>b&&(d=a,e=b)}),a.rect.x=d.x,a.rect.y=d.y};var k=120;j.itemDragMove=function(a,b,c){function d(){f.shift(e,b,c),e.positionDropPlaceholder(),f.layout()}var e=this.isEnabled&&this.getItem(a);if(e){b-=this.size.paddingLeft,c-=this.size.paddingTop;var f=this,g=new Date;this._itemDragTime&&g-this._itemDragTime<k?(clearTimeout(this.dragTimeout),this.dragTimeout=setTimeout(d,k)):(d(),this._itemDragTime=g)}},j.itemDragEnd=function(a){function b(){d++,2==d&&(c.element.classList.remove("is-positioning-post-drag"),c.hideDropPlaceholder(),e.dispatchEvent("dragItemPositioned",null,[c]))}var c=this.isEnabled&&this.getItem(a);if(c){clearTimeout(this.dragTimeout),c.element.classList.add("is-positioning-post-drag");var d=0,e=this;c.once("layout",b),this.once("layoutComplete",b),c.moveTo(c.rect.x,c.rect.y),this.layout(),this.dragItemCount=Math.max(0,this.dragItemCount-1),this.sortItemsByPosition(),c.disablePlacing(),this.unstamp(c.element)}},j.bindDraggabillyEvents=function(a){this._bindDraggabillyEvents(a,"on")},j.unbindDraggabillyEvents=function(a){this._bindDraggabillyEvents(a,"off")},j._bindDraggabillyEvents=function(a,b){var c=this.handleDraggabilly;a[b]("dragStart",c.dragStart),a[b]("dragMove",c.dragMove),a[b]("dragEnd",c.dragEnd)},j.bindUIDraggableEvents=function(a){this._bindUIDraggableEvents(a,"on")},j.unbindUIDraggableEvents=function(a){this._bindUIDraggableEvents(a,"off")},j._bindUIDraggableEvents=function(a,b){var c=this.handleUIDraggable;a[b]("dragstart",c.start)[b]("drag",c.drag)[b]("dragstop",c.stop)};var l=j.destroy;return j.destroy=function(){l.apply(this,arguments),this.isEnabled=!1},i.Rect=c,i.Packer=d,i}),function(a,b){"function"==typeof define&&define.amd?define(["isotope/js/layout-mode","packery/js/packery"],b):"object"==typeof module&&module.exports?module.exports=b(require("isotope-layout/js/layout-mode"),require("packery")):b(a.Isotope.LayoutMode,a.Packery)}(window,function(a,b){var c=a.create("packery"),d=c.prototype,e={_getElementOffset:!0,_getMeasurement:!0};for(var f in b.prototype)e[f]||(d[f]=b.prototype[f]);var g=d._resetLayout;d._resetLayout=function(){this.packer=this.packer||new b.Packer,this.shiftPacker=this.shiftPacker||new b.Packer,g.apply(this,arguments)};var h=d._getItemLayoutPosition;d._getItemLayoutPosition=function(a){return a.rect=a.rect||new b.Rect,h.call(this,a)};var i=d.needsResizeLayout;d.needsResizeLayout=function(){return this._getOption("horizontal")?this.needsVerticalResizeLayout():i.call(this)};var j=d._getOption;return d._getOption=function(a){return"horizontal"==a?void 0!==this.options.isHorizontal?this.options.isHorizontal:this.options.horizontal:j.apply(this.isotope,arguments)},c});
(function($){
"use strict";
$.fn.avia_masonry=function(options){
if(!this.length) return this;
var the_body=$('body'),
the_win=$(window),
isMobile=$.avia_utilities.isMobile,
loading=false,
methods={
masonry_filter: function(){
var current=$(this),
linktext=current.html(),
selector=current.data('filter'),
masonry=current.parents('.av-masonry:eq(0)'),
container=masonry.find('.av-masonry-container:eq(0)'),
links=masonry.find('.av-masonry-sort a'),
activeCat=masonry.find('.av-current-sort-title');
links.removeClass('active_sort');
current.addClass('active_sort');
container.attr('id', 'masonry_id_'+selector);
if(activeCat.length) activeCat.html(linktext);
methods.applyMasonry(container, selector, function(){
container.css({overflow:'visible'});
});
setTimeout(function(){ the_win.trigger('debouncedresize'); }, 500);
return false;
},
applyMasonry: function(container, selector, callback){
var filters=selector ? {filter: '.'+selector}:{};
filters['layoutMode']='packery';
filters['packery']={gutter:0};
filters['percentPosition']=true;
filters['itemSelector']="a.isotope-item, div.isotope-item";
container.isotope(filters, function(){
the_win.trigger('av-height-change');
});
if(typeof callback==='function'){
setTimeout(callback, 0);
}},
show_bricks: function(bricks, callback){
bricks.each(function(i){
var currentLink=$(this),
browserPrefix=$.avia_utilities.supports('transition'),
multiplier=isMobile ? 0:100;
setTimeout(function(){
if(browserPrefix===false){
currentLink.css({visibility:"visible", opacity:0}).animate({opacity:1},1500);
}else{
currentLink.addClass('av-masonry-item-loaded');
}
if(i==bricks.length - 1&&typeof callback=='function'){
callback.call();
the_win.trigger('av-height-change');
}}, (multiplier * i));
});
},
loadMore: function(e){
e.preventDefault();
if(loading) return false;
loading=true;
var current=$(this),
data=current.data(),
masonry=current.parents('.av-masonry:eq(0)'),
container=masonry.find('.av-masonry-container'),
items=masonry.find('.av-masonry-entry'),
loader=$.avia_utilities.loading(),
finished=function(){ loading=false; loader.hide(); the_body.trigger('av_resize_finished'); };
if(!data.offset){ data.offset=0; }
data.offset +=data.items;
data.action='avia_ajax_masonry_more';
data.loaded=[];
items.each(function(){
var item_id=$(this).data('av-masonry-item');
if(item_id) data.loaded.push(item_id);
});
$.ajax({
url: avia_framework_globals.ajaxurl,
type: "POST",
data:data,
beforeSend: function(){
loader.show();
},
success: function(response){
if(response.indexOf("{av-masonry-loaded}")!==-1){
var response=response.split('{av-masonry-loaded}'),
new_items=$(response.pop()).filter('.isotope-item');
if(new_items.length > data.items){
new_items=new_items.not(':last');
}else{
current.addClass('av-masonry-no-more-items');
}
var load_container=$('<div class="loadcontainer"></div>').append(new_items);
$.avia_utilities.preload({container: load_container, single_callback:  function(){
var links=masonry.find('.av-masonry-sort a'),
filter_container=masonry.find('.av-sort-by-term'),
allowed_filters=filter_container.data("av-allowed-sort");
filter_container.hide();
loader.hide();
container.isotope('insert', new_items);
$.avia_utilities.avia_ajax_call(masonry);
setTimeout(function(){ methods.show_bricks(new_items , finished); },150);
setTimeout(function(){ the_win.trigger('av-height-change'); }, 550);
if(links){
$(links).each(function(filterlinkindex){
var filterlink=$(this),
sort=filterlink.data('filter');
if(new_items){
$(new_items).each(function(itemindex){
var item=$(this);
if(item.hasClass(sort)&&allowed_filters.indexOf(sort)!==-1){
var term_count=filterlink.find('.avia-term-count').text();
filterlink.find('.avia-term-count').text(' ' + (parseInt(term_count) + 1) + ' ');
if(filterlink.hasClass('avia_hide_sort')){
filterlink.removeClass('avia_hide_sort').addClass('avia_show_sort');
masonry.find('.av-masonry-sort .'+sort+'_sep').removeClass('avia_hide_sort').addClass('avia_show_sort');
masonry.find('.av-masonry-sort .av-sort-by-term').removeClass('hidden');
}}
});
}});
}
filter_container.fadeIn();
}});
}else{
finished();
}},
error: finished,
complete: function(){
setTimeout(function(){ the_win.trigger('debouncedresize'); }, 500);
}});
}};
return this.each(function(){
var masonry=$(this),
container=masonry.find('.av-masonry-container'),
bricks=masonry.find('.isotope-item'),
filter=masonry.find('.av-masonry-sort').css({visibility:"visible", opacity:0}).on('click', 'a',  methods.masonry_filter),
load_more=masonry.find('.av-masonry-load-more').css({visibility:"visible", opacity:0});
$.avia_utilities.preload({container: container, single_callback:  function(){
var start_animation=function(){
filter.animate({opacity:1}, 400);
if(container.outerHeight() + container.offset().top + $('#footer').outerHeight() > $(window).height()){
$('html').css({'overflow-y':'scroll'});
}
methods.applyMasonry(container, false, function(){
masonry.addClass('avia_sortable_active');
container.removeClass('av-js-disabled ');
});
methods.show_bricks(bricks, function(){
load_more.css({opacity:1}).on('click',  methods.loadMore);
});
};
if(isMobile){
start_animation();
}else{
masonry.waypoint(start_animation , { offset: '80%'});
}
$(window).on('debouncedresize', function(){
methods.applyMasonry(container, false, function(){
masonry.addClass('avia_sortable_active');
});
});
}});
});
};}(jQuery));
(function($){
"use strict";
$.avia_utilities=$.avia_utilities||{};
$(document).ready(function(){
$.avia_utilities=$.avia_utilities||{};
if($.avia_utilities.avia_sticky_submenu)
$.avia_utilities.avia_sticky_submenu();
});
$.avia_utilities.avia_sticky_submenu=function(){
var win=$(window),
html=$('html:first'),
header=$('.html_header_top.html_header_sticky #header'),
html_margin=parseInt($('html:first').css('margin-top'), 10),
setWitdth=$('.html_header_sidebar #main, .boxed #main'),
menus=$('.av-submenu-container'),
bordermod=html.is('.html_minimal_header') ? 0:1,
fixed_frame=$('.av-frame-top').height(),
calc_margin=function(){
html_margin=parseInt(html.css('margin-top'), 10);
if(!$('.mobile_menu_toggle:visible').length){
$('.av-open-submenu').removeClass('av-open-submenu');
}
menus.filter('.av-sticky-submenu').each(function(){
$(this).next('.sticky_placeholder').height($(this).height());
});
},
calc_values=function(){
var content_width=setWitdth.width();
html_margin=parseInt(html.css('margin-top'), 10);
menus.width(content_width);
},
check=function(placeholder, no_timeout){
var menu_pos=this.offset().top,
top_pos=placeholder.offset().top,
scrolled=win.scrollTop(),
modifier=html_margin, fixed=false;
if(header.length){
modifier +=header.outerHeight() + parseInt(header.css('margin-top'), 10);
}
if(fixed_frame){
modifier +=fixed_frame;
}
if(scrolled + modifier > top_pos){
if(!fixed){
this.css({top: modifier - bordermod, position: 'fixed'});fixed=true
}}else{
this.css({top: 'auto', position: 'absolute'});fixed=false
}},
toggle=function(e){
e.preventDefault();
var clicked=$(this),
menu=clicked.siblings('.av-subnav-menu');
if(menu.hasClass('av-open-submenu')){
menu.removeClass('av-open-submenu');
}else{
menu.addClass('av-open-submenu');
}};
win.on("debouncedresize av-height-change",  calc_margin); calc_margin();
if(setWitdth.length){
win.on("debouncedresize av-height-change",  calc_values);
calc_values();
}
menus.each(function(){
var menu=$(this), sticky=menu.filter('.av-sticky-submenu'),  placeholder=menu.next('.sticky_placeholder'), mobile_button=menu.find('.mobile_menu_toggle');
if(sticky.length) win.on('scroll',  function(){ window.requestAnimationFrame($.proxy(check, sticky, placeholder))});
if(mobile_button.length){
mobile_button.on('click',  toggle);
}});
html.on('click', '.av-submenu-hidden .av-open-submenu li a', function(){
var current=$(this);
var list_item=current.siblings('ul, .avia_mega_div');
if(list_item.length){
if(list_item.hasClass('av-visible-sublist')){
list_item.removeClass('av-visible-sublist');
}else{
list_item.addClass('av-visible-sublist');
}
return false;
}});
$('.avia_mobile').on('click', '.av-menu-mobile-disabled li a', function(){
var current=$(this);
var list_item=current.siblings('ul');
if(list_item.length){
if(list_item.hasClass('av-visible-mobile-sublist')){
}else{
$('.av-visible-mobile-sublist').removeClass('av-visible-mobile-sublist');
list_item.addClass('av-visible-mobile-sublist');
return false;
}}
});
}}(jQuery));
(function($){
"use strict";
$.fn.avia_sc_messagebox=function (options){
"use strict";
return this.each(function (){
var container=$(this),
close_btn=container.find('.av_message_close'),
mbox_ID=container.attr('id'),
aviaSetCookie=function(CookieName,CookieValue,CookieDays){
if(CookieDays){
var date=new Date();
date.setTime(date.getTime()+(CookieDays*24*60*60*1000));
var expires="; expires="+date.toGMTString();
}
else var expires="";
document.cookie=CookieName+"="+CookieValue+expires+"; path=/";
},
aviaGetCookie=function(CookieName){
var docCookiesStr=CookieName + "=";
var docCookiesArr=document.cookie.split(';');
for(var i=0; i < docCookiesArr.length; i++){
var thisCookie=docCookiesArr[i];
while (thisCookie.charAt(0)==' '){
thisCookie=thisCookie.substring(1,thisCookie.length);
}
if(thisCookie.indexOf(docCookiesStr)==0){
var cookieContents=container.attr('data-contents');
var savedContents=thisCookie.substring(docCookiesStr.length,thisCookie.length);
if(savedContents==cookieContents){
return savedContents;
}}
}
return null;
};
if(! aviaGetCookie(mbox_ID)){
container.removeClass('messagebox-hidden');
}
close_btn.on('click', function(){
var cookieContents=container.attr('data-contents');
if(container.hasClass('messagebox-session_cookie')){
var cookieLifetime="";
}
else if(container.hasClass('messagebox-custom_cookie')){
var cookieLifetime=parseInt(container.attr('data-cookielifetime'));
}
aviaSetCookie(mbox_ID,cookieContents,cookieLifetime);
container.addClass('messagebox-hidden');
});
});
};
$('.avia_message_box').avia_sc_messagebox();
}(jQuery));
(function($){
$.fn.avia_sc_animated_number=function(options){
if(!this.length) return;
if(this.is('.avia_sc_animated_number_active')) return;
this.addClass('avia_sc_animated_number_active');
var skipStep=false,
simple_upcount=(options&&options.simple_up) ? true:false,
start_timer=(options&&options.start_timer) ? options.start_timer:300,
start_count=function(element, countTo, increment, current, fakeCountTo){
var newCount=current + increment;
if(newCount >=fakeCountTo){
element.text(countTo);
}else{
var prepend="", addZeros=countTo.toString().length - newCount.toString().length
for(var i=addZeros; i > 0; i--){ prepend +="0"; }
if(simple_upcount) prepend=0;
element.text(prepend + newCount);
window.requestAnimationFrame(function(){ start_count(element, countTo, increment, newCount, fakeCountTo) });
}};
return this.each(function(){
var number_container=$(this), elements=number_container.find('.__av-single-number'), countTimer=number_container.data('timer')||3000;
elements.each(function(i){
var element=$(this), text=element.text();
if(window.addEventListener) element.text(text.replace(/./g, "0")); 
});
number_container.addClass('number_prepared').on('avia_start_animation', function(){
if(number_container.is('.avia_animation_done')) return;
number_container.addClass('avia_animation_done');
elements.each(function(i){
var element=$(this), countTo=element.data('number'), fakeCountTo=countTo, current=parseInt(element.text(),10), zeroOnly=/^0+$/.test(countTo), increment=0;
if(zeroOnly&&countTo!==0) fakeCountTo=countTo.replace(/0/g, '9');
increment=Math.round(fakeCountTo * 32 / countTimer);
if(increment==0||increment % 10==0) increment +=1;
setTimeout(function(){ start_count(element, countTo, increment, current, fakeCountTo);}, start_timer);
});
});
if(options&&options.instant_start==true){
number_container.trigger('avia_start_animation');
}});
}})(jQuery);
(function($){
"use strict";
$.avia_utilities=$.avia_utilities||{};
$.fn.avia_iso_sort=function(options){
return this.each(function(){
var the_body=$('body'),
container=$(this),
portfolio_id=container.data('portfolio-id'),
parentContainer=container.parents('.entry-content-wrapper, .avia-fullwidth-portfolio'),
filter=parentContainer.find('.sort_width_container[data-portfolio-id="' + portfolio_id + '"]').find('#js_sort_items').css({visibility:"visible", opacity:0}),
links=filter.find('a'),
imgParent=container.find('.grid-image'),
isoActive=false,
items=$('.post-entry', container);
function applyIso(){
container.addClass('isotope_activated').isotope({
layoutMode:'fitRows', itemSelector:'.flex_column'
});
container.isotope('on', 'layoutComplete', function(){
container.css({overflow:'visible'});
the_body.trigger('av_resize_finished');
});
isoActive=true;
setTimeout(function(){ parentContainer.addClass('avia_sortable_active'); }, 0);
};
links.bind('click',function(){
var current=$(this),
selector=current.data('filter'),
linktext=current.html(),
activeCat=parentContainer.find('.av-current-sort-title');
if(activeCat.length) activeCat.html(linktext);
links.removeClass('active_sort');
current.addClass('active_sort');
container.attr('id', 'grid_id_'+selector);
parentContainer.find('.open_container .ajax_controlls .avia_close').trigger('click');
container.isotope({ layoutMode:'fitRows', itemSelector:'.flex_column' , filter: '.'+selector});
return false;
});
$(window).on('debouncedresize', function(){
applyIso();
});
$.avia_utilities.preload({container: container, single_callback:  function(){
filter.animate({opacity:1}, 400); applyIso();
setTimeout(function(){ applyIso(); });
imgParent.css({height:'auto'}).each(function(i){
var currentLink=$(this);
setTimeout(function(){
currentLink.animate({opacity:1},1500);
}, (100 * i));
});
}});
});
};
$.fn.avia_portfolio_preview=function(passed_options){
var win=$(window),
the_body=$('body'),
isMobile=$.avia_utilities.isMobile,
defaults =
{
open_in:	'.portfolio-details-inner',
easing:		'easeOutQuint',
timing:		800,
transition:	'slide' // 'fade' or 'slide'
},
options=$.extend({}, defaults, passed_options);
return this.each(function(){
var container=$(this),
portfolio_id=container.data('portfolio-id'),
target_wrap=$('.portfolio_preview_container[data-portfolio-id="' + portfolio_id + '"]'),
target_container=target_wrap.find(options.open_in),
items=container.find('.grid-entry'),
content_retrieved={},
is_open=false,
animating=false,
index_open=false,
ajax_call=false,
methods,
controls,
loader=$.avia_utilities.loading();
methods =
{
load_item: function(e){
e.preventDefault();
var link=$(this),
post_container=link.parents('.post-entry:eq(0)'),
post_id="ID_" + post_container.data('ajax-id'),
clickedIndex=items.index(post_container);
if(post_id===is_open||animating==true){
return false;
}
animating=true;
container.find('.active_portfolio_item').removeClass('active_portfolio_item');
post_container.addClass('active_portfolio_item');
loader.show();
methods.ajax_get_contents(post_id, clickedIndex);
},
scroll_top: function(){
setTimeout(function(){
var target_offset=target_wrap.offset().top - 175,
window_offset=win.scrollTop();
if(window_offset > target_offset||target_offset - window_offset > 100){
$('html:not(:animated),body:not(:animated)').animate({ scrollTop: target_offset }, options.timing, options.easing);
}},10);
},
attach_item: function(post_id){
content_retrieved[post_id]=$(content_retrieved[post_id]).appendTo(target_container);
ajax_call=true;
},
remove_video: function(){
var del=target_wrap.find('iframe, .avia-video').parents('.ajax_slide:not(.open_slide)');
if(del.length > 0){
del.remove();
content_retrieved["ID_" + del.data('slideId')]=undefined;
}},
show_item: function(post_id, clickedIndex){
if(post_id===is_open){
return false;
}
animating=true;
loader.hide();
if(false===is_open){
target_wrap.addClass('open_container');
content_retrieved[post_id].addClass('open_slide');
methods.scroll_top();
target_wrap.css({display:'none'}).slideDown(options.timing, options.easing, function(){
if(ajax_call){
$.avia_utilities.activate_shortcode_scripts(content_retrieved[post_id]);
$.avia_utilities.avia_ajax_call(content_retrieved[post_id]);
the_body.trigger('av_resize_finished');
ajax_call=false;
}
methods.remove_video();
the_body.trigger('av_resize_finished');
});
index_open=clickedIndex;
is_open=post_id;
animating=false;
}else{
methods.scroll_top();
var initCSS={ zIndex:3 },
easing=options.easing;
if(index_open > clickedIndex){ initCSS.left='-110%'; }
if(options.transition==='fade'){ initCSS.left='0%'; initCSS.opacity=0; easing='easeOutQuad'; }
target_container.height(target_container.height());
content_retrieved[post_id].css(initCSS).avia_animate({'left':"0%", opacity:1}, options.timing, easing);
content_retrieved[is_open].avia_animate({opacity:0}, options.timing, easing, function(){
content_retrieved[is_open].attr({'style':""}).removeClass('open_slide');
content_retrieved[post_id].addClass('open_slide');
target_container.avia_animate({height: content_retrieved[post_id].outerHeight() + 2}, options.timing/2, options.easing, function(){
target_container.attr({'style':""});
is_open=post_id;
index_open=clickedIndex;
animating=false;
methods.remove_video();
if(ajax_call){
the_body.trigger('av_resize_finished');
$.avia_utilities.activate_shortcode_scripts(content_retrieved[post_id]);
$.avia_utilities.avia_ajax_call(content_retrieved[post_id]);
ajax_call=false;
}});
});
}},
ajax_get_contents: function(post_id, clickedIndex){
if(content_retrieved[post_id]!==undefined){
methods.show_item(post_id, clickedIndex);
return;
}
content_retrieved[post_id]=$('#avia-tmpl-portfolio-preview-' + post_id.replace(/ID_/,"")).html();
content_retrieved[post_id]=content_retrieved[post_id].replace('','').replace('*]]>','');
methods.attach_item(post_id);
$.avia_utilities.preload({container: content_retrieved[post_id] , single_callback:  function(){ methods.show_item(post_id, clickedIndex); }});
},
add_controls: function(){
controls=target_wrap.find('.ajax_controlls');
target_wrap.avia_keyboard_controls({27:'.avia_close', 37:'.ajax_previous', 39:'.ajax_next'});
items.each(function(){
var current=$(this), overlay;
current.addClass('no_combo').bind('click', function(event){
overlay=current.find('.slideshow_overlay');
if(overlay.length){
event.stopPropagation();
methods.load_item.apply(current.find('a:eq(0)'));
return false;
}});
});
},
control_click: function(){
var showItem,
activeID=container.find('.active_portfolio_item').data('ajax-id'),
active=container.find('.post-entry-'+activeID);
switch(this.hash){
case '#next':
showItem=active.nextAll('.post-entry:visible:eq(0)').find('a:eq(0)');
if(!showItem.length){ showItem=$('.post-entry:visible:eq(0)', container).find('a:eq(0)'); }
showItem.trigger('click');
break;
case '#prev':
showItem=active.prevAll('.post-entry:visible:eq(0)').find('a:eq(0)');
if(!showItem.length){ showItem=$('.post-entry:visible:last', container).find('a:eq(0)'); }
showItem.trigger('click');
break;
case '#close':
animating=true;
target_wrap.slideUp(options.timing, options.easing, function(){
container.find('.active_portfolio_item').removeClass('active_portfolio_item');
content_retrieved[is_open].attr({'style':""}).removeClass('open_slide');
target_wrap.removeClass('open_container');
animating=is_open=index_open=false;
methods.remove_video();
the_body.trigger('av_resize_finished');
});
break;
}
return false;
},
resize_reset: function(){
if(is_open===false){
target_container.html('');
content_retrieved=[];
}}
};
methods.add_controls();
container.on("click", "a", methods.load_item);
controls.on("click", "a", methods.control_click);
if(jQuery.support.leadingWhitespace){ win.bind('debouncedresize', methods.resize_reset); }});
};}(jQuery));
(function($){
"use strict";
$.fn.avia_sc_progressbar=function(options){
return this.each(function(){
var container=$(this), elements=container.find('.avia-progress-bar');
container.on('avia_start_animation', function(){
elements.each(function(i){
var element=$(this)
setTimeout(function(){
element.find('.progress').addClass('avia_start_animation')
element.find('.progressbar-percent').avia_sc_animated_number({
instant_start:true, simple_up:true, start_timer: 10
});
}, (i * 250));
});
});
});
}}(jQuery));
(function($){
"use strict";
$.AviaVideoAPI=function(options, video, option_container){
this.videoElement=video;
this.$video=$(video);
this.$option_container=option_container ? $(option_container):this.$video;
this.load_btn=this.$option_container.find('.av-click-to-play-overlay');
this.video_wrapper=this.$video.parents('ul').eq(0);
this.lazy_load=this.video_wrapper.hasClass('av-show-video-on-click') ? true:false;
this.isMobile=$.avia_utilities.isMobile;
this.fallback=this.isMobile ? this.$option_container.is('.av-mobile-fallback-image'):false;
if(this.fallback) return;
this._init(options);
}
$.AviaVideoAPI.defaults={
loop: false,
mute: false,
controls: false,
events: 'play pause mute unmute loop toggle reset unload'
};
$.AviaVideoAPI.apiFiles =
{
youtube:{loaded: false, src: 'https://www.youtube.com/iframe_api' }}
$.AviaVideoAPI.players =
{
}
$.AviaVideoAPI.prototype =
{
_init: function(options){
this.options=this._setOptions(options);
this.type=this._getPlayerType();
this.player=false;
this._bind_player();
this.eventsBound=false;
this.playing=false;
this.$option_container.addClass('av-video-paused');
this.pp=$.avia_utilities.playpause(this.$option_container);
},
_setOptions: function(options){
var newOptions=$.extend(true, {}, $.AviaVideoAPI.defaults, options),
htmlData=this.$option_container.data(),
i="";
for (i in htmlData){
if(htmlData.hasOwnProperty(i)&&(typeof htmlData[i]==="string"||typeof htmlData[i]==="number"||typeof htmlData[i]==="boolean")){
newOptions[i]=htmlData[i];
}}
return newOptions;
},
_getPlayerType: function(){
var vid_src=this.$video.get(0).src||this.$video.data('src');
if(this.$video.is('video')) 				return 'html5';
if(this.$video.is('.av_youtube_frame')) 	return 'youtube';
if(vid_src.indexOf('vimeo.com')!=-1) 	return 'vimeo';
if(vid_src.indexOf('youtube.com')!=-1) 	return 'youtube';
},
_bind_player: function(){
var _self=this;
if(document.cookie.match(/aviaPrivacyVideoEmbedsDisabled/)){
this._use_external_link();
return;
}
if(this.lazy_load&&this.load_btn.length&&this.type!="html5"){
this.$option_container.addClass('av-video-lazyload');
this.load_btn.on('click', function(){
_self.load_btn.remove();
_self._setPlayer();
});
}else{
this.lazy_load=false;
this._setPlayer();
}},
_use_external_link: function(){
this.$option_container.addClass('av-video-lazyload');
this.load_btn.on('click', function(e){
if(e.originalEvent===undefined) return;
var src_url=$(this).parents('.avia-slide-wrap').find('div[data-original_url]').data('original_url');
if(src_url) window.open(src_url , '_blank');
});
},
_setPlayer: function(){
var _self=this;
switch(this.type){
case "html5":
this.player=this.$video.data('mediaelementplayer');
if(!this.player){
this.$video.data('mediaelementplayer', $.AviaVideoAPI.players[ this.$video.attr('id').replace(/_html5/,'') ]);
this.player=this.$video.data('mediaelementplayer');
}
this._playerReady();
break;
case "vimeo":
var ifrm=document.createElement("iframe");
var $ifrm=$(ifrm);
ifrm.onload=function(){
_self.player=Froogaloop(ifrm);
_self._playerReady();
_self.$option_container.trigger('av-video-loaded');
};
ifrm.setAttribute("src", this.$video.data('src'));
$ifrm.insertAfter(this.$video);
this.$video.remove();
this.$video=ifrm;
break;
case "youtube":
this._getAPI(this.type);
$('body').on('av-youtube-iframe-api-loaded', function(){ _self._playerReady(); });
break;
}},
_getAPI: function(api){
if($.AviaVideoAPI.apiFiles[api].loaded===false){
$.AviaVideoAPI.apiFiles[api].loaded=true;
var tag=document.createElement('script'),
first=document.getElementsByTagName('script')[0];
tag.src=$.AviaVideoAPI.apiFiles[api].src;
first.parentNode.insertBefore(tag, first);
}},
_playerReady: function(){
var _self=this;
this.$option_container.on('av-video-loaded', function(){ _self._bindEvents(); });
switch(this.type){
case "html5":
this.$video.on('av-mediajs-loaded', function(){ _self.$option_container.trigger('av-video-loaded'); });
this.$video.on('av-mediajs-ended' , function(){ _self.$option_container.trigger('av-video-ended');  });
break;
case "vimeo":
_self.player.addEvent('ready',  function(){ _self.$option_container.trigger('av-video-loaded');
_self.player.addEvent('finish', function(){ _self.$option_container.trigger('av-video-ended');  });
});
break;
case "youtube":
var params=_self.$video.data();
if(_self._supports_video()) params.html5=1;
_self.player=new YT.Player(_self.$video.attr('id'), {
videoId: params.videoid,
height: _self.$video.attr('height'),
width: _self.$video.attr('width'),
playerVars: params,
events: {
'onReady': function(){ _self.$option_container.trigger('av-video-loaded'); },
'onError': function(player){ $.avia_utilities.log('YOUTUBE ERROR:', 'error', player); },
'onStateChange': function(event){
if(event.data===YT.PlayerState.ENDED){
var command=_self.options.loop!=false ? 'loop':'av-video-ended';
_self.$option_container.trigger(command);
}}
}});
break;
}
setTimeout(function(){
if(_self.eventsBound==true||typeof _self.eventsBound=='undefined'||_self.type=='youtube'){ return; }
$.avia_utilities.log('Fallback Video Trigger "'+_self.type+'":', 'log', _self);
_self.$option_container.trigger('av-video-loaded');
},2000);
},
_bindEvents: function(){
if(this.eventsBound==true||typeof this.eventsBound=='undefined'){
return;
}
var _self=this, volume='unmute';
this.eventsBound=true;
this.$option_container.on(this.options.events, function(e){
_self.api(e.type);
});
if(!_self.isMobile){
if(this.options.mute!=false){ volume="mute"; 	 }
if(this.options.loop!=false){ _self.api('loop'); }
_self.api(volume);
}
setTimeout(function(){
_self.$option_container.trigger('av-video-events-bound').addClass('av-video-events-bound');
},50);
},
_supports_video: function(){
return !!document.createElement('video').canPlayType;
},
api: function(action){
if(this.isMobile&&!this.was_started()) return;
if(this.options.events.indexOf(action)===-1) return;
this.$option_container.trigger('av-video-'+action+'-executed');
if(typeof this[ '_' + this.type + '_' + action]=='function'){
this[ '_' + this.type + '_' + action].call(this);
}
if(typeof this[ '_' + action]=='function'){
this[ '_' + action].call(this);
}},
was_started: function(){
if(!this.player) return false;
switch(this.type){
case "html5":
if(this.player.getCurrentTime() > 0) return true;
break;
case "vimeo":
if(this.player.api('getCurrentTime') > 0) return true;
break;
case "youtube":
if(this.player.getPlayerState()!==-1) return true;
break;
}
return false;
},
_play: function(){
this.playing=true;
this.$option_container.addClass('av-video-playing').removeClass('av-video-paused');
},
_pause: function(){
this.playing=false;
this.$option_container.removeClass('av-video-playing').addClass('av-video-paused');
},
_loop: function(){
this.options.loop=true;
},
_toggle: function(){
var command=this.playing==true ? 'pause':'play';
this.api(command);
this.pp.set(command);
},
_vimeo_play: function(){
this.player.api('play');
},
_vimeo_pause: function(){
this.player.api('pause');
},
_vimeo_mute: function(){
this.player.api('setVolume', 0);
},
_vimeo_unmute: function(){
this.player.api('setVolume', 0.7);
},
_vimeo_loop: function(){
},
_vimeo_reset: function(){
this.player.api('seekTo',0);
},
_vimeo_unload: function(){
this.player.api('unload');
},
_youtube_play: function(){
this.player.playVideo();
},
_youtube_pause: function(){
this.player.pauseVideo()
},
_youtube_mute: function(){
this.player.mute();
},
_youtube_unmute: function(){
this.player.unMute();
},
_youtube_loop: function(){
if(this.playing==true) this.player.seekTo(0);
},
_youtube_reset: function(){
this.player.stopVideo();
},
_youtube_unload: function(){
this.player.clearVideo();
},
_html5_play: function(){
if(this.player){
this.player.options.pauseOtherPlayers=false;
this.player.play();
}},
_html5_pause: function(){
if(this.player) this.player.pause();
},
_html5_mute: function(){
if(this.player) this.player.setMuted(true);
},
_html5_unmute: function(){
if(this.player) this.player.setVolume(0.7);
},
_html5_loop: function(){
if(this.player) this.player.options.loop=true;
},
_html5_reset: function(){
if(this.player) this.player.setCurrentTime(0);
},
_html5_unload: function(){
this._html5_pause();
this._html5_reset();
}}
$.fn.aviaVideoApi=function(options , apply_to_parent){
return this.each(function(){
var applyTo=this;
if(apply_to_parent){
applyTo=$(this).parents(apply_to_parent).get(0);
}
var self=$.data(applyTo, 'aviaVideoApi');
if(!self){
self=$.data(applyTo, 'aviaVideoApi', new $.AviaVideoAPI(options, this, applyTo));
}});
}})(jQuery);
window.onYouTubeIframeAPIReady=function(){ jQuery('body').trigger('av-youtube-iframe-api-loaded'); };
var Froogaloop=(function(){
function Froogaloop(iframe){
return new Froogaloop.fn.init(iframe);
}
var eventCallbacks={},
hasWindowEvent=false,
isReady=false,
slice=Array.prototype.slice,
playerOrigin='*';
Froogaloop.fn=Froogaloop.prototype={
element: null,
init: function(iframe){
if(typeof iframe==="string"){
iframe=document.getElementById(iframe);
}
this.element=iframe;
return this;
},
api: function(method, valueOrCallback){
if(!this.element||!method){
return false;
}
var self=this,
element=self.element,
target_id=element.id!=='' ? element.id:null,
params = !isFunction(valueOrCallback) ? valueOrCallback:null,
callback=isFunction(valueOrCallback) ? valueOrCallback:null;
if(callback){
storeCallback(method, callback, target_id);
}
postMessage(method, params, element);
return self;
},
addEvent: function(eventName, callback){
if(!this.element){
return false;
}
var self=this,
element=self.element,
target_id=element.id!=='' ? element.id:null;
storeCallback(eventName, callback, target_id);
if(eventName!='ready'){
postMessage('addEventListener', eventName, element);
}
else if(eventName=='ready'&&isReady){
callback.call(null, target_id);
}
return self;
},
removeEvent: function(eventName){
if(!this.element){
return false;
}
var self=this,
element=self.element,
target_id=element.id!=='' ? element.id:null,
removed=removeCallback(eventName, target_id);
if(eventName!='ready'&&removed){
postMessage('removeEventListener', eventName, element);
}}
};
function postMessage(method, params, target){
if(!target.contentWindow.postMessage){
return false;
}
var data=JSON.stringify({
method: method,
value: params
});
target.contentWindow.postMessage(data, playerOrigin);
}
function onMessageReceived(event){
var data, method;
try {
data=JSON.parse(event.data);
method=data.event||data.method;
}
catch(e){
}
if(method=='ready'&&!isReady){
isReady=true;
}
if(!(/^https?:\/\/player.vimeo.com/).test(event.origin)){
return false;
}
if(playerOrigin==='*'){
playerOrigin=event.origin;
}
var value=data.value,
eventData=data.data,
target_id=target_id==='' ? null:data.player_id,
callback=getCallback(method, target_id),
params=[];
if(!callback){
return false;
}
if(value!==undefined){
params.push(value);
}
if(eventData){
params.push(eventData);
}
if(target_id){
params.push(target_id);
}
return params.length > 0 ? callback.apply(null, params):callback.call();
}
function storeCallback(eventName, callback, target_id){
if(target_id){
if(!eventCallbacks[target_id]){
eventCallbacks[target_id]={};}
eventCallbacks[target_id][eventName]=callback;
}else{
eventCallbacks[eventName]=callback;
}}
function getCallback(eventName, target_id){
if(target_id&&eventCallbacks[target_id]&&eventCallbacks[target_id][eventName]){
return eventCallbacks[target_id][eventName];
}else{
return eventCallbacks[eventName];
}}
function removeCallback(eventName, target_id){
if(target_id&&eventCallbacks[target_id]){
if(!eventCallbacks[target_id][eventName]){
return false;
}
eventCallbacks[target_id][eventName]=null;
}else{
if(!eventCallbacks[eventName]){
return false;
}
eventCallbacks[eventName]=null;
}
return true;
}
function isFunction(obj){
return !!(obj&&obj.constructor&&obj.call&&obj.apply);
}
function isArray(obj){
return toString.call(obj)==='[object Array]';
}
Froogaloop.fn.init.prototype=Froogaloop.fn;
if(window.addEventListener){
window.addEventListener('message', onMessageReceived, false);
}else{
window.attachEvent('onmessage', onMessageReceived);
}
return (window.Froogaloop=window.$f=Froogaloop);
})();
(function($){
"use strict";
$.AviaccordionSlider=function(options, slider){
this.$slider=$(slider);
this.$inner=this.$slider.find('.aviaccordion-inner');
this.$slides=this.$inner.find('.aviaccordion-slide');
this.$images=this.$inner.find('.aviaccordion-image');
this.$last=this.$slides.filter(':last');
this.$titles=this.$slider.find('.aviaccordion-preview');
this.$titlePos=this.$slider.find('.aviaccordion-preview-title-pos');
this.$titleWrap=this.$slider.find('.aviaccordion-preview-title-wrap');
this.$win=$(window);
if($.avia_utilities.supported.transition===undefined){
$.avia_utilities.supported.transition=$.avia_utilities.supports('transition');
}
this.browserPrefix=$.avia_utilities.supported.transition;
this.cssActive=this.browserPrefix!==false ? true:false;
this.transform3d=document.documentElement.className.indexOf('avia_transform3d')!==-1 ? true:false;
this.isMobile=$.avia_utilities.isMobile;
this.property=this.browserPrefix + 'transform',
this.count=this.$slides.length;
this.open=false;
this.autoplay=false;
this.increaseTitle=this.$slider.is(".aviaccordion-title-on-hover");
this._init(options);
}
$.AviaccordionSlider.prototype =
{
_init: function(options){
var _self=this;
_self.options=$.extend({}, options, this.$slider.data());
$.avia_utilities.preload({container: this.$slider , single_callback:  function(){ _self._kickOff(); }});
},
_kickOff: function(){
var _self=this;
_self._calcMovement();
_self._bindEvents();
_self._showImages();
_self._autoplay();
},
_autoplay: function(){
var _self=this;
if(_self.options.autoplay){
_self.autoplay=setInterval(function(){
_self.open=_self.open===false ? 0:_self.open + 1;
if(_self.open >=_self.count) _self.open=0;
_self._move({}, _self.open);
}, _self.options.interval * 1000)
}},
_showImages: function(){
var _self=this, counter=0, delay=300, title_delay=this.count * delay;
if(this.cssActive){
setTimeout(function(){ _self.$slider.addClass('av-animation-active'); } , 10);
}
this.$images.each(function(i){
var current=$(this), timer=delay * (i + 1);
setTimeout(function(){
current.avia_animate({opacity:1}, 400, function(){
current.css($.avia_utilities.supported.transition + "transform", "none");
});
},timer);
});
if(_self.increaseTitle) title_delay=0;
this.$titlePos.each(function(i){
var current=$(this), new_timer=title_delay + 100 * (i + 1);
setTimeout(function(){
current.avia_animate({opacity:1}, 200, function(){
current.css($.avia_utilities.supported.transition + "transform", "none");
});
},new_timer);
});
},
_bindEvents: function(){
var trigger=this.isMobile ? "click":"mouseenter";
this.$slider.on(trigger,'.aviaccordion-slide', $.proxy(this._move, this));
this.$slider.on('mouseleave','.aviaccordion-inner', $.proxy(this._move, this));
this.$win.on('debouncedresize', $.proxy(this._calcMovement, this));
this.$slider.on('av-prev av-next', $.proxy(this._moveTo, this));
if(this.isMobile){
this.$slider.avia_swipe_trigger({next: this.$slider, prev: this.$slider, event:{prev: 'av-prev', next: 'av-next'}});
}},
_titleHeight: function(){
var th=0;
this.$titleWrap.css({'height':'auto'}).each(function(){
var new_h=$(this).outerHeight();
if(new_h > th) th=new_h;
}).css({'height':th + 2});
},
_calcMovement: function(event, allow_repeat){
var _self=this,
containerWidth=this.$slider.width(),
defaultPos=this.$last.data('av-left'),
imgWidth=this.$images.filter(':last').width()||containerWidth,
imgWidthPercent=Math.floor((100 / containerWidth) * imgWidth),
allImageWidth=imgWidthPercent * _self.count,
modifier=3,
tempMinLeft=100 - imgWidthPercent,
minLeft=tempMinLeft > defaultPos / modifier ? tempMinLeft:0,
oneLeft=minLeft / (_self.count -1),
titleWidth=imgWidth;
if(allImageWidth < 110&&allow_repeat!==false){
var slideHeight=this.$slider.height(),
maxHeight=(slideHeight / allImageWidth) * 110 ;
this.$slider.css({'max-height': maxHeight});
_self._calcMovement(event, false);
return;
}
if(oneLeft < 2) minLeft=0;
this.$slides.each(function(i){
var current=$(this), newLeft=0, newRight=0, defaultLeft=current.data('av-left');
if(minLeft!==0){
newLeft=oneLeft * i;
newRight=imgWidthPercent + newLeft - oneLeft;
}else{
newLeft=defaultLeft / Math.abs(modifier);
newRight=100 - ((newLeft / i) * (_self.count - i));
}
if(i==1&&_self.increaseTitle){ titleWidth=newRight + 1; }
if(_self.cssActive){
newLeft=newLeft - defaultLeft;
newRight=newRight - defaultLeft;
defaultLeft=0;
}
current.data('av-calc-default', defaultLeft);
current.data('av-calc-left', newLeft);
current.data('av-calc-right', newRight);
});
if(_self.increaseTitle){ _self.$titles.css({width: titleWidth + "%"});}},
_moveTo: function(event){
var direction=event.type=="av-next" ? 1:-1,
nextSlide=this.open===false ? 0:this.open + direction;
if(nextSlide >=0&&nextSlide < this.$slides.length) this._move(event, nextSlide);
},
_move: function(event, direct_open){
var _self=this,
slide=event.currentTarget,
itemNo=typeof direct_open!="undefined" ? direct_open:this.$slides.index(slide);
this.open=itemNo;
if(_self.autoplay&&typeof slide!="undefined"){ clearInterval(_self.autoplay); _self.autoplay=false; }
this.$slides.removeClass('aviaccordion-active-slide').each(function(i){
var current=$(this),
dataSet=current.data(),
trans_val=i <=itemNo ? dataSet.avCalcLeft:dataSet.avCalcRight,
transition={},
reset=event.type=='mouseleave' ? 1:0,
active=itemNo===i ? _self.$titleWrap.eq(i):false;
if(active) current.addClass('aviaccordion-active-slide');
if(reset){
trans_val=dataSet.avCalcDefault;
this.open=false;
}
if(_self.cssActive){
transition[_self.property]=_self.transform3d ? "translate3d(" + trans_val  + "%, 0, 0)":"translate(" + trans_val + "%,0)";
current.css(transition);
}else{
transition.left=trans_val + "%";
current.stop().animate(transition, 700, 'easeOutQuint');
}});
}};
$.fn.aviaccordion=function(options){
return this.each(function(){
var active=$.data(this, 'AviaccordionSlider');
if(!active){
$.data(this, 'AviaccordionSlider', 1);
new $.AviaccordionSlider(options, this);
}});
}})(jQuery);
(function($){
"use strict";
$.AviaFullscreenSlider=function(options, slider){
this.$slider=$(slider);
this.$inner=this.$slider.find('.avia-slideshow-inner');
this.$innerLi=this.$inner.find('>li');
this.$caption=this.$inner.find('.avia-slide-wrap .caption_container');
this.$win=$(window);
this.isMobile=$.avia_utilities.isMobile;
this.property={};
this.scrollPos="0";
this.transform3d=document.documentElement.className.indexOf('avia_transform3d')!==-1 ? true:false;
this.ticking=false;
if($.avia_utilities.supported.transition===undefined){
$.avia_utilities.supported.transition=$.avia_utilities.supports('transition');
}
this._init(options);
}
$.AviaFullscreenSlider.defaults={
height: 100,
subtract: '#wpadminbar, #header, #main>.title_container'
};
$.AviaFullscreenSlider.prototype =
{
_init: function(options){
var _self=this;
this.options=$.extend(true, {}, $.AviaFullscreenSlider.defaults, options);
if(this.$slider.data('slide_height')) this.options.height=this.$slider.data('slide_height');
this.options.parallax_enabled=this.$slider.data('image_attachment')=="" ? true:false;
this.$subtract=$(this.options.subtract);
this._setSize();
this.$win.on('debouncedresize',  $.proxy(this._setSize, this));
setTimeout(function(){
if(!_self.isMobile&&_self.options.parallax_enabled){
_self.$win.on('scroll', $.proxy(_self._on_scroll, _self));
}},100);
this.$slider.aviaSlider({bg_slider:true});
},
_on_scroll: function(e){
var _self=this;
if(!_self.ticking){
_self.ticking=true;
window.requestAnimationFrame($.proxy(_self._parallax_scroll, _self));
}},
_fetch_properties: function(slide_height){
this.property.offset=this.$slider.offset().top;
this.property.wh=this.$win.height();
this.property.height=slide_height||this.$slider.outerHeight();
this._parallax_scroll();
},
_setSize: function(){
if(!$.fn.avia_browser_height){
var viewport=this.$win.height(),
slide_height=Math.ceil((viewport / 100) * this.options.height);
if(this.$subtract.length&&this.options.height==100){
this.$subtract.each(function(){
slide_height -=this.offsetHeight - 0.5;
});
}else{
slide_height -=1;
}
this.$slider.height(slide_height).removeClass('av-default-height-applied');
this.$inner.css('padding',0);
}
this._fetch_properties(slide_height);
},
_parallax_scroll: function(e){
if(this.isMobile||! this.options.parallax_enabled) return;
var winTop=this.$win.scrollTop(),
winBottom=winTop + this.property.wh,
scrollPos="0",
prop={}, prop2={};
if(this.property.offset < winTop&&winTop <=this.property.offset + this.property.height){
scrollPos=Math.round((winTop - this.property.offset) * 0.3);
}
if(this.scrollPos!=scrollPos){
this.scrollPos=scrollPos;
if(this.transform3d){
prop[$.avia_utilities.supported.transition+"transform"]="translate3d(0px,"+ scrollPos +"px,0px)";
}else{
prop[$.avia_utilities.supported.transition+"transform"]="translate(0px,"+ scrollPos +"px)";
}
this.$inner.css(prop);
}
this.ticking=false;
}};
$.fn.aviaFullscreenSlider=function(options){
return this.each(function(){
var active=$.data(this, 'aviaFullscreenSlider');
if(!active){
$.data(this, 'aviaFullscreenSlider', 1);
new $.AviaFullscreenSlider(options, this);
}});
}})(jQuery);
(function($){
"use strict";
$.fn.layer_slider_height_helper=function(options){
return this.each(function(){
var container=$(this),
first_div=container.find('>div:first'),
timeout=false,
counter=0,
reset_size=function(){
if(first_div.height() > 0||counter > 5){
container.height('auto');
}else{
timeout=setTimeout(reset_size, 500);
counter++;
}};
if(!first_div.length) return;
timeout=setTimeout(reset_size, 0);
});
}}(jQuery));
(function($){
"use strict";
$.fn.avia_sc_tab_section=function(){
var win=$(window),
browserPrefix=$.avia_utilities.supports('transition'),
cssActive=this.browserPrefix!==false ? true:false,
isMobile=$.avia_utilities.isMobile,
transform3d=document.documentElement.className.indexOf('avia_transform3d')!==-1 ? true:false,
transition={};
return this.each(function(){
var container=$(this),
tabs=container.find('.av-section-tab-title'),
tab_outer=container.find('.av-tab-section-outer-container'),
tab_wrap=container.find('.av-tab-section-tab-title-container'),
tab_nav=container.find('.av_tab_navigation'),
content_wrap=container.find('.av-tab-section-inner-container'),
single_tabs=container.find('.av-animation-delay-container'),
inner_content=container.find('.av-layout-tab-inner'),
sliding_active=container.is('.av-tab-slide-transition'),
flexible=container.is('.av-tab-content-auto'),
current_content=container.find('.__av_init_open'),
min_width=0,
change_tab=function(e, prevent_hash){
e.preventDefault();
var current_tab=$(e.currentTarget),
current_arrow=current_tab.find('.av-tab-arrow-container span'),
tab_nr=current_tab.data('av-tab-section-title');
current_content=container.find('[data-av-tab-section-content="'+tab_nr+'"]');
var new_bg=current_content.data('av-tab-bg-color'),
new_font=current_content.data('av-tab-color'),
prev_container=container.find('.av-active-tab-content').not('[data-av-tab-section-content="'+tab_nr+'"]');
tabs.attr('style','').removeClass('av-active-tab-title');
current_tab.addClass('av-active-tab-title');
current_content.addClass("av-active-tab-content");
if(new_bg!=="") current_arrow.css('background-color', new_bg);
if(new_font!=="") current_tab.css('color', new_font);
var new_pos=((parseInt(tab_nr,10) - 1) * -100);
if($('body').hasClass('rtl')){
new_pos=((parseInt(tab_nr,10) - 1) * 100);
}
if(cssActive){
new_pos=new_pos / tabs.length;
transition['transform']=transform3d ? "translate3d(" + new_pos  + "%, 0, 0)":"translate(" + new_pos + "%,0)";
transition['left']="0%";
content_wrap.css(transition);
}else{
content_wrap.css('left',  new_pos + "%");
}
set_tab_titlte_pos();
set_slide_height();
if(!prevent_hash) location.hash=current_tab.attr('href');
setTimeout(function(){
current_content.trigger('avia_start_animation_if_current_slide_is_active');
single_tabs.not(current_content).trigger('avia_remove_animation');
}, 600);
},
set_min_width=function(){
min_width=0;
tabs.each(function(){
min_width +=$(this).outerWidth();
});
tab_wrap.css('min-width',min_width);
},
set_slide_height=function(){
if(current_content.length&&flexible){
var old_height=inner_content.height();
inner_content.height('auto');
var height=current_content.find('.av-layout-tab-inner').height(),
add_height=tab_wrap.height();
tab_outer.css('max-height', height + add_height + 100);
inner_content.height(old_height);
inner_content.height(height);
inner_content.css('overflow', 'hidden');
setTimeout(function(){ win.trigger('av-height-change'); }, 600);
}},
set_tab_titlte_pos=function(){
var current_tab=container.find('.av-active-tab-title'),
viewport=container.width(),
left_pos=(current_tab.position().left * - 1) - (current_tab.outerWidth() / 2) + (viewport / 2);
if(! $('body').hasClass("rtl")){
if(viewport >=min_width){
left_pos=0;
}
if(left_pos + min_width < viewport) left_pos=(min_width - viewport) * -1;
if(left_pos > 0) left_pos=0;
tab_wrap.css('left',left_pos);
}else{
var right_pos=0;
if(viewport < min_width){
if(left_pos + min_width > viewport){
if(left_pos > 0) left_pos=0;
var right_pos=(left_pos + min_width - viewport) * -1;
tab_wrap.css('left', 'auto');
tab_wrap.css('right', right_pos);
}}
tab_wrap.css('left', 'auto');
tab_wrap.css('right', right_pos);
}},
switch_to_next_prev=function(e){
if(!isMobile) return;
var clicked=$(e.currentTarget),
current_tab=container.find('.av-active-tab-title');
if(clicked.is('.av_prev_tab_section')){
current_tab.prev('.av-section-tab-title').trigger('click');
}else{
current_tab.next('.av-section-tab-title').trigger('click');
}},
get_init_open=function(){
if(!hash&&window.location.hash) var hash=window.location.hash;
var open=tabs.filter('[href="'+hash+'"]');
if(open.length){
if(!open.is('.active_tab')) open.trigger('click');
}else{
container.find('.av-active-tab-title').trigger('click', true);
}};
$.avia_utilities.preload({
container: current_content ,
single_callback:  function(){
tabs.on('click', change_tab);
tab_nav.on('click', switch_to_next_prev);
win.on('debouncedresize', set_tab_titlte_pos);
win.on('debouncedresize av-content-el-height-changed', set_slide_height);
set_min_width();
set_slide_height();
get_init_open();
}});
content_wrap.avia_swipe_trigger({prev:'.av_prev_tab_section', next:'.av_next_tab_section'});
});
};}(jQuery));
(function($){
"use strict";
$.fn.avia_sc_tabs=function(options){
var defaults =
{
heading: '.tab',
content:'.tab_content',
active:'active_tab',
sidebar: false
};
var win=$(window),
options=$.extend(defaults, options);
return this.each(function(){
var container=$(this),
tab_titles=$('<div class="tab_titles"></div>').prependTo(container),
tabs=$(options.heading, container),
content=$(options.content, container),
newtabs=false,
oldtabs=false;
newtabs=tabs.clone();
oldtabs=tabs.addClass('fullsize-tab');
tabs=newtabs;
tabs.prependTo(tab_titles).each(function(i){
var tab=$(this), the_oldtab=false;
if(newtabs) the_oldtab=oldtabs.filter(':eq('+i+')');
tab.addClass('tab_counter_'+i).bind('click', function(){
open_content(tab, i, the_oldtab);
return false;
});
if(newtabs){
the_oldtab.bind('click', function(){
open_content(the_oldtab, i, tab);
return false;
});
}});
set_size();
trigger_default_open(false);
win.on("debouncedresize", set_size);
$('a').on('click',function(){
var hash=$(this).attr('href');
if(typeof hash!="undefined"&&hash){
hash=hash.replace(/^.*?#/,'');
trigger_default_open('#'+hash);
}});
function set_size(){
if(!options.sidebar) return;
content.css({'min-height': tab_titles.outerHeight() + 1});
}
function open_content(tab, i, alternate_tab){
if(!tab.is('.'+options.active)){
$('.'+options.active, container).removeClass(options.active);
$('.'+options.active+'_content', container).removeClass(options.active+'_content');
tab.addClass(options.active);
var new_loc=tab.data('fake-id');
if(typeof new_loc=='string') location.replace(new_loc);
if(alternate_tab) alternate_tab.addClass(options.active);
var active_c=content.filter(':eq('+i+')').addClass(options.active+'_content');
if(typeof click_container!='undefined'&&click_container.length){
sidebar_shadow.height(active_c.outerHeight());
}
var el_offset=active_c.offset().top,
scoll_target=el_offset - 50 - parseInt($('html').css('margin-top'),10);
if(win.scrollTop() > el_offset){
$('html:not(:animated),body:not(:animated)').scrollTop(scoll_target);
}}
win.trigger('av-content-el-height-changed', tab);
}
function trigger_default_open(hash){
if(!hash&&window.location.hash) hash=window.location.hash;
if(!hash) return;
var open=tabs.filter('[data-fake-id="'+hash+'"]');
if(open.length){
if(!open.is('.active_tab')) open.trigger('click');
window.scrollTo(0, container.offset().top - 70);
}}
});
};}(jQuery));
(function($){
"use strict";
$.fn.avia_sc_testimonial=function(options){
return this.each(function(){
var container=$(this), elements=container.find('.avia-testimonial');
container.on('avia_start_animation', function(){
elements.each(function(i){
var element=$(this);
setTimeout(function(){ element.addClass('avia_start_animation') }, (i * 150));
});
});
});
}}(jQuery));
(function($){
"use strict";
$(window).on('load', function (e){
if($.AviaSlider){
$('.avia-timeline-container').avia_sc_timeline();
}});
$.fn.avia_sc_timeline=function (options){
return this.each(function (){
var container=this,
timeline_id='#' + $(this).attr('id'),
timeline=$(timeline_id),
methods;
methods =
{
matchHeights: function(){
this.setMinHeight($(timeline_id + ' .av-milestone-placement-top .av-milestone-date'), true);
this.setMinHeight($(timeline_id + ' .av-milestone-placement-bottom .av-milestone-content-wrap'), true);
this.setMinHeight($(timeline_id + ' .av-milestone-placement-bottom.avia-timeline-boxshadow .av-milestone-contentbox'), false);
this.setMinHeight($(timeline_id + ' .av-milestone-placement-top.avia-timeline-boxshadow .av-milestone-contentbox'), false);
this.setMinHeight($(timeline_id + ' .avia-timeline-horizontal.av-milestone-placement-alternate li >:first-child'), true);
},
setMinHeight: function(els, setNav){
if(els.length < 2) return;
var elsHeights=new Array();
els.css('min-height','0').each(function(i){
var current=$(this);
var currentHeight=current.outerHeight(true);
elsHeights.push(currentHeight);
});
var largest=Math.max.apply(null, elsHeights);
els.css('min-height', largest);
if(setNav){
var $firstElement=els.first(),
$parent=$firstElement.closest('.avia-timeline-container'),
$pos=$firstElement.height();
$parent.find('.av-timeline-nav').css('top',$pos);
}},
createCarousel:function(e){
var self=this,
slider=$(timeline_id + '.avia-slideshow-carousel'),
slides_num=3,
slides_num_small=1;
if(timeline.attr('avia-data-slides')){
slides_num=parseInt(timeline.attr('avia-data-slides'));
}
if(slides_num >=2){
slides_num_small=2;
}
var sliderOptions={
carousel:'yes',
keep_pading:true,
carouselSlidesToShow:slides_num,
carouselSlidesToScroll:3,
carouselResponsive:[
{
breakpoint: 989,
settings: {
carouselSlidesToShow: slides_num_small,
carouselSlidesToScroll: slides_num_small,
}},
{
breakpoint: 767,
settings: {
carouselSlidesToShow: 1,
carouselSlidesToScroll: 1,
}}
],
}
slider.aviaSlider(sliderOptions);
slider.on('_kickOff',function(){
self.matchHeights();
});
$(window).on('resize', function(){
self.matchHeights();
});
},
layoutHelpers:function(e){
$(timeline_id + ' .avia-timeline-vertical li').each(function(index, element){
var $length=$(this).parents('ul').find('li').length;
var $icon_wrap=$(this).find('.av-milestone-icon-wrap');
var $icon_wrap_height=$icon_wrap.outerHeight(true);
var $icon_wrap_height_half=parseInt($icon_wrap_height/2);
if(index===($length - 1)){
$icon_wrap.css({
'height':$icon_wrap_height_half,
});
}else{
$icon_wrap.css({
'height':$icon_wrap_height,
});
}});
},
fireAnimations:function(e){
if($(timeline_id + ' > ul').hasClass('avia-timeline-vertical')){
var milestone=timeline.find('.av-milestone');
timeline.on('avia_start_animation', function(){
milestone.each(function(i){
var element=$(this);
setTimeout(function(){ element.addClass('avia_start_animation') }, (i * 350));
});
});
}}
};
methods.createCarousel();
methods.layoutHelpers();
methods.fireAnimations();
methods.matchHeights();
});
}})(jQuery);
(function($){
"use strict";
$.fn.avia_sc_toggle=function(options){
var defaults =
{
single: '.single_toggle',
heading: '.toggler',
content: '.toggle_wrap',
sortContainer:'.taglist'
};
var win=$(window),
options=$.extend(defaults, options);
return this.each(function(){
var container=$(this).addClass('enable_toggles'),
toggles=$(options.single, container),
heading=$(options.heading, container),
allContent=$(options.content, container),
sortLinks=$(options.sortContainer + " a", container);
heading.each(function(i){
var thisheading=$(this), content=thisheading.next(options.content, container);
function scroll_to_viewport(){
var el_offset=content.offset().top,
scoll_target=el_offset - 50 - parseInt($('html').css('margin-top'),10);
if(win.scrollTop() > el_offset){
$('html:not(:animated),body:not(:animated)').animate({scrollTop: scoll_target},200);
}}
if(content.css('visibility')!="hidden"){
thisheading.addClass('activeTitle');
}
thisheading.on('click', function(){
if(content.css('visibility')!="hidden"){
content.slideUp(200, function(){
content.removeClass('active_tc').attr({style:''});
win.trigger('av-height-change');
win.trigger('av-content-el-height-changed', this);
location.replace(thisheading.data('fake-id') + "-closed");
});
thisheading.removeClass('activeTitle');
}else{
if(container.is('.toggle_close_all')){
allContent.not(content).slideUp(200, function(){
$(this).removeClass('active_tc').attr({style:''});
scroll_to_viewport();
});
heading.removeClass('activeTitle');
}
content.addClass('active_tc');
setTimeout(function(){
content.slideDown(200,
function(){
if(!container.is('.toggle_close_all')){
scroll_to_viewport();
}
win.trigger('av-height-change');
win.trigger('av-content-el-height-changed', this);
}
);
}, 1);
thisheading.addClass('activeTitle');
location.replace(thisheading.data('fake-id'));
}});
});
sortLinks.click(function(e){
e.preventDefault();
var show=toggles.filter('[data-tags~="'+$(this).data('tag')+'"]'),
hide=toggles.not('[data-tags~="'+$(this).data('tag')+'"]');
sortLinks.removeClass('activeFilter');
$(this).addClass('activeFilter');
heading.filter('.activeTitle').trigger('click');
show.slideDown();
hide.slideUp();
});
function trigger_default_open(hash){
if(!hash&&window.location.hash) hash=window.location.hash;
if(!hash) return;
var open=heading.filter('[data-fake-id="'+hash+'"]');
if(open.length){
if(!open.is('.activeTitle')) open.trigger('click');
window.scrollTo(0, container.offset().top - 70);
}}
trigger_default_open(false);
$('a').on('click',function(){
var hash=$(this).attr('href');
if(typeof hash!="undefined"&&hash){
hash=hash.replace(/^.*?#/,'');
trigger_default_open('#'+hash);
}});
});
};}(jQuery));
(function($){
"use strict";
$('body').on('click','.av-lazyload-video-embed .av-click-to-play-overlay', function(e){
if(document.cookie.match(/aviaPrivacyVideoEmbedsDisabled/)){
if(e.originalEvent===undefined) return;
var src_url=$(this).parents('.avia-video').data('original_url');
if(src_url) window.open(src_url , '_blank');
return;
}
var clicked=$(this),
container=clicked.parents('.av-lazyload-video-embed'),
video=container.find('.av-video-tmpl').html();
container.html(video);
});
$('.av-lazyload-immediate .av-click-to-play-overlay').trigger('click');
}(jQuery));