import express from 'express';

const router = express.Router();
const routeName = 'portfolio';

router.get('/', (req, res) => {
    res.render(`${routeName}/portfolio`, {layout: 'portfolio'});
});

router.get('/artist-statement', (req, res) => {
    res.render(`${routeName}/artist-statement`, {layout: 'portfolio'});
});

router.get('/resume', (req, res) => {
    res.render(`${routeName}/resume`, {layout: 'portfolio'});
});

router.get('/cv', (req, res) => {
    res.render(`${routeName}/cv`, {layout: 'portfolio'});
});

router.get('/girlhood', (req, res) => {
    res.render(`${routeName}/girlhood`, {layout: 'portfolio'});
});
export { router }