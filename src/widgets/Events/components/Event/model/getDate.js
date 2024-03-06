const getMonthNumberFromString = (month) => {
  const date = new Date(`${month} 01 2000`)
  const params = { month: '2-digit' }

  return date.toLocaleDateString('en', params)
}

export default getMonthNumberFromString