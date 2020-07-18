SELECT risky_place.name, risky_place.date
FROM
(SELECT DISTINCT b.idlocation, l.name, b.`date`
FROM beento AS b, (SELECT p.`account` FROM person AS p WHERE p.condition = "INFECTED" or p.condition = "ATRISK") AS infec, location AS l
WHERE b.idperson = infec.account AND l.idlocation = b.idlocation) AS risky_place, beento AS bt
WHERE bt.idperson = "alex" AND bt.idlocation = risky_place.idlocation;
