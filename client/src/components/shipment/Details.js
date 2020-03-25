import React from 'react';

const Details = (props) => {
	let { Details } = props;
	
	return (
		<div className="row">
			<div className="col-lg-4">
				Name: <label>{Details !== null ? Details.name : ''}</label>
				<br />
				Destination:<label>{Details !== null ? Details.destination : ''}</label>
			</div>
			<div className="col-lg-4">
				<table className="table">
					<thead>
						<tr>
							<th>Type</th>
							<th>Description</th>
							<th>Volume</th>
						</tr>
					</thead>
					<tbody>
						{Details !== null ? (
							Details.cargo.map((item, index) => {
								return (
									<tr key={index}>
										<td key={item.type}>{item.type}</td>
										<td key={item.description}>{item.description}</td>
										<td key={item.volume}>{item.volume}</td>
									</tr>
								);
							})
						) : (
							''
						)}
					</tbody>
				</table>
				<button className="btn btn-danger" onClick={props.Close}>
					Go Back
				</button>
			</div>
			<div className="col-lg-4">
				Mode: <label>{Details !== null ? Details.mode : ''}</label>
				<br />
				Type: <label>{Details !== null ? Details.type : ''}</label>
				<br />
			</div>
			<br />
		</div>
	);
};

export default Details;
