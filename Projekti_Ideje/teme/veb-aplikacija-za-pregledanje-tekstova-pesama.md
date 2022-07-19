# Veb aplikacija za pregledanje tekstova pesama

Administratori se na aplikaciju prijavljuju sa svojim pristupnim parametrima i mogu da uređuju spiskove muzičkih žanrova, izvođača i autora koji su podržani na veb aplikaciji za tekstove pesama. Korisnici se registruju unosom imena, prezimena, jedinstvene adrese elektronske pošte, jedinstvenog broja telefona i željene lozinke za nalog. Kada se prijave, mogu da izvrše unos novog teksta pesme. Tom prilikom biraju muzički žanr, izvođača i, ukoliko je poznato, autora pesme, kao i tekst pesme, u slobodnoj tekstualnoj formi u više redova, bez formatiranja. Korisnici takođe mogu da popune formular za podnošenje zahteva za unos u evidenciju u bazi novih muzičkih žanrova, izvođača ili imena autora, koji ne postoje evidentirani u bazi. Ove podnete zahteve vide administratori koji mogu da na osnovu unetih predloga i zahteva, da izmene bazu i da obeleže zahtev kao rešen ili odbijen, nakon čega nestaje iz liste. Administratori mogu da pregledaju poslate tekstove pesama koje su uneli korisnici i da ih pregledaju, eventualno isprave, izmene i odobre za objavljivanje. Takođe, mogu da ih odbiju. Na sajtu se, na stranici teksta pesme vidi ime, prezime i adresa e-pošte korisnika koji je taj tekst pesme poslao za unos u bazu. Objavljivanja podataka korisnika koji je tekst pesme podneo za objavu nije opciona. Posetioci sajta mogu da pregledaju bazu tekstova pesama bez prijave. Takođe, klikom na ime autora, ime izvođača ili naziv muzičkog žanra, posetioci mogu da vide spiskove pesama koje su vezane za konkretnog autora, izvođača ili žanr, respektivno.

## Tehnička ograničenja

- Aplikacija mora da bude realizovana na Node.js platformi korišćenjem Express biblioteke. Aplikacija mora da bude podeljena u dve nezavisne celine: back-end veb servis (API) i front-end (GUI aplikacija). Sav kôd aplikacije treba da bude organizovan u dva Git spremišta u okviru istog korisničkog naloga za ovaj projekat.
- Baza podataka mora da bude relaciona i treba koristiti MySQL ili MariaDB sistem za upravljanje bazama podataka (RDBMS) i u spremištu back-end dela aplikacije mora da bude dostupan SQL dump strukture baze podataka, eventualno sa inicijalnim podacima, potrebnim za demonstraciju rada projekta.
- Back-end i front-end delovi projekta moraju da budi pisani na TypeScript jeziku, prevedeni TypeScript prevodiocem na adekvatan JavaScript. Back-end deo aplikacije, preveden na JavaScript iz izvornog TypeScript koda se pokreće kao Node.js aplikacija, a front-end deo se statički servira sa rute statičkih resursa back-end dela aplikacije i izvršava se na strani klijenta. Za postupak provere identiteta korisnika koji upućuje zahteve back-end delu aplikacije može da se koristi mehanizam sesija ili JWT (JSON Web Tokena), po slobodnom izboru.
- Sav generisani HTML kôd koji proizvodi front-end deo aplikacije mora da bude 100% validan, tj. da prođe proveru W3C Validatorom (dopuštena su upozorenja - Warning, ali ne i greške - Error). Grafički korisnički interfejs se generiše na strani klijenta (client side rendering), korišćenjem React biblioteke, dok podatke doprema asinhrono iz back-end dela aplikacije (iz API-ja). Nije neophodno baviti se izradom posebnog dizajna grafičkog interfejsa aplikacije, već je moguće koristiti CSS biblioteke kao što je Bootstrap CSS biblioteka. Front-end deo aplikacije treba da bude realizovan tako da se prilagođava različitim veličinama ekrana (responsive design).
- Potrebno je obezbediti proveru podataka koji se od korisnika iz front-end dela upućuju back-end delu aplikacije. Moguća su tri sloja zaštite i to: (1) JavaScript validacija vrednosti na front-end-u; (2) Provera korišćenjem adekvatnih testova ili regularnih izraza na strani servera u back-end-u (moguće je i korišćenjem izričitih šema - Schema za validaciju ili drugim pristupima) i (3) provera na nivou baze podataka korišćenjem okidača nad samim tabelama baze podataka.
- Neophodno je napisati prateću projektnu dokumentaciju o izradi aplikacije koja sadrži (1) model baze podataka sa detaljnim opisom svih tabela, njihovih polja i relacija; (2) dijagram baze podataka; (3) dijagram organizacije delova sistema, gde se vidi veza između baze, back-end, front-end i korisnika sa opisom smera kretanja informacija; (4) popis svih aktivnosti koje su podržane kroz aplikaciju za sve uloge korisnika aplikacije prikazane u obliku Use-Case dijagrama; kao i (5) sve ostale elemente dokumentacije predviđene uputstvom za izradu dokumentacije po ISO standardu.
- Izrada oba dela aplikacije (projekata) i promene kodova datoteka tih projekata moraju da bude praćene korišćenjem alata za verziranje koda Git, a kompletan kôd aplikacije bude dostupan na javnom Git spremištu, npr. na besplatnim GitHub ili Bitbucket servisima, jedno spremište za back-end projekat i jedno za front-end projekat. Ne može ceo projekat da bude otpremljen u samo nekoliko masovnih Git commit-a, već mora da bude pokazano da je projekat realizovan u kontinuitetu, da su korišćene grane (branching), da je bilo paralelnog rada u više grana koje su spojene (merging) sa ili bez konflikata (conflict resolution).

Autor teme za projektni zadatak: Milan Tair [linkedin.com/in/milantex](https://linkedin.com/in/milantex)

M. Tair, "Veb aplikacija za pregledanje tekstova pesama - Teme projekata za razvoj veb aplikacija", 2016-2021. [Online]. Available at: https://github.com/Milantex/Teme-za-projekte-za-razvoj-veb-aplikacija/blob/main/teme/veb-aplikacija-za-pregledanje-tekstova-pesama.md [Accessed: ISO_DATE]