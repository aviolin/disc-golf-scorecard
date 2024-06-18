<script setup>
import { computed } from 'vue';
import { useFirebase } from '@/composables/useFirebase'

const { error } = useFirebase()

const message = computed(() => {
    switch (error.value) {
        case 'auth/user-not-found':
            return 'User not found'
        case 'auth/weak-password':
            return 'Please choose a more secure password'
        case 'auth/captcha-check-failed':
            return 'Captcha check failed'
        case 'auth/email-already-in-use':
            return 'Email already in use'
        case 'auth/invalid-email':
            return 'Invalid email'
        case 'auth/invalid-recipient-email':
            return 'Invalid recipient email'
        case 'auth/unverified-email':
            return 'Email is not verified'
        case 'auth/user-not-found':
            return 'User not found'
        case 'auth/user-disabled':
            return 'User account has been disabled'
        case 'auth/too-many-requests':
            return 'Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later.'
        case 'auth/wrong-password':
        case 'auth/missing-password':
            return 'Incorrect password'
        default:
            return 'An error occurred'
    }
})

</script>

<template>
    <p v-if="error && message" class="error">{{ message }}</p>
</template>

<style lang="scss" scoped>
.error {
    background: var(--col-danger);
    border-radius: var(--border-radius);
    color: var(--col-white);
    padding: 1rem;
    font-size: 1rem;
}
</style>