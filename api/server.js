const express = require("express");

const app = express();
const PORT = 4000;

app.get('/',(req,res)=> {
    res.send('Works!')
})

app.listen(PORT, () => console.log(`Alive on http://localhost:${PORT}`));
