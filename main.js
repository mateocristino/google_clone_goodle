const searchInput = document.getElementById("search-input")

searchInput.addEventListener("keydown", function(event) {
    if(event.code === "Enter") {
        search();
    }
       
});

function search() {
    const input = searchInput.value;

    window.location.href = "https://www.google.com/search?q=" + input + "&rlz=1C1GCEA_enUY910UY910&sxsrf=APq-WBu89sp58ZH3lFTaOZzcykSJdLxIpw%3A1646764221432&ei=vaAnYqz6GfPU1sQP756I4AQ&oq=" + input + "&gs_lcp=Cgdnd3Mtd2l6EAMYADIECCMQJzIGCCMQJxATMgQIABBDMgQIABBDMgQIABBDMgoIABCABBCHAhAUMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDoICC4QsQMQgwE6CAgAEIAEELEDOgsIABCABBCxAxCDAToHCAAQsQMQQzoECC4QQ0oECEEYAEoECEYYAFAAWKASYL0daABwAXgAgAGSAYgB6QaSAQMyLjaYAQCgAQHAAQE&sclient=gws-wiz"
}