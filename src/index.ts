import { createApp } from "vue/dist/vue.esm-bundler.js";
import YangUI from './entry'
createApp({
  template: `
      <div>
          <YButton color="blue">普通按钮</YButton>
          <YButton color="pink">普通按钮</YButton>
          <YButton color="yellow">普通按钮</YButton>
          <YButton color="purple" round>普通按钮</YButton>
          <YButton color="purple" icon="edit"></YButton>
      </div>
  `
})
  .use(YangUI)
  .mount("#app");