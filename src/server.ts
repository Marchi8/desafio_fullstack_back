import app from "./app";

(async () => {
    app.listen(3000, () => {
        console.log('Server running in port 3000')
    })
})()