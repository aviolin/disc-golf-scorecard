<script setup>
import { ref, onBeforeMount } from 'vue'
import { router } from '@/router'
import { useFirebase } from '@/composables/useFirebase'
import AuthError from '@/components/AuthError.vue'

const { login, user } = useFirebase()

const email = ref('')
const password = ref('')

const loginUser = () => {
    login(email.value, password.value)
}

onBeforeMount(() => {
    if (user.value) {
        router.push('/')
    }
})

</script>

<template>
    <form class="login-form container">
        <h1>Log in</h1>
        <AuthError />
        <div>
            <label for="email">Email</label>
            <input type="email" id="email" v-model="email" />
        </div>
        <div>
            <label for="password">Password</label>
            <input type="password" id="password" v-model="password" />
        </div>
        <button type="submit" class="btn btn-primary" @click.prevent="loginUser">Log In</button>
        <div class="signup-link">
            <p>No account? <RouterLink to="sign-up">Create an account</RouterLink></p>
            <p>Forgot your password? <RouterLink to="/reset-password">Reset your password.</RouterLink></p>
        </div>
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