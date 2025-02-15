# Write your MySQL query statement below
Select id,Count(*) as num
From(select requester_id as id
From RequestAccepted
Union ALL
select accepter_id as id
From RequestAccepted) as friendAccept
Group by id
order by Count(*) desc Limit 1