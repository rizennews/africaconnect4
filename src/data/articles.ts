export interface ArticleData {
  slug: string;
  id: string;
  category: 'News' | 'Blog' | 'Event';
  tags: string[];
  date: string;
  readTime: string;
  title: string;
  author: {
    name: string;
    avatar: string;
    role?: string;
  };
  image: string;
  cutoutPosition?: 'bottom' | 'top';
  timestamp: number;
  tableOfContents: {
    id: string;
    title: string;
  }[];
  content: {
    intro: string;
    sections: {
      id?: string;
      heading?: string;
      image?: string;
      quote?: { text: string; author: string };
      paragraphs: string[];
    }[];
    cta?: {
      label: string;
      linkText: string;
      url: string;
    };
  };
}

export const ARTICLES: ArticleData[] = [
  {
    slug: 'women-in-wacren-climate-innovation-lab',
    id: '1',
    category: 'Blog',
    tags: ['Blog', 'Event'],
    date: 'Aug 18, 2026',
    readTime: '2 Min Read',
    title: "Women-in-WACREN to launch a new forum and a lab to enhance women's contribution to climate innovation in Africa",
    author: {
      name: 'Kwaku Effah Amponsah',
      avatar: '/authors/Kwaku Effah Amponsah.png',
      role: 'Communications Lead'
    },
    image: '/blog/WIW Network poster.jpg',
    cutoutPosition: 'bottom',
    timestamp: 1787097600000,
    tableOfContents: [
      {
        id: 'climate-innovation-lab-2026',
        title: 'Climate Innovation Lab 2026'
      }
    ],
    content: {
      intro: "Building on the legacy of previous Women-in-WACREN (WiW) initiatives, WACREN is pleased to announce the next major milestone for women's inclusion in regional climate science and innovation: the Women-in-WACREN Network.",
      sections: [
        {
          paragraphs: [
            'The WiW Network online launch scheduled for August 25, 2026, will focus on the theme: "Connecting Women and Building Solutions". This vibrant network builds on past milestones, creating a sustainable regional platform where women in STEM, research, and technology can connect, exchange knowledge, and access long-term mentorship. Whether members are students, early-career researchers, or tech entrepreneurs, this forum is designed to bridge disciplinary boundaries and accelerate collective impact across West and Central Africa.'
          ]
        },
        {
          id: 'climate-innovation-lab-2026',
          heading: 'Climate Innovation Lab 2026',
          paragraphs: [
            'Alongside this Network launch, the virtual event will formally introduce the ‘Climate Innovation Lab 2026 ’- a structured, collaborative innovation programme that would strengthen women’s technical skills in designing practical digital solutions that address pressing regional climate challenges. Participants will learn how the programme guides them from initial problem identification through prototype development to ongoing mentorship.'
          ]
        },
        {
          image: '/blog/WIW Network poster.jpg',
          paragraphs: [
            'With support from the European Commission through AfricaConnect4, WACREN continues to unlock the potential of women in research and education. Join us for this transformative virtual launch to expand your network, elevate your skills, and help shape a sustainable future for African science and technology.'
          ]
        }
      ],
      cta: {
        label: '',
        linkText: 'Register here',
        url: 'https://wacren.zoom.us/meeting/register/FYmtU0JnSNy8138x8Zkluw'
      }
    }
  },
  {
    slug: 'wacren-nren-academy-2026-sustainability',
    id: '2',
    category: 'Event',
    tags: ['Event', 'NREN'],
    date: 'August 20, 2026',
    readTime: '1 Min Read',
    title: 'WACREN NREN Academy 2026 to strengthen NRENs for long-term sustainability',
    author: {
      name: 'Kwaku Effah Amponsah',
      avatar: '/authors/Kwaku Effah Amponsah.png',
      role: 'Communications Lead'
    },
    image: '/blog/NREN-Academy-poster_v1.jpg',
    cutoutPosition: 'bottom',
    timestamp: 1786147200000,
    tableOfContents: [
      {
        id: 'nren-academy-2026',
        title: 'WACREN NREN Academy 2026'
      }
    ],
    content: {
      intro: 'WACREN is excited to announce the 2026 WACREN NREN Academy, a key forum designed to help National Research and Education Networks (NRENs) boost their national impact and ensure long-term sustainability.',
      sections: [
        {
          id: 'nren-academy-2026',
          heading: 'Focus and Structure',
          paragraphs: [
            'The 2026 Academy will focus on turning strategic plans into practical, scalable results. The program blends maturity assessments with hands-on business modelling tools to help develop viable, affordable services that can be used nationally and expanded across the region.',
            'Participants will collaborate to improve business cases, explore service pricing, and track progress using the new NREN Performance Dashboard. The Academy also launches the Monthly NREN Clinic Series, a regular platform for ongoing support, peer feedback, and shared learning during the AfricaConnect project.'
          ]
        }
      ],
      cta: {
        label: '',
        linkText: 'Find out more',
        url: 'https://indico.wacren.net/event/265/'
      }
    }
  },
  {
    slug: 'president-gambia-open-wacren-2026',
    id: '3',
    category: 'News',
    tags: ['News', 'Conference'],
    date: 'August 22, 2026',
    readTime: '2 Min Read',
    title: 'President of The Gambia to open WACREN 2026 Conference in Banjul',
    author: {
      name: 'Kwaku Effah Amponsah',
      avatar: '/authors/Kwaku Effah Amponsah.png',
      role: 'Communications Lead'
    },
    image: '/blog/Gambia-President-poster.jpg',
    cutoutPosition: 'top',
    timestamp: 1784678400000,
    tableOfContents: [
      {
        id: 'presidential-opening',
        title: 'Presidential Opening & GAMREN Launch'
      }
    ],
    content: {
      intro: 'The President of the Republic of The Gambia, His Excellency Mr Adama Barrow, will officially open the WACREN 2026 Conference as the special guest of honour. The President will also formally launch the Gambia Research and Education Network (GAMREN). The involvement of the Presidency highlights the value of WACREN and GAMREN in revolutionising research, science and innovation in the Republic of The Gambia.',
      sections: [
        {
          id: 'presidential-opening',
          heading: 'Expanding the Regional Ecosystem',
          paragraphs: [
            'The launch of GAMREN marks the expansion of this regional ecosystem, strengthening WACREN’s mission to connect national systems into a trusted, globally integrated research and education space.',
            'WACREN 2026, hosted by GAMREN, will convene NRENs, university leaders, policymakers, technologists, researchers, development partners, and private sector actors to advance dialogue on resilient digital infrastructure, federated identity, cybersecurity, Open Science, AI for digital education, climate research infrastructure, and digital sovereignty.',
            'The event will also welcome distinguished ministers of state, including the Honourable Professor Pierre Gomez, the Minister of Higher Education, Research, Science and Technology (MoHERST), and H.E. Dr. Aminata Zerbo/Sabané, the Minister of Digital Transition, Posts and Electronic Communications, Burkina Faso. Representatives from the European Union Delegation, diplomatic missions in The Gambia, government agencies, and important development partners will also attend.',
            'The Conference is funded by the European Commission through the AfricaConnect programme under its Global Gateway initiative, reinforcing long-standing Africa–Europe cooperation in building trusted, high-performance research and education infrastructure.'
          ]
        }
      ]
    }
  },
  {
    slug: 'wacren-opens-early-bird-registration-2026',
    id: '4',
    category: 'News',
    tags: ['News', 'Conference'],
    date: 'August 24, 2026',
    readTime: '1 Min Read',
    title: 'WACREN opens Early Bird Registration for 2026 Conference',
    author: {
      name: 'Kwaku Effah Amponsah',
      avatar: '/authors/Kwaku Effah Amponsah.png',
      role: 'Communications Lead'
    },
    image: '/blog/WACREN-2026-poster.jpeg',
    cutoutPosition: 'bottom',
    timestamp: 1782864000000,
    tableOfContents: [
      {
        id: 'registration-details',
        title: 'Registration & Payment Methods'
      }
    ],
    content: {
      intro: 'WACREN is pleased to announce the opening of Early Bird Registration for the 2026 annual conference slated for March 26 and 27 in Banjul.',
      sections: [
        {
          id: 'registration-details',
          heading: 'Registration Details',
          paragraphs: [
            '• Registrants residing in Africa pay – $100 (for Conference sessions and catering only)',
            '• Registrants residing outside Africa pay – $150 (for Conference sessions and catering only)',
            'You can pay for registration using one of the following methods:',
            '• Credit/Debit Card – Pay securely online.',
            '• Bank Transfer – After making the transfer, please send a confirmation email to conf2026@wacren.net.',
            'Register now, enjoy the discount and join us in Banjul to engage in insightful exchanges to advance research and education in Africa.'
          ]
        }
      ],
      cta: {
        label: '',
        linkText: 'Register now',
        url: 'https://wacren2026.wacren.net/register'
      }
    }
  },
  {
    slug: 'africaconnect-40-million-boost',
    id: '5',
    category: 'News',
    tags: ['News', 'Funding', 'Connectivity'],
    date: 'August 31, 2026',
    readTime: '10 Min Read',
    title: 'AfricaConnect receives €40 million boost from the EU to expand digital infrastructure for Research and Education in Sub-Saharan Africa',
    author: {
      name: 'Kwaku Effah Amponsah',
      avatar: '/authors/Kwaku Effah Amponsah.png',
      role: 'Communications Lead'
    },
    image: '/blog/AfricaConnect receives €40 million boost from the EU.jpg',
    cutoutPosition: 'bottom',
    timestamp: 1782864000000,
    tableOfContents: [
      { id: 'introduction', title: 'Enhancing Digital Connectivity' },
      { id: 'nren', title: 'What is a Research and Education Network?' },
      { id: 'strategic-partnerships', title: 'Strategic Partnerships' },
      { id: 'objectives', title: 'AfricaConnect’s Vision' },
      { id: 'quotes', title: 'Partner Statements' }
    ],
    content: {
      intro: 'The European Union (EU) has granted an additional €40 million for the AfricaConnect project, under the EU’s Global Gateway Strategy, aimed at enhancing digital connectivity and research capabilities across Sub-Saharan Africa. The fourth phase has officially begun and the implementation has started.',
      sections: [
        {
          id: 'introduction',
          paragraphs: [
            'Following the strong foundation laid by the previous AfricaConnect phases since the start of the project in 2011, this latest project iteration takes a significant leap forward in enhancing the digital infrastructure for research and education (R&E) communities across Sub-Saharan Africa. Within a four-year term, AfricaConnect’s newest chapter is dedicated to improving access to high-speed connectivity and deepening global collaboration to better support research, education, and innovation. It also responds to the growing needs to accelerate digital education and capacity building, ensuring that students, researchers and educators can fully benefits from reliable connectivity, robust data platforms and accessible digital tools.',
            'The project aims to enhance the capacity and sustainability of Regional and National Research and Education Networks (RRENs and NRENs) in Sub-Saharan Africa. By providing affordable, high-speed connectivity, data infrastructures and services, they are key enablers of digital transformation as a vital component in tackling complex human challenges. To further strengthen this ecosystem, the project introduces a new national pilot to complement AfricaConnect’s established regional approach. This pilot will support last-mile connectivity, including the extension and upgrade of campus networks across the UbuntuNet Alliance region. As NRENs face diverse country-specific challenges and varying delivery capacities, this comprehensive national support package will help demonstrate the value of NRENs, increase capacity absorption, and better meet end-users’ growing connectivity and digital service needs.',
            'In addition, AfricaConnect4 introduces a climate data infrastructure initiative within the West and Central African Research and Education Network (WACREN) region, including LoRaWAN-based environmental monitoring, federated HPC resources for climate modelling, and enablement of EUMETCast terrestrial services. Together, these strengthen regional capacity for data collection, analysis, forecasting, and evidence-based decision-making.'
          ]
        },
        {
          id: 'nren',
          heading: 'What is a research and education network?',
          paragraphs: [
            'A National Research and Education Network (NREN) is a dedicated internet infrastructure and service provider to the research and educational communities within a country. NRENs provide connectivity and services to higher education establishments, i.e. universities, and research institutes, but can also support schools, libraries, museums, and teaching hospitals. The real value of NRENs goes beyond reduced bandwidth prices, in that they offer more than just network services – providing a diversified ICT services portfolio that enables resource access and global science collaboration, while also advocating for optimized ICT tools tailored to the needs of research and education. There are 38 established NRENs in the African continent. Regional Research and Education Networks (RRENs) connect NRENs at regional level and link them to R&E networks worldwide.'
          ]
        },
        {
          id: 'strategic-partnerships',
          heading: 'Strategic partnerships',
          paragraphs: [
            'AfricaConnect follows a regional approach, with activities carried out in Eastern and Southern Africa by the UbuntuNet Alliance, and in West and Central Africa by WACREN. GÉANT, the pan-European research and education network, will play an advisory role, offering expertise in network management, service development, and capacity building. This collaborative effort will maximize synergies across regions, fostering cross-border research collaborations and advancing digital transformation in Africa.',
            'NORDUnet, the collaboration between NRENs from the five Nordic countries, will support WACREN through service development and NREN sustainability workshops.',
            'For the first time, the project will test also some specific in-country connectivity support. The project will benefit from the expertise and experience of international partners such as Expertise France, the Institut de Recherche pour le Développement (IRD) and the Agence Universitaire de la Francophonie (AUF), particularly in expanding digital infrastructure and connectivity across higher education and research institutions in selected West African countries. In the current phase, Expertise France, IRD and AUF will continue their efforts to upgrade campus networks and enhance access to digital resources, facilitating international collaboration in research and education. Similarly, UbuntuNet Alliance will work with some member NRENs in selected countries to support the upgrade or extension of campus networks and the uptake of NREN-provided digital services.'
          ]
        },
        {
          id: 'objectives',
          heading: 'AfricaConnect’s vision for connectivity and education',
          paragraphs: [
            'The AfricaConnect project is designed to achieve the following objectives:',
            '• making R&E networks more inclusive: strengthening regional and national networks by improving their governance and operational capacity, increasing global visibility, and boosting inclusivity and participation in the digital economy through initiatives like annual women’s hackathon focusing on green innovation.',
            '• advancing internet connectivity infrastructure: focusing on developing and maintaining robust international backbones with a particular attention to green technologies and addressing last-mile connectivity issues by expanding national connectivity access in selected countries.',
            '• strengthening digital services: developing cloud-based e-infrastructure that enables researchers to store and share data securely, supporting the Open Science movement and climate change research. On top of key services such as Eduroam for easy internet access, additional services to support e-learning uptake will be promoted.',
            '• enhancing e-learning and digital teaching capacities: training university lecturers to design, develop, and deliver online courses, including the production of pedagogical video capsules, in order to enhance access to learning and support the effective follow-up of online courses for thousands of students.'
          ]
        },
        {
          image: '/blog/AfricaConnect receives €40 million boost from the EU.jpg',
          paragraphs: [
            'Over the years, African RENs have significantly enhanced connectivity, data infrastructures, and e-services, including Moodle, eduroam, videoconferencing, identity federation, open science platforms, as well as cybersecurity, for over 3,000 institutions and over 9 million users across the R&E sector.',
            'RRENs and NRENs are now officially recognised as crucial drivers of human-centric digital transformation for research and education communities, fostering scientific and academic collaboration, and are valuable partners in advancing the EU’s objectives in digitalisation, science, technology, and innovation under the EU Global Gateway Strategy.',
            'In conclusion, the EU’s latest financial support for the AfricaConnect project marks a major advancement in the technological evolution of Africa’s R&E sector.',
            'To read about the success and activities carried out during the previous phases of the project, visit africaconnect3.net'
          ]
        },
        {
          id: 'quotes',
          quote: {
            text: 'As we transition from AfricaConnect3 to AfricaConnect4, we do so with a deep sense of pride in how far we have come. Over the successive AfricaConnect projects, we have strengthened Africa’s research and education networks, expanded cross-border collaboration, and laid critical digital foundations that support innovation, learning, and scientific excellence across the continent. AfricaConnect4 is not just a continuation of this journey, it is an opportunity to build higher, connect deeper, and ensure that Africa’s research and education community is fully positioned to thrive in a rapidly evolving global digital ecosystem.',
            author: 'Prof. Madara Ogot, CEO of the UbuntuNet Alliance'
          },
          paragraphs: []
        },
        {
          image: '/blog/WACREN-CEO-AC4-announcement-250x300.jpg',
          quote: {
            text: 'For WACREN, AfricaConnect represents a shared commitment to place African research and education communities at the heart of global knowledge creation. This new phase strengthens our resolve to ensure that our communities in West and Central Africa are not only connected, but fully equipped to collaborate, innovate, and contribute solutions to global challenges. It is about building inclusive digital pathways that unlock Africa’s intellectual potential with a sovereign digital future.',
            author: 'Dr. Eyouléki T. G. Palanga, CEO of WACREN'
          },
          paragraphs: []
        },
        {
          image: '/blog/kick-off-AC4-screenshot-1-768x425.png',
          quote: {
            text: 'The AfricaConnect project demonstrates the power of long-term, trust-based collaboration between the Europe and Africa’s research and education communities, and it is the perfect example of how the EU’s Global Gateway strategy translates into meaningful impact. GÉANT is proud to continuously support the UbuntuNet Alliance and WACREN in acquiring connectivity for their NRENs. Witnessing the journey of the exponential expansion of Africa’s research and education networks, GÉANT will continue to advocate for affordable, adequate and sufficient connectivity and digital services for all researchers, students, professors worldwide enabling long-lasting scientific collaboration to address global challenges.',
            author: 'Lise Fuhr, CEO of GÉANT'
          },
          paragraphs: []
        },
        {
          quote: {
            text: 'AfricaConnect4 marks a new milestone in strengthening digital connectivity for Africa’s research and education communities, building on more than a decade of progress since 2011. Expertise France is proud to continue supporting this long-term partnership alongside key partners such as the IRD and the AUF, by helping upgrade campus networks, improve access to digital resources and boosting e-learning activities, enabling universities and research institutions in Togo, Benin and Ivory Coast to collaborate across. This new phase is a strong step toward a more inclusive, resilient and sustainable digital future for Sub-Saharan Africa.',
            author: 'Cassilde BRENIERE, Operations Director, EF'
          },
          paragraphs: []
        },
        {
          quote: {
            text: 'AfricaConnect Digital Campus fully embodies IRD’s mission: to produce and share knowledge for sustainable development, with and for countries of the Global South. With decades of presence and scientific collaboration in West Africa, alongside universities and research institutions, we are convinced that strengthening digital infrastructure is an essential lever for African researchers and students to contribute, on equal terms, to global science.',
            author: 'Damien ALLINE, Institut de Recherche pour le Développement (IRD)'
          },
          paragraphs: []
        },
        {
          quote: {
            text: 'For the Agence Universitaire de la Francophonie, AfricaConnect Digital Campus embodies a strategic commitment to harness e-learning as a powerful driver of inclusive and sustainable higher education. By expanding distance learning, we reduce environmental footprints while widening access to quality education, particularly for women and underrepresented groups. Central to this vision is the strengthening of teachers’ capacities to design and deliver high-quality online courses, alongside the development of vibrant communities of practice that foster collaboration, innovation, and shared pedagogical expertise across the Francophone academic space.',
            author: 'Modou DIOUF, Senior Project Manager, Agence Universitaire de la Francophonie'
          },
          paragraphs: []
        },
        {
          quote: {
            text: 'NORDUnet is very keen to continue supporting WACREN in the context of above-the-net value-added services, recognizing that diversifying and strengthening its service portfolio is key to the success of an NREN. In particular, NORDUnet will assist WACREN in transitioning to an open-source video platform for digital education. Furthermore, through the WACREN NREN Academy, our support will extend to CEO workshops, with a focus on enhancing the sustainability of NRENs in West and Central Africa.',
            author: 'Erik Kikkenborg, Chief Collaboration Officer at NORDUnet'
          },
          paragraphs: []
        }
      ]
    }
  },

];
