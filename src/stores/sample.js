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
            status: '',
            analysisStatus: ['In progress', 'Completed']
        },
        {
           id: 2,
            title: 'Appearance',
            status: '',
            analysisStatus: ['In progress', 'Completed']
        },
        {
           id: 3,
            title: 'Colour',
            status: '',
            analysisStatus: ['In progress', 'Completed']
        },
        {
           id: 4,
            title: 'Conductivity',
            status: '',
            analysisStatus: ['In progress', 'Completed']
        },
        {
           id: 5,
            title: 'TDS',
            status: '',
            analysisStatus: ['In progress', 'Completed']
        },
        {
           id: 6,
            title: 'TSS',
            status: '',
            analysisStatus: ['In progress', 'Completed']
        },
        {
           id: 7,
            title: 'Turbidity',
            status: '',
            analysisStatus: ['In progress', 'Completed']
        },
        {
           id: 8,
            title: 'Salinity',
            status: '',
            analysisStatus: ['In progress', 'Completed']
        },
        {
           id: 9,
            title: 'Dissolved Oxygen',
            status: '',
            analysisStatus: ['In progress', 'Completed']
        },
        {
           id: 10,
            title: 'BOD 5',
            status: '',
            analysisStatus: ['In progress', 'Completed']
        },
        {
           id: 11,
            title: 'COD',
            status: '',
            analysisStatus: ['In progress', 'Completed']
        },
        {
           id: 12,
            title: 'Alkalinity',
            status: '',
            analysisStatus: ['In progress', 'Completed']
        },
        {
           id: 13,
            title: 'Hardness',
            status: '',
            analysisStatus: ['In progress', 'Completed']
        },
        {
           id: 14,
            title: 'Chloride',
            status: '',
            analysisStatus: ['In progress', 'Completed']
        },
        {
           id: 15,
            title: 'Nitrate',
            status: '',
            analysisStatus: ['In progress', 'Completed']
        },
        {
           id: 16,
            title: 'Sulphate',
            status: '',
            analysisStatus: ['In progress', 'Completed']
        },
        {
           id: 17,
            title: 'Total Phosphorus',
            status: '',
            analysisStatus: ['In progress', 'Completed']
        },
        {
           id: 18,
            title: 'Ammonia',
            status: '',
            analysisStatus: ['In progress', 'Completed']
        },
        {
           id: 19,
            title: 'Total Nitrogen',
            status: '',
            analysisStatus: ['In progress', 'Completed']
        },
        {
           id: 20,
            title: 'Sulphide',
            status: '',
            analysisStatus: ['In progress', 'Completed']
        },
        {
           id: 21,
            title: 'Heavy metals',
            status: '',
            analysisStatus: ['In progress', 'Completed']
        },
        {
           id: 22,
            title: 'Total Petroleum Hydrocarbon',
            status: '',
            analysisStatus: ['In progress', 'Completed']
        },
        {
           id: 23,
            title: 'Polycyclic Aromatic Hydrocarbon',
            status: '',
            analysisStatus: ['In progress', 'Completed']
        },
        {
           id: 24,
            title: 'BTEX',
            status: '',
            analysisStatus: ['In progress', 'Completed']
        },
        {
           id: 25,
            title: 'Oil/Grease',
            status: '',
            analysisStatus: ['In progress', 'Completed']
        },
        {
           id: 26,
            title: 'Total Coliform Count',
            status: '',
            analysisStatus: ['In progress', 'Completed']
        },
        {
           id: 27,
            title: 'E.Coli',
            status: '',
            analysisStatus: ['In progress', 'Completed']
        },
        {
           id: 28,
            title: 'THUB',
            status: '',
            analysisStatus: ['In progress', 'Completed']
        },
        {
           id: 29,
            title: 'THUF',
            status: '',
            analysisStatus: ['In progress', 'Completed']
        },
        {
           id: 30,
            title: 'THB',
            status: '',
            analysisStatus: ['In progress', 'Completed']
        },
        {
           id: 31,
            title: 'THF',
            status: '',
            analysisStatus: ['In progress', 'Completed']
        },
        {
           id: 32,
            title: 'Odour',
            status: '',
            analysisStatus: ['In progress', 'Completed']
        }

    ]
    }),
    actions: {

    }
  })();
}
