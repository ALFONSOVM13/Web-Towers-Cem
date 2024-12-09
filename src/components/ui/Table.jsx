import { Pagination } from "./Pagination"
import { RegistersCounter } from "./RegistersCounter"

const TableContainer = ({ children }) => {
  return (
    <div className={`border rounded overflow-x-auto`}>
      {children}
    </div>
  )
}

const Table = ({ children, className = '', ...props }) => {
  return (
    <table  {...props} className="w-full table-auto">
      {children}
    </table>
  )
}

const THead = ({ children, className = '', ...props }) => {
  return (
    <thead {...props} className={`bg-slate-100 ${className}`}>
      {children}
    </thead>
  )
}

const THeadRow = ({ children, className = '', ...props }) => {
  return (
    <tr {...props} className={` ${className}`}>
      <th className="px-4 md:px-5">#</th>
      {children}
    </tr>
  )
}

const Th = ({ children, className='' }) => {
  return (
    <th className={`py-4 px-2 text-left ${ className }`}>{ children }</th>
  )
}

const TBody = ({ children, className = '', ...props }) => {
  return (
    <tbody {...props} className={`${className}`}>
      {children}
    </tbody>
  )
}

const TBodyRow = ({ children, index, pageSize, currentPage, className = '' }) => {
  const idx = (pageSize * (currentPage - 1)) + (index + 1)

  return (
    <tr className={`border-b first-of-type:border-t last-of-type:border-none [&>td]:px-2 ${className}`}>
      <td className="text-center w-10 font-semibold">{ idx }</td>
      {children}
    </tr>
  )
}

const TableFooter = ({ pageSize, currentPage, currentPageSize, totalRegisters, totalPages, handleChangePage  }) => {
  return (
    <div className="flex flex-row flex-wrap justify-between px-4 py-4 border-t">
      <RegistersCounter
        pageSize={pageSize}
        currentPage={currentPage}
        currentPageSize={currentPageSize}
        totalRegisters={totalRegisters}
      />
      <Pagination
        currentPage={currentPage}
        onPageChange={handleChangePage}
        totalPages={totalPages}
      />
    </div>
  )
}



Table.Thead = THead
Table.THeadRow = THeadRow
Table.Th = Th
Table.TBody = TBody
Table.TBodyRow = TBodyRow



export {
  TableContainer,
  Table,
  TableFooter,
}
