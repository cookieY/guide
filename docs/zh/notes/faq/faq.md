---
title: 常见问题
createTime: 2024/11/04 16:07:02
permalink: /zh/article/hhwzf80y/
---

### 语法支持

Yearning 目前兼容99%的Mysql 标准SQL语法。

由于审核逻辑等因素的限制,**对一些SQL语句并不能保证得到正确的反馈**

已知不支持的语句类型有:

* 复杂的查询语句(多表,多函数,非必现。并不是所有复杂语句不支持)
* 外键相关语句
* 不支持跨库DML语句的回滚
* 存储过程/触发器


### 影响行数

Yearning采用Explain分析SQL语句的影响行数。由于Explain生成的影响行数受主键，索引等其他因素的影响,并不能100%保证其准确性。其更多的是反应了该语句导致的全表扫描行数,所以对于误差较大的语句具有一定的优化参考意义。
### 回滚语句
Yearning 采用解析binlog方式获得回滚语句。由于Mysql replication协议限制,必须拥有SUPER/REPLICATION SLAVE, REPLICATION CLIENT ,ALL PRIVILEGES 权限的账号才可以获得binlog流。所以，如想体验生成回滚语句备份功能，请确保对应填写的数据源账号拥有相应权限，同时对应数据源应开启binlog功能。

### 初始化后数据表没有数据


# 常见问题

  为什么只有AWS/Aliyun的环境名？

  **Yearning默认只携带了AWS/Aliyun两个环境名,如需增加环境名请在设置页面添加**

  为什么明明我用户密码输入是正确的依然无法登录？

  **Yearning依赖的数据库字符集必须是utfmb4 请确认数据库字符集**

  为什么数据源下拉列表框没有添加的数据源信息？

  **没有将添加的数据源赋予该用户**

  为什么给用户添加了数据源权限仍然看不见该数据源?

  **在添加数据源时请注意 是否为数据源单选框，如选择为是,该数据源只会在出现在查询选择范围反之只会出现在ddl/dml选择范围中**

  为什么没有备份库设置，需不需要安装inception?

 **Yearing 2.0 采用自主审核引擎无需安装任何第三方审核工具,不需要额外添加备份数据库** 

  为什么脱敏失败？
  
 **由于脱敏,limit限制基于语法树解析。查询功能并不保证100%支持所有mysql语句,对于一些复杂且使用较多函数的查询请在测试后使用。**

  为什么有些页面打开报错接收不到数据，而且后台也无错误日志信息？

 **由于yearning使用es6规范语法编写。仅支持现代浏览器，请升级你的浏览器，推荐使用chrome最新版进行体验**

  为什么复杂的查询SQL会报错？

  **对于复杂的函数查询SQL由于语法解释器尚不支持,无法解析**


### 数据库支持列表

|  数据库名   | 版本  | Yearning起始支持版本 |  是否支持回滚|
|  ----  | ----  | ----  | ----  |
| MYSQL       | >5.6 | 1.0.0 or later | 是|
| TiDB        | All | 1.0.0 or later|否|
| Aliyun-RDS  | All | 1.0.0 or later|是|
| Aliyun-DRDS | 1.0 | 2.0.0 or later | 否|
| Aliyun-DRDS | 2.0 | 3.0.2 or later | 否|
| AWS-RDS | All | 1.0.0 or later | 是|

**以上为确认测试可用数据库类型，不代表其他兼容mysql协议的数据库无法使用，请在详细测试及评估后使用**

### 安全防范

目前已采取的措施:
1. 数据库密码加密落库
2. 用户密码加密落库
3. API权限校验
4. SQL语句Token校验

:::tip
作为一款数据库管理软件，不建议直接暴露在公网环境！如确实需要暴露于公网请务必添加相应的安全防护(SSL/HTTPS ...);

如发现Yearning存在相关安全漏洞 请联系: henry@yearning.io 我将在第一时间进行修复。
:::