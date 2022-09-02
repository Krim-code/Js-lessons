class SiteMind{
    constructor() {
    this.array = []
    }

    appendElem(){
        for(let j = 0; j<10;j++){
        this.array.push(j)
    }
    }
    async fetchJson(url) {
        let response = await fetch(url);
        if (response.ok){
            response = await response.json()
            for (let i in response.data){
                console.log(response.data[i])
                this.sayHi(response.data[i].attributes.canonicalTitle,response.data[i].attributes.posterImage.large)
            }
        }
        else {
            console.log("Прости,братик,ошибка сети :(")
        }
    }

    sayHi(attr,img){
        let root = document.getElementById('root')
        let outputElement = document.createElement('div')
        let imagine = document.createElement('img')
        let nametitle = document.createElement('h3')
        imagine.src = img
        imagine.style = 'width: 250px'
        nametitle.innerHTML = attr
        outputElement.className = 'outputElem'
        outputElement.appendChild(imagine)
        outputElement.appendChild(nametitle)
        root.appendChild(outputElement)
    }
    updatePage(){
        let root = document.getElementById('root')
        root.innerHTML ='';
}
}

let sitemind = new SiteMind();
input.oninput = function() {
    let result = input.value;
    sitemind.updatePage()
    sitemind.fetchJson(`https://kitsu.io/api/edge/anime?filter[text]=`+result)
};
// sitemind.fetchJson('https://kitsu.io/api/edge/anime?filter[text]=tokio')