function ConfigurationManager() {
  var fields = Array();
  
  this.addField = function(name, defaultValue) {
    fields[name] = defaultValue;
  }

  function variableName(name) {
    return "enable_" + name;
  }
  
  this.get = function(name) {
    var varName = variableName(name);
    if(!name in fields)
      return "";
    if(varName in localStorage) {
      return localStorage[varName];
    } else {
      return fields[name];
    }
  }

  this.set = function(name, value) {
    localStorage[variableName(name)] = value;
  }
  return this;
}

function defaultConfigurationManager() {
  var configuration = new ConfigurationManager();
  configuration.addField("redmine_address", "http://address.to.redmine/");
  configuration.addField("gerrit_address", "http://address.to.gerrit/");
  return configuration;
}
