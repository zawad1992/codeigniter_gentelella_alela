// ------------------------- Print Div Content  ---------------------------- 

function printDivContent(divId)
{
	var  data = $("#"+divId).html(); 
	var  title = $(".widgettitle").text();
	
	var mywindow = window.open('', 'new div', 'height=400,width=600');
	mywindow.document.write('<html><head><title>'+title+'</title>');
	mywindow.document.write('<style>.to_be_hidden{display:none;}</style>');
	mywindow.document.write('<style>.table{border:1px;}</style>');
	/*optional stylesheet*/ 
	//mywindow.document.write('<link rel="stylesheet" href="main.css" type="text/css" />');
	mywindow.document.write('</head><body >');
	mywindow.document.write(data);
	mywindow.document.write('</body></html>');

	mywindow.print();
	mywindow.close();

	return true;
}

// ------------------------- Get text without comma  ---------------------------- 
 function getAmount ( amount ) 
 {
 	return cv_bn_to_en( amount.replace(/,/g, '') );
 	/*if (typeof amount != 'undefined' && amount) {
		return cv_bn_to_en( amount.replace(/,/g, '') );
 	} else { 		
 		//console.log(amount);
 		return 0;
 	} */	
 }
 
// ------------------------- Add comma to input  ---------------------------- 
function addCommasNew(str) 
{
	
	var parts = (str + "").split("."),
		main = parts[0],
		len = main.length,
		output = "",
		i = len - 1;
	
	while(i >= 0) {
		output = main.charAt(i) + output;
		if ((len - i) % 3 === 0 && i > 0) {
			output = "," + output;
		}
		--i;
	}
	// put decimal part back
	if (parts.length > 1) {
		output += "." + parts[1];
	}
	
	return output;
	
}
// ------------------------- Add comma to input  ---------------------------- 
function addCommas(nStr)
{
	nStr += '';
	x = nStr.split('.');
	x1 = x[0];
	x2 = x.length > 1 ? '.' + x[1] : '';
	var rgx = /(\d+)(\d{3})/;
	while (rgx.test(x1)) {
		x1 = x1.replace(rgx, '$1' + ',' + '$2');
	}
	return x1 + x2;
}
// ------------------------- Validated Email Address ---------------------------- 
function isValidEmailAddress(emailAddress) 
{
		var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
		return pattern.test(emailAddress);
}


// ------------------------- GET BASE URL ---------------------------- 
function getBaseUrl()
{
	var hostname = location.hostname;
	if(hostname == 'localhost') {
		return location.origin + "/" + location.pathname.split('/')[1];
	} 
	return location.origin;
}

// ------------------------- FOR CANCELLING THE PAGE ----------------
function cancel(controller)
{
	var msg = " Do you want to back ? ";
	var r = confirm(msg);
	if (r == true) {
		//history.back();
		window.open(base_url+controller, '_self');
	}
}


function validateDecimal(value) 
{
    //var RE = /^\d*(\.\d{1})?\d{0,1}$/;
    var RE = /^\d{0,2}(\.\d{0,2}){0,1}$/;
    if(RE.test(value)){
       return true;
    }else{
       return false;
    }
}



/* --------ADDED BY ABDUL HALIM 27.05.2015 1255PM MULTIPLE AUTO COMPLETE START------*/
function split( val ) 
{
  return val.split( /,\s*/ );
}
function extractLast( term ) 
{
  return split( term ).pop();
}


function invalidMsgHtml(textbox) {
	if (textbox.value == '') {
        textbox.setCustomValidity('Please fill out this field.');
    } else {
        textbox.setCustomValidity('');
    }
    return true;
}
function invalidSelMsgHtml(textbox) {
	if (textbox.value == '') {
        textbox.setCustomValidity('Please select this box.');
    } else {
        textbox.setCustomValidity('');
    }
    return true;
}

function invalidPatternMsgHtml(textbox) {
	if (textbox.validity.patternMismatch) {
        textbox.setCustomValidity('Please insert DD-MM-YYYY formate in date input'
);
    } else if (textbox.value == '') {
        textbox.setCustomValidity('Please fill out this field.');
    	
    } else {
        textbox.setCustomValidity('');
    }
    return true;
}


/* ----------ADDED BY ABDUL HALIM 13.06.2015 1255PM END-----------*/

function cv_bn_to_en(bn_number) 
{
	var en_number = '';
	for (var i = 0; i < bn_number.length; i++) {
		if (bn_number[i] == "০") {
			en_number = en_number + '0';
		} else if (bn_number[i] == "0") {
			en_number = en_number + '0';
		} else if (bn_number[i] == "১") {
			en_number = en_number + '1';
		} else if (bn_number[i] == "1") {
			en_number = en_number + '1';
		} else if (bn_number[i] == "২") {
			en_number = en_number + '2';
		} else if (bn_number[i] == "2") {
			en_number = en_number + '2';
		} else  if (bn_number[i] == "৩") {
			en_number = en_number + '3';
		} else if (bn_number[i] == "3") {
			en_number = en_number + '3';
		} else if (bn_number[i] == "৪") {
			en_number = en_number + '4';
		} else if (bn_number[i] == "4") {
			en_number = en_number + '4';
		} else if (bn_number[i] == "৫") {
			en_number = en_number + '5';
		} else if (bn_number[i] == "5") {
			en_number = en_number + '5';
		} else if (bn_number[i] == "৬") {
			en_number = en_number + '6';
		} else if (bn_number[i] == "6") {
			en_number = en_number + '6';
		} else if (bn_number[i] == "৭") {
			en_number = en_number + '7';
		} else if (bn_number[i] == "7") {
			en_number = en_number + '7';
		} else if (bn_number[i] == "৮") {
			en_number = en_number + '8';
		} else if (bn_number[i] == "8") {
			en_number = en_number + '8';
		} else if (bn_number[i] == "৯") {
			en_number = en_number + '9';
		} else if (bn_number[i] == "9") {
			en_number = en_number + '9';
		} else {
			en_number = en_number + bn_number[i];
		}
	}
	return en_number;
}

function cv_en_to_bn(en_number) 
{
	en_number = en_number.toString(); 
	var bn_number = '';
	for (var i = 0; i < en_number.length; i++) {
		if (en_number[i] == "0" || en_number[i] == 0) {
			bn_number = bn_number + '০';
		} else if (en_number[i] == "1" || en_number[i] == 1) {
			bn_number = bn_number + '১';
		} else if (en_number[i] == "2" || en_number[i] == 2) {
			bn_number = bn_number + '২';
		} else if (en_number[i] == "3" || en_number[i] == 3) {
			bn_number = bn_number + '৩';
		} else if (en_number[i] == "4" || en_number[i] == 4) {
			bn_number = bn_number + '৪';
		} else if (en_number[i] == "5" || en_number[i] == 5) {
			bn_number = bn_number + '৫';
		} else if (en_number[i] == "6" || en_number[i] == 6) {
			bn_number = bn_number + '৬';
		} else if (en_number[i] == "7" || en_number[i] == 7) {
			bn_number = bn_number + '৭';
		} else if (en_number[i] == "8" || en_number[i] == 8) {
			bn_number = bn_number + '৮';
		} else if (en_number[i] == "9" || en_number[i] == 9) {
			bn_number = bn_number + '৯';
		} else {
			bn_number = bn_number + en_number[i];
		}
	}
	return bn_number;
}

function numberFormatEn(str) 
{
    var parts = (str + "").split("."),
        main = parts[0],
        len = main.length,
        output = "",
        i = len - 1;

    while(i >= 0) {
        output = main.charAt(i) + output;
        if ((len - i) % 3 === 0 && i > 0) {
            output = "," + output;
        }
        --i;
    }
    // put decimal part back
    if (parts.length > 1) {
        output += "." + parts[1];
    }
    return output;
}

function numberFormatBn(str) 
{
    var parts = (str + "").split("."),
        main = parts[0],
        len = main.length,
        output = "",
        i = len - 1;

    while(i >= 0) {
        output = main.charAt(i) + output;
        if ((len - i) % 3 === 0 && (len - i) ==3 && i > 0) {
            output = "," + output;
        } else if((len - i - 1) % 2 === 0 && (len - i) > 4 && (len - i) <= 8 && i > 0) {
			output = "," + output;
		} else if((len - i - 1) % 3 === 0 && (len - i) > 8  && (len - i) < 11) {
			output = "," + output;
		} else if((len - i) % 2 === 0 && (len - i) > 11 && i > 0) {
			output = "," + output;
		} 
        --i;
    }
    // put decimal part back
    if (parts.length > 1) {
        output += "." + parts[1];
    }
    return output;
}


/* ------------- START: ABDUL HALIM -----------------------------*/


function display_tooltip(_this, db_balance, remain_val)
{
	//$("#weight"+m).tooltip();
	
	_this.tooltip();
	_this.tooltip({
		open: function (e, o) {
            o.tooltip.animate({ top: o.tooltip.position().top + 10 }, "fast" );
			$(o.tooltip).mouseover(function (e) {
                $("#weight"+m).tooltip('close');
            });
            $(o.tooltip).mouseout(function (e) {});
        },
		events: {
			def:     "mouseover,mouseout",
			input:   "focus,blur",
			widget:  "focus mouseover,blur mouseout",
			tooltip: "mouseover,mouseout"
        },
		//show: { effect: "explode", duration: 80 },
		position: {
			my: "center bottom-20",
			at: "center top",
			using: function( position, feedback ) {
				$( this ).css( position );
				$( "<div>" )
				.addClass( "arrow" )
				.addClass( feedback.vertical )
				.addClass( feedback.horizontal )
				.appendTo( this );
			}
		},
		content: function() { return cellTooltipContent(db_balance, remain_val)},
		close: function (e, o) {},
        show: {
            duration: 800
        }
		
	});
	//.delay(1000).tooltip('close')
	
	_this.tooltip('open');
    setTimeout(function () {
        $(this).tooltip('close'); //close the tooltip
    }, 3000);
}

function cellTooltipContent(db_balance, remain_val)
{
	var rval = "Total :"+ db_balance + "<br/>  Balance :"+remain_val;
	return rval;
}

function close_tooltip()
{
	$(document).tooltip("close");
}

/* ------------- END : ABDUL HALIM -----------------------------*/

/* ------------- START : Zawadul Kawum -------------------------*/

function redirectUrl(controllerName)
{
	window.location = base_url+controllerName;
}

$(document).on('paste drop', '.preventPaste', function(event) { 
  event.preventDefault();
});

/* ------------- END : Zawadul Kawum -----------------------------*/


jQuery(document).ready(function(){
	//jQuery("select").chosen(); 
	// jQuery("select").select2();
	
	/* ------------- START : ABDUL HALIM -------------------------------------*/
	
	/* ------------- START : NUMBER FORMAT JAVASCRIPT ------------------------*/
	
	Number.prototype.format = function(n, x) {
		var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')';
		return this.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$&,');
	};
	
	/* ------------- END : NUMBER FORMAT JAVASCRIPT -------------------------*/
	
	//---------------------- START : FOR CHECKING FLOATING POINT NUMBER --------------------------

	$(document).on("keypress", ".floatNumber", function(event) {
		//console.log(event.which);
		//console.log(event.keyCode);
		var valFloat = $(this).val();
		// var numberofDot = 0;
		// if (valFloat) {
		// 	numberofDot = (valFloat.match(/./g)).length;
		// }
		
		// console.log((valFloat.indexOf('.')).length);

		var charCode = event.keyCode || event.which;

		if ((charCode < 46 || charCode > 58) && (charCode < 2534
		|| charCode > 2543) && charCode!=8 && charCode !=37 && charCode !=39 && charCode !=9) {
			event.preventDefault();
		} // prevent if not number/dot
		else if(charCode != 8 && charCode !=37 && charCode !=39 && charCode == 46 && charCode == 49 && charCode == 50 && valFloat.indexOf('.') != -1) {
			event.preventDefault();
		} // prevent if already dot
		else if((valFloat.indexOf('.') != -1) && (valFloat.substring(valFloat.indexOf('.')).length > 2)) {
			// console.log('This Condtition 3 Called');
			if (charCode !== 8 && charCode !== 46 && charCode != 9 && charCode !=37 && charCode != 39){ //exception
			   event.preventDefault();
			}
		} // prevent if it is more than 4 digit;
		console.log(charCode);
	});

	$(document).on("keypress", ".floatNumber1", function(event) {
		//console.log(event.which);
		//console.log(event.keyCode);
		var charCode = event.keyCode || event.which;
		if ((charCode < 46 || charCode > 58) && (charCode < 2534
		|| charCode > 2543) && charCode!=8 && charCode !=37 && charCode !=39 && charCode !=9) {
			
			event.preventDefault();
		} // prevent if not number/dot
		
		var valFloat = $(this).val();
		
		//if(charCode == 46 && valFloat.indexOf('.') != -1) {
		if(charCode == 8 && charCode == 46 && charCode == 49 && charCode == 50 && valFloat.indexOf('.') != -1) {
			event.preventDefault();
		} // prevent if already dot
		
		if((valFloat.indexOf('.') != -1) && (valFloat.substring(valFloat.indexOf('.')).length > 2)) {
			if (charCode !== 8 && charCode !== 46 && charCode !=9){ //exception
			   event.preventDefault();
			}
		} // prevent if it is more than 4 digit;
		console.log(charCode);
	});
	
	$(document).on("keypress", ".floatNumber4DigitAfterDot", function(event) {
		//console.log(event.which);
		//console.log(event.keyCode);
		var charCode = event.keyCode || event.which;
		if ((charCode < 46 || charCode > 58) && (charCode < 2534
		|| charCode > 2543) && charCode!=8 && charCode !=37 && charCode !=39 && charCode !=9) {
			
			event.preventDefault();
		} // prevent if not number/dot
		
		var valFloat = $(this).val();
		
		if(charCode == 46 && valFloat.indexOf('.') != -1) {
			event.preventDefault();
		} // prevent if already dot
		
		if((valFloat.indexOf('.') != -1) && (valFloat.substring(valFloat.indexOf('.')).length > 4)) {
			if (charCode !== 8 && charCode !== 46 && charCode !=9){ //exception
			   event.preventDefault();
			}
		} // prevent if it is more than 4 digit;
		//console.log(charCode);
	});

	$(document).on("keypress", ".intNumber", function(event) {
		//console.log(event.which);
		var charCode = event.keyCode || event.which;
		if ((charCode < 48 || charCode > 58) && (charCode < 2534
		|| charCode > 2543) && charCode!=8 && charCode !=37 && charCode !=39 && charCode !=9 ) {
			
			event.preventDefault();
		} // prevent if not number/dot
		//console.log(charCode);
	});

	/* ------------- END : ABDUL HALIM -----------------------------*/
});

/* ------------- START : UTTAM KUMAR ROY -----------------------------*/
/* Date Added:14-07-2015
 * Purpose:Sometime jQuery(document).ready(function() does not work 
*/ 

$(document).ready(function() {	 
 	/*
	 * ProjectsController/add() Validation 
	 * Added Date:14-07-2015
	 * Purpose:Project Edit Project Objectives Validation
	*/
	$(document).on("click", ".SearchBtn", function(e){		
		var IsFalse = false;
				
		if ( $("#search_txt").val() == "" ) {
			IsFalse  = true;
			$( "#search_txt").focus();
		}else{
			IsFalse  = false;
		} 	
		
		if(IsFalse){			
			e.preventDefault();
		}		
	});
	//End 	
});

/* ------------- END : UTTAM KUMAR ROY -----------------------------*/



/* ------------- START : ABDUL HALIM ---------------------------*/

 	function overlay( show ) {
		$('body > .ajax-overlay').remove();
		if( show ) {
			$('body').append( '<div class="ajax-overlay" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0, .5); z-index: 1000;"><span class="overlay-icon" style="position: absolute; top: 50%; left: 50%; z-index: 1001;"><span id="ajaxloader3"></span></span></div>' );
		} else {
			$('body > .ajax-overlay').fadeOut('fast', function() {
				$(this).remove();
			})
		}
	}

/* ------------- END : ABDUL HALIM -----------------------------*/

/* When Select EMAIL then email field should be Show when Phone then Phone No should be show*/


$(document).on("change",".logintype", function(e){
  var chckedVal = $(this).val();

  if (chckedVal == 1 || chckedVal == "1") {
  
    $( ".phoneAddr" ).hide();
    $( ".emailAddr" ).show();
    
	$(".emailAddr input[name=email]").prop("disabled", false);
	$(".phoneAddr input[name=mobile_no]").prop("disabled", true);

  } else if(chckedVal == 2 || chckedVal == "2") {
  	
    $( ".phoneAddr" ).show();
    $( ".emailAddr" ).hide();

    $(".emailAddr input[name=email]").prop("disabled", true);
    $(".phoneAddr input[name=mobile_no]").prop("disabled", false);	
  } 
});


if(loginUsing == 1){
    $( ".phoneAddr" ).hide();
    $( ".emailAddr" ).show();
	$(".logintype[value=1]").attr("checked", true);
	$(".emailAddr input[name=email]").prop("disabled", false);
	$(".phoneAddr input[name=mobile_no]").prop("disabled", true); 
}

if(loginUsing == 2){
    $( ".phoneAddr" ).show();
    $( ".emailAddr" ).hide();
    $(".emailAddr input[name=email]").prop("disabled", true);
    $(".phoneAddr input[name=mobile_no]").prop("disabled", false);
    $(".logintype[value=2]").attr("checked", true);
}

$(document).on("click","#same-as-address", function(e){
	var chckedVal = $(this).prop("checked");
	var address = $('#address').val();
	if(chckedVal == true){
		$('#delivery-address').val('');
		$('#delivery-address').val(address);
	}else{
		$('#delivery-address').val('');
	}
});
$(document).on("input","input[name=email]", function(e){
	var typedVal = $(this).val();
	isValidEmailAddress(typedVal);
});

if(controllerName == "Products" && actionName != "index") {
	var principalId = $("#principalId").val();
	var divisionId = (selectedDivision) ? selectedDivision : 0;

	getDivisions(principalId,function(data) {	
	    if (data != ''){
	        $("#divisionId").html(data);
	    } 
	});
}


$(document).on("change","#principalId", function(e){
  	var principalId = $(this).val();
  	if(principalId != '') {
        getDivisions(principalId, function(data) {
        	
            if (data != ''){
                $("#divisionId").html(data);
            } 
        });
    } 
});

function getDivisions(principalId,callback){
    $.ajax({
        type: "post",
        url: base_url+"Products/getDivisions",
        data: {'paims_principal_id':principalId,'paims_division_id':divisionId}
    }).done(function(msg){
        callback(msg);
    });
}


$(document).on("input",".bfspClass", function(e){
  	var brandVal = $("#brandId").val();
  	var formVal = $("#formId").val();
  	var strengthVal = $("#strengthId").val();
  	var packSizeVal = $("#packSizeId").val();

  	var description = brandVal+'-'+formVal+'-'+strengthVal+'-'+packSizeVal;
  	 $("#descriptionId").val(description);  	
});


/* Good Receive Module Product Select System */

$(document).on("change","#receviedPrincipalId", function(e){
	var principalId = $(this).val();
	jQuery('.addProductDiv div').html('');
	$("#goodsSubmitBtn").attr('disabled',true);
	$("#prod-label").css("display","initial"); 
	
	if(principalId != '') {
        getProductList(principalId, function(data) {
            if (data != ''){
                $("#productId").html(data);
            } 
        });
    } else {
    	$("#productId").html("<option value=''> Select Product </option>");
    }
	
});
function getProductList(principalId,callback){
    $.ajax({
        type: "post",
        url: base_url+controllerName+"/getProductList",
        data: {'paims_principal_id':principalId}
    }).done(function(data){
    	callback(data);
    });
}

var appendCount = 0;
var appendDiscountBreakCount = 0;


jQuery("#productId").select2();
jQuery("#productsId").select2();
jQuery("#grRefNoId").select2();
jQuery("#purchaseItemId").select2();
jQuery("#patientId").select2();
jQuery("#contractLevel").select2();
jQuery(".select2Class").select2();


$(document).on("click","#addDiscountBreakBtn", function(){
	$.ajax({
        type: "post",
        url: base_url+controllerName+"/addDiscountBreak",
        data: {'appendDiscountBreakCount':appendDiscountBreakCount}
    }).done(function(data){     
        $(data).fadeIn('slow').appendTo('.addDiscountBreakDiv');	
    });
    $("#discountBreakSubmitBtn").attr('disabled',false);
	++appendDiscountBreakCount;
});

$(document).on('click', '.delDiscountBreakBtn', function () {
 	var cntVal = $(this).attr("cntAttr");
	$("#addendedDiv"+cntVal).remove();
	$("#discountBreakSubmitBtn").attr('disabled',false);

	 if($('.addDiscountBreakDiv').children().length == 0) { 
	  	$("#discountBreakSubmitBtn").attr('disabled',true);
	 }
	
});
/* Bonus Delete Button */
$(document).on('click', '.delBonusBreakBtn', function () {
 	var cntVal = $(this).attr("cntAttr");
	$(".addendedDiv"+cntVal).remove();
	/* Check for empty select */
	if(!$.trim( $('.addBonusBreakDiv').html() ).length == true) {
	 	$("#bonusSubmitBtn").attr('disabled',true);
		// $("#prod-label").css("display","initial"); 	
	}
});
/* End of Bonus Delete Button */

$("#patientList").css('display','none').find('select').prop('disabled',true);
$("#productList").css('display','none').find('select').prop('disabled',true);
$(document).on("change","#contractLevel", function(){
	var contractLevel = $(this).val();
	if ( contractLevel == 2) {
		$("#productList").css('display','block').find('select').prop('disabled',false).select2();
		// $("#patientList").css('display','none').find('select').select2('destroy').prop('disabled',true);
		$("#patientList").css('display','none').find('select').prop('disabled',true);
	} else if ( contractLevel == 3) {
		// $("#productList").css('display','none').find('select').select2('destroy').prop('disabled',true);
		$("#productList").css('display','none').find('select').prop('disabled',true);
		$("#patientList").css('display','block').find('select').prop('disabled',false).select2();
	} else if ( contractLevel == 4) {
		$("#productList").css('display','block').find('select').prop('disabled',false).select2();
		$("#patientList").css('display','block').find('select').prop('disabled',false).select2();
	} else {
		// $("#productList").css('display','none').find('select').select2('destroy').prop('disabled',true);
		// $("#patientList").css('display','none').find('select').select2('destroy').prop('disabled',true);
		$("#productList").css('display','none').find('select').prop('disabled',true);
		$("#patientList").css('display','none').find('select').prop('disabled',true);
	}
});


$(document).on("change","#productId", function(e){
	var productId = $(this).val();
	var goodRcvType = $(this).attr("goodReceiveAttr");
	getProductInfo(productId,goodRcvType);
	++appendCount;
});



function getProductInfo(productId,_goodRcvType){
    $.ajax({
        type: "post",
        url: base_url+controllerName+"/getProductInfo",
        data: {'id':productId}
    }).done(function(data){     
        addProduct(data,_goodRcvType)
    });
}


function addProduct(data,_goodRcvType) 
{	

	var _descClass = 'class="col-md-3 col-sm-3 col-xs-6"';	
	var _qtyClass = 'class="col-md-2 col-sm-2 col-xs-2"';	

	var addOrSubtract = "";
	var classForTextArea = "";
	if (_goodRcvType == 2) {
		var _descClass = 'class="col-md-2 col-sm-2 col-xs-3"';
		var _qtyClass = 'class="col-md-1 col-sm-1 col-xs-1"';	

		var addOrSubtract = '<div class="col-md-2 col-sm-2 col-xs-2">'+
		    '<div class="input text"> <select name="good_receive_childrens['+appendCount+'][add_or_subtract]" class="form-control"> <option value="+">Add</option> <option value="-">Subtract</option> </select> </div></div>';
	};
	obj = JSON.parse(data);
	
	var productIds = obj['id'];
	var productCode = obj['product_code'];
	var productDesc = obj['description'];
	var prodIdHdnField = '<input type="hidden" name="good_receive_childrens['+appendCount+'][paims_product_id]" value="'+productIds+'">';

	var appendedTr = 
		'<div class="form-group" id="addendedDiv'+appendCount+'">'+
			prodIdHdnField+
		  '<div class="col-md-2 col-sm-2 col-xs-5">'+
		    '<div class="input text"><input type="text" id="product-code" autocomplete="off" placeholder="Product Code" class="form-control" name="good_receive_childrens['+appendCount+'][product_code]" value="'+productCode+'" readonly="true"></div></div>'+
		  '<div '+_descClass+'>'+
		    '<div class="input text"><textarea id="product-description" autocomplete="off" placeholder="Description" class="form-control" name="good_receive_childrens['+appendCount+'][product_description]" value="'+productDesc+'" readonly="true">'+productDesc+'</textarea></div></div>'+
		  '<div class="col-md-2 col-sm-2 col-xs-5">'+
		    '<div class="input text"><input type="text" id="batch-no'+appendCount+'" autocomplete="off" placeholder="Batch No" class="form-control prodBatchNo" name="good_receive_childrens['+appendCount+'][batch_no]" required></div></div>'+
		  '<div class="col-md-2 col-sm-2 col-xs-5">'+
		    '<div class="input text"><input type="text" id="expiry-date'+appendCount+'" autocomplete="off" placeholder="Expiry Date" class="form-control datePicker expDate" cntAttr = "'+appendCount+'" name="good_receive_childrens['+appendCount+'][expiry_date]" oninvalid="invalidPatternMsgHtml(this);" onchange="invalidPatternMsgHtml(this);" pattern="(0[1-9]|1[0-9]|2[0-9]|3[01])-(0[1-9]|1[012])-[0-9]{4}" required></div></div>'+addOrSubtract+//For Good Receive Reverse
		  '<div '+_qtyClass+'>'+
		    '<div class="input text"><input type="text" style="margin:0;" id="qty'+appendCount+'" autocomplete="off" placeholder="Qty" class="form-control intNumber prodQty" name="good_receive_childrens['+appendCount+'][qty]" required></div></div>'+
		  '<div class="col-md-1 col-sm-1 col-xs-3">'+
		     '<button title="Delete" class="btn btn-danger delBtn" cntAttr = "'+appendCount+'" type="button"><i class="fa fa-close"></i></button></div>'+
		'</div>';
		var todateObj = new Date();
		var toDate = todateObj.getDate();
		var toMonth = todateObj.getMonth();
		var toYear = todateObj.getFullYear();
		
		$(appendedTr).fadeIn('slow').appendTo('.addProductDiv');	
		$('.datePicker').datepicker({
		    dateFormat: 'dd-mm-yy',
		    changeYear: true,
		    changeMonth: true,
		    minDate: new Date(toYear,toMonth,toDate),
		 	onSelect: function(selected) {
		 		var currentval = $('.datePicker').attr('cntAttr');
		       	$('#expiry-date'+currentval).val(selected);
		    }
		});
		$("#prod-label").css("display","none");
		$("#goodsSubmitBtn").attr('disabled',false);

		$('#productId').select2('destroy').find('option[value=""]').prop('selected',true).parent().select2();			
}


$(document).on('click', '.delBtn', function () {
 	var cntVal = $(this).attr("cntAttr");
	$("#addendedDiv"+cntVal).remove();
	$("#goodsSubmitBtn").attr('disabled',false);

	/* Check for empty select */
	if(!$.trim( $('.addProductDiv').html() ).length == true) {
	 	$("#goodsSubmitBtn").attr('disabled',true);
		$("#prod-label").css("display","initial"); 	
	}
	/*End of Check for empty select*/
});

/* End of Goods Module System Product Select */



/************ Bonus Module *****************/
$("#bonusSubmitBtn").attr('disabled',true);
$(document).on("click","#addBonusBtn", function(){
	$.ajax({
        type: "post",
        url: base_url+controllerName+"/addBonus",
        data: {'appendBonusBreakCount':appendDiscountBreakCount}
    }).done(function(data){     
        $(data).fadeIn('slow').appendTo('.addBonusBreakDiv');
     
    });
    $("#bonusSubmitBtn").attr('disabled',false);
	++appendDiscountBreakCount;
});

$(document).on('click', '.delDiscountBreakBtn', function () {
 	var cntVal = $(this).attr("cntAttr");
	$("#addendedDiv"+cntVal).remove();
	if(!$.trim( $('.addBonusBreakDiv').html() ).length == true) {
	 	$("#bonusSubmitBtn").attr('disabled',true);
	}
});


/********* End of Bonus Module **************/


/******** Order Product Information ************/

if (controllerName == "Purchases" && (actionName == "edit")) {
	// $("#goodsSubmitBtn").attr('disabled',false);
	// $("#prod-label").css("display","none");
	appendCount = rePurchaseAppendCount;
	
}

/************* Select Group then Item then Perticular After that cart will be added **********/
$("#groupId").on('change',function(e){
  var gId = $(this).val();
  if (gId != "") {
    $.ajax({
        type: "post",
        url: base_url+controllerName+"/getItems",
        data: {'group_id':gId},
        dataType: 'html',
        success: function(response){
            $(".itemTypeClass").html(response);
           
        },
        error: function(jqXHR, textStatus, errorThrown){          
        }
    });
  };
  
});

$(document).on("change","#itemTypeId", function(e){
  var iTId = $("#itemTypeId").val();
  if (iTId != "") {
    $.ajax({
        type: "post",
        url: base_url+controllerName+"/getParticular",
        data: {'item_type_id':iTId},
        success: function(response){
          $(".purchaseItemClass").html(response); 
        },
        error: function(jqXHR, textStatus, errorThrown){          
        }
    });
  };
});


$(document).on("change","#purchaseItemId", function(e){
	var productId = $(this).val();
	getPurchaseItemInfo(productId);
	++appendCount;
});
$(document).on("keyup","#itemFromBCReader", function(e){
	var productId = $(this).val();	
	if (productId != "") {
		getPurchaseItemInfo(productId);
		++appendCount;
	};
	
});


function getPurchaseItemInfo(productId){
    $.ajax({
        type: "post",
        url: base_url+controllerName+"/getItemInfo",
        data: {'id':productId}
    }).done(function(data){
        addPurchaseItem(data)
    });
}

function addPurchaseItem(data) 
{	
	
	if (data == "[]") {
	    return;
	}
	obj = JSON.parse(data);
	// console.log(obj);
	//  return;
	var item_id = obj['item_id'];
	var item_name = obj['item_name'];
	var item_description = obj['item_description'];
	var unit_name = obj['unit_name'];

	var appendedTr = 
		'<div class="form-group" id="addendedDiv'+appendCount+'">'+
		  '<input type="hidden" name="purchase_childrens['+appendCount+'][item_id]" value="'+item_id+'">'+
		  '<div class="col-md-1 col-sm-1 col-xs-1">'+
		    '<div class="input text text-center"><b>'+appendCount+'</b></div></div>'+
		  '<div class="col-md-2 col-sm-2 col-xs-2">'+
		    '<div class="input text"><input type="text" id="product-code" autocomplete="off" placeholder="Product Code" class="form-control" name="purchase_childrens['+appendCount+'][item_name]" value="'+item_name+'" readonly="true"></div></div>'+
		  '<div class="col-md-3 col-sm-3 col-xs-3">'+
		    '<div class="input text"><input type="text" id="product-description" autocomplete="off" placeholder="Description" class="form-control" name="purchase_childrens['+appendCount+'][item_description]" value="'+item_description+'" readonly="true"></div></div>'+
		   '<div class="col-md-3 col-sm-3 col-xs-3">'+
		    '<div class="input text"><input type="text" id="product-description" autocomplete="off" placeholder="Description" class="form-control" name="purchase_childrens['+appendCount+'][unit_name]" value="'+unit_name+'" readonly="true"></div></div>'+	    
		  '<div class="col-md-2 col-sm-2 col-xs-2">'+
		    '<div class="input text"><input type="text" cntAttr = "'+appendCount+'" autocomplete="off" placeholder="Quantity" class="form-control orderQty" name="purchase_childrens['+appendCount+'][quantity]" maxLength="9" required></div></div>'+
		  '<div class="col-md-1 col-sm-1 col-xs-1">'+
		     '<button title="Delete" class="btn btn-danger orderDelBtn" cntAttr = "'+appendCount+'" type="button"><i class="fa fa-close"></i></button></div>'+
		'</div>';

			$(appendedTr).fadeIn('slow').appendTo('.addProductDiv');
			$("#prod-label").css("display","none");
			$("#goodsSubmitBtn").attr('disabled',false);
			$("#goodsSubmitPrintBtn").attr('disabled',false);
			
			// $('#purchaseItemId').find('option[value="'+productIds+'"]').remove();
			$('#purchaseItemId').select2('destroy').find('option[value=""]').prop('selected',true).parent().select2();			
}

$(document).on("keyup",".orderQty",function(){
	var countId = $(this).attr('cntAttr');
	
	var qtyVal = $("#qty"+countId).val();
	qtyVal = (qtyVal) ? qtyVal : 0;
	qtyVal =  parseFloat(qtyVal).toFixed(2);
	
	var priceVal = $("#price"+countId).val();
	priceVal =  parseFloat(priceVal).toFixed(2);
	priceVal = (priceVal) ? priceVal : 0;
	
	var totalPrice = qtyVal * priceVal;
	totalPrice = (totalPrice) ? totalPrice : 0;
	totalPrice = totalPrice.toFixed(2);

	$("#total"+countId).val(totalPrice);

	var subTotalValue = 0;
	$(".unitTotal").each(function(){
        
        inputVal = $(this).val();
        subTotalValue += parseFloat(inputVal); 
    });
    $(".subTotal").val(subTotalValue.toFixed(2));

	var deliveryCharge = $(".deliveryCharge").val();
	deliveryCharge = (deliveryCharge) ? parseFloat(deliveryCharge) : 0;

	var gtotalFinal = subTotalValue + deliveryCharge;
	gtotalFinal = gtotalFinal.toFixed(2);

	$(".grandTotal").val(gtotalFinal);
});

$(document).on('click', '.orderDelBtn', function () {
 	var cntVal = $(this).attr("cntAttr");
	$("#addendedDiv"+cntVal).remove();
	$("#goodsSubmitBtn").attr('disabled',false);
	$("#goodsSubmitPrintBtn").attr('disabled',false);
	$( ".orderQty" ).trigger( "keyup" );
		
	/* Check for empty select */	
	if(!$.trim( $('.addProductDiv').html() ).length == true) {
	 	$("#goodsSubmitBtn").attr('disabled',true);
	 	$("#goodsSubmitPrintBtn").attr('disabled',true);
		$("#prod-label").css("display","initial"); 
		$(".subTotal").val(0.00);
		$(".grandTotal").val(0.00);
	}	
	/*End of Check for empty select*/
});



/************ End of Order Product Information **********/


$('.datePicker').datepicker({
    dateFormat: 'dd-mm-yy',
    changeYear: true,
    changeMonth: true
    /*,
 	onSelect: function(selected) {
       var months = $('.monthIds :selected').val();
    }*/
});

	$('#start_date_search').datepicker({ 
        numberOfMonths: 1,
        showButtonPanel: true,
        showOtherMonths: true,
        selectOtherMonths: true,
        showButtonPanel: false,
        changeMonth: true,
        changeYear: true,
        showAnim: "slideDown",
        dateFormat: 'dd-mm-yy',
        onSelect: function(selected) {
          $("#end_date_search").datepicker("option","minDate", selected)
        },
    });
    $('#end_date_search').datepicker({ 
        numberOfMonths: 1,
        showButtonPanel: true,
        showOtherMonths: true,
        selectOtherMonths: true,
        showButtonPanel: false,
        changeMonth: true,
        changeYear: true,
        showAnim: "slideDown",
        dateFormat: 'dd-mm-yy',
        onSelect: function(selected) {
          $("#start_date_search").datepicker("option","maxDate", selected)
        },
    });




$(document).on('click', 'a#login', function () {
	$("html, body").animate({ scrollTop: 0 }, "fast");
	$(document).find('title').html('Login');
});
$(document).on('click', 'a#register', function () {
	$("html, body").animate({ scrollTop: 0 }, "fast");
	$(document).find('title').html('Signup');
});


//var i=0;
$(document).find("#sidebar-menu ul.nav.side-menu > li").each(function() {
	//i++;
	//if ( i<3 ) return;
	if( $(this).children("ul").length > 0 ){
		var cnt = $(this).find("ul").children().length;
		if (cnt <= 0) {
			$(this).remove();
		}
	}
});

/*********** Method for EDIT User Access *********************/
jQuery(document).ready(function(){
	if (actionName == "edit") {
	  	// var currentPassword = md5()
	  	var wrongAttempt = 0;
	  	$('#passwordModal').modal({
	      backdrop: 'static',
	      keyboard: false
	  	});

	  	$(".passwordSendBtn").on("click",function(e){
		    $(".currentPasswordErr").hide();
		    var currentPassword = $(".currentPassword").val();
		    if (currentPassword == "") {
		      	$(".currentPasswordErr").html("<b> Password is Required!!!!</b>");
		      	$(".currentPasswordErr").show();
		    } else {
		      	$(".modal-layer").show(); // Show Ajax Loader
		      	$(".ajaxLoader").show(); // Show Ajax Loader
		      	var url = base_url+"Users/checkPassword";
		      	$.ajax({
		            type: "POST",
		            url: url,               
		            data: { currentPassword: currentPassword },              
		            success: function(response){
		                $(".modal-layer").hide();
		                $(".ajaxLoader").hide();
		                if (response == 1 || response == '1' ) {
		                  wrongAttempt = 0;
		                  $('#passwordModal').modal('hide') ;                    
		                } else {     
		                  ++wrongAttempt;                 
		                  $(".currentPasswordErr").html("<b> Password is Incorrect!!!! Attempt ("+wrongAttempt+")</b>");
		                  $(".currentPasswordErr").show();
		                  if (wrongAttempt == 3) {
		                    window.location.href = base_url+"UserForceToLogout";
		                  };
		                };
		            },
		            error: function(jqXHR, textStatus, errorThrown){
		                $(".modal-layer").hide();     
		                $(".ajaxLoader").hide();
		                $(".currentPasswordErr").html("<b> Internal Server Error!!!!</b>");
		            }
		        });
		    };

	  	});  
	};
	if (actionName == "edit" || actionName == "add") {		
		// This default onbeforeunload event
		var showMsg = "true";
		$(':submit').on('click', function(e) {
			showMsg = "false";			
		});
		/*$('form').on('submit', function(e) {
			showMsg = "false";		   
		});*/

		window.onbeforeunload = function(){
			if (showMsg == "true") {
				return "Do you want to leave?";
			} else {
				return undefined;
			};
		    
		}
		// A jQuery event (I think), which is triggered after "onbeforeunload"
		/*$(window).unload(function(){
		    return true;
		});*/
	}
});

/**************** End of Method for Edit User Access *****************/