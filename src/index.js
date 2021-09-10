const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();
const port = 1200;

app.set('port', port);
app.set('views', path.join(__dirname, 'views'));

app.engine('hbs', exphbs({
    defaultLayout: 'inicio.hbs',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
}))

app.set('view engine', 'hbs');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(require('./routes').router);
app.use('/productos', require('./routes/productos').router);

app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), function() {
    console.log("Servidor inciado");
});
