const express = require('express')
const app = express()
const favicon = require('serve-favicon')
//importing files from folder page
const test = require('./page/search_result')


app.set('view engine','ejs')
app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use(express.static(__dirname+'/public'))
app.use(favicon(__dirname+'/public'+'/favicon.ico'))

app.get('/',(req,res) => {
    res.render('index')
})

//movie api fetching file
app.use('/movie',test)


app.listen(8080,() => {
    console.log("workkiinngggg......")
})

