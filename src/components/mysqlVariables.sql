-- JamesRavenscroft 2020
SET @ variable_name:= value;
SET @counter:= 100;
SELECT @variable_name:= value;

SELECT
    @msrp:=MAX(msrp)
FROM   products;

SELECT  productCode, productName, productLine, msrp
FROM
    products
WHERE msrp=@msrp

SELECT @id:= LAST_INSERT_ID();

SELECT   @buyPrice:=buyPrice
FROM  products
WHERE  buyprice > 95
ORDER BY buyprice;

SELECT @buyprice;