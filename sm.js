function json_average(object){
    let ret_val = 0;
    let idk = JSON.parse(object);
    for(let item of idk){
        ret_val += item["mass"];
    }
    let result = ret_val / idk.length;
    key = {"mass" : result};
    return JSON.stringify(key);
}


function json_filter(str){
    let ret_val = [];
    let idk = JSON.parse(str);
    for (let item in idk){
        if (item["velocity"] > 34.23){
            ret_val.push(item)
        }
    }
    return json.stringify(acc)
}


console.log(json_filter('[{"density": 579.02, "velocity": 26.86, "mass": 48.26, "temperature": 10.16}, {"density": 790.25, "velocity": 41.52, "mass": 47.39, "temperature": 7.59}, {"density": 370.49, "velocity": 6.44, "mass": 53.21, "temperature": 51.24}, {"density": 106.73, "velocity": 7.67, "mass": 30.58, "temperature": 66.02}, {"density": 257.8, "velocity": 88.61, "mass": 6.89, "temperature": 61.03}, {"density": 859.5, "velocity": 58.3, "mass": 60.18, "temperature": 14.88}, {"density": 915.82, "velocity": 28.38, "mass": 59.56, "temperature": 12.56}, {"density": 53.96, "velocity": 11.22, "mass": 68.32, "temperature": 5.63}, {"density": 201.14, "velocity": 97.31, "mass": 72.46, "temperature": 57.67}, {"density": 685.21, "velocity": 58.38, "mass": 98.36, "temperature": 55.61}]'))


function json_filter(str){
    let sum = JSON.parse(str)
    let idk = []
    for (let item in sum){
        if(item["velocity"] > 49.21){
            idk.push(item)
        }
    }
    return JSON.stringify(idk)
}