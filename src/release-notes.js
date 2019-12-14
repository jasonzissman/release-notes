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
    font-family: Verdana, Geneva, sans-serif;
    position: absolute;
    z-index: 9999;
    width: 90%;
    max-width: 500px;
    max-height: 375px;
    min-height: 200px;
    background-color: #FFFFFF;
    left: 50%;
    transform: translate(-50%,-50%);
    top: 50%;
    border-radius: 10px;
    padding: 15px;
}
.release-notes-header {
    margin: 0px 0px 0px 0px;
    padding-bottom: 5px;
    border-bottom: 0.5px solid #cccccc;
}
.release-notes-header h1 {
    margin: 0px;
    font-size: 1.25rem;
}
#release-notes-close {
    position: absolute;
    top: 10px;
    right: 10px;
    text-align: center;
    border-radius: 50%;
    display: block;
    height: 32px;
    width: 32px;
    cursor: pointer;
}
#release-notes-close span {
    position: absolute;
    top: 5px;
    right: 10px;
    font-weight: bold;
}
#release-notes-close:hover {
    background-color: #f8f8f8;
}
.release-notes-content {
    font-size: 0.9rem;
    overflow-y: auto;
    max-height: 330px;
}
</style>
<div id="release-notes-overlay">
</div>
<div id="release-notes-container">
    <header class="release-notes-header">
        <h1>December 2019 Update</h1>
        <span id="release-notes-close">
            <span>X</span>
        </span>
    </header>
    <section>
        <div class="release-notes-content">
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ullamcorper lectus, 
            at sagittis nibh. Vivamus sollicitudin nunc lorem. Cras dictum vitae augue et commodo. 
            </p>
            <ul>        
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <li>Praesent pharetra dolor id ligula ornare aliquam.
            <li>Cras sed nulla sed ex sagittis condimentum in non dolor.
            <li>Praesent hendrerit dui ac faucibus euismod.
            </ul>
            <p>
            Vivamus luctus leo nec luctus blandit. Nulla imperdiet mi et neque ultrices mattis. 
            Aliquam et lacus hendrerit, blandit ligula nec, faucibus nisi.
            </p>
        </div>
    </section>
    <footer>
    </footer>
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