<template>
  <div class="notes">
    <!-- form text area -->
    <div class="has-background-success-dark p-4 mb-5">
      <div class="field">
        <div class="control">
          <textarea
            v-model="newNote"
            class="textarea"
            placeholder="Add new note"
            ref="newNoteRef" 
          />
        </div>
      </div>

      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <button :disabled="!newNote" @click="addNote" class="button is-link has-background-success">Add New Note</button >
        </div>
      </div>
    </div>

    <!-- notes -->
    <Note
      v-for="note in notes"
      :key="note.id"
      :note="note"
      @deleteClicked="deleteNote"
    />

  </div>
</template>

<script setup>
import { ref } from 'vue';
import Note from '../components/Notes/Note.vue';


const newNote = ref('')
const newNoteRef = ref(null)

const notes = ref([
  {
    id: 'id1',
    content: ' Lorem ipsum dolor sit, amet consectetur adipisicing Lorem ipsum dolor sit, amet consectetur adipisicing Lorem ipsum dolor sit, amet consectetur adipisicing Lorem ipsum dolor sit, amet consectetur adipisicing Lorem ipsum dolor sit, amet consectetur adipisicing '
  },
  {
    id: 'id2',
    content: 'repellendus veniam nisi nostrum maiores hic debitis sit beatae, nulla deleniti atque quidem sapiente numquam repellendus veniam nisi nostrum maiores hic debitis sit beatae, nulla deleniti atque quidem sapiente numquam repellendus veniam nisi nostrum maiores hic debitis sit beatae, nulla deleniti atque quidem sapiente numquam'
  },
  {
    id: 'id3',
    content: 'This is a my shorter note! Yea!'
  }
])

const addNote = () => {
  let currentDate = new Date().getTime()
  let id = currentDate.toString()

  let note = {
    id: id,
    content: newNote.value
  }

  notes.value.unshift(note)

  newNote.value = ''

  newNoteRef.value.focus()
}

const deleteNote = (idToDelete) => {
  // console.log('deleteNote', idToDelete);
  notes.value = notes.value.filter((note) => { return note.id !== idToDelete })
}

</script>