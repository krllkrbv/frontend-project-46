import fs from 'fs';
import genDiff from '../src/index.js';
import getFixturePath from '../src/helper.js';

const readFile = (filepath) => fs.readFileSync(filepath, 'utf-8');

const runTest = (fileName1, fileName2, resultFileName, format) => {
  const filePath1 = getFixturePath(fileName1);
  const filePath2 = getFixturePath(fileName2);
  const resultPath = getFixturePath(resultFileName);
  const expectedResult = readFile(resultPath).trim();

  if (format === 'json') {
    const expectedJsonString = JSON.stringify(JSON.parse(expectedResult));
    const actualDiff = genDiff(filePath1, filePath2, 'json');
    console.log('Expected JSON:', expectedJsonString);
    console.log('Actual Diff:', actualDiff);
  } else {
    const actualDiff = genDiff(filePath1, filePath2, format);
    console.log(`Format: ${format}\nResult:\n${actualDiff}`);
  }
};

runTest('file1.json', 'file2.json', 'expectFileStylish.txt', 'stylish');
runTest('file1.yaml', 'file2.yaml', 'expectFileStylish.txt', 'stylish');
runTest('file1.json', 'file2.json', 'expectFilePlain.txt', 'plain');
runTest('file1.yaml', 'file2.yaml', 'expectFilePlain.txt', 'plain');
runTest('file1.yaml', 'file2.yaml', 'diffJSON.txt', 'json');