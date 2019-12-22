---
sidebarDepth : 0
---
# linux基本操作 

### 1、文件操作
- 创建文件与目录 
>     vi,touch + 文件名  例如 touch demo.md 
>     mkdir + 目录名     例如 mkdir + demo
    
### 1、强制删除文件 rm -rf  目录或者文件名
	例如： rm -rf /home/test

### 2、复制文件或者目录  cp -p  目录或者文件名 目的地
	cp -r  复制目录
	   -d  若文件是链接文件，连同复制
	   -a  包括上面三条命令
	例如: cp -p /home/wwwroot/fengdb   /data/www/fengdb


### 3、移动文件  mv
	例如：mv /home/test /data/test

-### 4、链接命令 ln -ls 详细查百度

### 5、查找文件

	locate 文件名

	updatedb更新本地数据


	find  查找范围   -用户    条件
	 -mtime  修改文件内容
	 -ctime  改编文件属性
	 -atime  文件访问时间
 
		-size  文件大小
	find /root  -size  +25k M T
	例如 find /root  fengdb
	find /root  -mtime +10  表示查找十天前修改过内容的文件
	通配符 条件必须加双引号 常用匹配符 *, ?匹配任意一个字符  []表示方括号内任意一个
	find   /root  "fengdb*"

### 4、vim编辑器

    vim 文件名     如果文件存在则打开，不存在则新建
	 - :i   表示输入命令 可以在文件里面编辑
	 - :q!  表示忽略输入强制退出
	 - :wq  表示保存退出
	 - :ls  查看当前打开所有文件
	 - :n   切换下一个文件
	 - :数字 切换至具体某一行
	 - :/text　　查找text，按n健查找下一个，按N健查找前一个。
	 - :?text　　查找text，反向查找，按n健查找下一个，按N健查找前一个。
	 - h 	光标左移
	 - j 	光标下移
	 - k 	光标上移
	 - l 	光标右移
	 - ctrl + f 向下翻页
	 - ctrl + b 向上翻页
	 - ctrl + d 向下翻半页
	 - ctrl + u 向上翻半页
	 - dd 	删除光标所在行
    	等等..
	例子：vim test.html 
		按键 :i 则进入编辑模式
		按键 :wq 保存编辑并退出
### 5、磁盘管理
	df 查看磁盘分区使用状况
	 - l 仅显示本地磁盘
	 - a 显示所有文件系统的磁盘使用情况
	 - h 以1024进制计算最合适的单位显示磁盘容量
	 - H 以1000进制计算最合适的单位显示磁盘容量
	 - T 显示磁盘分区类型
	 - t 显示指定类型文件系统的磁盘分区
	 - x 不显示指定类型文件系统的磁盘分区
	du 统计磁盘上的文件大小
	 - b 以byte为单位统计文件
	 - k 以kb为单位统计文件
	 - m 以mb为单位统计文件
	 - h 按照1024进制以最合适的单位统计文件
	 - H 按照1000进制以最合适的单位统计文件
	 - s 指定统计目标

### 6、硬盘分区和格式化
	1、注意事项
		主分区和扩展分区总数不能超过4个
		扩展分区最多只能有一个
		扩展分区不能直接存储数据
	2、挂在分区 mount 目标磁盘 挂在位置
		mount /dev/sdb1 /mnt/imooc
		修改配置文件 /etc/fstab 即便重启也能实现挂在分区

	3、卸载分区 unmount

### 7、用户与用户组
	用户：使用操作系统的人
	用户组：具有相同系统权限的一组用户
	/etc/group 存储当前系统中所有用户组信息

	用户基本命令：
	1. useradd 用户名 //添加用户，所在用户组与用户名同名
	2. useradd -g 组名 用户名 //添加用户，指定其所在的组
	3. useradd -d 目录 用户名 //添加用户，制定其用户的家目录，没有指定所在组时，默认用户名就为用户组名
	4. usermod -c 注释信息 用户名 //为指定用户名添加注释
			   -l 用户信息

	groupadd sexy  添加组名
	groupmod -n market sexy 修改组名称
	groupmod -n market 668
	groupadd -g 888 boss

### 8、安装软件
	1、rpm命令
		1)、安装rpm包
			rpm -ivh 安装rpm包
		2)、更新软件
			rpm -Uvh 包全名
			 - U(update) 更新
		3)、卸载软件
			rpm -q
		4)、查询包
		查询方式：
			1、 rpm -q 包名 查询包是否安装； rpm -qa 查询所有安装的rpm包。
			2、 rpm -qi 包名 查询包详细信息。 -i ： 查询软件信息； -p ：查询未安装包信息。
			3、 rpm -ql 包名 查询包中文件安装位置。 -l：列表； -p：查询未安装包信息。
			4、 rpm -qf 系统文件名 查询系统文件属于哪个RPM包。 （必须为系统包 不能是自己新建的）
			5、 rpm -qR 查询依赖性。 -R：查询依赖性； -p：查询未安装包信息。

	2、yum在线安装



### 9、关机命令

	shutdown -c 取消关机命令  -h 关机  -r 重启
	例如：shutdown -r 08:00 &  （早上八点重启 & 表示不影响其他进程）
		  shutdown -c 取消关机命令。
