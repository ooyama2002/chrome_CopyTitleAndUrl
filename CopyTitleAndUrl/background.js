{
    chrome.runtime.onInstalled.addListener((details) => {

        chrome.contextMenus.create({
            id: "normal",
            title: "normal",
            contexts: ["all"],
        });

        chrome.contextMenus.create({
            id: "markdown",
            title: "markdown",
            contexts: ["all"],
        });

        chrome.contextMenus.create({
            id: "pukiwiki",
            title: "pukiwiki",
            contexts: ["all"],
        });

        chrome.contextMenus.create({
            id: "html",
            title: "html",
            contexts: ["all"],
        });

    });

    chrome.contextMenus.onClicked.addListener((info, tab) => {
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            args: [info.menuItemId],
            function: (param) => {
                let buff = "";

                if (param == "normal") {
                    buff = document.title + "\r\n" + location.href;
                } else if (param == "markdown") {
                    buff = "[" + document.title + "](" + location.href + ")";
                } else if (param == "pukiwiki") {
                    buff = "[[" + document.title + ":" + location.href + "]]";
                } else if (param == "html") {
                    buff = "<a href=\"" + location.href + "\">" + document.title + "</a>";
                }

                let element = document.createElement("textarea");
                element.value = buff;
                document.body.append(element);
                element.select();
                document.execCommand("copy");
                element.remove();
            },
        });
    });
}
