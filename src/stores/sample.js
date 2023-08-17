import { defineStore } from 'pinia'
import { getClients, postClient, getSamples, postSample, deleteClient, deleteSample, getStat } from '../services/DataServices'

export const useSampleStore = defineStore('sample', {
    state: () => ({
      samples: [],
    //   selectedAnalysis: [],
      clientID: 0,
      client: {},
      analysis: [
        {
            // id: 1,
            name: 'Temperature',
            status: 'Analysis in Progress',
            // analysisStatus: ['In progress', 'Completed']
        },
        {
        //    id: 2,
            name: 'Appearance',
            status: 'Analysis in Progress',
            // analysisStatus: ['In progress', 'Completed']
        },
        {
        //    id: 3,
            name: 'Colour',
            status: 'Analysis in Progress',
            // analysisStatus: ['In progress', 'Completed']
        },
        {
        //    id: 4,
            name: 'Conductivity',
            status: 'Analysis in Progress',
            // analysisStatus: ['In progress', 'Completed']
        },
        {
        //    id: 5,
            name: 'TDS',
            status: 'Analysis in Progress',
            // analysisStatus: ['In progress', 'Completed']
        },
        {
        //    id: 6,
            name: 'TSS',
            status: 'Analysis in Progress',
            // analysisStatus: ['In progress', 'Completed']
        },
        {
        //    id: 7,
            // name: 'Turbidity',
            status: 'Analysis in Progress',
            // analysisStatus: ['In progress', 'Completed']
        },
        {
        //    id: 8,
            name: 'Salinity',
            status: 'Analysis in Progress',
            // analysisStatus: ['In progress', 'Completed']
        },
        {
        //    id: 9,
            name: 'Dissolved Oxygen',
            status: 'Analysis in Progress',
            // analysisStatus: ['In progress', 'Completed']
        },
        {
        //    id: 10,
            name: 'BOD',
            status: 'Analysis in Progress',
            // analysisStatus: ['In progress', 'Completed']
        },
        {
        //    id: 11,
            name: 'COD',
            status: 'Analysis in Progress',
            // analysisStatus: ['In progress', 'Completed']
        },
        {
        //    id: 12,
            name: 'Alkalinity',
            status: 'Analysis in Progress',
            // analysisStatus: ['In progress', 'Completed']
        },
        {
        //    id: 13,
            name: 'Hardness',
            status: 'Analysis in Progress',
            // analysisStatus: ['In progress', 'Completed']
        },
        {
        //    id: 14,
            // name: 'Chloride',
            status: 'Analysis in Progress',
            // analysisStatus: ['In progress', 'Completed']
        },
        {
        //    id: 15,
            name: 'Nitrate',
            status: 'Analysis in Progress',
            // analysisStatus: ['In progress', 'Completed']
        },
        {
        //    id: 16,
            name: 'Sulphate',
            status: 'Analysis in Progress',
            // analysisStatus: ['In progress', 'Completed']
        },
        {
        //    id: 17,
            name: 'Total Phosphorus',
            status: 'Analysis in Progress',
            // analysisStatus: ['In progress', 'Completed']
        },
        {
        //    id: 18,
            name: 'Ammonia',
            status: 'Analysis in Progress',
            // analysisStatus: ['In progress', 'Completed']
        },
        {
        //    id: 19,
            name: 'Total Nitrogen',
            status: 'Analysis in Progress',
            // analysisStatus: ['In progress', 'Completed']
        },
        {
        //    id: 20,
            // name: 'Sulphide',
            status: 'Analysis in Progress',
            // analysisStatus: ['In progress', 'Completed']
        },
        {
        //    id: 21,
            name: 'Heavy metals',
            status: 'Analysis in Progress',
            // analysisStatus: ['In progress', 'Completed']
        },
        {
        //    id: 22,
            name: 'TPH',
            status: 'Analysis in Progress',
            // analysisStatus: ['In progress', 'Completed']
        },
        {
        //    id: 23,
            name: 'PAH',
            status: 'Analysis in Progress',
            // analysisStatus: ['In progress', 'Completed']
        },
        {
        //    id: 24,
            name: 'BTEX',
            status: 'Analysis in Progress',
            // analysisStatus: ['In progress', 'Completed']
        },
        {
        //    id: 25,
            name: 'Oil/Grease',
            status: 'Analysis in Progress',
            // analysisStatus: ['In progress', 'Completed']
        },
        {
        //    id: 26,
            name: 'TCC',
            status: 'Analysis in Progress',
            // analysisStatus: ['In progress', 'Completed']
        },
        {
        //    id: 27,
            name: 'E.Coli',
            status: 'Analysis in Progress',
            // analysisStatus: ['In progress', 'Completed']
        },
        {
        //    id: 28,
            name: 'THUB',
            status: 'Analysis in Progress',
            // analysisStatus: ['In progress', 'Completed']
        },
        {
        //    id: 29,
            name: 'THUF',
            status: 'Analysis in Progress',
            // analysisStatus: ['In progress', 'Completed']
        },
        {
        //    id: 30,
            name: 'THB',
            status: 'Analysis in Progress',
            // analysisStatus: ['In progress', 'Completed']
        },
        {
        //    id: 31,
            name: 'THF',
            status: 'Analysis in Progress',
            // analysisStatus: ['In progress', 'Completed']
        },
        {
        //    id: 32,
            name: 'Odour',
            status: 'Analysis in Progress',
            // analysisStatus: ['In progress', 'Completed']
        },
        {
            // id: 33,
             name: 'Nitrite',
             status: 'Analysis in Progress',
            //  analysisStatus: ['In progress', 'Completed']

         },
        {
            // id: 34,
             name: 'Phenol',
             status: 'Analysis in Progress',
            //  analysisStatus: ['In progress', 'Completed']

         },
         {
            // id: 35,
             name: 'pH',
             status: 'Analysis in Progress',
            //  analysisStatus: ['In progress', 'Completed']

         },
         {
            // id: 36,
             name: 'Phosphate',
             status: 'Analysis in Progress',
            //  analysisStatus: ['In progress', 'Completed']

         },
         {
            // id: 37,
             name: 'Moisture-content',
             status: 'Analysis in Progress',
            //  analysisStatus: ['In progress', 'Completed']

         },
         {
            // id: 38,
             name: 'TOM',
             status: 'Analysis in Progress',
            //  analysisStatus: ['In progress', 'Completed']

         },
         {
            // id: 39,
             name: 'TOC',
             status: 'Analysis in Progress',
            //  analysisStatus: ['In progress', 'Completed']

         },
    ],
    // clientList: [
    //     {
    //         clientId : "1",
    //         clientName : "Abdullah",
    //         dateReceived : "02/08/2020",
    //         samples: [
    //             {
    //                 sampleType : "Soil Sample",
    //                 sampleStatus : "Received",
    //                 dateReceived : "02/08/2020",
    //                 listOfAnalysis: [
    //                     {
    //                         name : "pH",
    //                         status : "In progress",
    //                     }
    //                 ]
    //             }
    //         ]
    //     },
    //     {
    //         clientId : "2",
    //         clientName : "Fawaz",
    //         dateReceived : "02/08/2011",
    //         samples: [
    //             {
    //                 sampleType : "Water Sample",
    //                 sampleStatus : "Received",
    //                 dateReceived : "02/08/2020",
    //                 listOfAnalysis: [
    //                     {
    //                         name : "Temperature",
    //                         status : "Completed",
    //                     }
    //                 ]
    //             },
    //             {
    //                 sampleType : "Soil Sample",
    //                 sampleStatus : "Received",
    //                 dateReceived : "02/08/2020",
    //                 listOfAnalysis: [
    //                     {
    //                         name : "pH",
    //                         status : "In progress",
    //                     }
    //                 ]
    //             }
    //         ]
    //     },
    //     {
    //         clientId : "3",
    //         clientName : "Abdulqayum",
    //         dateReceived : "02/08/2020",
    //         samples: [
    //             {
    //                 sampleType : "Water Sample",
    //                 sampleStatus : "Received",
    //                 dateReceived : "02/08/2020",
    //                 listOfAnalysis: [
    //                     {
    //                         name : "Appearance",
    //                         status : "In progress",
    //                     }
    //                 ]
    //             }
    //         ]
    //     },
    //     {
    //         clientId : "4",
    //         clientName : "Abdul-azeez",
    //         dateReceived : "02/08/2020",
    //         samples: [
    //             {
    //                 sampleType : "Soil Sample",
    //                 sampleStatus : "Received",
    //                 dateReceived : "02/08/2020",
    //                 listOfAnalysis: [
    //                     {
    //                         name : "Nitrite",
    //                         status : "In progress",
    //                     }
    //                 ]
    //             }
    //         ]
    //     },
    //     {
    //         clientId : "5",
    //         clientName : "Ebube",
    //         dateReceived : "02/08/2020",
    //         samples: [
    //             {
    //                 sampleType : "Water Sample",
    //                 sampleStatus : "Received",
    //                 dateReceived : "02/08/2020",
    //                 listOfAnalysis: [
    //                     {
    //                         name : "phosphate",
    //                         status : "Completed",
    //                     }
    //                 ]
    //             },
    //             {
    //                 sampleType : "Soil Sample",
    //                 sampleStatus : "Received",
    //                 dateReceived : "02/08/2020",
    //                 listOfAnalysis: [
    //                     {
    //                         name : "pH",
    //                         status : "In progress",
    //                     },
    //                     {
    //                         name : "phosphate",
    //                         status : "Completed",
    //                     }
    //                 ]
    //             }
    //         ]
    //     }
    // ]
        clients: [],
        stats: [],
        isLoading: false

    }),
    actions: {
        async setClients() {
            this.isLoading = true
            getClients().then((response) => {
                if (response.status === 200) {
                    console.log(response.data.data.clients)
                    useSampleStore().$state.clients = response.data.data.clients
                }
            }).catch(error => {
                console.log(error);
            }).finally(() => this.isLoading = false)
        },
        async addClient(data) {
            this.isLoading = true
            postClient(data).then((response) => {
                if (response.status === 200) {
                    console.log(response.data.data)
                }
            }).catch(error => {
                console.log(error);
            })
            this.isLoading = false
        },
        async fetchSamples(id) {
            this.isLoading = true
            getSamples(id).then((response) => {
                console.log(response)
                if (response.status === 200 || response.status === 201) {
                    console.log(response.data.data.samples);
                    this.samples = response.data.data.samples
                }
            }).catch(error => {
                console.log(error)
            })
        },
        async addSample(data, id) {
            this.isLoading = true
            postSample(data, id).then((response) => {
                console.log(response.data)
            }).catch(error => {
                console.log(error)
            })
            this.isLoading = false
        },
        async removeClient(id) {
            this.isLoading = true
            deleteClient(id).then((response) => {
                console.log(response.data)
            }).catch(error => {
                console.log(error)
            })
            this.isLoading = false
        },
        async removeSample(client, sample) {
            this.isLoading = true
            deleteSample(client, sample).then((response) => {
                console.log(response.data);
            }).catch(error => {
                console.log(error)
            })
            this.isLoading = false
        },
        async fetchStat() {
            this.isLoading = true
            getStat().then((response) => {
                console.log(response.data)
                this.stats = response.data
            }).catch(error => {
                console.log(error)
            })
            this.isLoading = false
        }
    }
  })

