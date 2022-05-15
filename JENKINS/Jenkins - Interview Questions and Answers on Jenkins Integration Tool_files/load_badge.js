var fallback_image = '//i.imgur.com/BqlDBG6.png';
var handle = function(elem,img,state){
	if ((typeof(elem.onerror) === 'function' && state === 'fail') || (elem.width === 0)) {
    	elem.src = img;
    }
};
function getImagePath(data){
	var value = 0;
	for (var i=0; i<data.length; i++){ value = ((27 * value) + data.charCodeAt(i)) & 0xfff; }
	var path = String.fromCharCode((value % 26) + 97) + "/" + String.fromCharCode((Math.floor(value / 26) % 26) + 97);
	return path;
}
var x = document.getElementById('webutation-link');
var imgNode = document.createElement("img");
if (typeof domain == 'undefined' || domain == '') {
	domain = window.location.hostname;
}
domain = domain.toLowerCase();
domain = domain.replace(/^www\./,'');
badge_url = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'www.webutation.net/';
if (domain == encodeURI(domain)) {
	badge_url += 'rating-badges/'+getImagePath(domain)+'/'+domain+'.png';
} else {
	badge_url += 'webmasters_badge?domain='+encodeURI(domain)+'&old=1';
}
imgNode.setAttribute('src', badge_url);
imgNode.setAttribute('alt', 'Webutation');
imgNode.setAttribute('height', '44');
imgNode.setAttribute('width', '158');
imgNode.setAttribute('id', 'webutation-badge-image');
imgNode.style.border = '0px';
imgNode.onerror = function(){ handle(this,fallback_image,'fail');return false; };
imgNode.onload  = function(){ handle(this,fallback_image,'');return false; };

x.innerHTML = '';
x.appendChild(imgNode);
