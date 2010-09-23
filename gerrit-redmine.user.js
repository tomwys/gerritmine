// ==UserScript==
// @include http://redmine.address.example.com:8080/*
// ==/UserScript==
var elems = Array();
elems.push(document.getElementsByClassName('G1cxqn1eJB')[0]);
elems.push(document.getElementsByClassName('G1cxqn1eJI')[0]);
for(var i = 0; i < elems.length; i++) {
    var elem = elems[i];
    elem.innerHTML = elem.innerHTML.replace(/#([0-9]+)/g,'<a href="http://gerrit.address.example.com/issues/$1">#$1</a>');
}
