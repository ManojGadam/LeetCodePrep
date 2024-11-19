# Write your MySQL query statement below
select name,population,W.area
from World W
where population >= 25000000 or area >= 3000000
