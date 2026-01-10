import { setupWorker } from "msw/browser";
import {
  login,
  join,
  checkEmail,
  checkNickname,
  findPassword,
  resetPassword,
  googleLogin,
} from "./authHandler";
import { meetingHandler } from "./meetingHandler";

const handlers = [
  login,
  join,
  checkEmail,
  checkNickname,
  findPassword,
  resetPassword,
  googleLogin,
  ...meetingHandler,
];
export const worker = setupWorker(...handlers);
