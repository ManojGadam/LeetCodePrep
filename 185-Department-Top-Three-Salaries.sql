# Write your MySQL query statement below
Select D.name as Department,rr.name as Employee, salary 
From (select *,DENSE_RANK() over (partition by departmentId order by salary desc) as rowRank
From Employee ) as rr
join Department D
on rr.departmentId = D.id
where rowRank in (1,2,3)