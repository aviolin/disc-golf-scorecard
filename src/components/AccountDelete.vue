<script setup>
import { ref } from 'vue'
import { useFirebase } from '@/composables/useFirebase'
import ModalWrapper from '@/components/ModalWrapper.vue'

const { user, logout, deleteUser } = useFirebase()

const modalOpen = ref(false)

const save = () => {
    deleteUser(user.value).then(() => {
        logout()
    })
}

</script>

<template>
    <div class="delete-button-wrapper">
        <button @click="modalOpen = true" class="btn btn-warn btn-small">Delete account</button>
        <ModalWrapper 
            v-if="modalOpen" 
            @close="modalOpen = false">
            <form>
                <p>Are you sure? This will delete your account.</p>
                <div class="button-holder">
                    <button class="btn btn-save btn-primary" @click.prevent="modalOpen = false">Cancel</button>
                    <button class="btn btn-warn btn-primary" @click.prevent="save">Delete</button>
                </div>
            </form>
        </ModalWrapper>
    </div>
</template>

<style lang="scss" scoped>
.button-holder {
    display: flex;
    gap: .5rem;
}

.delete-button-wrapper {
    margin-top: 3rem;
    text-align: right;
}
</style>