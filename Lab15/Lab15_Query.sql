CREATE TABLE Materiales
(
	Clave NUMERIC(5),
	Descripcion VARCHAR(50),
	Costo NUMERIC(8,2)
)

CREATE TABLE Proveedores
(
	RFC VARCHAR(12),
	Razon_Social VARCHAR(50),
)

CREATE TABLE Proyectos
(
	Numero NUMERIC(5),
	Denominacion VARCHAR(50),
)

CREATE TABLE Entregan
(
	Clave NUMERIC(5),
	RFC VARCHAR(12),
	Numero NUMERIC(5),
	Fecha DATETIME,
	Cantidad NUMERIC(8,2),
)


BULK INSERT a1701490.a1701490.[Materiales]
   FROM 'e:\wwwroot\rcortese\materiales.csv'
   WITH
      (
         CODEPAGE = 'ACP',
         FIELDTERMINATOR = ',',
         ROWTERMINATOR = '\n'
      )

BULK INSERT a1701490.a1701490.[Proyectos]
   FROM 'e:\wwwroot\rcortese\proyectos.csv'
   WITH
      (
         CODEPAGE = 'ACP',
         FIELDTERMINATOR = ',',
         ROWTERMINATOR = '\n'
      )

BULK INSERT a1701490.a1701490.[Proveedores]
   FROM 'e:\wwwroot\rcortese\proveedores.csv'
   WITH
      (
         CODEPAGE = 'ACP',
         FIELDTERMINATOR = ',',
         ROWTERMINATOR = '\n'
      )

SET DATEFORMAT dmy

BULK INSERT a1701490.a1701490.[Entregan]
   FROM 'e:\wwwroot\rcortese\entregan.csv'
   WITH
      (
         CODEPAGE = 'ACP',
         FIELDTERMINATOR = ',',
         ROWTERMINATOR = '\n'
      )

SELECT * FROM Materiales