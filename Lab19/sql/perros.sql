-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 10-03-2021 a las 00:56:23
-- Versión del servidor: 10.4.17-MariaDB
-- Versión de PHP: 8.0.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `guarderiaperros`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `perros`
--

CREATE TABLE `perros` (
  `id` int(11) NOT NULL,
  `nombre` varchar(60) COLLATE utf8_spanish2_ci NOT NULL,
  `imagen` varchar(400) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `perros`
--

INSERT INTO `perros` (`id`, `nombre`, `imagen`, `created_at`) VALUES
(1, 'Boyo', 'https://i.ibb.co/vqtvPKT/1e0329ee-745b-4ad5-bdbb-fe701d700c66.jpg', '2021-03-09 23:47:57'),
(2, 'Luke', 'https://lh3.googleusercontent.com/pw/ACtC-3fSlWmOH7p1VvN-sN_R088ar0-V2k3FGs-fZQka0HPyALoU5vpjmOjnbdVGvuVDPB_EBCgT0AglJ4orbbCsphTy2UaJuAu0RuZN4_KfMoo2RWuMt9Ul0yHm47WqpzdItULG2qcp9LkIleqZ4RALzrFypQ=w960-h644-no?authuser=0', '2021-03-09 23:47:57'),
(3, 'Sam', 'https://lh3.googleusercontent.com/pw/ACtC-3c-eYdcZSCNca3BLVWFq6jVkw3XGvs11FzqgK5yFgMGQiUGr5ekJU1HsK6ILR3X6iHpskO_ZnOZHhVr-1Sat-7dMryvYlUPgqOtQ9b8-wL3L1KX0chZXm4kPQGTWrLDjFSwDRBK9lFfskwHaPERr1Bvcw=w960-h644-no?authuser=0', '2021-03-09 23:48:34'),
(4, 'Mashi', 'https://lh3.googleusercontent.com/pw/ACtC-3cRnk7nEoG5G1noZW-r7Tw5H7EZQRPSprPFimSuBPE7QBbkrRjChpMiuDQ9IVbPCTCB7SU56FxX0PnbEIwZmxJkMyCoQ1nc3eww_jzXsgfomtgyhVN-agXY0Zkox-lEAHeAzXpJ7q1b_qQJnDjOXBtN=w925-h622-no?authuser=0', '2021-03-09 23:52:05'),
(5, 'Kun', 'https://lh3.googleusercontent.com/bvpUDiFaZ9dx4ZS1vGNgxZMtqkQMLuZQwl4x9KuF_-rdsd2e9-OXzZ-qcIlF23SeM685tTfwHD9wDXb52LWJZWhbw6La5vkcIT53zfEGkkUh6VUO2djPOEjWrRgMy9waRjWauVVq-Werj8jl7tpZ9Myt2w1Ed-i29FPgGcOxHAptzDpCK5rfEHwpWsYzR3XXroKcmL5POUPo5wikwRo5aNkFKzMMbZnEf8RBleSZ6OrPF1MiuGCDur3AETkCJpB3QZynnovTvXk2wm4KPRYGSi667YdN82Qka_d4XeEPUfoDZ9wk1hdn2CRg-oc1zZCf2eQnUbblVIYs6Uh3ebXsWu8WK9iy9H-5etKPB-NEOHtAJx', '2021-03-09 23:52:05'),
(6, 'Cheddar', 'https://lh3.googleusercontent.com/oVAGYLp8YE4xzlvSpBHThgBv2okPKrgTWXRqvymcFWv0AVLTFncgwkWJtNXyR8E-OH4FgzchGxS83Tu_PkdAKUz6Jd7daHVHgxNqLEU6mIejzExt1cBFbLmF85vRt4QDGAZM5xnd9whyru53qb0UWAXTHz9CaceYc8tMdjxBKzjbUcKChgJ7-rg_NDEtkFh69ssJPAw1oZR7LY0AP_QjeO-53c0U76mMN5EtVE0qEnX47gpOvkyw0lMr48W4bLz-s_wUTIoT9X30O-s8gNeaJ6r91iKPYtPxDW37fINdV6o_uV9AyY-ofUNRcRXUQmgI90Kh6u_8ZswD6GadPm8VYRNvaN49kZQeHzgu-h08_Mf5Hr', '2021-03-09 23:52:45');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `perros`
--
ALTER TABLE `perros`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `perros`
--
ALTER TABLE `perros`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
