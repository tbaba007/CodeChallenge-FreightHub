const handleJsonResponse=(response)=>{
    if(!response.ok)
    return Promise.reject(response.statusText)
    else
    return response.json();
}

const handleTextResponse=(response)=>{
    if(!response.ok)
    return Promise.reject(response.statusText)
    else
    return response.text();
}

export{
    handleJsonResponse,
    handleTextResponse
}