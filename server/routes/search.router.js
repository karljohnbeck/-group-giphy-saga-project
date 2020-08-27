const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const axios = require('axios');

router.get('/:search', (req, res) => {
    axios.get(`http://api.giphy.com/v1/gifs/search?q=${req.params.search}&api_key=${process.env.GIPHY_KEY}`)
    .then(response => {
        res.send(response.data)
    }).catch(error => {
        res.sendStatus(500);
    })
})


module.exports = router;