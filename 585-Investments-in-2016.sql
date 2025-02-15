# Write your MySQL query statement below

Select Round(Sum(tiv_2016),2) as tiv_2016
From Insurance
where tiv_2015 in (
    select tiv_2015
    From Insurance
    group by tiv_2015
    Having Count(*) > 1
) and (lat,lon) in 
(Select lat,lon
From Insurance I
Group by lat,lon
Having Count(*) = 1)
