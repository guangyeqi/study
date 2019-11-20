# 横行竖列，交叉形成单元格(cell)(n\*m)，划分网格的线叫网格线(n+1,m+1)

# 属性

## 容器属性(作用于容器)

### display:grid 默认块级元素，display:inline-grid;行内元素。

#### 容器子元素（项目）的 float、display: inline-block、display: table-cell、vertical-align 和 column-\*

### 设置行(grid-template-rows)与列(grid-template-coluns)。

### grid-template-\* : 100px 100px 100px;

### grid-template-\* : 33.33% 33.33% 33.33%;

### repeat 函数，grid-template-\* : 100px 100px 100px; = > grid-template-\*:repeat(3,33.33%)

#### repeat(a,b):a,重复次数。b，要重复的值。

#### repeat 某种模式。repeat(2,100px 40rpx 80rpx);

#### 不知道容器多大，希望一行有仅可能的单元格，可使用 auto-fill 进行填充。repeat(auto-fill,100px);s

### fr(fraction，片段)，用于表示比例大小。

#### 1fr 2fr。2fr 是 fr 的两倍。

### minmax(a,b);生成一个长度范围。a，最小值。b，最大值。

#### minmax(100px,1fr);

### auto。自动决定长度。

### 网格线名称。
####  grid-template-*中可以使用[],指定每一根线的名称。一根线可以有多个名字。
#### grid-templat-*:[r0]100px [r1]100px [r2]100px [r3]100px;

## 项目属性(作用于子项目)
