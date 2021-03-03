const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const bp = require("body-parser");
const fetch = require("node-fetch");

app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send(
    "This is a server listening to repo changes. Once it detects a push in the repo, it sends a message to a discord server"
  );
});

app.post("/", (req, res) => {
  console.log(req.body);

  console.log("USERNAME:", req.body.sender.login);

  fetch(
    "https://discord.com/api/webhooks/816409393943805963/zcMXnR-RMR8-NTauCoWtwwAEHMau9fjzxXz-9qia4LfYRl6zhUzJO5UPA79vHbLSXJUY",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: `${req.body.sender.login}`,
        avatar_url: `${req.body.sender.avatar_url}`,
        content: `Hey! I just starred the ${req.body.repository.name} repository on GitHub!"`,
      }),
    }
  );
});

app.listen(port, () => {
  console.log(`webhook server running, waiting on repo to be starred`);
});
