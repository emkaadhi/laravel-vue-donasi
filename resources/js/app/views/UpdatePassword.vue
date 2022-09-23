<template>
    <v-container>
        <v-card>
            <v-toolbar dark color="primary">
                <v-toolbar-title>Update Password</v-toolbar-title>
            </v-toolbar>
            <v-container fluid>
                <v-form ref="form" lazy-validation>
                    <v-text-field
                        label="Email"
                        v-model="email"
                        :rules="emailRules"
                        required
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
                    <v-text-field
                        v-model="password_confirmation"
                        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                        :rules="password_confirmation_Rules"
                        :type="showPassword ? 'text' : 'password'"
                        label="Password Confirmation"
                        hint="At least 6 characters"
                        counter
                        @click:append="showPassword = !showPassword"
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
import { mapActions } from "vuex";
export default {
    name: "UpdatePassword",
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
            password_confirmation: "",
            password_confirmation_Rules: [
                (v) => !!v || "Password Required",
                (v) => (v && v.length >= 6) || "Min 6 Characters",
            ],
        };
    },
    methods: {
        ...mapActions({
            setAlert: "alert/set",
            setDialogStatus: "dialog/setStatus",
            setDialogComponent: "dialog/setComponent",
        }),
        close() {
            this.$emit("closed", false);
        },
        submit() {
            if (this.$refs.form.validate()) {
                let formData = {
                    email: this.email,
                    password: this.password,
                    password_confirmation: this.password_confirmation,
                };
                let url = "/api/auth/update-password";
                axios
                    .post(url, formData)
                    .then((response) => {
                        this.setAlert({
                            status: true,
                            color: "primary",
                            text: "Anda berhasil update password , Silakan Login",
                        });
                        this.close();
                        this.$router.push({ path: "/" });
                    })
                    .catch((error) => {
                        let responses = error.response;
                        console.log(responses);
                    });
            }
        },
    },
};
</script>

<style></style>
