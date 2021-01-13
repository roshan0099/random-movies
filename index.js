const express = require('express')
const app = express()
const favicon = require('serve-favicon')
//importing files from folder page
const test = require('./page/search_result')

const port = process.env.PORT || 8080;

app.set('view engine','ejs')
app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use(express.static(__dirname+'/public'))
app.use(favicon(__dirname+'/public'+'/favicon.ico'))

app.get('*',(req,res) => {
    res.render('index')
})

//movie api fetching file
app.use('/movie',test)


app.listen(process.env.PORT || 3000,() => {
    console.log("workkiinngggg......")
})

