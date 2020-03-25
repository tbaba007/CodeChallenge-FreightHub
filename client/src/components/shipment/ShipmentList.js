import React,{useState} from 'react';
import '../../assets/styles/style.css';
const ShipmentList=(props)=> {
    const [order,setOrder]=useState('Asc')
    const [ currentPage, setCurrentPage ] = useState(1);
	const shippingListPerPage=20;
    const pageNumbers = [];
    let {ShippingList}=props; 
    let ShippingArray=[];

    if(ShippingList[0]!==undefined)
    {
        ShippingList[0].map(item=>{
          return  ShippingArray.push(item)
        })
    }
    
    
	const handleClick = (e) => {
    
		setCurrentPage(Number(e.target.id));
    };

    const sortList=(selector)=>{
        if(order==='Asc')
        {
            props.Sort(selector,order);
            setOrder('Dsc');
        }
        else
        {
            props.Sort(selector,order);
            setOrder('Asc');
        }
    }
    
	for (let i = 1; i <= Math.ceil(ShippingArray === undefined ? 0 : ShippingArray.length/ shippingListPerPage); i++) {
		pageNumbers.push(i);
    }
	const indexOfLastShipping = currentPage * shippingListPerPage;
	var indexOfFirstShipping = indexOfLastShipping - shippingListPerPage;
	const currentShipping = ShippingArray.slice(indexOfFirstShipping, indexOfLastShipping);
	const renderPageNumbers = pageNumbers.map((number) => {
		return (
			<ul className="pagination ListPagination">
				<li
					className="page-link"
					style={{ listStyleType: 'none' }}
					key={number}
					id={number}
					onClick={handleClick}
				>
					{number}
				</li>
			</ul>
		);
    });


    return (
        <React.Fragment>
             
            <table className="table">
                <thead>
                    <tr>
                                <th><a href="!#" onClick={()=>sortList('id')}>ID</a></th>
                                <th><a href="!#" onClick={()=>sortList('name')}>Name </a></th>
                                <th>Mode</th>
                                <th>Type</th>
                                <th>Total</th>
                                <th>Status</th>
                                <th>Action</th>
                                <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                   
                    {currentShipping.map((item,index)=>{
                        return <tr key={index}>
                              
                                <td key={item.id}>{item.id}</td>
                                <td key={item.name}>{item.name}</td>
                                <td key={item.mode}>{item.mode}</td>
                                <td key={item.type}>{item.type}</td>
                                <td key={item.total}>{item.total}</td>
                                <td key={item.status}>{item.status}</td>
                                <td key={`View ${index}`}>
                                    <button 
                                    className="btn btn-primary"
                                    onClick={()=>props.ShipmentDetails(item)}>
                                    View Details</button></td>
                                    <td key={`Edit ${index}`}>
                                    <button className="btn btn-success"
                                    onClick={()=>props.Edit(item)}>Edit</button></td>
                               </tr>
                    })}
                </tbody>
            </table>

            <center> {renderPageNumbers} </center>
        </React.Fragment>
    )
}

export default ShipmentList
