export interface Publication {
  id: string;
  tag: string;
  title: string;
  date: string;
  size: string;
  category: string;
  path: string;
}

export interface Folder {
  name: string;
  count: number;
}

export const allFiles: Publication[] = [
  {
    id: '1',
    tag: 'CONSULTANCY',
    title: 'ToR- Consultancy for GPUHPC-Based Water and Energy Budget Modelling_WACREN.pdf',
    date: 'Aug 31, 2026',
    size: '253 KB',
    category: 'Consultancy',
    path: '/documents/consultancy/ToR- Consultancy for GPUHPC-Based Water and Energy Budget Modelling_WACREN.pdf'
  },
  {
    id: '2',
    tag: 'MAPS',
    title: 'WACREN Timeline.mp4',
    date: 'Aug 31, 2026',
    size: '47.5 MB',
    category: 'Maps',
    path: '/documents/maps/WACREN Timeline.mp4'
  }
];

export const folders: Folder[] = [
  { name: 'Presentations', count: 0 },
  { name: 'Consultancy', count: 1 },
  { name: 'Maps', count: 1 }
];
