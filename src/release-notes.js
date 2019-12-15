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
    visibility: visible;
}
#release-notes-container {
    -webkit-font-smoothing: antialiased;
    font-family: Roboto,RobotoDraft,Helvetica,Arial,sans-serif;
    font-size: .875rem;
    letter-spacing: .2px;
    color: #5f6368;
    padding: 0 24px;
    line-height: 20px;    
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
    border-radius: 6px;
    padding: 24px;
    background: rgba(256,256,256,1);
}
#cancel-path {
    stroke: #5f6368;
}
#release-notes-overlay.gone, #release-notes-container.gone {
    background: rgba(0,0,0,0);
    color: #FFFFFF;
    visibility: hidden;    
    -webkit-transition: visibility .4s, background 0.4s linear, color 0.3s linear;
    -moz-transition:    visibility .4s, background 0.4s linear, color 0.3s linear;
    -ms-transition:     visibility .4s, background 0.4s linear, color 0.3s linear;
    -o-transition:      visibility .4s, background 0.4s linear, color 0.3s linear;
    transition:         visibility .4s, background 0.4s linear, color 0.3s linear;
}
#release-notes-container.gone #cancel-path {
    stroke: #FFFFFF;
    -webkit-transition: stroke 0.3s linear;
    -moz-transition:    stroke 0.3s linear;
    -ms-transition:     stroke 0.3s linear;
    -o-transition:      stroke 0.3s linear;
    transition:         stroke 0.3s linear;
}
.release-notes-header {
    margin: 0px 0px 0px 0px;
    padding-bottom: 5px;    
}
.release-notes-header h1 {
    margin: 0px;
    font-size: 1.25rem;
}
#release-notes-close {
    position: absolute;
    top: 15px;
    right: 15px;
    text-align: center;
    border-radius: 50%;
    display: block;
    height: 32px;
    width: 32px;
    cursor: pointer;
    -webkit-transition: background-color 0.4s;
    -moz-transition:    background-color 0.4s;
    -ms-transition:     background-color 0.4s;
    -o-transition:      background-color 0.4s;
    transition:         background-color 0.4s;
}
#release-notes-close:hover {
    background-color: #f8f8f8;
}
#release-notes-close span {
    position: absolute;
    top: 4px;
    right: 4px;
    font-weight: bold;
}
.release-notes-content {    
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
            <span>
            <svg width="24px" height="24px">
                <path id="cancel-path" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z">
                </path>
            </svg>
            </span>
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
    document.getElementById('release-notes-overlay').classList.add("gone");
    document.getElementById('release-notes-container').classList.add("gone");
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