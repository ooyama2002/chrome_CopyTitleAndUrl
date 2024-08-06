// リスナーの登録
chrome.contextMenus.onClicked.addListener((info, tab) => {
    let buff = "";

    if (info.menuItemId == "normal") {
        buff = tab.title + "\r\n" + tab.url;
    } else if (info.menuItemId == "markdown") {
        buff = "[" + tab.title + "](" + tab.url + ")";
    } else if (info.menuItemId == "pukiwiki") {
        buff = "[[" + tab.title + ":" + tab.url + "]]";
    } else if (info.menuItemId == "html") {
        buff = "<a href=\"" + tab.url + "\">" + tab.title + "</a>";
    }

    if (tab.url?.startsWith("chrome://")) return undefined;

    chrome.tabs.sendMessage(tab.id, buff);
});

// コンテキストメニューの登録
chrome.runtime.onInstalled.addListener((details) => {

    let ids = [
        "normal",
        "markdown",
        "pukiwiki",
        "html"
    ];

    for (let i = 0; i < ids.length; i++) {
        chrome.contextMenus.create({
            id: ids[i],
            title: ids[i],
            contexts: ["all"],
        });
    };
});
