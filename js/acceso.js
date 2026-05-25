$(document).ready(function () {
  $('.btn1').click(function () {
    location.reload();
  });

  var collapseButtons = ['AIP01', 'AIP02', 'AIP03', 'AIP04', 'AIP05'];

  collapseButtons.forEach(function (buttonClass) {
    $('.' + buttonClass).click(function () {
      $('#menu').hide();
      $('#contentId' + buttonClass).collapse('show');
    });
  });

  $('.AIP06').click(function () {
    window.location.href = 'https://www.uv.mx/transparencia/promocion/plan-dai-2023/';
  });
});