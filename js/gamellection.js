function searchFunction() {
    var input = document.getElementById('searchInput').value.toLowerCase();
    var data = [
        '<a href="..\Pages\Subpages\Gamellection Subpages\3Slices.html">3 Slices</a>',
        '<a href="..\Pages\Subpages\Gamellection Subpages\3Slices2.html">3 Slices 2</a>',
        '<a href="..\Pages\Subpages\Gamellection Subpages\BigTowerTinySquare.html">Big Tower Tiny Square</a>',
        '<a href="..\Pages\Subpages\Gamellection Subpages\BTD.html">Bloons Tower Defense</a>',
        '<a href="..\Pages\Subpages\Gamellection Subpages\BTD2.html">Bloons Tower Defense 2</a>',
        '<a href="..\Pages\Subpages\Gamellection Subpages\LearnToFly.html">Learn to Fly</a>',
        '<a href="..\Pages\Subpages\Gamellection Subpages\LearnToFly2.html">Learn to Fly 2</a>',
        '<a href="..\Pages\Subpages\Gamellection Subpages\SmashKarts.html">Smash Karts</a>',
        '<a href="..\Pages\Subpages\Gamellection Subpages\Wordle+.html">Wordle+</a>',
    ];
    var result = data.filter(item => item.toLowerCase().includes(input));

    document.getElementById('result').innerHTML = result.length ? result.join(", ") : "No results found";
}
