import express from 'express';
import { addSchedule, getAllScedule , updateSchedule, deleteSchedule} from '../controllers/schedule/schedule.controller.js';
const ScheduleRouter = express.Router();

ScheduleRouter.post('/addSchedule', addSchedule)
ScheduleRouter.get('/getAllSchedule/:id', getAllScedule)
ScheduleRouter.put('/updateSchedule', updateSchedule)
ScheduleRouter.delete('/deleteSchedule/:id', deleteSchedule)

export default ScheduleRouter ;
