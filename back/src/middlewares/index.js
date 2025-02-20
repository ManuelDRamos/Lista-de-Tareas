function testMiddleware(req, res, next) {
    console.log(" Middleware funcionando correctamente");
    next();
}

function bodyValidation(req, res, next) {
    const requiredFields = ["title", "description"];
    const missingFields = requiredFields.filter((field) => !req.body[field]);

    if (missingFields.length > 0) {
        return res.status(400).json({
            message: `Faltan los siguientes campos para crear una tarea: ${missingFields.join(", ")}`,
        });
    }

    next();
}

module.exports = {
    testMiddleware,
    bodyValidation
};
