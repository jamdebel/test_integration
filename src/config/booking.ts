import { addHours, setHours, setMinutes } from 'date-fns';

export const timeSlots = [
  {
    id: 'morning',
    label: 'Matin',
    time: '8h-13h',
    value: {
      start: setHours(setMinutes(new Date(), 0), 8),
      end: setHours(setMinutes(new Date(), 0), 13),
    },
  },
  {
    id: 'afternoon',
    label: 'Après-midi',
    time: '14h-18h',
    value: {
      start: setHours(setMinutes(new Date(), 0), 14),
      end: setHours(setMinutes(new Date(), 0), 18),
    },
  },
];

export const services = [
  {
    id: 'standard',
    name: 'Session Standard',
    prices: [
      {
        id: 'basic',
        label: 'Sans les produits d\'entretien',
        amount: 150,
      },
      {
        id: 'with-products',
        label: 'Avec les produits inclus',
        amount: 200,
      },
    ],
  },
  {
    id: 'grand',
    name: 'Grand Ménage',
    prices: [
      {
        id: 'full-day',
        label: 'Pour une journée complète',
        amount: 500,
        includes: [
          'Shampouinage de vos tapis et tissus d\'ameublement',
          'Nettoyage complet de votre vaisselle',
          'Nettoyage de vos murs',
        ],
      },
    ],
  },
];