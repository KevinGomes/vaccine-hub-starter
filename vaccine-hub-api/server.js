const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const { PORT } = require("./config")

const { BadRequestError, NotFoundError } = require("./utils/errors")

const app = express()

app.use((cors))

//parse incoming request with json
app.use(express.json())

app.use(morgan("tiny"))

app.use((err, req,res,next) => {
    const status = err.status || 500
    const message = err.message
    return res.status(status).json({
        error: { message, status}
    })
})

app.use((req,res,next) => {
    return next(new NotFoundError())
})

app.listen(PORT, ()=> {
    console.log(`Sever running http://localhost:${PORT}`)
})