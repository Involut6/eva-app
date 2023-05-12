import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export default function useSampleStore() {
  return defineStore('sample', {
    state: () => ({
      samples: [],
    }),
    actions: {

    }
  })();
}
