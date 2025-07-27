import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import ProjectCard from "./ProjectCard";
import './BaseTemplate.css';
import ContactCard from "./ContactCard";
//import Popup from "./Popup";

const BaseTemplate = () => {

  /*
  const [popupOpen, setPopupOpen] = useState(() => {
    return localStorage.getItem("seenPopup") !== "true";
  });
  */
  const [errorOpen, setErrorOpen] = useState(false);
  const alertColor = 'yellow'

  /*
  useEffect(() => {
    // Apply overflow hidden when popup is open, reset when closed
    document.body.style.overflow = popupOpen ? 'hidden' : 'auto';

    // Clean-up function to reset overflow on component unmount
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [popupOpen]); // Dependency array watches `popupOpen`

  */

  useEffect(() => {
    if (errorOpen) {
      setTimeout(() => {
        setErrorOpen(false)
      }, 4000)
    }
  }, [errorOpen]); // `count` is the dependency

  /*
    function closeFunc() {
      setPopupOpen(false)
      localStorage.setItem("seenPopup", "true")
    }
  */

  function alertClose() {
    setErrorOpen(false)
  }

  return (
    <>
      {/* popupOpen && <Popup closeFunc={closeFunc} setAlertColor={setAlertColor} setErrorOpen={setErrorOpen}></Popup> */}

      <div className="single-page-content" style={styles.pageContainer}>
        <div style={{ backgroundColor: alertColor }} id="user-alert" className={errorOpen ? "visible custom-alert alert alert-warning" : "hidden custom-alert alert alert-warning"} role="alert">
          <div id="alert-text">Warning</div>
          <div onClick={alertClose} id="custom-alert-close">X</div>
        </div>

        <Navbar />
        {/* Hero Section with Gradient Background */}
        <section id="titleSection" style={styles.heroSection}>
          <div className="container text-center">
            <h1 className="headline bigTitle display-3 text-white-own">Ingyen elkészítem önnek álmai weboldalát*, és csak akkor fizet, ha elégedett!</h1>

            <p className="lead-italic lead text-white-own">
              *Egyéb szoftverfejlesztést is kérhet, például leltárrendszer készítését.
            </p>
            <h1 className="brackets bigTitle display-1 text-white-own">{"</> </>"}</h1>
            <p className="did-u-know">
              Tudta, hogy a modern weboldallal rendelkező vállalkozások 20%-kal nagyobb növekedést produkálnak, illetve 10-ből 8 ember megbízhatóbbnak és hitelesebbnek tartja őket, mint a weboldal nélkülieket?
            </p>
          </div>
        </section>

        <section id="introSection" style={styles.introSection}>
          <div className="container text-center intro">
            <h1 className="introTitle display-4">Bemutatkozás</h1>
            <div className="picHolder">

              <p className="lead-intro lead">
                <div className="gradient-border">
                  <img id="introImage" className="pic" src="introPic2.webp" alt='avatar'></img>
                </div>
                Üdvözlöm!
                <p></p>
                Varga-Molnár Bertalan vagyok, fiatal és agilis vállalkozó. Már alig várom, hogy segíthessek vállalkozása fejlesztésében!
                <p></p>
                Miskolci Egyetem Gépészmérnöki és Informatikai Karán végeztem mint programtervező informatikus. Volt még bennem kraft, ezért folyamatosan kerestem a lehetőségeket, hogy miként tudom magam továbbfejleszteni.
                <p></p>
                Soha nem vagyok teljesen elégedett: hiába dolgozom kiemelkedő tulajdonosi szemlélettel - hiszen nemcsak az ügyfélnek, magam elégedettségére is dolgozom - amint végeztem egy projekttel rögtön látom, miben lehetett volna sokkal jobb.
                <p></p>
                Akkor tudok igazán rápörögni valamire, ha innovatívan lehet hozzáállni egy projekthez. Ennek bizonyítéka a referenciám között szereplő arculattervezés és integrálás; ráncfelvarrtam egy teljes közvetítés típust, ami ezután sztenderddé vált a közvetítő cégcsoportján belül.
                <p></p>
                Nyugodtan bízza rám vállalkozásának fejlesztését egy új weblapon vagy szoftveren keresztül.
                Bizalmát rugalmassággal, garanciákkal és magas tulajdonosi szemlélettel fogom honorálni.
                Nézze át referenciáim, és ha el tudja képzelni a közös munkát, ne habozzon felkeresni az elérhetőségeim közül az Ön számára legkényelmesebb módon.
                <p></p>
                Barátsággal,
                Berci
              </p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="refSection" className="refs">
          <h2 className="center-title display-5 text-white-own" style={styles.refStyle}>Korábbi történeteim</h2>
          <p className="story lead text-white-own">
            Két hiánypótló saját alkalmazás mellett évek óta elégedett felhasználója programjaimnak az Esport1 Kft. és a Magyar E-Sport Szövetség. Előbbi a belső munkamenetek gyorsítására és egyszerűsítésére veszi igénybe a fejlesztéseimet, utóbbi pedig az általuk szervezett versenyek számos szezonja óta emeli a nézői élményt a kamera appomal, így megszólítván még több fogyasztót.
          </p>
          <div className="row">
            <div className="col">
              <ProjectCard imgSrc="fc.webp" link="https://footy.vmb.codes" title="Footy Calendar" desc="A legnagyobb munkám eddig, amellyel a felhasználó egy kattintással hozzáadhatja a világ bármely csapatának mérkőzéseit a naptárához." />
              <ProjectCard imgSrc="viewers.webp" link={false} title="Egyidejű nézők" desc="Ez a webszerver Twitch, YouTube és TikTok csatornák egyidejű nézőszámát írja ki élőben, és folyamatosan frissül. Hasznos a tartalomgyártók számára." />
              <ProjectCard imgSrc="excelion.webp" link={false} title="Excelion" desc="Egy interfész, ami lehetővé teszi, hogy a lokális .xlsx vagy .xlsm munkafüzetünket WEB API-szerűen irányítsuk HTTP GET requesteken keresztül. Az Excelion szerver kap egy fájl elérési útvonalat és egy utasítás nevet, amit lefuttat anélkül, hogy a felhasználó hozzáérne az Excelhez. Televíziós feliratozáshoz remek kiegészítő." />
            </div>
            <div className="col">
              <ProjectCard imgSrc="kekszalag.webp" link="https://www.youtube.com/live/cW5iLFYk_Ks?feature=shared&t=14776" title="Kékszalag API" desc="Hajókövetési rendszer összekötése Európa legnagyobb tókerülő versenye élő közvetítésének feliratozó szoftverével, továbbá időjárás API fejlesztése és integrálása valós idejű adatok lekéréséhez. Videóért kattintson!" />
              <ProjectCard imgSrc="fts.webp" link="https://shoflo.video1.hu" title="Follow the Show" desc="Produkciós csapatok számára az adásmenet szerkesztésére és élő követésére alkalmas webapp, tableten és telefonon is kényelmes elrendezéssel." />
              <ProjectCard imgSrc="portroyal.webp" link="https://portroyalablak.hu" title="Weboldal felújítás" desc="Nyílászárókkal foglalkozó vállakozás oldalának kinézeti és működési felújítása a forgalom növelése és több megrendelés érdekében." />
            </div>
            <div className="col">
              <ProjectCard imgSrc="r6.webp" link="https://www.youtube.com/live/Iu6zCTUwGIU?si=fD515rLxPq1WgxdP&t=9279" title="Esport kamera HUD" desc="Szakdolgozatom alapjául is szolgáló appom, ami lehetővé teszi az esport mérkőzéseken a játékosok kameráinak automatikus megjelenítését. Példavideóért kattintson a képre!" />
              <ProjectCard imgSrc="wp.webp" link="https://pass.vmb.codes" title="WassPord" desc="Ingyenes és biztonságos felhő alapú adatkezelő bejelentkezési- és fizetési információkhoz és privát feljegyzésekhez. Elérhető hozzá szintén saját, a bejelentkezést automatikusan kitöltő bővítmény." />
              <ProjectCard imgSrc="encoder.webp" link="https://github.com/vargamolnarbertalan/ebu-normalizer" title="Média enkódoló" desc="Dockerizált FFMPEG alapú videó enkóder és audió normalizáló. Jelentősen megkönnyíti és felgyorsítja a médiafájlok produkcióba való integrálását. Alacsony erőforrás igényű." />
            </div>
          </div>
        </section>

        <section id="tvSection" style={styles.tvSection}>
          <div className="container text-center">
            <h1 className="white-text introTitle display-4">Ingyenes élő közvetítés eseményéről!</h1>
            <div className="picHolder">
              <p className="white-text lead-intro lead">
                <div className="white-grad gradient-border">
                  <img id="tvImage" className="pic" src="tvPic.webp" alt='tv avatar'></img>
                </div>
                A programozás mellett szenvedélyesen szeretek élő közvetítéseket gyártani, legyen a közvetítési felület YouTube, Twitch, Facebook, TikTok, X, Instagram, saját oldal vagy akár ez mind egyszerre. Kitartó munkámnak hála Magyarországon elsőként és eddig egyedüliként "Az év E-Sportolója" különdíjat kaptam az adás rendezési tevékenységemért. Legyen e-sport, sport, céges rendezvény, magán esemény vagy bármi más, amit megosztana a nagyvilággal élőben, én színvonalasan meg tudom oldani, mintha a TV-t nézné! Egy adott partner számára AZ ELSŐ KÖZVETÍTÉS TELJESEN INGYENES, szóval nincs veszíteni valója. Az évek alatt olyan közvetítéseken szereztem tapasztalatot, mint a LOL Worlds, CS Major, R6 Six Invitational és GeoGuessr VB magyar partner adásai, vagy az Excel Világbajnokság, V4 Future Sports Festival, Telekom E-Sport Kupa, Magyar E-Sport Fesztivál és a Magyar E-Sport Bajnokság hoszt adásai.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contactSection" className="">
          <div className="intro">
            <h1 className="center-title contactTitle display-5">Várom megkeresését!</h1>
            <p className="lead-contact lead">
              Munkaszüneti napokon is kereshet, a hagyományos munkaidő óráin kívül. Állok rendelkezésére videochaten, személyesen, üzenetben és természetesen telefonon. Ha nem ért el, visszahívom.
            </p>
            <p className="lead-contact lead">
              Jelenleg csak limitált számú megrendelést fogadok, mert a minőséget helyezem előtérbe, nem a mennyiséget.
            </p>
            <p className="lead-italic lead-contact lead">
              Amennyiben valaki az ön ajánlása alapján válik megrendelőmmé, ön visszakapja a saját költségének 20%-át.
            </p>
          </div>

          <div className="contact-row row">
            <ContactCard imgSrc="whatsapp.webp" link="https://wa.me/+36202366969" title="WhatsApp" desc="+36 20 236 6969" />
            <ContactCard imgSrc="imessage.webp" link={false} title="iMessage" desc="+36 20 236 6969" />
            <ContactCard imgSrc="viber.webp" link="viber://add?number=36202366969" title="Viber" desc="+36 20 236 6969" />
            <ContactCard imgSrc="phone.webp" link="tel:+36202366969" title="Telefon" desc="+36 20 236 6969" />
            <ContactCard imgSrc="mail.webp" link="mailto:vargamolnar.bertalan@vmb.codes" title="Email" desc="vargamolnar.bertalan@vmb.codes" />
            <ContactCard imgSrc="discord.webp" link="https://discordapp.com/users/335719855976349697" title="Discord" desc="ID: b3rc1" />
          </div>
        </section>

        {/* Footer Section */}
        <section id="footerSection" className="">
          <div class="container">
            <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
              <div class="col-md-4 d-flex align-items-center">
                <span class="center-title text-body-secondary">© {new Date().getFullYear()} Varga-Molnár Bertalan</span>
                <span class="center-title text-body-secondary">Diplomás szoftverfejlesztő, számlaképes egyéni vállalkozó</span>
                <span class="center-title text-body-secondary">Adószám: 90183128-1-25</span>
              </div>
            </footer>
          </div>
        </section>

      </div>
    </>

  );
};

const styles = {
  pageContainer: {
    fontFamily: "Arial, sans-serif",
    lineHeight: 1.6
  },
  heroSection: {
    background: "linear-gradient(to right, #6a11cb, #2575fc)",
    paddingBottom: "100px",
    paddingTop: "100px"
  },
  refStyle: {
    marginBottom: "24px"
  },
  introSection: {
    background: "white",
    padding: "100px 0",
    colour: "black"
  }
};

export default BaseTemplate;
