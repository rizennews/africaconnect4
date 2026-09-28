import { Publication, Folder } from './publications';

export const allFilesFr: Publication[] = [
  {
    id: '1',
    tag: 'CONSULTANCE',
    title: 'TdR - Consultance pour la modélisation du bilan hydrique et énergétique basée sur GPUHPC_WACREN.pdf',
    date: '31 Août 2026',
    size: '253 KB',
    category: 'Consultance',
    path: '/documents/consultancy/ToR- Consultancy for GPUHPC-Based Water and Energy Budget Modelling_WACREN.pdf'
  },
  {
    id: '2',
    tag: 'CARTES',
    title: 'Chronologie WACREN.mp4',
    date: '31 Août 2026',
    size: '47.5 MB',
    category: 'Cartes',
    path: '/documents/maps/WACREN Timeline.mp4'
  }
];

export const foldersFr: Folder[] = [
  { name: 'Présentations', count: 0 },
  { name: 'Consultance', count: 1 },
  { name: 'Cartes', count: 1 }
];
