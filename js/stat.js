/* eslint-disable spaced-comment */
'use strict';

window.renderStatistics = function (ctx, names, times) { /* window - объект, function - метод объекта*/
  ctx.fillRect(110, 20, 420, 270); // тень
  ctx.fillStyle = 'white';
  ctx.fillRect(100, 10, 420, 270); /* непосредсвенно фигура*/
  ctx.fillStyle = '#210'; /* цвет текста*/
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура, вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 55);
  var max = -1;
  for (var i = 0; i < times.length; i++) { /* количество результатов времени*/
    var time = times[i];
    if (time > max) {
      max = time;
    }
  }
  var histogramHeight = 150;
  var step = histogramHeight / max;
  //ctx.textBaseline = 'top'; // Рисуем надпись от левого верхнего угла
  for (var i = 0; i < times.length; i++) {
    ctx.font = '16px PT Mono';
    if (names[i] !== 'Вы') {
      var gradient = ctx.createLinearGradient(32, 17, 240, 1);
      gradient.addColorStop(0, 'rgba(32, 17, 240, 1)');	
      gradient.addColorStop(1, 'rgba(42, 80, 140, 1)');
      ctx.fillStyle = gradient;
    } else {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    }
    ctx.fillRect(130 + 100 * i, 100, 40, times[i] * step);
    ctx.fillStyle = 'black';
    ctx.fillText(names[i], 130 + 100 * i, 260);
    ctx.fillText(times[i].toFixed(0), 130 + 100 * i, 80);
  }
};
