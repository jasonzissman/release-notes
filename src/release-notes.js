// var xhr = new XMLHttpRequest();
// xhr.open('GET', 'release-notes.html', true);
// xhr.onreadystatechange = function () {
//     if (this.readyState !== 4) return;
//     if (this.status !== 200) return;
//     document.write(this.responseText);    
// };
// xhr.send();

let html = `
<style>
#release-notes-overlay {
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.1);
    z-index: 9998;
    position: absolute;
    top: 0px;
    left: 0px;
}
#release-notes-container {
    position: absolute;
    z-index: 9999;
    width: 90%;
    max-width: 500px;
    max-height: 350px;
    background-color: #FFFFFF;
    top: 10%;
    left: 30%;
    border-radius: 15px;
    padding: 15px;
}
.release-notes-header {
    margin: 0px;
    margin-bottom: 10px;
}
#release-notes-close {
    position: absolute;
    top: 21px;
    right: 17px;
}
.release-notes-content {
    overflow-y: scroll;
    max-height: 300px;
}
</style>
<div id="release-notes-overlay">
</div>
<div id="release-notes-container">
    <h1 class="release-notes-header">
        2019-12-14
    </h1>
    <span id="release-notes-close">
    X
    </span>
    <div class="release-notes-content">
        Hello World!!! This is a release note.<br/>
        Hello World!!! This is a release note.<br/>
        Hello World!!! This is a release note.<br/>
        Hello World!!! This is a release note.<br/>
        Hello World!!! This is a release note.<br/>
        Hello World!!! This is a release note.<br/>
        Hello World!!! This is a release note.<br/>
        Hello World!!! This is a release note.<br/>
        Hello World!!! This is a release note.<br/>
        Hello World!!! This is a release note.<br/>
        Hello World!!! This is a release note.<br/>
        Hello World!!! This is a release note.<br/>
        Hello World!!! This is a release note.<br/>
        Hello World!!! This is a release note.<br/>
        Hello World!!! This is a release note.<br/>
    </div>
</div>
`
let closeDialog = () => {
    document.getElementById('release-notes-overlay').style.display = 'none';
    document.getElementById('release-notes-container').style.display = 'none';
};
let loadReleaseNotes = () => {
    document.body.insertAdjacentHTML('beforeend', html); 
    document.getElementById('release-notes-overlay').onclick = () => {
        closeDialog();
    };
    document.getElementById('release-notes-close').onclick = () => {
        closeDialog();
    };
};

if (window.addEventListener)
    window.addEventListener('load', loadReleaseNotes, false);
else if (window.attachEvent)
    window.attachEvent('onload', loadReleaseNotes);