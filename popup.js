document.addEventListener('DOMContentLoaded',loadJS,false);

function loadJS() {
    var submitBtn = document.getElementById('sub');
    submitBtn.addEventListener('click',onClickListener,false);
}

function onClickListener() {
    chrome.tabs.getSelected(null,function(tab) {
        console.log("tab");
        alert("Clicked");
    })
}