# Discord + Github Webhook server

Using two web hooks, this applet sends a message to a specific Discord channel once a user stars this repository on GitHub.


### Technology

* NodeJS
* Express
* node-fetch
* nodemon
* GitHub webhooks
* Discord webhooks

## This server is hosted on Heroku

Upon receiving a POST request from GitHub (which listens for a starring event), this server sends it's own POST request to Discord with the users variables in it's body.

Once you've starred this repo, check out the automated message here:
https://discord.com/channels/791986610736332802/791986611218153475
