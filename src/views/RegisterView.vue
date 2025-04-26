<template>
  <section class="list register">
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
          <section class="register__form">
            <form @submit.prevent="handleSubmit" autocomplete="off">
              <div class="register__formGroup">
                <label
                  for="username"
                  class="register__label">Email</label
                >
                <input
                  type="email"
                  id="username"
                  v-model="username"
                  required
                  class="input register__input"
                  placeholder="Enter your email"
                />
              </div>
              <div class="register__formGroup">
                <label
                  for="password"
                  class="register__label">Password</label
                >
                <input
                  type="password"
                  id="password"
                  v-model="password"
                  required
                  class="input register__input"
                  placeholder="Enter your password"
                />
              </div>
              <div class="register__formGroup register__formGroup--button">
                <RouterLink
                  to="/login"
                  class="login__link nostyle"
                >
                  Already have an account?
                </RouterLink>
                <button
                  type="submit"
                  class="register__button"
                  :disabled="!username || !password"
                >
                  Register
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
import { mapActions } from 'vuex';

export default {
  name: 'Register',
  data() {
    return {
      title: 'Register',
      description: 'Please enter your email and password to register.',
      username: '',
      password: '',
    }
  },
  methods: {
    ...mapActions({
      signUp: 'authStore/signUp',
    }),
    handleSubmit() {
      this.signUp({
        email: this.username,
        password: this.password,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.register {
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
