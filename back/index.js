const { app } = require("./src/server.js")
const { dbConnect } = require("./src/config/db.js")



dbConnect()
.then(() => {
    app.listen(4000, () => {
        console.log("El servidor esta activo en el puerto 3000")
    })
})
.catch((err) => {
    console.error(err)
})
