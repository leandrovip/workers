export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    url.port = "8443";
    url.protocol = "https:";
    return fetch(url.toString(), request);
  },
};
