export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/api/health") {
      return Response.json({
        status: "ok",
        app: "Mestika Chart",
        message: "Mestika backend is running 🍓"
      });
    }

    return new Response("🍓 Mestika Chart is running!", {
      headers: {
        "content-type": "text/plain; charset=UTF-8"
      }
    });
  }
};
