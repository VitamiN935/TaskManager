
export default {
  install(Vue) {
    Vue.prototype.$message = function(html) {
      M.toast({html, classes: 'teal lighten-1'});
    }
  }
}