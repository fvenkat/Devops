	jQuery("#free-trial-popup").on("click", "#register_abr_trial", function() {
		jQuery("#loader_display").css("display","block");
		if(jQuery("#abr_trial_email").val() == "") {
			jQuery("#loader_display").css("display","none");
			jQuery("#abr_trial_err").html("");
			jQuery("#abr_trial_err").html("<div class='alert alert-danger' role='alert'><strong>Please</strong> enter the email in correct format.</div>");
			jQuery("#abr_trial_err").css("display","block");
		} else {		
		jQuery.ajax({
			type : "POST",
			dataType: "json",
			cache: false,
			url  : 'https://www.educba.com/ajax/abr-free-trial.php',
			data: jQuery("#frm_abr_trial").serialize(),
			async: true,
			success : function(resp){
				jQuery("#loader_display").css("display","none");
				if(resp.access == "yes") {
					window.location.href = "https://www.educba.com/plans/";
				} else {
					if(resp.usr_exists == "yes") {
						jQuery("#abr_trial_err").html("");
						jQuery("#abr_trial_err").html("<div class='alert alert-danger' role='alert'><strong>Email id</strong> already exists. Please try with another email id.</div>You are already currently a registered user and have access to these free courses. If you are having trouble loggin in, you can go reset your password <a href='https://www.educba.com/forgot-password/'>here</a>.");
						jQuery("#abr_trial_err").css("display","block");						
					} else {
						jQuery("#abr_trial_err").html("");
						jQuery("#abr_trial_err").html("<div class='alert alert-danger' role='alert'><strong>Please</strong> enter the email in correct format.</div>");
						jQuery("#abr_trial_err").css("display","block");
					}
				}
			}
		});
		}
	});
	
	jQuery("#frm_header_abr_trial").on("submit", function(e) {
		jQuery("#loader_display").css("display","block");
		if(jQuery("#abr_header_trial_email").val() == "") {
			jQuery("#loader_display").css("display","none");
			jQuery("#abr_header_trial_err").html("");
			jQuery("#abr_header_trial_err").html("<div class='alert alert-danger' role='alert'><strong>Please</strong> enter the email in correct format.</div>");
			jQuery("#abr_header_trial_err").css("display","block");
		} else {		
		jQuery.ajax({
			type : "POST",
			dataType: "json",
			cache: false,
			url  : 'https://www.educba.com/ajax/abr-free-header-trial.php',
			data: jQuery("#frm_header_abr_trial").serialize(),
			async: true,
			success : function(resp){
				jQuery("#loader_display").css("display","none");
				if(resp.access == "yes") {
					window.location.href = "https://www.educba.com/plans/";
				} else {
					if(resp.usr_exists == "yes") {
						jQuery("#abr_header_trial_err").html("");
						jQuery("#abr_header_trial_err").html("<div class='alert alert-danger' role='alert'><strong>Email id</strong> already exists. Please try with another email id.</div>You are already currently a registered user and have access to these free courses. If you are having trouble loggin in, you can go reset your password <a href='https://www.educba.com/forgot-password/'>here</a>.");
						jQuery("#abr_header_trial_err").css("display","block");						
					} else {
						jQuery("#abr_header_trial_err").html("");
						jQuery("#abr_header_trial_err").html("<div class='alert alert-danger' role='alert'><strong>Please</strong> enter the email in correct format.</div>");
						jQuery("#abr_header_trial_err").css("display","block");
					}
				}
			}
		});
		}
return false;
e.preventDefault();		
	});
	
	jQuery("#rrForm").on("submit", function(e) {
		jQuery("#loader_display").css("display","block");
		n_err = '';
		if(jQuery("#app_mobile").length) {
			dapp_url = "https://www.educba.com/pmm_pparm_app.php?appprm=app_nm";
		if(jQuery("#app_mobile").val() == "") {
			jQuery("#loader_display").css("display","none");
			jQuery("#app_header_err").html("");
			jQuery("#app_header_err").html("<div class='alert alert-danger' role='alert'><strong>Please</strong> enter the mobile number in correct format.</div>");
			jQuery("#app_header_err").css("display","block");
			n_err = "yes";
		}
		}
		if(jQuery("#app_email").length) {
			dapp_url = "https://www.educba.com/pmm_pparm_app.php?appprm=app_em";
		if(jQuery("#app_email").val() == "") {			
			jQuery("#loader_display").css("display","none");
			jQuery("#app_header_err").html("");
			jQuery("#app_header_err").html("<div class='alert alert-danger' role='alert'><strong>Please</strong> enter the email in correct format.</div>");
			jQuery("#app_header_err").css("display","block");
			n_err = "yes";
		}
		} if(n_err == '') {
		jQuery.ajax({
			type : "POST",
			dataType: "json",
			cache: false,
			url  : dapp_url,
			data: jQuery("#rrForm").serialize(),
			async: true,
			success : function(resp){
				jQuery("#loader_display").css("display","none");
					if(resp.vnumerror == "yes") {
						jQuery("#app_header_err").html("");
						jQuery("#app_header_err").html("<div class='alert alert-danger' role='alert'><strong>Please</strong> enter the mobile number in correct format.</div>");
						jQuery("#app_header_err").css("display","block");						
					} else if(resp.verror == "yes") {
						jQuery("#app_header_err").html("");
						jQuery("#app_header_err").html("<div class='alert alert-danger' role='alert'><strong>Please</strong> enter the email in correct format.</div>");
						jQuery("#app_header_err").css("display","block");
					} else if(resp.cnt_error == "yes") {
						jQuery("#app_header_err").html("");
						jQuery("#app_header_err").html("<div class='alert alert-danger' role='alert'><strong>Limit reached!</strong> Only 2 invites allowed for an email/mobile number.</div>");
						jQuery("#app_header_err").css("display","block");
					} else if(resp.app_promoerror == "yes") {
						jQuery("#app_header_err").html("");
						jQuery("#app_header_err").html("<div class='alert alert-danger' role='alert'><strong>Some error occurred!</strong> Please try again.</div>");
						jQuery("#app_header_err").css("display","block");
					} else if(resp.app_promoerror == "no") {
						jQuery("#app_header_err").html("");
						jQuery("#app_header_err").html("<div class='alert alert-success' role='alert'><strong>SMS</strong> with the link to download EDUCBA Learning App has been sent to your mobile number. Please Download App today!</div>");
						jQuery("#app_header_err").css("display","block");
					} else if(resp.app_promoemerror == "yes") {
						jQuery("#app_header_err").html("");
						jQuery("#app_header_err").html("<div class='alert alert-danger' role='alert'><strong> Some error occurred!</strong> Please try again.</div>");
						jQuery("#app_header_err").css("display","block");
					} else if(resp.app_promoemerror == "no") {
						jQuery("#app_header_err").html("");
						jQuery("#app_header_err").html("<div class='alert alert-success' role='alert'><strong>Email!</strong> with the link to download EDUCBA Learning App has been sent to your inbox. Please Download App today.</div>");
						jQuery("#app_header_err").css("display","block");
					}
			}
		});
		}
return false;
e.preventDefault();		
	});

		var ismobile = (/iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase()));
		if(!ismobile) {
		jQuery('.cd-dropdown-wrapper').mouseleave(function(event){
		event.preventDefault();
		jQuery('.cd-dropdown-trigger').trigger('click');
		});

		jQuery('.cd-dropdown-trigger').hover(function(event){
		event.preventDefault;
		myOpen();
		});

		jQuery('.custom-trigger').hover(function(event){
		event.preventDefault;
		myOpen();
		});

		function myOpen(){
		var navIsVisible = true;
		jQuery('.cd-dropdown').toggleClass('dropdown-is-active', navIsVisible);
		jQuery('.cd-dropdown-trigger').toggleClass('dropdown-is-active', navIsVisible);
		jQuery('.is-finance').toggleClass('is-active', navIsVisible);
		if( !navIsVisible ) {
		jQuery('.cd-dropdown').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
		jQuery('.has-children ul').addClass('is-hidden');
		jQuery('.move-out').removeClass('move-out');
		jQuery('.is-active').removeClass('is-active');
		});
		}
		};
		}
		
		var options = {

		url: function(phrase) {
		return "https://www.educba.com/search/courseSearch.php";
		},

		listLocation: "courses",
		matchResponseProperty: "inputphrase",

		getValue: function(element) {
		return element.name;
		},

		ajaxSettings: {
		dataType: "json",
		method: "POST",
		data: {
		dataType: "json"
		}
		},

		preparePostData: function(data) {
		data.phrase = jQuery("#s").val();
		return data;
		},

		template: {
		type: "links",
		fields: {
		link: "course-link"
		}
		},
		list: {
		maxNumberOfElements: 15,
		}, 
		theme: "plate-dark",
		requestDelay: 300
		};

		jQuery("#s").easyAutocomplete(options);	
