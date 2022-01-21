'use-strict';

import mongoose, { Schema } from 'mongoose';

const restaurantSchema = new Schema({
  name: String,
});

export default mongoose.model('Restaurant', restaurantSchema);
