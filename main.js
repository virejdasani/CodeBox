function showPreview() {
    var htmlCode = document.getElementById("htmlCode").value;
    var cssCode = document.getElementById("cssCode").value;
    var jsCode = document.getElementById("jsCode").value;
    var frame = document.getElementById("preview-window").contentWindow.document;
    frame.open();
    frame.write(htmlCode + "<style>" + cssCode + "</style>" + "<script>" + jsCode + "</script>");
    frame.close();
}