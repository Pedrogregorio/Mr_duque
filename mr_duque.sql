-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 08-Jan-2021 às 05:21
-- Versão do servidor: 10.4.11-MariaDB
-- versão do PHP: 7.4.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `mr_duque`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_agente`
--

CREATE TABLE `tb_agente` (
  `id_agente_banco` int(11) NOT NULL,
  `nome_agente` varchar(15) DEFAULT NULL,
  `banco` varchar(15) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `tb_agente`
--

INSERT INTO `tb_agente` (`id_agente_banco`, `nome_agente`, `banco`) VALUES
(1, '6862LEANDR', 'Barisul'),
(2, '6862THIAGO', 'Barisul');

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_cliente`
--

CREATE TABLE `tb_cliente` (
  `id` int(11) NOT NULL,
  `nome_cliente` varchar(30) DEFAULT NULL,
  `cpf_cliente` varchar(14) DEFAULT NULL,
  `numero_proposta` varchar(10) DEFAULT NULL,
  `valor_proposta` varchar(9) DEFAULT NULL,
  `parcela_proposta` varchar(6) DEFAULT NULL,
  `banco_portado` varchar(3) DEFAULT NULL,
  `data_inclusao` varchar(10) DEFAULT NULL,
  `responsavel` varchar(14) DEFAULT NULL,
  `id_agente_banco` int(11) DEFAULT NULL,
  `id_status_proposta` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `tb_cliente`
--

INSERT INTO `tb_cliente` (`id`, `nome_cliente`, `cpf_cliente`, `numero_proposta`, `valor_proposta`, `parcela_proposta`, `banco_portado`, `data_inclusao`, `responsavel`, `id_agente_banco`, `id_status_proposta`) VALUES
(15, 'Pedro Henrique Gregorio', '083.152.521-51', '23451', '7.654,32', '200,00', '456', '9222-02-19', '2020ismael', 1, 2),
(16, 'Maria Julia Rodrigues ', '987.654.345-67', '987654', '7.654,37', '123,00', '002', '6899-07-08', '2020ismael', 1, 1),
(17, 'Roger Ferreira Carmen', '876.543.456-78', '987654', '9.876,67', '301,00', '001', '5678-06-07', '2020ismael', 1, 3),
(18, 'Carlao Augusto Machado', '876.543.456-78', '9876', '98.765,49', '87,65', '229', '6556-07-08', '2020ismael', 1, 3),
(19, 'hot dog do Felix', '876.543.678-90', '87654', '876,54', '333,33', '102', '9008-08-06', '2020ismael', 1, 3),
(21, 'Main Teste', '876.543.234-56', '87654', '6.789,99', '76,67', '001', '9777-07-08', '2020ismael', 2, 1),
(22, 'Anderson Gregorio', '577.657.657-67', '101010', '87.654,67', '987,65', '001', '2023-02-07', '2020ismael', 2, 1),
(23, 'Teste de responsavel', '456.789.009-87', '654387', '2.456,43', '65,45', '654', '2021-10-26', '2020ismael', 2, 3),
(24, 'Almir Valesco de Souza', '999.999.999-99', '12234', '9.876,54', '789,00', '001', '2222-02-22', 'pedro.gregorio', 2, 2),
(26, 'Teste de Log', '123.456.789-87', '98765', '76.567,89', '987,67', '001', '2021-12-31', 'undefined', 2, 2);

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_historico_cliente`
--

CREATE TABLE `tb_historico_cliente` (
  `id_cliente` int(11) DEFAULT NULL,
  `id_status_proposta` int(11) DEFAULT NULL,
  `data_modificacao` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `tb_historico_cliente`
--

INSERT INTO `tb_historico_cliente` (`id_cliente`, `id_status_proposta`, `data_modificacao`) VALUES
(15, 1, '2020-12-31 22:15:54'),
(16, 1, '2020-12-31 22:17:18'),
(17, 1, '2020-12-31 22:18:00'),
(18, 1, '2020-12-31 22:19:04'),
(19, 1, '2020-12-31 22:20:21'),
(15, 1, '2020-12-31 23:15:12'),
(16, 1, '2020-12-31 23:15:34'),
(17, 1, '2020-12-31 23:17:58'),
(15, 1, '2020-12-31 23:19:54'),
(16, 1, '2020-12-31 23:20:05'),
(15, 1, '2020-12-31 23:24:53'),
(19, 1, '2021-01-01 00:58:07'),
(19, 1, '2021-01-01 01:00:37'),
(21, 3, '2021-01-01 16:48:51'),
(22, 3, '2021-01-01 16:53:14'),
(23, 1, '2021-01-01 16:54:43'),
(19, 2, '2021-01-04 01:30:08'),
(18, 3, '2021-01-04 02:30:50'),
(15, 3, '2021-01-05 04:12:41'),
(17, 3, '2021-01-05 12:44:21'),
(23, 3, '2021-01-05 12:44:34'),
(24, 2, '2021-01-05 12:46:58'),
(21, 1, '2021-01-05 15:53:28'),
(15, 1, '2021-01-05 15:53:41'),
(19, 3, '2021-01-05 15:55:22'),
(15, 2, '2021-01-05 16:00:01'),
(26, 2, '2021-01-07 01:10:19'),
(22, 1, '2021-01-08 03:21:21');

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_status_proposta`
--

CREATE TABLE `tb_status_proposta` (
  `id_status_proposta` int(11) NOT NULL,
  `nome_status` varchar(25) DEFAULT NULL,
  `banco` varchar(15) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `tb_status_proposta`
--

INSERT INTO `tb_status_proposta` (`id_status_proposta`, `nome_status`, `banco`) VALUES
(1, 'Analise Aut de Dados', 'Panamericano'),
(2, 'Pendente - Automatico', 'Barisul'),
(3, '(CTC)', 'Barisul');

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_usuarios`
--

CREATE TABLE `tb_usuarios` (
  `id_usuario` int(11) NOT NULL,
  `nome_usuario` varchar(14) DEFAULT NULL,
  `senha_usuario` varchar(32) DEFAULT NULL,
  `tipo` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `tb_usuarios`
--

INSERT INTO `tb_usuarios` (`id_usuario`, `nome_usuario`, `senha_usuario`, `tipo`) VALUES
(1, '2020ismael', 'e10adc3949ba59abbe56e057f20f883e', 1),
(8, 'pedro.gregorio', 'e3ceb5881a0a1fdaad01296d7554868d', 2);

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `tb_agente`
--
ALTER TABLE `tb_agente`
  ADD PRIMARY KEY (`id_agente_banco`);

--
-- Índices para tabela `tb_cliente`
--
ALTER TABLE `tb_cliente`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_agente_banco` (`id_agente_banco`),
  ADD KEY `id_status_proposta` (`id_status_proposta`);

--
-- Índices para tabela `tb_historico_cliente`
--
ALTER TABLE `tb_historico_cliente`
  ADD KEY `id_cliente` (`id_cliente`),
  ADD KEY `id_status_proposta` (`id_status_proposta`);

--
-- Índices para tabela `tb_status_proposta`
--
ALTER TABLE `tb_status_proposta`
  ADD PRIMARY KEY (`id_status_proposta`);

--
-- Índices para tabela `tb_usuarios`
--
ALTER TABLE `tb_usuarios`
  ADD PRIMARY KEY (`id_usuario`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `tb_agente`
--
ALTER TABLE `tb_agente`
  MODIFY `id_agente_banco` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de tabela `tb_cliente`
--
ALTER TABLE `tb_cliente`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT de tabela `tb_status_proposta`
--
ALTER TABLE `tb_status_proposta`
  MODIFY `id_status_proposta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de tabela `tb_usuarios`
--
ALTER TABLE `tb_usuarios`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `tb_cliente`
--
ALTER TABLE `tb_cliente`
  ADD CONSTRAINT `id_agente_banco` FOREIGN KEY (`id_agente_banco`) REFERENCES `tb_agente` (`id_agente_banco`),
  ADD CONSTRAINT `id_status_proposta` FOREIGN KEY (`id_status_proposta`) REFERENCES `tb_status_proposta` (`id_status_proposta`);

--
-- Limitadores para a tabela `tb_historico_cliente`
--
ALTER TABLE `tb_historico_cliente`
  ADD CONSTRAINT `id_cliente` FOREIGN KEY (`id_cliente`) REFERENCES `tb_cliente` (`id`),
  ADD CONSTRAINT `tb_historico_cliente_ibfk_1` FOREIGN KEY (`id_status_proposta`) REFERENCES `tb_status_proposta` (`id_status_proposta`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
