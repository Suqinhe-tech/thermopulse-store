# ThermoPulse Recovery

专业级冷热按摩仪和筋膜枪跨境电商独立站

## 功能特性

- 🌐 **双语支持** - 中英文无缝切换
- 🛒 **完整购物车** - 添加、删除、修改数量
- 💳 **支付集成** - Stripe支付支持
- 📱 **响应式设计** - 完美适配手机、平板、桌面
- ✨ **现代动效** - 流畅的交互动画
- 🔍 **SEO优化** - 搜索引擎友好

## 技术栈

- **前端**: React + TypeScript + Vite
- **样式**: Tailwind CSS + shadcn/ui
- **动画**: Framer Motion
- **国际化**: i18next
- **CMS**: Sanity (可选)
- **部署**: Vercel

## 快速开始

### 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build
```

### 环境变量

创建 `.env` 文件:

```env
# Sanity CMS (可选)
VITE_SANITY_PROJECT_ID=your_project_id
VITE_SANITY_DATASET=production
VITE_SANITY_API_VERSION=2024-01-01

# Stripe支付 (可选)
VITE_STRIPE_PUBLIC_KEY=your_stripe_public_key
```

## 项目结构

```
├── src/
│   ├── sections/        # 页面区块组件
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Categories.tsx
│   │   ├── Products.tsx
│   │   ├── Features.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Cart.tsx
│   │   └── Footer.tsx
│   ├── components/ui/   # shadcn/ui 组件
│   ├── hooks/           # 自定义Hooks
│   ├── data/            # 静态数据
│   ├── types/           # TypeScript类型
│   ├── i18n/            # 国际化配置
│   ├── App.tsx
│   └── main.tsx
├── public/images/       # 产品图片
└── dist/               # 构建输出
```

## 部署

### Vercel (推荐)

1. 推送代码到 GitHub
2. 在 Vercel 导入项目
3. 自动部署完成

### 手动部署

```bash
npm run build
# 上传 dist/ 目录到任意静态托管服务
```

## 自定义配置

### 添加新产品

编辑 `src/data/products.ts`:

```typescript
{
  id: 'product-id',
  name: '产品名称',
  nameKey: 'translation.key',
  description: '产品描述',
  descriptionKey: 'translation.key',
  price: 199,        // 美元价格
  priceCN: 1299,     // 人民币价格
  image: '/images/product.jpg',
  category: 'category-id'
}
```

### 修改翻译

编辑 `src/i18n/index.ts` 添加或修改翻译内容。

## 许可证

MIT
