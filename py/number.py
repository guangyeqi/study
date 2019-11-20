# 数字 number

# 数据类型是不允许变更的，若是变更，将重新分配内存空间
# 可使用 del 删除多数字对象引用(例：del var,del var1,var2)

# 数值类型
'''
int(整型，p3中int无长度限制，可以当作p2Long类型使用)
float(浮点型)
complex(虚数，可以用a+bj或complex(a,b))
'''
# 相互转换
# int(A) 将A转换成整数
# float(A) 将A转换成浮点型
# complex(A) 将A转换成复数，实数为A,虚数为0
# complex(A,B) 将A,B转换成复数，实数为A,虚数为B

# 数学运算
# 基本 + - * /(总是返回浮点型，不同机器上浮点进度可能不同)
# //(结果并不一定是整数，与分子分母的类型关)。
A=7
B=3
C=7.0
D=3.0
print(A//B)# 2
print(A//D)# 2.0
print(C//B)# 2.0
print(C//D)# 2.0

#  ** 幂运算 A**B  A的B次方

# 数学函数
# abs(x) 绝对值
# ceil(x) 向上取整 math.ceil(x)
# epx(x) e的x次方 math.epx(x)
# fabs(x)  math.fabs(x) x的绝对值
# floor(x) 向下取整 math.floor(x)
# log(x)  math.log(x)  例 math.log(math e) = 1.0
# log10(x) math.log10(x)  例 math.log10(100)= 2.0
# max(a,b,c,d,f,...)  a,b,c,d,f...等中的最大值
# min(a,b,c,d,f,...)  a,b,c,d,f...等中的最小值
# modf(x) 返回x的整数部分与小数部分,整数部分是浮点型
# pow(x,y) 幂运算 等价与 x**y
# round(x) 四舍五入
# sqrt(x) 对x开方


#  随机数函数
# choice(seq) 从序列元素中随机选一个 例：random.choice(range(10)),从0-9中随机选择一个
# randrange(statr,stop ,step)  start：开始位置，stop：结束位置，step：步长
# random() 随机生成一个实数  [0,1)
# seed(x) 改变随机数生成器的种子seed  ????不是很理解
# shuffle(list) 将list的顺序随机排列
# unitfrom(x,y)  随机生成一个实数，范围在[x,y]之间。

# 三角函数
# acos(x)  x的反余弦 弧度值
# asin(x)  x的反正弦 弧度值
# atan(x)  x的反正切 弧度值
# atan2(x,y)  (x,y)的反正切 弧度值
# sin(x) x的正弦值
# cos(x) x的余弦值
# tan(x) x的正切值
# hypot(x,y) 欧几里德范数 sqrt(x*x+y*y) 距离范数
# degress(x)  将弧度x转换成角度
# radians(x)  将角度x转换成弧度

# 常量
# pi 圆周率，一般以π来表示
# e 自然长数








