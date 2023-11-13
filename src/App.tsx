import Board from "./Screens/Board";
import "./index.css";

export default function App() {
  type DataType = {
    jobTitle: string;
    teaser?: string;
    jobDetail?: React.ReactNode;
    city?: string;
    country?: string;
    ShortUrl?: string;
  };

  const Data: DataType[] = [
    {
      jobTitle: "Teamleider productie",
      teaser:
        "In deze functie wil jij graag mensen beter maken in hun werk en streef je er naar om de kwaliteit in de organisatie te verbeteren.",
      jobDetail: (
        <div className="max-w-xl mx-auto">
          <details className="open:bg-white dark:open:bg-slate-900   open:shadow-lg p-6 rounded-lg">
            <summary className="cursor-pointer text-sm leading-6 text-slate-900 dark:text-white font-semibold select-none">
              Job Details
            </summary>
            <div className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
              <>
                <h2>Over het werk</h2>{" "}
                <p>
                  Als teamleider productie ben je verantwoordelijk voor de
                  aansturing van een team van 10 personen. Jij zorgt voor het
                  optimaal laten verlopen van de werkzaamheden van het team.
                  Coachen, motiveren en stimuleren zijn daarbij belangrijke
                  taken. Als teamleider bewaar jij het overzicht en werk je vaak
                  ook mee.
                </p>{" "}
                <h2>Wat wij bieden</h2>{" "}
                <ul>
                  <li>
                    Het betreft een fulltime functie met uitzicht op vast dienst
                    verband
                  </li>
                  <li>Je komt te werken in een professionele werkomgeving</li>
                  <li>Veel verantwoordelijkheden</li>
                </ul>{" "}
                <h2>Wat wij vragen</h2>{" "}
                <ul>
                  <li>
                    Bij voorkeur hbo of een opleiding op vergelijkbaar werk- en
                    denkniveau
                  </li>
                  <li>Kennis van HACCP-systemen</li>
                  <li>Analytisch en probleemoplossend vermogen</li>
                  <li>Goede communicatieve- en leidinggevende eigenschappen</li>
                </ul>{" "}
                <h2>Over het bedrijf</h2>{" "}
                <p>
                  Jouw toekomstige werkgever heeft de grootste en gezelligste
                  kookplek van het land. De mens staat centraal binnen de
                  organisatie. Er werken veel koks en ze maken de lekkerste
                  maaltijden en salades. De sfeer onderling is informeel. Op de
                  werkvloer is sprake van een professionele werkinstelling.{" "}
                </p>{" "}
                <h2>Over Luba</h2>{" "}
                <p>
                  Luba is het grootste uitzendbureau voor het MKB. Met de beste
                  banen, bij de beste werkgevers bij jou in de buurt. Wij hebben
                  altijd persoonlijk contact, zodat we weten wat je nodig hebt
                  om te groeien. En we zijn er voor iedereen. We denken niet in
                  hokjes, we denken met je mee. Waar je ook aan de slag wilt, er
                  is altijd werk bij jou in de buurt. Solliciteer direct!
                </p>
              </>
            </div>
          </details>
        </div>
      ),
      city: "Amsterdam",
      country: "Netherland",
      ShortUrl: "https://shorturl.at/knFLX",
    },
    {
      jobTitle: "Medisch Assistent Verpleegzorg (MAV) @ Warande",
      teaser:
        "Wil jij actief bijdragen aan een oplossing voor het personeelstekort in de zorg? En dat terwijl je waardevolle ervaring opdoet binnen de ouderenzorg (naast je studie)? Word MAV'er (Medisch Assistent Verpleegzorg) bij een zorginstelling bij jou in de buurt. Woon jij in de buurt van Utrecht / Zeist? Lees dan snel verder.",
      jobDetail: (
        <div className="max-w-xl mx-auto">
          <details className="open:bg-white dark:open:bg-slate-900   open:shadow-lg p-6 rounded-lg">
            <summary className="cursor-pointer text-sm leading-6 text-slate-900 dark:text-white font-semibold select-none">
              Job Details
            </summary>
            <div className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
              <>
                <h2>Over de functie</h2>{" "}
                <p>
                  Als MAV’er verricht je werkzaamheden die passen bij een
                  verzorgende IG. Dit betekent dat je in een woonzorgcentrum of
                  verpleeghuis werkt en de bewoners daar gedurende de dag helpt
                  en ondersteunt bij de dagelijks zorgtaken (ADL-zorg). Verder
                  doe je je best om de bewoners een zo fijn mogelijke dag te
                  bezorgen door gewoon even gezellig een praatje te maken of een
                  luisterend oor te bieden. Soms komt het ook voor dat je
                  verpleegkundige handelingen moet verrichten zoals het
                  toedienen van injecties, het plaatsen van urinekatheters en
                  zwachtelen.
                </p>
                <p>
                  Naast bovenstaande taken kan je een deel van je werktijd
                  besteden aan een zelfgekozen project op de werkvloer. Dit kan
                  het opzetten van een onderzoek naar medicatieveiligheid zijn,
                  maar bijvoorbeeld ook het organiseren van activiteiten voor de
                  bewoners. Dit is iets wat jij samen met de zorginstelling mag
                  gaan bedenken.
                </p>
                <p>
                  <strong>OPLEIDING TOT MAV'ER</strong>
                </p>
                <p>
                  Voordat je aan de slag kan als MAV’er, krijg je natuurlijk een
                  gedegen opleiding die er als volgt uitziet:
                </p>
                <ol>
                  <li>E-learning met theorietoets</li>
                  <li>ADL-praktijktraining</li>
                  <li>ADL-stage (2-3 weken afhankelijk van ervaring)</li>
                  <li>Praktijktraining verpleegkundige handelingen</li>
                </ol>
                <p>
                  Als je alle stappen goed hebt doorlopen, ben je officieel
                  MAV’er en ga je aan de slag bij de zorginstelling. Hierbij
                  blijven de zorginstelling en wij je vanaf de zijlijn
                  ondersteunen in je ontwikkeling.
                </p>{" "}
                <h2>Over het bedrijf</h2>{" "}
                <p>
                  Warande is één van de zorginstellingen waar jij als MAV'er aan
                  de slag kunt! Warande heeft zeven vestigingen voor wonen en
                  (antroposofische) zorg. Daarnaast zijn er nevenvestigingen
                  voor revalidatie en een hospice. Warande biedt zorg aan bijna
                  900 cliënten en er werken ruim 1.100 mensen, onder wie veel
                  parttimers.
                </p>
              </>
            </div>
          </details>
        </div>
      ),
      city: "Amsterdam",
      country: "Netherland",
      ShortUrl: "https://shorturl.at/vTVX9",
    },
    {
      jobTitle: "Stukadoor/Spackspuiter",
      teaser:
        "Ben jij de vakman die met passie het stucwerk aanbrengt op muren, wanden, plafonds en gevels en die ook nog kan spackspuiten? Versta jij je vak en zorg je graag voor verfraaiing en bescherming van het.",
      jobDetail: (
        <div className="max-w-xl mx-auto">
          <details className="open:bg-white dark:open:bg-slate-900   open:shadow-lg p-6 rounded-lg">
            <summary className="cursor-pointer text-sm leading-6 text-slate-900 dark:text-white font-semibold select-none">
              Job Details
            </summary>
            <div className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
              <>
                <p>
                  Ben jij de vakman die met passie het stucwerk aanbrengt op
                  muren, wanden, plafonds en gevels en die ook nog kan
                  spackspuiten? Versta jij je vak en zorg je graag voor
                  verfraaiing en bescherming van het interieur? Dan willen wij
                  jou! Onze opdrachtgever uit de omgeving van Gouda zijn we op
                  zoek naar een Stukadoor.
                  <br />
                  <br />
                  Je gaat aan de slag met het voorbereiden van het oppervlak,
                  het voorstrijken van de ondergrond, het aanbrengen van de
                  mortel op het oppervlak en het gladmaken van het oppervlak.
                  Pleisterwerk en sierpleister ben je in huis en het is
                  belangrijk dat je brede ervaring hebt met nieuwbouw,
                  renovatie, binnen- en buitenwerk en lijstwerk.
                  <br />
                  <br />
                  Is dit voor jou gesneden koek? Lees dan snel verder of je aan
                  de vereisten voldoet!
                </p>
                <h3>Wat wij bieden</h3>
                <p></p>
                <h3>Wat wij vragen</h3>
                <ul>
                  <li>
                    Je hebt ervaring met het voorbereiden van het oppervlak, het
                    voorstrijken van de ondergrond, het aanbrengen van de mortel
                    op het oppervlak en het gladmaken van het oppervlak.
                  </li>
                  <li>
                    Je bent in het bezit van een VCA certificaat of bereid deze
                    te behalen.
                  </li>
                  <li>
                    Je bent in het bezit van een rijbewijs B en beschikt bij
                    voorkeur over eigen vervoer.
                  </li>
                  <li>Je beheerst de Nederlandse taal</li>
                  <li>Je bent per direct beschikbaar</li>
                </ul>
                <h3>Over het bedrijf</h3>
                <p></p>
              </>
            </div>
          </details>
        </div>
      ),
      city: "Amsterdam",
      country: "Netherland",
      ShortUrl: "https://shorturl.at/kCFP7",
    },
  ];
  return (
    <main className="min-h-screen my-10 flex flex-col justify-center items-center bg-white font-sans antialiased overflow-x-hidden overflow-y-auto">
      {Data.map((item: DataType, index: number) => {
        return (
          <Board
            key={index}
            jobTitle={item.jobTitle}
            jobDetail={item.jobDetail}
            ShortUrl={item.ShortUrl}
            city={item.city}
            country={item.country}
            teaser={item.teaser}
          />
        );
      })}
    </main>
  );
}
