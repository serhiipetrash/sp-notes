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
      v-for="note in storeNotes.notes"
      :key="note.id"
      :note="note"
    />

  </div>
</template>

<script setup>
import { ref } from 'vue';
import Note from '../components/Notes/Note.vue';
import { useStoreNotes } from '@/stores/storeNotes'

const storeNotes = useStoreNotes()

const newNote = ref('')
const newNoteRef = ref(null)

const addNote = () => {

  storeNotes.addNote(newNote.value)

  newNote.value = ''

  newNoteRef.value.focus()
}

</script>