window["comm100main"] = (function (filename) {
  window["Comm100API"] = window["Comm100API"] || {};
  var api = window["Comm100API"];
  api.call = function (name) {
    return (new Function('return ' + name)).call();
  };
  api.chat_buttons = api.chat_buttons || [];
  return function (main, standby, isStandby) {
    api.main = main;
    api.standby = standby;
    var host = isStandby ? standby : main;
    var src = host + '/js/' + filename;

    var iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.id = "comm100-iframe";
    document.body.appendChild(iframe);
    var innerDoc = iframe.contentDocument;
    innerDoc.open();
    innerDoc.write('<!doctype html><head><script src="' + src + '" async type="text/javascript"></script></head><body></body>');
    innerDoc.close();
  };
}('bundle.585a44a46187c7f361f9915835c6c875.js'));
window.comm100main('https://chatserver.comm100.com');delete window.comm100main;