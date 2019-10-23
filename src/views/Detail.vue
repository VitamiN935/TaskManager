<template>
  <div class="container">
    <h2 class="center">Создание задачи</h2>
    <hr />
    <form class="col s12 m12 form" @submit.prevent="createTask">
      <div class="row">
        <div class="input-field col s10 m8">
          <i class="material-icons prefix">title</i>
          <input class="validate" type="text" id="first_name" required v-model.trim="title" />
          <label for="first_name">Название задачи</label>
        </div>
        <div class="input-field col s10 m8 textarea">
          <i class="material-icons prefix">description</i>
          <textarea
            class="materialize-textarea"
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
          <button class="btn right waves-effect">Создать задачу</button>
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
    title: `Создание задачи | ${process.env.VUE_APP_TITLE}`
  },

  data() {
    return {
      title: "",
      description: "",
      date: null,
      tags: null
    };
  },

  mounted() {
    this.tags = M.Chips.init(this.$refs.chips, {
      placeholder: "Тэги"
    }),
      (this.date = M.Datepicker.init(this.$refs.picker, {
        format: "dd.mm.yyyy",
        defaultDate: new Date(),
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
    createTask() {
      const task = {
        id: Date.now(),
        title: this.title,
        description: this.description,
        status: 'active',
        date: this.date.date,
        tags: this.tags.chipsData
      }

      this.$store.commit('createTask', task);
      this.$router.push('/');
    }
  }
};
</script>