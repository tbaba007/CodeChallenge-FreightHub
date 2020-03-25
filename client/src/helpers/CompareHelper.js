const compareNameAsc=(a,b)=>{
    if ( a.name < b.name ){
        return -1;
      }
      if ( a.name > b.name ){
        return 1;
      }
    return 0;
}
const compareNameDsc=(a,b)=>{
    if ( a.name < b.name ){
        return 1;
      }
      if ( a.name > b.name ){
        return -1;
      }
    return 0;
}

const compareIdAsc=(a,b)=>{
    if ( a.id < b.id ){
        return -1;
      }
      if ( a.id > b.id ){
        return 1;
      }
    return 0;
}
const compareIdDsc=(a,b)=>{
    if ( a.id < b.id ){
        return 1;
      }
      if ( a.id > b.id ){
        return -1;
      }
    return 0;
}

export{
    compareIdAsc,
    compareIdDsc,
    compareNameAsc,
    compareNameDsc
}