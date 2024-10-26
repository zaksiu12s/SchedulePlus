# <h1 align="center">SchedulePlus</h1>

```diff
+ ONLY SUPPORTS API v3
- API v1 and API v2 is no longer supported in this version!
```

# <p align="center">![](https://img.shields.io/github/license/zaksiu12s/SchedulePlus.svg) ![](https://img.shields.io/badge/Maintained%3F-yes-green.svg) ![](https://img.shields.io/github/commits-since/zaksiu12s/SchedulePlus/v0.3.svg) ![](https://img.shields.io/github/last-commit/zaksiu12s/SchedulePlus.svg) ![](https://img.shields.io/github/issues-pr/zaksiu12s/SchedulePlus.svg)</p>

App for displaying schedule in upgraded version.

## Technologies used

1. [![](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://github.com/Envoy-VC/awesome-badges)
2. ![](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
3. ![](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
4. ![](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)

## How to setup

1. Prerequisites:
   - nodeJS installed
   - npm installed
2. Download all the files.
3. Open folder in terminal.
4. type npm i to install all the dependencies.
5. to check if everything works type npm run app
6. The console will show if the server is running and the current port (default should be localhost:4000)

## Npm commands

- `npm run app` runs the main index file server with node
- `npm run build` builds the typescript
- `npm run dev` runs both app and build commands at the same time (should be used when developing the backend)

## Example requests

- `http://localhost:4000/api/v3/allBranches?link=https://zsem.edu.pl/plany/lista.html`

<details>
   <summary>EXAMPLE RESPONSE</summary>

```JSON
    [
    [
        {
            "wholeName": "5iT 5informatyk",
            "link": "o1.html",
            "className": "5iT",
            "profileName": "informatyk",
            "year": 5
        },
        {
            "wholeName": "5tT 5teleinformatyk",
            "link": "o2.html",
            "className": "5tT",
            "profileName": "teleinformatyk",
            "year": 5
        },
        {
            "wholeName": "5pT 5programista",
            "link": "o3.html",
            "className": "5pT",
            "profileName": "programista",
            "year": 5
        },
        {
            "wholeName": "5fgT 5elektryk/elektronik",
            "link": "o4.html",
            "className": "5fgT",
            "profileName": "elektryk/elektronik",
            "year": 5
        },
        {
            "wholeName": "5mT 5mechatronik",
            "link": "o5.html",
            "className": "5mT",
            "profileName": "mechatronik",
            "year": 5
        },
        {
            "wholeName": "4fgT 4elektryk/elektronik",
            "link": "o6.html",
            "className": "4fgT",
            "profileName": "elektryk/elektronik",
            "year": 4
        },
        {
            "wholeName": "4mT 4mechatronik",
            "link": "o7.html",
            "className": "4mT",
            "profileName": "mechatronik",
            "year": 4
        },
        {
            "wholeName": "4iT 4informatyk",
            "link": "o8.html",
            "className": "4iT",
            "profileName": "informatyk",
            "year": 4
        },
        {
            "wholeName": "4pT 4programista",
            "link": "o9.html",
            "className": "4pT",
            "profileName": "programista",
            "year": 4
        },
        {
            "wholeName": "4tT 4teleinformatyk",
            "link": "o10.html",
            "className": "4tT",
            "profileName": "teleinformatyk",
            "year": 4
        },
        {
            "wholeName": "4dT 4programista",
            "link": "o11.html",
            "className": "4dT",
            "profileName": "programista",
            "year": 4
        },
        {
            "wholeName": "3fT 3elektryk",
            "link": "o12.html",
            "className": "3fT",
            "profileName": "elektryk",
            "year": 3
        },
        {
            "wholeName": "3dT 3programista",
            "link": "o13.html",
            "className": "3dT",
            "profileName": "programista",
            "year": 3
        },
        {
            "wholeName": "3pT 3programista",
            "link": "o14.html",
            "className": "3pT",
            "profileName": "programista",
            "year": 3
        },
        {
            "wholeName": "3iT 3informatyk",
            "link": "o15.html",
            "className": "3iT",
            "profileName": "informatyk",
            "year": 3
        },
        {
            "wholeName": "3mT 3mechatronik",
            "link": "o16.html",
            "className": "3mT",
            "profileName": "mechatronik",
            "year": 3
        },
        {
            "wholeName": "3tT 3teleinformatyk",
            "link": "o17.html",
            "className": "3tT",
            "profileName": "teleinformatyk",
            "year": 3
        },
        {
            "wholeName": "3eT 3mechatronik",
            "link": "o18.html",
            "className": "3eT",
            "profileName": "mechatronik",
            "year": 3
        },
        {
            "wholeName": "3jT 3informatyk",
            "link": "o19.html",
            "className": "3jT",
            "profileName": "informatyk",
            "year": 3
        },
        {
            "wholeName": "3gT 3elektronik",
            "link": "o20.html",
            "className": "3gT",
            "profileName": "elektronik",
            "year": 3
        },
        {
            "wholeName": "2d 2programista",
            "link": "o21.html",
            "className": "2d",
            "profileName": "programista",
            "year": 2
        },
        {
            "wholeName": "2p 2programista",
            "link": "o22.html",
            "className": "2p",
            "profileName": "programista",
            "year": 2
        },
        {
            "wholeName": "2m 2mechatronik",
            "link": "o23.html",
            "className": "2m",
            "profileName": "mechatronik",
            "year": 2
        },
        {
            "wholeName": "2i 2informatyk",
            "link": "o24.html",
            "className": "2i",
            "profileName": "informatyk",
            "year": 2
        },
        {
            "wholeName": "2g 2elektronik",
            "link": "o25.html",
            "className": "2g",
            "profileName": "elektronik",
            "year": 2
        },
        {
            "wholeName": "2f 2elektryk",
            "link": "o26.html",
            "className": "2f",
            "profileName": "elektryk",
            "year": 2
        },
        {
            "wholeName": "21t 2teleinformatyk",
            "link": "o27.html",
            "className": "21t",
            "profileName": "teleinformatyk",
            "year": 2
        },
        {
            "wholeName": "1p 1programista",
            "link": "o28.html",
            "className": "1p",
            "profileName": "programista",
            "year": 1
        },
        {
            "wholeName": "1d 1programista",
            "link": "o29.html",
            "className": "1d",
            "profileName": "programista",
            "year": 1
        },
        {
            "wholeName": "1i 1informatyk",
            "link": "o30.html",
            "className": "1i",
            "profileName": "informatyk",
            "year": 1
        },
        {
            "wholeName": "1m 1mechatronik",
            "link": "o31.html",
            "className": "1m",
            "profileName": "mechatronik",
            "year": 1
        },
        {
            "wholeName": "1f 1elektryk",
            "link": "o32.html",
            "className": "1f",
            "profileName": "elektryk",
            "year": 1
        }
    ],
    [
        {
            "wholeName": "H.Małysa-Legutko (HM)",
            "link": "n1.html",
            "shortName": "HM",
            "longName": "H.Małysa-Legutko"
        },
        {
            "wholeName": "K.Dzido (SC)",
            "link": "n2.html",
            "shortName": "SC",
            "longName": "K.Dzido"
        },
        {
            "wholeName": "D.Rosiek-Ogorzałek (DR)",
            "link": "n3.html",
            "shortName": "DR",
            "longName": "D.Rosiek-Ogorzałek"
        },
        {
            "wholeName": "S.Kadyszewska (Sy)",
            "link": "n4.html",
            "shortName": "Sy",
            "longName": "S.Kadyszewska"
        },
        {
            "wholeName": "W.Szarek (Sz)",
            "link": "n5.html",
            "shortName": "Sz",
            "longName": "W.Szarek"
        },
        {
            "wholeName": "M.Bochniarz (Bm)",
            "link": "n6.html",
            "shortName": "Bm",
            "longName": "M.Bochniarz"
        },
        {
            "wholeName": "K.Adamek (Kd)",
            "link": "n7.html",
            "shortName": "Kd",
            "longName": "K.Adamek"
        },
        {
            "wholeName": "M.Adamek (md)",
            "link": "n8.html",
            "shortName": "md",
            "longName": "M.Adamek"
        },
        {
            "wholeName": "Z.Zelek (zz)",
            "link": "n9.html",
            "shortName": "zz",
            "longName": "Z.Zelek"
        },
        {
            "wholeName": "A.Baran (Ba)",
            "link": "n10.html",
            "shortName": "Ba",
            "longName": "A.Baran"
        },
        {
            "wholeName": "E.Bereś (Be)",
            "link": "n11.html",
            "shortName": "Be",
            "longName": "E.Bereś"
        },
        {
            "wholeName": "K.Brdej (Br)",
            "link": "n12.html",
            "shortName": "Br",
            "longName": "K.Brdej"
        },
        {
            "wholeName": "M.Bochniarz (Bo)",
            "link": "n13.html",
            "shortName": "Bo",
            "longName": "M.Bochniarz"
        },
        {
            "wholeName": "Ł.Budnik (Bu)",
            "link": "n14.html",
            "shortName": "Bu",
            "longName": "Ł.Budnik"
        },
        {
            "wholeName": "A.Chronowska (Cg)",
            "link": "n15.html",
            "shortName": "Cg",
            "longName": "A.Chronowska"
        },
        {
            "wholeName": "U.Dara (Da)",
            "link": "n16.html",
            "shortName": "Da",
            "longName": "U.Dara"
        },
        {
            "wholeName": "G.Durałek (Dg)",
            "link": "n17.html",
            "shortName": "Dg",
            "longName": "G.Durałek"
        },
        {
            "wholeName": "Z.Durlak (ZD)",
            "link": "n18.html",
            "shortName": "ZD",
            "longName": "Z.Durlak"
        },
        {
            "wholeName": "D.Dyrek (Dd)",
            "link": "n19.html",
            "shortName": "Dd",
            "longName": "D.Dyrek"
        },
        {
            "wholeName": "E.Dziedzic (De)",
            "link": "n20.html",
            "shortName": "De",
            "longName": "E.Dziedzic"
        },
        {
            "wholeName": "A.Gołaszewski (Gx)",
            "link": "n21.html",
            "shortName": "Gx",
            "longName": "A.Gołaszewski"
        },
        {
            "wholeName": "B.Górska (GÓ)",
            "link": "n22.html",
            "shortName": "GÓ",
            "longName": "B.Górska"
        },
        {
            "wholeName": "R.Gruca (gr)",
            "link": "n23.html",
            "shortName": "gr",
            "longName": "R.Gruca"
        },
        {
            "wholeName": "M.Grzegorczyk (Gm)",
            "link": "n24.html",
            "shortName": "Gm",
            "longName": "M.Grzegorczyk"
        },
        {
            "wholeName": "S.Izworski (iz)",
            "link": "n25.html",
            "shortName": "iz",
            "longName": "S.Izworski"
        },
        {
            "wholeName": "K.Janusz (Kj)",
            "link": "n26.html",
            "shortName": "Kj",
            "longName": "K.Janusz"
        },
        {
            "wholeName": "K.Jaworski (Jk)",
            "link": "n27.html",
            "shortName": "Jk",
            "longName": "K.Jaworski"
        },
        {
            "wholeName": "Ł.Jurczak (Łj)",
            "link": "n28.html",
            "shortName": "Łj",
            "longName": "Ł.Jurczak"
        },
        {
            "wholeName": "E.Kajder (Ek)",
            "link": "n29.html",
            "shortName": "Ek",
            "longName": "E.Kajder"
        },
        {
            "wholeName": "B.Kapturkiewicz (BK)",
            "link": "n30.html",
            "shortName": "BK",
            "longName": "B.Kapturkiewicz"
        },
        {
            "wholeName": "G.Kantor (Kg)",
            "link": "n31.html",
            "shortName": "Kg",
            "longName": "G.Kantor"
        },
        {
            "wholeName": "A.Kościółek (Kp)",
            "link": "n32.html",
            "shortName": "Kp",
            "longName": "A.Kościółek"
        },
        {
            "wholeName": "R.Kruk (Kr)",
            "link": "n33.html",
            "shortName": "Kr",
            "longName": "R.Kruk"
        },
        {
            "wholeName": "Ł.Kucharski (Kł)",
            "link": "n34.html",
            "shortName": "Kł",
            "longName": "Ł.Kucharski"
        },
        {
            "wholeName": "T.Liber (tl)",
            "link": "n35.html",
            "shortName": "tl",
            "longName": "T.Liber"
        },
        {
            "wholeName": "K.Lupa (kl)",
            "link": "n36.html",
            "shortName": "kl",
            "longName": "K.Lupa"
        },
        {
            "wholeName": "B.Matuła-Stępień (Mb)",
            "link": "n37.html",
            "shortName": "Mb",
            "longName": "B.Matuła-Stępień"
        },
        {
            "wholeName": "J.Michalik (jm)",
            "link": "n38.html",
            "shortName": "jm",
            "longName": "J.Michalik"
        },
        {
            "wholeName": "K.Michalik (Kc)",
            "link": "n39.html",
            "shortName": "Kc",
            "longName": "K.Michalik"
        },
        {
            "wholeName": "J.Michałowska (MH)",
            "link": "n40.html",
            "shortName": "MH",
            "longName": "J.Michałowska"
        },
        {
            "wholeName": "M.Mikulski (MU)",
            "link": "n41.html",
            "shortName": "MU",
            "longName": "M.Mikulski"
        },
        {
            "wholeName": "K.Mirek (KM)",
            "link": "n42.html",
            "shortName": "KM",
            "longName": "K.Mirek"
        },
        {
            "wholeName": "P.Mordarska (Mp)",
            "link": "n43.html",
            "shortName": "Mp",
            "longName": "P.Mordarska"
        },
        {
            "wholeName": "J.Nalepa (Na)",
            "link": "n44.html",
            "shortName": "Na",
            "longName": "J.Nalepa"
        },
        {
            "wholeName": "A.Niemczak (Nm)",
            "link": "n45.html",
            "shortName": "Nm",
            "longName": "A.Niemczak"
        },
        {
            "wholeName": "E.Nowak (Ne)",
            "link": "n46.html",
            "shortName": "Ne",
            "longName": "E.Nowak"
        },
        {
            "wholeName": "P.Obrzut (PO)",
            "link": "n47.html",
            "shortName": "PO",
            "longName": "P.Obrzut"
        },
        {
            "wholeName": "P.Piszczek (PP)",
            "link": "n48.html",
            "shortName": "PP",
            "longName": "P.Piszczek"
        },
        {
            "wholeName": "M.Popiela (EP)",
            "link": "n49.html",
            "shortName": "EP",
            "longName": "M.Popiela"
        },
        {
            "wholeName": "D.Pres (DP)",
            "link": "n50.html",
            "shortName": "DP",
            "longName": "D.Pres"
        },
        {
            "wholeName": "M.Roman (Ro)",
            "link": "n51.html",
            "shortName": "Ro",
            "longName": "M.Roman"
        },
        {
            "wholeName": "A.Sekuła (Su)",
            "link": "n52.html",
            "shortName": "Su",
            "longName": "A.Sekuła"
        },
        {
            "wholeName": "D.Sejut-Kocemba (DS)",
            "link": "n53.html",
            "shortName": "DS",
            "longName": "D.Sejut-Kocemba"
        },
        {
            "wholeName": "M.Siciarz (Si)",
            "link": "n54.html",
            "shortName": "Si",
            "longName": "M.Siciarz"
        },
        {
            "wholeName": "I.Stelmach (Se)",
            "link": "n55.html",
            "shortName": "Se",
            "longName": "I.Stelmach"
        },
        {
            "wholeName": "K.Stopka (Ks)",
            "link": "n56.html",
            "shortName": "Ks",
            "longName": "K.Stopka"
        },
        {
            "wholeName": "S.Szafraniec (Sr)",
            "link": "n57.html",
            "shortName": "Sr",
            "longName": "S.Szafraniec"
        },
        {
            "wholeName": "P.Szczypuła (Sp)",
            "link": "n58.html",
            "shortName": "Sp",
            "longName": "P.Szczypuła"
        },
        {
            "wholeName": "J.Talar (Tj)",
            "link": "n59.html",
            "shortName": "Tj",
            "longName": "J.Talar"
        },
        {
            "wholeName": "K.Tekieli (Tk)",
            "link": "n60.html",
            "shortName": "Tk",
            "longName": "K.Tekieli"
        },
        {
            "wholeName": "M.Trybuch (Mt)",
            "link": "n61.html",
            "shortName": "Mt",
            "longName": "M.Trybuch"
        },
        {
            "wholeName": "M.Tutka (Tm)",
            "link": "n62.html",
            "shortName": "Tm",
            "longName": "M.Tutka"
        },
        {
            "wholeName": "J.Wąsowicz (JW)",
            "link": "n63.html",
            "shortName": "JW",
            "longName": "J.Wąsowicz"
        },
        {
            "wholeName": "M.Węglarz (Wm)",
            "link": "n64.html",
            "shortName": "Wm",
            "longName": "M.Węglarz"
        },
        {
            "wholeName": "B.Wideł (Bw)",
            "link": "n65.html",
            "shortName": "Bw",
            "longName": "B.Wideł"
        },
        {
            "wholeName": "L.Wontorczyk (Wo)",
            "link": "n66.html",
            "shortName": "Wo",
            "longName": "L.Wontorczyk"
        },
        {
            "wholeName": "A.Wójs (Aw)",
            "link": "n67.html",
            "shortName": "Aw",
            "longName": "A.Wójs"
        },
        {
            "wholeName": "M.Wójcik (Mw)",
            "link": "n68.html",
            "shortName": "Mw",
            "longName": "M.Wójcik"
        },
        {
            "wholeName": "S.Wysowska (Sw)",
            "link": "n69.html",
            "shortName": "Sw",
            "longName": "S.Wysowska"
        },
        {
            "wholeName": "T.Zawiślan (Za)",
            "link": "n70.html",
            "shortName": "Za",
            "longName": "T.Zawiślan"
        },
        {
            "wholeName": "K.Ząbkowski (Zk)",
            "link": "n71.html",
            "shortName": "Zk",
            "longName": "K.Ząbkowski"
        },
        {
            "wholeName": "A.Dziewięcka (AD)",
            "link": "n72.html",
            "shortName": "AD",
            "longName": "A.Dziewięcka"
        },
        {
            "wholeName": "M.Lorek (ML)",
            "link": "n73.html",
            "shortName": "ML",
            "longName": "M.Lorek"
        },
        {
            "wholeName": "J.Klag-Pierzchała (JP)",
            "link": "n74.html",
            "shortName": "JP",
            "longName": "J.Klag-Pierzchała"
        },
        {
            "wholeName": "D.Kulig (DK)",
            "link": "n75.html",
            "shortName": "DK",
            "longName": "D.Kulig"
        },
        {
            "wholeName": "T.Mąka (MĄ)",
            "link": "n76.html",
            "shortName": "MĄ",
            "longName": "T.Mąka"
        },
        {
            "wholeName": "G.Litawa (LI)",
            "link": "n77.html",
            "shortName": "LI",
            "longName": "G.Litawa"
        },
        {
            "wholeName": "A.Święs (AŚ)",
            "link": "n78.html",
            "shortName": "AŚ",
            "longName": "A.Święs"
        },
        {
            "wholeName": "K.Kamińska (KŃ)",
            "link": "n79.html",
            "shortName": "KŃ",
            "longName": "K.Kamińska"
        },
        {
            "wholeName": "L.Wilczak (LW)",
            "link": "n80.html",
            "shortName": "LW",
            "longName": "L.Wilczak"
        },
        {
            "wholeName": "E.Czernecka (EC)",
            "link": "n81.html",
            "shortName": "EC",
            "longName": "E.Czernecka"
        },
        {
            "wholeName": "M.Górska (GS)",
            "link": "n82.html",
            "shortName": "GS",
            "longName": "M.Górska"
        },
        {
            "wholeName": "J.Mularczyk (MZ)",
            "link": "n83.html",
            "shortName": "MZ",
            "longName": "J.Mularczyk"
        },
        {
            "wholeName": "G.Słowik (SŁ)",
            "link": "n84.html",
            "shortName": "SŁ",
            "longName": "G.Słowik"
        },
        {
            "wholeName": "M.Świerczek (ŚW)",
            "link": "n85.html",
            "shortName": "ŚW",
            "longName": "M.Świerczek"
        },
        {
            "wholeName": "K.Maj (Kv)",
            "link": "n86.html",
            "shortName": "Kv",
            "longName": "K.Maj"
        },
        {
            "wholeName": "M.Kwiatek-Poręba (KE)",
            "link": "n87.html",
            "shortName": "KE",
            "longName": "M.Kwiatek-Poręba"
        },
        {
            "wholeName": "K.Wojnarowski (WJ)",
            "link": "n88.html",
            "shortName": "WJ",
            "longName": "K.Wojnarowski"
        },
        {
            "wholeName": "I.Sroka (IS)",
            "link": "n89.html",
            "shortName": "IS",
            "longName": "I.Sroka"
        },
        {
            "wholeName": "W.Gałach (WG)",
            "link": "n90.html",
            "shortName": "WG",
            "longName": "W.Gałach"
        },
        {
            "wholeName": "R.Ciastoń (RC)",
            "link": "n91.html",
            "shortName": "RC",
            "longName": "R.Ciastoń"
        },
        {
            "wholeName": "v.rewalidacja (VR)",
            "link": "n92.html",
            "shortName": "VR",
            "longName": "v.rewalidacja"
        }
    ],
    [
        {
            "wholeName": "5 Prac. UTK 2 Hades",
            "link": "s1.html",
            "shortName": "5",
            "longName": "Prac. UTK 2 Hades"
        },
        {
            "wholeName": "4",
            "link": "s2.html"
        },
        {
            "wholeName": "8 Prac. telekomunikacyjna Hades",
            "link": "s3.html",
            "shortName": "8",
            "longName": "Prac. telekomunikacyjna Hades"
        },
        {
            "wholeName": "6 Prac. UTK 1 Hades",
            "link": "s4.html",
            "shortName": "6",
            "longName": "Prac. UTK 1 Hades"
        },
        {
            "wholeName": "7",
            "link": "s5.html"
        },
        {
            "wholeName": "11",
            "link": "s6.html"
        },
        {
            "wholeName": "12",
            "link": "s7.html"
        },
        {
            "wholeName": "13",
            "link": "s8.html"
        },
        {
            "wholeName": "14",
            "link": "s9.html"
        },
        {
            "wholeName": "15 Pracownina systemów i sieci",
            "link": "s10.html",
            "shortName": "15",
            "longName": "Pracownina systemów i sieci"
        },
        {
            "wholeName": "38 Pracownia informatyczna",
            "link": "s11.html",
            "shortName": "38",
            "longName": "Pracownia informatyczna"
        },
        {
            "wholeName": "39 Pracownia informatyczna",
            "link": "s12.html",
            "shortName": "39",
            "longName": "Pracownia informatyczna"
        },
        {
            "wholeName": "107 Pracownia programistyczna",
            "link": "s13.html",
            "shortName": "107",
            "longName": "Pracownia programistyczna"
        },
        {
            "wholeName": "108 Pracownina systemów i sieci internat",
            "link": "s14.html",
            "shortName": "108",
            "longName": "Pracownina systemów i sieci internat"
        },
        {
            "wholeName": "109 Pracownia informatyczna internat",
            "link": "s15.html",
            "shortName": "109",
            "longName": "Pracownia informatyczna internat"
        },
        {
            "wholeName": "40",
            "link": "s16.html"
        },
        {
            "wholeName": "41",
            "link": "s17.html"
        },
        {
            "wholeName": "42",
            "link": "s18.html"
        },
        {
            "wholeName": "43",
            "link": "s19.html"
        },
        {
            "wholeName": "44",
            "link": "s20.html"
        },
        {
            "wholeName": "45",
            "link": "s21.html"
        },
        {
            "wholeName": "46",
            "link": "s22.html"
        },
        {
            "wholeName": "47",
            "link": "s23.html"
        },
        {
            "wholeName": "48",
            "link": "s24.html"
        },
        {
            "wholeName": "51",
            "link": "s25.html"
        },
        {
            "wholeName": "52",
            "link": "s26.html"
        },
        {
            "wholeName": "16 Świetlica szk.",
            "link": "s27.html",
            "shortName": "16",
            "longName": "Świetlica szk."
        },
        {
            "wholeName": "sj1 Sala językowa 1",
            "link": "s28.html",
            "shortName": "sj1",
            "longName": "Sala językowa 1"
        },
        {
            "wholeName": "sj2 Sala językowa 2",
            "link": "s29.html",
            "shortName": "sj2",
            "longName": "Sala językowa 2"
        },
        {
            "wholeName": "sj3 Sala językowa 3",
            "link": "s30.html",
            "shortName": "sj3",
            "longName": "Sala językowa 3"
        },
        {
            "wholeName": "sj4 Sala językowa 4",
            "link": "s31.html",
            "shortName": "sj4",
            "longName": "Sala językowa 4"
        },
        {
            "wholeName": "sj5 Sala językowa 5",
            "link": "s32.html",
            "shortName": "sj5",
            "longName": "Sala językowa 5"
        },
        {
            "wholeName": "sj6 Sala językowa 6",
            "link": "s33.html",
            "shortName": "sj6",
            "longName": "Sala językowa 6"
        },
        {
            "wholeName": "sj7 Sala językowa 7",
            "link": "s34.html",
            "shortName": "sj7",
            "longName": "Sala językowa 7"
        },
        {
            "wholeName": "sg1 Sala gimnastyczna",
            "link": "s35.html",
            "shortName": "sg1",
            "longName": "Sala gimnastyczna"
        },
        {
            "wholeName": "sg2 Sala gimnastyczna",
            "link": "s36.html",
            "shortName": "sg2",
            "longName": "Sala gimnastyczna"
        },
        {
            "wholeName": "sg3 Sala gimnastyczna",
            "link": "s37.html",
            "shortName": "sg3",
            "longName": "Sala gimnastyczna"
        },
        {
            "wholeName": "sg4 Sala gimnastyczna",
            "link": "s38.html",
            "shortName": "sg4",
            "longName": "Sala gimnastyczna"
        },
        {
            "wholeName": "106 Pracownia elektryczna int. 1p.",
            "link": "s39.html",
            "shortName": "106",
            "longName": "Pracownia elektryczna int. 1p."
        },
        {
            "wholeName": "pe3 Pracownia elektryczna tył internatu",
            "link": "s40.html",
            "shortName": "pe3",
            "longName": "Pracownia elektryczna tył internatu"
        },
        {
            "wholeName": "pe4 Pracownia elektryczna tył internatu",
            "link": "s41.html",
            "shortName": "pe4",
            "longName": "Pracownia elektryczna tył internatu"
        },
        {
            "wholeName": "prautom Pracownia automatyki internat",
            "link": "s42.html",
            "shortName": "prautom",
            "longName": "Pracownia automatyki internat"
        },
        {
            "wholeName": "SKat Salka Katechetyczna w kościele NSPJ",
            "link": "s43.html",
            "shortName": "SKat",
            "longName": "Salka Katechetyczna w kościele NSPJ"
        }
    ]
]
```

</details>

- `http://localhost:4000/api/v3/specifiedTimetable?link=https://zsem.edu.pl/plany/plany/o13.html`

<details>
   <summary>EXAMPLE RESPONSE</summary>
   
```JSON
[
    [
        {
            "wholeName": null,
            "lessonNumber": 0,
            "teacherData": [],
            "classroomData": [],
            "classData": [
                {
                    "shortName": "3dT 3programista",
                    "link": "o13.html"
                }
            ],
            "subject": [],
            "attributes": [
                "o13.html"
            ],
            "wholeHour": " 7:00- 7:45",
            "startHour": "7:00",
            "endHour": "7:45",
            "dayNumber": 0,
            "classAttributes": [
                "o13.html"
            ],
            "teacherAttributes": [],
            "classroomAttributes": []
        },
        {
            "wholeName": null,
            "lessonNumber": 1,
            "teacherData": [],
            "classroomData": [],
            "classData": [
                {
                    "shortName": "3dT 3programista",
                    "link": "o13.html"
                }
            ],
            "subject": [],
            "attributes": [
                "o13.html"
            ],
            "wholeHour": " 7:50- 8:35",
            "startHour": "7:50",
            "endHour": "8:35",
            "dayNumber": 0,
            "classAttributes": [
                "o13.html"
            ],
            "teacherAttributes": [],
            "classroomAttributes": []
        },
        {
            "wholeName": null,
            "lessonNumber": 2,
            "teacherData": [],
            "classroomData": [],
            "classData": [
                {
                    "shortName": "3dT 3programista",
                    "link": "o13.html"
                }
            ],
            "subject": [],
            "attributes": [
                "o13.html"
            ],
            "wholeHour": " 8:40- 9:25",
            "startHour": "8:40",
            "endHour": "9:25",
            "dayNumber": 0,
            "classAttributes": [
                "o13.html"
            ],
            "teacherAttributes": [],
            "classroomAttributes": []
        },
        {
            "wholeName": null,
            "lessonNumber": 3,
            "teacherData": [],
            "classroomData": [],
            "classData": [
                {
                    "shortName": "3dT 3programista",
                    "link": "o13.html"
                }
            ],
            "subject": [],
            "attributes": [
                "o13.html"
            ],
            "wholeHour": " 9:30-10:15",
            "startHour": "9:30",
            "endHour": "10:15",
            "dayNumber": 0,
            "classAttributes": [
                "o13.html"
            ],
            "teacherAttributes": [],
            "classroomAttributes": []
        },
        {
            "wholeName": null,
            "lessonNumber": 4,
            "teacherData": [],
            "classroomData": [],
            "classData": [
                {
                    "shortName": "3dT 3programista",
                    "link": "o13.html"
                }
            ],
            "subject": [],
            "attributes": [
                "o13.html"
            ],
            "wholeHour": "10:30-11:15",
            "startHour": "10:30",
            "endHour": "11:15",
            "dayNumber": 0,
            "classAttributes": [
                "o13.html"
            ],
            "teacherAttributes": [],
            "classroomAttributes": []
        },
        {
            "wholeName": null,
            "lessonNumber": 5,
            "teacherData": [],
            "classroomData": [],
            "classData": [
                {
                    "shortName": "3dT 3programista",
                    "link": "o13.html"
                }
            ],
            "subject": [],
            "attributes": [
                "o13.html"
            ],
            "wholeHour": "11:20-12:05",
            "startHour": "11:20",
            "endHour": "12:05",
            "dayNumber": 0,
            "classAttributes": [
                "o13.html"
            ],
            "teacherAttributes": [],
            "classroomAttributes": []
        },
        {
            "wholeName": "geografia Cg 4",
            "lessonNumber": 6,
            "teacherData": [
                {
                    "shortName": "Cg",
                    "link": "n15.html"
                }
            ],
            "classroomData": [
                {
                    "shortName": "4",
                    "link": "s2.html"
                }
            ],
            "classData": [
                {
                    "shortName": "3dT 3programista",
                    "link": "o13.html"
                }
            ],
            "subject": [
                "geografia"
            ],
            "attributes": [
                "n15.html",
                "s2.html",
                "o13.html"
            ],
            "wholeHour": "12:10-12:55",
            "startHour": "12:10",
            "endHour": "12:55",
            "dayNumber": 0,
            "classAttributes": [
                "o13.html"
            ],
            "teacherAttributes": [
                "n15.html"
            ],
            "classroomAttributes": [
                "s2.html"
            ]
        },
        {
            "wholeName": "j.niemiecki-1/2 Tm sj1 \n j.niemiecki-2/2 Mw 106",
            "lessonNumber": 7,
            "teacherData": [
                {
                    "shortName": "Tm",
                    "link": "n62.html"
                },
                {
                    "shortName": "Mw",
                    "link": "n68.html"
                }
            ],
            "classroomData": [
                {
                    "shortName": "sj1",
                    "link": "s28.html"
                },
                {
                    "shortName": "106",
                    "link": "s39.html"
                }
            ],
            "classData": [
                {
                    "shortName": "3dT 3programista",
                    "link": "o13.html"
                }
            ],
            "subject": [
                "j.niemiecki-1/2",
                "j.niemiecki-2/2"
            ],
            "attributes": [
                "n62.html",
                "s28.html",
                "n68.html",
                "s39.html",
                "o13.html"
            ],
            "wholeHour": "13:15-14:00",
            "startHour": "13:15",
            "endHour": "14:00",
            "dayNumber": 0,
            "classAttributes": [
                "o13.html"
            ],
            "teacherAttributes": [
                "n62.html",
                "n68.html"
            ],
            "classroomAttributes": [
                "s28.html",
                "s39.html"
            ]
        },
        {
            "wholeName": "j.niemiecki-1/2 Tm sj1 \n j.niemiecki-2/2 Mw sj4",
            "lessonNumber": 8,
            "teacherData": [
                {
                    "shortName": "Tm",
                    "link": "n62.html"
                },
                {
                    "shortName": "Mw",
                    "link": "n68.html"
                }
            ],
            "classroomData": [
                {
                    "shortName": "sj1",
                    "link": "s28.html"
                },
                {
                    "shortName": "sj4",
                    "link": "s31.html"
                }
            ],
            "classData": [
                {
                    "shortName": "3dT 3programista",
                    "link": "o13.html"
                }
            ],
            "subject": [
                "j.niemiecki-1/2",
                "j.niemiecki-2/2"
            ],
            "attributes": [
                "n62.html",
                "s28.html",
                "n68.html",
                "s31.html",
                "o13.html"
            ],
            "wholeHour": "14:05-14:50",
            "startHour": "14:05",
            "endHour": "14:50",
            "dayNumber": 0,
            "classAttributes": [
                "o13.html"
            ],
            "teacherAttributes": [
                "n62.html",
                "n68.html"
            ],
            "classroomAttributes": [
                "s28.html",
                "s31.html"
            ]
        },
        {
            "wholeName": "p.przedsięb. Kg 14",
            "lessonNumber": 9,
            "teacherData": [
                {
                    "shortName": "Kg",
                    "link": "n31.html"
                }
            ],
            "classroomData": [
                {
                    "shortName": "14",
                    "link": "s9.html"
                }
            ],
            "classData": [
                {
                    "shortName": "3dT 3programista",
                    "link": "o13.html"
                }
            ],
            "subject": [
                "p.przedsięb."
            ],
            "attributes": [
                "n31.html",
                "s9.html",
                "o13.html"
            ],
            "wholeHour": "14:55-15:40",
            "startHour": "14:55",
            "endHour": "15:40",
            "dayNumber": 0,
            "classAttributes": [
                "o13.html"
            ],
            "teacherAttributes": [
                "n31.html"
            ],
            "classroomAttributes": [
                "s9.html"
            ]
        },
        {
            "wholeName": "informatyka-1/2 Dd 6 \n informatyka-2/2 RC 15",
            "lessonNumber": 10,
            "teacherData": [
                {
                    "shortName": "Dd",
                    "link": "n19.html"
                },
                {
                    "shortName": "RC",
                    "link": "n91.html"
                }
            ],
            "classroomData": [
                {
                    "shortName": "6",
                    "link": "s4.html"
                },
                {
                    "shortName": "15",
                    "link": "s10.html"
                }
            ],
            "classData": [
                {
                    "shortName": "3dT 3programista",
                    "link": "o13.html"
                }
            ],
            "subject": [
                "informatyka-1/2",
                "informatyka-2/2"
            ],
            "attributes": [
                "n19.html",
                "s4.html",
                "n91.html",
                "s10.html",
                "o13.html"
            ],
            "wholeHour": "15:45-16:30",
            "startHour": "15:45",
            "endHour": "16:30",
            "dayNumber": 0,
            "classAttributes": [
                "o13.html"
            ],
            "teacherAttributes": [
                "n19.html",
                "n91.html"
            ],
            "classroomAttributes": [
                "s4.html",
                "s10.html"
            ]
        },
        {
            "wholeName": "biologia Ne 12",
            "lessonNumber": 11,
            "teacherData": [
                {
                    "shortName": "Ne",
                    "link": "n46.html"
                }
            ],
            "classroomData": [
                {
                    "shortName": "12",
                    "link": "s7.html"
                }
            ],
            "classData": [
                {
                    "shortName": "3dT 3programista",
                    "link": "o13.html"
                }
            ],
            "subject": [
                "biologia"
            ],
            "attributes": [
                "n46.html",
                "s7.html",
                "o13.html"
            ],
            "wholeHour": "16:35-17:20",
            "startHour": "16:35",
            "endHour": "17:20",
            "dayNumber": 0,
            "classAttributes": [
                "o13.html"
            ],
            "teacherAttributes": [
                "n46.html"
            ],
            "classroomAttributes": [
                "s7.html"
            ]
        },
        {
            "wholeName": "prog.apk.web tl 40",
            "lessonNumber": 12,
            "teacherData": [
                {
                    "shortName": "tl",
                    "link": "n35.html"
                }
            ],
            "classroomData": [
                {
                    "shortName": "40",
                    "link": "s16.html"
                }
            ],
            "classData": [
                {
                    "shortName": "3dT 3programista",
                    "link": "o13.html"
                }
            ],
            "subject": [
                "prog.apk.web"
            ],
            "attributes": [
                "n35.html",
                "s16.html",
                "o13.html"
            ],
            "wholeHour": "17:25-18:10",
            "startHour": "17:25",
            "endHour": "18:10",
            "dayNumber": 0,
            "classAttributes": [
                "o13.html"
            ],
            "teacherAttributes": [
                "n35.html"
            ],
            "classroomAttributes": [
                "s16.html"
            ]
        }
    ],
    [
        {
            "wholeName": null,
            "lessonNumber": 0,
            "teacherData": [],
            "classroomData": [],
            "classData": [
                {
                    "shortName": "3dT 3programista",
                    "link": "o13.html"
                }
            ],
            "subject": [],
            "attributes": [
                "o13.html"
            ],
            "wholeHour": " 7:00- 7:45",
            "startHour": "7:00",
            "endHour": "7:45",
            "dayNumber": 1,
            "classAttributes": [
                "o13.html"
            ],
            "teacherAttributes": [],
            "classroomAttributes": []
        },
        {
            "wholeName": null,
            "lessonNumber": 1,
            "teacherData": [],
            "classroomData": [],
            "classData": [
                {
                    "shortName": "3dT 3programista",
                    "link": "o13.html"
                }
            ],
            "subject": [],
            "attributes": [
                "o13.html"
            ],
            "wholeHour": " 7:50- 8:35",
            "startHour": "7:50",
            "endHour": "8:35",
            "dayNumber": 1,
            "classAttributes": [
                "o13.html"
            ],
            "teacherAttributes": [],
            "classroomAttributes": []
        },
        {
            "wholeName": null,
            "lessonNumber": 2,
            "teacherData": [],
            "classroomData": [],
            "classData": [
                {
                    "shortName": "3dT 3programista",
                    "link": "o13.html"
                }
            ],
            "subject": [],
            "attributes": [
                "o13.html"
            ],
            "wholeHour": " 8:40- 9:25",
            "startHour": "8:40",
            "endHour": "9:25",
            "dayNumber": 1,
            "classAttributes": [
                "o13.html"
            ],
            "teacherAttributes": [],
            "classroomAttributes": []
        },
        {
            "wholeName": null,
            "lessonNumber": 3,
            "teacherData": [],
            "classroomData": [],
            "classData": [
                {
                    "shortName": "3dT 3programista",
                    "link": "o13.html"
                }
            ],
            "subject": [],
            "attributes": [
                "o13.html"
            ],
            "wholeHour": " 9:30-10:15",
            "startHour": "9:30",
            "endHour": "10:15",
            "dayNumber": 1,
            "classAttributes": [
                "o13.html"
            ],
            "teacherAttributes": [],
            "classroomAttributes": []
        },
        {
            "wholeName": null,
            "lessonNumber": 4,
            "teacherData": [],
            "classroomData": [],
            "classData": [
                {
                    "shortName": "3dT 3programista",
                    "link": "o13.html"
                }
            ],
            "subject": [],
            "attributes": [
                "o13.html"
            ],
            "wholeHour": "10:30-11:15",
            "startHour": "10:30",
            "endHour": "11:15",
            "dayNumber": 1,
            "classAttributes": [
                "o13.html"
            ],
            "teacherAttributes": [],
            "classroomAttributes": []
        },
        {
            "wholeName": "prac.apk.web-2/2 tl 107",
            "lessonNumber": 5,
            "teacherData": [
                {
                    "shortName": "tl",
                    "link": "n35.html"
                }
            ],
            "classroomData": [
                {
                    "shortName": "107",
                    "link": "s13.html"
                }
            ],
            "classData": [
                {
                    "shortName": "3dT 3programista",
                    "link": "o13.html"
                }
            ],
            "subject": [
                "prac.apk.web-2/2"
            ],
            "attributes": [
                "n35.html",
                "s13.html",
                "o13.html"
            ],
            "wholeHour": "11:20-12:05",
            "startHour": "11:20",
            "endHour": "12:05",
            "dayNumber": 1,
            "classAttributes": [
                "o13.html"
            ],
            "teacherAttributes": [
                "n35.html"
            ],
            "classroomAttributes": [
                "s13.html"
            ]
        },
        {
            "wholeName": "prac.apk.web-2/2 tl 107",
            "lessonNumber": 6,
            "teacherData": [
                {
                    "shortName": "tl",
                    "link": "n35.html"
                }
            ],
            "classroomData": [
                {
                    "shortName": "107",
                    "link": "s13.html"
                }
            ],
            "classData": [
                {
                    "shortName": "3dT 3programista",
                    "link": "o13.html"
                }
            ],
            "subject": [
                "prac.apk.web-2/2"
            ],
            "attributes": [
                "n35.html",
                "s13.html",
                "o13.html"
            ],
            "wholeHour": "12:10-12:55",
            "startHour": "12:10",
            "endHour": "12:55",
            "dayNumber": 1,
            "classAttributes": [
                "o13.html"
            ],
            "teacherAttributes": [
                "n35.html"
            ],
            "classroomAttributes": [
                "s13.html"
            ]
        },
        {
            "wholeName": "r_j.ang-1/2 Mb 38 \n r_j.ang-2/2 Br sj6",
            "lessonNumber": 7,
            "teacherData": [
                {
                    "shortName": "Mb",
                    "link": "n37.html"
                },
                {
                    "shortName": "Br",
                    "link": "n12.html"
                }
            ],
            "classroomData": [
                {
                    "shortName": "38",
                    "link": "s11.html"
                },
                {
                    "shortName": "sj6",
                    "link": "s33.html"
                }
            ],
            "classData": [
                {
                    "shortName": "3dT 3programista",
                    "link": "o13.html"
                }
            ],
            "subject": [
                "r_j.ang-1/2",
                "r_j.ang-2/2"
            ],
            "attributes": [
                "n37.html",
                "s11.html",
                "n12.html",
                "s33.html",
                "o13.html"
            ],
            "wholeHour": "13:15-14:00",
            "startHour": "13:15",
            "endHour": "14:00",
            "dayNumber": 1,
            "classAttributes": [
                "o13.html"
            ],
            "teacherAttributes": [
                "n37.html",
                "n12.html"
            ],
            "classroomAttributes": [
                "s11.html",
                "s33.html"
            ]
        },
        {
            "wholeName": "religia Tj 43",
            "lessonNumber": 8,
            "teacherData": [
                {
                    "shortName": "Tj",
                    "link": "n59.html"
                }
            ],
            "classroomData": [
                {
                    "shortName": "43",
                    "link": "s19.html"
                }
            ],
            "classData": [
                {
                    "shortName": "3dT 3programista",
                    "link": "o13.html"
                }
            ],
            "subject": [
                "religia"
            ],
            "attributes": [
                "n59.html",
                "s19.html",
                "o13.html"
            ],
            "wholeHour": "14:05-14:50",
            "startHour": "14:05",
            "endHour": "14:50",
            "dayNumber": 1,
            "classAttributes": [
                "o13.html"
            ],
            "teacherAttributes": [
                "n59.html"
            ],
            "classroomAttributes": [
                "s19.html"
            ]
        },
        {
            "wholeName": "wf-1/2 Bu sg2 \n wf-2/2 Gm sg4",
            "lessonNumber": 9,
            "teacherData": [
                {
                    "shortName": "Bu",
                    "link": "n14.html"
                },
                {
                    "shortName": "Gm",
                    "link": "n24.html"
                }
            ],
            "classroomData": [
                {
                    "shortName": "sg2",
                    "link": "s36.html"
                },
                {
                    "shortName": "sg4",
                    "link": "s38.html"
                }
            ],
            "classData": [
                {
                    "shortName": "3dT 3programista",
                    "link": "o13.html"
                }
            ],
            "subject": [
                "wf-1/2",
                "wf-2/2"
            ],
            "attributes": [
                "n14.html",
                "s36.html",
                "n24.html",
                "s38.html",
                "o13.html"
            ],
            "wholeHour": "14:55-15:40",
            "startHour": "14:55",
            "endHour": "15:40",
            "dayNumber": 1,
            "classAttributes": [
                "o13.html"
            ],
            "teacherAttributes": [
                "n14.html",
                "n24.html"
            ],
            "classroomAttributes": [
                "s36.html",
                "s38.html"
            ]
        },
        {
            "wholeName": "wf-1/2 Bu sg2 \n wf-2/2 Gm sg4",
            "lessonNumber": 10,
            "teacherData": [
                {
                    "shortName": "Bu",
                    "link": "n14.html"
                },
                {
                    "shortName": "Gm",
                    "link": "n24.html"
                }
            ],
            "classroomData": [
                {
                    "shortName": "sg2",
                    "link": "s36.html"
                },
                {
                    "shortName": "sg4",
                    "link": "s38.html"
                }
            ],
            "classData": [
                {
                    "shortName": "3dT 3programista",
                    "link": "o13.html"
                }
            ],
            "subject": [
                "wf-1/2",
                "wf-2/2"
            ],
            "attributes": [
                "n14.html",
                "s36.html",
                "n24.html",
                "s38.html",
                "o13.html"
            ],
            "wholeHour": "15:45-16:30",
            "startHour": "15:45",
            "endHour": "16:30",
            "dayNumber": 1,
            "classAttributes": [
                "o13.html"
            ],
            "teacherAttributes": [
                "n14.html",
                "n24.html"
            ],
            "classroomAttributes": [
                "s36.html",
                "s38.html"
            ]
        },
        {
            "wholeName": "prog.str.obi Kv 7",
            "lessonNumber": 11,
            "teacherData": [
                {
                    "shortName": "Kv",
                    "link": "n86.html"
                }
            ],
            "classroomData": [
                {
                    "shortName": "7",
                    "link": "s5.html"
                }
            ],
            "classData": [
                {
                    "shortName": "3dT 3programista",
                    "link": "o13.html"
                }
            ],
            "subject": [
                "prog.str.obi"
            ],
            "attributes": [
                "n86.html",
                "s5.html",
                "o13.html"
            ],
            "wholeHour": "16:35-17:20",
            "startHour": "16:35",
            "endHour": "17:20",
            "dayNumber": 1,
            "classAttributes": [
                "o13.html"
            ],
            "teacherAttributes": [
                "n86.html"
            ],
            "classroomAttributes": [
                "s5.html"
            ]
        },
        {
            "wholeName": null,
            "lessonNumber": 12,
            "teacherData": [],
            "classroomData": [],
            "classData": [
                {
                    "shortName": "3dT 3programista",
                    "link": "o13.html"
                }
            ],
            "subject": [],
            "attributes": [
                "o13.html"
            ],
            "wholeHour": "17:25-18:10",
            "startHour": "17:25",
            "endHour": "18:10",
            "dayNumber": 1,
            "classAttributes": [
                "o13.html"
            ],
            "teacherAttributes": [],
            "classroomAttributes": []
        }
    ],
    [
        {
            "wholeName": "religia Tj 11",
            "lessonNumber": 0,
            "teacherData": [
                {
                    "shortName": "Tj",
                    "link": "n59.html"
                }
            ],
            "classroomData": [
                {
                    "shortName": "11",
                    "link": "s6.html"
                }
            ],
            "classData": [
                {
                    "shortName": "3dT 3programista",
                    "link": "o13.html"
                }
            ],
            "subject": [
                "religia"
            ],
            "attributes": [
                "n59.html",
                "s6.html",
                "o13.html"
            ],
            "wholeHour": " 7:00- 7:45",
            "startHour": "7:00",
            "endHour": "7:45",
            "dayNumber": 2,
            "classAttributes": [
                "o13.html"
            ],
            "teacherAttributes": [
                "n59.html"
            ],
            "classroomAttributes": [
                "s6.html"
            ]
        },
        {
            "wholeName": "his_ter GÓ 45",
            "lessonNumber": 1,
            "teacherData": [
                {
                    "shortName": "GÓ",
                    "link": "n22.html"
                }
            ],
            "classroomData": [
                {
                    "shortName": "45",
                    "link": "s21.html"
                }
            ],
            "classData": [
                {
                    "shortName": "3dT 3programista",
                    "link": "o13.html"
                }
            ],
            "subject": [
                "his_ter"
            ],
            "attributes": [
                "n22.html",
                "s21.html",
                "o13.html"
            ],
            "wholeHour": " 7:50- 8:35",
            "startHour": "7:50",
            "endHour": "8:35",
            "dayNumber": 2,
            "classAttributes": [
                "o13.html"
            ],
            "teacherAttributes": [
                "n22.html"
            ],
            "classroomAttributes": [
                "s21.html"
            ]
        },
        {
            "wholeName": "chemia AŚ 52",
            "lessonNumber": 2,
            "teacherData": [
                {
                    "shortName": "AŚ",
                    "link": "n78.html"
                }
            ],
            "classroomData": [
                {
                    "shortName": "52",
                    "link": "s26.html"
                }
            ],
            "classData": [
                {
                    "shortName": "3dT 3programista",
                    "link": "o13.html"
                }
            ],
            "subject": [
                "chemia"
            ],
            "attributes": [
                "n78.html",
                "s26.html",
                "o13.html"
            ],
            "wholeHour": " 8:40- 9:25",
            "startHour": "8:40",
            "endHour": "9:25",
            "dayNumber": 2,
            "classAttributes": [
                "o13.html"
            ],
            "teacherAttributes": [
                "n78.html"
            ],
            "classroomAttributes": [
                "s26.html"
            ]
        },
        {
            "wholeName": "j.polski Si 46",
            "lessonNumber": 3,
            "teacherData": [
                {
                    "shortName": "Si",
                    "link": "n54.html"
                }
            ],
            "classroomData": [
                {
                    "shortName": "46",
                    "link": "s22.html"
                }
            ],
            "classData": [
                {
                    "shortName": "3dT 3programista",
                    "link": "o13.html"
                }
            ],
            "subject": [
                "j.polski"
            ],
            "attributes": [
                "n54.html",
                "s22.html",
                "o13.html"
            ],
            "wholeHour": " 9:30-10:15",
            "startHour": "9:30",
            "endHour": "10:15",
            "dayNumber": 2,
            "classAttributes": [
                "o13.html"
            ],
            "teacherAttributes": [
                "n54.html"
            ],
            "classroomAttributes": [
                "s22.html"
            ]
        },
        {
            "wholeName": "r_matematyka EP 11",
            "lessonNumber": 4,
            "teacherData": [
                {
                    "shortName": "EP",
                    "link": "n49.html"
                }
            ],
            "classroomData": [
                {
                    "shortName": "11",
                    "link": "s6.html"
                }
            ],
            "classData": [
                {
                    "shortName": "3dT 3programista",
                    "link": "o13.html"
                }
            ],
            "subject": [
                "r_matematyka"
            ],
            "attributes": [
                "n49.html",
                "s6.html",
                "o13.html"
            ],
            "wholeHour": "10:30-11:15",
            "startHour": "10:30",
            "endHour": "11:15",
            "dayNumber": 2,
            "classAttributes": [
                "o13.html"
            ],
            "teacherAttributes": [
                "n49.html"
            ],
            "classroomAttributes": [
                "s6.html"
            ]
        },
        {
            "wholeName": "matematyka EP 11",
            "lessonNumber": 5,
            "teacherData": [
                {
                    "shortName": "EP",
                    "link": "n49.html"
                }
            ],
            "classroomData": [
                {
                    "shortName": "11",
                    "link": "s6.html"
                }
            ],
            "classData": [
                {
                    "shortName": "3dT 3programista",
                    "link": "o13.html"
                }
            ],
            "subject": [
                "matematyka"
            ],
            "attributes": [
                "n49.html",
                "s6.html",
                "o13.html"
            ],
            "wholeHour": "11:20-12:05",
            "startHour": "11:20",
            "endHour": "12:05",
            "dayNumber": 2,
            "classAttributes": [
                "o13.html"
            ],
            "teacherAttributes": [
                "n49.html"
            ],
            "classroomAttributes": [
                "s6.html"
            ]
        },
        {
            "wholeName": "fizyka JW 51",
            "lessonNumber": 6,
            "teacherData": [
                {
                    "shortName": "JW",
                    "link": "n63.html"
                }
            ],
            "classroomData": [
                {
                    "shortName": "51",
                    "link": "s25.html"
                }
            ],
            "classData": [
                {
                    "shortName": "3dT 3programista",
                    "link": "o13.html"
                }
            ],
            "subject": [
                "fizyka"
            ],
            "attributes": [
                "n63.html",
                "s25.html",
                "o13.html"
            ],
            "wholeHour": "12:10-12:55",
            "startHour": "12:10",
            "endHour": "12:55",
            "dayNumber": 2,
            "classAttributes": [
                "o13.html"
            ],
            "teacherAttributes": [
                "n63.html"
            ],
            "classroomAttributes": [
                "s25.html"
            ]
        },
        {
            "wholeName": "str.apk.int DP 7",
            "lessonNumber": 7,
            "teacherData": [
                {
                    "shortName": "DP",
                    "link": "n50.html"
                }
            ],
            "classroomData": [
                {
                    "shortName": "7",
                    "link": "s5.html"
                }
            ],
            "classData": [
                {
                    "shortName": "3dT 3programista",
                    "link": "o13.html"
                }
            ],
            "subject": [
                "str.apk.int"
            ],
            "attributes": [
                "n50.html",
                "s5.html",
                "o13.html"
            ],
            "wholeHour": "13:15-14:00",
            "startHour": "13:15",
            "endHour": "14:00",
            "dayNumber": 2,
            "classAttributes": [
                "o13.html"
            ],
            "teacherAttributes": [
                "n50.html"
            ],
            "classroomAttributes": [
                "s5.html"
            ]
        },
        {
            "wholeName": "prac.apk.mob-2/2 KM 107",
            "lessonNumber": 8,
            "teacherData": [
                {
                    "shortName": "KM",
                    "link": "n42.html"
                }
            ],
            "classroomData": [
                {
                    "shortName": "107",
                    "link": "s13.html"
                }
            ],
            "classData": [
                {
                    "shortName": "3dT 3programista",
                    "link": "o13.html"
                }
            ],
            "subject": [
                "prac.apk.mob-2/2"
            ],
            "attributes": [
                "n42.html",
                "s13.html",
                "o13.html"
            ],
            "wholeHour": "14:05-14:50",
            "startHour": "14:05",
            "endHour": "14:50",
            "dayNumber": 2,
            "classAttributes": [
                "o13.html"
            ],
            "teacherAttributes": [
                "n42.html"
            ],
            "classroomAttributes": [
                "s13.html"
            ]
        },
        {
            "wholeName": "prac.apk.mob-2/2 KM 107",
            "lessonNumber": 9,
            "teacherData": [
                {
                    "shortName": "KM",
                    "link": "n42.html"
                }
            ],
            "classroomData": [
                {
                    "shortName": "107",
                    "link": "s13.html"
                }
            ],
            "classData": [
                {
                    "shortName": "3dT 3programista",
                    "link": "o13.html"
                }
            ],
            "subject": [
                "prac.apk.mob-2/2"
            ],
            "attributes": [
                "n42.html",
                "s13.html",
                "o13.html"
            ],
            "wholeHour": "14:55-15:40",
            "startHour": "14:55",
            "endHour": "15:40",
            "dayNumber": 2,
            "classAttributes": [
                "o13.html"
            ],
            "teacherAttributes": [
                "n42.html"
            ],
            "classroomAttributes": [
                "s13.html"
            ]
        },
        {
            "wholeName": null,
            "lessonNumber": 10,
            "teacherData": [],
            "classroomData": [],
            "classData": [
                {
                    "shortName": "3dT 3programista",
                    "link": "o13.html"
                }
            ],
            "subject": [],
            "attributes": [
                "o13.html"
            ],
            "wholeHour": "15:45-16:30",
            "startHour": "15:45",
            "endHour": "16:30",
            "dayNumber": 2,
            "classAttributes": [
                "o13.html"
            ],
            "teacherAttributes": [],
            "classroomAttributes": []
        },
        {
            "wholeName": null,
            "lessonNumber": 11,
            "teacherData": [],
            "classroomData": [],
            "classData": [
                {
                    "shortName": "3dT 3programista",
                    "link": "o13.html"
                }
            ],
            "subject": [],
            "attributes": [
                "o13.html"
            ],
            "wholeHour": "16:35-17:20",
            "startHour": "16:35",
            "endHour": "17:20",
            "dayNumber": 2,
            "classAttributes": [
                "o13.html"
            ],
            "teacherAttributes": [],
            "classroomAttributes": []
        },
        {
            "wholeName": null,
            "lessonNumber": 12,
            "teacherData": [],
            "classroomData": [],
            "classData": [
                {
                    "shortName": "3dT 3programista",
                    "link": "o13.html"
                }
            ],
            "subject": [],
            "attributes": [
                "o13.html"
            ],
            "wholeHour": "17:25-18:10",
            "startHour": "17:25",
            "endHour": "18:10",
            "dayNumber": 2,
            "classAttributes": [
                "o13.html"
            ],
            "teacherAttributes": [],
            "classroomAttributes": []
        }
    ],
    [
        {
            "wholeName": null,
            "lessonNumber": 0,
            "teacherData": [],
            "classroomData": [],
            "classData": [
                {
                    "shortName": "3dT 3programista",
                    "link": "o13.html"
                }
            ],
            "subject": [],
            "attributes": [
                "o13.html"
            ],
            "wholeHour": " 7:00- 7:45",
            "startHour": "7:00",
            "endHour": "7:45",
            "dayNumber": 3,
            "classAttributes": [
                "o13.html"
            ],
            "teacherAttributes": [],
            "classroomAttributes": []
        },
        {
            "wholeName": null,
            "lessonNumber": 1,
            "teacherData": [],
            "classroomData": [],
            "classData": [
                {
                    "shortName": "3dT 3programista",
                    "link": "o13.html"
                }
            ],
            "subject": [],
            "attributes": [
                "o13.html"
            ],
            "wholeHour": " 7:50- 8:35",
            "startHour": "7:50",
            "endHour": "8:35",
            "dayNumber": 3,
            "classAttributes": [
                "o13.html"
            ],
            "teacherAttributes": [],
            "classroomAttributes": []
        },
        {
            "wholeName": null,
            "lessonNumber": 2,
            "teacherData": [],
            "classroomData": [],
            "classData": [
                {
                    "shortName": "3dT 3programista",
                    "link": "o13.html"
                }
            ],
            "subject": [],
            "attributes": [
                "o13.html"
            ],
            "wholeHour": " 8:40- 9:25",
            "startHour": "8:40",
            "endHour": "9:25",
            "dayNumber": 3,
            "classAttributes": [
                "o13.html"
            ],
            "teacherAttributes": [],
            "classroomAttributes": []
        },
        {
            "wholeName": "wf-1/2 Bu sg4 \n wf-2/2 Gm sg3",
            "lessonNumber": 3,
            "teacherData": [
                {
                    "shortName": "Bu",
                    "link": "n14.html"
                },
                {
                    "shortName": "Gm",
                    "link": "n24.html"
                }
            ],
            "classroomData": [
                {
                    "shortName": "sg4",
                    "link": "s38.html"
                },
                {
                    "shortName": "sg3",
                    "link": "s37.html"
                }
            ],
            "classData": [
                {
                    "shortName": "3dT 3programista",
                    "link": "o13.html"
                }
            ],
            "subject": [
                "wf-1/2",
                "wf-2/2"
            ],
            "attributes": [
                "n14.html",
                "s38.html",
                "n24.html",
                "s37.html",
                "o13.html"
            ],
            "wholeHour": " 9:30-10:15",
            "startHour": "9:30",
            "endHour": "10:15",
            "dayNumber": 3,
            "classAttributes": [
                "o13.html"
            ],
            "teacherAttributes": [
                "n14.html",
                "n24.html"
            ],
            "classroomAttributes": [
                "s38.html",
                "s37.html"
            ]
        },
        {
            "wholeName": "j.ang.zaw Br 48",
            "lessonNumber": 4,
            "teacherData": [
                {
                    "shortName": "Br",
                    "link": "n12.html"
                }
            ],
            "classroomData": [
                {
                    "shortName": "48",
                    "link": "s24.html"
                }
            ],
            "classData": [
                {
                    "shortName": "3dT 3programista",
                    "link": "o13.html"
                }
            ],
            "subject": [
                "j.ang.zaw"
            ],
            "attributes": [
                "n12.html",
                "s24.html",
                "o13.html"
            ],
            "wholeHour": "10:30-11:15",
            "startHour": "10:30",
            "endHour": "11:15",
            "dayNumber": 3,
            "classAttributes": [
                "o13.html"
            ],
            "teacherAttributes": [
                "n12.html"
            ],
            "classroomAttributes": [
                "s24.html"
            ]
        },
        {
            "wholeName": "prac.apk.web-1/2 tl 107 \n pra.str.apk.-2/2 WJ 38",
            "lessonNumber": 5,
            "teacherData": [
                {
                    "shortName": "tl",
                    "link": "n35.html"
                },
                {
                    "shortName": "WJ",
                    "link": "n88.html"
                }
            ],
            "classroomData": [
                {
                    "shortName": "107",
                    "link": "s13.html"
                },
                {
                    "shortName": "38",
                    "link": "s11.html"
                }
            ],
            "classData": [
                {
                    "shortName": "3dT 3programista",
                    "link": "o13.html"
                }
            ],
            "subject": [
                "prac.apk.web-1/2",
                "pra.str.apk.-2/2"
            ],
            "attributes": [
                "n35.html",
                "s13.html",
                "n88.html",
                "s11.html",
                "o13.html"
            ],
            "wholeHour": "11:20-12:05",
            "startHour": "11:20",
            "endHour": "12:05",
            "dayNumber": 3,
            "classAttributes": [
                "o13.html"
            ],
            "teacherAttributes": [
                "n35.html",
                "n88.html"
            ],
            "classroomAttributes": [
                "s13.html",
                "s11.html"
            ]
        },
        {
            "wholeName": "prac.apk.web-1/2 tl 107 \n pra.str.apk.-2/2 WJ 38",
            "lessonNumber": 6,
            "teacherData": [
                {
                    "shortName": "tl",
                    "link": "n35.html"
                },
                {
                    "shortName": "WJ",
                    "link": "n88.html"
                }
            ],
            "classroomData": [
                {
                    "shortName": "107",
                    "link": "s13.html"
                },
                {
                    "shortName": "38",
                    "link": "s11.html"
                }
            ],
            "classData": [
                {
                    "shortName": "3dT 3programista",
                    "link": "o13.html"
                }
            ],
            "subject": [
                "prac.apk.web-1/2",
                "pra.str.apk.-2/2"
            ],
            "attributes": [
                "n35.html",
                "s13.html",
                "n88.html",
                "s11.html",
                "o13.html"
            ],
            "wholeHour": "12:10-12:55",
            "startHour": "12:10",
            "endHour": "12:55",
            "dayNumber": 3,
            "classAttributes": [
                "o13.html"
            ],
            "teacherAttributes": [
                "n35.html",
                "n88.html"
            ],
            "classroomAttributes": [
                "s13.html",
                "s11.html"
            ]
        },
        {
            "wholeName": "j.ang-1/2 Mb sj4 \n j.ang-2/2 Br sj6",
            "lessonNumber": 7,
            "teacherData": [
                {
                    "shortName": "Mb",
                    "link": "n37.html"
                },
                {
                    "shortName": "Br",
                    "link": "n12.html"
                }
            ],
            "classroomData": [
                {
                    "shortName": "sj4",
                    "link": "s31.html"
                },
                {
                    "shortName": "sj6",
                    "link": "s33.html"
                }
            ],
            "classData": [
                {
                    "shortName": "3dT 3programista",
                    "link": "o13.html"
                }
            ],
            "subject": [
                "j.ang-1/2",
                "j.ang-2/2"
            ],
            "attributes": [
                "n37.html",
                "s31.html",
                "n12.html",
                "s33.html",
                "o13.html"
            ],
            "wholeHour": "13:15-14:00",
            "startHour": "13:15",
            "endHour": "14:00",
            "dayNumber": 3,
            "classAttributes": [
                "o13.html"
            ],
            "teacherAttributes": [
                "n37.html",
                "n12.html"
            ],
            "classroomAttributes": [
                "s31.html",
                "s33.html"
            ]
        },
        {
            "wholeName": "j.ang-1/2 Mb sj4 \n j.ang-2/2 Br sj6",
            "lessonNumber": 8,
            "teacherData": [
                {
                    "shortName": "Mb",
                    "link": "n37.html"
                },
                {
                    "shortName": "Br",
                    "link": "n12.html"
                }
            ],
            "classroomData": [
                {
                    "shortName": "sj4",
                    "link": "s31.html"
                },
                {
                    "shortName": "sj6",
                    "link": "s33.html"
                }
            ],
            "classData": [
                {
                    "shortName": "3dT 3programista",
                    "link": "o13.html"
                }
            ],
            "subject": [
                "j.ang-1/2",
                "j.ang-2/2"
            ],
            "attributes": [
                "n37.html",
                "s31.html",
                "n12.html",
                "s33.html",
                "o13.html"
            ],
            "wholeHour": "14:05-14:50",
            "startHour": "14:05",
            "endHour": "14:50",
            "dayNumber": 3,
            "classAttributes": [
                "o13.html"
            ],
            "teacherAttributes": [
                "n37.html",
                "n12.html"
            ],
            "classroomAttributes": [
                "s31.html",
                "s33.html"
            ]
        },
        {
            "wholeName": "prog.apk.mob LI 40",
            "lessonNumber": 9,
            "teacherData": [
                {
                    "shortName": "LI",
                    "link": "n77.html"
                }
            ],
            "classroomData": [
                {
                    "shortName": "40",
                    "link": "s16.html"
                }
            ],
            "classData": [
                {
                    "shortName": "3dT 3programista",
                    "link": "o13.html"
                }
            ],
            "subject": [
                "prog.apk.mob"
            ],
            "attributes": [
                "n77.html",
                "s16.html",
                "o13.html"
            ],
            "wholeHour": "14:55-15:40",
            "startHour": "14:55",
            "endHour": "15:40",
            "dayNumber": 3,
            "classAttributes": [
                "o13.html"
            ],
            "teacherAttributes": [
                "n77.html"
            ],
            "classroomAttributes": [
                "s16.html"
            ]
        },
        {
            "wholeName": "j.polski Si 47",
            "lessonNumber": 10,
            "teacherData": [
                {
                    "shortName": "Si",
                    "link": "n54.html"
                }
            ],
            "classroomData": [
                {
                    "shortName": "47",
                    "link": "s23.html"
                }
            ],
            "classData": [
                {
                    "shortName": "3dT 3programista",
                    "link": "o13.html"
                }
            ],
            "subject": [
                "j.polski"
            ],
            "attributes": [
                "n54.html",
                "s23.html",
                "o13.html"
            ],
            "wholeHour": "15:45-16:30",
            "startHour": "15:45",
            "endHour": "16:30",
            "dayNumber": 3,
            "classAttributes": [
                "o13.html"
            ],
            "teacherAttributes": [
                "n54.html"
            ],
            "classroomAttributes": [
                "s23.html"
            ]
        },
        {
            "wholeName": "j.polski Si 47",
            "lessonNumber": 11,
            "teacherData": [
                {
                    "shortName": "Si",
                    "link": "n54.html"
                }
            ],
            "classroomData": [
                {
                    "shortName": "47",
                    "link": "s23.html"
                }
            ],
            "classData": [
                {
                    "shortName": "3dT 3programista",
                    "link": "o13.html"
                }
            ],
            "subject": [
                "j.polski"
            ],
            "attributes": [
                "n54.html",
                "s23.html",
                "o13.html"
            ],
            "wholeHour": "16:35-17:20",
            "startHour": "16:35",
            "endHour": "17:20",
            "dayNumber": 3,
            "classAttributes": [
                "o13.html"
            ],
            "teacherAttributes": [
                "n54.html"
            ],
            "classroomAttributes": [
                "s23.html"
            ]
        },
        {
            "wholeName": null,
            "lessonNumber": 12,
            "teacherData": [],
            "classroomData": [],
            "classData": [
                {
                    "shortName": "3dT 3programista",
                    "link": "o13.html"
                }
            ],
            "subject": [],
            "attributes": [
                "o13.html"
            ],
            "wholeHour": "17:25-18:10",
            "startHour": "17:25",
            "endHour": "18:10",
            "dayNumber": 3,
            "classAttributes": [
                "o13.html"
            ],
            "teacherAttributes": [],
            "classroomAttributes": []
        }
    ],
    [
        {
            "wholeName": null,
            "lessonNumber": 0,
            "teacherData": [],
            "classroomData": [],
            "classData": [
                {
                    "shortName": "3dT 3programista",
                    "link": "o13.html"
                }
            ],
            "subject": [],
            "attributes": [
                "o13.html"
            ],
            "wholeHour": " 7:00- 7:45",
            "startHour": "7:00",
            "endHour": "7:45",
            "dayNumber": 4,
            "classAttributes": [
                "o13.html"
            ],
            "teacherAttributes": [],
            "classroomAttributes": []
        },
        {
            "wholeName": null,
            "lessonNumber": 1,
            "teacherData": [],
            "classroomData": [],
            "classData": [
                {
                    "shortName": "3dT 3programista",
                    "link": "o13.html"
                }
            ],
            "subject": [],
            "attributes": [
                "o13.html"
            ],
            "wholeHour": " 7:50- 8:35",
            "startHour": "7:50",
            "endHour": "8:35",
            "dayNumber": 4,
            "classAttributes": [
                "o13.html"
            ],
            "teacherAttributes": [],
            "classroomAttributes": []
        },
        {
            "wholeName": null,
            "lessonNumber": 2,
            "teacherData": [],
            "classroomData": [],
            "classData": [
                {
                    "shortName": "3dT 3programista",
                    "link": "o13.html"
                }
            ],
            "subject": [],
            "attributes": [
                "o13.html"
            ],
            "wholeHour": " 8:40- 9:25",
            "startHour": "8:40",
            "endHour": "9:25",
            "dayNumber": 4,
            "classAttributes": [
                "o13.html"
            ],
            "teacherAttributes": [],
            "classroomAttributes": []
        },
        {
            "wholeName": "prac.apk.mob-1/2 WG 107",
            "lessonNumber": 3,
            "teacherData": [
                {
                    "shortName": "WG",
                    "link": "n90.html"
                }
            ],
            "classroomData": [
                {
                    "shortName": "107",
                    "link": "s13.html"
                }
            ],
            "classData": [
                {
                    "shortName": "3dT 3programista",
                    "link": "o13.html"
                }
            ],
            "subject": [
                "prac.apk.mob-1/2"
            ],
            "attributes": [
                "n90.html",
                "s13.html",
                "o13.html"
            ],
            "wholeHour": " 9:30-10:15",
            "startHour": "9:30",
            "endHour": "10:15",
            "dayNumber": 4,
            "classAttributes": [
                "o13.html"
            ],
            "teacherAttributes": [
                "n90.html"
            ],
            "classroomAttributes": [
                "s13.html"
            ]
        },
        {
            "wholeName": "prac.apk.mob-1/2 WG 107",
            "lessonNumber": 4,
            "teacherData": [
                {
                    "shortName": "WG",
                    "link": "n90.html"
                }
            ],
            "classroomData": [
                {
                    "shortName": "107",
                    "link": "s13.html"
                }
            ],
            "classData": [
                {
                    "shortName": "3dT 3programista",
                    "link": "o13.html"
                }
            ],
            "subject": [
                "prac.apk.mob-1/2"
            ],
            "attributes": [
                "n90.html",
                "s13.html",
                "o13.html"
            ],
            "wholeHour": "10:30-11:15",
            "startHour": "10:30",
            "endHour": "11:15",
            "dayNumber": 4,
            "classAttributes": [
                "o13.html"
            ],
            "teacherAttributes": [
                "n90.html"
            ],
            "classroomAttributes": [
                "s13.html"
            ]
        },
        {
            "wholeName": "pra.str.apk.-1/2 DP 38",
            "lessonNumber": 5,
            "teacherData": [
                {
                    "shortName": "DP",
                    "link": "n50.html"
                }
            ],
            "classroomData": [
                {
                    "shortName": "38",
                    "link": "s11.html"
                }
            ],
            "classData": [
                {
                    "shortName": "3dT 3programista",
                    "link": "o13.html"
                }
            ],
            "subject": [
                "pra.str.apk.-1/2"
            ],
            "attributes": [
                "n50.html",
                "s11.html",
                "o13.html"
            ],
            "wholeHour": "11:20-12:05",
            "startHour": "11:20",
            "endHour": "12:05",
            "dayNumber": 4,
            "classAttributes": [
                "o13.html"
            ],
            "teacherAttributes": [
                "n50.html"
            ],
            "classroomAttributes": [
                "s11.html"
            ]
        },
        {
            "wholeName": "pra.str.apk.-1/2 DP 38",
            "lessonNumber": 6,
            "teacherData": [
                {
                    "shortName": "DP",
                    "link": "n50.html"
                }
            ],
            "classroomData": [
                {
                    "shortName": "38",
                    "link": "s11.html"
                }
            ],
            "classData": [
                {
                    "shortName": "3dT 3programista",
                    "link": "o13.html"
                }
            ],
            "subject": [
                "pra.str.apk.-1/2"
            ],
            "attributes": [
                "n50.html",
                "s11.html",
                "o13.html"
            ],
            "wholeHour": "12:10-12:55",
            "startHour": "12:10",
            "endHour": "12:55",
            "dayNumber": 4,
            "classAttributes": [
                "o13.html"
            ],
            "teacherAttributes": [
                "n50.html"
            ],
            "classroomAttributes": [
                "s11.html"
            ]
        },
        {
            "wholeName": "matematyka EP 40",
            "lessonNumber": 7,
            "teacherData": [
                {
                    "shortName": "EP",
                    "link": "n49.html"
                }
            ],
            "classroomData": [
                {
                    "shortName": "40",
                    "link": "s16.html"
                }
            ],
            "classData": [
                {
                    "shortName": "3dT 3programista",
                    "link": "o13.html"
                }
            ],
            "subject": [
                "matematyka"
            ],
            "attributes": [
                "n49.html",
                "s16.html",
                "o13.html"
            ],
            "wholeHour": "13:15-14:00",
            "startHour": "13:15",
            "endHour": "14:00",
            "dayNumber": 4,
            "classAttributes": [
                "o13.html"
            ],
            "teacherAttributes": [
                "n49.html"
            ],
            "classroomAttributes": [
                "s16.html"
            ]
        },
        {
            "wholeName": "matematyka EP 40",
            "lessonNumber": 8,
            "teacherData": [
                {
                    "shortName": "EP",
                    "link": "n49.html"
                }
            ],
            "classroomData": [
                {
                    "shortName": "40",
                    "link": "s16.html"
                }
            ],
            "classData": [
                {
                    "shortName": "3dT 3programista",
                    "link": "o13.html"
                }
            ],
            "subject": [
                "matematyka"
            ],
            "attributes": [
                "n49.html",
                "s16.html",
                "o13.html"
            ],
            "wholeHour": "14:05-14:50",
            "startHour": "14:05",
            "endHour": "14:50",
            "dayNumber": 4,
            "classAttributes": [
                "o13.html"
            ],
            "teacherAttributes": [
                "n49.html"
            ],
            "classroomAttributes": [
                "s16.html"
            ]
        },
        {
            "wholeName": "historia KŃ 44",
            "lessonNumber": 9,
            "teacherData": [
                {
                    "shortName": "KŃ",
                    "link": "n79.html"
                }
            ],
            "classroomData": [
                {
                    "shortName": "44",
                    "link": "s20.html"
                }
            ],
            "classData": [
                {
                    "shortName": "3dT 3programista",
                    "link": "o13.html"
                }
            ],
            "subject": [
                "historia"
            ],
            "attributes": [
                "n79.html",
                "s20.html",
                "o13.html"
            ],
            "wholeHour": "14:55-15:40",
            "startHour": "14:55",
            "endHour": "15:40",
            "dayNumber": 4,
            "classAttributes": [
                "o13.html"
            ],
            "teacherAttributes": [
                "n79.html"
            ],
            "classroomAttributes": [
                "s20.html"
            ]
        },
        {
            "wholeName": "godz.wych Kg 13",
            "lessonNumber": 10,
            "teacherData": [
                {
                    "shortName": "Kg",
                    "link": "n31.html"
                }
            ],
            "classroomData": [
                {
                    "shortName": "13",
                    "link": "s8.html"
                }
            ],
            "classData": [
                {
                    "shortName": "3dT 3programista",
                    "link": "o13.html"
                }
            ],
            "subject": [
                "godz.wych"
            ],
            "attributes": [
                "n31.html",
                "s8.html",
                "o13.html"
            ],
            "wholeHour": "15:45-16:30",
            "startHour": "15:45",
            "endHour": "16:30",
            "dayNumber": 4,
            "classAttributes": [
                "o13.html"
            ],
            "teacherAttributes": [
                "n31.html"
            ],
            "classroomAttributes": [
                "s8.html"
            ]
        },
        {
            "wholeName": "podst.progra WG 4",
            "lessonNumber": 11,
            "teacherData": [
                {
                    "shortName": "WG",
                    "link": "n90.html"
                }
            ],
            "classroomData": [
                {
                    "shortName": "4",
                    "link": "s2.html"
                }
            ],
            "classData": [
                {
                    "shortName": "3dT 3programista",
                    "link": "o13.html"
                }
            ],
            "subject": [
                "podst.progra"
            ],
            "attributes": [
                "n90.html",
                "s2.html",
                "o13.html"
            ],
            "wholeHour": "16:35-17:20",
            "startHour": "16:35",
            "endHour": "17:20",
            "dayNumber": 4,
            "classAttributes": [
                "o13.html"
            ],
            "teacherAttributes": [
                "n90.html"
            ],
            "classroomAttributes": [
                "s2.html"
            ]
        },
        {
            "wholeName": null,
            "lessonNumber": 12,
            "teacherData": [],
            "classroomData": [],
            "classData": [
                {
                    "shortName": "3dT 3programista",
                    "link": "o13.html"
                }
            ],
            "subject": [],
            "attributes": [
                "o13.html"
            ],
            "wholeHour": "17:25-18:10",
            "startHour": "17:25",
            "endHour": "18:10",
            "dayNumber": 4,
            "classAttributes": [
                "o13.html"
            ],
            "teacherAttributes": [],
            "classroomAttributes": []
        }
    ]
]
```

</details>
