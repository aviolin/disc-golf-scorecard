<script setup>
import { ref, onBeforeMount } from 'vue'
import { router } from '@/router'
import { useFirebase } from '@/composables/useFirebase'

const { user, auth, sendPasswordResetEmail } = useFirebase()

const email = ref('')

onBeforeMount(() => {
    if (user.value) {
        router.push('/')
    }
})

const sendEmail = () => {
    if (!email.value) return

    sendPasswordResetEmail(auth.value, email.value)
}

</script>

<template>
    <form class="login-form container" @submit.prevent="sendEmail">
        <h1>Reset your password</h1>
        <div>
            <label for="email">Email</label>
            <input type="email" id="email" v-model="email" />
        </div>
        <button type="submit" class="btn btn-primary">Send Password Reset Email</button>
    </form>
</template>

<style lang="scss" scoped>
.login-form {
    padding: 2rem;
}
.signup-link {
    margin-top: 2rem;

    a {
        display: inline;
    }
}
</style>