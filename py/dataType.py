# 标准数据类型
# 1，数字，Numer,不可变
# 1.0，数字有4种
# 1.1，int，长整型
# 1.2，float，浮点型
# 1.3，bool，布尔型
# 1.4，complex，复数型
# 2，字符串，String，不可变
# 3，元组，Tuple，不可变
# 4，列表，List,可变
# 5，集合，Set,可变
# 6，字典，Dictionary，可变

# type()，可以判断变量的类型 type(a)
# isinstance 也可以 isinstance(a,int);
# 区别 type()不认为是父类的子类，isinstance认为是父类的子类

a,b,c,d=1,1.23,False,2+3j
print(a,b,c,d)
print(type(a))
print(type(b))
print(type(c))
print(type(d))
print(isinstance(a,int))
print(isinstance(a,bool))
#  Python2 中是没有布尔型的，它用数字 0 表示 False，用 1 表示 True

# 乘方
A =2
B=5
print(A**B)

# 除法 /表示得到一个浮点数，//表示一个整数
print(B/A)
print(B//A)

# 字符串 String 用'或"包裹起来，同时使用反斜杠\
# 正向索引 从0 开始，反向索引，从-1开始
# 截取语法 str[start:end]
# 字符串不能被改变
# 字符串前加r能是反斜杠不专业
# 重复可使用*

# 列表 List [] ,号分割
# 截取语法 List[start:end],返回一个新List
# 正向索引 从0 开始，反向索引，从-1开始
# +号 连接两个List *号 重复操作

list1=[1,2,3,4,5,6]
list2=['sdf','dsf','sdfd']
list1[0]=0

print(list1,list2)
print(list1[0])
print(list1[1:3])
print(list1[2:])
print(list2*2)
print(list2+list1)

# 截取语法拓展，可传第三参数,作用是步长 List[start:end:step],step可以是负数，标示逆步长

print(list1[1:6:2])
print(list1[1:4:1])

# 元组 Tuple 类似List () 内部,号分割，但是不能修改，只读 
# 用法类似 List

tuple1=(1,2,3,4,5,6,7,8)
print(tuple1)
print(tuple1[2:])
print(tuple1[2:6])
print(tuple1[2:6:2])
print(tuple1*2)
print(tuple1+tuple1)

# 集合 Set 一个或多个不同类型的变量组成，构成Set的元素被称为成员
# 基本功能 成员关系测试和删除重复元素
# 创建 使用{}或set(),创建一个空集合要使用set(),{}是用来生成字典的

setA={'1',2,3,'4'}
print(setA)
# 成员测试
if '1' in setA:
    print('has 1')
else:
    print('no')
setB=set('abcdeghijk')
setC=set('dsjldashfidsfjalsdfaf')

print(setB)
print(setC)
# 差集
print(setB - setC)
# 并集
print(setB | setC)
# 交集
print(setB & setC)
# 不存在setB setC的
print(setB ^ setC)

# 字典 dictionary 无序的对象集合 通过键值key来取值
# key 必须是不可变类型，在同一dictionary中，key必须唯一
# 字典用 {} 表示

dic={}
dic['one']='1_1000'
dic['two']='2_2000'
print(dic)
print(dic['one'])
print(dic['two'])

t_dic={
    '1':12345,
    '2':23456,
    '3':34567,
    '4':45678
}

print(t_dic)
print(t_dic.keys())
print(t_dic.values())

# 数据相互转换
# int(A,B) 将A转换成B进制的整数。A：目标数，B：进制数
# folat(A) 将A准换成浮点型数
# complex(A,B) 创建一个复数，A+Bj
# str(A) 将A转换成字符串
# str(A) 将A转换成字符串
# repr(A) 将A转换成对象字符串，A是object
# eval(A) A是表达式，计算A的结果
# tuple(A) 将A转换成元组
# list(A) 将A转换成列表
# set(A) 将A转换成集合
# dict(key=value,key=value,...) 创建一个字典
# frozenset(A)  返回一个冻结的A，不可修改
# chr(A) 将A(整数)转换成字符
# ord(A) 将A(字符)转换成整数
# hex(A) 将A(整数)转换成16进制字符串
# oct(A) 将A(整数)转换成8进制字符串

# 注释  
#  多行注释用 
# ''' 注释 '''
# """ 注释 """























