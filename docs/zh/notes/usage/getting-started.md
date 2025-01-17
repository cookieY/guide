---
title: 快速上手
createTime: 2024/11/04 15:13:49
permalink: /zh/usage/tv2glbkw/
---
# 使用准备

**在正式使用Yearning前,你需要先设置如下setup(请务必花几分钟时间阅读!)。**

1. 创建用户 
2. 创建权限组并将权限组赋予给对应的用户
3. 创建审批流程
4. 添加数据源信息
5. 对数据源赋予审批流程
6. 在设置页面配置各项配置信息
7. 根据需求调整自定义审核规则

### 创建用户

在Yearning中用户可以通过以下方式创建:

1. 在 **管理->用户** 页面admin用户自行创建用户。
2. 打开 **管理->设置** 页面中的允许注册配置并保存。 由注册人自行点击yearning登录页面左上角注册按钮进行注册。
3. 配置 **管理->设置** 页面中的Ldap的信息并保存。 ldap用户可在yearning登录页面中勾选ldap登录进行用户注册/登录操作。
4. 基于config.toml配置的OIDC登陆方式进行用户登录操作。
   
::: tip
   ldap配置中对于filter中的%s为占位符，类似于其他ldap系统中的%(user)s
:::

### 创建权限组并将权限组赋予给对应的用户

通过**管理->权限组** 页面，admin可以创建/编辑/删除权限组。权限组提供了多种细粒度的权限管控(yearning目前权限管控仅下沉到数据源级别)如下所示:

1. 允许DDL工单提交的数据源范围
2. 允许DML工单提交的数据源范围
3. 允许查询工单提交的数据源范围

创建完权限组后请通过**管理->用户**页面，选择你需要赋予权限组的用户点击该用户对应的权限按钮进行权限组赋权。

权限组设计理念可访问[权限设计](/guide/authority)

::: tip
一个用户可以被赋予多个权限组,多权限组下该用户会集成2个权限组的全部权限

一个权限组也可以对多个用户进行赋权
:::


### 添加数据源信息

通过**管理->数据库** 页面，admin可以创建/编辑/删除数据源。数据源为一个Mysql实例，数据库共分为读/写/读写三大种类。如果希望该数据源既可处理DDL/DML工单又能进行查询则该数据源应设置为读写，反之根据自己的需求可以设置为读/写。

::: warning
Yearning不支持一些特殊字符串例如@，这是由于转义以及可能会带来的pt-osc执行错误而不得不规避的问题，建议用户单独创建一个新的mysql用户用来对接Yearning平台
:::
### 为环境创建自定义审核规则

通过**管理->流程** 页面，admin可以编辑环境的流程。

Yearning以环境为单元，可对不同的环境配置不同的审核流程。

::: warning

更改流程时请确保该环境下的工单都已处理完毕，否则可能会引起流程错乱！

如没有将对应环境配置流程则用户无法对这个环境进行任何DDL/DML工单提交操作
:::

### 在设置页面配置各项配置信息

通过**管理->设置** 页面，admin可以配置Yearning的多项配置。

这里将介绍几个重点配置:

1. 查询limit上限: 该设置为 **全局查询** 最大的limit限制，默认为1000.这意味着通过Yearning进行的查询最多只会查询1000条，如需提高此阀值可直接修改这个配置。(DML/DDL的影响行数上限不受此规则限制，如需对DML/DDL影响行数上限进行修改请前往审核规则页面进行配置)
2. 添加环境: 默认Yearning仅提供**aws/aliyun**两个环境，用户可自行添加或删除环境，添加完对应的环境后请及时前往流程模板页面添加该新环境的流程模板。


### 根据需求调整自定义审核规则

通过**管理->审核规则** 页面，admin可以设置Yearning多达几十项的审核规则且每一项审核规则都有详细的描述。


::: tip

审核规则中OSC Expr 设置项可对DDL语句使用pt-osc/gh-ost表迁移工具

对于PT-OSC的设置请参考[官方文档](https://www.percona.com/doc/percona-toolkit/3.0/pt-online-schema-change.html)

对于GH-OST的设置请参考[官方文档](https://github.com/github/gh-ost)

:::