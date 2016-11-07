// chrome.browserAction.onClicked.addListener(function(activeTab){
//   var newURL = "http://stackoverflow.com/";
//   chrome.tabs.create({ url: newURL });
// });
var tabUrls = [];
function save() {
	tabUrls = [];
	chrome.windows.getAll({populate:true},function(windows){
  		windows.forEach(function(window){
    		window.tabs.forEach(function(tab){
    			tabUrls.push(tab.url);
    		});
  		});
	});
}
function open(){
	for(var i = 0; i < tabUrls.length; i++){
		chrome.tabs.create({url: tabUrls[i]});
	}
}
document.getElementById("save").onclick = save;
document.getElementById("open").onclick = open;