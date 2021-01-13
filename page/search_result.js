const express = require('express')
const router = express.Router()
const fetch = require('node-fetch')
require('dotenv').config()

// home page
router.get('/',async (req,res,next) => {

    const movie_name = req.query.field
    console.log(movie_name)
    try
    {
    const resp = await fetch(process.env.LINK)
    const details = await resp.json()
    

    if(resp.ok)
    	res.json(details)
	else
		res.json(details)
	}
	catch(err){
		res.json(details)
	}
})

module.exports = router