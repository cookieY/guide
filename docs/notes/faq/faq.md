---
title: Frequently Asked Questions
createTime: 2024/11/04 16:07:02
permalink: /article/hhwzf80y/
---

### Syntax Support

Yearning currently supports 99% of MySQL standard SQL syntax. However, due to limitations in audit logic and other factors, **some SQL statements may not receive correct feedback**.

Known unsupported statement types include:

* Complex queries (multi-table, multiple functions, not always reproducible; not all complex statements are unsupported)
* Foreign key-related statements
* Rollback of cross-database DML statements is not supported
* Stored procedures/triggers

### Affected Row Count

Yearning uses Explain to analyze the affected rows of SQL statements. Due to various factors such as primary keys and indexes, the affected row count generated by Explain cannot guarantee 100% accuracy. It mostly reflects the number of full table scan rows the statement may cause, thus providing optimization insights for statements with large errors.

### Rollback Statements

Yearning generates rollback statements by parsing binlog. Due to MySQL replication protocol limitations, an account with SUPER, REPLICATION SLAVE, REPLICATION CLIENT, or ALL PRIVILEGES is required to obtain binlog streams. Ensure that the data source account has the necessary permissions and binlog is enabled to use the rollback statement generation feature.

### No Data in Tables After Initialization

**Common Issues**

Why are there only AWS/Aliyun environment names?

**Yearning only includes AWS/Aliyun environment names by default. You can add additional environment names in the settings page.**

Why can't I log in even though my username and password are correct?

**Yearning requires the database character set to be utf8mb4. Please check your database character set.**

Why doesn't the data source dropdown show the added data source information?

**The data source was not assigned to the user.**

Why can't the user see the data source even though it was added?

**Ensure that the data source is set in the "single-select" mode. If set to "yes," it will only appear in the query selection scope, otherwise, only in the DDL/DML selection scope.**

Why is there no backup database setting, and do I need to install Inception?

**Yearning 2.0 uses its own audit engine, so no third-party audit tools or backup databases are required.**

Why did data masking fail?

**Data masking and limit constraints are based on syntax tree parsing. The query feature does not guarantee 100% support for all MySQL statements. Use caution with complex queries and those using many functions.**

Why do some pages fail to load data, with no error logs in the backend?

**Yearning is written using ES6 syntax, which only supports modern browsers. Please upgrade your browser, with Chrome being the recommended choice.**

Why do complex SQL queries result in errors?

**Complex function queries may not be supported by the current syntax interpreter.**

### Database Support List

| Database Name | Version | Supported since Yearning | Supports Rollback |
| ------------- | ------- | -------------------------| ----------------- |
| MYSQL         | >5.6    | 1.0.0 or later           | Yes               |
| TiDB          | All     | 1.0.0 or later           | No                |
| Aliyun-RDS    | All     | 1.0.0 or later           | Yes               |
| Aliyun-DRDS   | 1.0     | 2.0.0 or later           | No                |
| Aliyun-DRDS   | 2.0     | 3.0.2 or later           | No                |
| AWS-RDS       | All     | 1.0.0 or later           | Yes               |

**The above are confirmed compatible database types tested by Yearning. Compatibility with other MySQL-compliant databases is not guaranteed. Conduct detailed testing and evaluation before usage.**

### Security Measures

Current measures in place:
1. Database password encryption upon storage
2. User password encryption upon storage
3. API permission checks
4. SQL statement token validation

:::tip
As a database management software, it is not recommended to directly expose Yearning to the public internet. If necessary, ensure to add appropriate security protections (SSL/HTTPS, etc.).

If you discover any security vulnerabilities in Yearning, please contact: henry@yearning.io. I will work to resolve these issues as quickly as possible.
:::