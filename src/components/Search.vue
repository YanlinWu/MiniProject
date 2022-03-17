<template>
  <div class="autocomplete">
    <h2>Search and highlight</h2>
    <label>
      <input list="states_list" v-model="state_prefix" />
    </label>
    <datalist id="states_list">
      <option v-for="state in states" :key="state">
        {{ state }}
      </option>
    </datalist>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      state_prefix: "",
      inputs: "",
      states: null,
    };
  },
  mounted() {
    axios
      .get("http://localhost:3000")
      .then((response) => (this.states = response.data.states));
  },
  watch: {
    state_prefix(val) {
      this.inputs = `${val}`;
    },
    inputs: function (newPrefix) {
      axios
        .get("http://localhost:3000/" + newPrefix)
        .then((response) => (this.states = response.data.states));
      // console.log(this.states);
    },
  },
};
</script>