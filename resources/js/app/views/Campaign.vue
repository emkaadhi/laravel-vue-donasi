<template>
    <div>
        <v-card class="mx-auto">
            <v-img :src="'/images/campaign/' + campaign.image" height="500px">
            </v-img>
            <v-card-title>{{ campaign.title }}</v-card-title>

            <v-card-subtitle class="pb-0">
                {{ campaign.description }}
            </v-card-subtitle>
            <v-card-actions>
                <v-btn color="orange" text> Share </v-btn>

                <v-btn color="orange" text> Explore </v-btn>
            </v-card-actions>
        </v-card>

        <v-card elevation="2" class="pa-2 my-2" tile-outlined>
            <v-card-text>
                <v-simple-table>
                    <thead>
                        <tr>
                            <th class="text-left"><h3>Detail</h3></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><v-icon>mdi-home-city</v-icon> Alamat</td>
                            <td>{{ campaign.address }}</td>
                        </tr>

                        <tr>
                            <td><v-icon>mdi-hand-heart</v-icon> Terkumpul</td>
                            <td class="blue--text">
                                <b>{{
                                    new Intl.NumberFormat("id-ID", {
                                        style: "currency",
                                        currency: "IDR",
                                    }).format(campaign.collected)
                                }}</b>
                            </td>
                        </tr>
                        <tr>
                            <td><v-icon>mdi-cash</v-icon> Dibutuhkan</td>
                            <td class="orange--text">
                                <b>{{
                                    new Intl.NumberFormat("id-ID", {
                                        style: "currency",
                                        currency: "IDR",
                                    }).format(campaign.required)
                                }}</b>
                            </td>
                        </tr>
                    </tbody>
                </v-simple-table>
            </v-card-text>
            <v-card-actions>
                <v-btn
                    block
                    color="primary"
                    class="rounded-pill"
                    v-on:click="donate"
                >
                    <v-icon>mdi-money</v-icon> &nbsp; DONATE
                </v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
import { mapMutations, mapActions } from "vuex";

export default {
    data: function () {
        return {
            campaign: {},
        };
    },
    created() {
        this.go();
    },
    methods: {
        go: function () {
            let { id } = this.$route.params;
            let url = `/api/campaign/${id}`;
            axios
                .get(url)
                .then((res) => {
                    let { data } = res.data;
                    this.campaign = data.campaign;
                    console.log(res.data);
                })
                .catch((err) => console.log(err));
        },
        ...mapMutations({
            tambahTransaksi: "transaction/insert",
        }),
        ...mapActions({
            setAlert: "alert/set",
        }),
        donate() {
            this.tambahTransaksi();
            this.setAlert({
                status: true,
                color: "primary",
                text: "Transaksi berhasil ditambahkan",
            });
        },
    },
};
</script>

<style></style>
