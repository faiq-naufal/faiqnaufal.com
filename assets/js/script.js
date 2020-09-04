$(document).ready(function() {
  $(".animsition").animsition({
    inDuration: 1500,
    outDuration: 1500,
    linkElement: '.animsition-link',
    loading: true,
    timeout: true,
    timeoutCountdown: 4000,
    loadingParentElement: 'body', //animsition wrapper element
    loadingClass: 'animsition-loading',
    loadingInner: '', // e.g '<img src="loading.svg" />'
    onLoadEvent: true,
    browser: [ 'animation-duration', '-webkit-animation-duration'],
    transition: function(url){ window.location.href = url; }
  });
});
