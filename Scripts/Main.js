document.querySelectorAll("a").forEach(link =>
{
    link.href = link.href.includes("wikipedia.org/") ? (link.href = link.href.includes("useskin=vector") ? link.href : link.href + (link.href.includes("?") ? "&" : "?") + 'useskin=vector') : link.href;
});
