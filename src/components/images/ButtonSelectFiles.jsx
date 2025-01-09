

export const ButtonSelectFiles = ({ onClick, lengthFiles, disabled }) => {
    return (
        <div className="flex items-center gap-1">
            <button
                type="button"
                onClick={onClick}
                disabled={disabled}
                className="text-sm bg-slate-100 disabled:opacity-70 enabled:hover:bg-slate-200 px-3 py-2 rounded"
            >
                Elegir imágenes
            </button>
            {
                lengthFiles === 0 ? (
                    <span className="text-sm">Ningún archivo selec.</span>
                ) : (
                    <span className="text-sm">{lengthFiles} {lengthFiles > 1 ? 'archivos' : 'archivo'}</span>
                )
            }
        </div>
    )
}
