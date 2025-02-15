# Write your MySQL query statement below
Select sell_date,Count(distinct product) as num_sold,group_concat(distinct product) as products
From Activities
group by sell_date
order by sell_date