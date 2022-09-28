import { defineStore } from 'pinia'

export const useStoreNotes = defineStore('storeNotes', {
  state: () => {
    return {
      notes: [
        {
          id: 'id1',
          content: 'From PINIA Lorem ipsum dolor sit, amet consectetur adipisicing Lorem ipsum dolor sit, amet consectetur adipisicing Lorem ipsum dolor sit, amet consectetur adipisicing Lorem ipsum dolor sit, amet consectetur adipisicing Lorem ipsum dolor sit, amet consectetur adipisicing '
        },
        {
          id: 'id2',
          content: 'From PINIA repellendus veniam nisi nostrum maiores hic debitis sit beatae, nulla deleniti atque quidem sapiente numquam repellendus veniam nisi nostrum maiores hic debitis sit beatae, nulla deleniti atque quidem sapiente numquam repellendus veniam nisi nostrum maiores hic debitis sit beatae, nulla deleniti atque quidem sapiente numquam'
        },
        {
          id: 'id3',
          content: 'From PINIA This is a my shorter note! Yea!'
        }
      ]
    }
  },
  actions: {
    addNote(newNoteContent) {
      let currentDate = new Date().getTime()
      let id = currentDate.toString()

      let note = {
        id: id,
        content: newNoteContent
      }

      this.notes.unshift(note)
    },
    
    deleteNote(idToDelete) {
      this.notes = this.notes.filter((note) => { return note.id !== idToDelete })
    }
  }

})