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