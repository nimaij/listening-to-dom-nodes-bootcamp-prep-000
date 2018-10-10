// using this file is optional
// you can also load the code snippets in using your browser's console

document.addEventListener('keypress', (event) => {
  const keyName = event.key;
  if(keyName ==='j'){
    return event.preventDefault()
  } else {
    alert('keypress event\n\n' + 'key: ' + keyName);
  }
});