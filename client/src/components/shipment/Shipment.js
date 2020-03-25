import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/styles/style.css';
import ShipmentList from './ShipmentList';
import Details from './Details';
const shipmentService = require('../../service/shipment.service');
const compareHelper = require('../../helpers/CompareHelper');
const Shipment = () => {
	const [ shippingArray, setshippingArray ] = useState([]);
	const [ searchParameter, setSearchParameter ] = useState('');
	const [ shipmentDetails, setshipmentDetails ] = useState(null);
	const [ isEdit, setisEdit ] = useState(false);
	const [ shippingId, setshippingId ] = useState(false);
	const [ retId, setRetId ] = useState('');


	useEffect(
		() => {
			const fetchAll = () => {
				return shipmentService
					.fetchAllShipments()
					.then((response) => {
						setshippingArray((arr) => [ ...arr, response.shipments ]);
					})
					.catch((err) => {
						console.log(err.message);
					});
			};
			fetchAll();
		},
		[ retId ]
	);

	const search = () => {
		if (searchParameter.trim().length === 0) return alert('Enter a valid shipment id to search');

		if (isEdit) {
			update(shippingId, searchParameter)
				.then((response) => {
					shippingArray.length = 0;
					setRetId(searchParameter);
					setisEdit(false);
					setSearchParameter('');
					alert('Name updated successfully!');
					return;
				})
				.catch((err) => {
					console.log(err.message);
					return alert('An error occured while updating the details');
				});
		}

		shipmentService
			.fetchShipmentById(searchParameter)
			.then((response) => {
				shippingArray.length = 0;

				setshippingArray((arr) => [ ...arr, [ response ] ]);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const update = (id, model) => {
		return shipmentService.updateShipment(id, { name: model });
	};

	const viewDetails = (obj) => {
		setshipmentDetails(obj);
	};
	const closeDetails = () => {
		setshipmentDetails(null);
	};
	const editName = (obj) => {
		setisEdit(true);
		setshippingId(obj.id);
		setSearchParameter(obj.name);
	};
	const cancelEdit = () => {
		setisEdit(false);
		setSearchParameter('');
	};

	const sortShippingList = (selector, order) => {
		
		shipmentService
			.fetchAllShipments()
			.then((response) => {
				shippingArray.length = 0;
				setshippingArray((oldarr) => [ ...oldarr, filterBySelector(response, selector, order) ]);
			})
			.catch((err) => {
				console.log(err.message);
			});
	};

	const filterBySelector = (response, selector, order) => {
		if (selector === 'id' && order === 'Asc') {
			return response.shipments.sort(compareHelper.compareIdAsc);
		} else if (selector === 'id' && order === 'Dsc') {
			return response.shipments.sort(compareHelper.compareIdDsc);
		} else if (selector === 'name' && order === 'Asc') {
			return response.shipments.sort(compareHelper.compareNameAsc);
		} else if (selector === 'name' && order === 'Dsc') {
			return response.shipments.sort(compareHelper.compareNameDsc);
		}
	};

	return (
		<React.Fragment>
			<center>
				{shipmentDetails===null?
				<div className="Search">
					<input
						type="text"
						placeholder="Search"
						className="form-control"
						onChange={(e) => setSearchParameter(e.target.value)}
						value={searchParameter}
					/>
					<br />
					<button className="btn btn-primary Button" onClick={search}>
					{isEdit? 'Update':'Search'}
						
					</button>
					&nbsp; &nbsp;
					{isEdit?
					<button
						className="btn btn-danger Button"
						onClick={cancelEdit}
					>
						Cancel
					</button>:null}
				</div>:null}
			</center>

			{shipmentDetails===null?			
			<div
				
			>
				<ShipmentList
					ShippingList={shippingArray}
					ShipmentDetails={viewDetails}
					Edit={editName}
					Count={setshippingArray.length}
					Sort={sortShippingList}
				/>
			</div>
			:null}
			{shipmentDetails!==null?	
			<div>
				<Details Details={shipmentDetails} Close={closeDetails} />
			</div>:null}
		</React.Fragment>
	);
};

export default Shipment;
