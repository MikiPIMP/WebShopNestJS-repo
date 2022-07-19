# Veb aplikacija za bazu kandidata za posao

Aplikacija treba da omogući firmi da raspisuje konkurse za poslove i da prima prijave kandidata sa njihovim biografijama, propratnim pismima i kontakt podacima. Samo prijavljeni korisnici, koji se na portal prijave sa ispravnih parametrima naloga administratora mogu da pristupe administrativnom panelu portala. U ovom panelu mogu da dodaju novi oglas i da pregledaju spisak prethodnih oglasa i u njima spisak prijavljenih kandidata. Svaki oglas mora da ima naslov, kratak opis, detaljan spisak potrebnih znanja i veština, spisak obaveza i angažovanja koja su predviđena za radno mesto, jezika čije znanje se smatra obaveznim, potreban nivo stručne spreme, planirani budžet plata za radno mesto, uzrast kandidata koji je poželjan i spisak ključnih reči koje treba da obuhvata opis znanja kandidata, npr. PHP, Node.js JavaScript, HTML, C#, marketing itd. Oglasi se definišu za tačno određenu lokaciju, npr. Beograd, Bangalor, London itd. Svaki oglas ima datum početka i kraja prikazivanja i prijema biografija kandidata. Na sajtu se prikazuje spisak otvorenih pozicija sa njihovim nazivima, po lokacijama. Posetiocu sajta se ne prikazuju podaci: planirani budžet za platu, uzrast kandidata koji se očekuje, spisak ključnih reči i druge karakteristike kandidata koje administrator unosi, a koje su potrebne sistemu za inicijalno filtriranje podnetih biografija. Korisnik treba da unese sve podatke o sebi kao da popunjava CV, tj. u formularu da upiše lične podatke, datum rođenja, adresu prebivališta, kontakt podatke, spisak obrazovanja (nivo, naziv institucije, godina početka i godina završetka - osim ako studije nisu u toku), spisak prethodnih poslova sa podacima: naziv radnog mesta, nivo (vlasnik, direktor, viši upravnih, niži upravnik, radnik u proizvodnji, radnik u podršci/službi, pomoćno osoblje, drugo), preduzeće, godina početka rada i godina kraja (ako još uvek nije tamo zaposlen), jezike koje zna (da izabere iz liste i da izabere nivo za čitanje, pisanje i govor, u skladu sa evropskim smernicama za isticanje nivoa poznavanja stranih jezika, kao i da odabere koji od jezika je maternji), da unese u obliku teksta svoje veštine od značaja za poziciju, da unese u obliku teksta svoje lične osobine od značaja za međuljudske odnose u firmi/timu/prema klijentima itd. Korisnik može da unese u obliku tekstualnog polja i sadržaj propratnog ili motivacionog pisma u kojem bi istakao posebne razloge zbog kojih smatra da je dobar izbor za poziciju za koju se prijavljuje. Korisnik može da unese i podatak o tome koju okvirnu platu očekuje za konkretnu poziciju za koju se prijavljuje, a za koju bi bio zadovoljan da radi u slučaju da bude prihvaćen za radno mesto. Kada korisnik pošalje svoje podatke, oni se upisuju u bazu podatka za konkretnu poziciju. Administratoru se u spisku prijavljenih kandidata odmah obeležavaju oni kandidati koji ne dogovaraju prema definisanim kriterijumima (veći traženi iznos plate od onog koji je predviđen budžetom, niži stepen stručne spreme od predviđenog, ne sadrži ni jednu od navedenih ključnih reči u bilo kojem od tekstualnih polja u kojima je unosio svoja znanja, veštine itd.) Administrator može pojedinačne kandidate i ručno da obeleži kao neodgovarajuće za poziciju. U tom slučaju se prikazuju na sličan način kao oni koje je aplikacija sama obeležila kao neodgovarajuće. Administrator može i te ručno da potvrdi za neodgovarajuće ili da ih obeleži kao potencijalno korektne za razmatranje. Grafički interfejs veb aplikacije treba da bude realizovan sa responsive dizajnom.

## Tehnička ograničenja

- Aplikacija mora da bude realizovana na Node.js platformi korišćenjem Express biblioteke. Aplikacija mora da bude podeljena u dve nezavisne celine: back-end veb servis (API) i front-end (GUI aplikacija). Sav kôd aplikacije treba da bude organizovan u dva Git spremišta u okviru istog korisničkog naloga za ovaj projekat.
- Baza podataka mora da bude relaciona i treba koristiti MySQL ili MariaDB sistem za upravljanje bazama podataka (RDBMS) i u spremištu back-end dela aplikacije mora da bude dostupan SQL dump strukture baze podataka, eventualno sa inicijalnim podacima, potrebnim za demonstraciju rada projekta.
- Back-end i front-end delovi projekta moraju da budi pisani na TypeScript jeziku, prevedeni TypeScript prevodiocem na adekvatan JavaScript. Back-end deo aplikacije, preveden na JavaScript iz izvornog TypeScript koda se pokreće kao Node.js aplikacija, a front-end deo se statički servira sa rute statičkih resursa back-end dela aplikacije i izvršava se na strani klijenta. Za postupak provere identiteta korisnika koji upućuje zahteve back-end delu aplikacije može da se koristi mehanizam sesija ili JWT (JSON Web Tokena), po slobodnom izboru.
- Sav generisani HTML kôd koji proizvodi front-end deo aplikacije mora da bude 100% validan, tj. da prođe proveru W3C Validatorom (dopuštena su upozorenja - Warning, ali ne i greške - Error). Grafički korisnički interfejs se generiše na strani klijenta (client side rendering), korišćenjem React biblioteke, dok podatke doprema asinhrono iz back-end dela aplikacije (iz API-ja). Nije neophodno baviti se izradom posebnog dizajna grafičkog interfejsa aplikacije, već je moguće koristiti CSS biblioteke kao što je Bootstrap CSS biblioteka. Front-end deo aplikacije treba da bude realizovan tako da se prilagođava različitim veličinama ekrana (responsive design).
- Potrebno je obezbediti proveru podataka koji se od korisnika iz front-end dela upućuju back-end delu aplikacije. Moguća su tri sloja zaštite i to: (1) JavaScript validacija vrednosti na front-end-u; (2) Provera korišćenjem adekvatnih testova ili regularnih izraza na strani servera u back-end-u (moguće je i korišćenjem izričitih šema - Schema za validaciju ili drugim pristupima) i (3) provera na nivou baze podataka korišćenjem okidača nad samim tabelama baze podataka.
- Neophodno je napisati prateću projektnu dokumentaciju o izradi aplikacije koja sadrži (1) model baze podataka sa detaljnim opisom svih tabela, njihovih polja i relacija; (2) dijagram baze podataka; (3) dijagram organizacije delova sistema, gde se vidi veza između baze, back-end, front-end i korisnika sa opisom smera kretanja informacija; (4) popis svih aktivnosti koje su podržane kroz aplikaciju za sve uloge korisnika aplikacije prikazane u obliku Use-Case dijagrama; kao i (5) sve ostale elemente dokumentacije predviđene uputstvom za izradu dokumentacije po ISO standardu.
- Izrada oba dela aplikacije (projekata) i promene kodova datoteka tih projekata moraju da bude praćene korišćenjem alata za verziranje koda Git, a kompletan kôd aplikacije bude dostupan na javnom Git spremištu, npr. na besplatnim GitHub ili Bitbucket servisima, jedno spremište za back-end projekat i jedno za front-end projekat. Ne može ceo projekat da bude otpremljen u samo nekoliko masovnih Git commit-a, već mora da bude pokazano da je projekat realizovan u kontinuitetu, da su korišćene grane (branching), da je bilo paralelnog rada u više grana koje su spojene (merging) sa ili bez konflikata (conflict resolution).

Autor teme za projektni zadatak: Milan Tair [linkedin.com/in/milantex](https://linkedin.com/in/milantex)

M. Tair, "Veb aplikacija za bazu kandidata za posao - Teme projekata za razvoj veb aplikacija", 2016-2021. [Online]. Available at: https://github.com/Milantex/Teme-za-projekte-za-razvoj-veb-aplikacija/blob/main/teme/veb-aplikacija-za-bazu-kandidata-za-posao.md [Accessed: ISO_DATE]