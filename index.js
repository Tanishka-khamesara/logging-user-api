const express = require('express');
const app = express();

const loggingMiddleware = (req, res, next) => {
    const start = Date.now(); 

    res.on('finish', () => { 
        const duration = Date.now() - start; 
        const timestamp = new Date().toISOString();
        console.log(` Tanishka Khamesara [${timestamp}] ${req.method} ${req.url} - ${duration}ms`);
    });

    next();
}

app.use(loggingMiddleware);

app.get("/login/user", (req, res) => {
    console.log("Request received");
    res.json({
        success: true,
        message: "The data is consoled"
    });
});

app.listen(6000, () => {
    console.log("Express running on 6000");
});
