// Regex to match specific URLs, here it matches "file://" URLs
var urlRegex = /^file:\/\/\/:?/

// Callback function to handle DOM content
function doStuffWithDOM(element) {
  alert('I received the following DOM content:\n' + element);
}

// Listens for clicks on the extension's icon
chrome.action.onClicked.addListener(function (tab) {
  // Check the active tab's URL against the regex pattern
  if (urlRegex.test(tab.url)) {
    // If it matches, send a message to the content script
    chrome.tabs.sendMessage(tab.id, { text: 'report_back' }, function(response) {
      doStuffWithDOM(response);
    });
  }
});

// Listen for messages from content scripts or other parts of the extension
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log(
    sender.tab ? 'from a content script:' + sender.tab.url : 'from the extension'
  );
  if (request.greeting === 'hello') sendResponse({ farewell: 'goodbye' });
});
