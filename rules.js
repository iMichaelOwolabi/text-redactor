// Redact any text matching closely with any of the following texts patterns
module.exports = predefinedTextPatterns = {
  phone: /^[\+]?[(]?[0-9]{2,3}[)]?[-\s\.]?[0-9]{2,3}[-\s\.]?[0-9]{4,9}/,
  email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
}
