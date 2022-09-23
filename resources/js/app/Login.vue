<template>
    <div class="mt-5">
        <div class="card justify-content-center align-items-center w-25">
            <div class="card-body">
                <form action="" method="post">
                    <div class="form-group">
                        <label for="exampleInputEmail1" class="form-label mt-4"
                            >Email address</label
                        >
                        <input
                            type="email"
                            class="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Enter email"
                        />
                    </div>
                    <div class="form-group">
                        <label
                            for="exampleInputPassword1"
                            class="form-label mt-4"
                            >Password</label
                        >
                        <input
                            type="password"
                            class="form-control"
                            id="exampleInputPassword1"
                            placeholder="Password"
                        />
                    </div>
                    <button
                        type="button"
                        class="btn btn-primary btn-block mt-4"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Login",
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
