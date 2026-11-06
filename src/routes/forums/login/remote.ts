import * as v from 'valibot';
import {form, getRequestEvent, query} from "$app/server";

export const login = form(
  v.object({
    username: v.string(),
    password: v.string(),
  }),
  ({ username, password }) => {

    // TODO: här ska du stoppa koden som kollar om man ska bli inloggad
  },
);