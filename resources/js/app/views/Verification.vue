<template>
    <v-container>
        <v-card>
            <v-toolbar dark color="primary">
                <v-toolbar-title>Verification OTP</v-toolbar-title>
            </v-toolbar>
            <v-container fluid>
                <v-form ref="form" lazy-validation>
                    <v-text-field
                        label="OTP"
                        v-model="otp"
                        :rules="otpRules"
                        required
                    >
                    </v-text-field>
                    <div class="text-xs-center">
                        <v-btn
                            color="primary"
                            class="white--text"
                            @click="submit"
                            :disabled="!valid"
                        >
                            Submit
                            <v-icon right dark>mdi-lock-open</v-icon>
                        </v-btn>
                    </div>
                </v-form>
            </v-container>
        </v-card>
    </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
    name: "Verification",
    components: {},
    data() {
        return {
            valid: true,
            otp: null,
            otpRules: [
                (v) => /([0-9])+/.test(v) || "OTP Code must be numeric",
                (v) =>
                    (v && v.length >= 6 && v.length < 7) ||
                    "Min & Max 6 Characters",
            ],
        };
    },
    computed: {
        ...mapGetters({
            currentUser: "auth/user",
            dialogStatus: "dialog/status",
            currentComponent: "dialog/component",
        }),
        dialog: {
            get() {
                return this.dialogStatus;
            },
            set(value) {
                this.setDialogStatus(value);
            },
        },
    },
    methods: {
        ...mapActions({
            setAlert: "alert/set",
            setDialogStatus: "dialog/setStatus",
            setDialogComponent: "dialog/setComponent",
            setAuth: "auth/set",
        }),
        submit() {
            if (this.$refs.form.validate()) {
                let formData = {
                    otp: this.otp,
                };
                let url = "/api/auth/verification";
                axios
                    .post(url, formData)
                    .then((response) => {
                        let codeResponse = response.data.response_code;
                        if (codeResponse == "01") {
                            this.setAlert({
                                status: true,
                                color: "error",
                                text: response.data.response_message,
                            });
                        } else if (codeResponse == "00") {
                            this.setAlert({
                                status: true,
                                color: "success",
                                text: "Verifikasi OTP sukses, silakan update password anda",
                            });
                            this.$router.push({ path: "/updatepassword" });
                        }
                    })
                    .catch((error) => {
                        let responses = error.response;
                        console.log(responses);
                        this.setAlert({
                            status: true,
                            text: responses.data.message,
                            color: "error",
                        });
                    });
            }
        },
    },
};
</script>

<style></style>
