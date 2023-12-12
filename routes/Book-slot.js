const express=require('express');

const bookSlotController=require('../controllers/Book-slot')

const router=express.Router();

router.post('/scheduleMeeting',bookSlotController.bookslot);

router.get('/get-AllMeetings',bookSlotController.getAllMeetings);

router.get('/get-MeetingDetails/:id',bookSlotController.getMeetingDetails);


router.delete('/update-slots/:id',bookSlotController.UpdateSlot);




module.exports=router