function preview() {
  const stream = document.getElementById("stream-url").value.trim();
  const vast = document.getElementById("vast-url").value.trim();
  if (!stream) {
    alert("Please enter a stream URL");
    return;
  }
  const baseUrl = window.location.origin + window.location.pathname.replace("index.html", "");
  const embedUrl = baseUrl + "player.html?url=" + encodeURIComponent(stream) + (vast ? "&vast=" + encodeURIComponent(vast) : "");
  document.getElementById("embed-url").value = embedUrl;
}

function copyEmbedUrl() {
  const embedInput = document.getElementById("embed-url");
  embedInput.select();
  embedInput.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(embedInput.value);
}

function clearEmbed() {
  document.getElementById("embed-url").value = "";
}
