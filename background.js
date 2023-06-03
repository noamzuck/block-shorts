chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (changeInfo.status === 'complete') {
      var currentUrl = tab.url;
      
      if (currentUrl.includes('youtube.com/shorts')) {
        chrome.tabs.update(tabId, { url: chrome.runtime.getURL('blocking page.html') });
      }
    }
});