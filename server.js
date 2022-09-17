import express from 'express';
import { engine } from 'express-handlebars';
import { router as portfolioRouter }  from './routes/portfolio.js';

const app = express();

app.use(express.static('public'));

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    res.render('index');
});

app.use('/portfolio', portfolioRouter);


app.listen(3000);