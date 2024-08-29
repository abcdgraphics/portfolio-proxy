import corsAnywhere from "cors-anywhere";
const port = 5000;

corsAnywhere
  .createServer({
    originBlacklist: [],
    originWhitelist: [],
    requestHeaders: ["authorization", "x-requested-with"],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  })
  .listen(port, () => {
    console.log(`CORS Anywhere server running on http://localhost:${port}`);
  });
