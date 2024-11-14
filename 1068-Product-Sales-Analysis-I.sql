# Write your MySQL query statement below
Select P.product_name,S.year,S.price
From Sales S
Inner Join Product P
on S.product_id = P.product_id