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
    return text // Returns the transformed text after checking for PII
  })

  const redactedText = transformedText.join(' ');

  return redactedText; // This is the cyphered text
}

module.exports = redactText;

// This is just s a test for the GitHub API
