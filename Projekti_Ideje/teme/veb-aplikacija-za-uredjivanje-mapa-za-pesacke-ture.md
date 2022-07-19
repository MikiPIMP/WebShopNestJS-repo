# Veb aplikacija za uređivanje mapa za pešačke ture

Aplikacija treba da omogući putnicima na višednevnim pešačkim i kamp turama da mogu da imaju uvid u mape regije kroz koju prolaze. Mape treba da imaju ucrtane prohodne i preporučene trase kroz prirodu koje mogu da preporučuju i potvrđuju drugi korisnici aplikacije. Korisnici mogu da upisuju trase, da ih kategorišu po težini i kvalitetu staza, da ucrtavaju GPS pozicije upotrebljivih izvora vode i njihovog tipa (izvor, česma, bunar, potok itd) kao i stanje i ispravnost postojećih (npr. pokvarena česma, zatrovan bunar, prljava voda na izvoru itd). Drugi korisnici mogu da postavljaju svoje komentare za svaku od ovih ucrtanih tačaka. Mogu da ucrtaju GPS koordinate mesta pogodnih i bezbednih za kampovanje. Za određene regije kroz koje se putuje, označene tačkama poligona u 2D koordinatnom sistemu, korisnici mogu da pišu svoje komentare, korisne informacije o životinjama i biljkama itd. Za svaki region mogu da upišu podatke o jestivim gljivama i biljkama. Za svaki region, korisnici mogu da upišu komentare o lokalnom stanovništvu, običajima, eventualnim pravilima ponašanja, kao i korisne fraze na lokalnim jezicima i dijalektima. Pored mogućnosti evidentiranja svih navedenih podataka i informacija, aplikacija treba da omogući štampanje paketa za put. Paket za put se formira tako što se navedu koordinate tačaka na planiranoj trasi putovanja tokom višednevne pešačke ture, a zatim aplikacija ištampa mape sa topografskim prikazom regiona kroz koje se putuje, sa ucrtanim tačkama od interesovanja (izvori vode - dobri/loši, mestima za kampovanje itd). Svaka tačka je obeležena rednim brojem. Mape moraju da budu uokvirene prikazom graničnih koordinata geografske širine i dužine) i da budu okrenute tako da je sever na gore. Pored mapa sa ucrtanim tačkama i trasom kretanja, u paketu se nalazi i legenda svih tačaka koje su na mapi prikazane. Legenda sadrži tačke, podeljene po kategoriji (izvori vode, mesta za kampovanje, lokacije opasne po život itd), osnovne detalje o njima (tip, naziv, koordinate na mapi). Mora da postoji i alternativna legenda koja sadrži sve iste tačke, samo su poređane po koordinatama na kojima se nalaze. na osnovu ovih legendi, korisnik može da pronađe tačku koja ga interesuje, da pogleda koordinate i nađe je na napi ili na osnovu alternativne, ako vidi tačku na mapi, da može u legendi da pronađe detalje o njoj. Konačno, paket treba da sadrži i dokument sa opštim informacijama o regionima kroz koje se prolazi na odabranoj trasi putovanja i korisnim frazama na jezicima i dijalektima tih regija. Mapa treba da postoji i u interaktivnoj varijanti, kao nezavisna HTML stranica sa već učitanim podacima o tačkama sa svim njihovim komentarima. Ovakva HTML datoteka može da bude kopirana na mobilni telefon putnika i na taj način da ima uvid u sve podatke koji su inače dostupni i u štampanom obliku. Mapa mora da bude responzivnog dizajna, tako da bude prilagodljiva za prikaz na uređajima sa manjim i sa većim rezolucijama ekrana, npr. mobilni telefon ili tablični računar. Korisnici se na veb sajt za popunjavanje podataka za generisanje paketa za pešačke ture registruju i prijavljuju sa svojim pristupnim parametrima.

## Tehnička ograničenja

- Aplikacija mora da bude realizovana na Node.js platformi korišćenjem Express biblioteke. Aplikacija mora da bude podeljena u dve nezavisne celine: back-end veb servis (API) i front-end (GUI aplikacija). Sav kôd aplikacije treba da bude organizovan u dva Git spremišta u okviru istog korisničkog naloga za ovaj projekat.
- Baza podataka mora da bude relaciona i treba koristiti MySQL ili MariaDB sistem za upravljanje bazama podataka (RDBMS) i u spremištu back-end dela aplikacije mora da bude dostupan SQL dump strukture baze podataka, eventualno sa inicijalnim podacima, potrebnim za demonstraciju rada projekta.
- Back-end i front-end delovi projekta moraju da budi pisani na TypeScript jeziku, prevedeni TypeScript prevodiocem na adekvatan JavaScript. Back-end deo aplikacije, preveden na JavaScript iz izvornog TypeScript koda se pokreće kao Node.js aplikacija, a front-end deo se statički servira sa rute statičkih resursa back-end dela aplikacije i izvršava se na strani klijenta. Za postupak provere identiteta korisnika koji upućuje zahteve back-end delu aplikacije može da se koristi mehanizam sesija ili JWT (JSON Web Tokena), po slobodnom izboru.
- Sav generisani HTML kôd koji proizvodi front-end deo aplikacije mora da bude 100% validan, tj. da prođe proveru W3C Validatorom (dopuštena su upozorenja - Warning, ali ne i greške - Error). Grafički korisnički interfejs se generiše na strani klijenta (client side rendering), korišćenjem React biblioteke, dok podatke doprema asinhrono iz back-end dela aplikacije (iz API-ja). Nije neophodno baviti se izradom posebnog dizajna grafičkog interfejsa aplikacije, već je moguće koristiti CSS biblioteke kao što je Bootstrap CSS biblioteka. Front-end deo aplikacije treba da bude realizovan tako da se prilagođava različitim veličinama ekrana (responsive design).
- Potrebno je obezbediti proveru podataka koji se od korisnika iz front-end dela upućuju back-end delu aplikacije. Moguća su tri sloja zaštite i to: (1) JavaScript validacija vrednosti na front-end-u; (2) Provera korišćenjem adekvatnih testova ili regularnih izraza na strani servera u back-end-u (moguće je i korišćenjem izričitih šema - Schema za validaciju ili drugim pristupima) i (3) provera na nivou baze podataka korišćenjem okidača nad samim tabelama baze podataka.
- Neophodno je napisati prateću projektnu dokumentaciju o izradi aplikacije koja sadrži (1) model baze podataka sa detaljnim opisom svih tabela, njihovih polja i relacija; (2) dijagram baze podataka; (3) dijagram organizacije delova sistema, gde se vidi veza između baze, back-end, front-end i korisnika sa opisom smera kretanja informacija; (4) popis svih aktivnosti koje su podržane kroz aplikaciju za sve uloge korisnika aplikacije prikazane u obliku Use-Case dijagrama; kao i (5) sve ostale elemente dokumentacije predviđene uputstvom za izradu dokumentacije po ISO standardu.
- Izrada oba dela aplikacije (projekata) i promene kodova datoteka tih projekata moraju da bude praćene korišćenjem alata za verziranje koda Git, a kompletan kôd aplikacije bude dostupan na javnom Git spremištu, npr. na besplatnim GitHub ili Bitbucket servisima, jedno spremište za back-end projekat i jedno za front-end projekat. Ne može ceo projekat da bude otpremljen u samo nekoliko masovnih Git commit-a, već mora da bude pokazano da je projekat realizovan u kontinuitetu, da su korišćene grane (branching), da je bilo paralelnog rada u više grana koje su spojene (merging) sa ili bez konflikata (conflict resolution).

Autor teme za projektni zadatak: Milan Tair [linkedin.com/in/milantex](https://linkedin.com/in/milantex)

M. Tair, "Veb aplikacija za uređivanje mapa za pešačke ture - Teme projekata za razvoj veb aplikacija", 2016-2021. [Online]. Available at: https://github.com/Milantex/Teme-za-projekte-za-razvoj-veb-aplikacija/blob/main/teme/veb-aplikacija-za-uredjivanje-mapa-za-pesacke-ture.md [Accessed: ISO_DATE]