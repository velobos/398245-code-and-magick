'use strict';

window.renderStatistics = function (ctx, names, times) { /*window - объект, function - метод объекта*/
	//ctx.fillStyle = 'black';
	ctx.fillRect(110, 20, 420, 270);
	ctx.fillStyle = 'white';
	ctx.fillRect(100, 10, 420, 270); /*непосредсвенно фигура*/
	ctx.fillStyle = '#210'; /*цвет текста*/
	ctx.font = '16px PT Mono';
	ctx.fillText('Ура, вы победили!', 120, 40);
	ctx.fillText('Список результатов:', 120, 55);

	var max = -1;
	var maxIndex = -1;	

	for(var i=0; i<times.length; i++) { /*количество результатов времени*/
		var time = times[i];
		if (time > max) {
			max=time;
			//maxIndex = i;
		}
	}
	var histogramHeight = 150;
	var step = histogramHeight / max;

	

	
	ctx.textBaseline = 'top'; // Рисуем надпись от левого верхнего угла
  	for(var i = 0; i < times.length; i++) {
		ctx.font = '16px PT Mono';
		ctx.fillStyle = (names[i],'#210');
    	ctx.fillRect(120 + 60 * i, 100, 40, times[i] * step);
    	ctx.fillText(names[i],  120 + 60 * i, 260);
		ctx.fillText(times[i].toFixed(0), 120 + 60 * i, 80);
		
		/*ctx.fillText(names[i], 120 + 60 * i, 80);
		ctx.fillText(times[i].toFixed(0), 120 + 60 * i, 260);*/
		
		
  	}
};
