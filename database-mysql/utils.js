const faker = require('faker');
const formatFakerDate = fakerdate => JSON.stringify(fakerdate).slice(1, 11);

const toyproblems = ['bubbleSort', 'commonCharacters', 'deepEquality', 'DFSelect', 'nonrepeatedCharacter',
'rockPaperScissors', 'powerSet', 'balancedParens', 'composePipe', 'rotatedArraySearch', 'asyncMap', 'functionBind',
'hashTable', 'insertionSort', 'linkedList', 'longestRun', 'mergeSort', 'primeTester', 'queueStack', 'robotPaths',
'rotateMatrix', 'shuffleDeck', 'telephoneWords', 'romanNumeralTranslator', 'evenOccurrence'];

const mealpaldates= ["Mealpal date with Alec H.", "Mealpal date with Anson A.", "Mealpal date with Benny W.", "Mealpal date with Burke G.", "Mealpal date with Christian N.", "Mealpal date with David L.", "Mealpal date with Diego E.", "Mealpal date with Dilsher B.", "Mealpal date with Gaurav G.", "Mealpal date with Greg P.", "Mealpal date with Jae B.", "Mealpal date with Jean-Pierre V.", "Mealpal date with Jordan B.", "Mealpal date with Joyce C.",
"Mealpal date with Justin L.", "Mealpal date with Ken C.", "Mealpal date with Kony P.", "Mealpal date with Kristie Z.", "Mealpal date with Michael D.", "Mealpal date with Michael C.", "Mealpal date with Nils G.", "Mealpal date with Xizhou L.", "Mealpal date with Zach C.", "Mealpal date with Adam C.", "Mealpal date with Allan Z.", "Mealpal date with Aman V.", "Mealpal date with Chloe L.", "Mealpal date with Hanjoon K.", "Mealpal date with Nolan Y.",
 "Mealpal date with Ricardo F.", "Mealpal date with Richelle J.", "Mealpal date with Ringo S.", "Mealpal date with Servio L.", "Mealpal date with Shayaun N.", "Mealpal date with Sophie L.", "Mealpal date with Steven L.", "Mealpal date with Thu N.", "Mealpal date with Shane Y."];

const guiltypleasures = ['KUWTK', 'Netflix binge', 'take Buzzfeed quizzes', 'draw zentangles', 'Youtube surf', 'redo precourse material', 'Cracking the Code Interview',
'reduce Instagram followers : following ratio', 'clean up Facebook pictures pre-dating 2013', 'mine crypto', 'learn about blockchain', 'TechCrunch surf'];

const generateTasks = function() {
  let tasks = [];
  for (var i = 0; i < toyproblems.length; i++) {
    tasks.push(`(
      "${toyproblems[i]}",
      ${Math.floor(Math.random() * 10) + 1},
      "${formatFakerDate(faker.date.between('2018-08-28', '2018-10-15'))}",
      "toy problems",
      false
    )`);
  }
  for (var i = 0; i < mealpaldates.length; i++) {
    tasks.push(`(
      "${mealpaldates[i]}",
      ${Math.floor(Math.random() * 3) + 1},
      "${formatFakerDate(faker.date.between('2018-08-28', '2018-10-15'))}",
      "social",
      false
    )`);
  }
  for (var i = 0; i < guiltypleasures.length; i++) {
    tasks.push(`(
      "${guiltypleasures[i]}",
      ${Math.floor(Math.random() * 25) + 1},
      "${formatFakerDate(faker.date.between('2018-08-28', '2018-10-15'))}",
      "guilty recreational pleasures",
      false
    )`);
  }
  return tasks.join(',');
}

const categories = ['toy problems', 'social', 'guilty recreational pleasures'];

var arr = generateTasks();
console.log(arr);
