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
    <form class="account container" :key="user">
        <h1>My account</h1>
        <button @click.prevent="logout" class="btn btn-secondary btn-small">
            <span class="material-symbols-outlined">logout</span> Logout
        </button>
        <AccountDisplayName />
        <AccountEmail />
        <AccountPassword />
        <AccountDelete />
    </form>
</template>

<style lang="scss" scoped>
.account {
    padding: 2rem;
    overflow-x: clip;
}
.btn {
    margin-left: 100%;
    transform: translateX(-100%);
    margin-bottom: 1.75rem;
}
</style>