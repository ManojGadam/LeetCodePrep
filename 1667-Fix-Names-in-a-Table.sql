# Write your MySQL query statement below
Select user_id,CONCAT(Upper(SUBSTRING(name,1,1)),LOWER(SUBSTRING(name,2))) as  name
From Users
order by user_id