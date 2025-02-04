
export const RegistersCounter = ({ pageSize, currentPage, currentPageSize, totalRegisters, label='registros' }) => {
  return (
    <div className="text-sm text-gray-500 flex items-center gap-1">
      <span>{pageSize * (currentPage - 1) + 1}</span> -
      <span>{pageSize * (currentPage - 1) + currentPageSize}</span>
      de {totalRegisters} {label}
    </div>
  )
}
