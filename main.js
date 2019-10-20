var input = document.getElementById('num');

function calc(e){ input.value += e; }

function delet(){ input.value = ''; }

function rslt(){ input.value = eval(input.value); }