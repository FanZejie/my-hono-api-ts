import { Hono } from "hono";
import fakeMenuData from "../../fakeData/menu";
const menu = new Hono()

menu.get('/', (c) => c.json(fakeMenuData))

export default menu