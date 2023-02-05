chrome.webNavigation.onBeforeNavigate.addListener(function (details)
{
    // Check if the URL is a Wikipedia page
    if (details.url.match(/^https:\/\/.*\.wikipedia.org\//))
    {
        // Check if the useskin parameter is set to vector
        var url = new URL(details.url);
        var useskin = url.searchParams.get("useskin");

        if (useskin !== "vector")
        {
            // Apply the 2010 vector skin
            url.searchParams.set("useskin", "vector");
            chrome.tabs.update(details.tabId, { url: url.href });
        }
    }
});
