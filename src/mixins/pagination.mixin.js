import _ from 'lodash'

export default {
  state: {
    page: 1,
    sizePage: 6,
    countPage: 0,
    allItems: [],
    items: []
  },

  methods: {
    setupPagination(allItems) {
      this.allItems = _.chunk(allItems, this.sizePage);
      this.countPage = _.size(this.allItems);
      this.items = this.allItems[this.page - 1] || this.allItems[0];
    },

    changePageHandler(page) {
      this.items = this.allItems[page - 1] || this.allItems[0];
    }
  }
}