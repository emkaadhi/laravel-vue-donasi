<template>
    <v-card
        class="mx-auto"
        max-width="344"
        :to="'campaign/' + campaign.id"
        flat
    >
        <v-img
            :src="'images/campaign/' + campaign.image"
            height="200px"
        ></v-img>

        <v-card-title>
            {{ campaign.title }}
        </v-card-title>

        <v-progress-linear color="blue" height="15" :value="progress"
            ><strong class="white--text"
                >{{ progress }}%</strong
            ></v-progress-linear
        >
        <v-card-text>
            Required :<v-icon>mdi-cash</v-icon> &nbsp;
            <b>{{
                new Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                }).format(campaign.required)
            }}</b>
        </v-card-text>
        <v-card-text>
            Donate :<v-icon>mdi-cash</v-icon> &nbsp;
            <b>{{
                new Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                }).format(campaign.collected)
            }}</b>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    name: "campaignItem",
    props: ["campaign"],
    computed: {
        progress() {
            return Math.round(
                (this.campaign.collected / this.campaign.required) * 100
            );
        },
    },
};
</script>

<style></style>
