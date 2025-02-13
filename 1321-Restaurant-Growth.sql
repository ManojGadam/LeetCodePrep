# Write your MySQL query statement below
With Cus as (Select customer_id,name,visited_on,Sum(amount) as amount
From Customer
Group by visited_on)
Select C1.visited_on,Sum(C2.amount) as amount,Round(AVG(C2.amount),2) as average_amount
From Cus C1
join Cus C2
on DATEDIFF(C1.visited_on,C2.visited_on) > -1 and DATEDIFF(C1.visited_on,C2.visited_on) <= 6
Group by C1.visited_on
Having Count(*) = 7
order by C1.visited_on 