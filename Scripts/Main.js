// Check if the useskin parameter is set to vector
var url = new URL(location.href);
var useskin = url.searchParams.get("useskin");

if (useskin !== "vector")
{
    // Apply the 2010 vector skin
    url.searchParams.set("useskin", "vector");
    location.href = url;
}