function initGerritmine(redmineUrl) {
  function run() {
    var elems = Array();
    elems.push(document.getElementsByClassName('G1cxqn1eJB')[0]);
    elems.push(document.getElementsByClassName('G1cxqn1eJI')[0]);
    for(var i = 0; i < elems.length; i++) {
      var elem = elems[i];
      var html = elem.innerHTML.replace(/([^>"])#([0-9]+)/g,'$1<a href="' + redmineUrl + 'issues/$2">#$2</a>');
      if(html != elem.innerHTML)
        elem.innerHTML = html;
    }
  }
  setInterval(run, 500);
}