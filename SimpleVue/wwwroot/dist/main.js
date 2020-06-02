var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "vue", "./HelloWorld", "./inner"], function (require, exports, vue_1, HelloWorld_1, inner_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    vue_1 = __importDefault(vue_1);
    HelloWorld_1 = __importDefault(HelloWorld_1);
    inner_1 = __importDefault(inner_1);
    vue_1.default.component("hello-world", HelloWorld_1.default);
    vue_1.default.component("inner-component", inner_1.default);
    new vue_1.default({
        el: '#app',
    });
});
//# sourceMappingURL=main.js.map