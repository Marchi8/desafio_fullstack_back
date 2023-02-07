import app from "./app";
import AppDataSource from "./data-source";

(async () => {
    const PORT = process.env.PORT
    await AppDataSource.initialize()
        .catch((err) => {
            console.error("Error during Data Source initialization", err)
        })

    const cors = require('cors');
    const corsOptions = {
        origin: 'http://localhost:3000',
        credentials: true,            //access-control-allow-credentials:true
        optionSuccessStatus: 200
    }
    app.use(cors(corsOptions));

    app.listen(PORT, () => {
        console.log(`Servidor executando ${PORT}`)
    })
})()