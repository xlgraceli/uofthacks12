
chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
    let result;
    try {
      const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
      const response = await chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: () => {
          return {
            result: getSelection().toString(),
          };
        },
      });
      result = response[0].result;
    } catch (e) {
      console.error(e);
    }
    sendResponse({ message: result });
  });