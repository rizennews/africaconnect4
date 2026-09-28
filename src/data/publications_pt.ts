import { Publication, Folder } from './publications';

export const allFilesPt: Publication[] = [
  {
    id: '1',
    tag: 'CONSULTORIA',
    title: 'TdR - Consultoria para modelagem de orçamento de água e energia baseada em GPUHPC_WACREN.pdf',
    date: '31 Ago 2026',
    size: '253 KB',
    category: 'Consultoria',
    path: '/documents/consultancy/ToR- Consultancy for GPUHPC-Based Water and Energy Budget Modelling_WACREN.pdf'
  },
  {
    id: '2',
    tag: 'MAPAS',
    title: 'Cronograma WACREN.mp4',
    date: '31 Ago 2026',
    size: '47.5 MB',
    category: 'Mapas',
    path: '/documents/maps/WACREN Timeline.mp4'
  }
];

export const foldersPt: Folder[] = [
  { name: 'Apresentações', count: 0 },
  { name: 'Consultoria', count: 1 },
  { name: 'Mapas', count: 1 }
];
