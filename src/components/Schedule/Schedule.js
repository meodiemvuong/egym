import React from 'react'
import TimeTable from 'react-timetable-events'

function Timetablee() {
    return (
        <TimeTable
            events={{
                monday: [
                    {
                        endTime: new Date('2018-02-23T10:00:00'),
                        id: 1,
                        name: 'Nguyễn Văn Đương',
                        startTime: new Date('2018-02-23T08:00:00'),
                        type: 'error'
                    }
                ],
                tuesday: [
                    {
                        endTime: new Date('2018-02-22T17:00:00'),
                        id: 2,
                        name: 'Nguyễn Quang Dũng',
                        startTime: new Date('2018-02-22T15:00:00'),
                        type: 'error'
                    },
                    {
                        endTime: new Date('2018-02-22T13:00:00'),
                        id: 3,
                        name: 'Nguyễn Văn Đương',
                        startTime: new Date('2018-02-22T11:00:00'),
                        type: 'custom'
                    }
                ],
                thursday: [],
                wednesday: [],
                friday: [
                    {
                        endTime: new Date('2018-02-22T16:00:00'),
                        id: 4,
                        name: 'Nguyễn Quang Dũng',
                        startTime: new Date('2018-02-22T14:00:00'),
                        type: 'custom'
                    }
                ]
            }}
            // getDayLabel={	(day: string) => upperCase(day)}
            hoursInterval={{
                from: 7,
                to: 21
            }}
            renderEvent={({ event, defaultAttributes, classNames }) => {
                return (
                    <div {...defaultAttributes} title={event.name} key={event.id}
                        style={{
                            ...defaultAttributes.style,
                            borderRadius: '5px',
                            backgroundColor: 'var(--primary-color)',
                            
                        }}
                    >
                        <span 
                            className={classNames.event_info} 
                            style={{
                                color: 'white', 
                                fontSize: '15px'
                            }}
                        >
                            {event.name}
                        </span>
                    </div>
                );
            }}
            renderHour={({ hour, defaultAttributes }) => (
                <div
                    {...defaultAttributes}
                    key={hour}
                    style={{
                        ...defaultAttributes.style,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'var(--primary-color)',
                        fontSize: '13px'
                    }}
                >
                    {hour}
                </div>
            )}
            getDayLabel={(day) => day}
            timeLabel="Timeee"
        />
    )
}

export default Timetablee
