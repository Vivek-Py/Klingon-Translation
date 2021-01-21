var btnTranslate = document.querySelector("#btn-translate")
var inputTxt = document.querySelector("#input-txt")
var outputDiv = document.querySelector("#output")

var serverUrl = "https://api.funtranslations.com/translate/klingon.json"

function fetchUrl(text){
    return serverUrl + "?" + "text=" + text
}

function errorHandler(){
    console.log("Error Occured.")
    alert("Something is wrong with the server.")
}

btnTranslate.addEventListener("click", function event(){
    var inputText = inputTxt.value
    fetch(fetchUrl(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated
            outputDiv.innerText = translatedText
         })
        .catch(errorHandler)
})