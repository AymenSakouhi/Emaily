const express = require('express');
require("dotenv/config");

const app = express();

app.get('/', (req, res) => {
    res.send({ hi: 'there' });
    }
);



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}!`);
    }
);