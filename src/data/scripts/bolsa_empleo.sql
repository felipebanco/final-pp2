-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 05-08-2022 a las 20:47:29
-- Versión del servidor: 8.0.21
-- Versión de PHP: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bolsa_empleo`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empresa`
--

DROP TABLE IF EXISTS `empresa`;
CREATE TABLE IF NOT EXISTS `empresa` (
  `IdCuentaEmpresa` int NOT NULL AUTO_INCREMENT,
  `cuit` int NOT NULL,
  `nombre` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `rubro` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
  `telefono` int NOT NULL,
  PRIMARY KEY (`IdCuentaEmpresa`,`cuit`),
  KEY `Empresa_fk1` (`cuit`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empresa-email`
--

DROP TABLE IF EXISTS `empresa-email`;
CREATE TABLE IF NOT EXISTS `empresa-email` (
  `IdCuentaEmpresa` int NOT NULL AUTO_INCREMENT,
  `cuit` int NOT NULL,
  `email` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`IdCuentaEmpresa`,`cuit`),
  KEY `Empresa-Email_fk1` (`cuit`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empresa-ubicacion`
--

DROP TABLE IF EXISTS `empresa-ubicacion`;
CREATE TABLE IF NOT EXISTS `empresa-ubicacion` (
  `IdCuentaEmpresa` int NOT NULL AUTO_INCREMENT,
  `cuit` int NOT NULL,
  `ubicacion` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`IdCuentaEmpresa`,`cuit`),
  KEY `Empresa-Ubicacion_fk1` (`cuit`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `oferta`
--

DROP TABLE IF EXISTS `oferta`;
CREATE TABLE IF NOT EXISTS `oferta` (
  `IdOferta` int NOT NULL AUTO_INCREMENT,
  `IdCuentaEmpresa` int NOT NULL,
  `cuit` int NOT NULL,
  `fecha` date NOT NULL,
  `puesto` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
  `ubicacion` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`IdOferta`)
) ENGINE=MyISAM AUTO_INCREMENT=452149 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `oferta`
--

INSERT INTO `oferta` (`IdOferta`, `IdCuentaEmpresa`, `cuit`, `fecha`, `puesto`, `ubicacion`) VALUES
(452148, 236987, 236589745, '2011-03-21', 'electricista', 'mendoza');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `oferta-requisitos`
--

DROP TABLE IF EXISTS `oferta-requisitos`;
CREATE TABLE IF NOT EXISTS `oferta-requisitos` (
  `IdOferta` int NOT NULL AUTO_INCREMENT,
  `requisitos` tinytext COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`IdOferta`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `postulante`
--

DROP TABLE IF EXISTS `postulante`;
CREATE TABLE IF NOT EXISTS `postulante` (
  `dni` int NOT NULL,
  `nombre` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
  `email` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
  `ubicacion` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`dni`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `postulante`
--

INSERT INTO `postulante` (`dni`, `nombre`, `email`, `ubicacion`) VALUES
(42365897, 'marcos rodriguez', 'marcosrodriguez@gmail.com', 'mendoza');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `postulante-aptitudes`
--

DROP TABLE IF EXISTS `postulante-aptitudes`;
CREATE TABLE IF NOT EXISTS `postulante-aptitudes` (
  `dni` int NOT NULL,
  `aptitudes` tinytext COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`dni`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `postulante-aptitudes`
--

INSERT INTO `postulante-aptitudes` (`dni`, `aptitudes`) VALUES
(42365897, 'compromiso, liderazgo y dialogo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `postulante-experiencia`
--

DROP TABLE IF EXISTS `postulante-experiencia`;
CREATE TABLE IF NOT EXISTS `postulante-experiencia` (
  `dni` int NOT NULL,
  `empresa` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
  `trabajo` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
  `duracion` tinyint NOT NULL,
  PRIMARY KEY (`dni`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `postulante-formacion`
--

DROP TABLE IF EXISTS `postulante-formacion`;
CREATE TABLE IF NOT EXISTS `postulante-formacion` (
  `dni` int NOT NULL,
  `formacion` tinytext COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`dni`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `postulante-telefono`
--

DROP TABLE IF EXISTS `postulante-telefono`;
CREATE TABLE IF NOT EXISTS `postulante-telefono` (
  `dni` int NOT NULL,
  `telefono` int NOT NULL,
  PRIMARY KEY (`dni`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `solicitudes`
--

DROP TABLE IF EXISTS `solicitudes`;
CREATE TABLE IF NOT EXISTS `solicitudes` (
  `IdSolicitud` int NOT NULL AUTO_INCREMENT,
  `IdOferta` int NOT NULL,
  `dni` int NOT NULL,
  `cuil` int NOT NULL,
  `fecha` date NOT NULL,
  `estado` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
  `observaciones` tinytext COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`IdSolicitud`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tecnico-rrhh`
--

DROP TABLE IF EXISTS `tecnico-rrhh`;
CREATE TABLE IF NOT EXISTS `tecnico-rrhh` (
  `cuil` int NOT NULL,
  `nombre` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
  `email` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
  `especialidad` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`cuil`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tecnico-telefono`
--

DROP TABLE IF EXISTS `tecnico-telefono`;
CREATE TABLE IF NOT EXISTS `tecnico-telefono` (
  `cuil` int NOT NULL,
  `telefono` int NOT NULL,
  PRIMARY KEY (`cuil`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
