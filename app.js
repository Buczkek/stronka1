//selectors
const inpucik = document.querySelector('input[name="niewiem"]')
const gifDiv = document.querySelector('.gif-div')
const pierwszyGuziczek = document.querySelector('#pierwszy-guziczek')
const tekscik = document.querySelector('#tekscik')
const gife = document.querySelector('.smieszne-gife')

//event listeners
pierwszyGuziczek.addEventListener("click", petChubercik)
inpucik.addEventListener("keydown", function() {nacisnij(event, pierwszyGuziczek)})

//variables
var glupieWiadomosci = ["Dupa",
                        "Nie wyszło :C",
                        "Nie tym razem!",
                        "Aj karamba!!!",
]
var smieszki = ["petchubercik",
                "duda",
                "zubr",
                "ugabuga",
]
//functions

function choose(choices) {
    var index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

function petChubercik(event) {
    var wpisane = inpucik.value.toLowerCase()
    if (wpisane == "chubercik"){
        wpisane = "petchubercik"
    }
    var sciezka = "/img/" + wpisane + ".gif"

    if ( ! (smieszki.includes(wpisane))){
        tekscik.innerHTML = choose(glupieWiadomosci)
        gife.style.display = 'none'
        return
    }
    gife.style.display = ''

    if (gife.getAttribute('src') == sciezka){
        return
    } else {
        gife.setAttribute('src', sciezka)
    }

    tekscik.innerHTML = ""
}

function nacisnij(event, butt){
    if (event.keyCode === 13){
        butt.click()
    }
}