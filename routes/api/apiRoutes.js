const axios = require("axios");
const router = require("express").Router();

// router.get('/clothing/recognition', (req, res) => {
//     $(function () {
//         var params = {
//             // Request parameters
//             "image": req.query,
//             // "gender": "Female",
//             "limit": "15",
//         };

//         $.ajax({
//             url: "https://api.mirrorthatlook.com/v2/mirrorthatlook?" + $.param(params),
//             beforeSend: function (xhrObj) {
//                 // Request headers
//                 xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "");
//                 xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", '0a37d052f5a240829ef1d12f5f06e6ec');
//             },
//             type: "GET",
//             // Request body
//             data: "{body}",
//         })
//             .done(function (data) {
//                 alert("success");
//                 console.log(data)
//                 res.json(data);
//             })
//             .fail(function () {
//                 alert("error");
//             });
//     });
// })

module.exports = router;