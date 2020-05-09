export const cityList = async () => {
    // TODO: Fetch the Cities from DB
    return ['Canberra', 'Sydney', 'Perth'];
}

export const suburbsList = async () => {
    // TODO: Fetch the Suburbs from DB
    return ['Lyneham', 'City'];
}

export const cuisineList = async () => {
    // TODO: Fetch the Cuisines from DB
    return ['Thai', 'Indian', 'Korean'];
}


export const topDetails = async (ip, name) =>  {
    // TODO: Fetch the offers from the DB
    // Here name = " CityName " 
    const data = await fetch("http://"+ip+"/details.json?name="+ name)
    .then ((response) => response.json())
    .then ((data) => {
        return data;
    });        

    return data;
}


export const restaurantData = async (ip, city) => {
    const restData = await fetch("http://"+ip+"/restuarants.json?city=" + city)
    .then ((response) => response.json())
    .then ((data) => { 
        return data;
    });        
    return restData;
}

export const groceriesData = async (ip, city) => {
    const grocData = await fetch("http://"+ip+"/restuarants.json?city=" + city)
    .then ((response) => response.json())
    .then ((data) => { 
        return data;
    });        
    return grocData;
}


export const adsData = async () => {     
    return ["AD1", "AD2", "AD3", "AD4"];
}