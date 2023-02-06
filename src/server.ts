import app from "./app";
import AppDataSource from "./data-source";

(async () => {
    const PORT = process.env.PORT
    await AppDataSource.initialize()
        .catch((err) => {
            console.error("Error during Data Source initialization", err)
        })

    var cors = require('cors')

    app.use(cors())

    app.listen(PORT, () => {
        console.log(`Servidor executando ${PORT}`)
    })
})()