"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  emits: ['post'],
  created: function created() {
    this.$emit('post', 'Hello, I am your child');
  },
  template: "\n    <h2>Child component</h2>\n    "
};
exports["default"] = _default;