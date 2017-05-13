$(function(){
	
	var city=document.getElementById('input1').value;
	function clock(){
		var newDate=new Date();
		var timer=newDate.toLocaleTimeString();
		$('#theTime').html(timer);
	}
	clock();
	setInterval(clock,1000);
	var city="大连";
	
	function oajax(){
		var url='http://v.juhe.cn/weather/index?format=2&cityname='+city+'&key=89d1bf67f2e33d9c9d9aaa0da3cd1d2d';
		$.ajax({
			type:"get",
			url:url,
			dataType:'jsonp',
	//		async:true,
			data:{location:city},
			success:function(data){
				var now=data.result.sk;
				var today=data.result.today;
	//			console.log(data.result.today.city);
				var future=data.result.future;
				$('#section1 b').eq(0).html(today.city+' '+today.week+' '+today.date_y);
				$('#section1 b').eq(1).html('<h3>'+today.temperature+' '+today.weather+'</h3>');
				$('#section1 b').eq(2).html(now.humidity);
				$('#section1 b').eq(3).html(today.dressing_index+' '+today.dressing_advice);
				$('#section1 b').eq(4).html(today.wash_index);
				$('#section1 b').eq(5).html(today.travel_index);
				$('#section1 b').eq(6).html(today.exercise_index);
				$('#section1 b').eq(7).html(today.uv_index);	
	//			console.log(future[0]); 
				$('#future1').html(future[1].week+': 温度:'+future[1].temperature+'天气:'+future[1].weather+'风'+future[1].wind);
				$('#future2').html(future[2].week+': 温度:'+future[2].temperature+'天气:'+future[2].weather+'风'+future[2].wind);
				$('#future3').html(future[3].week+': 温度:'+future[3].temperature+'天气:'+future[3].weather+'风'+future[3].wind);
				$('#future4').html(future[4].week+': 温度:'+future[4].temperature+'天气:'+future[4].weather+'风'+future[4].wind);
				$('#future5').html(future[5].week+': 温度:'+future[5].temperature+'天气:'+future[5].weather+'风'+future[5].wind);
				$('#future6').html(future[6].week+': 温度:'+future[6].temperature+'天气:'+future[6].weather+'风'+future[6].wind);
			}
		});
	};
oajax();	
$('#btn').click(function(){
		city=document.getElementById('input1').value;
		console.log(city);
		oajax();
});
});