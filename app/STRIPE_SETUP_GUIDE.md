# Stripe 支付集成配置指南

## 快速开始

### 1. 注册Stripe账号
1. 访问 [stripe.com](https://stripe.com)
2. 点击 "Start now" 注册
3. 验证邮箱
4. 进入 [Dashboard](https://dashboard.stripe.com)

### 2. 获取API密钥

#### 测试环境密钥
1. 确保右上角开关是 "Test mode"（测试模式）
2. 点击左侧 "Developers" → "API keys"
3. 复制以下密钥：
   - **Publishable key**: `pk_test_...` (前端使用)
   - **Secret key**: `sk_test_...` (后端使用)

#### 生产环境密钥
1. 激活账户（需要提交业务信息）
2. 关闭 "Test mode"
3. 获取生产密钥（以 `pk_live_` 和 `sk_live_` 开头）

### 3. 配置环境变量

#### 本地开发
创建 `.env.local` 文件：
```bash
VITE_STRIPE_PUBLIC_KEY=pk_test_your_key_here
STRIPE_SECRET_KEY=sk_test_your_key_here
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret_here
```

#### Vercel部署
1. 进入 Vercel Dashboard
2. 选择你的项目
3. 点击 "Settings" → "Environment Variables"
4. 添加以下变量：
   - `VITE_STRIPE_PUBLIC_KEY`
   - `STRIPE_SECRET_KEY`
   - `STRIPE_WEBHOOK_SECRET`

### 4. 配置Webhook（可选但推荐）

Webhooks用于接收支付状态通知（支付成功、失败等）。

#### 本地测试
1. 安装Stripe CLI: [下载地址](https://stripe.com/docs/stripe-cli)
2. 登录: `stripe login`
3. 转发webhook: `stripe listen --forward-to localhost:3000/api/webhook`
4. 复制输出的 `whsec_...` 作为 `STRIPE_WEBHOOK_SECRET`

#### 生产环境
1. Stripe Dashboard → "Developers" → "Webhooks"
2. 点击 "Add endpoint"
3. Endpoint URL: `https://yourdomain.com/api/webhook`
4. 选择事件: `payment_intent.succeeded`, `payment_intent.payment_failed`
5. 复制 Signing secret

### 5. 测试支付

#### 测试卡号
| 卡号 | 结果 |
|------|------|
| `4242 4242 4242 4242` | 支付成功 |
| `4000 0000 0000 0002` | 支付失败（卡被拒绝）|
| `4000 0000 0000 9995` | 支付失败（余额不足）|

其他信息可随意填写：
- Expiry: 任意未来日期 (如 12/25)
- CVC: 任意3位数 (如 123)
- ZIP: 任意5位数 (如 12345)

### 6. 支付流程

```
1. 用户添加商品到购物车
2. 点击"结算"进入结账页面
3. 填写收货信息
4. 进入支付页面
5. Stripe Elements加载支付表单
6. 用户输入卡号
7. 点击支付
8. Stripe处理支付
9. 支付成功 → 显示成功页面
10. 支付失败 → 显示错误信息
```

### 7. 查看交易

1. 登录 [Stripe Dashboard](https://dashboard.stripe.com)
2. 点击 "Payments"
3. 查看所有交易记录
4. 可以退款、导出报表等

---

## 费用说明

### 交易手续费
| 地区 | 费率 |
|------|------|
| 美国 | 2.9% + $0.30 |
| 欧洲 | 1.5% + €0.25 |
| 中国/香港 | 3.4% + HK$2.35 |

### 提现
- 自动提现到银行账户
- 美国：T+2（2个工作日到账）
- 其他国家：7天滚动提现

---

## 常见问题

### Q: 为什么支付失败？
常见原因：
- 使用了错误的测试卡号
- API密钥配置错误
- 网络问题
- 金额格式错误（需要以"分"为单位）

### Q: 如何支持支付宝/微信支付？
Stripe支持：
- 支付宝（需要申请）
- 微信支付（需要申请）
- 在 Dashboard → "Settings" → "Payment methods" 中启用

### Q: 如何退款？
1. Dashboard → "Payments"
2. 找到要退款的订单
3. 点击 "Refund"
4. 输入退款金额（可部分退款）

### Q: 如何防止欺诈？
Stripe Radar自动检测：
- 3D Secure验证
- 机器学习风控
- 在 Dashboard 中配置规则

---

## 下一步

1. ✅ 配置Stripe密钥
2. ✅ 测试支付流程
3. ⏳ 设置邮件通知（订单确认邮件）
4. ⏳ 保存订单到数据库
5. ⏳ 库存管理

需要帮助？查看 [Stripe官方文档](https://stripe.com/docs)
