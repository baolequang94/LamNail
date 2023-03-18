import React from "react";

const Map = ({ height, width }) => {
	return (
		<div className="map">
			<iframe
				title="google-map"
				className="location__gmap"
				id="gmap_canvas"
				height={height}
				width={width}
				src="https://maps.google.com/maps?q=104A Nhất Chi Mai, P.13, Q.Tân Bình, HCM&t=&z=13&ie=UTF8&iwloc=&output=embed"
				frameborder="0"
				marginheight="0"
				marginwidth="0"
			></iframe>
		</div>
	);
};

export default Map;
