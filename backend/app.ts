import express from 'express'
// import routes from './routes'


const app = express();
app.use(express.json());
// app.use(routes);

app.get('/', (req, res) => {
    res.send('Hello World')
})

const port = 5000
app.listen(port, () => {
    console.log(`Listening on port ${port}...`)
})
export default app
