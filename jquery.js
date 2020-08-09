jQuery('#fader img:gt(0)').hide();

setInterval(function () {
  jQuery('#fader :first-child')
    .fadeTo(500, 0)
    .next('img')
    .fadeTo(500, 1)
    .end()
    .appendTo('#fader');
}, 4000);
$('.btn-next').on('click', function () {
  jQuery('#fader :first-child')
    .fadeTo(500, 0)
    .next('img')
    .fadeTo(500, 1)
    .end()
    .appendTo('#fader');
});
$('.btn-prev').on('click', function () {
  jQuery('#fader :nth-of-type(odd)')
    .fadeTo(500, 0)
    .prev('img')
    .fadeTo(500, 1)
    .end()
    .appendTo('#fader');
});
