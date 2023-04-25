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
				src="https://maps.google.com/maps?hl=en&amp;q=104a%20nh%E1%BA%A5t%20chi%20mai+(Lam%20Nail%20&amp;%20Eyelash)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
			></iframe>
		</div>
	);
};

export default Map;
