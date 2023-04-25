import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import SettingContext from "./context/Setting";

const root = ReactDOM.createRoot(document.getElementById("root"));

fetch(document.getElementById("config").src)
	.then((conf) => conf.json())
	.then((conf) => {
		root.render(
			<React.StrictMode>
				<SettingContext.Provider value={conf}>
					<App />
				</SettingContext.Provider>
			</React.StrictMode>
		);
	});
