// クリップボードへのコピー
chrome.runtime.onMessage.addListener((message, options) => {
    // console.log("recieved --------------" + message);
    navigator.clipboard.writeText(message);
});
