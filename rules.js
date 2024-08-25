// Redact any text matching closely with any of the following texts patterns
export const predefinedTextPatterns = {
  phone: '/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/',
  email: '/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/',
}
