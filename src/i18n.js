import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        detection: {
            order: ['localStorage', 'navigator'],
            caches: ['localStorage'], // Persist language
        },
        resources: {
            en: {
                translation: {
                    name: "András Bene",
                    about: "About Me",
                    mission: "My mission",
                    media: "Media presence",
                    services: "My services",
                    connect: "Let's connect!",
                    aboutText1: "Hi, I’m András Bene, and for almost 8 years, I have been working as a relocation specialist, supporting foreign nationals in establishing their legal residence and settling into life in Hungary.",
                    aboutText2: "Previously, from 2004 to 2018, I worked in diplomatic life at the Hungarian headquarters of an international organisation as an administrative officer. During this time, I collaborated daily with more than 300 colleagues from 15 different countries, which is where my passion for helping foreign citizens was truly born.",
                    aboutText3: "Today, I focus on guiding individuals and companies through the complexities of Hungarian immigration processes, ensuring a smooth transition and a positive experience for everyone involved.",
                    missionText1: "I am passionate about making life easier for expats in Hungary. My goal is to:",
                    missionText2: "Assist foreign nationals in navigating the legal requirements for residency and work in Hungary.",
                    missionText3: "Provide clear guidance and full support during every step of the relocation process.",
                    missionText4: "Assist companies in legally employing foreign workers and managing the necessary documentation.",
                    mediaText1: "Over the past few years, I have been invited to share my expertise through several national media outlets and conferences, discussing Hungary’s labour market and the legal employment of foreign nationals:",
                    cTitle1: "HR Portal",
                    cText1: "These Are the Sectors with the Most Severe Labor Shortages (2023)",
                    cTitle2: "Blue Recruitech",
                    cText2: "Conference Speaker",
                    cTitle3: "Pénzcentrum",
                    cText3: "Brutal Statistics Revealed That This Sector Lacks The Most Employees(2023)",
                    cTitle4: "Győr-Moson-Sopron County Chamber of Commerce and Industry",
                    cText4: "HR Conference Topic Coordinator",
                    cTitle5: "SCMonitor Report",
                    cText5: "December 2023 – January 2024 | Volume XIX, Issue 10",
                    cTitle6: "Work Force HR Strategic Event",
                    cText6: "Clash of Cultures: HR Strategy in a Transforming World (2023)",
                    sText1: "As a dedicated relocation specialist, I assist foreign nationals in integrating smoothly into Hungarian life. My mission is to alleviate the stress of moving to a new country by providing comprehensive, personalised support—from handling paperwork to settling into a new home.",
                    sText2: "With more than 7 years of experience in relocation services, I assist foreign employees with a wide range of administrative and practical matters, such as:",
                    sText3: "Residence permits and official documentation",
                    sText4: "Finding a suitable home and reviewing rental contracts",
                    sText5: "Setting up utilities, internet, and bank accounts",
                    sText6: "Supporting spouses and children with kindergarten/school search",
                    sText7: "Providing information about healthcare, sports, and community resources",
                    sText8: "Personally accompanying clients to appointments when needed",
                    sText9: "I also offer continuous support throughout your entire stay in Hungary, including departure services like closing bank accounts or handing over properties.",
                    sText10: "Unlike corporate mobility managers who typically work in-house, I operate as an independent service provider, offering flexible and tailored solutions to companies and individuals alike.",
                    sText11: "Whether you're moving alone or with your family, I'm here to make your transition to Hungary smooth, efficient, and worry-free.",
                    sText12: "Let me handle the logistics—so you can focus on your new chapter.",
                    sText13: "Please do not hesitate to contact me if you have any questions regarding your current or future stay in Hungary."

                },
            },
            hu: {
                translation: {
                    name: "Bene András",
                    about: "Rólam",
                    mission: "Küldetésem",
                    media: "Médiamegjelenések",
                    services: "Szolgáltatásaim",
                    connect: "Kapcsolat",
                    aboutText1: "Szia, Bene András vagyok, és immár közel 8 éve dolgozom relokációs szakértőként, külföldi állampolgárokat támogatva abban, hogy jogszerű tartózkodást és életet alakíthassanak ki Magyarországon.",
                    aboutText2: "Ezt megelőzően, 2004 és 2018 között a diplomáciai pályán dolgoztam, egy nemzetközi szervezet magyarországi központjában, adminisztratív tisztviselőként. Ez idő alatt nap mint nap több mint 300 külföldi kollégával működtem együtt 15 különböző országból – ekkor született meg igazán a szenvedélyem a külföldi állampolgárok segítése iránt.",
                    aboutText3: "Ma az a fő feladatom, hogy magánszemélyeket és vállalatokat vezessek végig a magyar bevándorlási folyamatok összetett lépésein, biztosítva számukra a zökkenőmentes átmenetet és a mindenki számára pozitív élményt.",
                    missionText1: "Szenvedélyesen dolgozom azon, hogy megkönnyítsem a külföldiek életét Magyarországon. Célom, hogy:",
                    missionText2: "Segítsem a külföldi állampolgárokat a tartózkodási és munkavállalási követelmények megértésében Magyarországon.",
                    missionText3: "Világos iránymutatást és teljes körű támogatást nyújtsak a relokáció minden egyes lépésében.",
                    missionText4: "Segítsem a vállalatokat abban, hogy jogszerűen alkalmazhassanak külföldi munkavállalókat, és megfelelően kezeljék a szükséges dokumentációt.",
                    mediaText1: "Az elmúlt években számos országos médiafelület és konferencia hívott meg, hogy megosszam szakmai tapasztalataimat a magyar munkaerőpiacról és a külföldi állampolgárok jogszerű foglalkoztatásáról:",
                    cTitle1: "HR Portal",
                    cText1: "Ezeken a területeken a legnagyobb a munkaerőhiány (2023)",
                    cTitle2: "Blue Recruitech",
                    cText2: "Konferencia előadó",
                    cTitle3: "Pénzcentrum",
                    cText3: "Brutális statisztika érkezett erről a területről: hiányzik a legtöbb munkavállaló (2023)",
                    cTitle4: "Győr-Moson-Sopron Megyei Kereskedelmi és Iparkamara",
                    cText4: "HR Konferencia témafelelős",
                    cTitle5: "SCMonitor Jelentés",
                    cText5: "2023. december – 2024. január | XIX. évfolyam 10. szám",
                    cTitle6: "Work Force HR Stratégiai Rendezvény",
                    cText6: "Kultúrák harca: HR stratégia az átalakuló világban (2023)",
                    sText1: "Elkötelezett relokációs szakemberként segítek a külföldi állampolgároknak abban, hogy zökkenőmentesen beilleszkedjenek a magyarországi életbe. Küldetésem, hogy levegyem a költözéssel járó terheket a válladról azzal, hogy teljes körű, személyre szabott támogatást nyújtok – a hivatalos ügyintézéstől kezdve egészen az új otthonod berendezéséig.",
                    sText2: "Több mint 7 éves tapasztalattal rendelkezem a relokációs szolgáltatások területén, és széleskörű adminisztratív és gyakorlati ügyekben nyújtok segítséget a külföldi munkavállalóknak, többek között:",
                    sText3: "Tartózkodási engedélyek és hivatalos dokumentáció intézése",
                    sText4: "Megfelelő lakás megtalálása és bérleti szerződések átnézése",
                    sText5: "Közművek, internet és bankszámlák beállítása",
                    sText6: "Támogatás a házastárs és gyermekek óvoda/iskola keresésében",
                    sText7: "Tájékoztatás egészségügyi, sport- és közösségi lehetőségekről",
                    sText8: "Szükség esetén személyes kíséret a hivatalos időpontokra",
                    sText9: "Folyamatos támogatást nyújtok a teljes magyarországi tartózkodásod ideje alatt, beleértve a kiköltözéssel kapcsolatos ügyeket is, mint például a bankszámlák lezárása vagy az ingatlan átadása.",
                    sText10: "Más, vállalaton belül dolgozó mobilitási menedzserekkel ellentétben független szolgáltatóként dolgozom, így rugalmas, testre szabott megoldásokat kínálok cégeknek és magánszemélyeknek egyaránt.",
                    sText11: "Akár egyedül költözöl, akár a családoddal, azon dolgozom, hogy a Magyarországra való átmenet gördülékeny, hatékony és stresszmentes legyen.",
                    sText12: "Hagyd, hogy én intézzem a logisztikát – így te már az új fejezetre koncentrálhatsz!",
                    sText13: "Ha bármilyen kérdésed van a jelenlegi vagy jövőbeli magyarországi tartózkodásoddal kapcsolatban, keress bizalommal."
                },
            },
        },
        interpolation: {
            escapeValue: false, // React already does escaping
        },
    });

export default i18n;