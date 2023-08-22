-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: caa_inquiry
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `boi`
--

DROP TABLE IF EXISTS `boi`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `boi` (
  `id` int NOT NULL AUTO_INCREMENT,
  `caaNumber` int NOT NULL,
  `role` varchar(45) NOT NULL,
  `inquiryId` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `foreignKeycaaNumber_idx` (`caaNumber`),
  KEY `inquiry_idx` (`inquiryId`),
  CONSTRAINT `foreignKeycaaNumber` FOREIGN KEY (`caaNumber`) REFERENCES `employee` (`caaNumber`),
  CONSTRAINT `inquiry` FOREIGN KEY (`inquiryId`) REFERENCES `inquiry` (`inquiryId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `boi`
--

LOCK TABLES `boi` WRITE;
/*!40000 ALTER TABLE `boi` DISABLE KEYS */;
INSERT INTO `boi` VALUES (1,2323,'member',23);
/*!40000 ALTER TABLE `boi` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `boilog`
--

DROP TABLE IF EXISTS `boilog`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `boilog` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userId` int NOT NULL,
  `prevPersonId` int NOT NULL,
  `newPersonId` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `userId_idx` (`userId`),
  KEY `prevPersonId_idx` (`prevPersonId`),
  KEY `newPersonId_idx` (`newPersonId`),
  CONSTRAINT `newPersonId` FOREIGN KEY (`newPersonId`) REFERENCES `employee` (`caaNumber`),
  CONSTRAINT `prevPersonId` FOREIGN KEY (`prevPersonId`) REFERENCES `employee` (`caaNumber`),
  CONSTRAINT `userId` FOREIGN KEY (`userId`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `boilog`
--

LOCK TABLES `boilog` WRITE;
/*!40000 ALTER TABLE `boilog` DISABLE KEYS */;
INSERT INTO `boilog` VALUES (1,2,2323,2323);
/*!40000 ALTER TABLE `boilog` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `employee`
--

DROP TABLE IF EXISTS `employee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `employee` (
  `caaNumber` int NOT NULL,
  `name` varchar(45) NOT NULL,
  `cnic` varchar(45) NOT NULL,
  `postingLocation` varchar(100) NOT NULL,
  `phone` varchar(45) NOT NULL,
  `designation` varchar(45) NOT NULL,
  PRIMARY KEY (`caaNumber`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employee`
--

LOCK TABLES `employee` WRITE;
/*!40000 ALTER TABLE `employee` DISABLE KEYS */;
INSERT INTO `employee` VALUES (1212,'Farah Siddiqui','6543-8765-56','Hyderabad','034512345','engineer'),(1213,'Ali Khan','1234-5678-90','Lahore','032156780','engineer'),(2323,'Aslam Ali','4533-2345-52','Karachi','033423425','director'),(3434,'Saima Khan','1243-6578-89','Sukkur','033478909','supervisor'),(4343,'Sadaf Shah','3467-8765-90','Hyderabad','032145677','engineer'),(4345,'Sadia Ahmed','5678-1234-56','Islamabad','031434321','manager'),(4545,'Sana Shah','3245-2233-66','Islamabad','031432456','officer'),(5432,'Fahad Malik','9876-5432-10','Karachi','034512345','officer'),(5656,'Bilal Malik','2435-4432-23','Quetta','034547890','engineer'),(6754,'Sara Khan','4532-4532-65','Peshawar','031432456','technician'),(6767,'Zara Khan','6532-3245-78','Peshawar','032145677','technician'),(7878,'Sara Khan','9876-5432-10','Chitral','033478945','technician'),(8987,'Kamran Ali','9087-6543-12','Multan','032167890','manager'),(8989,'Ayesha Ahmed','2345-0987-12','Faisalabad','033423456','manager'),(9090,'Usman Khan','6754-5678-34','Sialkot','032145672','officer');
/*!40000 ALTER TABLE `employee` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `inquiry`
--

DROP TABLE IF EXISTS `inquiry`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `inquiry` (
  `inquiryId` int NOT NULL,
  `statusOfInquiry` varchar(90) NOT NULL,
  `nomenclature` varchar(45) NOT NULL,
  `fileNumber` varchar(45) NOT NULL,
  `subject` varchar(500) NOT NULL,
  `inquiryOrderedBy` varchar(90) NOT NULL,
  `opi` varchar(45) NOT NULL,
  `locationOfInquiry` varchar(45) NOT NULL,
  `tors` varchar(1700) NOT NULL,
  `boardOfInquiryId` varchar(45) NOT NULL,
  `boiConstitutionDate` date NOT NULL,
  `submissionDate` date NOT NULL,
  `latestSubmissionDate` date NOT NULL,
  `reminderId` int NOT NULL,
  `completionDate` date NOT NULL,
  `forwardingDate` date NOT NULL,
  `enrouteId` int NOT NULL,
  `reforwardingDate` date DEFAULT NULL,
  `decisionDate` date NOT NULL,
  `fileRcvDate` date NOT NULL,
  `complianceLetterIssueDate` date NOT NULL,
  `remarks` varchar(500) DEFAULT NULL,
  `dcRecommendation` varchar(500) NOT NULL,
  PRIMARY KEY (`inquiryId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inquiry`
--

LOCK TABLES `inquiry` WRITE;
/*!40000 ALTER TABLE `inquiry` DISABLE KEYS */;
INSERT INTO `inquiry` VALUES (1,'Completed','BOI','2388/561','CONSTITUTION OF BOI TO PROBE INTO MATTER OF BRIBERY, CORRUPTION AND CORRUPT PRACTICES BY MR. BARKAT ULLAH SHEIKH, COMMUNICATION OFFICER, CIVIL AVIATION AUTHORITY','MR. ANWAR ALI FAROOQI','OF2084','ADLD APS HQCAA','fs','dfs','2020-08-20','2020-08-20','2020-08-20',12,'2020-08-20','2020-08-20',32,'2020-08-20','2020-08-20','2020-08-20','2020-08-20','',''),(23,'Completed','BOI','2388/561','CONSTITUTION OF BOI TO PROBE INTO MATTER OF BRIBERY, CORRUPTION AND CORRUPT PRACTICES BY MR. BARKAT ULLAH SHEIKH, COMMUNICATION OFFICER, CIVIL AVIATION AUTHORITY','MR. ANWAR ALI FAROOQI','OF2084','ADLD APS HQCAA','fs','dfs','2020-08-20','2020-08-20','2020-08-20',12,'2020-08-20','2020-08-20',32,'2020-08-20','2020-08-20','2020-08-20','2020-08-20','','');
/*!40000 ALTER TABLE `inquiry` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reminder`
--

DROP TABLE IF EXISTS `reminder`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reminder` (
  `id` int NOT NULL AUTO_INCREMENT,
  `inquiryId` int NOT NULL,
  `reminderDate` date NOT NULL,
  `nextReminderDate` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reminder`
--

LOCK TABLES `reminder` WRITE;
/*!40000 ALTER TABLE `reminder` DISABLE KEYS */;
INSERT INTO `reminder` VALUES (12,23,'2023-06-02','2023-06-23'),(13,5466,'2023-06-06','2023-07-04'),(15,324,'2023-07-06','2023-07-08');
/*!40000 ALTER TABLE `reminder` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `route`
--

DROP TABLE IF EXISTS `route`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `route` (
  `id` int NOT NULL AUTO_INCREMENT,
  `inquiryId` int NOT NULL,
  `caaNumber` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `inquiryId_idx` (`inquiryId`),
  KEY `caaNumber_idx` (`caaNumber`),
  CONSTRAINT `caaNumberkey` FOREIGN KEY (`caaNumber`) REFERENCES `employee` (`caaNumber`),
  CONSTRAINT `inquiryIdkey` FOREIGN KEY (`inquiryId`) REFERENCES `inquiry` (`inquiryId`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `route`
--

LOCK TABLES `route` WRITE;
/*!40000 ALTER TABLE `route` DISABLE KEYS */;
INSERT INTO `route` VALUES (1,23,2323);
/*!40000 ALTER TABLE `route` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `torlog`
--

DROP TABLE IF EXISTS `torlog`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `torlog` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userId` int NOT NULL,
  `torId` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `userIdTorlog_idx` (`userId`),
  KEY `torIdTorlog_idx` (`torId`),
  CONSTRAINT `torIdTorlog` FOREIGN KEY (`torId`) REFERENCES `tors` (`id`),
  CONSTRAINT `userIdTorlog` FOREIGN KEY (`userId`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `torlog`
--

LOCK TABLES `torlog` WRITE;
/*!40000 ALTER TABLE `torlog` DISABLE KEYS */;
INSERT INTO `torlog` VALUES (1,2,1);
/*!40000 ALTER TABLE `torlog` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tors`
--

DROP TABLE IF EXISTS `tors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tors` (
  `id` int NOT NULL AUTO_INCREMENT,
  `inquiryId` int NOT NULL,
  `title` varchar(100) NOT NULL,
  `findings` varchar(500) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `inquiryIdTors_idx` (`inquiryId`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tors`
--

LOCK TABLES `tors` WRITE;
/*!40000 ALTER TABLE `tors` DISABLE KEYS */;
INSERT INTO `tors` VALUES (1,23,'To probe whether experience clause was inserted in the tender to give favour','well found f efdjohdasf d'),(3,12232,'Airport Security Guard inspepction','Found guilty with drugs and weapons ');
/*!40000 ALTER TABLE `tors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userName` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `designation` varchar(50) DEFAULT NULL,
  `status` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'dg','caa123','directorgeneral','accepted'),(2,'dgsec','caa123','directorgeneralsecretary','accepted'),(15,'abbasdossa','fast123','Admin','accepted'),(17,'AhmedKamal11','123','Director General Secretariat','accepted'),(18,'Salman','123','Director General Secretariat','accepted'),(19,'Ahmad121','000','Director General Secretariat','accepted'),(20,'Usman','123','Director General Secretariat','accepted');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-08-22 12:32:08
