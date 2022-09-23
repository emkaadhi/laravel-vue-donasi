<template>
    <v-container class="ma-0 pa-0 mx-auto" grid-list-sm>
        <v-subheader> All blogs </v-subheader>

        <v-layout wrap>
            <v-flex v-for="blog in blogs" :key="`blog-` + blog.id">
                <v-card class="mx-auto" max-width="344" :to="'blog/' + blog.id">
                    <v-img
                        :src="'/images/blog/' + blog.image"
                        height="200px"
                    ></v-img>

                    <v-card-title> {{ blog.title }} </v-card-title>

                    <v-expand-transition>
                        <div>
                            <v-divider></v-divider>

                            <v-card-text>
                                {{ blog.description }}
                            </v-card-text>
                        </div>
                    </v-expand-transition>
                </v-card>
            </v-flex>
        </v-layout>
        <v-pagination
            v-model="page"
            @input="go"
            :length="lengthPage"
            :total-visible="6"
        ></v-pagination>
    </v-container>
</template>

<script>
import axios from "axios";

export default {
    data: function () {
        return {
            blogs: [],
            page: 0,
            lengthPage: 0,
        };
    },
    components: {},
    created() {
        this.go();
    },
    methods: {
        go() {
            axios
                .get("api/blog")
                .then((res) => {
                    let { data } = res.data;
                    this.blogs = data.blogs.data;
                    console.log(res.data);
                })
                .catch((err) => console.log(err));
        },
    },
};
</script>

<style></style>
