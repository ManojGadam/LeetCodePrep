# Write your MySQL query statement below
select V.customer_id, Count(*) as count_no_trans
From Visits V
left join Transactions T
on V.visit_id = T.visit_id
where T.visit_id is null
Group by V.customer_id