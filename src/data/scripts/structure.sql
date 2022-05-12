CREATE TABLE `ordenDeTrabajo` (
   `idOrdenDeTrabajo` INT NOT NULL,
   `idNumDeOt` INT NOT NULL,
   `idEmpleado` INT NOT NULL,
   `idEquipoRotativo` INT NOT NULL,
   `tipo` INT NOT NULL,
   `fecha` DATETIME NOT NULL,
   PRIMARY KEY (`idOrdenDeTrabajo`)
);

CREATE TABLE `otServicio` (
   `idOtServicio` INT NOT NULL AUTO_INCREMENT,
   `idOrdenDeTrabajo` INT NOT NULL,
   `idServicio` INT NOT NULL,
   PRIMARY KEY (`idOtServicio`)
);

CREATE TABLE `servicio` (
   `idServicio` INT NOT NULL,
   `descripcion` VARCHAR(255) NOT NULL,
   PRIMARY KEY (`idServicio`)
);

CREATE TABLE `herramienta` (
   `idHerramienta` INT NOT NULL,
   `idOrdenDeTrabajo` INT NOT NULL,
   `tipo` VARCHAR(255) NOT NULL,
   `marca` VARCHAR(255) NOT NULL,
   `modelo` VARCHAR(255) NOT NULL,
   PRIMARY KEY (`idHerramienta`)
);

CREATE TABLE `empleado` (
   `idEmpleado` INT NOT NULL AUTO_INCREMENT,
   `cuil` VARCHAR(255) NOT NULL,
   `nombre` VARCHAR(255) NOT NULL,
   `empresa` VARCHAR(255) NOT NULL,
   `categoria` VARCHAR(255) NOT NULL,
   PRIMARY KEY (`idEmpleado`)
);

CREATE TABLE `empleadoEmail` (
   `idEmpleadoEmail` INT NOT NULL,
   `idEmpleado` INT NOT NULL,
   `email` VARCHAR(255) NOT NULL,
   PRIMARY KEY (`idEmpleadoEmail`)
);

CREATE TABLE `empleadoDireccion` (
   `idEmpleadoDireccion` INT NOT NULL AUTO_INCREMENT,
   `idEmpleado` INT NOT NULL,
   `direccion` VARCHAR(255) NOT NULL,
   PRIMARY KEY (`idEmpleadoDireccion`)
);

CREATE TABLE `empleadoTelefono` (
   `idEmpleadoTelefono` INT NOT NULL AUTO_INCREMENT,
   `idEmpleado` INT NOT NULL,
   `telefono` INT NOT NULL,
   PRIMARY KEY (`idEmpleadoTelefono`)
);

CREATE TABLE `equipoRotativo` (
   `idEquipoRotativo` INT NOT NULL AUTO_INCREMENT,
   `marca` VARCHAR(255) NOT NULL,
   `tipo` VARCHAR(255) NOT NULL,
   `modelo` VARCHAR(255) NOT NULL,
   PRIMARY KEY (`idEquipoRotativo`)
);

CREATE TABLE `otRepuesto` (
   `idOtRepuesto` INT NOT NULL AUTO_INCREMENT,
   `idOrdenDeTrabajo` INT NOT NULL,
   `idRepuesto` INT NOT NULL,
   `cantidad` INT NOT NULL,
   PRIMARY KEY (`idOtRepuesto`)
);

CREATE TABLE `repuesto` (
   `idRepuesto` INT NOT NULL AUTO_INCREMENT,
   `tipo` VARCHAR(255) NOT NULL,
   `marca` VARCHAR(255) NOT NULL,
   `modelo` VARCHAR(255) NOT NULL,
   `descripcion` VARCHAR(255) NOT NULL,
   PRIMARY KEY (`idRepuesto`)
);


ALTER TABLE `ordenDeTrabajo` ADD CONSTRAINT `FK_9cb44527-8298-495f-9da5-c9447356a803` FOREIGN KEY (`idEmpleado`) REFERENCES `empleado`(`idEmpleado`)  ;

ALTER TABLE `ordenDeTrabajo` ADD CONSTRAINT `FK_3144312f-9030-4713-98b7-63ecd00bfaef` FOREIGN KEY (`idEquipoRotativo`) REFERENCES `equipoRotativo`(`idEquipoRotativo`)  ;

ALTER TABLE `otServicio` ADD CONSTRAINT `FK_accb2d3c-4fe1-4188-b1a9-322dad480094` FOREIGN KEY (`idOrdenDeTrabajo`) REFERENCES `ordenDeTrabajo`(`idOrdenDeTrabajo`)  ;

ALTER TABLE `otServicio` ADD CONSTRAINT `FK_00efb0a3-f831-4fe3-a405-94f5c0d4f9bd` FOREIGN KEY (`idServicio`) REFERENCES `servicio`(`idServicio`)  ;

ALTER TABLE `herramienta` ADD CONSTRAINT `FK_92d7958e-f641-4bfb-898c-3408f0c0a738` FOREIGN KEY (`idOrdenDeTrabajo`) REFERENCES `ordenDeTrabajo`(`idOrdenDeTrabajo`)  ;

ALTER TABLE `empleadoEmail` ADD CONSTRAINT `FK_7653dd35-6250-41a4-977a-55762aa627fe` FOREIGN KEY (`idEmpleado`) REFERENCES `empleado`(`idEmpleado`)  ;

ALTER TABLE `empleadoDireccion` ADD CONSTRAINT `FK_51b49097-fcb0-4af5-a182-5b7fbc9b2da7` FOREIGN KEY (`idEmpleado`) REFERENCES `empleado`(`idEmpleado`)  ;

ALTER TABLE `empleadoTelefono` ADD CONSTRAINT `FK_6de17f04-2ea6-4df2-b1bc-03ae02e7cbf4` FOREIGN KEY (`idEmpleado`) REFERENCES `empleado`(`idEmpleado`)  ;

ALTER TABLE `otRepuesto` ADD CONSTRAINT `FK_4bf99509-6c69-47ba-8dc5-1ff048960e43` FOREIGN KEY (`idOrdenDeTrabajo`) REFERENCES `ordenDeTrabajo`(`idOrdenDeTrabajo`)  ;

ALTER TABLE `otRepuesto` ADD CONSTRAINT `FK_3543995f-47c0-4363-abd9-4a97a055fd4a` FOREIGN KEY (`idRepuesto`) REFERENCES `repuesto`(`idRepuesto`)  ;
