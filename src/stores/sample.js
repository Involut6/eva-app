import { defineStore } from 'pinia'

export default function useSampleStore() {
  return defineStore('sample', {
    state: () => ({
      samples: [],
      selectedAnalysis: [],
      client: {},
      analysis: [
        {
            id: 1,
            title: 'Temperature',
            status: 'In progress',
            analysisStatus: ['In progress', 'Completed']
        },
        {
           id: 2,
            title: 'Appearance',
            status: 'In progress',
            analysisStatus: ['In progress', 'Completed']
        },
        {
           id: 3,
            title: 'Colour',
            status: 'In progress',
            analysisStatus: ['In progress', 'Completed']
        },
        {
           id: 4,
            title: 'Conductivity',
            status: 'In progress',
            analysisStatus: ['In progress', 'Completed']
        },
        {
           id: 5,
            title: 'TDS',
            status: 'In progress',
            analysisStatus: ['In progress', 'Completed']
        },
        {
           id: 6,
            title: 'TSS',
            status: 'In progress',
            analysisStatus: ['In progress', 'Completed']
        },
        {
           id: 7,
            title: 'Turbidity',
            status: 'In progress',
            analysisStatus: ['In progress', 'Completed']
        },
        {
           id: 8,
            title: 'Salinity',
            status: 'In progress',
            analysisStatus: ['In progress', 'Completed']
        },
        {
           id: 9,
            title: 'Dissolved Oxygen',
            status: 'In progress',
            analysisStatus: ['In progress', 'Completed']
        },
        {
           id: 10,
            title: 'BOD',
            status: 'In progress',
            analysisStatus: ['In progress', 'Completed']
        },
        {
           id: 11,
            title: 'COD',
            status: 'In progress',
            analysisStatus: ['In progress', 'Completed']
        },
        {
           id: 12,
            title: 'Alkalinity',
            status: 'In progress',
            analysisStatus: ['In progress', 'Completed']
        },
        {
           id: 13,
            title: 'Hardness',
            status: 'In progress',
            analysisStatus: ['In progress', 'Completed']
        },
        {
           id: 14,
            title: 'Chloride',
            status: 'In progress',
            analysisStatus: ['In progress', 'Completed']
        },
        {
           id: 15,
            title: 'Nitrate',
            status: 'In progress',
            analysisStatus: ['In progress', 'Completed']
        },
        {
           id: 16,
            title: 'Sulphate',
            status: 'In progress',
            analysisStatus: ['In progress', 'Completed']
        },
        {
           id: 17,
            title: 'Total Phosphorus',
            status: 'In progress',
            analysisStatus: ['In progress', 'Completed']
        },
        {
           id: 18,
            title: 'Ammonia',
            status: 'In progress',
            analysisStatus: ['In progress', 'Completed']
        },
        {
           id: 19,
            title: 'Total Nitrogen',
            status: 'In progress',
            analysisStatus: ['In progress', 'Completed']
        },
        {
           id: 20,
            title: 'Sulphide',
            status: 'In progress',
            analysisStatus: ['In progress', 'Completed']
        },
        {
           id: 21,
            title: 'Heavy metals',
            status: 'In progress',
            analysisStatus: ['In progress', 'Completed']
        },
        {
           id: 22,
            title: 'TPH',
            status: 'In progress',
            analysisStatus: ['In progress', 'Completed']
        },
        {
           id: 23,
            title: 'PAH',
            status: 'In progress',
            analysisStatus: ['In progress', 'Completed']
        },
        {
           id: 24,
            title: 'BTEX',
            status: 'In progress',
            analysisStatus: ['In progress', 'Completed']
        },
        {
           id: 25,
            title: 'Oil/Grease',
            status: 'In progress',
            analysisStatus: ['In progress', 'Completed']
        },
        {
           id: 26,
            title: 'TCC',
            status: 'In progress',
            analysisStatus: ['In progress', 'Completed']
        },
        {
           id: 27,
            title: 'E.Coli',
            status: 'In progress',
            analysisStatus: ['In progress', 'Completed']
        },
        {
           id: 28,
            title: 'THUB',
            status: 'In progress',
            analysisStatus: ['In progress', 'Completed']
        },
        {
           id: 29,
            title: 'THUF',
            status: 'In progress',
            analysisStatus: ['In progress', 'Completed']
        },
        {
           id: 30,
            title: 'THB',
            status: 'In progress',
            analysisStatus: ['In progress', 'Completed']
        },
        {
           id: 31,
            title: 'THF',
            status: 'In progress',
            analysisStatus: ['In progress', 'Completed']
        },
        {
           id: 32,
            title: 'Odour',
            status: 'In progress',
            analysisStatus: ['In progress', 'Completed']
        },
        {
            id: 33,
             title: 'Nitrite',
             status: 'In progress',
             analysisStatus: ['In progress', 'Completed']

         },
        {
            id: 34,
             title: 'Phenol',
             status: 'In progress',
             analysisStatus: ['In progress', 'Completed']

         },
         {
            id: 35,
             title: 'pH',
             status: 'In progress',
             analysisStatus: ['In progress', 'Completed']

         },
         {
            id: 36,
             title: 'Phosphate',
             status: 'In progress',
             analysisStatus: ['In progress', 'Completed']

         },
         {
            id: 37,
             title: 'Moisture-content',
             status: 'In progress',
             analysisStatus: ['In progress', 'Completed']

         },
         {
            id: 38,
             title: 'TOM',
             status: 'In progress',
             analysisStatus: ['In progress', 'Completed']

         },
         {
            id: 39,
             title: 'TOC',
             status: 'In progress',
             analysisStatus: ['In progress', 'Completed']

         },
    ],
    clientList: [
        {
            clientId : "1",
            clientName : "Abdullah",
            dateReceived : "02/08/2020",
            samples: [
                {
                    sampleType : "Soil Sample",
                    sampleStatus : "Received",
                    dateReceived : "02/08/2020",
                    listOfAnalysis: [
                        {
                            name : "pH",
                            status : "In progress",
                        }
                    ]
                }
            ]
        },
        {
            clientId : "2",
            clientName : "Fawaz",
            dateReceived : "02/08/2011",
            samples: [
                {
                    sampleType : "Water Sample",
                    sampleStatus : "Received",
                    dateReceived : "02/08/2020",
                    listOfAnalysis: [
                        {
                            name : "Temperature",
                            status : "Completed",
                        }
                    ]
                },
                {
                    sampleType : "Soil Sample",
                    sampleStatus : "Received",
                    dateReceived : "02/08/2020",
                    listOfAnalysis: [
                        {
                            name : "pH",
                            status : "In progress",
                        }
                    ]
                }
            ]
        },
        {
            clientId : "3",
            clientName : "Abdulqayum",
            dateReceived : "02/08/2020",
            samples: [
                {
                    sampleType : "Water Sample",
                    sampleStatus : "Received",
                    dateReceived : "02/08/2020",
                    listOfAnalysis: [
                        {
                            name : "Appearance",
                            status : "In progress",
                        }
                    ]
                }
            ]
        },
        {
            clientId : "4",
            clientName : "Abdul-azeez",
            dateReceived : "02/08/2020",
            samples: [
                {
                    sampleType : "Soil Sample",
                    sampleStatus : "Received",
                    dateReceived : "02/08/2020",
                    listOfAnalysis: [
                        {
                            name : "Nitrite",
                            status : "In progress",
                        }
                    ]
                }
            ]
        },
        {
            clientId : "5",
            clientName : "Ebube",
            dateReceived : "02/08/2020",
            samples: [
                {
                    sampleType : "Water Sample",
                    sampleStatus : "Received",
                    dateReceived : "02/08/2020",
                    listOfAnalysis: [
                        {
                            name : "phosphate",
                            status : "Completed",
                        }
                    ]
                },
                {
                    sampleType : "Soil Sample",
                    sampleStatus : "Received",
                    dateReceived : "02/08/2020",
                    listOfAnalysis: [
                        {
                            name : "pH",
                            status : "In progress",
                        },
                        {
                            name : "phosphate",
                            status : "Completed",
                        }
                    ]
                }
            ]
        }
    ]

    }),
    actions: {

    }
  })();
}
