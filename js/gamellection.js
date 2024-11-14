function searchFunction() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    let data = [
        '<a href="..\Pages\Subpages\Gamellection Subpages\2048.html">2048</a>',
        '<a href="..\Pages\Subpages\Gamellection Subpages\3Slices.html">3 Slices</a>',
        '<a href="..\Pages\Subpages\Gamellection Subpages\3Slices2.html">3 Slices 2</a>',
        '<a href="..\Pages\Subpages\Gamellection Subpages\AwesomePlanes.html">Awesome Planes</a>',
        '<a href="..\Pages\Subpages\Gamellection Subpages\AwesomeTanks.html">Awesome Tanks</a>',
        '<a href="..\Pages\Subpages\Gamellection Subpages\AwesomeTanks2.html">Awesome Tanks 2</a>',
        '<a href="..\Pages\Subpages\Gamellection Subpages\BigFLAPPYTowerVSTinySquare.html">Big FLAPPY Tower VS Tiny Square</a>',
        '<a href="..\Pages\Subpages\Gamellection Subpages\BigICETowerTinySquare.html">Big ICE Tower Tiny Square</a>',
        '<a href="..\Pages\Subpages\Gamellection Subpages\BigNEONTowerVSTinySquare.html">Big NEON Tower VS Tiny Square</a>',
        '<a href="..\Pages\Subpages\Gamellection Subpages\BigTowerTinySquare.html">Big Tower Tiny Square</a>',
        '<a href="..\Pages\Subpages\Gamellection Subpages\BigTowerTinySquare2.html">Big Tower Tiny Square 2</a>',
        '<a href="..\Pages\Subpages\Gamellection Subpages\BTD.html">Bloons Tower Defense</a>',
        '<a href="..\Pages\Subpages\Gamellection Subpages\BTD2.html">Bloons Tower Defense 2</a>',
        '<a href="..\Pages\Subpages\Gamellection Subpages\Connect4.html">Connect 4</a>',
        '<a href="..\Pages\Subpages\Gamellection Subpages\GoogleSnake.html">Google Snake</a>',
        '<a href="..\Pages\Subpages\Gamellection Subpages\LearnToFly.html">Learn to Fly</a>',
        '<a href="..\Pages\Subpages\Gamellection Subpages\LearnToFly2.html">Learn to Fly 2</a>',
        '<a href="..\Pages\Subpages\Gamellection Subpages\MinecraftClassic.html">Minecraft Classic</a>',
        '<a href="..\Pages\Subpages\Gamellection Subpages\QuickDrawWithGoogle.html">Quick, Draw!</a>',
        '<a href="..\Pages\Subpages\Gamellection Subpages\Slope.html">Slope</a>',
        '<a href="..\Pages\Subpages\Gamellection Subpages\SmashKarts.html">Smash Karts</a>',
        '<a href="..\Pages\Subpages\Gamellection Subpages\Wordle+.html">Wordle+</a>',
    ];
    let result = data.filter(item => item.toLowerCase().includes(input));
    document.getElementById('result').innerHTML = result.length ? result.join(", ") : "rest in piss";
}
