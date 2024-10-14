function searchFunction() {
    var input = document.getElementById('searchInput').value.toLowerCase();
    var data = [
        '<a href="..\Pages\Subpages\Gamellection Subpages\SmashKarts.html">Smash Karts</a>', '<a href="a">game</a>'
    ];
    var result = data.filter(item => item.toLowerCase().includes(input));

    document.getElementById('result').innerHTML = result.length ? result.join(", ") : "No results found";
}