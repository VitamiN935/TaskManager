<template>
  <div class="container m12">
    <h2 class="center">Список задач</h2>
    <hr />
    <div class="row">
      <table class="centered">
        <thead>
          <tr>
            <th>#</th>
            <th>Название</th>
            <th>Описание</th>
            <th>Дата</th>
            <th>Тэги</th>
            <th>Статус</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <Task 
          v-for="(task,idx) of tasks"
          :key="task.id"
          :task='task'
          :idx='+idx'
          />
        </tbody>
      </table>
      <Pagination 
        :page-count="countPage"
        :click-handler="changePageHandler"
        :prev-text="'Назад'"
        :next-text="'Вперед'"
        :container-class="'pagination'"
      />
    </div>
  </div>
</template>

<script>
import Task from '@/components/Task'
import PaginationMixin from '@/mixins/pagination.mixin'
import {mapGetters} from 'vuex'

export default {
  name: 'taskslist',

  metaInfo: {
    title: `Список задач | ${process.env.VUE_APP_TITLE}`
  },

  components: {
    Task
  },

  mixins: [PaginationMixin],

  computed: {
    ...mapGetters(['tasks'])
  },

  mounted() {
    this.setupPagination(this.tasks)
  },
}
</script>