const mongoose = require('mongoose');

mongoose.connect(`${process.env.MONGODB_URI}`, { useNewUrlParser: true,
  useUnifiedTopology: true, keepAlive:true})
.then(() => console.log('Connected to Mongo!'))
.catch((error) => console.error(error))

module.exports = mongoose;
