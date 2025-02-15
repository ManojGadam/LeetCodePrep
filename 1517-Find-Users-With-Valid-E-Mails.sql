# Write your MySQL query statement below
SELECT *
FROM Users
Where REGEXP_LIKE(mail,"^[a-zA-Z]{1}[a-zA-Z0-9_.-]*@leetcode[.]com$")