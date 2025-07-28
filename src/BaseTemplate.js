import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import ProjectCard from "./ProjectCard";
import './BaseTemplate.css';
import ContactCard from "./ContactCard";
import { useTranslation } from 'react-i18next';
//import Popup from "./Popup";

const BaseTemplate = () => {
  const { t } = useTranslation();

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
        {/*      
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
        */}

        <section id="aboutSection">
          <div className="container text-center intro">
            <h1 className="introTitle display-4">{t('about')}</h1>
            <div className="picHolder">
              <div className="gradient-border">
                <img id="introImage" className="pic textImage" src="/img/1.jpg" alt='avatar'></img>
              </div>
              <div className='myTextWrapper'>
                <p className="lead-intro lead">
                  {t('aboutText1')}
                  <p></p>
                  {t('aboutText2')}
                  <p></p>
                  {t('aboutText3')}
                </p>
              </div>

            </div>
          </div>
        </section>

        <section id="missionSection" className="refs">
          <h2 className="center-title display-5 text-white-own" style={styles.refStyle}>{t('mission')}</h2>
          <div className='container'>
            <div className='picHolder'>
              <div className="gradient-border">
                <img id="missionImage" className="pic textImage" src="/img/4.jpg" alt='avatar'></img>
              </div>
              <div className='myTextWrapper'>
                <p className="list-title story lead text-white-own">
                  {t('missionText1')}
                </p>
                <div className="myListHolder white-text">
                  <ul>
                    <li>{t('missionText2')}</li>
                    <li>{t('missionText3')}</li>
                    <li>{t('missionText4')}</li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section id="mediaSection" className='center-title'>
          <div className='intro'>
          <h1 className="introTitle display-4">{t('media')}</h1>
          <p className="story lead text-white-own">
            {t('mediaText1')}
          </p>
          </div>
          <div className="row">
            <div className="col">
              <ProjectCard imgSrc="/img/hrp.webp" link="https://www.hrportal.hu/c/ezeken-a-teruleteken-a-legnagyobb-a-munkaerohiany-20231221.html" title={t('cTitle1')} desc={t('cText1')} />
              <ProjectCard imgSrc="/img/rt.jpg" link="https://blue.recruitech.hu/eloado/czellecz-zoltan-2" title={t('cTitle2')} desc={t('cText2')} />
            </div>
            <div className="col">
              <ProjectCard imgSrc="/img/pc.jpg" link="https://www.penzcentrum.hu/karrier/20231220/brutalis-statisztika-erkezett-errol-a-teruletrol-hianyzik-a-legtobb-munkavallalo-1145030" title={t('cTitle3')} desc={t('cText3')} />
              <ProjectCard imgSrc="/img/gyms.jpg" link="https://gymsmkik.hu/kozel-szaz-vallalkozasvezeto-es-hr-szakember-folytatott-sikeres-eszmecseret-hr-konferenciankon" title={t('cTitle4')} desc={t('cText4')} />
            </div>
            <div className="col">
              <ProjectCard imgSrc="/img/scm.jpg" link="https://www.scmonitor.hu/uploads/media/publications/0001/05/901f7ae5c7336299dfe41e27877cacd485722fc2.pdf" title={t('cTitle5')} desc={t('cText5')} />
              <ProjectCard imgSrc="/img/5.jpg" link="https://work-force.hu/2023/11/24/kulturak-harca-hr-strategia-az-atalakulo-vilagban/" title={t('cTitle6')} desc={t('cText6')} />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="serviceSection" className="refs">
          <h2 className="center-title display-5 text-white-own" style={styles.refStyle}>{t('services')}</h2>
          <div className='container'>
            <div className='myTextWrapper'>
              <p className="lead text-white-own" style={{ textAlign: 'justify' }}>{t('sText1')}</p>
              <p className="lead text-white-own" style={{ textAlign: 'justify' }}>{t('sText2')}</p>
            </div>
            <div className='picHolder' style={{justifyContent: 'flex-start'}}>
              <div className="gradient-border" style={{float: 'left'}}>
                <img id="serviceImage" className="pic textImage" src="/img/2.jpg" alt='avatar'></img>
              </div>
              <div className="myListHolder white-text">
                <ul>
                  <li>{t('sText3')}</li>
                  <li>{t('sText4')}</li>
                  <li>{t('sText5')}</li>
                  <li>{t('sText6')}</li>
                  <li>{t('sText7')}</li>
                  <li>{t('sText8')}</li>
                </ul>
              </div>
            </div>
            <div className='picHolder2'>
              

              <p className="lead text-white-own">
                <p>{t('sText9')}</p>
                <p>{t('sText10')}</p>
                <p>{t('sText11')}</p>
                <p>{t('sText12')}</p>
                <p>{t('sText13')}</p>
              </p>
            </div>
          </div>
        </section>


        <section id="Section" className="">
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
    lineHeight: 1.6
  },
  heroSection: {
    background: "linear-gradient(to right, #6a11cb, #2575fc)",
    paddingBottom: "100px",
    paddingTop: "100px"
  },
  refStyle: {
    marginBottom: "24px"
  }
};

export default BaseTemplate;
