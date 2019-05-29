import axios from 'axios';

export default {
  get(playTime,favour,callback){
    let params = {
      playTime : playTime,
      favour : favour
    }

    axios.get(url,{
      params : params
    }).then((response) =>{
      const result = response.data;
      if(result.code == '0') {
        callback(result.data);
      }
    },(response) => {
      console.log(response.statusText)
    });
  }
}