<template>
  <div class="container">
    <h2 class="center">Редактирование задачи</h2>
    <hr />
    <form class="col s12 m12 form" @submit.prevent="updateTask">
      <div class="row">
        <div class="input-field col s10 m8">
          <i class="material-icons prefix">title</i>
          <input class="validate" type="text" id="first_name" required v-model.trim="title" />
          <label for="first_name">Название задачи</label>
        </div>
        <div class="input-field col s10 m8 textarea ">
          <i class="material-icons prefix">description</i>
          <textarea
            class="materialize-textarea detailtextarea"
            type="text"
            id="textarea1"
            placeholder="Подробнее..."
            v-model.trim="description"
          ></textarea>
          <label for="textarea1">Описание</label>
        </div>
        <div class="input-field col s8 m6">
          <div class="chips" ref="chips"></div>
        </div>
        <div class="input-field col s6 m4">
          <input class="datepicker center" type="text" ref="picker" />
        </div>
        <div class="input-field col s10 m8">
          <button class="btn left waves-effect" type="submit">Обновить задачу</button>
          <button class="btn right waves-effect green" @click="completeTask" type="button">Выполнить</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import localizePicker from '@/localize/localizePicker'

export default {
  name: "createTask",

  metaInfo: {
    title: `Редактирование задачи | ${process.env.VUE_APP_TITLE}`
  },

  data() {
    return {
      title: "",
      description: "",
      date: null,
      tags: null
    };
  },

  computed: {
    task() {
      return this.$store.getters.taskById(+this.$route.params.id);
    }
  },

  mounted() {
    this.title = this.task.title;
    this.description = this.task.description;
    this.tags = M.Chips.init(this.$refs.chips, {
      data: this.task.tags,
      placeholder: "Тэги"
    }),
      (this.date = M.Datepicker.init(this.$refs.picker, {
        format: "dd.mm.yyyy",
        defaultDate: new Date(this.task.date),
        setDefaultDate: true,
        i18n: {
          months: localizePicker.months,
          monthsShort: localizePicker.monthsShort,
          weekdays: localizePicker.weekdays,
          weekdaysShort: localizePicker.weekdaysShort,
          weekdaysAbbrev: localizePicker.weekdaysAbbrev,
          cancel: 'Отмена'
        } 
      }));

    setTimeout(() => {
      M.updateTextFields();
    }, 0);
  },

  beforeDestroy() {
    if (this.tags && this.tags.destroy) this.tags.destroy();
    if (this.date && this.date.destroy) this.date.destroy();
  },

  methods: {
    updateTask() {
      const task = {
        id: this.task.id,
        title: this.title,
        description: this.description,
        date: this.date.date,
        tags: this.tags.chipsData
      }

      this.$store.commit('updateTask', task);
      this.$router.push('/');
    },

    completeTask() {
      this.$store.commit('completeTask', this.task.id);
      this.$router.push('/');
    }
  }
};
</script>