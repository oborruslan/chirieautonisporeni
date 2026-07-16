# Închirieri auto Nisporeni

Deschide `index.html` într-un browser. Pagina nu necesită instalare sau server.

## Configurare

- Punctul unic de ridicare este `Nisporeni, Republica Moldova`.
- Codul promoțional și pagina Flex Drive/chirie lunară au fost eliminate din interfață.
- Flota de 8 mașini din arhiva furnizată este afișată direct pe pagina principală, cu prețuri zilnice în MDL.
- Tariful lunar apare numai ca opțiune „la cerere”, fiindcă activitatea principală este închirierea pe una sau mai multe zile.
- Logoul „Elita Auto Rent” este integrat în antet și footer din `assets/brand/elita-auto-rent-logo.jpg`.
- Pagina principală folosește un stil simplu, cu fundal bleumarin închis, accente aurii, carduri curate și formular compact de rezervare.
- Logoul furnizat este afișat atât în antet, cât și ca element principal în secțiunea de prezentare.

## Pagini informative

- `about.html` conține pagina separată „Despre noi”, orientată spre activitatea locală din Nisporeni.
- `terms.html` conține un model general de termeni și condiții în Română, Rusă și Engleză.
- Înainte de publicare, termenii trebuie completați cu denumirea juridică, IDNO, contactele, tarifele, garanția, asigurarea și politica reală de anulare ale firmei.
- Meniul mare demonstrativ și linkul repetat „Tarife” au fost eliminate din navigație.
- Linkurile „Nisporeni” și „Republica Moldova” din footer deschid localitatea Nisporeni în Google Maps; punctul exact poate fi înlocuit ulterior.

## WhatsApp

- După completarea rezervării, WhatsApp se deschide cu mașina, locația Nisporeni, datele și orele selectate.
- Pentru trimitere directă către firmă, completează constanta `WHATSAPP_NUMBER` de la începutul fișierului `app.js`.
- Numărul trebuie scris cu prefixul Republicii Moldova și numai cifre, de exemplu `37360123456`.
- Dacă numărul rămâne gol, WhatsApp permite alegerea contactului.

## Date

- Data poate fi aleasă din calendar sau introdusă numeric.
- Exemplu: `14072026` devine automat `14/07/2026`.
- Datele din trecut și datele calendaristice inexistente sunt respinse.

## Filtrul flotei

- Filtrul din stânga funcționează după prețul pe zi, marcă, cutie de viteze, carburant și categorie.
- Filtrele pot fi combinate, iar numărul de rezultate se actualizează imediat.
- Lista poate fi ordonată după recomandare, preț crescător sau preț descrescător.
- Butonul „Resetează” readuce toate cele 8 mașini și valorile inițiale.
- Pe telefon, filtrele sunt afișate într-un panou pliabil cu numărul filtrelor active.

## Fotografii și galerii

- Cele 24 de fotografii sunt păstrate în `assets/cars` și grupate pe cele 8 mașini.
- Pe pagina principală, fiecare mașină pornește cu fotografia realizată din față.
- Toate cardurile folosesc același cadru 4:3; fotografiile sunt decupate centrat fără deformare.
- Fotografia poate fi schimbată cu săgețile, cu punctele de navigare sau prin glisare stânga/dreapta pe mobil.
- Clicul sau atingerea fotografiei deschide imaginea originală într-un vizualizator mare, fără decupare.
- Vizualizatorul oferă potrivire pe ecran, zoom, afișare 1:1, miniaturi, săgeți, glisare pe mobil și navigare din tastatură.
- Prima fotografie a fiecărei mașini este încărcată imediat; restul sunt încărcate când utilizatorul navighează prin galerie.
- Numele fiecărei mașini deschide pagina dedicată `car.html`, cu galerie mare, miniaturi, săgeți, glisare și vizualizare pe tot ecranul.
- Pagina mașinii păstrează aceeași experiență pe desktop și mobil; pe telefon are bara fixă „Sună direct / Solicită această mașină”.
- Titlul, specificațiile, prețul, galeria, miniaturile și secțiunile apar progresiv prin animații, cu o variantă fără mișcare pentru utilizatorii care au activată preferința sistemului.

## Limbi

- Pagina poate fi folosită în Română, Русский și English din selectorul din antet.
- Se traduc meniurile, rezervarea, filtrele, cardurile, contactele, footer-ul, calendarul, formularele, validările și mesajele WhatsApp.
- Limba selectată este memorată local în browser.

## Fișiere

- `index.html` — structura paginii, flota și footer-ul.
- `car.html` — pagina dinamică de detaliu pentru fiecare mașină.
- `about.html` — pagina separată „Despre noi”.
- `terms.html` — pagina separată „Termeni și condiții”.
- `styles.css` — stilurile responsive.
- `car-detail.css` — galeria, pagina mașinii, animațiile și bara mobilă de acțiuni.
- `app.js` — calendar, rezervare, WhatsApp, autentificare și interacțiuni.
- `car-detail.js` — galerie desktop/mobil, fullscreen, swipe, traduceri și rezervarea paginii mașinii.
- `fleet-data.js` — datele comune ale celor 8 mașini și listele de fotografii.
- `content-pages.js` — traduceri și interacțiuni pentru paginile informative.

CAPTCHA nu este încă integrată. Formularul de înregistrare păstrează punctul `#captcha-slot` pentru integrarea ulterioară.

## Contact și efecte

- Secțiunea Contact conține patru carduri: WhatsApp, e-mail, adresă și program.
- Formularul Contact pregătește mesajul și îl deschide în WhatsApp.
- Completează numărul real în `WHATSAPP_NUMBER`, apoi înlocuiește textele temporare pentru telefon și e-mail din `index.html`.
- Pe desktop, cardurile mașinilor primesc umbră, se ridică cu 4 px, iar imaginea se mărește la 1.15× în 500 ms.
- Efectul de zoom este dezactivat pe dispozitive tactile pentru a evita mișcări accidentale.
- Pagina a fost verificată la 390 px fără derulare orizontală.
- Butonul circular din dreapta-jos apare după derulare, indică progresul paginii și revine lin la început după clic.
- Secțiunea FAQ conține cinci întrebări în Română, Rusă și Engleză; răspunsurile se deschid animat, câte unul odată, atât pe desktop, cât și pe mobil.
