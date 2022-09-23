<template>
    <div>
        <v-card class="mx-auto">
            <v-img :src="'/images/blog/' + blog.image" height="500px"> </v-img>
            <v-card-title>{{ blog.title }}</v-card-title>

            <v-card-subtitle class="pb-0">
                {{ blog.description }}
            </v-card-subtitle>
            <v-card-actions>
                <v-btn color="orange" text> Share </v-btn>

                <v-btn color="orange" text> Explore </v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            blog: {},
        };
    },
    created() {
        this.go();
    },
    methods: {
        go: function () {
            let { id } = this.$route.params;
            let url = `/api/blog/${id}`;
            axios
                .get(url)
                .then((res) => {
                    let { data } = res.data;
                    this.blog = data.blog;
                    console.log(res.data);
                })
                .catch((err) => console.log(err));
        },
    },
};
</script>

<style></style>
