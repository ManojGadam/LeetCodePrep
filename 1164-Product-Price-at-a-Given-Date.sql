# Write your MySQL query statement below
With unqProd as (Select distinct product_id from Products)
Select unqProd.product_id, If(new_price is null,10,new_price) as price
From unqProd 
left join (select *, row_number() over (partition by product_id order by change_date desc) as rowRank
from Products
where change_date <= "2019-08-16" ) as prod
on unqProd.product_id = prod.product_id 
where rowRank is null or rowRank = 1

