import { App } from "vue";
import YButton from "./button";
import SFCButton from "./SFCButton.vue";
import JSXButton from "./JSXButton";

export { YButton, SFCButton, JSXButton };

export default {
  install(app: App): void {
    app.component(YButton.name as string, YButton);
    app.component(SFCButton.name as string, SFCButton);
    app.component(JSXButton.name as string, JSXButton);
  },
};
