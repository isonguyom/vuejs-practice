"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
// in child component
var _default = {
  props: {
    parentmsg: String
  },
  template: "\n  <h4>{{ parentmsg || 'No props passed yet' }}</h4>\n  "
};
exports["default"] = _default;