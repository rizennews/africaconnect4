export type ProcurementStatus = 'Open' | 'Closed' | 'Awarded';

export interface ProcurementDocument {
  title: string;
  type: string;
  size: string;
  url: string;
}

export interface ProcurementOpportunity {
  id: string;
  category: string;
  title: string;
  deadline: string;
  budget?: string;
  status: ProcurementStatus;
  description?: string;
  documents?: ProcurementDocument[];
}

export const MOCK_OPPORTUNITIES: ProcurementOpportunity[] = [
  {
    id: 'WACREN-2026-003',
    category: 'Consultancy', // Mapped to closest sidebar category from "Professional Services"
    title: 'Cybersecurity Assessment Services',
    deadline: '20 Feb 2026',
    budget: '$30,000 - $45,000',
    status: 'Open',
    description: 'Comprehensive cybersecurity assessment for regional nodes. The selected consultant will be responsible for conducting vulnerability assessments, penetration testing, and reviewing the existing security architecture to ensure compliance with international standards.',
    documents: [
      { title: 'Terms of Reference (ToR)', type: 'PDF', size: '2.4 MB', url: '#' },
      { title: 'Application Form', type: 'DOCX', size: '1.1 MB', url: '#' }
    ]
  },
  {
    id: 'WACREN-2026-002',
    category: 'Network Equipment',
    title: 'Fiber Optic Cables and Equipment Supply',
    deadline: '15 Mar 2026',
    budget: '$200,000 - $300,000',
    status: 'Open',
    description: 'Supply of high-capacity fiber optic cables, transceivers, and related networking equipment for the expansion of the regional backbone. Vendors must provide equipment that is compatible with our existing infrastructure.',
    documents: [
      { title: 'Technical Specifications', type: 'PDF', size: '4.5 MB', url: '#' },
      { title: 'Bidding Document', type: 'PDF', size: '1.8 MB', url: '#' },
      { title: 'Bill of Quantities', type: 'XLSX', size: '850 KB', url: '#' }
    ]
  },
  {
    id: 'WACREN-2026-001',
    category: 'Consultancy',
    title: 'Network Infrastructure Design Consultancy',
    deadline: '28 Feb 2026',
    budget: '$50,000 - $75,000',
    status: 'Open',
    description: 'Seeking a highly qualified consultancy firm to design the next phase of our network infrastructure. The design should account for future scalability, high availability, and integration with partner networks.',
    documents: [
      { title: 'Terms of Reference (ToR)', type: 'PDF', size: '2.1 MB', url: '#' },
      { title: 'Submission Guidelines', type: 'PDF', size: '500 KB', url: '#' }
    ]
  },
  {
    id: 'WACREN-2025-098',
    category: 'Consultancy',
    title: 'Previous Year Audit Services',
    deadline: '31 Dec 2025',
    budget: '$20,000 - $30,000',
    status: 'Closed',
    description: 'Annual financial audit services for the preceding fiscal year. The auditing firm must be certified and have experience with non-profit regional organizations.',
    documents: [
      { title: 'Audit Requirements', type: 'PDF', size: '1.2 MB', url: '#' }
    ]
  },
];

export const MOCK_AWARDS: ProcurementOpportunity[] = [
  {
    id: 'WACREN-2025-098',
    category: 'Consultancy',
    title: 'Previous Year Audit Services',
    deadline: '31 Dec 2025',
    budget: '$20,000 - $30,000',
    status: 'Closed',
    description: 'Annual financial audit services for the preceding fiscal year. The auditing firm must be certified and have experience with non-profit regional organizations.',
  },
  {
    id: 'WACREN-2026-003',
    category: 'Consultancy',
    title: 'Cybersecurity Assessment Services',
    deadline: '20 Feb 2026',
    budget: '$30,000 - $45,000',
    status: 'Closed',
    description: 'Comprehensive cybersecurity assessment for regional nodes. The selected consultant will be responsible for conducting vulnerability assessments, penetration testing, and reviewing the existing security architecture to ensure compliance with international standards.',
  },
  {
    id: 'WACREN-2026-002',
    category: 'Network Equipment',
    title: 'Fiber Optic Cables and Equipment Supply',
    deadline: '15 Mar 2026',
    budget: '$200,000 - $300,000',
    status: 'Closed',
    description: 'Supply of high-capacity fiber optic cables, transceivers, and related networking equipment for the expansion of the regional backbone. Vendors must provide equipment that is compatible with our existing infrastructure.',
  },
  {
    id: 'WACREN-2026-001',
    category: 'Consultancy',
    title: 'Network Infrastructure Design Consultancy',
    deadline: '28 Feb 2026',
    budget: '$50,000 - $75,000',
    status: 'Closed',
    description: 'Seeking a highly qualified consultancy firm to design the next phase of our network infrastructure. The design should account for future scalability, high availability, and integration with partner networks.',
  }
];
