import NoFocusSearch from './src/main';

/* istanbul ignore next */
NoFocusSearch.install = function(Vue) {
  Vue.component(NoFocusSearch.name, NoFocusSearch);
};

export default NoFocusSearch;