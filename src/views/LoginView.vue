<template>
  <section class="list login">
    <header class="list__header">
      <h2 class="list__headerTitle">
        {{ title }}
      </h2>
    </header>

    <div class="list__cardContainer">
      <base-card :customClasses="'card--smallWidth'">
        <article class="list__article">
          <h3 class="list__title list__title--center">
            {{ description }}
          </h3>
          <section class="login__form">
            <form @submit.prevent="handleSubmit" autocomplete="off">
              <div class="login__formGroup">
                <label
                  for="username"
                  class="login__label">Email</label
                >
                <input
                  type="email"
                  id="username"
                  v-model="username"
                  required
                  class="input login__input"
                  placeholder="Enter your email"
                />
              </div>
              <div class="login__formGroup">
                <label
                  for="password"
                  class="login__label">Password</label
                >
                <input
                  type="password"
                  id="password"
                  v-model="password"
                  required
                  class="input login__input"
                  placeholder="Enter your password"
                />
              </div>
              <div class="login__formGroup login__formGroup--button">
                <RouterLink
                  to="/register"
                  class="login__link nostyle"
                >
                  Don't have an account?
                </RouterLink>
                <button
                  type="submit"
                  class="login__button"
                  @click="handleSubmit"
                  :disabled="!username || !password"
                >
                  Login
                </button>
              </div>
            </form>
          </section>
        </article>
      </base-card>
    </div>
  </section>
</template>

<script>
import { RouterLink } from 'vue-router';
import { mapActions } from 'vuex';

export default {
  name: 'Login',
  data() {
    return {
      title: 'Login',
      description: 'Please enter your credentials to login.',
      username: '',
      password: '',
    }
  },
  methods: {
    ...mapActions({
      signIn: 'authStore/signIn',
    }),
    handleSubmit() {
      this.signIn({
        email: this.username,
        password: this.password,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  &__form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  &__formGroup {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;

    margin-bottom: 2rem;

    &--button {
      justify-content: space-between;

      margin-top: 1rem;
    }
  }

  &__label {
    flex: 0 1 7rem;

    padding: 0.7rem 0.5rem 0.4rem 0;
    font-weight: bold;
  }

  &__input {
    flex: 1 1 auto;

    padding: 0.5rem;
  }
}
</style>
