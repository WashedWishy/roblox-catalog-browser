# roblox-catalog-browser
Roblox game with catalog browsing and purchase UI + Node.js proxy server
# Roblox Catalog Browser

## Setup

### Server (Node.js proxy)

1. Navigate to `server/`.
2. Run `npm install` to install dependencies.
3. Run `node server.js` to start the server.

Example API endpoint:
https://<your-deploy-url>/api/searchcatalog?Category=All&Keyword=hat&MinPrice=10&MaxPrice=500

### Roblox GUI

1. Open `catalog-ui-template.rbxl` in Roblox Studio.
2. Ensure `HttpService` is enabled in Game Settings.
3. In the `LocalScript`, update the `BASE_URL` variable to your deployed API URL.
4. Play or Publish to test.

Load more pages with the "Load More" button, and search/filter with category, keyword, or price range.

Enjoy!
