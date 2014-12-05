-- phpMyAdmin SQL Dump
-- version 4.2.7.1
-- http://www.phpmyadmin.net
--
-- Client :  127.0.0.1
-- Généré le :  Ven 05 Décembre 2014 à 10:50
-- Version du serveur :  5.6.20
-- Version de PHP :  5.5.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données :  `ange`
--

-- --------------------------------------------------------

--
-- Structure de la table `messages`
--

CREATE TABLE IF NOT EXISTS `messages` (
`id` int(11) NOT NULL,
  `auteur` varchar(100) CHARACTER SET latin1 COLLATE latin1_general_ci NOT NULL,
  `message` text CHARACTER SET latin1 COLLATE latin1_general_ci NOT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=17 ;

--
-- Contenu de la table `messages`
--

INSERT INTO `messages` (`id`, `auteur`, `message`) VALUES
(6, 'ppol', 'super message'),
(7, 'ppol', 'encore   gÃ©nial'),
(8, 'ppol', 'encore   gÃ©nial'),
(9, '', 'encore   gÃ©nial'),
(10, '', 'encore   gÃ©nial'),
(11, 'polp', 'encore   gÃ©nial'),
(12, 'polp', 'encore   génial'),
(13, 'polp', 'encore   génial'),
(14, 'polp', 'encore   génial'),
(15, 'polp', 'encore @ génial'),
(16, 'polp', 'encore {  } génial');

--
-- Index pour les tables exportées
--

--
-- Index pour la table `messages`
--
ALTER TABLE `messages`
 ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `messages`
--
ALTER TABLE `messages`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=17;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
