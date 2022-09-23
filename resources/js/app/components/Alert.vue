<template>
    <v-snackbar
        v-model="alert"
        color="primary"
        bottom
        timeout="4000"
        outlined
        multi-line
    >
        {{ text }}
        <template v-slot:action="{ attrs }">
            <v-btn text v-bind="attrs" @click="close" color="red">
                <v-icon>mdi-close</v-icon> close
            </v-btn>
        </template>
    </v-snackbar>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
    name: "alert",
    computed: {
        ...mapGetters({
            status: "alert/status",
            color: "alert/color",
            text: "alert/text",
        }),
        alert: {
            get() {
                return this.status;
            },
            set(value) {
                this.setAlert({
                    status: value,
                });
            },
        },
    },
    methods: {
        ...mapActions({
            setAlert: "alert/set",
        }),
        close() {
            this.setAlert({
                status: false,
            });
        },
    },
};
</script>
