# Write your MySQL query statement below

Select S1.product_id,S1.year as first_year,S1.quantity,S1.price
From Sales S1
left join Sales S2
on S1.product_id = S2.product_id and S1.year > S2.year
where S2.sale_id is null