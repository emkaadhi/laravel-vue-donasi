<template>
    <v-card>
        <v-toolbar dark color="primary">
            <v-btn icon dark @click.native="close">
                <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title>Register</v-toolbar-title>
        </v-toolbar>

        <v-container fluid>
            <v-form ref="form" v-model="valid" lazy-validation>
                <v-text-field
                    v-model="name"
                    :rules="nameRules"
                    label="Name"
                    hint="At least 3 characters"
                    counter
                >
                </v-text-field>
                <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="Email"
                    required
                    append-icon="mdi-email"
                >
                </v-text-field>

                <div class="text-xs-center">
                    <v-btn
                        color="primary"
                        :disabled="!valid"
                        @click="submit"
                        class="white--text"
                    >
                        Register
                        <v-icon right dark>mdi-lock-open</v-icon>
                    </v-btn>
                    <v-btn
                        color="red darken-1"
                        @click="authProvider('google')"
                        class="white--text"
                    >
                        Register with Google
                        <v-icon right dark>mdi-google</v-icon>
                    </v-btn>
                </div>
            </v-form>
        </v-container>
    </v-card>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
    name: "Register",
    data() {
        return {
            valid: true,
            name: "",
            nameRules: [
                (v) => !!v || "Name Required",
                (v) => (v && v.length >= 3) || "Min 3 Characters",
            ],
            email: "",
            emailRules: [
                (v) => !!v || "Email is Required",
                (v) =>
                    /([a-zA-Z0-9_]{1,})(@)([a-zA-Z0-9_]{2,})+/.test(v) ||
                    "Email must be valid",
            ],
        };
    },
    computed: {
        ...mapGetters({
            user: "auth/user",
        }),
    },
    methods: {
        ...mapActions({
            setAlert: "alert/set",
        }),
        submit() {
            if (this.$refs.form.validate()) {
                let formData = {
                    email: this.email,
                    name: this.name,
                };
                let url = "/api/auth/register";
                axios
                    .post(url, formData)
                    .then((response) => {
                        this.setAlert({
                            status: true,
                            color: "success",
                            text: "Register Success, silahkan cek email untuk verifikasi kode OTP",
                        });
                        this.close();
                        this.$router.push({ path: "/verification" });
                    })
                    .catch((error) => {
                        let responses = error.response;
                        console.log(responses);
                    });
            }
        },
        close() {
            this.$emit("closed", false);
        },
        authProvider(provider) {
            let url = "/api/auth/social/" + provider;
            axios
                .get(url)
                .then((response) => {
                    let data = response.data;
                    window.location.href = data.url;
                })
                .catch((error) => {
                    this.setAlert({
                        status: true,
                        text: "Register Failed",
                        color: "error",
                    });
                });
        },
    },
};
</script>
