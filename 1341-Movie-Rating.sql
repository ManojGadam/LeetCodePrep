# Write your MySQL query statement below
Select name as results
From (select name 
from MovieRating MR
join Users U
on MR.user_id = U.user_id
group by U.user_id
order by count(U.user_id) desc, name asc Limit 1) as userRating
UNION ALL
select title as results
From (select title
from MovieRating MR1
join Movies M
on MR1.movie_id = M.movie_id
where Month(created_at) = 2 and year(created_at) = 2020
group by MR1.movie_id
order by AVG(rating) Desc, title ASC limit 1) as movie