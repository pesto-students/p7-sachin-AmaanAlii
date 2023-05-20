-- Find the item that has minimum weight.
SELECT * FROM ITEMS WHERE WEIGHT = (SELECT MIN(WEIGHT) FROM ITEMS);


-- Find the different warehouses in "Pune".
SELECT WNAME FROM WAREHOUSES WHERE LOCATION = 'Pune';


-- Find the details of items ordered by a customer "Mr. Patil".
SELECT I.ITEMNO, I.DESCRIPTION, I.WEIGHT, I.COST
FROM ITEMS I
JOIN ORDERS_ITEMS OI ON I.ITEMNO = OI.ITEMNO
JOIN ORDERS O ON OI.ONO = O.ONO
JOIN CUSTOMER C ON O.CNO = C.CNO
WHERE C.CNAME = 'Mr. Patil';


-- Find a Warehouse which has maximum stores.
SELECT WNAME, COUNT(*) AS STORE_COUNT
FROM WAREHOUSES W
JOIN STORES S ON W.WID = S.WID
GROUP BY WNAME
HAVING COUNT(*) = (SELECT MAX(COUNT(*)) FROM STORES GROUP BY WID);


-- Find an item which is ordered for a minimum number of times.
SELECT I.ITEMNO, I.DESCRIPTION, COUNT(*) AS ORDER_COUNT
FROM ITEMS I
JOIN ORDERS_ITEMS OI ON I.ITEMNO = OI.ITEMNO
GROUP BY I.ITEMNO, I.DESCRIPTION
HAVING COUNT(*) = (SELECT MIN(COUNT(*)) FROM ORDERS_ITEMS GROUP BY ITEMNO);


-- Find the detailed orders given by each customer.
SELECT C.CNO, C.CNAME, O.ONO, O.ODATE
FROM CUSTOMER C
JOIN ORDERS O ON C.CNO = O.CNO;

