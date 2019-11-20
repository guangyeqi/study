# 注释 hello word
print("hello world")
# if 语法 要对齐
if True:
    print('true')
else:
    print('false')

if True:
    print('true')
    print('111')
else:
    print('false')
    print('2222')
# 字符串处理
str = 'abcdefgh'
print(str)
print(str[0])
print(str[0:-1])
print(str[2:5])
print(str[2:])
print(str*2)
print(str+'AB')
print('---------------------------------------------------------------')
# 字符串中有转义字符，但不输出
print('hello\nworld')
#  在前面加'r'标示不是转义，直接输出
print(r'hello\nworld')

# 空行 分割不同的代码，方便维护 空行也是代码的一部分

# 等待用户输入
input('\n\n按 enter 键退出')

# 一行多条语句，用;区分
import sys;x='ABC';sys.stdout.write(x+'\n')

# print 输出默认换行，在后面加 end=''就可以不换行
x='1'
y='2'
print(x)
print(y)
print(x,end='')
print(y,end='')

# import 与 from import
# import是导入整个模块
# from import 是导入模块的一部分

import sys
print('\n---------------------------------------------------------------')
print('输出sys命令行参数：')
for i in sys.argv:
    print(i)
print('\npython路径为：',sys.path)

from sys import argv,path
print('path',path)










