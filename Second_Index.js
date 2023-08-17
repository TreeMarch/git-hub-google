const inputSearch = document.getElementById('input-search');
console.log("input-search", inputSearch);
inputSearch.addEventListener('input', function(event){
    console.log('inputttt!!!', event.target.value);
    // .style.backgroundColor = "blue";
})