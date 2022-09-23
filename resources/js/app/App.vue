<template>
    <v-app>
        <Alert />

        <keep-alive>
            <v-dialog
                v-model="dialog"
                fullscreen
                hide-overlay
                transition="scale-transition"
                persistent
            >
                <component :is="currentComponent" @closed="setDialogStatus" />
            </v-dialog>
        </keep-alive>

        <v-navigation-drawer app v-model="drawer">
            <v-list>
                <v-list-item v-if="!guest">
                    <v-list-item-avatar>
                        <v-img
                            src="https://cdn.vuetifyjs.com/images/john.png"
                        ></v-img>
                    </v-list-item-avatar>
                    <v-list-item-content>
                        <v-list-item-title class="text-h6">
                            {{ user.user.name }}
                        </v-list-item-title>
                        <v-list-item-subtitle>
                            {{ user.user.email }}
                        </v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                <div class="pa-2" v-if="guest">
                    <v-btn
                        block
                        color="primary"
                        class="white--text mb-2 rounded-pill"
                        @click="setDialogComponent('Login')"
                    >
                        <v-icon left>mdi-lock</v-icon>
                        Login
                    </v-btn>
                    <v-btn
                        block
                        color="red"
                        class="white--text rounded-pill"
                        @click="setDialogComponent('Register')"
                    >
                        <v-icon left>mdi-account</v-icon>
                        Register
                    </v-btn>
                </div>
            </v-list>
            <v-divider></v-divider>
            <v-list nav dense>
                <v-list-item-group color="primary">
                    <v-list-item
                        v-for="(item, index) in menus"
                        :key="`menu-` + index"
                        :to="item.route"
                    >
                        <v-list-item-icon>
                            <v-icon left>{{ item.icon }}</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title>{{
                                item.title
                            }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
            <template v-slot:append v-if="!guest">
                <div class="pa-2">
                    <v-btn block color="red" dark @click="logout">
                        <v-icon>mdi-lock</v-icon>
                        Logout
                    </v-btn>
                </div>
            </template>
        </v-navigation-drawer>

        <v-app-bar app color="primary" dark v-if="isHome">
            <v-app-bar-nav-icon
                @click.stop="drawer = !drawer"
            ></v-app-bar-nav-icon>

            <v-toolbar-title>SanberCode App</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn icon>
                <v-badge color="orange" overlap v-if="transactions > 0">
                    <template v-slot:badge>
                        <span>{{ transactions }}</span>
                    </template>
                    <v-icon>mdi-cash-multiple</v-icon>
                </v-badge>
                <v-icon v-else>mdi-cash-multiple</v-icon>
            </v-btn>

            <v-text-field
                class="mb-5 rounded-pill"
                slot="extension"
                hide-details
                append-icon="mdi-microphone"
                flat
                label="search"
                prepend-inner-icon="mdi-magnify"
                solo-inverted
                @click="setDialogComponent('search')"
            >
            </v-text-field>
        </v-app-bar>

        <v-app-bar app color="primary" dark v-else>
            <v-btn icon @click.stop="$router.go(-1)">
                <v-icon>mdi-arrow-left-circle</v-icon>
            </v-btn>
            <v-spacer></v-spacer>

            <v-btn icon>
                <v-badge color="orange" overlap v-if="transactions > 0">
                    <template v-slot:badge>
                        <span>{{ transactions }}</span>
                    </template>
                    <v-icon>mdi-cash-multiple</v-icon>
                </v-badge>
                <v-icon v-else>mdi-cash-multiple</v-icon>
            </v-btn>
        </v-app-bar>

        <!-- Sizes your content based upon application components -->
        <v-main>
            <!-- Provides the application the proper gutter -->
            <v-container fluid>
                <!-- If using vue-router -->
                <router-view></router-view>
            </v-container>
        </v-main>

        <v-footer app>
            <!-- -->
        </v-footer>
    </v-app>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Alert from "./components/Alert.vue";
import search from "./components/Search.vue";
import Login from "./components/Login.vue";
import Register from "./components/Register.vue";
export default {
    name: "App",
    components: {
        Alert,
        search,
        Login,
        Register,
    },
    data: () => ({
        drawer: true,
        menus: [
            { title: "Home", icon: "mdi-home", route: "/" },
            { title: "Campaigns", icon: "mdi-hand-heart", route: "/campaigns" },
            { title: "Blogs", icon: "mdi-post", route: "/blogs" },
        ],
    }),
    computed: {
        isHome() {
            return this.$route.path === "/" || this.$route.path === "/home";
        },
        ...mapGetters({
            transactions: "transaction/transactions",
            guest: "auth/guest",
            user: "auth/user",
            dialogStatus: "dialog/status",
            currentComponent: "dialog/component",
        }),
        dialog: {
            get() {
                return this.dialogStatus;
            },
            set() {
                return this.setDialogStatus(value);
            },
        },
    },
    methods: {
        ...mapActions({
            setDialogStatus: "dialog/setStatus",
            setDialogComponent: "dialog/setComponent",
            setAuth: "auth/set",
            setAlert: "alert/set",
            // checkToken: "auth/checkToken",
        }),
        logout() {
            let config = {
                headers: {
                    Authorization: "Bearer " + this.user.token,
                },
            };
            axios
                .post("/api/auth/logout", {}, config)
                .then((response) => {
                    this.setAuth({});
                    this.setAlert({
                        status: true,
                        color: "success",
                        text: "Logout Successfully ",
                    });
                    window.location.reload();
                })
                .catch((error) => {
                    let responses = error.response;
                    console.log(responses);
                    this.setAlert({
                        status: true,
                        color: "error",
                        text: data.message,
                    });
                });
        },
    },
    // mounted() {
    //     if (this.user) {
    //         this.checkToken = this.user;
    //     }
    // },
};
</script>

<style></style>
