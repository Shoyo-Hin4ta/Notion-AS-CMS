import { app } from "./app.js";

try {
    app.listen(process.env.PORT || 8000, () => {
        console.log("App lisening to port " + process.env.PORT);
    })
} catch (error) {
    console.log(error);
}