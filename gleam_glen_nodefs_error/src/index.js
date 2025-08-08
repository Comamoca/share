import * as glen from '../glen/glen.mjs';
import * as my_app from './glen_nodefs_error.mjs';

export default {
  async fetch(request, _env, _ctx) {
    const req = glen.convert_request(request);
    const response = await my_app.handle_req(req);
    const res = glen.convert_response(response);

    return res;
  },
};
