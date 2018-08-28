DROP DATABASE IF EXISTS mvp;

CREATE DATABASE mvp;
USE mvp;

CREATE TABLE tasks (
	id int NOT NULL AUTO_INCREMENT,
	description varchar(50) NOT NULL,
  hours int NOT NULL,
  deadline datetime NOT NULL,
  category varchar(50) NOT NULL,
  completed boolean NOT NULL,
	PRIMARY KEY (id)
);

INSERT INTO tasks (description, hours, deadline, category, completed) VALUES
(
      "bubbleSort",
      10,
      "2018-10-02",
      "toy problems",
      false
    ),(
      "commonCharacters",
      7,
      "2018-10-12",
      "toy problems",
      false
    ),(
      "deepEquality",
      1,
      "2018-09-16",
      "toy problems",
      false
    ),(
      "DFSelect",
      2,
      "2018-08-29",
      "toy problems",
      false
    ),(
      "nonrepeatedCharacter",
      1,
      "2018-09-05",
      "toy problems",
      false
    ),(
      "rockPaperScissors",
      2,
      "2018-10-10",
      "toy problems",
      false
    ),(
      "powerSet",
      3,
      "2018-09-02",
      "toy problems",
      false
    ),(
      "balancedParens",
      9,
      "2018-09-18",
      "toy problems",
      false
    ),(
      "composePipe",
      3,
      "2018-10-02",
      "toy problems",
      false
    ),(
      "rotatedArraySearch",
      4,
      "2018-10-05",
      "toy problems",
      false
    ),(
      "asyncMap",
      2,
      "2018-09-22",
      "toy problems",
      false
    ),(
      "functionBind",
      3,
      "2018-10-10",
      "toy problems",
      false
    ),(
      "hashTable",
      1,
      "2018-09-20",
      "toy problems",
      false
    ),(
      "insertionSort",
      3,
      "2018-09-12",
      "toy problems",
      false
    ),(
      "linkedList",
      1,
      "2018-09-20",
      "toy problems",
      false
    ),(
      "longestRun",
      9,
      "2018-09-05",
      "toy problems",
      false
    ),(
      "mergeSort",
      9,
      "2018-09-25",
      "toy problems",
      false
    ),(
      "primeTester",
      1,
      "2018-10-04",
      "toy problems",
      false
    ),(
      "queueStack",
      6,
      "2018-10-01",
      "toy problems",
      false
    ),(
      "robotPaths",
      2,
      "2018-09-28",
      "toy problems",
      false
    ),(
      "rotateMatrix",
      3,
      "2018-09-07",
      "toy problems",
      false
    ),(
      "shuffleDeck",
      5,
      "2018-09-09",
      "toy problems",
      false
    ),(
      "telephoneWords",
      7,
      "2018-09-07",
      "toy problems",
      false
    ),(
      "romanNumeralTranslator",
      6,
      "2018-10-13",
      "toy problems",
      false
    ),(
      "evenOccurrence",
      8,
      "2018-10-13",
      "toy problems",
      false
    ),(
      "Mealpal date with Alec H.",
      2,
      "2018-09-02",
      "social",
      false
    ),(
      "Mealpal date with Anson A.",
      3,
      "2018-10-12",
      "social",
      false
    ),(
      "Mealpal date with Benny W.",
      1,
      "2018-09-04",
      "social",
      false
    ),(
      "Mealpal date with Burke G.",
      1,
      "2018-08-29",
      "social",
      false
    ),(
      "Mealpal date with Christian N.",
      2,
      "2018-08-28",
      "social",
      false
    ),(
      "Mealpal date with David L.",
      1,
      "2018-10-04",
      "social",
      false
    ),(
      "Mealpal date with Diego E.",
      2,
      "2018-08-30",
      "social",
      false
    ),(
      "Mealpal date with Dilsher B.",
      1,
      "2018-09-18",
      "social",
      false
    ),(
      "Mealpal date with Gaurav G.",
      2,
      "2018-09-19",
      "social",
      false
    ),(
      "Mealpal date with Greg P.",
      3,
      "2018-08-30",
      "social",
      false
    ),(
      "Mealpal date with Jae B.",
      2,
      "2018-10-14",
      "social",
      false
    ),(
      "Mealpal date with Jean-Pierre V.",
      1,
      "2018-09-01",
      "social",
      false
    ),(
      "Mealpal date with Jordan B.",
      2,
      "2018-09-04",
      "social",
      false
    ),(
      "Mealpal date with Joyce C.",
      3,
      "2018-09-26",
      "social",
      false
    ),(
      "Mealpal date with Justin L.",
      1,
      "2018-08-31",
      "social",
      false
    ),(
      "Mealpal date with Ken C.",
      3,
      "2018-10-06",
      "social",
      false
    ),(
      "Mealpal date with Kony P.",
      3,
      "2018-09-06",
      "social",
      false
    ),(
      "Mealpal date with Kristie Z.",
      1,
      "2018-09-23",
      "social",
      false
    ),(
      "Mealpal date with Michael D.",
      1,
      "2018-10-07",
      "social",
      false
    ),(
      "Mealpal date with Michael C.",
      2,
      "2018-09-07",
      "social",
      false
    ),(
      "Mealpal date with Nils G.",
      3,
      "2018-08-30",
      "social",
      false
    ),(
      "Mealpal date with Xizhou L.",
      3,
      "2018-09-23",
      "social",
      false
    ),(
      "Mealpal date with Zach C.",
      1,
      "2018-10-05",
      "social",
      false
    ),(
      "Mealpal date with Adam C.",
      3,
      "2018-10-05",
      "social",
      false
    ),(
      "Mealpal date with Allan Z.",
      3,
      "2018-10-08",
      "social",
      false
    ),(
      "Mealpal date with Aman V.",
      2,
      "2018-09-22",
      "social",
      false
    ),(
      "Mealpal date with Chloe L.",
      1,
      "2018-09-04",
      "social",
      false
    ),(
      "Mealpal date with Hanjoon K.",
      3,
      "2018-10-14",
      "social",
      false
    ),(
      "Mealpal date with Nolan Y.",
      2,
      "2018-09-26",
      "social",
      false
    ),(
      "Mealpal date with Ricardo F.",
      3,
      "2018-09-21",
      "social",
      false
    ),(
      "Mealpal date with Richelle J.",
      3,
      "2018-10-14",
      "social",
      false
    ),(
      "Mealpal date with Ringo S.",
      1,
      "2018-10-06",
      "social",
      false
    ),(
      "Mealpal date with Servio L.",
      1,
      "2018-09-26",
      "social",
      false
    ),(
      "Mealpal date with Shayaun N.",
      1,
      "2018-10-12",
      "social",
      false
    ),(
      "Mealpal date with Sophie L.",
      2,
      "2018-09-11",
      "social",
      false
    ),(
      "Mealpal date with Steven L.",
      1,
      "2018-09-21",
      "social",
      false
    ),(
      "Mealpal date with Thu N.",
      1,
      "2018-10-12",
      "social",
      false
    ),(
      "Mealpal date with Shane Y.",
      2,
      "2018-10-12",
      "social",
      false
    ),(
      "KUWTK",
      20,
      "2018-10-08",
      "guilty recreational pleasures",
      false
    ),(
      "Netflix binge",
      17,
      "2018-09-04",
      "guilty recreational pleasures",
      false
    ),(
      "take Buzzfeed quizzes",
      12,
      "2018-09-26",
      "guilty recreational pleasures",
      false
    ),(
      "draw zentangles",
      5,
      "2018-09-26",
      "guilty recreational pleasures",
      false
    ),(
      "Youtube surf",
      17,
      "2018-10-13",
      "guilty recreational pleasures",
      false
    ),(
      "redo precourse material",
      4,
      "2018-10-05",
      "guilty recreational pleasures",
      false
    ),(
      "Cracking the Code Interview",
      10,
      "2018-09-05",
      "guilty recreational pleasures",
      false
    ),(
      "reduce Instagram followers : following ratio",
      10,
      "2018-09-28",
      "guilty recreational pleasures",
      false
    ),(
      "clean up Facebook pictures pre-dating 2013",
      7,
      "2018-09-25",
      "guilty recreational pleasures",
      false
    ),(
      "mine crypto",
      11,
      "2018-10-12",
      "guilty recreational pleasures",
      false
    ),(
      "learn about blockchain",
      25,
      "2018-09-24",
      "guilty recreational pleasures",
      false
    ),(
      "TechCrunch surf",
      13,
      "2018-10-06",
      "guilty recreational pleasures",
      false
    );
