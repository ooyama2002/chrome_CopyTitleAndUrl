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

    // コンテンツスクリプトにメッセージを送信してコピー
    chrome.tabs.sendMessage(tab.id, buff).catch(() => {
        // エラー時はexecuteScriptでコピーしてみる
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            injectImmediately: true,
            args: [buff],
            function: (param) => {
                navigator.clipboard.writeText(param);
            },
        }).catch((error) => {
            // それでもエラーならnotificationを表示
            let options = {
                type: "basic",
                title: "Copy Title And Url",
                message: "Copy Error.\n" + error.message,
                iconUrl: "icon-128.png",
                buttons: [
                    { title: 'OK' },
                ]
            };
            chrome.notifications.create(options);
        });
    });

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
