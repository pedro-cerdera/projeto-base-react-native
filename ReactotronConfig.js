import Reactotron, {
  trackGlobalErrors,
  openInEditor,
  networking,
} from "reactotron-react-native";
import { reactotronRedux } from "reactotron-redux";
// import sagaPlugin from "reactotron-redux-saga";

let tron;

if (__DEV__) {
  tron = Reactotron.configure()
    .use(reactotronRedux())
    // .use(sagaPlugin())
    // .use(asyncStorage())
    .use(trackGlobalErrors())
    .use(openInEditor())
    .use(
      networking({
        ignoreUrls: /\/(logs|symbolicate)$/,
      })
    )
    .useReactNative()
    .connect();

  tron.clear();

  console.tron = tron;
} else {
  const noop = () => undefined;

  tron = noop;

  console.tron = {
    configure: noop,
    connect: noop,
    use: noop,
    useReactNative: noop,
    clear: noop,
    log: noop,
    logImportant: noop,
    display: noop,
    warn: noop,
    error: noop,
  };
}

export default tron;
