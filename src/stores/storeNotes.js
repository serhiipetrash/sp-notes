import { defineStore } from 'pinia'
import { collection, onSnapshot, doc, deleteDoc, updateDoc, query, orderBy, addDoc } from 'firebase/firestore'
import { db } from '@/js/firebase'

const notesCollectionRef = collection(db, 'notes')
const notesCollectionQuery = query(notesCollectionRef, orderBy('date', 'desc'))

export const useStoreNotes = defineStore('storeNotes', {
  state: () => {
    return {
      notes: [
        // {
        //   id: 'id1',
        //   content: 'From ID-1 PINIA Lorem ipsum dolor sit, amet consectetur adipisicing Lorem ipsum dolor sit, amet consectetur adipisicing Lorem ipsum dolor sit, amet consectetur adipisicing Lorem ipsum dolor sit, amet consectetur adipisicing Lorem ipsum dolor sit, amet consectetur adipisicing '
        // },
        // {
        //   id: 'id2',
        //   content: 'From ID-2 From PINIA repellendus veniam nisi nostrum maiores hic debitis sit beatae, nulla deleniti atque quidem sapiente numquam repellendus veniam nisi nostrum maiores hic debitis sit beatae, nulla deleniti atque quidem sapiente numquam repellendus veniam nisi nostrum maiores hic debitis sit beatae, nulla deleniti atque quidem sapiente numquam'
        // },
        // {
        //   id: 'id3',
        //   content: 'From ID-3 From PINIA This is a my shorter note! Yea!'
        // }
      ]
    }
  },
  actions: {
    async getNotes() {

      onSnapshot(notesCollectionQuery, (querySnapshot) => {
        let notes = []
        querySnapshot.forEach((doc) => {
        let note = {
          id: doc.id,
          content: doc.data().content
        }
        notes.push(note)
        })
        this.notes = notes
      })
      
    },

    async addNote(newNoteContent) {
      let currentDate = new Date().getTime()
      let date = currentDate.toString()

      await addDoc(notesCollectionRef, {
        content: newNoteContent,
        date: date
      })

    },

    async deleteNote(idToDelete) {
      await deleteDoc(doc(notesCollectionRef, idToDelete));
    },

    async updateNote(id, content) {
        await updateDoc(doc(notesCollectionRef, id), {
        content: content
      })
    }
  },
  getters: {
    getNoteContent: (state) => {
     return (id) => {
      return state.notes.filter((note) => note.id === id)[0].content
     }
    },
    totalNotesCount: (state) => {
      return state.notes.length
    },
    totalCharactersCount: (state) => {
      let count = 0
      state.notes.forEach((note) => {
        count += note.content.length
      })
      return count
    }
  }

})