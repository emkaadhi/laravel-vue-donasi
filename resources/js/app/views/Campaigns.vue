<template>
    <v-container class="ma-0 pa-0 mx-auto" grid-list-sm>
        <v-subheader> All Campaigns </v-subheader>

        <v-layout wrap>
            <v-flex
                xs15
                sm8
                md6
                lg4
                v-for="campaign in campaigns"
                :key="`campaign-` + campaign.id"
            >
                <campaignItem :campaign="campaign" />
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
import campaignItem from "../components/CampaignItem.vue";

export default {
    data: function () {
        return {
            campaigns: [],
            page: 0,
            lengthPage: 0,
        };
    },
    components: {
        campaignItem,
    },
    created() {
        this.go();
    },
    methods: {
        go() {
            axios
                .get("api/campaign?page=" + this.page)
                .then((res) => {
                    let { data } = res.data;
                    this.campaigns = data.campaigns.data;
                    console.log(res.data);
                })
                .catch((err) => console.log(err));
        },
    },
};
</script>

<style></style>
