const faker = require('faker');

const toyproblems = ['bubbleSort', 'commonCharacters', 'deepEquality', 'DFSelect', 'nonrepeatedCharacter',
'rockPaperScissors', 'powerSet', 'balancedParens', 'composePipe', 'rotatedArraySearch', 'asyncMap', 'functionBind',
'hashTable', 'insertionSort', 'linkedList', 'longestRun', 'mergeSort', 'primeTester', 'queueStack', 'robotPaths',
'rotateMatrix', 'shuffleDeck', 'telephoneWords', 'romanNumeralTranslator', 'evenOccurrence'];

const mealpaldates= ["Mealpal date with Alec H.", "Mealpal date with Anson A.", "Mealpal date with Benny W.", "Mealpal date with Burke G.", "Mealpal date with Christian N.", "Mealpal date with David L.", "Mealpal date with Diego E.", "Mealpal date with Dilsher B.", "Mealpal date with Gaurav G.", "Mealpal date with Greg P.", "Mealpal date with Jae B.", "Mealpal date with Jean-Pierre V.", "Mealpal date with Jordan B.", "Mealpal date with Joyce C.",
"Mealpal date with Justin L.", "Mealpal date with Ken C.", "Mealpal date with Kony P.", "Mealpal date with Kristie Z.", "Mealpal date with Michael D.", "Mealpal date with Michael C.", "Mealpal date with Nils G.", "Mealpal date with Xizhou L.", "Mealpal date with Zach C.", "Mealpal date with Adam C.", "Mealpal date with Allan Z.", "Mealpal date with Aman V.", "Mealpal date with Chloe L.", "Mealpal date with Hanjoon K.", "Mealpal date with Nolan Y.",
 "Mealpal date with Ricardo F.", "Mealpal date with Richelle J.", "Mealpal date with Ringo S.", "Mealpal date with Servio L.", "Mealpal date with Shayaun N.", "Mealpal date with Sophie L.", "Mealpal date with Steven L.", "Mealpal date with Thu N.", "Mealpal date with Shane Y."];

const guiltypleasures = ['KUWTK', 'Netflix binge', 'take Buzzfeed quizzes', 'draw zentangles', 'Youtube surf', 'redo precourse material', 'Cracking the Code Interview',
'reduce Instagram followers : following ratio', 'clean up Facebook pictures pre-dating 2013', 'mine crypto', 'become an expert at blockchain', 'browse through TechCrunch'];

const hours = [];

id int NOT NULL AUTO_INCREMENT,
description varchar(50) NOT NULL,
hours int NOT NULL,
deadline datetime NOT NULL,
category varchar(50) NOT NULL,
completed boolean NOT NULL,
position point NOT NULL,
PRIMARY KEY (id)
const tasks = [];

const generateTasks = function(num) {
  let tasks = [];
  for (var i = 0; i < num; i++) {
    tasks.push(`(
      ${descriptions[i]},
      ${hours[i]},
      FROM_UNIXTIME(
        UNIX_TIMESTAMP('2010-04-30 14:53:27') + FLOOR(0 + (RAND() * 63072000))
      ),
      ${categories[i]},
      false,
      position
    )`
  );
  }
  return tasks.join(',');
}

const generateDateTime = function() {

}

const categories = ['toy problems', 'social', 'guilty pleasures'];

generateTasks(100);

// var radius = 100;
// x = Math.random() * 2 * radius - radius;
// ylim = Math.sqrt(radius * radius - x * x);
// y = Math.random() * 2 * ylim - ylim;
