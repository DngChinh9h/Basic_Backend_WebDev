const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.static(__dirname));
const port = 3000; // Server chạy ở cổng 3000


const corsOptions = {
    origin: 'http://127.0.0.1:5500', 
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

// Tạo 1 đường dẫn API để Frontend gọi vào lấy Key
app.get('/api/get-map-key', (req, res) => {
    // Trả Key từ file .env về cho Frontend
    res.json({ apiKey: process.env.GOOGLE_MAPS_API_KEY });
});

app.listen(port, () => {
    console.log(`Backend server đang chạy tại http://localhost:${port}`);
});