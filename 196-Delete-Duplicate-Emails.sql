# Write your MySQL query statement below

Delete
From Person
where id not in (select min_id from
(select min(Id) as min_id from Person group by Email) as a)