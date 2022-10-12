import express from 'express';
const router = express.Router()


// Route for homepage
router.route('/').get((req,res) => {
    res.send('<h1>Hello and welcome</h1>');
})


export {router};