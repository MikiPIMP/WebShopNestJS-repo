# Veb aplikacija za katalog radnje za prodaju kafe

Aplikacija treba da omogući administratorima sajta da se prijave sa pristupnim parametrima i da uređuju sadržaj kataloga. Katalog sadrži mešavine kafe koje radnja ima u ponudi, raspoređenih po kategorijama. Svaka kategorija ima jedinstveno ime, a mešavine kafa mogu pripadati raznim kategorijama. Svaka mešavina kafe ima jedinstvenu šifru, jedinstveni naziv, detaljan opis, fotografiju pakovanja i spisak sastojaka sa podatkom o udelu sastojka na kilogram mešavine. Sastojci su vrste kafe ili drugi dodaci koji mogu da budu sastav mešavine, koji imaju naziv, opis, poreklo, fotografiju i cenu sastojka po kilogramu. Ukupna cena mešavine kafe je suma udela cena svih sastojaka u nekoj mešavini, koja se računa prilikom formiranja ili promene sastojaka mešavine.
Npr. jedna mešavina kafe može, na jedan kilogram, da sadrži 60% kafe Arabica, 30% kafe Iiberica i 5% mleka u prahu i 3% praha sa aromom lešnika i 2% sredstva za zaslađivanje. Administrator može da uređuje sastojke mešavina i njihove odnose. Aplikacija treba da vodi računa da nije moguće dodati mešavinu ako je ukupna suma udela svih sastojaka manja ili veća od 100%. Cena se računa na osnovu aktuelne cene sastojka. Administrator može mešavinu da sakrije iz kataloga ili da joj promeni podatke, sastojke i kategorije kojima pripada. Posetioci sajta mogu da pregledaju mešavine koje su u ponudi po kategorijama ili da vrše pretragu po filterima na osnovu sastojaka, npr. prikaz svih mešavina kafa koje imaju aromu lešnika ili koje nemaju dodati šećer itd. U prikazu konkretne mešavine na stranici sajta, treba prikazati ukupnu cenu mešavine, fotografiju pakovanja, kao i slike svih sastojaka sa njihovim nazivima, odnosima količine sastojaka u mešavini i treba da omogući korisniku da ako klikne na mešavinu, bez osvežavanja stranice u nekom elementu grafičkog interfejsa dobije prikazane detalje o tom sastojku mešavine. Veb sajt radnje (katalog) mora da ima kontakt stranicu sa detaljima za kontakt i poručivanje putem telefona, sa prikazom mape sa lokacijom radnje i sa detaljima o preduzeću (podaci iz APR registra). Grafički interfejs sajta treba da bude realizovan sa responsive dizajnom.

## Tehnička ograničenja

- Aplikacija mora da bude realizovana na Node.js platformi korišćenjem Express biblioteke. Aplikacija mora da bude podeljena u dve nezavisne celine: back-end veb servis (API) i front-end (GUI aplikacija). Sav kôd aplikacije treba da bude organizovan u dva Git spremišta u okviru istog korisničkog naloga za ovaj projekat.
- Baza podataka mora da bude relaciona i treba koristiti MySQL ili MariaDB sistem za upravljanje bazama podataka (RDBMS) i u spremištu back-end dela aplikacije mora da bude dostupan SQL dump strukture baze podataka, eventualno sa inicijalnim podacima, potrebnim za demonstraciju rada projekta.
- Back-end i front-end delovi projekta moraju da budi pisani na TypeScript jeziku, prevedeni TypeScript prevodiocem na adekvatan JavaScript. Back-end deo aplikacije, preveden na JavaScript iz izvornog TypeScript koda se pokreće kao Node.js aplikacija, a front-end deo se statički servira sa rute statičkih resursa back-end dela aplikacije i izvršava se na strani klijenta. Za postupak provere identiteta korisnika koji upućuje zahteve back-end delu aplikacije može da se koristi mehanizam sesija ili JWT (JSON Web Tokena), po slobodnom izboru.
- Sav generisani HTML kôd koji proizvodi front-end deo aplikacije mora da bude 100% validan, tj. da prođe proveru W3C Validatorom (dopuštena su upozorenja - Warning, ali ne i greške - Error). Grafički korisnički interfejs se generiše na strani klijenta (client side rendering), korišćenjem React biblioteke, dok podatke doprema asinhrono iz back-end dela aplikacije (iz API-ja). Nije neophodno baviti se izradom posebnog dizajna grafičkog interfejsa aplikacije, već je moguće koristiti CSS biblioteke kao što je Bootstrap CSS biblioteka. Front-end deo aplikacije treba da bude realizovan tako da se prilagođava različitim veličinama ekrana (responsive design).
- Potrebno je obezbediti proveru podataka koji se od korisnika iz front-end dela upućuju back-end delu aplikacije. Moguća su tri sloja zaštite i to: (1) JavaScript validacija vrednosti na front-end-u; (2) Provera korišćenjem adekvatnih testova ili regularnih izraza na strani servera u back-end-u (moguće je i korišćenjem izričitih šema - Schema za validaciju ili drugim pristupima) i (3) provera na nivou baze podataka korišćenjem okidača nad samim tabelama baze podataka.
- Neophodno je napisati prateću projektnu dokumentaciju o izradi aplikacije koja sadrži (1) model baze podataka sa detaljnim opisom svih tabela, njihovih polja i relacija; (2) dijagram baze podataka; (3) dijagram organizacije delova sistema, gde se vidi veza između baze, back-end, front-end i korisnika sa opisom smera kretanja informacija; (4) popis svih aktivnosti koje su podržane kroz aplikaciju za sve uloge korisnika aplikacije prikazane u obliku Use-Case dijagrama; kao i (5) sve ostale elemente dokumentacije predviđene uputstvom za izradu dokumentacije po ISO standardu.
- Izrada oba dela aplikacije (projekata) i promene kodova datoteka tih projekata moraju da bude praćene korišćenjem alata za verziranje koda Git, a kompletan kôd aplikacije bude dostupan na javnom Git spremištu, npr. na besplatnim GitHub ili Bitbucket servisima, jedno spremište za back-end projekat i jedno za front-end projekat. Ne može ceo projekat da bude otpremljen u samo nekoliko masovnih Git commit-a, već mora da bude pokazano da je projekat realizovan u kontinuitetu, da su korišćene grane (branching), da je bilo paralelnog rada u više grana koje su spojene (merging) sa ili bez konflikata (conflict resolution).

Autor teme za projektni zadatak: Milan Tair [linkedin.com/in/milantex](https://linkedin.com/in/milantex)

M. Tair, "Veb aplikacija za katalog radnje za prodaju kafe - Teme projekata za razvoj veb aplikacija", 2016-2021. [Online]. Available at: https://github.com/Milantex/Teme-za-projekte-za-razvoj-veb-aplikacija/blob/main/teme/veb-aplikacija-za-katalog-radnje-za-prodaju-kafe.md [Accessed: ISO_DATE]