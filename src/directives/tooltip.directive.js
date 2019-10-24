export default {
  bind(el, {value}) {
    M.Tooltip.init(el, {html: value})
  },

  unbind(el) {
    const instance = M.Tooltip.getInstance(el);
    instance.destroy();
  } 
}