//get data from commom projects api
import axios from 'axios';

const APIKEY = 'Sn9NqxzRDx7Fx2unQjLfZyWs';

const helpers = {
    runQuery: function(title) {
        let formattedTtitle = title.trim();

        return axios.get('http://api.commonstandardsproject.com/api/v1/standard_sets/49FCDFBD2CF04033A9C347BFA0584DF0_D1000265_grades-08', {
            params: {
                'api-key': APIKEY,
                'title': formattedTitle
            }
        })
        .then(function(results) {
            console.log('axios', results.data.response);
            return results.data.response;
        });
    },
    postSaved: function(title, subject, educationLevels) {
        var newStandard = {title: title, subject: subject, educationLevels: educationLevels};
        return axios.post("/api/standards", newStandards)
        .then(function(response) {
            return response.data._id;
        });
    }
    //getSaved:
    //postSaved:
    //deleteSaved
};

export default helpers;