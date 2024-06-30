'use client'

export const timeSince = (date) => {

    const baseDate = new Date(date)

    const seconds = Math.floor((new Date().getTime() - baseDate.getTime()) / 1000);

    let interval = seconds / 31536000;
    let value;
    
    if (interval > 1) {
        value = Math.floor(interval)
        return `${ value } ${ value > 1 ? 'años' : 'año' }`
    }
    interval = seconds / 2592000;
    if (interval > 1) {
        value = Math.floor(interval)
        return `${ value } ${ value > 1 ? 'meses' : 'mes' }`
    }
    interval = seconds / 86400;
    if (interval > 1) {
        value = Math.floor(interval)
        return `${ value } ${ value > 1 ? 'días' : 'día' }`
    }
    interval = seconds / 3600;
    if (interval > 1) {

        value = Math.floor(interval)
        return`${ value } ${ value > 1 ? 'horas' : 'hora' }`
    }
    interval = seconds / 60;
    if (interval > 1) {
        value = Math.floor(interval)
        return `${ value } ${ value > 1 ? 'minutos' : 'minuto' }`
    }

    value = Math.floor(seconds)
    return `${ value } ${ value > 1 ? 'segundos' : 'segundo' }`
}

const TimeSince = ({ date, className }) => {
    return (
        <div className={`font-semibold ${className}`}>
            Hace { timeSince(date) }
        </div>
    )
}

export default TimeSince