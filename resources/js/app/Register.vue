<template>
    <div class="mt-5">
        <div class="card justify-content-center align-items-center w-25">
            <div class="card-body">
                <form action="" method="post" @submit.prevent="register">
                    <div class="form-group">
                        <label class="col-form-label mt-4" for="inputDefault"
                            >Name</label
                        >
                        <input
                            type="text"
                            class="form-control"
                            placeholder="Name..."
                            v-model="input.name"
                        />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1" class="form-label mt-4"
                            >Email address</label
                        >
                        <input
                            type="email"
                            class="form-control"
                            placeholder="Enter email"
                            v-model="input.email"
                        />
                    </div>

                    <button
                        type="submit"
                        class="btn btn-primary btn-block mt-4"
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "Register",
    data() {
        return {
            input: {
                name: "",
                email: "",
            },
            loading: true,
        };
    },
    methods: {
        register() {
            console.log(this.input);
            axios
                .post("/api/auth/register", this.input)
                .then((res) => {
                    console.log(res.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        },
    },
};
</script>

<style>
.card {
    position: relative;
    top: 200px;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>
