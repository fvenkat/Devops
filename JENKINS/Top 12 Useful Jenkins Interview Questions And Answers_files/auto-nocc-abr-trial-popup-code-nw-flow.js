plt = '';
user_envir = '';
jQuery(document).ready(function(){

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
	plt = "mobile";
	user_envir = encodeURIComponent(navigator.userAgent);
} else {
	plt = "desktop";
	user_envir = encodeURIComponent(navigator.userAgent);
}

jQuery("#autopopup_form").on("click", "#autopopup_submit", function() {
jQuery("#autopopup_form").css("display","none");
jQuery("#otp_form_autopp").css("display","none");
jQuery("#email_form_autopp").css("display","block");
jQuery("#mobile_form_autopp").css("display","none");
});	

jQuery('#email_frm_autopp').on('submit', function (e) {
jQuery('input[type="submit"]').attr('disabled', true);
jQuery("#loader_display").css("display","block");
jQuery("#mobile_form_autopp").css("display","none");
jQuery("#otp_form_autopp").css("display","none");
var lgmt = jQuery("#mobile_number_autopp").val();
uem = encodeURIComponent(jQuery("#mb_user_email_autopp").val());
sg = jQuery("#suid_autopp").val();
var urlx = jQuery("#get_url_autopp").val();

if(uem == '') {
jQuery("#loader_display").css("display","none");
jQuery('input[type="submit"]').attr('disabled', false);
jQuery("#second_step_error_new_3").css("display","block");
jQuery('#second_step_error_new_3').html("<div class='alert alert-danger fade in' role='alert'><i class='fa fa-warning alert-danger'></i><span id='err_two_new_3'>Please enter your email..</span></div>");
} else {
jQuery.ajax({
method : "POST",
dataType: "json",
cache: false,
url  : 'https://www.educba.com/ajax/ft_form_procsz.php',
data : 'uph=' + lgmt + '&em=' + uem + '&sgs=' + sg + '&envir=' + plt + '&upf=' + user_envir+'&urlx=' +urlx,
async: true,
success : function(resp){
jQuery("#loader_display").css("display","none");
if(resp.access == "no") {
jQuery('input[type="submit"]').attr('disabled', false);
jQuery("#second_step_error_new_3").css("display","block");
jQuery('#second_step_error_new_3').html("<div class='alert alert-danger fade in' role='alert'><i class='fa fa-warning alert-danger'></i><span id='err_two_new_3'>Please enter your valid email.</span></div>");
} else if(resp.usr_exists == "yes") {
jQuery('input[type="submit"]').attr('disabled', false);
jQuery("#second_step_error_new_3").css("display","block");
jQuery('#second_step_error_new_3').html("<div class='alert alert-danger fade in' role='alert'><i class='fa fa-warning alert-danger'></i><span id='err_two_new_3'>Specified email is already registered. Please provide another email.</span></div>");
} else if(resp.access == "yes") {
jQuery('#email_frm_autopp').css("display","none");
jQuery('#email_form_autopp').css("display","none");
jQuery('input[type="submit"]').attr('disabled', false);
//jQuery("#second_step_error_new_3").css("display","block");
//jQuery('#second_step_error_new_3').html("<div class='alert alert-success fade in' role='alert'><i class='fa fa-check-circle alert-success'></i><span id='err_two_new_3'>Registration for Free Trial successful. Please check your email for login details.</span></div>");
//
jQuery("#mobile_form_autopp").css("display","block");
}
}
});
}
return false;
e.preventDefault();
});	
	
jQuery('#mob_frm_autopp').on('submit', function (e) {
jQuery('input[type="submit"]').attr('disabled', true);
jQuery("#loader_display").css("display","block");
jQuery("#otp_form_autopp").css("display","none");
jQuery("#email_form_autopp").css("display","none");
var lg = jQuery("#mobile_number_autopp").val();

if(lg == '') {
jQuery("#loader_display").css("display","none");
jQuery('input[type="submit"]').attr('disabled', false);
jQuery("#second_step_error_new").css("display","block");
jQuery('#second_step_error_new').html("<div class='alert alert-danger fade in' role='alert'><i class='fa fa-warning alert-danger'></i><span id='err_two_new'>Please enter your mobile number.</span></div>");
} else {
	if(uem == ''){
		//error
	jQuery("#second_step_error_new_2").css("display","none");
	jQuery('#mobile_form_autopp').css("display","none");
	jQuery('#otp_form_autopp').css("display","none");
	jQuery('#email_form_autopp').css("display","block");
	jQuery('input[type="submit"]').attr('disabled', false);
	jQuery("#second_step_error_new_3").css("display","block");
	jQuery('#second_step_error_new_3').html("<div class='alert alert-danger fade in' role='alert'><i class='fa fa-warning alert-danger'></i><span id='err_two_new_3'>Please enter your valid email.</span></div>");
	}else{
jQuery.ajax({
method : "POST",
dataType: "json",
cache: false,
url  : 'https://www.educba.com/ajax/ft_zpt_s.php',
data : 'pyt_phone=' + lg+ '&em=' + uem,
async: true,
success : function(resp){
jQuery("#loader_display").css("display","none");
if(resp.error == "incorrectphone") {
jQuery('input[type="submit"]').attr('disabled', false);
jQuery("#second_step_error_new").css("display","block");
jQuery('#second_step_error_new').html("<div class='alert alert-danger fade in' role='alert'><i class='fa fa-warning alert-danger'></i><span id='err_two_new'>Please enter a valid mobile number.</span></div>");
} else if(resp.error == "alrph") {
jQuery('input[type="submit"]').attr('disabled', false);
jQuery("#second_step_error_new").css("display","block");
jQuery('#second_step_error_new').html("<div class='alert alert-danger fade in' role='alert'><i class='fa fa-warning alert-danger'></i><span id='err_two_new'>Your mobile number is already registered.</span></div>");
} else if(resp.error == "invalidnumber") {
jQuery('input[type="submit"]').attr('disabled', false);
jQuery("#second_step_error_new").css("display","block");
jQuery('#second_step_error_new').html("<div class='alert alert-danger fade in' role='alert'><i class='fa fa-warning alert-danger'></i><span id='err_two_new'>Error Occurred. Please try again</span></div>");
} else if(resp.error == "no") {
jQuery('input[type="submit"]').attr('disabled', false);
jQuery('#mobile_form_autopp').css("display","none");
jQuery('#otp_form_autopp').css("display","block");
jQuery("#second_step_error_new_2").css("display","block");
jQuery('#second_step_error_new_2').html("<div class='alert alert-success fade in text-center' role='alert'><i class='fa fa-check-circle alert-success'></i><span id='err_two_new_2'><strong>An OTP</strong> has been sent to your mobile, please enter the same to proceed.</span></div>");						
} 
}
});
}
}
return false;
e.preventDefault();
});

jQuery(document).on('click', '#popup_resend_otp_autopp', function (e) {
jQuery('input[type="submit"]').attr('disabled', true);
jQuery("#loader_display").css("display","block");
jQuery("#mobile_form_autopp").css("display","none");
jQuery("#email_form_autopp").css("display","none");
var lg = jQuery("#mobile_number_autopp").val();
if(lg == '') {
jQuery("#loader_display").css("display","none");
jQuery('input[type="submit"]').attr('disabled', false);
jQuery("#second_step_error_new").css("display","block");
jQuery('#second_step_error_new').html("<div class='alert alert-danger fade in' role='alert'><i class='fa fa-warning alert-danger'></i><span id='err_two_new'>Please enter your mobile number.</span></div>");
jQuery("#otp_form_autopp").css("display","none");
jQuery("#mobile_form_autopp").css("display","block");
} else {
	if(uem == ''){
		//error
	jQuery("#second_step_error_new_2").css("display","none");
	jQuery('#mobile_form_autopp').css("display","none");
	jQuery('#otp_form_autopp').css("display","none");
	jQuery('#email_form_autopp').css("display","block");
	jQuery('input[type="submit"]').attr('disabled', false);
	jQuery("#second_step_error_new_3").css("display","block");
	jQuery('#second_step_error_new_3').html("<div class='alert alert-danger fade in' role='alert'><i class='fa fa-warning alert-danger'></i><span id='err_two_new_3'>Please enter your valid email.</span></div>");
	}else{
jQuery.ajax({
method : "POST",
dataType: "json",
cache: false,
url  : 'https://www.educba.com/ajax/ft_zpt_s.php',
data : 'pyt_phone=' + lg+ '&em=' + uem,
async: true,
success : function(resp){
jQuery("#loader_display").css("display","none");
if(resp.error == "incorrectphone") {
jQuery('input[type="submit"]').attr('disabled', false);
jQuery("#second_step_error_new").css("display","block");
jQuery('#second_step_error_new').html("<div class='alert alert-danger fade in' role='alert'><i class='fa fa-warning alert-danger'></i><span id='err_two_new'>Please enter a valid mobile number.</span></div>");
jQuery("#otp_form_autopp").css("display","none");
jQuery("#mobile_form_autopp").css("display","block");
} else if(resp.error == "alrph") {
jQuery('input[type="submit"]').attr('disabled', false);
jQuery("#second_step_error_new").css("display","block");
jQuery('#second_step_error_new').html("<div class='alert alert-danger fade in' role='alert'><i class='fa fa-warning alert-danger'></i><span id='err_two_new'>Your mobile number is already registered.</span></div>");
jQuery("#otp_form_autopp").css("display","none");
jQuery("#mobile_form_autopp").css("display","block");
} else if(resp.error == "invalidnumber") {
jQuery('input[type="submit"]').attr('disabled', false);
jQuery("#second_step_error_new").css("display","block");
jQuery('#second_step_error_new').html("<div class='alert alert-danger fade in' role='alert'><i class='fa fa-warning alert-danger'></i><span id='err_two_new'>Error Occurred. Please try again</span></div>");
jQuery("#otp_form_autopp").css("display","none");
jQuery("#mobile_form_autopp").css("display","block");
} else if(resp.error == "no") {
jQuery('input[type="submit"]').attr('disabled', false);
jQuery('#mobile_form_autopp').css("display","none");
jQuery('#otp_form_autopp').css("display","block");
jQuery("#second_step_error_new_2").css("display","block");
jQuery('#second_step_error_new_2').html("<div class='alert alert-success fade in text-center' role='alert'><i class='fa fa-check-circle alert-success'></i><span id='err_two_new_2'><strong>An OTP</strong> has been sent to your mobile, please enter the same to proceed.</span></div>");
} 
}
});
}
}
});

jQuery('#otp_frm_autopp').on('submit', function (e) {
jQuery('input[type="submit"]').attr('disabled', true);
jQuery("#loader_display").css("display","block");
jQuery("#mobile_form_autopp").css("display","none");
jQuery("#email_form_autopp").css("display","none");
var lgm = jQuery("#mobile_number_autopp").val();
var lgotp = jQuery("#mobile_otp_autopp").val();

if(lgotp == '' ) {
jQuery("#loader_display").css("display","none");
jQuery('input[type="submit"]').attr('disabled', false);
jQuery("#second_step_error_new_2").css("display","block");
jQuery('#second_step_error_new_2').html("<div class='alert alert-danger fade in' role='alert'><i class='fa fa-warning alert-danger'></i><span id='err_two_new_2'>Please enter a valid OTP.</span></div>");
} else {
	if(uem == ''){
		//error
	jQuery("#second_step_error_new_2").css("display","none");
	jQuery('#mobile_form_autopp').css("display","none");
	jQuery('#otp_form_autopp').css("display","none");
	jQuery('#email_form_autopp').css("display","block");
	jQuery('input[type="submit"]').attr('disabled', false);
	jQuery("#second_step_error_new_3").css("display","block");
	jQuery('#second_step_error_new_3').html("<div class='alert alert-danger fade in' role='alert'><i class='fa fa-warning alert-danger'></i><span id='err_two_new_3'>Please enter your valid email.</span></div>");
	}else{
		
jQuery.ajax({
method : "POST",
dataType: "json",
cache: false,
url  : 'https://www.educba.com/ajax/ft_cnf_s.php',
data : 'otp=' + lgotp + '&uph=' + lgm+ '&em=' + uem+ '&sgs=' + sg + '&envir=' + plt + '&upf=' + user_envir,
async: true,
success : function(resp){
jQuery("#loader_display").css("display","none");
if(resp.error == "incorrectphone") {
jQuery('input[type="submit"]').attr('disabled', false);
jQuery('#mob_submit_autopp').attr('disabled', false);
jQuery('#otp_form_autopp').css("display","none");
jQuery('#mobile_form_autopp').css("display","block");
jQuery("#second_step_error_new_2").css("display","block");
jQuery('#second_step_error_new_2').html("<div class='alert alert-danger fade in' role='alert'><i class='fa fa-warning alert-danger'></i><span id='err_two_new_2'>Please enter a valid OTP.</span></div>");
} else if(resp.error == "invalidnumber") {
jQuery('input[type="submit"]').attr('disabled', false);
jQuery("#second_step_error_new_2").css("display","block");
jQuery('#second_step_error_new_2').html("<div class='alert alert-danger fade in' role='alert'><i class='fa fa-warning alert-danger'></i><span id='err_two_new_2'>Please enter a valid OTP.</span></div>");
}else if(resp.error == "invalidemail") {
	jQuery("#second_step_error_new_2").css("display","none");
jQuery('#mobile_form_autopp').css("display","none");
jQuery('#otp_form_autopp').css("display","none");
jQuery('#email_form_autopp').css("display","block");
jQuery('input[type="submit"]').attr('disabled', false);
jQuery("#second_step_error_new_3").css("display","block");
jQuery('#second_step_error_new_3').html("<div class='alert alert-danger fade in' role='alert'><i class='fa fa-warning alert-danger'></i><span id='err_two_new_3'>Please enter your valid email.</span></div>");
} else if(resp.error == "no") {
jQuery('input[type="submit"]').attr('disabled', false);
jQuery('#mobile_form_autopp').css("display","none");
jQuery('#otp_form_autopp').css("display","block");
//jQuery('#email_form_autopp').css("display","block");
jQuery("#second_step_error_new_2").css("display","block");
jQuery('#second_step_error_new_2').html("<div class='alert alert-success fade in' role='alert'><i class='fa fa-check-circle alert-success'></i><span id='err_two_new_3'>You have successfully registered at EDUCBA. Please check your email for login details.</span></div>");
window.location.href = "https://www.educba.com/my-courses/index.php";
}
}
});

}
}
return false;
e.preventDefault();
});

jQuery('#email_frm_abr_auto').on('submit', function (e) {
	
jQuery('input[type="submit"]').attr('disabled', true);
jQuery("#loader_display").css("display","block");
//jQuery("#mobile_form").css("display","none");
//jQuery("#otp_form").css("display","none");
console.log("**");
uem = encodeURIComponent(jQuery("#mb_header_user_email_abr_auto").val());
sg = jQuery("#suid").val();
urlx = jQuery("#get_url").val();

if(uem == '') {
	console.log("##");
jQuery("#loader_display").css("display","none");
jQuery('input[type="submit"]').attr('disabled', false);
jQuery("#second_step_error_new_3").css("display","block");
jQuery('#second_step_error_new_3').html("<div class='alert alert-danger fade in' role='alert'><i class='fa fa-warning alert-danger'></i><span id='err_two_new_3'>Please enter your email.</span></div>");
} else {
	console.log("its here");
	
jQuery.ajax({
method : "POST",
dataType: "json",
cache: false,
url  : 'https://www.educba.com/ajax/ft_em_abr_sgn.php',
data : 'em=' + uem + '&sgs=' + sg + '&envir=' + plt + '&upf=' + user_envir +'&urlx=' +urlx,
async: true,
success : function(resp){
jQuery("#loader_display").css("display","none");
if(resp.access == "no") {
jQuery('input[type="submit"]').attr('disabled', false);
jQuery("#second_step_error_new_3").css("display","block");
jQuery('#second_step_error_new_3').html("<div class='alert alert-danger fade in' role='alert'><i class='fa fa-warning alert-danger'></i><span id='err_two_new_3'>Please enter your valid email.</span></div>");
} else if(resp.usr_exists == "yes") {
jQuery('input[type="submit"]').attr('disabled', false);
jQuery("#second_step_error_new_3").css("display","block");
jQuery('#second_step_error_new_3').html("<div class='alert alert-danger fade in' role='alert'><i class='fa fa-warning alert-danger'></i><span id='err_two_new_3'>Specified email is already registered. Please provide another email.</span></div>");
} else if(resp.access == "yes") {
jQuery('#email_frm_abr').css("display","none");
jQuery('#email_form').css("display","none");
jQuery("#second_step_error_new_3").css("display","block");
jQuery('input[type="submit"]').attr('disabled', true);

jQuery('#second_step_error_new_3').html("<div class='alert alert-success fade in' role='alert'><i class='fa fa-check-circle alert-success'></i><span id='err_two_new_3'>You have successfully registered at EDUCBA. Please check your email for login details.</span></div>");
window.location.href = "https://www.educba.com/my-courses/index.php";
//jQuery("#mobile_form").css("display","block");
//jQuery('input[type="submit"]').attr('disabled', false);
}
}
}); /**/
}
return false;
e.preventDefault();
});	

});