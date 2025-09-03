function gmlToHtml() {
    fetch("../gml/unal.gml")
      .then(response => response.text())
      .then(data => {
        document.getElementById("ver").textContent = data;
      });
}