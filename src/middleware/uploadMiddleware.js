// const multer = require("multer");

// /*Import Cloudinary Storage*/

// const {
//   CloudinaryStorage,
// } = require("multer-storage-cloudinary");

// /*Import Cloudinary Config*/

// const cloudinary = require(
//   "../config/cloudinary"
// );

// /*Cloudinary Storage*/

// const storage = new CloudinaryStorage({

//   cloudinary: cloudinary,

//   params: {

//     /*
//     Cloudinary Folder
//     */

//     folder: "fees_management/students",

//     /*
//     Allowed File Types
//     */

//     allowed_formats: [
//       "jpg",
//       "jpeg",
//       "png",
//     ],

//   },

// });

// /*Multer Upload*/

// const upload = multer({

//   storage: storage,

// });

// /*Export Upload*/

// module.exports = upload;


const multer = require(
  "multer"
);

const {

  CloudinaryStorage,

} = require(
  "multer-storage-cloudinary"
);

const cloudinary = require(
  "../config/cloudinary"
);

/*
===================================
Cloudinary Storage
===================================
*/

const storage =
  new CloudinaryStorage({

    cloudinary: cloudinary,

    params: {

      folder:
        "fees_management/students",

      allowed_formats: [

        "jpg",

        "png",

        "jpeg",

      ],

    },

  });

/*
===================================
Multer Upload
===================================
*/

const upload = multer({

  storage: storage,

});

/*
===================================
Export Upload
===================================
*/

module.exports = upload;