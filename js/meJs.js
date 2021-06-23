const span = document.querySelectorAll('span');

span[0].addEventListener('click',function(){
    span[0].style.color = '#9BC8FF';
    span[1].style.color = '#FFAEBD';
});

span[1].addEventListener('click',function(){
    span[1].style.color = '#9BC8FF';
    span[0].style.color = '#FFAEBD';
})