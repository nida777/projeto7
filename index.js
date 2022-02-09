 const express = require('express')
const app = express()
const exphbs = require('express-handlebars')

//Conexão com Banco de Dados
const connect = require('./mysqlFile')
const db = require('mysql').createPool(connect)

app.use(express.json())
app.use('/public', express.static('public'))
app.engine('.hbs', exphbs.engine({
  defaultLayout: 'main', extname: 'hbs'
}))
app.set('view engine', '.hbs')


app.get('/', (req, res) => {
  db.query(`SELECT * FROM carroImg`, (error, results) => {
    if(error) return res.status(500).send(error)
    res.render('home', {results})
  })
})

app.get('/carroImg/:id',(req, res) =>{
var img =  req.params.urlImg
 db.query(`SELECT * FROM carroImg WHERE urlImg=${urlImg}`, (error, result) => {
    if(error) return res.status(500).send(error)
    res.status(200).json(result)
    console.log(id)
 })
})

app.post('/', (req, res) => {
  
})

app.listen(3000, () => {
  console.log("Backend executando...")
})




