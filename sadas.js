function isStringEmpty(text) {
  if(text === undefined || text === null) {
    throw new Error('text must be defined');
  }

  let checkText = text.trim();
  console.log(checkText.length);
  
  return checkText.length == 0;
}

const res = isStringEmpty('   ')

console.log(res);
