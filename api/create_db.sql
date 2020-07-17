-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema safe-trip
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `safe-trip` ;

-- -----------------------------------------------------
-- Schema safe-trip
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `safe-trip` DEFAULT CHARACTER SET utf8 ;
USE `safe-trip` ;

-- -----------------------------------------------------
-- Table `safe-trip`.`person`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `safe-trip`.`person` (
  `account` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `phone` VARCHAR(45) NOT NULL,
  `condition` VARCHAR(45) NOT NULL,
  `address` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`account`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `safe-trip`.`location`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `safe-trip`.`location` (
  `idlocation` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `address` VARCHAR(45) NULL,
  PRIMARY KEY (`idlocation`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `safe-trip`.`encounter`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `safe-trip`.`encounter` (
  `idperson` VARCHAR(45) NOT NULL,
  `other_idperson` VARCHAR(45) NOT NULL,
  `idlocation` INT NULL,
  `date` DATE NULL,
  INDEX `idlocation_idx` (`idlocation` ASC) VISIBLE,
  INDEX `who_idx` (`idperson` ASC) VISIBLE,
  CONSTRAINT `idlocation`
    FOREIGN KEY (`idlocation`)
    REFERENCES `safe-trip`.`location` (`idlocation`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,
  CONSTRAINT `who`
    FOREIGN KEY (`idperson`)
    REFERENCES `safe-trip`.`person` (`account`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `safe-trip`.`beento`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `safe-trip`.`beento` (
  `idperson` VARCHAR(45) NOT NULL,
  `idlocation` INT NULL,
  `date` DATE NULL,
  INDEX `beento_idx` (`idlocation` ASC) VISIBLE,
  INDEX `person_went_idx` (`idperson` ASC) VISIBLE,
  CONSTRAINT `beento`
    FOREIGN KEY (`idlocation`)
    REFERENCES `safe-trip`.`location` (`idlocation`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,
  CONSTRAINT `person_went`
    FOREIGN KEY (`idperson`)
    REFERENCES `safe-trip`.`person` (`account`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
