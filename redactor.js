const predefinedTextPatterns = require('./rules');

const redactText = (originaltext) => {
  const separatedText = originaltext.split(' ');

  const transformedText = separatedText.map(text => {
    if (text.match(predefinedTextPatterns.email)) {
      return 'redacted';
    }
    if (text.match( predefinedTextPatterns.phone)) {
      return 'redacted';
    }
    return text
  })

  const redactedText = transformedText.join(' ');

  return redactedText;
}

module.exports = redactText;
