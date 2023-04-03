<template>
  <section class="addList">
    <label v-show="listnameVisible" class="addList__label">
      <input
        ref="addlistname"
        id="addList"
        class="addList__input"
        type="text"
        placeholder="New list name"
        v-model="listname"
        @keydown.enter="addList()" />
    </label>
    <button
      class="addList__btn nostyle"
      v-show="!listnameVisible"
      @click.stop="setListnameVisibility">
      + Add new list
    </button>
  </section>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'addList',
  data() {
    return {
      listname: null,
      listnameVisible: false,
    };
  },
  methods: {
    ...mapActions([
      'addNewList',
    ]),
    setListnameVisibility() {
      this.listnameVisible = true;
      setTimeout(() => {
        this.$refs.addlistname.focus();
      }, 350);
    },
    addList() {
      const newList = {
        id: new Date().valueOf(),
        name: this.listname,
        todos: [],
      };
      this.addNewList(newList);
      this.listnameVisible = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.addList {
  width: 100%;
  max-width: 30rem;
  margin: 0 auto;
  border-radius: 1rem;
  box-shadow: 0 0.2rem 0.8rem rgba($black, 0.26);

  &__input {
    width: 100%;
    min-height: 4rem;
    font-size: 1.5rem;
    cursor: pointer;
    outline: 0 none;
    border-color: transparent;
    background: transparent;
  }

  &__btn {
    width: 100%;
    padding: 1rem 0 0.8rem;
    font-size: 1.5rem;
    cursor: pointer;
    border-color: transparent;
    background: transparent;
  }
}
</style>
