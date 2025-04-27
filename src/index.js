export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    url.port = "8080";
    url.protocol = "http:";
    return fetch(url.toString(), request);
  },
};
