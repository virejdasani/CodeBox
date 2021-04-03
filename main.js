function showPreview() {
    var htmlCode = document.getElementById("htmlCode").value
    var cssCode = "<style>" + document.getElementById("cssCode").value + "</style>"
    var jsCode = "<script>" + document.getElementById("jsCode").value + "</script>"
    var frame = document.getElementById("preview-window").contentWindow.document
    frame.open()
    frame.write(htmlCode + cssCode + jsCode)
    frame.close()
}

require.config({
    paths: {
        'vs': 'https://unpkg.com/monaco-editor@latest/min/vs'
    }
});
window.MonacoEnvironment = {
    getWorkerUrl: () => proxy
};

let proxy = URL.createObjectURL(new Blob([`
	self.MonacoEnvironment = {
		baseUrl: 'https://unpkg.com/monaco-editor@latest/min/'
	};
	importScripts('https://unpkg.com/monaco-editor@latest/min/vs/base/worker/workerMain.js');
`], {
    type: 'text/javascript'
}));

// This is monaco editor, used in vs code 
require(["vs/editor/editor.main"], function () {
    let editor = monaco.editor.create(document.getElementById('containerHTML'), {
        value: '',
        language: 'html',
        theme: 'vs-dark'
    });
});

require(["vs/editor/editor.main"], function () {
    let editor = monaco.editor.create(document.getElementById('containerCSS'), {
        value: '',
        language: 'css',
        theme: 'vs-dark'
    });
});

require(["vs/editor/editor.main"], function () {
    let editor = monaco.editor.create(document.getElementById('containerJS'), {
        value: '',
        language: 'javascript',
        theme: 'vs-dark'
    });
});