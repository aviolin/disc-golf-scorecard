<script setup>
import { ref } from 'vue'
import { useFirebase } from '@/composables/useFirebase'
import ModalWrapper from '@/components/ModalWrapper.vue'

const { user, updatePassword, reauthenticate } = useFirebase()

const password = ref('')
const newPassword = ref('')
const modalOpen = ref(false)

const save = () => {

    if (!newPassword.value || !password.value || !user.value) {
        modalOpen.value = false;
        return
    }

    reauthenticate(password.value).then(() => {
        updatePassword(user.value, newPassword.value).then(() => {
            modalOpen.value = false;
        })
    }).catch((error) => {
        console.error(error)
    })
}

</script>

<template>
    <div>
        <div class="account-row">
            <span>********</span>
            <button @click="modalOpen = true" class="btn btn-secondary btn-small">Change password</button>
        </div>
        <ModalWrapper 
            v-if="modalOpen" 
            @close="modalOpen = false">
            <form>
                <label for="password">Current password:</label>
                <input type="password" id="password" v-model="password"/>
                <label for="newpassword">New password:</label>
                <input type="password" id="newpassword" v-model="newPassword"/>
                <button class="btn btn-save btn-primary" @click.prevent="save">Update Password</button>
            </form>
        </ModalWrapper>
    </div>
</template>