import { z } from "zod";
import { createRoute, OpenAPIHono } from "@hono/zod-openapi";
import fakeAlarmData from "../../fakeData/causeAnalysis";

const analysis = new OpenAPIHono()

const basicRoute = createRoute({
    method: "get",
    path: "/",
    responses: {
        200: {
            content: {
                "application/json": {
                    schema: z.object({
                        alertTotal: z.number(),
                        alertSix: z.number(),
                        alertNoHandle: z.number(),
                        alertHanding: z.number(),
                    }),
                },
            },
            description: "say hello",
        },
    },
});

analysis.openapi(basicRoute,(c) => c.json(fakeAlarmData))

export default analysis