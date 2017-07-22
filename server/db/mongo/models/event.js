/**
 * Defining a User Model in mongoose
 * Code modified from https://github.com/sahat/hackathon-starter
 */

import mongoose from 'mongoose';



/*
Event Schema
 */

const EventSchema = new mongoose.Schema({
  _ownerUserId:{ type: String, ref: 'User' },
  locationId: String,
  players: Array,
  dateTimeFrom: Date,
  dateTimeTo: Date,
  playerCount: Number,
  playerLimit:Number,
  isFull: Boolean,
  text: String,
  id: String
});


export default mongoose.model('Event', EventSchema);
