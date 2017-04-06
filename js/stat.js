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
  for (var j = 0; j < times.length; j++) { /* количество результатов времени*/
    var time = times[j];
    if (time > max) {
      max = time;
    }
  }
  var histogramHeight = 150;
  var step = histogramHeight / max;
  ctx.textBaseline = 'top'; // Рисуем надпись от левого верхнего угла

  for (var i = 0; i < times.length; i++) {
    ctx.font = '16px PT Mono';
    ctx.fillStyle = names[i] === 'Вы' ? 'rgba(255, 0, 0, 1)' : 'rgba(0, 0, 255, ' + (Math.random() + 0.1).toFixed(1) + ')';
    ctx.fillRect(130 + 100 * i, 250, 40, times[i] * -1 * step);
    ctx.fillStyle = 'black';
    ctx.fillText(names[i], 130 + 100 * i, 260);
    ctx.fillText(times[i].toFixed(0), 130 + 100 * i, 80);
  }
};
