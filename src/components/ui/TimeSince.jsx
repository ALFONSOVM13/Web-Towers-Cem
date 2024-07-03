import {timeSince} from '@/utils/timeSince'

const TimeSince = ({ date, className }) => {
    return (
        <div className={`font-semibold ${className}`}>
            Hace { timeSince(date) }
        </div>
    )
}
export default TimeSince