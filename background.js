chrome.action.onClicked.addListener(function (tab) {
  chrome.windows.create({
    focused: true,
    height: 676,
    width: 376,
    url: 'index.html',
    type: "popup"
  });
});