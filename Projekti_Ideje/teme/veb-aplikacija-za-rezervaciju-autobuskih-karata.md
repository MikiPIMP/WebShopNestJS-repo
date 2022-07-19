# Veb aplikacija za rezervaciju autobuskih karata

Aplikacija treba da omogući korisnicima portala da obave on-lajn rezervaciju autobuske karte. Administratori sistema, koji se prijavljuju sa svojim korisničkim imenima i lozinkama mogu da uređuju spisak autobuskih linija. Spisak gradova je unapred definisan u bazi podataka. Administratori mogu da uređuju spisak autobuskih prevoznika, kao i spisak planiranih linija, tj. koji prevoznik kog datuma u koje vreme ima planiran polazak iz određenog mesta i očekivan dolazak u određena mesta. Poslednje navedeno mesto dolaska će biti prikazano kao krajnje odredište linije prevoza. Npr. Prevoznik SingiBUS polazi iz Beograda u subotu, 1. aprila 2017. godine u 9:45, prolazi kroz Novi Sad, gde pristiže u 11:10, pa nastavlja kroz Vrbas, gde dolazi u 11:45, a zatim pristaje u Sombor u 12:35. Ova linija treba da bude prikazana kao Beograd - Sombor sa polaskom u 9:45 i dolaskom u 12:45. Za svako planirano putovanje određenog prevoznika treba da bude naveden ukupan broj mesta u autobusu, kao i cenu karte u jednom smeru i cenu karte u oba smera (povratnu). Korisnik sajta može da vrši pretragu planiranih prevoza po mestu polaska i/ili dolaska, datumu i auto-prevozniku. Kada izabere željenu liniju, treba da obeleži koliko karata kupuje (ukoliko ima slobodnih mesta - broj slobodnih mesta se automatski računa kao definisani ukupan broj mesta u autobusu od čega aplikacija sama oduzima broj kupljenih i rezervisanih karata). Korisnik mora da bude registrovan i prijavljen na sistem kako bi mogao da izvrši rezervaciju karte. Administrator sistema može da evidentira prodate karte, tj. da izvrši direktnu rezervaciju kroz administrativni panel. Karta prodata od strane administratora i karta koju je rezervisao korisnik preko aplikacije se računaju isto kada se prikazuje broj zauzetih od ukupnog broja slobodnih mesta u autobusu za datu planiranu vožnju. Administrator kroz sistem obeležava rezervacije kao prodate karte kada na blagajni korisnik izvrši kupovinu karte. Ovaj deo sistema treba samo simulirati. Nije potrebno praviti poseban deo aplikacije za blagajnike. Za ovaj deo će biti korišćena opcija kojoj ima pristup administrator sistema. Grafički interfejs treba da bude realizovan sa responsive dizajnom.

## Tehnička ograničenja

- Aplikacija mora da bude realizovana na Node.js platformi korišćenjem Express biblioteke. Aplikacija mora da bude podeljena u dve nezavisne celine: back-end veb servis (API) i front-end (GUI aplikacija). Sav kôd aplikacije treba da bude organizovan u dva Git spremišta u okviru istog korisničkog naloga za ovaj projekat.
- Baza podataka mora da bude relaciona i treba koristiti MySQL ili MariaDB sistem za upravljanje bazama podataka (RDBMS) i u spremištu back-end dela aplikacije mora da bude dostupan SQL dump strukture baze podataka, eventualno sa inicijalnim podacima, potrebnim za demonstraciju rada projekta.
- Back-end i front-end delovi projekta moraju da budi pisani na TypeScript jeziku, prevedeni TypeScript prevodiocem na adekvatan JavaScript. Back-end deo aplikacije, preveden na JavaScript iz izvornog TypeScript koda se pokreće kao Node.js aplikacija, a front-end deo se statički servira sa rute statičkih resursa back-end dela aplikacije i izvršava se na strani klijenta. Za postupak provere identiteta korisnika koji upućuje zahteve back-end delu aplikacije može da se koristi mehanizam sesija ili JWT (JSON Web Tokena), po slobodnom izboru.
- Sav generisani HTML kôd koji proizvodi front-end deo aplikacije mora da bude 100% validan, tj. da prođe proveru W3C Validatorom (dopuštena su upozorenja - Warning, ali ne i greške - Error). Grafički korisnički interfejs se generiše na strani klijenta (client side rendering), korišćenjem React biblioteke, dok podatke doprema asinhrono iz back-end dela aplikacije (iz API-ja). Nije neophodno baviti se izradom posebnog dizajna grafičkog interfejsa aplikacije, već je moguće koristiti CSS biblioteke kao što je Bootstrap CSS biblioteka. Front-end deo aplikacije treba da bude realizovan tako da se prilagođava različitim veličinama ekrana (responsive design).
- Potrebno je obezbediti proveru podataka koji se od korisnika iz front-end dela upućuju back-end delu aplikacije. Moguća su tri sloja zaštite i to: (1) JavaScript validacija vrednosti na front-end-u; (2) Provera korišćenjem adekvatnih testova ili regularnih izraza na strani servera u back-end-u (moguće je i korišćenjem izričitih šema - Schema za validaciju ili drugim pristupima) i (3) provera na nivou baze podataka korišćenjem okidača nad samim tabelama baze podataka.
- Neophodno je napisati prateću projektnu dokumentaciju o izradi aplikacije koja sadrži (1) model baze podataka sa detaljnim opisom svih tabela, njihovih polja i relacija; (2) dijagram baze podataka; (3) dijagram organizacije delova sistema, gde se vidi veza između baze, back-end, front-end i korisnika sa opisom smera kretanja informacija; (4) popis svih aktivnosti koje su podržane kroz aplikaciju za sve uloge korisnika aplikacije prikazane u obliku Use-Case dijagrama; kao i (5) sve ostale elemente dokumentacije predviđene uputstvom za izradu dokumentacije po ISO standardu.
- Izrada oba dela aplikacije (projekata) i promene kodova datoteka tih projekata moraju da bude praćene korišćenjem alata za verziranje koda Git, a kompletan kôd aplikacije bude dostupan na javnom Git spremištu, npr. na besplatnim GitHub ili Bitbucket servisima, jedno spremište za back-end projekat i jedno za front-end projekat. Ne može ceo projekat da bude otpremljen u samo nekoliko masovnih Git commit-a, već mora da bude pokazano da je projekat realizovan u kontinuitetu, da su korišćene grane (branching), da je bilo paralelnog rada u više grana koje su spojene (merging) sa ili bez konflikata (conflict resolution).

Autor teme za projektni zadatak: Milan Tair [linkedin.com/in/milantex](https://linkedin.com/in/milantex)

M. Tair, "Veb aplikacija za rezervaciju autobuskih karata - Teme projekata za razvoj veb aplikacija", 2016-2021. [Online]. Available at: https://github.com/Milantex/Teme-za-projekte-za-razvoj-veb-aplikacija/blob/main/teme/veb-aplikacija-za-rezervaciju-autobuskih-karata.md [Accessed: ISO_DATE]