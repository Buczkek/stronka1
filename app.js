//selectors
const inpucik = document.querySelector('input[name="niewiem"]')
const gifDiv = document.querySelector('.gif-div')
const pierwszyGuziczek = document.querySelector('#pierwszy-guziczek')
const tekscik = document.querySelector('#tekscik')

//event listeners
pierwszyGuziczek.addEventListener("click", petChubercik)
inpucik.addEventListener("keydown", function() {nacisnij(event, pierwszyGuziczek)})

//variables
var glupieWiadomosci = ["Dupa",
                        "Nie wyszło :C",
                        "Nie tym razem!",
                        "Aj karamba!!!",
]
//functions

function choose(choices) {
    var index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

function petChubercik(event) {
    if (inpucik.value.toLowerCase() != "chubercik"){
        tekscik.innerHTML = choose(glupieWiadomosci)
        if (gifDiv.children.length>1){
            gifDiv.removeChild(document.querySelector('.chubercikthegif'))
        }
        return
    }
    if (gifDiv.children.length>1){
        return
    }
    tekscik.innerHTML = ""
    const gifek = document.createElement('img')
    gifek.setAttribute('class', "chubercikthegif")
    gifek.setAttribute('src', "/img/petchubercik.gif")
    gifDiv.appendChild(gifek)
}

function nacisnij(event, butt){
    if (event.keyCode === 13){
        butt.click()
    }
}

