function copyToClickBoard(){
    var content = document.getElementById('textArea').innerHTML;

    navigator.clipboard.writeText(content)
        .then(() => {
        console.log("Text copied to clipboard...")
        document.getElementById('btnVanmoof').style.display = "initial"
        document.getElementById('copyLink').style.display = "none"

    })
        .catch(err => {
        console.log('Something went wrong', err);
        document.getElementById('btnVanmoof').style.display = "initial"

    })


}



// btnVanmoof = document.getElementById('btnVanmoof');
// btnVanmoof.style.visibility = "hidden";


document.getElementById('btnVanmoof').style.display = "none";
