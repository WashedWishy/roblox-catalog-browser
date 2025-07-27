# Roblox Catalog Browser

## Setup

### Server (Node.js proxy)

1. Navigate to `server/`
2. Run `npm install` to install dependencies
3. Run `node server.js` to start the server

Deploy to Render:
- Build command: `npm install`
- Start command: `node server/server.js`
- Set env: `PORT=3000`

### Roblox GUI

1. Open `catalog-ui-template.rbxl` in Roblox Studio
2. Enable `HttpService` in Game Settings
3. In `LocalScript`, change `BASE_URL` to your Render URL
4. Play the game and browse the catalog!
