-- Tabla completa
select * from materiales

-- Seleccion
select * from materiales
where clave=1000


-- Proyeccion
select clave,rfc,fecha from entregan


-- Reunion natural
select * from materiales,entregan
where materiales.clave = entregan.clave
/* Si algún material no ha se ha entregado ¿Aparecería en el resultado de esta consulta? 
	Si, aparece en todas
*/

 -- Reunion con criterio especifico
select * from entregan,proyectos
where entregan.numero < = proyectos.numero


-- Union
select * from entregan where clave=1450 union select * from entregan where clave=1300;
/* ¿Cuál sería una consulta que obtuviera el mismo resultado sin usar el operador Unión? Compruébalo
	select * from Entregan where clave=1450 or clave=1300
*/


-- Interseccion
(select clave from entregan where numero=5001)
intersect
(select clave from entregan where numero=5018)


-- Diferencia
/*
(select * from entregan)
minus
(select * from entregan where clave=1000)

Nuevamente, "minus" es una palabra reservada que no está definida en SQL Server, define una consulta que regrese el mismo resultado.
*/
select * from Entregan where Clave != 1000


-- Producto cartesiano
select * from entregan, materiales
/* ¿Cómo está definido el número de tuplas de este resultado en términos del número de tuplas de entregan y de materiales?
	
*/
