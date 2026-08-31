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
    readTime: '7 Min Read',
    title: "Women-in-WACREN to launch a new forum and a lab to enhance women's contribution to climate innovation in Africa",
    author: {
      name: 'Padmore Aning',
      avatar: '/africaconnect4.png',
      role: 'Communications Lead'
    },
    image: '/africaconnect4.png',
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
            'Alongside this Network launch, the virtual event will formally introduce the ‘Climate Innovation Lab 2026’ – a structured, collaborative innovation programme that would strengthen women’s technical skills in designing practical digital solutions that address pressing regional climate challenges. Participants will learn how the programme guides them from initial problem identification through prototype development to ongoing mentorship.',
            'With support from the European Commission through AfricaConnect4, WACREN continues to unlock the potential of women in research and education. Join us for this transformative virtual launch to expand your network, elevate your skills, and help shape a sustainable future for African science and technology.'
          ]
        }
      ],
      cta: {
        label: 'Register here: ',
        linkText: 'https://wacren.zoom.us/meeting/register/FYmtUOJnSNy8138x8ZkIuw',
        url: 'https://wacren.zoom.us/meeting/register'
      }
    }
  },
  {
    slug: 'high-speed-cross-border-backbone-live',
    id: '2',
    category: 'News',
    tags: ['News', 'Connectivity'],
    date: 'August 7, 2026',
    readTime: '5 Min Read',
    title: 'High-speed Cross-border Backbone Link Goes Live Across 4 West African States',
    author: {
      name: 'Dr. Boubakar Barry',
      avatar: '/africaconnect4.png',
      role: 'CEO, WACREN'
    },
    image: '/hero_image.jpg',
    cutoutPosition: 'bottom',
    timestamp: 1786147200000,
    tableOfContents: [
      {
        id: 'backbone-expansion',
        title: 'Interconnecting National Research Networks'
      }
    ],
    content: {
      intro: 'A landmark milestone has been reached under AfricaConnect4 as the high-capacity optical fiber link connecting Togo, Benin, Ghana, and Nigeria is fully operational.',
      sections: [
        {
          id: 'backbone-expansion',
          heading: 'Interconnecting National Research Networks',
          paragraphs: [
            'This deployment cuts latency by over 60% and increases inter-university bandwidth ten-fold, enabling seamless collaborative scientific computation and big data exchange between African institutions and the global research community.'
          ]
        }
      ]
    }
  },
  {
    slug: 'climate-satellite-data-portals',
    id: '3',
    category: 'Blog',
    tags: ['Blog', 'Climate'],
    date: 'July 21, 2026',
    readTime: '8 Min Read',
    title: 'Harnessing Climate & Satellite Data: Empowering Regional Agrometeorology Hubs',
    author: {
      name: 'Ousmane Diawara',
      avatar: '/africaconnect4.png',
      role: 'Climate Data Specialist'
    },
    image: '/africaconnect4.png',
    cutoutPosition: 'top',
    timestamp: 1784678400000,
    tableOfContents: [
      {
        id: 'satellite-reception',
        title: 'EUMETCast Station Deployments'
      }
    ],
    content: {
      intro: 'Access to real-time meteorological observations is transforming how West African farmers and researchers respond to erratic seasonal patterns.',
      sections: [
        {
          id: 'satellite-reception',
          heading: 'EUMETCast Station Deployments',
          paragraphs: [
            'Through ground station infrastructure deployed under AC4, researchers receive continuous high-resolution climate telemetry, empowering localized predictive modeling and drought early-warning systems.'
          ]
        }
      ]
    }
  },
  {
    slug: 'wacren-annual-conference-2026',
    id: '4',
    category: 'Event',
    tags: ['Event', 'Conference'],
    date: 'June 30, 2026',
    readTime: '4 Min Read',
    title: 'WACREN Annual Conference 2026: Connecting the African Knowledge Economy',
    author: {
      name: 'Padmore Aning',
      avatar: '/africaconnect4.png',
      role: 'Communications Lead'
    },
    image: '/africaconnect4.png',
    cutoutPosition: 'bottom',
    timestamp: 1782864000000,
    tableOfContents: [
      {
        id: 'conference-tracks',
        title: 'Key Thematic Tracks'
      }
    ],
    content: {
      intro: 'The premier annual gathering of NREN leaders, researchers, university vice-chancellors, and policymakers converges to chart the digital future of African education.',
      sections: [
        {
          id: 'conference-tracks',
          heading: 'Key Thematic Tracks',
          paragraphs: [
            'Keynotes will address AI for development, open science repositories, cross-border trust and identity federations (eduGAIN), and building resilient campus network architectures.'
          ]
        }
      ]
    }
  },
  {
    slug: 'cybersecurity-soc-cert-network',
    id: '5',
    category: 'News',
    tags: ['News', 'Cybersecurity'],
    date: 'June 15, 2026',
    readTime: '6 Min Read',
    title: 'Cybersecurity Threat Intelligence: Launching the Regional SOC & CERT Network',
    author: {
      name: 'Security Operations Team',
      avatar: '/africaconnect4.png',
      role: 'WACREN SOC'
    },
    image: '/africaconnect4.png',
    cutoutPosition: 'bottom',
    timestamp: 1781568000000,
    tableOfContents: [
      {
        id: 'cert-coordination',
        title: 'Coordinated Defense Across NRENs'
      }
    ],
    content: {
      intro: 'A dedicated Security Operations Center (SOC) framework has been launched to protect university digital assets from emerging cyber threats.',
      sections: [
        {
          id: 'cert-coordination',
          heading: 'Coordinated Defense Across NRENs',
          paragraphs: [
            'By establishing CSIRT teams across participating member countries, AfricaConnect4 creates a collaborative umbrella for real-time threat intelligence sharing and incident mitigation.'
          ]
        }
      ]
    }
  },
  {
    slug: 'women-stem-hackathon-2026',
    id: '6',
    category: 'Event',
    tags: ['Event', 'STEM'],
    date: 'May 28, 2026',
    readTime: '5 Min Read',
    title: 'Women in STEM Regional Hackathon: Driving Digital Innovation in Higher Ed',
    author: {
      name: 'Padmore Aning',
      avatar: '/africaconnect4.png',
      role: 'Communications Lead'
    },
    image: '/africaconnect4.png',
    cutoutPosition: 'top',
    timestamp: 1780012800000,
    tableOfContents: [
      {
        id: 'hackathon-winners',
        title: 'Showcasing Groundbreaking Prototypes'
      }
    ],
    content: {
      intro: 'Over 200 female university students from across 12 countries convened virtually to build scalable solutions for agricultural monitoring and digital healthcare.',
      sections: [
        {
          id: 'hackathon-winners',
          heading: 'Showcasing Groundbreaking Prototypes',
          paragraphs: [
            'Teams presented working prototypes leveraging cloud compute and high-speed campus networks, earning mentorship placements with leading African and European tech hubs.'
          ]
        }
      ]
    }
  }
];
