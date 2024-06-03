let vize1 = Number(prompt("Vize 1 notunuzu giriniz?"));
let vize2 = Number(prompt("Vize 2 notunuzu giriniz?"));
let final = Number(prompt("Final notunuzu giriniz?"));

let sonuc = (vize1 * 0.3) + (vize2 * 0.3) + (final * 0.4);
let harfNotu = "";
let mesaj = "";

switch (true) {
    case (sonuc >= 88 && sonuc <= 100):
        harfNotu = "AA";
        mesaj = "Tebrikler, Geçtiniz.";
        break;
    case (sonuc >= 80 && sonuc <= 87):
        harfNotu = "BA";
        mesaj = "Tebrikler, Geçtiniz.";
        break;
    case (sonuc >= 73 && sonuc <= 79):
        harfNotu = "BB";
        mesaj = "Tebrikler, Geçtiniz.";
        break;
    case (sonuc >= 66 && sonuc <= 72):
        harfNotu = "CB";
        mesaj = "Tebrikler, Geçtiniz.";
        break;
    case (sonuc >= 60 && sonuc <= 65):
        harfNotu = "CC";
        mesaj = "Tebrikler, Geçtiniz.";
        break;
    case (sonuc >= 55 && sonuc <= 59):
        harfNotu = "DC";
        mesaj = "Şartlı Geçtiniz.";
        break;
    case (sonuc >= 50 && sonuc <= 54):
        harfNotu = "DD";
        mesaj = "Kaldınız.";
        break;
    case (sonuc >= 0 && sonuc <= 49):
        harfNotu = "FF";
        mesaj = "Kaldınız.";
        break;
    default:
        harfNotu = "Geçersiz Not";
        mesaj = "";
}

alert("Notunuz: " + sonuc.toFixed(2) + " (" + harfNotu + "). " + mesaj);
