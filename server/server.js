const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());

app.get('/api/searchcatalog', async (req, res) => {
  const { Category = 'All', Keyword = '', CreatorTargetId, MinPrice, MaxPrice, Limit = 30, Cursor } = req.query;
  const params = { category: Category, keyword: Keyword, limit: Limit };
  if (CreatorTargetId) params.creatorTargetId = CreatorTargetId;
  if (MinPrice) params.minPrice = MinPrice;
  if (MaxPrice) params.maxPrice = MaxPrice;
  if (Cursor) params.cursor = Cursor;

  try {
    const resp = await axios.get('https://catalog.roblox.com/v1/search/items/details', { params });
    res.json(resp.data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
