import { defineStore } from 'pinia'
import { collection, onSnapshot, doc, deleteDoc, updateDoc, query, orderBy, addDoc } from 'firebase/firestore'
import { db } from '@/js/firebase'

const notesCollectionRef = collection(db, 'users', 'aaTlVf7zKTf5EuYoBxZuIZtEyUW2', 'notes')
const notesCollectionQuery = query(notesCollectionRef, orderBy('date', 'desc'))

export const useStoreNotes = defineStore('storeNotes', {
  state: () => {
    return {
      notes: [
        // {
        //   id: 'id2',
        //   content: 'From ID-2 From PINIA repellendus veniam nisi'
        // },
        // {
        //   id: 'id3',
        //   content: 'From ID-3 From PINIA This is a my shorter note! Yea!'
        // }
      ],
      notesLoaded: false
    }
  },
  actions: {
    async getNotes() {
      this.notesLoaded = false
      onSnapshot(notesCollectionQuery, (querySnapshot) => {
        let notes = []
        querySnapshot.forEach((doc) => {
        let note = {
          id: doc.id,
          content: doc.data().content,
          date: doc.data().date
        }
        notes.push(note)
        })
        
        this.notes = notes
        this.notesLoaded = true

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