<template>
    <v-card>
        <v-toolbar dark color="primary">
            <v-btn icon dark @click.native="close">
                <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title>Login</v-toolbar-title>
        </v-toolbar>

        <v-container fluid>
            <v-form ref="form" v-model="valid" lazy-validation>
                <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="Email"
                    required
                    append-icon="mdi-email"
                >
                </v-text-field>
                <v-text-field
                    v-model="password"
                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="passwordRules"
                    :type="showPassword ? 'text' : 'password'"
                    label="Password"
                    hint="At least 6 characters"
                    counter
                    @click:append="showPassword = !showPassword"
                >
                </v-text-field>
                <div class="text-xs-center">
                    <v-btn
                        color="primary"
                        :disabled="!valid"
                        @click="submit"
                        class="white--text"
                    >
                        Login
                        <v-icon right dark>mdi-lock-open</v-icon>
                    </v-btn>
                    <v-btn
                        color="red darken-1"
                        @click="authProvider('google')"
                        class="white--text"
                    >
                        Login with Google
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
    name: "Login",
    data() {
        return {
            valid: true,
            email: "",
            emailRules: [
                (v) => !!v || "Email is Required",
                (v) =>
                    /([a-zA-Z0-9_]{1,})(@)([a-zA-Z0-9_]{2,})+/.test(v) ||
                    "Email must be valid",
            ],
            showPassword: false,
            password: "",
            passwordRules: [
                (v) => !!v || "Password Required",
                (v) => (v && v.length >= 6) || "Min 6 Characters",
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
            setAuth: "auth/set",
        }),
        submit() {
            if (this.$refs.form.validate()) {
                let formData = {
                    email: this.email,
                    password: this.password,
                };
                let url = "/api/auth/login";
                axios
                    .post(url, formData)
                    .then((response) => {
                        let { data } = response.data;
                        this.setAuth(data);
                        if (this.user.user.id.length > 0) {
                            this.setAlert({
                                status: true,
                                color: "primary",
                                text: "Login Success",
                            });
                            this.close();
                        } else {
                            this.setAlert({
                                status: true,
                                color: "error",
                                text: "Login Failed",
                            });
                        }
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
                        text: "Login Failed",
                        color: "error",
                    });
                });
        },
    },
};
</script>
