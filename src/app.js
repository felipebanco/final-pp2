const express = require('express')
const methodOverride =  require('method-override'); // Pasar poder usar los métodos PUT y DELETE
const path = require('path');

const routerLogin = require('./routes/routerLogin')
const routerEquipoRotativo = require('./routes/routerEquipoRotativo')
const app = express();



app.use(express.static(path.join(__dirname, '../public')));  // Necesario para los archivos estáticos en el folder /public
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method')); 


app.use('/', routerLogin);
app.use('/equipo-rotativo', routerEquipoRotativo);




app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.listen(5005, () => { 
    console.log(`\\*-------------------------*\\`);
    console.log(`Server running in 5005 port`);
    console.log(`Now, you can open http://localhost:5005 in your favorite browser `);
    console.log(`Happy programming and never stop learning!`);
    
    console.log(`\\*-------------------------*\\`);
  });
