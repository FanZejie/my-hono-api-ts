import { Hono } from 'hono'
import { describe, it, expect } from 'vitest'

const app = new Hono()

// 定义路由
app.get('/', (c) => c.text('Please test me!'))

// 测试逻辑
describe('Test the application', () => {
  it('Should return 200 response', async () => {
    const res = await app.request('http://localhost/') // 模拟请求
    expect(res.status).toBe(200) // 验证响应状态码
    const text = await res.text()
    expect(text).toBe('Please test me!') // 验证响应内容
  })
})