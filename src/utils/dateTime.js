export const combineDateTime = (dateStr, timeStr) => {
  // Dividir la fecha en partes
  const [year, month, day] = dateStr.split('-')

  // Dividir la hora en partes
  const [hours, minutes] = timeStr.split(':')

  const localDate = new Date(
    parseInt(year),
    parseInt(month) - 1, // Los meses en JS son base 0
    parseInt(day),
    parseInt(hours),
    parseInt(minutes)
  )

  // Convertir a formato ISO con zona horaria UTC
  // Formato: YYYY-MM-DDTHH:mm:ss.sssZ
  return localDate.toISOString() 
}


export const splitDateTime = (isoString) => {

  const date = new Date(isoString)

  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0') // Meses 1-12
  const day = String(date.getDate()).padStart(2, '0')

  // Obtener componentes de hora local
  const hours = String(date.getHours()).padStart(2, '0')
  const minutes = String(date.getMinutes()).padStart(2, '0')

  return {
    dateStr: `${year}-${month}-${day}`,  // Formato YYYY-MM-DD
    timeStr: `${hours}:${minutes}`       // Formato HH:mm
  }
}