
document.body.onload = function(){
  let wrap = document.getElementsByClassName('preload-wrapper')[0];
  if(wrap.classList.contains('load')) return;

  setTimeout(()=> wrap.classList.add('load'), 5);

}