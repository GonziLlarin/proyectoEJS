const express = require('express');
const mainRoutes = require('./routes/main');
const app = express();

app.use(express.static('public'));
app.use('/', mainRoutes);

app.listen(3094,()=>{
    console.log('Servidor iniciado en http://localhost:3094');
});