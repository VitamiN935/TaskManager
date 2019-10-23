<template>
  <tr>
    <td>{{idx + 1}}</td>
    <td>{{task.title}}</td>
    <td class="description">{{task.description}}</td>
    <td>{{task.date | date}}</td>
    <td>{{task.tags}}</td>
    <td>
      <span class="white-text badge" :class="coloredStatus">{{task.status | filterStatus}}</span>
    </td>
    <td>
      <router-link 
      tag="button" 
      class="btn btn-sm waves-effect" 
      :to="'task/' + task.id" 
      :disabled='task.status === "complete"'
      >
        <i class="tiny material-icons">input</i>
      </router-link>
    </td>
    <td>
      <button class="btn btn-sm red waves-effect" @click="deleteTask">
        <i class="tiny material-icons">remove_circle</i>
      </button>
    </td>
  </tr>
</template>

<script>
export default {
  name: "task",

  props: {
    task: {
      type: Object,
      required: true
    },
    idx: Number
  },

  computed: {
    coloredStatus() {
      return {
        red: this.task.status === "outdate",
        green: this.task.status === "complete",
        "teal lighten-1": this.task.status === "active"
      };
    },

    tags() {
      
    }
  },

  filters: {
    filterStatus(value) {
      switch (value) {
        case "active":
          return "Активно";
        case "outdate":
          return "Просрочено";
        case "complete":
          return "Выполнено";
      }
    }
  },

  methods: {
    deleteTask() {
      this.$store.commit("deleteTask", this.task.id);
    }
  }
};
</script>