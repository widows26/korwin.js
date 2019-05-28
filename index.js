const korwin1 = [
    "Ja chcę powiedzieć jedną rzecz:",
    "Trzeba powiedzieć jasno:",
    "Jak powiedział wybitny krakowianin Stanisław Lem,",
    "Proszę mnie dobrze zrozumieć:",
    "Ja chciałem państwu przypomnieć, że",
    "Niech państwo nie mają złudzeń:",
    "Powiedzmy to wyraźnie:",
    "Mnie uczono (za komuny to było), że"
];

const korwin2 = [
    "przedstawiciele czerwonej hołoty",
    "ci wszyscy (tfu!) geje",
    "funkcjonariusze reżymowej telewizji",
    "tak zwani ekolodzy",
    "ci wszyscy (tfu!) demokraci",
    "agenci bezpieki",
    "feminazistki",
    "marksiści, leniniści, maoiści",
    "agenci SB",
    "unijni biurokraci"
];

const korwin3 = [
    "zupełnie bezkarnie",
    "całkowicie bezczelnie",
    "o poglądach na lewo od komunizmu",
    "celowo i świadomie",
    "z premedytacją",
    "od czasów Okrągłego Stołu",
    "w ramach postępu",
    "na skutek umów w Magdalence i przy Okrągłym Stole"
];

const korwin4 = [
    "nawołują do podniesienia podatków",
    "próbują wyrzucić kierowców z miast",
    "próbują skłócić Polskę z Rosją",
    "głoszą brednie o globalnym ociepleniu",
    "zakazują posiadania broni",
    "nie dopuszczają prawicy do władzy",
    "uczą dzieci homoseksualizmu",
    "wydają miliony na walkę z globalnym ociepleniem"
];

const korwin5 = [
    "bo dzięki temu mogą kraść",
    "bo dostają za to pieniądze",
    "bo tak się uczy w państwowej szkole",
    "bo bez tego (tfu!) demokracja nie może istnieć",
    "bo głupich jest więcej niż mądrych",
    "bo chcą stworzyć raj na ziemi",
    "bo chcą niszczyć cywilizacje białego człowieka"
];

const korwin6 = [
    "przez kolejne kadencje",
    "o czym się nie mówi",
    "i właśnie dlatego Europa umiera",
    "ale przyjdą muzułmanie i zrobią porządek",
    "- tak samo zresztą jak za Hitlera",
    "- proszę zobaczyć, co się dzieje na Zachodzie, jeśli mi państwo nie wierzą",
    "co lat temu sto nikomu nie przyszłoby nawet do głowy",
    "dlatego musimy zabić, kurwa, tych ludzi!",
    "- ja to powtarzam od trzydziestu pięciu lat"
];

module.exports = function() {
    return korwin1[Math.floor(Math.random()*korwin1.length)] +
        " " +
        korwin2[Math.floor(Math.random()*korwin2.length)] +
        " " +
        korwin3[Math.floor(Math.random()*korwin3.length)] +
        " " +
        korwin4[Math.floor(Math.random()*korwin4.length)] +
        " " +
        korwin5[Math.floor(Math.random()*korwin5.length)] +
        " " +
        korwin6[Math.floor(Math.random()*korwin6.length)] +
        ".";
};
