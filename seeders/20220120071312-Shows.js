'use strict';
var fs = require('fs');

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Shows', [
      // {
      //  name: 'ADRIJANA LEKUVRER',
      //  description: `OBNOVA ili PREMIJERA?
      //  Obnova opere je niz zabluda i nesporazuma, kako u mišljenju tako i u praksi. Nema obnove! Kad se posle nekoliko godina ponovo postavlja jedna opera u njoj je sve novo. Novo je, pre svega, vreme u kojem se to radi. Novi su pevači – drugi, drugačiji ljudi, sa svojim osobinama, vrlinama, manama, problemima... 
      //  Od „starog“ – možda bi tu, na prvom mestu, mogla biti muzika. Ali ako se menja dirigent i ona je nova... drugačija. Velika zabluda mnogih pozorišta je da „sve već postoji“ i da samo novi akteri treba da savladaju svoje uloge, pa da se sve postavi na svoje mesto. Svaka obnova, zaista bi morala biti prava, nova premijera operskog dela. 
      //  Inače – zašto se nešto „obnavlja“ – zašto se ne bi radilo nešto novo? Umetnički razlozi bi morali biti jedini razlog novog života jedne već izvedene i igrane opere. Naše siromaštvo – činjenica da u fundusu imamo dekor i kostime – nikad ne smeju biti ključni razlozi „obnova“, iako u našoj praksi toga ima. Svaka je „obnova“ opere za onog ko je to ikad radio – teži posao od pripreme novog dela! Paradoksalno, ali tačno! Zato se svakoj „obnovi“ mora prići sa istim ambicijama, brojem proba, radom, kao da smo na samom početku! O tome posebno moraju razmisliti uprave, direkcije. To je naravno, moje mišljenje. Svestan sam toga da će u pozorišnoj praksi prevladati mišljenje sa kojim ovde polemišem: za onog ko na scenu izlazi da prvi put peva – sve je novo.`,
      //   image: Buffer.from(fs.readFileSync('slike/adrijana.jpg')),
      //   poster: Buffer.from(fs.readFileSync('slike/adrijana_poster.jpg')),
      //    createdAt:'2022-09-07',
      //    updatedAt: '2022-09-07'
      // }
      // {
      //   name: 'AIDA',
      //   description:`CELESTE AIDA!
      //   Sinteza italijanske operske romantike 
      //   Tri godine posle Don Karlosa, 16. jula 1870, Verdi je pisao jednom svome prijatelju: „Rekao sam vam da sam zauzet. Zamislite čime? Komponujem jednu operu za Kairo! Neću ići da je stavim na scenu: bojim se da ću ostati tamo dole, mumificiran“. Međutim, nije ostao mumificiran, već naprotiv – glorifikovan. 
      //   Verdi je prihvatio ponudu Izmael-paše, egipatskog kediva, da za posvećenje novog operskog pozorišta u Kairu i za otvaranje Sueckog kanala komponuje veliku svečanu operu. Arheolog Eduard Marijet Bej, poznat po svojim iskopavanjima kod Memfisa i Tebe, dao je siže u obliku jedne priče. Kamij di Lokl, direktor Komične opere u Parizu, saradnik na libretu Don Karlosa, dramatizovao je taj tekst da bi ga, najzad, Antonio Gislanconi, pevač, novinar i dramatičar, stavio u stihove jednog operskog libreta, uz intervencije kompozitora. 
      //   Verdi je posetio Kairo i Egipat, doživeo ambijent i inspirisao se na licu mesta. Za četiri meseca, za jedno upravo neverovatno kratko vreme, sredinom novembra 1870, partitura Aide je bila završena. Poručeni su u Parizu dekor i kostimi, konstruisane specijalne „Aida-fanfare“ za veliku trijumfalnu scenu, izabrani glavni interpretatori, pa je Aida, u novoj zgradi Kairske opere, svečano prvi put izvedena 24. decembra 1871. godine, sa ogromnim uspehom. 
      //   Taj trijumf je ponovljen na premijeri u milanskoj Skali, 8. februara 1872. godine (trideset dve zavese!), pa je pobednički hod Aide preko italijanskih i evropskih operskih scena bio daleko brži nego onaj, prethodnih Verdijevih opera (premijera u Berlinskoj dvorskoj operi 20. aprila 1874, dva dana kasnije u Velikoj operi u Parizu, a krajem aprila u Bečkoj operi). Od Gislanconija, Verdi je tražio scensku reč, onu koja jasno izražava situaciju, koja podstiče njegovu zvučnu fantaziju da aktivnom melodikom, muzički izrazi osnovna ljudska osećanja i strasti: radost, bol, ljubav, mržnju, prokletstvo, osvetu i smrt, da ostvari jednu muzičku dramaturgiju, čiji je najdublji smisao: predstava čoveka u muzici i kroz muziku. 
      //   U oproban i efektan, ali prazan i spoljašnji šablon francuske velike opere, iz koje Aida u znatnoj meri proizlazi, Verdi je uneo duboko čovečansku dramu, koja se razvija na uzbudljivim sukobima ljudskih strasti i tragičnoj podvojenosti između ljubavi i patriotizma. Realista po svom umetničkom metodu, on daje, u okviru jednog romantičarski koncipiranog sižea, stvari, događaje i ljude u sažetoj i ubedljivoj formi, u onome što predstavlja njihovu najelementarniju suštinu. Na taj način Verdijeva opera postaje karakterna opera. I pored toga što orkestar prestaje da bude samo uprošćena pratnja melodijske linije i što preuzima na sebe crtanje karaktera, podvlačenje dramskih momenata, dočaravanje štimunga pejsaža i atmosfere scene, ipak, po duboko ustaljenoj italijanskoj tradiciji, glavni izražajni faktor ostaje pevana melodijska linija, koja nosi dramsku radnju, zrači i obogaćuje ostale elemente muzičko-dramskog izraza. 
      //   Potresna drama, ostvarena nezaboravnom zvučnom lepotom, muzičko-scensko delo u kojem je data sinteza italijanske operske romantike, Verdijeva Aida postala je i ostala jedno od najprivlačnijih dela velikog operskog repertoara. Celeste Aida!`,
      //   image: Buffer.from(fs.readFileSync('slike/aida.jpg')),
      //   poster: Buffer.from(fs.readFileSync('slike/aida_poster.jpg')),
      //    createdAt:'2022-09-07',
      //    updatedAt: '2022-09-07'
      
      //  }
      //  {
      //   name: 'ALEKSANDAR',
      //   description: `REČ AUTORA
      //   Slojevita ličnost Aleksandra Velikog, vojskovođe, poluboga, ljubavnika, osvajača sveta, otvara različite mogućnosti u dramaturškom pristupu. Aleksandra čine ljudi koji ga okružuju. Oni ga prave Velikim, stalno ga uzdižu (navodno su svi klečali  kada bi on prolazio). I sam je bio uveren da je sin Boga. Moj pristup podrazumeva da ga ljudi čine boljim, jačim. Živeo je između ratova. U tom periodu je vladao mir, ali je njega konstantno pratio nemir. On ga je i vodio u novi rat. Ključna reč koja ga karakteriše je nemir. Nije on birao svoj život. Aleksandar je veliki melanholik, gladan je znanja i stalno traga za nepoznatim. U isto vreme je i emotivan i hladan, odlučan i radikalan. Od malih nogu je pokazivao te crte karaktera. Sve što je radio  bilo je sa mnogo strasti, i ratni pohodi i ljubavne veze. Možda pomalo pričam i autobiografsku priču...
      //   Odlučio sam da svetsko praizvođenje bude baš u Beogradu, pre svega zbog značaja imena Aleksandra Velikog za ovo područje. Ne govorim o potencijalu ansambla, o tehničkim mogućnostima  pozorišta. Mislim na slovensku dušu, nemir u srcu  koji vlada u ovdašnjem narodu. Beogradski ansambl je spontano reagovao na muziku iz predstave. Njihov senzibilitet mi govori da mogu da dožive i ožive moje ideje. Izuzetno je važno sa kim ćeš da deliš svoj san... Aleksandrove ideje su preteča globalizacije, velike Evrope bez granica. Nije osvajao teritorije, već srca ljudi. Ovdašnji ljudi to osećaju, vlastiti nemir  prepoznaju u njemu. Zato sam ja ovde...
      //   Iz: Brankica Knežević, Ronald Savković postavlja balet o Aleksandru Makedonskom,
      //   „Pozorišne novine“, Beograd, oktobar 2011.`,
      //   image: Buffer.from(fs.readFileSync('slike/aleksandar.jpg')),
      //   poster: Buffer.from(fs.readFileSync('slike/aleksandar_poster.jpg')),
      //    createdAt:'2022-09-07',
      //    updatedAt: '2022-09-07'
      //  }
      //  {
      //   name: 'ALISA',
      //   description: `REČ DRAMATURŠKINjE
      //   Rad na Alisi je bio najlakši zadatak na svetu. Nisam mogla da se odbranim od inspiracije. Doduše, brinula sam za Alisu. Ne znam kako bi se ona snašla danas. Ne bi znala za kojim anksioznim zecom pre da trči, i svaki bi je vodio na čajanke na kojima bi se pričale besmislice koje Luisu Kerolu nikada ne bi pale na pamet. Upoznala bi mnogo kraljica i svaka bi htela da joj odrubi glavu iz neobjašnjivih razloga. Zemlja čuda na TV-u, zemlja čuda i kod kuće i na ulicama, zemlja čuda u svakom biću. Ali znam šta bi spasilo Alisu na kraju. Videla bi da u svakom drugom kafiću visi natpis We are all mad here i shvatila da je sve u redu dok ova bića koja sreće danas, isto kao i bića koja je sretala ranije, znaju za moć humora. Predstava Alisa Dejana Kolarova nas podseća na tu moć. I potpuno je luda.
      //   REČ KOREOGRAFA
      //   Luis Kerol nas podseća da je sasvim u redu da ponekad provirimo izvan okvira. U svetu u kojem je sve besmisleno i u kojem se okviri, ionako, nameću stalno i sa svih strana, najbesmislenije je da ne probamo da se izbavimo. Biti oslobođen i osećati se dobro to su najskuplje stvari danas. A kako to da postignemo o tome govori ova predstava? Alisa je devojka koja ima maštu. To je ona zaboravljena moć koju mi guramo u stranu i nazivamo detinjastom, a ona je koristi kako bi upoznala i prihvatila sve delove sebe. Najvažnije je da budemo fer prema sebi. U protivnom, propadamo kroz zečiju rupu i ništa nema smisla. Budimo slobodni, ludi, veseli. Jer, to je fer.`,
      //   image: Buffer.from(fs.readFileSync('slike/alisa.jpg')),
      //   poster: Buffer.from(fs.readFileSync('slike/alisa_poster.jpg')),
      //    createdAt:'2022-09-07',
      //    updatedAt: '2022-09-07'
      //  }
      //  {
      //   name: 'ANTIGONA',
      //   description: `O ANTIGONI
      //   Mit koji je Sofokle dramatizovao u Antigoni pripada krugu tebanskih legendi i ne može se naći u Homerovim epovima; možda ga je Sofokle preuzeo iz nekog epa za koji mi ne znamo. Posle Edipovog odlaska iz Tebe, njegovi sinovi, blizanci Polinik i Eteokle, izabrani su za tebanske vladare. Trebalo je da Tebom upravljaju kao suvladari koji će se svake godine smenjivati. Međutim Eteokle, koji je prvi stupio na vlast, odbio je da bratu ustupi presto kad je godina istekla. Uz pomoć svog tasta Adrasta, Polinik je sakupio vojsku i krenuo na Tebu. Opseli su grad, ali ih sreća nije poslužila. Videvši da njegova vojska gubi bitku a da bi sprečio dalje krvoproliće, Polinik je predložio da o pitanju vlasti u Tebi odluči dvoboj između njega i Eteokla. U tom dvoboju su, međutim, obojica poginula. Njihov ujak Kreont preuzeo je komandu nad vojskom i uspeo da odbije napadače. Teba je odbranjena, Kreont je postao novi vladar. On nije dozvolio da se pokopaju mrtvi napadači – dakle, ni Polinik, Antigonin brat. Izdavanjem zapovesti da Polinik ostane nesahranjen, Kreont sledi atinski zakon koji ne dozvoljava pokop neprijatelja države, zatim onih koji skrnave hramove ili kradu žrtvene darove iz njih. Porodica preminulog ima, međutim, obavezu prema njemu: mrtvi moraju da budu sahranjeni, makar simbolično, kako to i Antigona čini, pokrivanjem tela tankim slojem zemlje. Mrtvi pripadaju podzemnom svetu i bogovima koji onde vladaju, a da bi se duša umrlog smirila u svetu mrtvih, sahrana je neophodna. Duša nesahranjenog ne može da dođe do Hada, carstva mrtvih, nego luta unaokolo kao avet. Otud je moguće da se gnev takve duše usmeri prema onima koji nisu izvršili svoju obavezu, pa zabrana sahranjivanja ima gore posledice za onoga ko sahranu sprečava nego za onoga kome je uskraćena. Tu obavezu mora da izvrši porodica preminulog.
      //   Tu počinje Antigona...
      //   Sofokle, Antigona, „Zavod za udžbenike“, priredio Zoran Milutinović, Beograd, 2009.
        
      //   ... Antigona se suprotstavlja Kreontu, odlučivši da prenebregne njegovu zabranu o nesahranjivanju njenog brata Polinika, koji je udario na rodnu Tebu, a suprotstavljajući se svome bratu Eteoklu. Žena ustaje protiv muškarca. I protiv vladara. Usuđuje se da, u ime večnih, božanskih zakona, prekrši ljudske zakone sile i vlasti, zbog čega biva kažnjena. Ali, još surovije će biti kažnjen njen sudija. Na ovaj način se zatvara krug hibrisa, čovekovog prekoračenja određenih mu granica i njegovog zalaženja u božje atare, nakon čega usleđuje neminovna kazna: progonstvo ili smrt. Često smrt...
      //   Sofokle, Antigona, „Stubovi kulture“, priredio Gaga Rosić, Beograd 2011.
        
      //   ...Tragedija je sva kondenzirana, nabijena, uzvišena, traži adekvatnu gestu i ton...
      //   ...Antigona je uzvišena figura junakinje, koju već za života stavljaju među heroje... Antigona je jedna od najslavnijih grčkih junakinja. Hrabra, ustrajna, puna ljubavi, s ogromnim osećajem dužnosti – svjetao i uzvišen karakter. Velika vjera u bogove, plemenitost i požrtvovanost koje je pokazala prema svom nesretnom ocu Edipu, prateći ga slijepog godinama po svijetu – sve je to u očima naroda čini božanskim likom. A ipak je prati naslijeđeno prokletstvo, koje se mora ispuniti!
      //   ...Ona mora pokopati mrtvoga brata, jer joj to nalaže sestrinska, rodbinska, rodovska dužnost... Ona se smrti ne boji, jer od nje ionako nema lijeka, a sad joj smrt dolazi kao spas od svih muka i jada što ih trpi opterećena prokletstvom koje leži na njenom rodu. „Bolja je smrt nego jadan život“...
      //   „Ja znam kome ugodit treba najviše“ – Antigona je to zaista znala. Znala je, jer je rođena da zna. Voljela je mrtvog brata mimo svih zakona na kugli zemaljskoj...
      //   Antigonina ekstaza otvara Kosmos i širi dah slobode iznad svakidašnje nužnosti... „Za ljubav, ne za mržnju ja sam rođena.“ I to je poezija izvan dana i noći.
      //   Marija Crnobori:  Svijet glume, Sterijino pozorje, Novi Sad 1991.`,
      //   image: Buffer.from(fs.readFileSync('slike/antigona.jpg')),
      //   poster: Buffer.from(fs.readFileSync('slike/antigona_poster.jpg')),
      //    createdAt:'2022-09-07',
      //    updatedAt: '2022-09-07'
      //  }
      //  {
      //   name: "ATILA",
      //   description: `VERDIJEVA OPERA „ATILA”
      //   Atila, kralj Huna, vladao je od 434. do 453. Središte njegove države, koja se protezala od Danske do Panonije i od Rajne do Kaspijskog mora, bilo je u mađarskoj niziji, blizu grada Tokaja. Njegovu vrhovnu vlast priznavala su mnoga germanska i slovenska plemena, a povremeno i Vizantija. Godine 451. pokušao je da osvoji zapadnorimsku Galiju, ali je od vojskovođe Ecija poražen na Katalunskim poljima. Sledeće godine pustoši Italiju, razara Akvileju, čiji stanovnici u bekstvu osnivaju na jadranskim lagunama Veneciju, i kreće da osvoji Rim. U susret mu je došao papa Lav I i Atila, po legendi, „preobraćen“, odustaje od osvajanja i rušenja prestonice i vraća se u Mađarsku. Ovaj susret ovekovečio je Rafaelo na svojoj poznatoj slici. Nemački romantičarski dramski pisac Zaharijas Verner (1786–1823) napisao je 1803. dramu Atila, kralj Huna, koja nosi sve osobine neobuzdane i preterane romantike. Sadržaj drame obrađuje poznati istorijski pohod Huna na Rim sredinom V veka, povinovanje Atile božanskoj zapovesti izrečenoj kroz usta pape Lava I, zatim uplitanje samog Atile u intrige protivnika i njegovo ubistvo od strane žene sa kojom je tek slavio svadbeni pir. 
      //   Snažni ritmovi, čvršći, životniji, ubojitiji horovi od onih u Nabuku, zahvalne arije, efektni dueti i velike masovne scene sa mnogo pokreta, kao i brojne melodije koje se lako primaju, majstorstvo u zanatskom pogledu – to su odlike koje mogu privući najširu publiku, zainteresovanu za veliki istorijski spektakl i lepe glasove. Atila počinje uvertirom, koja nije splet popularnih melodija iz opere, već mračni uvod u delo, baziran na motivu koji će pevati druidi predskazujući nesreću. Prolog sadrži ratničke horove koje sledi Odabelina kavatina (Dok tvoji divlji ratnici), izazovna amazonska arija, naporna i teška, ali uspela i efektna. Kabaleta sa horom je nova mogućnost sopranu da se prikaže. Duet Atile sa Eciom je pravo natpevavanje basa sa baritonom, i pravi je izazov za pevače. Uvodna muzika druge slike prologa tonski slika strahovito nevreme na laguni. Forestova kavatina i kabaleta (Zemljo draga) ne zaostaju za sličnim numerama iz opera tog vremena. Odabelina romansa u prvom činu zanimljiva je pre svega zbog finesa u instrumentaciji. Glas prate solo engleski rog, flauta, violončelo i harfa, što dovoljno svedoči o naporima mladog Verdija da izađe iz operskog šablona i traga za ličnim izrazom. U duetu Odabele sa Forestom sve je po oprobanoj šemi, ali, pri pomirenju mladog para, ne peva se u uobičajenim tercama i sekstama, već u unisonu, što ukazuje na nepokolebljivost njihovih namera. Scena u Atilinom ratnom logoru predstavlja novinu u dotadašnjem Verdijevom načinu izražavanja. To više nije opšte mesto, koje manje ili više odgovara svakoj operi, već muzički tanano uvođenje u scensku situaciju i radnju. Atilin san i, potom, pobedonosni ubojiti napev osvajaju svakog slušaoca. Ratnički hor u slavu Votana prekida nežni zvuk dečjeg hora, dajući prilike Verdiju za najveći mogući muzički kontrast uopšte. 
      //   Znamenita rečenica starca Leonea (papa Lav I) „Smrtni pred tobom beže, plaše se biča tvog. Sad stani! Ne smeš dalje, jer ovde vlada Bog“, pevana stentorskim glasom, nagoveštava buduću scenu sa Velikim inkvizitorom iz Don Karlosa. Moćni zahvalni ansambl na kraju prvog čina dovoljno svedoči o majstorstvu mladog Verdija. Arija Ecija na početku drugog čina je pravi biser za baritone i rado se peva. Gromki marš u finalu ovog čina teško da ima premca u operama toga doba. Igra sveštenica i njihova talasasta pesma pružaju neophodni kontrast i odmor. Veliki ansambl sa krajnostima u dinamici traži sjajan hor. Finale je bučan, efektan, zahvalan i naporan za sve soliste. Romansa Foresta (Za tebe, ja sam živeo) u trećem činu, po mnogim komentatorima, predstavlja najlepši deo cele opere i svakako spada među najzahvalnije arije mladog Verdija. Tercet soprana, tenora i baritona je lirska oaza, a majstorstvo autora u mešanju svadbenog hora sa rečitativima solista je nesporno. Završni finale je suviše jezgrovit; Atilino ubistvo je muzički neizražajno, tako da su mnogi režiseri u saradnji sa dirigentima predstave u ovu scenu čak ubacivali odlomke iz nekih drugih opera mladog Verdija, kako bi i završetak bio ubedljiviji i duži. Čini nam se da to ipak nije neophodno. U nastavljanju namere da našoj publici prikažemo što više opera velikana Đuzepa Verdija, posle Ernanija i Makbeta, Atila se upravo nameće, jer raspolažemo ansamblom koji ga može primerno izvesti.
      //   Konstantin Vinaver (1987)`,
      //   image: Buffer.from(fs.readFileSync('slike/atila.jpg')),
      //   poster: Buffer.from(fs.readFileSync('slike/atila_poster.jpg')),
      //    createdAt:'2022-09-07',
      //    updatedAt: '2022-09-07'
      //  }
      //  {
      //   name: "BELA KAFA",
      //   description: `POPOVIĆEVA BELA KAFA
      //   Novi pozorišni komad Aleksandra Popovića, Bela kafa, navodi na pomisao da se osobeni pozorišni koncept ovoga uglednog autora menja u najnovijem periodu stvaralaštva. Ova pomisao, međutim, može da se prihvati samo uslovno. Izvesno je da se u Popovićevom prosedeu može uočiti čvršća kompozicija sižea, ali je takođe tačno da su sve druge karakteristike Popovićeve dramaturgije ostale nepromenjene. Reč je, dakako, o posebnom jeziku, intenzivnom ritmu, načelu otvorene igre koja demistifikuje scensku iluziju (...) jer se u Popovićevim dramama sve događa na granici sna i jave. I Bela kafa poseduje identičnu oznaku u podnaslovu: Kad se sanja bludnog stanja. U Beloj kafi, Popović je izukrštao odnose načinivši višestruke veze između članova jedne porodice; ovim postupkom omogućio je svojim junacima da zastupaju protivrečne interese i da se, stoga, nalaze u neprekidnim sukobima, što porodičnim, što ideološkim. (...)
      //   Popovićevi junaci vole da govore i da se žestoko spore oko svojih i tuđih ideja. Svih šest likova u Beloj kafi ima potrebu da objasni ne samo ono što oseća kao intimno pitanje ili dilemu, već i sve što se događa, što se nekada desilo, ili što će se tek dogoditi i da to proprati komentarom. Ovaj postupak saopštavanja i komentarisanja, preživljavanja u dijalogu i racionalizovanja ima prevashodni zadatak da potre svaku pomisao na scensku iluziju. Popović, dakle, jezičkom građom stvara situacije i odnose, koje potom prevodi u poetske slike tehnikom simultanog sna. (...)
      //   Popovićevi junaci su sazdani od protivrečnosti; oni se i vole i mrze, uvažavaju i preziru, beže jedni od drugih da bi se željno vraćali, oni su vernici i nevernici, pouzdani i nesigurni, rečju, oni su sastavljeni od vrlina i nedostataka običnih ljudi. Uistinu, Popovićevi junaci pate i kada su radosni, a smeju se kada ih život šiba. Ali, čini se da je njihova glavna odlika strastveni vitalizam koji omogućava da prežive sve društvene procese, promene, krize i raskole i da iz njih iziđu koristeći sopstvenu lukavost kao spasonosni ključ. Zbog toga bi se Bela kafa mogla nazvati dramom umešnosti preživljavanja ili pohvalom vitalizmu...
      //   Radomir Putnik, Velika predstava, „Politika“, 4. januar 1991.`,
      //   image: Buffer.from(fs.readFileSync('slike/belakafa.jpg')),
      //   poster: Buffer.from(fs.readFileSync('slike/belakafa_poster.jpg')),
      //    createdAt:'2022-09-07',
      //    updatedAt: '2022-09-07'
      //  }
      //  {
      //   name: "BIZARNO",
      //   description: `O DRAMI BIZARNO

      //   Drama Bizarno je na konkursu Sterijinog pozorja 2008. godine, izabrana među pet najboljih i štampana u časopisu „Scena“. Iste godine je prevedena na engleski jezik i objavljena u specijalnom broju „Scene“ na engleskom jeziku. Prevedena je i na ruski, bugarski i poljski jezik. Praizvedbu je imala u Bosankom narodnom pozorištu u Zenici u martu 2010. godine, u režiji Petra Kaukova. Na regionalnom festivalu Pozorišta/kazališta u Brčkom, u konkurenciji autora sa ex-YU prostora (Mirko Kovač, Ante Tomić i dr), po odluci žirija kojim je predsedavala dramaturškinja iz Zagreba, Mani Gotovac, osvojio je Nagradu za najbolji dramski tekst. Drama Bizarno je štampana u autorovoj istoimenoj knjizi drama u izdanju KIZ „Altere“ Beograd i Šabačkog pozorišta. 
        
      //   * * *
        
      //   ... Bizarno je crnohumorna fuga o smrti, koja se odvija na različitim nivoima jednog solitera u kojem žive narkomani, sponzoruše i mafijaši, a kroz koju provejava zanimljivo plasiran osećaj neizbežnosti tragičnog ishoda...
        
      //   Nikol Estvanik Tejlor), Fuga o smrti (o dramskom tekstu Bizarno) American Theatre Magazin, Njujork, februar 2010.`,
      //   image: Buffer.from(fs.readFileSync('slike/bizarno.jpg')),
      //   poster: Buffer.from(fs.readFileSync('slike/bizarno_poster.jpg')),
      //    createdAt:'2022-09-07',
      //    updatedAt: '2022-09-07'
      //  }
      //  {
      //   name: "BOLIVUD",
      //   description: `REČ AUTORKE
      //   Život stanovnika malog grada na granici, prekida iznenadna vest: dolazak velikog bolivudskog producenta koji hoće da kupi malu fabriku, u njoj napravi veliki bolivudski studio i otvori nova radna mesta, što u malom gradu nije pojava česta. Ta iznenadna vest, uzbudila je glumce iz pozorišta koji su odlučili da producentu naprave priredbu i time povećaju šanse da dobiju uloge u budućem bolivudskom spektaklu. Grad je opet ujedinila zajednička ideja i kolektivni entu­zi­ja­zam, ali život ko život - pun je neo­če­ki­va­nih obr­ta. Kroz baj­ko­vi­tu uto­pi­ju o dola­sku Boli­vu­da u naše kra­je­ve, poku­ša­li smo da ispri­ča­mo pri­ču o svi­ma nama i na šta smo sve sprem­ni kada nam se nudi bolja buduć­nost. Dola­zak Boli­vu­da tako posta­je povod za pri­ču o kra­hu indu­stri­je, kse­no­fo­bi­ji, divljoj pri­va­ti­za­ci­ji, lažnim sve­to­vi­ma, a sve to kroz pesmu i igru pod slo­ga­nom „leba ako nema­ju, daj­te im kola­če”. Tako Boli­vud, kao indu­stri­ja zaba­ve i sre­će, posta­je mesto eska­pi­zma i povod za udru­ži­va­nje, soli­dar­nost i slo­gu, vred­no­sti koje smo zabo­ra­vi­li u ovom post­ko­mu­ni­stič­kom, tran­zi­ci­o­nom, apsurd­nom vre­me­nu u kome živi­mo. Isto tako, pri­nu­đe­ni da zabo­ra­vi­mo svo­ju pro­šlost i da pri­hva­ti­mo sve što nam se nudi dovo­di nas do jed­ne infan­til­ne pozi­ci­je iz koje je jako teško iza­ći. O tom fenomenu lepo piše Boris Buden u knji­zi Zona pre­la­ska.
      //   O kra­ju post­ko­mu­ni­zma : U čud­no­va­tom sve­tu post­ko­mu­ni­zma, demo­kra­ti­ja je isto­vre­me­no i cilj kojem se teži i izgu­blje­ni obje­kat. Tako se 'deci komu­ni­zma' pogled u bolju buduć­nost otva­ra još samo iz neka­kve melan­ho­lič­ne per­spek­ti­ve.(…) U post­komu­ni­zmu pita­nje buduć­no­sti slo­vi kao pita­nje na koje je odgo­vor već dat. Ali ni pita­nje pro­šlo­sti više nema smi­sla. Od 'dece komu­ni­zma' ne oče­ku­je se da ima­ju sazre­lu svest o komu­ni­stič­koj pro­šlo­sti. Upra­vo sto­ga su pre­tvo­re­na u decu da se ne bi mogla seća­ti pro­šlo­sti. `,
      //   image: Buffer.from(fs.readFileSync('slike/bolivud.jpg')),
      //   poster: Buffer.from(fs.readFileSync('slike/bolivud_poster.jpg')),
      //    createdAt:'2022-09-07',
      //    updatedAt: '2022-09-07'
      //  }
      //  {
      //   name: "DAMA S KAMELIJAMA",
      //   description: `DAMA S KAMELIJAMA
      //   Verdi-Šurev
      //   Dirigent Angel Šurev je za koreografa Lidiju Pililenko obradio Sen-Sansovu operu Samson i Dalila, koristeći odlomke i iz nekih drugih kompozicija francuskog majstora, s tim što je za horske numere zadržan hor na sceni. Koreograf Lidija Pilipenko je smatrala da tema Diminog romana Dama s kamelijama zaslužuje i baletski izraz, uz muziku Verdijeve Travijate koja je svima dobro poznata i uvek rado slušana. Za ovu priliku obradu je preuzeo Angel Šurev, koji je striktno poštovao Verdijevu partituru, tako da, sem tri sasvim kratke modulacije, u celovečernjem baletu nema nikakvih primesa. Korišćen je odlomak iz Verdijevog Rekvijema tako da se uloga prerađivača ograničila na instrumentaciju. Redosled i raspored pojedinih muzičkih numera ostvareni su u najtešnjoj saradnji koreografa i obrađivača. Šurev je izuzetno vešto spojio delove u novu dramaturški uslovljenu celinu, zadržavajući u potpunosti sve muzičke elemente, sem instrumentacije koja je i pevačke deonice poverila instrumentima. Neki odlomci se ne ponavljaju, neki delovi su prebačeni iz čina u čin, tako da slušaoci Verdijeve Travijate dobijaju gotovo celu muziku opere u novom ruhu, a gledaoci baleta genijalnu Verdijevu partituru za muzičku bazu igre. (...)
      //   Povećavanjem sastava orkestra u duvačima, ukupni zvuk je postao zasićeniji, bogatiji i raskošniji. Prirodno je da instrumenti koji donose melodijski materijal pevačkih deonica budu izabrani prema karakteru muzike. Slušaoci će biti iznenađeni obiljem solističkih delova u pojedinim instrumentima. Postavlja se opravdano pitanje: da li je majstorsku partituru opere trebalo prerađivati? Ako to znači obogaćenje za baletski izraz i proširenje muzičke baze za igru i pokret, intervencija nam se čini opravdanom i svrsishodnom. Ništa nije izvitopereno, amputirano, nasilno razdvojeno i ponovo sklopljeno. Prekrasne autorove melodije ništa nisu izgubile od svoje inspirisanosti, svežine, očaravajuće privlačnosti. Transkripcije će uvek imati zaštitnike i kuditelje.
      //   Konstantin Vinaver`,
      //   image: Buffer.from(fs.readFileSync('slike/dama.jpg')),
      //   poster: Buffer.from(fs.readFileSync('slike/dama_poster.jpg')),
      //    createdAt:'2022-09-07',
      //    updatedAt: '2022-09-07'
      //  }
    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Shows', null, {});
    
  }
};
 