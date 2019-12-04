import { AuthReducer, Actions as AuthActions } from "./auth";
import {
  RemoteConfigReducer,
  Actions as RemoteConfigActions,
} from "./remoteConfig";

export default {
  AuthReducer,
  RemoteConfigReducer,
};

export const Actions = {
  Auth: AuthActions,
  RemoteConfig: RemoteConfigActions,
};
