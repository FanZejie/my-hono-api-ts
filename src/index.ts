import { Hono } from 'hono'
import menu from './routes/menu'
import analysis from './routes/analysis'

const app = new Hono()
app.get('/', (c) => c.text('Please test me!'))
app.route('/api/menu', menu)
app.route('/api/analysis', analysis)

export default app