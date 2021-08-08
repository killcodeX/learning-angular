import { Task }  from './Task'

export const TASKS: Task[] = [
    {
        id:1,
        text: 'Doctors Appointment',
        day: 'May 5th at 2:30pm',
        reminder: true,
    },
    {
        id:2,
        text: 'Meeting At School',
        day: 'May 6th at 10:30am',
        reminder: true,
    },
    {
        id:3,
        text: 'Food Shopping',
        day: 'May 7th at 4:30pm',
        reminder: false,
    },
    {
        id:4,
        text: 'Movie Date',
        day: 'May 8th at 8:30pm',
        reminder: true,
    },
]

//{"id":1,"text":"Doctors Appointment","day":"May 5th at 2:30pm","reminder":true},{"id":2,"text":"Meeting At School","day":"May 6th at 10:30am","reminder":true},{"id":3,"text":"Food Shopping","day":"May 7th at 4:30pm","reminder":false},{"id":4,"text":"Movie Date","day":"May 8th at 8:30pm","reminder":true}