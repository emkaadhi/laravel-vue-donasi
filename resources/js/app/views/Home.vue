<template>
    <v-container class="ma-0 pa-0 mx-auto" grid-list-sm>
        <div class="text-right">
            <v-btn
                small
                text
                to="/campaigns"
                class="blue--text"
                style="text-decoration: none"
            >
                All Campaigns <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
        </div>
        <v-layout wrap>
            <v-flex
                xs15
                sm8
                md6
                lg4
                v-for="campaign in campaigns"
                :key="`campaign-` + campaign.id"
            >
                <v-card class="mx-auto" max-width="344">
                    <v-img
                        :src="'images/campaign/' + campaign.image"
                        height="200px"
                    ></v-img>

                    <v-card-title> {{ campaign.title }} </v-card-title>

                    <v-card-subtitle>
                        {{ campaign.description }}
                    </v-card-subtitle>
                </v-card>
            </v-flex>
        </v-layout>
        <div class="text-right">
            <v-btn
                small
                text
                to="/blogs"
                class="blue--text"
                style="text-decoration: none"
            >
                All Blogs <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
        </div>
        <v-layout wrap>
            <v-carousel>
                <v-carousel-item
                    v-for="blog in blogs"
                    :key="`blog-` + blog.id"
                    reverse-transition="fade-transition"
                    transition="fade-transition"
                >
                    <v-img
                        :src="'images/blog/' + blog.image"
                        class="fill-height"
                    >
                        <v-container fill-height fluid pa-0 ma-0>
                            <v-layout fill-height align-end>
                                <v-flex xs12 mx-2>
                                    <span
                                        class="headline white--text"
                                        v-text="blog.title"
                                    >
                                    </span>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-img>
                </v-carousel-item>
            </v-carousel>
        </v-layout>
    </v-container>
</template>

<script>
import axios from "axios";
export default {
    data: function () {
        return {
            campaigns: [],
            blogs: [],
        };
    },
    created() {
        axios
            .get("api/campaign/random/3")
            .then((res) => {
                let { data } = res.data;
                this.campaigns = data.campaigns;
                console.log(res.data);
            })
            .catch((err) => console.log(err));
        axios
            .get("api/blog/random/3")
            .then((res) => {
                let { data } = res.data;
                this.blogs = data.blogs;
                console.log(res.data);
            })
            .catch((err) => console.log(err));
    },
};
</script>

<style></style>
