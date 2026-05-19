# 计算器智能体

一个简洁美观的网页计算器，支持基础四则运算。

## 功能特性

- ✅ 支持加减乘除四则运算
- ✅ 支持小数运算
- ✅ 清空（C）和退格（⌫）功能
- ✅ 错误提示（除以零、无效输入等）
- ✅ 响应式设计，支持移动端
- ✅ 美观的渐变按钮和动画效果

## 项目结构

```
├── branch-a/          # 静态界面分支
│   ├── index.html     # 计算器页面布局
│   ├── style.css      # 按钮美化样式
│   └── script.js      # 基础输入显示
└── branch-b/          # 完整功能分支
    ├── index.html     # 布局（与A相同）
    ├── style.css      # 样式（与A相同）
    └── script.js      # 完整计算逻辑
```

## 分支说明

| 分支 | 描述 |
|------|------|
| `main` | 主分支，包含完整功能 |
| `branch-a` | 静态界面分支（布局、样式、基础交互） |
| `branch-b` | 完整功能分支（计算逻辑、错误处理） |

## 使用方法

### 在线预览

直接打开 `index.html` 文件即可使用。

### 本地开发

```bash
# 克隆仓库
git clone https://github.com/chaxuejia/calculator.git

# 进入项目目录
cd calculator

# 切换到 main 分支
git checkout main

# 使用浏览器打开 index.html
open branch-b/index.html  # macOS
start branch-b/index.html  # Windows
xdg-open branch-b/index.html  # Linux
```

## 技术栈

- **HTML5** - 页面结构
- **CSS3** - 样式设计（渐变、动画、响应式）
- **JavaScript ES6+** - 交互逻辑

## 操作说明

| 按钮 | 功能 |
|------|------|
| `C` | 清空所有输入 |
| `⌫` | 删除最后一个字符 |
| `+` `-` `×` `÷` | 四则运算符 |
| `=` | 计算结果 |
| `.` | 小数点 |
| `0-9` | 数字输入 |

## 开发流程

```
1. 创建 branch-a（静态界面）
   └── 完成布局、样式、基础交互

2. 创建 branch-b（完整功能）
   └── 实现计算逻辑、错误处理

3. Merge 到 main 分支
   └── 整合所有功能
```

## 许可证

MIT License

## 作者

chaxuejia