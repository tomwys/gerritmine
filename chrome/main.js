function getConfiguration(params, callback) {
  params = params || [];
  return chrome.extension.sendRequest({what: "configuration", names: params}, function(response) {
    callback(response);
  });
}

getConfiguration(['redmine_address', 'gerrit_address'], function test(params) {
  if(document.location.toString().indexOf(params['gerrit_address']) === 0) {
    initGerritmine(params['redmine_address'])
  }
});