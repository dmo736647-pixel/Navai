# NavAI API 对接文档（统一适配器）

## 架构原则
- 统一接口：为不同供应商定义一致的调用与返回结构
- 适配器模式：每个供应商实现独立适配器，屏蔽差异（认证/限流/错误）
- 异常与重试：标准错误码映射、指数退避重试、可配置超时
- 观测与日志：请求 ID、耗时、状态码、错误摘要；采样与隐私保护

## 统一数据结构（前端 Tool）
- 字段：名称、描述、类别、定价、URL、标签
- 调研扩展：适用场景、API 文档链接、稳定 API 标记、开发者文档链接、响应时间均值、错误处理备注
- 状态：planned/candidate/integrated/testing

## 认证与安全
- 支持 API Key / OAuth / JWT；密钥通过环境变量注入
- 所有请求使用 HTTPS；禁止在日志中输出密钥与敏感数据

## 错误处理约定
- 4xx：参数/鉴权错误，用户可修复；返回用户友好提示
- 5xx：服务端错误，自动重试并降级；记录供应商与端点
- 超时：按供应商建议设置超时与重试上限；保证页面可用

## 性能与限流
- 速率限制：遵循供应商限制，支持排队/令牌桶（前后端）
- 指标：P95 响应时间、成功率、错误率；异常报警

## 适配器示例（伪代码）
```
interface ProviderAdapter {
  infer(input): Promise<Result>
  embed(texts[]): Promise<Embeddings>
}

class OpenAIAdapter implements ProviderAdapter {
  infer(input) { /* 认证、调用、错误映射、重试 */ }
}
```

