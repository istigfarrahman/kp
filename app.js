var App = (function(undefined) {
	
info = function(event) {
	
	$("#loading1").show();
	var classes = ['accept', 'cancel', 'biru'];
	$('li').addClass(function(i, c) {
		return classes[i % classes.length];
	});
	
	var checkData1 = $('#uel li').size();
	if(checkData1=='0'){
		var myInfo = "http://gis2010.besaba.com/cuik/ambil.php";
		var parseResponse = function(result){
		allData = result.items;
		$("#loading1").hide();
			$.each(allData, function(i, data) {
				$('#uel').append(
					'<li class="thumb big">' +
						'<img src="http://gis2010.besaba.com/cuik/img/'+data.fotosjr+'.JPG" />' +
						'<div>' +							
							'<strong>'+ data.namasjr +'</strong>' +
							'<small>'+ data.ket +'</small>' +
						'</div>' +
						'<li id="readmore" style="display: none;">' +
							  '<span class="text tiny">'+ data.ket +'</span>' +
						'</li>' +
					'</li>'
				);
			});
			var total = $('#uel li').size();
			var uTotal = parseInt(total)/2;
			$$('a[name="ttl"] > span').html(uTotal);
			
			var classes = ['accept', 'cancel', 'warning'];
			$('li').addClass(function(i, c) {
				return classes[i % classes.length];
			});
		};
		Lungo.Service.get(myInfo, null, parseResponse, "json");
	}else{
		$("#loading1").hide();
		
	}
	
	Lungo.Service.Settings.error = function(type, xhr){
		alert('Application cannot find server');
	};
};
	
	
	Lungo.dom('#info-art li').tap(function(event) {
		event.stopPropagation();
		if($(this).find('#info-art li').hasClass('active')) {
			Lungo.dom('#info-art li').removeClass('active');
		}else{
			Lungo.dom('#info-art li').removeClass('active');
			Lungo.dom(this).toggleClass('active');
			$(this).next().toggle();	
		}
	});
	
    return {
		info:info
    };

})(Lungo);

Lungo.Events.init({
	'load section#info'   		: App.info,
});

Lungo.ready(function() {
	
});
