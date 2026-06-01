const cloudinary = require("cloudinary").v2;

/*Cloudinary Configuration*/

cloudinary.config({

  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,

  api_key: process.env.CLOUDINARY_API_KEY,

  api_secret: process.env.CLOUDINARY_API_SECRET,

});

/*Export Cloudinary*/

module.exports = cloudinary;

// const cloudinary = require(
//   "cloudinary"
// ).v2;

// /*
// ===================================
// Cloudinary Config
// ===================================
// */

// cloudinary.config({

//   cloud_name:
//     process.env.CLOUD_NAME,

//   api_key:
//     process.env.API_KEY,

//   api_secret:
//     process.env.API_SECRET,

// });

// module.exports =
//   cloudinary;