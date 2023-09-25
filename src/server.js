const express = require('express');

const app = express();

app.get('/', (req,res) => {
    return res.json({
        error: false,
        message: 'Acesso bem sucedido!'
    });
});

app.listen(3000, () => {
    console.log('Server is running!');
});