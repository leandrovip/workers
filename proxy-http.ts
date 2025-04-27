export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    url.port = "8080"; // Define a porta 8080
    url.protocol = "http:"; // Garante que vai HTTP para o servidor interno
    return fetch(url.toString(), request);
  },
};
