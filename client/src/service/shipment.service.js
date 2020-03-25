const httpResponseHelper=require('../helpers/HttpResponseHelper');
const api=require('../constants/api').api;

const fetchAllShipments=()=>{
    return fetch(api+'/getAll')
    .then(httpResponseHelper.handleJsonResponse)
}
const fetchShipmentById=(id)=>{
    return fetch(api+`/getById/${id}`)
    .then(httpResponseHelper.handleJsonResponse)
}
const updateShipment=(id,model)=>{
    return fetch(api+`/update/${id}`,{
        method:'PUT',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(model)
    })
    .then(httpResponseHelper.handleJsonResponse)
    
}
export{
    fetchAllShipments,
    fetchShipmentById,
    updateShipment
}