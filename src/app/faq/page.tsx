import PageHero from '@/components/PageHero';
import FaqAccordion from '@/components/FaqAccordion';

export default function FAQPage() {
  return (
    <main>
      <PageHero 
        title="FAQ." 
        description="Frequently asked questions about the programme."
      />
      
      <section style={{ padding: '4rem 2rem', backgroundColor: '#fff' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          
          <FaqAccordion question="What is an NREN?">
            <p>
              Research and education organisations are major users of national and regional communication networks and services. A National Research and Education Network (NREN) is a dedicated internet infrastructure and service provider to the research and educational (R&E) communities within a country. NRENs provide connectivity and services to higher education establishments (typically universities) and research institutes, but can also support schools, further education colleges, libraries, museums, teaching hospitals and other public institutes. NRENs are a vital component in e-learning, e-science and e-research strategies as they bring a common approach to the coordination and deployment of national and international communication networks and services.
            </p>
          </FaqAccordion>

          <FaqAccordion question="How are NRENs different from internet service providers?">
            <p>
              An NREN is much more than just an Internet service provider (ISP). In countries where connectivity services are currently being established, such as some African countries, an NREN can act as a broker for its members by helping regroup the demand for internet connectivity and services nationally so that universities and research centres can create economies of scale and obtain preferential rates from ISPs.
            </p>
            <p>
              However, the real value of NRENs goes beyond reduced bandwidth prices, in that they are able to provide an advanced and diversified portfolio of ICT services specific to the needs of their members that conventional ISPs, such as eduroam, cloud services, SSO, eduGAIN or library databases, do not provide. The most visible service that NRENs offer is as operators of the national backbone that connects a country’s university campus networks to each other and to other research and education networks globally.
            </p>
          </FaqAccordion>

          <FaqAccordion question="What is AfricaConnect3?">
            <p>
              AfricaConnect3 is an EU co-funded pan-African connectivity project that aims to support the development and consolidation of regional research and education (R&E) networks across Africa. These networks provide access to dedicated, high-capacity internet connectivity and offer a gateway to global R&E collaborations through interconnections with the pan-European GÉANT network.
            </p>
          </FaqAccordion>

          <FaqAccordion question="How is AfricaConnect3 funded?">
            <p>
              The total budget for AfricaConnect3 is €37.5m for a period of four years from 16 November 2019, with €30m being contributed by the European Commission’s Directorate-General International Partnerships (DG INTPA). The remaining funds (€7.5m) are being provided by the African partners.
            </p>
          </FaqAccordion>

          <FaqAccordion question="What are the origins of AfricaConnect3?">
            <p>
              Co-funded by the European Union, AfricaConnect3 builds on the work carried out by AfricaConnect (2011-2015) and AfricaConnect2 (2015-2021) which contributed to support the creation, development and use of high-capacity research and education networks in Africa.
            </p>
            <p>
              During the first two phases of AfricaConnect, 20 countries were connected to the regional networks UbuntuNet Alliance, WACREN and ASREN, helping to create a regional gateway for collaborative research through interconnections with the pan-European network GÉANT.
            </p>
            <p>
              AfricaConnect3 sets out to extend this success story to the whole continent, thus accelerating the development of the Information Society in Africa and putting the entire continent on the global R&E networking map.
            </p>
          </FaqAccordion>

          <FaqAccordion question="Why do we need AfricaConnect3?">
            <p>
              AfricaConnect3 will greatly improve access for researchers, students and institutions to digital infrastructures and technologies, connecting Africa to unlimited possibilities. Specifically, the project will:
            </p>
            <ul>
              <li>Enhance human capital development through training programmes and events.</li>
              <li>Facilitate creative local solutions to global societal challenges such as diseases, natural disasters and climate change.</li>
              <li>Support the United Nations’ Sustainable Development Goals (SDGs), in areas such as education, health and well-being, water and sanitation and climate action.</li>
              <li>Narrow the digital divide by improving access to and reducing the cost of advanced, reliable internet connectivity for R&E.</li>
              <li>Enhance learning, knowledge and skills, as well as research and innovation capacities, particularly for women and youth.</li>
            </ul>
          </FaqAccordion>

          <FaqAccordion question="How is AfricaConnect3 organised?">
            <p>
              Conceived as a pan-African umbrella connectivity project, AfricaConnect3 adopts a modular approach adjusted to the geographical, cultural and organisational context of the African regions and their different stages in NREN development, as well as their sources of funding. AfricaConnect3 therefore comprises three geographical clusters managed by the respective regional networking organisations:
            </p>
            <ul>
              <li>Southern and Eastern Africa is managed by the UbuntuNet Alliance.</li>
              <li>Western and Central Africa is coordinated by WACREN.</li>
              <li>North Africa is coordinated by ASREN.</li>
            </ul>
          </FaqAccordion>

          <FaqAccordion question="Does AfricaConnect3 allow Africa to interconnect with other world regions?">
            <p>
              Yes. Previous phases of the project have already established direct connections to the pan-European GÉANT network from South and Eastern Africa via London and Amsterdam.
            </p>
            <p>
              AfricaConnect3 will continue to develop new direct connections from Africa to Europe, especially from West and Central Africa.
            </p>
            <p>
              Through GÉANT’s interconnections with other regional networks (from America to South-East Asia), the whole African continent will be fully connected to the global research and education community.
            </p>
          </FaqAccordion>

          <FaqAccordion question="Who are the project partners?">
            <p>
              AfricaConnect3 is structured in three geographical areas (or “clusters”). The local National Research and Education Networks (NRENs) grouped under each cluster are involved in the delivery of the project in their respective regions coordinated by the local RRENs:
            </p>
            <ul>
              <li>The UbuntuNet Alliance implements the project across Southern and Eastern Africa in partnership with the local NRENs (Cluster 1).</li>
              <li>WACREN delivers the project in West and Central Africa (Cluster 2).</li>
              <li>ASREN delivers the project in North Africa (Cluster 3).</li>
            </ul>
          </FaqAccordion>

          <FaqAccordion question="How long will AfricaConnect3 run?">
            <p>
              AfricaConnect3 will run for four years from November 2019.
            </p>
          </FaqAccordion>

          <FaqAccordion question="What plans are in place for networking after AfricaConnect3?">
            <p>
              AfricaConnect3 will consolidate the gains made so far in the previous phases of the project by further extending the reach of the regional R&E networks to connect more countries and upgrade the capacity of the core networks and set up a cloud infrastructure for open science. The project will also specifically focus on service applications, which include an open science cloud, network security, and trust and identity, as well as on capacity building and advocacy for research and education networking.
            </p>
            <p>
              Finally, the project will seek to maximise synergies between the 3 African RRENs in the context of connectivity, capacity building, and open science cloud at the continental level. As a result, R&E communities in Africa will be able to use the connected network infrastructures to foster collaborations in the context of other R&E projects, such as Erasmus+ and Horizon Europe.
            </p>
          </FaqAccordion>

          <FaqAccordion question="What activities will use this network?">
            <p>
              Any type of not-for-profit research and education activity can use the network. It is especially suited to data-intensive, bandwidth-hungry projects requiring reliable high-speed connectivity, but can equally be used to provide fast access to conventional web-based resources from all over Africa and other parts of the world.
            </p>
            <p>
              Specific research applications cover areas such as health, bi o-medical sciences, climate, agriculture, education and environment.
            </p>
          </FaqAccordion>

          <FaqAccordion question="How successful is the AfricaConnect3 project likely to be?">
            <p>
              AfricaConnect3 is building on the proven success of its predecessor networks, AfricaConnect and AfricaConnect2, and EUMEDCONNECT in the Mediterranean area, including North Africa.
            </p>
            <p>
              This new phase of the project aims at further extending the reach of the regional R&E networks in order to connect more countries and upgrade the capacity of the core networks as well as set up a cloud infrastructure for open science. The project will also focus specifically on service applications, which include an open science cloud, network security, and trust and identity, as well as on capacity building and advocacy for research and education networking.
            </p>
          </FaqAccordion>

          <FaqAccordion question="Why should research and education communities use AfricaConnect3?">
            <p>
              AfricaConnect3 delivers high-bandwidth connections that are free from the congestion and expense of commercial internet traffic. Once their host institution is connected, researchers, academics and students can benefit from advanced connectivity at no extra cost.
            </p>
          </FaqAccordion>

          <FaqAccordion question="How do I connect to AfricaConnect3?">
            <p>
              If you are an established or aspiring national research and education network (NREN) seeking to benefit from AfricaConnect3, the first step is to contact your regional networking organisation:
            </p>
            <ul>
              <li>UbuntuNet Alliance across Southern and Eastern Africa.</li>
              <li>WACREN in West and Central Africa.</li>
              <li>ASREN in North Africa.</li>
            </ul>
            <p>
              Click <a href="https://africaconnect3.net/regional-networking-organisations/" target="_blank" rel="noopener noreferrer">here</a> for contact details.
            </p>
            <p>
              If you are an education or research institution, please <a href="https://africaconnect3.net/partners/" target="_blank" rel="noopener noreferrer">contact your local NREN</a> to gain network access.
            </p>
          </FaqAccordion>

        </div>
      </section>
    </main>
  );
}
