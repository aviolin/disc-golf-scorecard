<script setup>
import { ref } from 'vue'
import { useFirebase } from '@/composables/useFirebase'
import ModalWrapper from '@/components/ModalWrapper.vue'

const { user, updateProfile } = useFirebase()

const displayName = ref(user?.value?.displayName || '')
const modalOpen = ref(false)

const save = () => {
    updateProfile(user.value, { 
        displayName: displayName.value 
    }).then(() => {
        modalOpen.value = false;
    })
}

</script>

<template>
    <div>
        <div class="account-row">
            <span>{{ user?.displayName || '(none)' }}</span>
            <button @click="modalOpen = true" class="btn btn-secondary btn-small">Change display name</button>
        </div>
        <ModalWrapper 
            v-if="modalOpen" 
            @close="modalOpen = false">
            <form>
                <label for="displayname">Display name:</label>
                <input type="text" id="displayname" v-model="displayName"/>
                <button class="btn btn-save btn-primary" @click.prevent="save">Update Display Name</button>
            </form>
        </ModalWrapper>
    </div>
</template>