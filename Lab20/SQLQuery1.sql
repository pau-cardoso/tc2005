BULK INSERT a1701490.a1701490.[Materiales]
   FROM 'e:\wwwroot\a1701490\materiales.csv'
   WITH
      (
         CODEPAGE = 'ACP',
         FIELDTERMINATOR = ',',
         ROWTERMINATOR = '\n'
      )

BULK INSERT a1701490.a1701490.[Proveedores]
   FROM 'e:\wwwroot\a1701490\proveedores.csv'
   WITH
      (
         CODEPAGE = 'ACP',
         FIELDTERMINATOR = ',',
         ROWTERMINATOR = '\n'
      )

BULK INSERT a1701490.a1701490.[Proyectos]
   FROM 'e:\wwwroot\a1701490\proyectos.csv'
   WITH
      (
         CODEPAGE = 'ACP',
         FIELDTERMINATOR = ',',
         ROWTERMINATOR = '\n'
      )

SET DATEFORMAT dmy -- especificar formato de la fecha

BULK INSERT a1701490.a1701490.[Entregan]
   FROM 'e:\wwwroot\a1701490\entregan.csv'
   WITH
      (
         CODEPAGE = 'ACP',
         FIELDTERMINATOR = ',',
         ROWTERMINATOR = '\n'
      )
