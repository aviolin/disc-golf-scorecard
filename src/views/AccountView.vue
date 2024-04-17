<script setup>
import { onBeforeMount } from 'vue'
import { useFirebase } from '@/composables/useFirebase'
import { router } from '@/router'
import AccountDisplayName from '@/components/AccountDisplayName.vue'
import AccountEmail from '@/components/AccountEmail.vue'
import AccountPassword from '@/components/AccountPassword.vue'
import AccountDelete from '@/components/AccountDelete.vue'

const { user, logout } = useFirebase()

onBeforeMount(() => {
    if (!user.value) {
        router.push('/log-in')
    }
})

</script>

<template>
    <form class="account" :key="user">
        <h1>My account</h1>
        <AccountDisplayName />
        <AccountEmail />
        <AccountPassword />
        <button @click="logout" class="btn btn-secondary btn-small">Logout</button>
        <AccountDelete />
    </form>
</template>

<style lang="scss" scoped>
.account {
    padding: 2rem;
}
</style>