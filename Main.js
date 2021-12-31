let currentPage = 0
let pageNumbers = [`0`,`1`,`2`,`3`,`4`,`5`,`6`,`7`,`8`,`9`,`10`,`11`,`12`,`13`,`14`,`15`,`16`,`17`,`18`,`19`,`20`,`21`,`22`,`23`,`24`,`25`,`26`,`27`,`28`,`29`,`30`,]
const pages = []
for (let i=0;i<pageNumbers.length;i++){
    pages[i] = document.getElementById(`page${pageNumbers[i]}`)
}
function switchPage(x){
    pages[currentPage].style.display = `none`
    currentPage = x
    pages[currentPage].style.display = `flex`
}
window.onload = function(){
    switchPage(0)
    for (let i=1;i<pageNumbers.length;i++){
        pages[i].style.display = `none`
    }
}