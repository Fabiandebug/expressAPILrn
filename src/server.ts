import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'

const app: express.Application = express()
const address: string = "0.0.0.0:3000"

const corsOptions = {
    origin: "https://somedomain.co.ke",
    optionsSuccessStatus: 200
}


// This uses cors for the whole app routes
app.use(cors(corsOptions))
//  
app.use(bodyParser.json())

app.get('/', function (req: Request, res: Response) {
    res.send("Hello there server is running")
});

// This uses cors for specfic routes
app.get('/test-corse', cors(corsOptions), function (_req, res, next) {
    res.json({ msg: "This is a corse enebled route" })
})

app.listen(3000, function () {
    console.log(`Server is Running on:${address}`)
})