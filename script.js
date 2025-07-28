function playVideo() {
    const url = document.getElementById("stream-url").value.trim();
    const vastUrl = document.getElementById("vast-url").value.trim() ||
        "https://droopy-management.com/d.muFNzod/G-NrvUZgGbUS/leamt9WuaZAUqlZkIPRTzY/1gMozhcay/NODSM/tZNdjFUlzFNhzRI/0_N/CtZ/sFaxWW1ypNdyD/0/xS";

    if (!url) return alert("Please enter a stream URL");

    jwplayer("videoPlayer").setup({
        file: url,
        width: "100%",
        aspectratio: "16:9",
        autostart: true,
        mute: false,
        advertising: {
            client: "vast",
            tag: vastUrl
        }
    });
}

function generateEmbedUrl() {
    const url = document.getElementById("stream-url").value.trim();
    const vastUrl = document.getElementById("vast-url").value.trim();
    const baseUrl = window.location.href.replace(/\/index\.html.*$/, "");
    const embedUrl = `${baseUrl}player.html?url=${encodeURIComponent(url)}${vastUrl ? `&vast=${encodeURIComponent(vastUrl)}` : ""}`;
    document.getElementById("embed-url").value = embedUrl;
}

function copyLink() {
    const input = document.getElementById("embed-url");
    input.select();
    input.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(input.value);
}
