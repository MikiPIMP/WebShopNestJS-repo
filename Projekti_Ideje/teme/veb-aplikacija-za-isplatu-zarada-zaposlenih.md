# Veb aplikacija za isplatu zarada zaposlenih

Aplikacija treba da omogući računovodstvenom osoblju firme da vodi preciznu evidenciju o isplatama zarada zaposlenih i o stavkama koje čine poreze i doprinose koji se odbijaju od bruto plata. Korisnik treba da ima mogućnost da doda novog zaposlenog, da menja postojeće i da arhivira one koji više nisu angažovani u firmi. Za svakog zaposlenog treba omogućiti da se evidentira koliko procenata radnog vremena je angažovan u firmi i prema tome treba obračunavati plate. Proračun zarade se vrši na osnovu evidentiranih radnih sati u toku meseca. Na nivou aplikacije se za svaku kategoriju zaposlenih evidentira bruto iznos cene radnog sata. Svaki zaposleni pripada samo jednoj od kategorija koje korisnik može u aplikaciji da kreira ili izmeni. Treba koristiti pojednostavljenu formulu za proračun iznosa za zdravstveno i socijalno osiguranje, kao i za isplatu poreza na dohodak i stopu doprinosa za PIO, bez uzimanja u obzir platne razrede. Za sve nivoe plata računati isti procenat za porez na dohodak. Za svakog zaposlenog se kreira mesečni obračun plata sa podacima za sve izračunate stavke: iznos poreza, iznos doprinosa za PIO, iznos doprinosa za zdravstveno osiguranje, iznos doprinosa za nezaposlenost (socijalno) osiguranje, kao i podatak o isplaćenoj neto zaradi. Treba za svakog zaposlenog kreirati listić sa ovim podacima koji se izdaje zaposlenom nakon isplate zarade. Svi drugi iznosi doprinosa se objedinjuju u mesečni list i sabiraju. Korisnik treba da ima uvid u ukupan iznos sredstava koji za određeni mesec treba uplatiti na osnovu poreza, na osnovu zdravstvenog, na osnovu PIO i na osnovu socijalnog dohotka, kao i ukupan iznos svih bruto davanja za sve zaposlene koji su aktivni u određenom mesecu. Bruto iznos od kojeg se vrši odbijanje dohodaka se formira za svakog zaposlenog na osnovu broja radnih sati, iznosa satnice za kategoriju zaposlenog i sa uračunatim procentom radnog odnosa za datog zaposlenog. Aplikacija mora da ima kontrolu pristupa, tj. da omogući samo korisnicima koji unesu ispravne parametre za pristup da se prijave. Grafički interfejs veb sajta treba da bude realizovan sa responsive dizajnom.

## Tehnička ograničenja

- Aplikacija mora da bude realizovana na Node.js platformi korišćenjem Express biblioteke. Aplikacija mora da bude podeljena u dve nezavisne celine: back-end veb servis (API) i front-end (GUI aplikacija). Sav kôd aplikacije treba da bude organizovan u dva Git spremišta u okviru istog korisničkog naloga za ovaj projekat.
- Baza podataka mora da bude relaciona i treba koristiti MySQL ili MariaDB sistem za upravljanje bazama podataka (RDBMS) i u spremištu back-end dela aplikacije mora da bude dostupan SQL dump strukture baze podataka, eventualno sa inicijalnim podacima, potrebnim za demonstraciju rada projekta.
- Back-end i front-end delovi projekta moraju da budi pisani na TypeScript jeziku, prevedeni TypeScript prevodiocem na adekvatan JavaScript. Back-end deo aplikacije, preveden na JavaScript iz izvornog TypeScript koda se pokreće kao Node.js aplikacija, a front-end deo se statički servira sa rute statičkih resursa back-end dela aplikacije i izvršava se na strani klijenta. Za postupak provere identiteta korisnika koji upućuje zahteve back-end delu aplikacije može da se koristi mehanizam sesija ili JWT (JSON Web Tokena), po slobodnom izboru.
- Sav generisani HTML kôd koji proizvodi front-end deo aplikacije mora da bude 100% validan, tj. da prođe proveru W3C Validatorom (dopuštena su upozorenja - Warning, ali ne i greške - Error). Grafički korisnički interfejs se generiše na strani klijenta (client side rendering), korišćenjem React biblioteke, dok podatke doprema asinhrono iz back-end dela aplikacije (iz API-ja). Nije neophodno baviti se izradom posebnog dizajna grafičkog interfejsa aplikacije, već je moguće koristiti CSS biblioteke kao što je Bootstrap CSS biblioteka. Front-end deo aplikacije treba da bude realizovan tako da se prilagođava različitim veličinama ekrana (responsive design).
- Potrebno je obezbediti proveru podataka koji se od korisnika iz front-end dela upućuju back-end delu aplikacije. Moguća su tri sloja zaštite i to: (1) JavaScript validacija vrednosti na front-end-u; (2) Provera korišćenjem adekvatnih testova ili regularnih izraza na strani servera u back-end-u (moguće je i korišćenjem izričitih šema - Schema za validaciju ili drugim pristupima) i (3) provera na nivou baze podataka korišćenjem okidača nad samim tabelama baze podataka.
- Neophodno je napisati prateću projektnu dokumentaciju o izradi aplikacije koja sadrži (1) model baze podataka sa detaljnim opisom svih tabela, njihovih polja i relacija; (2) dijagram baze podataka; (3) dijagram organizacije delova sistema, gde se vidi veza između baze, back-end, front-end i korisnika sa opisom smera kretanja informacija; (4) popis svih aktivnosti koje su podržane kroz aplikaciju za sve uloge korisnika aplikacije prikazane u obliku Use-Case dijagrama; kao i (5) sve ostale elemente dokumentacije predviđene uputstvom za izradu dokumentacije po ISO standardu.
- Izrada oba dela aplikacije (projekata) i promene kodova datoteka tih projekata moraju da bude praćene korišćenjem alata za verziranje koda Git, a kompletan kôd aplikacije bude dostupan na javnom Git spremištu, npr. na besplatnim GitHub ili Bitbucket servisima, jedno spremište za back-end projekat i jedno za front-end projekat. Ne može ceo projekat da bude otpremljen u samo nekoliko masovnih Git commit-a, već mora da bude pokazano da je projekat realizovan u kontinuitetu, da su korišćene grane (branching), da je bilo paralelnog rada u više grana koje su spojene (merging) sa ili bez konflikata (conflict resolution).

Autor teme za projektni zadatak: Milan Tair [linkedin.com/in/milantex](https://linkedin.com/in/milantex)

M. Tair, "Veb aplikacija za isplatu zarada zaposlenih - Teme projekata za razvoj veb aplikacija", 2016-2021. [Online]. Available at: https://github.com/Milantex/Teme-za-projekte-za-razvoj-veb-aplikacija/blob/main/teme/veb-aplikacija-za-isplatu-zarada-zaposlenih.md [Accessed: ISO_DATE]