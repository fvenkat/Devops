(function($) {
    var uniqueCntr = 0;
    $.fn.scrolled = function (waitTime, fn) {
        if (typeof waitTime === "function") {
            fn = waitTime;
            waitTime = 500;
        };
        var tag = "scrollTimer" + uniqueCntr++;
        this.scroll(function () {
            var self = $(this);
            var timer = self.data(tag);
            if (timer) {
                clearTimeout(timer);
            };
            timer = setTimeout(function () {
                self.removeData(tag);
                fn.call(self[0]);
            }, waitTime);
            self.data(tag, timer);
        });
    };
})(jQuery);
jQuery(document).on('click','.nc_tweet, a.sw_CTT',function(event) {
	if(jQuery(this).hasClass('noPop')) {} else {
		event.preventDefault();
		href = jQuery(this).attr("data-link");
		href = href.replace("’","'");
		if (jQuery(this).hasClass("pinterest"))
		{
			height = 550;
			width = 700;
		} else {
			height = 270;
			width = 500;
		};
		instance = window.open("about:blank", "_blank", "height=" + height + ",width=" + width);
		instance.document.write("<meta http-equiv=\"refresh\" content=\"0;url="+href+"\">");
		instance.document.close();
		return false;
	};
});
function isOdd(num) { return num % 2;} 

function swSetWidths(resize) {
	if(typeof window.origSets === 'undefined' || resize) {
		
		window.origSets = new Array();
		jQuery('.nc_socialPanel').each( function() {
			var totalWidth 	= jQuery(this).width() - 2;
			var totalElements	= jQuery(this).attr('data-count');
			var average = parseInt(totalWidth) / parseInt(totalElements);
			var space = parseInt(totalWidth) - parseInt(totalElements);
			var offset = jQuery('.nc_socialPanel').offset();
			if(offset.left < 100 && offset.left > 50) {
				jQuery('.nc_tweetContainerSide').filter(':not(.totes)').find('.count').hide();
				jQuery('.nc_tweetContainerSide.totes').css({'height':'60px'});
				jQuery('.nc_tweetContainerSide').css({'width':'40px'});
			} else if(offset.left < 100) {
				jQuery('.nc_socialPanelSide').addClass('mobile');
			};
			if(totalWidth < 450) {
				if(jQuery(this).find('.totes').length) {
					if(jQuery(this).hasClass('connected')) {
						var average = (parseInt(totalWidth) / (parseInt(totalElements) - 1));
					} else {
						var average = (parseInt(totalWidth) / (parseInt(totalElements) - 1)) - 10;
					};
					var oddball = average * (totalElements - 1);
				} else {
					
					if(jQuery(this).hasClass('connected')) {
						var average = (parseInt(totalWidth) / (parseInt(totalElements)));
					} else {
						var average = (parseInt(totalWidth) / (parseInt(totalElements))) - 11;
					};
					var oddball = average * totalElements;
				};
				var oddball = totalWidth - oddball;
				jQuery(this).addClass('mobile').removeClass('notMobile');
				jQuery('.spaceManWilly').css({'width':'auto'});
				buttonWidths = 0;
				if(jQuery('.nc_outlinesColor').length || jQuery('.nc_outlinesOnly').length || jQuery('.nc_outlinesFull').length) {
					var outlines = true;	
				} else {
					var outlines = false;	
				};
				if(!jQuery('.count .iconFiller').length) {
					jQuery(this).find('.nc_tweetContainer.totes,.nc_tweetContainer .count').hide();
				} else {
					jQuery(this).find('.nc_tweetContainer.totes').hide();	
				};
				jQuery(this).find('.nc_tweetContainer').each(function() {
					width = jQuery(this).find('.iconFiller').width();
					if(outlines == true) {
						if(isOdd(average)) {
							marginLeft = Math.floor((average - width) / 2) - 1;	
							marginRight = Math.floor((average - width) / 2) - 1;
						} else {
							marginLeft = ((average - width) / 2) - 1;
							marginRight = ((average - width) / 2) - 1;
						};					
					} else {
						if(isOdd(average)) {
							marginLeft = Math.floor((average - width) / 2);	
							marginRight = Math.floor((average - width) / 2);
						} else {
							marginLeft = (average - width) / 2;
							marginRight = (average - width) / 2;
						};
					};
					jQuery(this).find('.iconFiller').css({'margin-left':marginLeft+'px','margin-right':marginRight+'px'});
				});
			// jQuery('.nc_tweetContainer').css({"padding-left":"4px","padding-right":"4px"});
			} else {
				jQuery(this).addClass('notMobile').removeClass('mobile');
				jQuery(this).find('.nc_tweetContainer.totes,.nc_tweetContainer .count').show();
				jQuery(this).find('.nc_tweetContainer .iconFiller').css({'margin-left':'0px','margin-right':'0px'});
				var average = Math.floor(average);
				var oddball = average * totalElements;
				var oddball = totalWidth - oddball;
				var totes = jQuery(this).find('.totes').outerWidth(true);
				if(totes > average) {
					newTotalWidth = totalWidth - totes;
					average = parseInt(newTotalWidth) / parseInt(totalElements - 1);
					average = Math.floor(average);
					oddball = average * (totalElements - 1);
					oddball = newTotalWidth - oddball;
				};
				count = 0;
				index = jQuery('.nc_socialPanel').index(jQuery(this));
				window.origSets[index] = new Array();
				jQuery(this).find('.nc_tweetContainer').each(function() {
					++count; 
					if(count > totalElements) {count = 1;}
					if(count <= oddball){add = 1} else {add = 2};
					curWidth = jQuery(this).outerWidth(true);
					dif = average - curWidth;
					dataId = jQuery(this).attr('data-id');
					dataId = parseInt(dataId);
					window.origSets[index][dataId] = new Array();
					if(isOdd(dif)){ 
						dif = dif - 1;
						dif = dif / 2;
						pl = dif+1+average;
						pr = dif+average;
						window.origSets[index][dataId]['pl'] = dif+1+'px';
						window.origSets[index][dataId]['pr'] = dif+'px';
						window.origSets[index][dataId]['fil'] = jQuery(this).find('.iconFiller').width()+'px';
						jQuery(this).find('.count').animate({
							"padding-left": window.origSets[index][dataId]['pl'],
							"padding-right": window.origSets[index][dataId]['pr']
							}, 50, "linear", function() {
								jQuery(this).css({transition : 'padding .1s linear'
							});		
						});
					} else {
						dif = dif / 2;
						pl = dif+average;
						pr = dif+average;
						window.origSets[index][dataId]['pl'] = dif+'px';
						window.origSets[index][dataId]['pr'] = dif+'px';
						window.origSets[index][dataId]['fil'] = jQuery(this).find('.iconFiller').width()+'px';
						jQuery(this).find('.count').animate({
							"padding-left": window.origSets[index][dataId]['pl'],
							"padding-right": window.origSets[index][dataId]['pr']
							}, 50, "linear", function() {	
								jQuery(this).css({transition : 'padding .1s linear'});
							});	
					};
					window.resized = true;
				}); 
			};
		});
	} else {
		jQuery('.nc_tweetContainer').each(function() {
			if(jQuery(this).parents('.nc_wrapper').length) {
				index = 'float';
			} else {	
				index = jQuery('.nc_socialPanel').index(jQuery(this).parent('.nc_socialPanel'));
			};
			dataId = parseInt(jQuery(this).attr('data-id'));
			if(typeof window.origSets === 'undefined') { } else {
				jQuery(this).find('.iconFiller').css({"width":window.origSets[index][dataId]['fil']});
				jQuery(this).find('.count').css({
					"padding-left": window.origSets[index][dataId]['pl'],
					"padding-right":  window.origSets[index][dataId]['pr']
				});
			};
		});
	};
};
//setTimeout(function() {
//	console.log(window.origSets);
//}, 3000 );
function createFloatBar() {
	var firstSocialPanel = jQuery('.nc_socialPanel').not('.mobile').first();
	var floatOption = firstSocialPanel.attr('data-float');
	if(floatOption) {
		backgroundColor = jQuery('.nc_socialPanel').attr('data-floatColor');
		jQuery('<div class="nc_wrapper" style="background-color:'+backgroundColor+'"></div>').appendTo('body');
		position = firstSocialPanel.attr('data-float');
		firstSocialPanel.clone().appendTo('.nc_wrapper');
		jQuery('.nc_wrapper').hide().addClass(position);
		width = firstSocialPanel.outerWidth(true);
		offset = firstSocialPanel.offset();
		jQuery('.nc_socialPanel').last().addClass('nc_floater').css(
			{
				'width':width,
				'left':offset.left,
			});
		jQuery('.nc_socialPanel .count').css({transition : 'padding .1s linear'});
		jQuery('.nc_socialPanel').eq(0).addClass('sw_one');
		jQuery('.nc_socialPanel').eq(2).addClass('sw_two');
		jQuery('.nc_socialPanel').eq(1).addClass('sw_three');
		if(floatOption == 'floatBottom') {
			jQuery('body').animate({'padding-bottom': '+=50px'}, 0);
		};
		window.origSets['float'] = window.origSets[0];
		swSetWidths();
	};
};
// Format Number functions
function ReplaceNumberWithCommas(nStr) {
  nStr += '';
  x = nStr.split('.');
  x1 = x[0];
  x2 = x.length > 1 ? '.' + x[1] : '';
  var rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, '$1' + ',' + '$2');
  };
  return x1 + x2;
};
function number_format( val ) {
    if( val < 1000 ){ 
	 	return ReplaceNumberWithCommas(val);
	 } else { 
	 	val = val/1000; 
		val = Math.round(val);
		return ReplaceNumberWithCommas(val)+'K';
	 };
};
// Twitter Shares Count

function floatingBar() {
	// Adjust the floating bar
	var panels = jQuery('.nc_socialPanel');
	var floatOption = panels.eq(0).attr('data-float');
	var windowElement = jQuery(window);
	var windowHeight = windowElement.height();
	var ncWrapper = jQuery('.nc_wrapper');
	var ncSideFloater = jQuery('.nc_socialPanelSide').filter(':not(.mobile)');
	var position = jQuery('.nc_socialPanel').attr('data-position');
	var lst = jQuery(window).scrollTop();
	jQuery(window).on('scroll', function() {
		offsetOne = panels.eq(0).offset();
		scrollPos = windowElement.scrollTop();
		var st = jQuery(this).scrollTop();
		if(floatOption == 'floatBottom') {
			if(position == 'both') {
				offsetTwo = panels.eq(1).offset();
				if(offsetOne.top < (scrollPos - 50) && offsetTwo.top > (scrollPos + windowHeight - 50) && st > lst) {
					ncWrapper.slideDown();
				} else if(offsetOne.top < (scrollPos - 50) && offsetTwo.top > (scrollPos + windowHeight - 50) && st < lst) {
					ncWrapper.show();
				} else if(offsetTwo.top < (scrollPos + (windowHeight / 2)) && offsetTwo.top > scrollPos ){
					ncWrapper.slideUp();
				} else if(offsetTwo.top < (scrollPos - 50)) {
					ncWrapper.slideDown();
				} else if(offsetTwo.top < (scrollPos + windowHeight - 50) && st > lst) {
					ncWrapper.hide();
				} else {
					ncWrapper.slideUp();
				};
			} else if(position == 'above') {
				if(offsetOne.top < (scrollPos - 60)) {
					ncWrapper.slideDown();	
				} else {
					ncWrapper.slideUp();
				};
			} else if(position == 'below') {	
				if(offsetOne.top > (scrollPos + windowHeight - 60)) {
					ncWrapper.filter(":hidden").show();
				} else if (offsetOne.top < (scrollPos - 60)) {
					ncWrapper.filter(":hidden").slideDown();
				} else if(offsetOne.top < scrollPos + (windowHeight / 2) ){
					ncWrapper.slideUp();
				} else {
					ncWrapper.hide();
				};
			};
		} else if(floatOption == 'floatTop') {
			if(position == 'both') {
				offsetTwo = panels.eq(1).offset();
				if(offsetOne.top < (scrollPos) && offsetTwo.top > (scrollPos + windowHeight) && st > lst) {
					ncWrapper.show(); 
				} else if(offsetOne.top < (scrollPos) && offsetTwo.top > (scrollPos + windowHeight) && st < lst) {
					ncWrapper.slideDown();
				} else if(offsetTwo.top < (scrollPos + (windowHeight / 2)) && offsetTwo.top > scrollPos ){
					ncWrapper.hide();
				} else if(offsetTwo.top < (scrollPos)) {
					ncWrapper.show();
				} else if(offsetTwo.top < (scrollPos + windowHeight) && st > lst) {
					ncWrapper.slideUp();
				} else {
					ncWrapper.hide();
				};
			} else if(position == 'above') {
				if(offsetOne.top < (scrollPos)) {
					ncWrapper.show();	
				} else {
					ncWrapper.hide();
				};
			} else if(position == 'below') {	
				if(offsetOne.top > (scrollPos + windowHeight)) {
					ncWrapper.filter(":hidden").slideDown();
				} else if (offsetOne.top < (scrollPos)) {
					ncWrapper.filter(":hidden").show();
				} else if(offsetOne.top < scrollPos + (windowHeight / 2) ){
					ncWrapper.hide();
				} else {
					ncWrapper.slideUp();
				};
			};
		} else if(floatOption == 'floatLeft') {
			if(position == 'both') {
				offsetTwo = panels.eq(1).offset();
				if(offsetOne.top < (scrollPos) && offsetTwo.top > (scrollPos + windowHeight) && st > lst) {
					ncSideFloater.addClass('displayed');
					
				} else if(offsetOne.top < (scrollPos) && offsetTwo.top > (scrollPos + windowHeight) && st < lst) {
					ncSideFloater.addClass('displayed');
				} else if(offsetTwo.top < (scrollPos + (windowHeight / 2)) && offsetTwo.top > scrollPos ){
					ncSideFloater.removeClass('displayed');
				} else if(offsetTwo.top < (scrollPos)) {
					ncSideFloater.addClass('displayed');
				} else if(offsetTwo.top < (scrollPos + windowHeight) && st > lst) {
					ncSideFloater.removeClass('displayed');
				} else {
					ncSideFloater.removeClass('displayed');
				};
			} else if(position == 'above') {
				if(offsetOne.top < (scrollPos)) {
					ncSideFloater.addClass('displayed');	
				} else {
					ncSideFloater.removeClass('displayed');
				};
			} else if(position == 'below') {	
				if(offsetOne.top > (scrollPos + windowHeight)) {
					ncSideFloater.addClass('displayed');
				} else if (offsetOne.top < (scrollPos)) {
					ncSideFloater.addClass('displayed');
				} else if(offsetOne.top < scrollPos + (windowHeight / 2) ){
					ncSideFloater.removeClass('displayed');
				} else {
					ncSideFloater.removeClass('displayed');
				};
			};
		};
		lst = st;
	});
};

function activateHoverStates() {
	jQuery('.nc_tweetContainer').on("mouseenter",
		function() {
			if(!jQuery(this).parents('.nc_socialPanel').hasClass('mobile')) {
				thisElem 	= jQuery(this);
				tote 		= jQuery(this).attr('data-wid');
				dif 		= jQuery(this).attr('data-num');
				origDif		= dif;
				orig		= parseInt(tote) - parseInt(dif);
				ele			= jQuery('.nc_socialPanel').attr('data-count');
				if(jQuery(this).siblings('.totes').length) {
					dif 		= (parseInt(dif) / ((parseInt(ele)-2)));
					average 	= Math.floor(dif);
					oddball 	= average * (ele - 2);
				} else {
					dif 		= (parseInt(dif) / ((parseInt(ele)-1)));
					average 	= Math.floor(dif);
					oddball 	= average * (ele - 1);
				};
				oddball 	= origDif - oddball;
				if(jQuery(this).parents('.nc_wrapper').length) {
					index = 'float';
				} else {
					index = jQuery('.nc_socialPanel').index(jQuery(this).parent('.nc_socialPanel'));
				};
				dataId = parseInt(jQuery(this).attr('data-id'));
				jQuery(this).find('.iconFiller').css({ "width":tote });
				pl = window.origSets[index][dataId]['pl'];
				pr = window.origSets[index][dataId]['pr'];
				jQuery(this).find('.count').css({
						"padding-left": window.origSets[index][dataId]['pl'],
						"padding-right": window.origSets[index][dataId]['pr']
					});
				dataId = jQuery(this).attr('data-id');
				count = 0;
				if(jQuery(this).hasClass('totes')) {
					jQuery(this).siblings('.nc_tweetContainer').each(function() {
						dataId = parseInt(jQuery(this).attr('data-id'));
						jQuery(this).find('.iconFiller').css({"width":window.origSets[index][dataId]['fil']});
						jQuery(this).find('.count').css({
							"padding-left": window.origSets[index][dataId]['pl'],
							"padding-right": window.origSets[index][dataId]['pr']
							});
					});
				} else {
					jQuery(this).siblings('.nc_tweetContainer').not('.totes').each(function() {
						++count;
						if(count <= oddball) {  ave = average + 1;
						} else { ave = average; };
						dataId = parseInt(jQuery(this).attr('data-id'));
						if(isOdd(ave)){
	
							offsetL = (((ave - 1) / 2) +1);
							offsetR = ((ave - 1) / 2);
							pl = parseInt(window.origSets[index][dataId]['pl']) - (((ave - 1) / 2) +1);
							pr = parseInt(window.origSets[index][dataId]['pr']) - ((ave - 1) / 2);
						} else {
	
							offsetL = (ave / 2);
							offsetR = (ave / 2 );
							pl = parseInt(window.origSets[index][dataId]['pl']) - (ave / 2);
							pr = parseInt(window.origSets[index][dataId]['pr']) - (ave / 2);
						};
						jQuery(this).find('.iconFiller').css({"width":origSets[index][dataId]['fil']});
						jQuery(this).find('.count').css({
							"padding-left": pl +"px",
							"padding-right": pr +"px"
							});
					});
				};
			};
		}
	);
	jQuery('.nc_socialPanel').on("mouseleave", function() {
		if(!jQuery(this).hasClass('mobile')) {
			swSetWidths();
		};
	});
	jQuery('.nc_fade .nc_tweetContainer').on("mouseenter", function() {
		jQuery(this).css({"opacity": 1 }).siblings('.nc_tweetContainer').css({"opacity": 0.5 });
	});
	jQuery('.nc_fade').on("mouseleave", 
	function() {
		jQuery('.nc_fade .nc_tweetContainer').css({"opacity": 1 });
	});
}

function createTotal() {
	var tweets 		= jQuery('.twitter').attr('data-count');
	var linkshares	= jQuery('.linkedIn').attr('data-count');
	var pins 		= jQuery('.nc_pinterest').attr('data-count');
	var shares 		= jQuery('.fb').attr('data-count');
	var plusses 	= jQuery('.googlePlus').attr('data-count');	
	var total = parseInt(tweets) + parseInt(linkshares) + parseInt(pins) + parseInt(shares) + parseInt(plusses);
	jQuery('.totes .count').text(number_format(total)+' SHARES');
}

function retreiveShares(url) {
		
		// Get the Twitter Share Count
		jQuery.getJSON('http://cdn.api.twitter.com/1/urls/count.json?url=' + url + '&callback=?', function (twitdata) {
			jQuery('.twitter .count').text(number_format(twitdata.count));
			jQuery('.twitter').attr('data-count',twitdata.count);
		});
	
		// Get the LinkedIn Count
		jQuery.getJSON('http://www.linkedin.com/countserv/count/share?url=' + url + '&callback=?', function (linkdindata) {
			jQuery('.linkedIn .count').text(number_format(linkdindata.count));
			jQuery('.linkedIn').attr('data-count',linkdindata.count);
		});
		
		// Get Facebook Shares
		jQuery.getJSON('http://graph.facebook.com/?id=' + url + '&callback=?', function (facebook) {
			if( facebook.shares == undefined) { facebook.shares = 0 };
			jQuery('.fb .count').text(number_format(facebook.shares));		
			jQuery('.fb').attr('data-count',facebook.shares);	
		});
		
		// Get Pinterest Pins
		jQuery.getJSON('http://api.pinterest.com/v1/urls/count.json?url=' + url + '&callback=?', function (pins) {
			jQuery('.nc_pinterest .count').text(number_format(pins.count));
			jQuery('.nc_pinterest').attr('data-count',pins.count);				
		});
}

function getShares(url) {
		
	// Activate All Other Functions
	// createTotal();
	swSetWidths();
	createFloatBar();
	floatingBar();
	activateHoverStates();
}

jQuery(document).ready(function() {

	// Adjusts widths when the window is resized
	/*
	var resizeActivator = setInterval( function() {
		if(typeof(window.origSets) !== undefined) {
			jQuery(window).resize(function() {
				setTimeout( function() {
					swSetWidths(true);
				}, 200 );
			});
			clearInterval(resizeActivator);
		}
	}, 100 );
	*/

	availableOptions = {
		flatFresh: {
			fullColor: 'Full Color',
			fade: 'Full Color with Fade Effect on Hover',
			grayscale: 'Light Gray with Full Color on Hover',
			grayscaleFade: 'Light Gray with Fade Effect on Hover',
			darkGrayColor: 'Dark Gray with Full Color on Hover',
			darkGrayFade: 'Dark Gray with Fade Effect on Hover',
			customFade: 'Custom Color with Fade Effect on Hover',
			customFull: 'Custom Color with Full Color on Hover',
			outlinesOnly: 'Gray Outlines with Only Expansion on Hover',
			outlinesColor: 'Gray Outlines with Single Full Color on Hover',
			outlinesFull: 'Gray Outlines with All Full Color on Hover',
			colorOutlinesOnly: 'Color Outlines with Only Expansion on Hover',
			colorOutlinesColor: 'Color Outlines with Single Full Color on Hover',
			colorOutlinesFull: 'Color Outlines with All Full Color on Hover'	
		},
		leaf: {
			fullColor: 'Full Color',
			fade: 'Full Color with Fade Effect on Hover',
			grayscale: 'Light Gray with Full Color on Hover',
			grayscaleFade: 'Light Gray with Fade Effect on Hover',
			darkGrayColor: 'Dark Gray with Full Color on Hover',
			darkGrayFade: 'Dark Gray with Fade Effect on Hover',
			customFade: 'Custom Color with Fade Effect on Hover',
			customFull: 'Custom Color with Full Color on Hover',
			outlinesOnly: 'Gray Outlines with Only Expansion on Hover',
			outlinesColor: 'Gray Outlines with Single Full Color on Hover',
			outlinesFull: 'Gray Outlines with All Full Color on Hover',
			colorOutlinesOnly: 'Color Outlines with Only Expansion on Hover',
			colorOutlinesColor: 'Color Outlines with Single Full Color on Hover',
			colorOutlinesFull: 'Color Outlines with All Full Color on Hover'	
		},
		pill: {
			fullColor: 'Full Color',
			fade: 'Full Color with Fade Effect on Hover',
			grayscale: 'Light Gray with Full Color on Hover',
			grayscaleFade: 'Light Gray with Fade Effect on Hover',
			darkGrayColor: 'Dark Gray with Full Color on Hover',
			darkGrayFade: 'Dark Gray with Fade Effect on Hover',
			customFade: 'Custom Color with Fade Effect on Hover',
			customFull: 'Custom Color with Full Color on Hover',
			outlinesOnly: 'Gray Outlines with Only Expansion on Hover',
			outlinesColor: 'Gray Outlines with Single Full Color on Hover',
			outlinesFull: 'Gray Outlines with All Full Color on Hover',
			colorOutlinesOnly: 'Color Outlines with Only Expansion on Hover',
			colorOutlinesColor: 'Color Outlines with Single Full Color on Hover',
			colorOutlinesFull: 'Color Outlines with All Full Color on Hover'	
		},
		threeDee: {
			fullColor: 'Full Color',
			fade: 'Full Color with Fade Effect on Hover',
			grayscale: 'Light Gray with Full Color on Hover',
			grayscaleFade: 'Light Gray with Fade Effect on Hover',
			darkGrayColor: 'Dark Gray with Full Color on Hover',
			darkGrayFade: 'Dark Gray with Fade Effect on Hover',
		},
		connected: {
			fullColor: 'Full Color',
			fade: 'Full Color with Fade Effect on Hover',
			grayscale: 'Light Gray with Full Color on Hover',
			grayscaleFade: 'Light Gray with Fade Effect on Hover',
			darkGrayColor: 'Dark Gray with Full Color on Hover',
			darkGrayFade: 'Dark Gray with Fade Effect on Hover',
			customFade: 'Custom Color with Fade Effect on Hover',
			customFull: 'Custom Color with Full Color on Hover',
			outlinesOnly: 'Gray Outlines with Only Expansion on Hover',
			outlinesColor: 'Gray Outlines with Single Full Color on Hover',
			outlinesFull: 'Gray Outlines with All Full Color on Hover',
			colorOutlinesOnly: 'Color Outlines with Only Expansion on Hover',
			colorOutlinesColor: 'Color Outlines with Single Full Color on Hover',
			colorOutlinesFull: 'Color Outlines with All Full Color on Hover'
		},
		shift: {
			fullColor: 'Full Color',
			fade: 'Full Color with Fade Effect on Hover',
			grayscale: 'Light Gray with Full Color on Hover',
			grayscaleFade: 'Light Gray with Fade Effect on Hover',
			darkGrayColor: 'Dark Gray with Full Color on Hover',
			darkGrayFade: 'Dark Gray with Fade Effect on Hover',
			customFade: 'Custom Color with Fade Effect on Hover',
			customFull: 'Custom Color with Full Color on Hover',
			outlinesOnly: 'Gray Outlines with Only Expansion on Hover',
			outlinesColor: 'Gray Outlines with Single Full Color on Hover',
			outlinesFull: 'Gray Outlines with All Full Color on Hover',
			colorOutlinesOnly: 'Color Outlines with Only Expansion on Hover',
			colorOutlinesColor: 'Color Outlines with Single Full Color on Hover',
			colorOutlinesFull: 'Color Outlines with All Full Color on Hover'
		}
	};
	
	// Check if we are on the admin page
	if(jQuery('select[name="visualTheme"]').length) {
		
		// Update the items and previews on the initial page load
		var visualTheme = jQuery('select[name="visualTheme"]').val();
		var colorSet    = jQuery('select[name="colorSet"]').val();
		jQuery('select[name="colorSet"] option').remove();
		jQuery.each(availableOptions[visualTheme], function(index, value) {
			if(index == colorSet) {
				jQuery('select[name="colorSet"]').append('<option value="'+index+'" selected>'+value+'</option>');
			} else {
				jQuery('select[name="colorSet"]').append('<option value="'+index+'">'+value+'</option>');
			};
			if(colorSet == 'customFade' || colorSet == 'customFull') {
				jQuery('h3.customColorLabel').parents('.sw_field').show();
				jQuery('h3.customColorLabel').parents('.sw_field').next('.form-table').show();
			} else {
				jQuery('h3.customColorLabel').parents('.sw_field').hide();
				jQuery('h3.customColorLabel').parents('.sw_field').next('.form-table').hide();
			};
		});
		setTimeout( updateTheme , 2000 );
		
		// A function for updating the preview
		function updateTheme() {
			var visualTheme  = jQuery('select[name="visualTheme"]').val();
			var colorSet     = jQuery('select[name="colorSet"]').val();
			var buttonsClass = 'sw_'+visualTheme+' sw_'+colorSet;
			if(typeof lastClass === 'undefined'){
				jQuery('.nc_socialPanel').removeClass('sw_leaf sw_fullColor').addClass(buttonsClass);
			} else {
				jQuery('.nc_socialPanel').removeClass(lastClass).addClass(buttonsClass);
			};
			lastClass = buttonsClass;
			if(colorSet == 'customFade' || colorSet == 'customFull') {
				jQuery('h3.customColorLabel').parents('.sw_field').slideDown();
				jQuery('h3.customColorLabel').parents('.sw_field').next('.form-table').slideDown();
			} else {
				jQuery('h3.customColorLabel').parents('.sw_field').slideUp();
				jQuery('h3.customColorLabel').parents('.sw_field').next('.form-table').slideUp();
			};
		};
		
		// If the color set changes, update the preview with the function
		jQuery('select[name="colorSet"]').on('change', updateTheme);
		
		// If the visual theme is updated, update the preview manually
		jQuery('select[name="visualTheme"]').on('change', function() {
			var visualTheme  = jQuery('select[name="visualTheme"]').val();
			
			// Update the color sets to reflect the newly selected visual theme
			var visualTheme  = jQuery('select[name="visualTheme"]').val();
			jQuery('select[name="colorSet"] option').remove();
			var i = 0;
			jQuery.each(availableOptions[visualTheme], function(index, value) {
				if(i == 0) {
					jQuery('select[name="colorSet"]').append('<option value="'+index+'" selected>'+value+'</option>');
				} else {
					jQuery('select[name="colorSet"]').append('<option value="'+index+'">'+value+'</option>');
				};
				++i;
			});
			
			// Update the class on the preview
			var colorSet     = jQuery('select[name="colorSet"]').val();
			var buttonsClass = 'sw_'+visualTheme+' sw_'+colorSet;
			if(typeof lastClass === 'undefined'){
				jQuery('.nc_socialPanel').removeClass('sw_leaf sw_fullColor').addClass(buttonsClass);
			} else {
				jQuery('.nc_socialPanel').removeClass(lastClass).addClass(buttonsClass);
			}
			lastClass = buttonsClass;
		});
	}

	/*
	function pickRandomProperty(obj) {
		var result;
		var count = 0;
		for (var prop in obj)
			if (Math.random() < 1/++count)
			   result = prop;
		return result;
	}
	setInterval(function() {
		var randomVisualStyle = pickRandomProperty(availableOptions);
		var randomColorSet = pickRandomProperty(availableOptions[randomVisualStyle]);
		var className = randomVisualStyle+' '+randomColorSet;
		if(typeof lastClassName === 'undefined'){
			jQuery('.nc_socialPanel').removeClass('experimental fullColor').addClass(className);
		} else {
			jQuery('.nc_socialPanel').removeClass(lastClassName).removeClass('leaf_fullColor').addClass(className);
		}
		lastClassName = className;
	}, 3000);
	*/
	
	if(jQuery('input[name="minTotes"]').length) {
		jQuery('input[name="minTotes"]').attr('type','number').attr('min','0').css({'float':'right','margin-top':'5px'});
	};

	var url = jQuery('.nc_socialPanel').attr('data-url');
	getShares(url);

});