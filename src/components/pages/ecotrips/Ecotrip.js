import React, { useEffect, useState } from "react";

import ecotripService from "../../../services/ecotrip.service";
import EcotripCard from "./EcotripCard";

const Ecotrips = () => {
	const tripService = new ecotripService();
	const [ecotrips, setEcotrips] = useState([]);

	useEffect(() => {
		tripService
			.getAllEcotrips()
			.then((response) => {
				console.log(response);
				const ecotripsData = response.data.map((elm) => {
					const ecotripData = {
						id: elm.id,
						nombre: elm.acf.nombre_del_ecotrip,
						objetivo: elm.acf.objetivo,
						inicio: elm.acf.inicio,
						dirigido: elm.acf.dirigido,
						imagen: elm.acf.imagen,
					};
					return ecotripData;
				});
				setEcotrips(ecotripsData);
			})
			.catch((err) => console.log("ERROOOOOR", err));
	}, []);

	return (
		<div>
			{ecotrips && ecotrips.map((elm) => <EcotripCard {...elm} key={elm.id} />)}
		</div>
	);
};

export default ecotrips;
