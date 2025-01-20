import { swaggerUI } from "@hono/swagger-ui";
import { OpenAPIHono } from "@hono/zod-openapi";
import menu from './routes/menu'
import analysis from './routes/analysis'


const app = new OpenAPIHono();
app.doc("/doc", {
    openapi: "3.0.0",
    info: {
        version: "1.0.0",
        title: "My API",
    },
});
app.get("/ui", swaggerUI({ url: "/doc" }));
app.route('/api/menu', menu)
app.route('/api/analysis', analysis)

export default app