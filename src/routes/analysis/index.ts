import { Hono } from "hono";
import fakeAlarmData from "../../fakeData/causeAnalysis";

const analysis = new Hono()

analysis.get('/', (c) => c.json(fakeAlarmData))

export default analysis