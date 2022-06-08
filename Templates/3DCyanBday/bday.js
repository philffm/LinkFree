const iname =  new URLSearchParams(window.location.search).get('n');
console.log(iname);

if (iname){

    document.querySelectorAll('#userNameFull')[0].innerHTML = ('Yay, '+ iname + '✨')

}


