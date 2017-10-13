//get data from commom projects api
import axios from 'axios';

var gradeChosen;
var titleChosen;

export default {
    // Gets all standards
    getStandards: function() {
      return axios.get("/api/standards");
    },
    // Gets the standard with the given id
    getStandard: function(id) {
      return axios.get("/api/standards" + id);
    }
  };

//   const standards = {
//     runQuery: function (grade) {

//         return axios.get('mongodb://localhost/classroom', {
//             params: {
//                 'gradeLev': gradeChosen
//             }
//         })
//         .then(function(results) {
//             console.log('axios', results.data.response);
//             return results.data.response;
//         });
//     },
//     standardsFound: function(grade, title, description) {
//         var newStandard = {grade: grade, title: title, description: description};
//         return axios.post("/api/standards", newStandard)
//         .then(function(response) {
//             return response.data._id;
//         });
//     }
// };

// export default standards;