<script setup>
import { useData } from 'vitepress'
import { computed } from 'vue'

const { theme } = useData()
const noticeMsg = computed(() => theme.value.notice?.message)
</script>

<template>
    <section id="notice" v-if="noticeMsg">
        <div v-html="noticeMsg">
        </div>
    </section>
</template>
