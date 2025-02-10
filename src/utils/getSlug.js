
export const getSlug = ( text ) => {
  return text
    .toString() // Asegurar que sea string
    .toLowerCase() // Convertir a minúsculas
    .normalize('NFD') // Separar caracteres acentuados
    .replace(/[\u0300-\u036f]/g, '') // Eliminar diacríticos
    .replace(/[^a-z0-9\s-]/g, '') // Eliminar caracteres especiales
    .replace(/[\s_-]+/g, '-') // Reemplazar espacios y guiones bajos por un solo guion
    .replace(/^-+|-+$/g, '') // Eliminar guiones al inicio y final
    .trim() // Eliminar espacios al inicio y final
    .replace(/\s+/g, '-') || 'default-slug'; // Fallback para strings vacíos
}