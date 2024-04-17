<script setup>
import { ref, onBeforeMount } from 'vue'
import { router } from '@/router'
import { useFirebase } from '@/composables/useFirebase'

const { createAccount, user } = useFirebase()

const email = ref('')
const password = ref('')
const displayName = ref('')

const createUser = () => {
    createAccount(email.value, password.value, displayName.value)
}

onBeforeMount(() => {
    if (user.value) {
        router.push('/')
    }
})

</script>

<template>
    <form class="signup-form">
        <h1>Sign up</h1>
        <p>Create an account to save your games, courses, and more.</p>
        <div>
            <label for="display-name">Display name</label>
            <input type="text" id="display-name" v-model="displayName" />
        </div>
        <div>
            <label for="email">Email *</label>
            <input type="email" id="email" v-model="email" />
        </div>
        <div>
            <label for="password">Password *</label>
            <input type="password" id="password" v-model="password" />
        </div>
        <button type="submit" class="btn btn-primary" @click.prevent="createUser">Sign Up</button>
        <div class="login-link">
            <p>Have an account? <RouterLink to="log-in">Login</RouterLink></p>
        </div>
    </form>
</template>

<style lang="scss" scoped>
.signup-form {
    padding: 2rem;
}

.login-link {
    margin-top: 2rem;

    a {
        display: inline;
    }
}
</style>