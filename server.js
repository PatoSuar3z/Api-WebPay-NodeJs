const express =  require('express')
const routes = require('./routes')
const cors = require('cors')

const app = express()
app.set ('port', process.env.PORT || 9000 )


app.use(express.json())
app.use(cors())

//routes
app.get('/', (req, res) => {
    res.send('Webpay')
})

app.use('/pago', routes)


// Start the server
app.listen(app.get('port'), ()=> {
    console.log('Server is running on port', app.get('port'))
})

