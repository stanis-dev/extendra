export const fetchContactContent = async () => {
  const response = await fetch('/api/contact')
  const data = await response.json()
  return data
}
