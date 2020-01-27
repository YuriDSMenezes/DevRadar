const Dev = require("../models/Dev")
const parseStringAsArray = require('../utils/parseStringAsArray')

module.exports = {
  async index(req,res){
    const {latitude, longitude, techs} = req.query

    const techsArray = parseStringAsArray(techs)

    console.log(techs)
    const devs = await Dev.find({
      // encontra so os deves que tem as techsArray
      techs: {
        $in:techsArray,
      },
      location: {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: [longitude,latitude]
          },
          $maxDistance: 10000,
        }
      }
    });

    return res.json({devs})
  }
}