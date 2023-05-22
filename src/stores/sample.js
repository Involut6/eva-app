import { defineStore } from 'pinia'

export default function useSampleStore() {
  return defineStore('sample', {
    state: () => ({
      samples: [],
      selectedAnalysis: [],
      analysis: [
        {
            id: 1,
            title: 'Temperature',
            status: 'In progress',
        },
        {
           id: 2,
            title: 'Appearance',
            status: 'In progress',
        },
        {
           id: 3,
            title: 'Colour',
            status: 'In progress',
        },
        {
           id: 4,
            title: 'Conductivity',
            status: 'In progress',
        },
        {
           id: 5,
            title: 'TDS',
            status: 'In progress',
        },
        {
           id: 6,
            title: 'TSS',
            status: 'In progress',
        },
        {
           id: 7,
            title: 'Turbidity',
            status: 'In progress',
        },
        {
           id: 8,
            title: 'Salinity',
            status: 'In progress',
        },
        {
           id: 9,
            title: 'Dissolved Oxygen',
            status: 'In progress',
        },
        {
           id: 10,
            title: 'BOD',
            status: 'In progress',
        },
        {
           id: 11,
            title: 'COD',
            status: 'In progress',
        },
        {
           id: 12,
            title: 'Alkalinity',
            status: 'In progress',
        },
        {
           id: 13,
            title: 'Hardness',
            status: 'In progress',
        },
        {
           id: 14,
            title: 'Chloride',
            status: 'In progress',
        },
        {
           id: 15,
            title: 'Nitrate',
            status: 'In progress',
        },
        {
           id: 16,
            title: 'Sulphate',
            status: 'In progress',
        },
        {
           id: 17,
            title: 'Total Phosphorus',
            status: 'In progress',
        },
        {
           id: 18,
            title: 'Ammonia',
            status: 'In progress',
        },
        {
           id: 19,
            title: 'Total Nitrogen',
            status: 'In progress',
        },
        {
           id: 20,
            title: 'Sulphide',
            status: 'In progress',
        },
        {
           id: 21,
            title: 'Heavy metals',
            status: 'In progress',
        },
        {
           id: 22,
            title: 'TPH',
            status: 'In progress',
        },
        {
           id: 23,
            title: 'PAH',
            status: 'In progress',
        },
        {
           id: 24,
            title: 'BTEX',
            status: 'In progress',
        },
        {
           id: 25,
            title: 'Oil/Grease',
            status: 'In progress',
        },
        {
           id: 26,
            title: 'TCC',
            status: 'In progress',
        },
        {
           id: 27,
            title: 'E.Coli',
            status: 'In progress',
        },
        {
           id: 28,
            title: 'THUB',
            status: 'In progress',
        },
        {
           id: 29,
            title: 'THUF',
            status: 'In progress',
        },
        {
           id: 30,
            title: 'THB',
            status: 'In progress',
        },
        {
           id: 31,
            title: 'THF',
            status: 'In progress',
        },
        {
           id: 32,
            title: 'Odour',
            status: 'In progress',
        },
        {
            id: 33,
             title: 'Nitrite',
             status: 'In progress',

         },
        {
            id: 34,
             title: 'Phenol',
             status: 'In progress',

         },
         {
            id: 35,
             title: 'pH',
             status: 'In progress',

         },
         {
            id: 36,
             title: 'Phosphate',
             status: 'In progress',

         },
         {
            id: 37,
             title: 'Moisture-content',
             status: 'In progress',

         },
         {
            id: 38,
             title: 'TOM',
             status: 'In progress',

         },
         {
            id: 39,
             title: 'TOC',
             status: 'In progress',

         },
    ],
    clientList: []

    }),
    actions: {

    }
  })();
}
