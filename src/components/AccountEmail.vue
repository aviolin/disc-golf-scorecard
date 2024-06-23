<script setup>
import { ref } from 'vue'
import { useFirebase } from '@/composables/useFirebase'
import ModalWrapper from '@/components/ModalWrapper.vue'

const { user, updateEmail, reauthenticate } = useFirebase()

const password = ref('')
const email = ref('')
const modalOpen = ref(false)

const save = () => {
    if (!email.value || !user.value || user.value.email === email.value) {
        modalOpen.value = false;
        return;
    }

    reauthenticate(password.value).then(() => {
        updateEmail(user.value, email.value).then(() => {
            modalOpen.value = false;
        }).catch((error) => {
            console.error('Error updating email: ',error)
        });
    }).catch((error) => {
        console.error('Error reauthenticating: ', error)
    })
}

</script>

<template>
    <div>
        <div class="account-row">
            <span>{{ user?.email }}</span>
            <button @click.prevent="modalOpen = true" class="btn btn-secondary btn-small">Change email</button>
        </div>
        <ModalWrapper 
            v-if="modalOpen" 
            @close="modalOpen = false">
            <form>
                <label for="email">New email:</label>
                <input type="email" id="email" v-model="email"/>
                <label for="password">Confirm your password:</label>
                <input type="password" id="password" v-model="password"/>
                <button class="btn btn-save btn-primary" @click.prevent="save">Update Email</button>
            </form>
        </ModalWrapper>
    </div>
</template>