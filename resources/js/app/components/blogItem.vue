<template>
    <v-card class="mx-auto" max-width="344" :to="'blog/' + blog.id" flat>
        <v-img :src="'images/blog/' + blog.image" height="200px"></v-img>

        <v-card-title>
            {{ blog.title }}
        </v-card-title>
    </v-card>
</template>

<script>
export default {
    name: "blogItem",
    props: ["blog"],
    computed: {},
};
</script>

<style></style>
