{
    chrome.runtime.onInstalled.addListener((details) => {

        chrome.contextMenus.create({
            type: "normal",
            id: "normal",
            title: "normal",
            contexts: ["all"],
        });

        chrome.contextMenus.create({
            type: "normal",
            id: "markdown",
            title: "markdown",
            contexts: ["all"],
        });

        chrome.contextMenus.create({
            type: "normal",
            id: "pukiwiki",
            title: "pukiwiki",
            contexts: ["all"],
        });

        chrome.contextMenus.create({
            type: "normal",
            id: "html",
            title: "html",
            contexts: ["all"],
        });

    });

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

        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            args: [buff],
            function: (param) => {
                navigator.clipboard.writeText(param);
            },
        });
    });
}
