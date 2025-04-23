<template>
  <div class="addList">
    <label
      v-show="listNameVisible"
      class="addList__label"
    >
      <input
        id="addList"
        ref="addlistname"
        v-model="listName"
        class="input addList__input"
        type="text"
        placeholder="New list name"
        @keydown.enter="addList()"
      >
    </label>
    <button
      v-show="!listNameVisible"
      class="addList__btn nostyle"
      @click.stop="setListnameVisibility"
    >
      {{ title }}
    </button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'AddList',
  data() {
    return {
      title: '+ Add new list',
      listName: null,
      listNameVisible: false,
    };
  },
  methods: {
    ...mapActions([
      'addNewList',
    ]),
    setListnameVisibility() {
      this.listNameVisible = true;

      setTimeout(() => {
        this.$refs.addlistname.focus();
      }, 350);
    },
    addList() {
      const newList = {
        id: Date.now(),
        title: this.listName,
      };

      this.addNewList(newList);
      this.listNameVisible = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/variables" as *;

.addList {
  width: 100%;
  max-width: 30rem;
  margin: 0 auto;
  border-radius: 1rem;
  background: rgba($secondary-bg-dark, 0.6);
  box-shadow: 0 0.2rem 0.8rem rgba($primary-shadow-dark, 1);

  .light & {
    background: rgba($secondary-bg-light, 0.6);
    box-shadow: 0 0.2rem 0.8rem rgba($primary-shadow-light, 1);
  }

  &:hover {
    background: rgba($secondary-bg-dark, 0.8);

    .light & {
      background: rgba($secondary-bg-light, 0.6);
    }
  }

  &__input {
    width: 100%;
    min-height: 4rem;
    font-size: 1.5rem;
    color: $secondary-body-dark;
    cursor: pointer;
    outline: 0 none;
    border-color: transparent;
    background: transparent;

    .light & {
      color: $secondary-body-light;
    }
  }

  &__btn {
    width: 100%;
    padding: 1rem 0 0.8rem;
    font-family: $fontLeagueSpartan;
    font-size: 1.5rem;
    color: $secondary-body-dark;
    cursor: pointer;
    border-color: transparent;
    background: transparent;

    .light & {
      color: $secondary-body-light;
    }

    &:hover {
      color: $primary-link-dark;

      .light & {
        color: $primary-link-light;
      }
    }
  }
}
</style>
