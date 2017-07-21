/**
 * Defining a User Model in mongoose
 * Code modified from https://github.com/sahat/hackathon-starter
 */

import mongoose from 'mongoose';



/*
Event Schema
 */

const EventSchema = new mongoose.Schema({
  ownerUserId:{ type: String, unique: true, lowercase: true },
  locationId: String,
  players: Array,
  dateTimeFrom: Date,
  dateTimeTo: Date,
  playerCount: Number,
  playerLimit:Number,
  isFull: Boolean
});


export default mongoose.model('Event', EventSchema);
