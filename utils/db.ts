// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, get, ref, DataSnapshot } from "firebase/database"
import { GridColDef } from '@mui/x-data-grid';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDrjXuyDkljaJ9IDDIP8M4wbyBs2IUPB88",
	authDomain: "fuel-consumption-742fd.firebaseapp.com",
	databaseURL: "https://fuel-consumption-742fd-default-rtdb.europe-west1.firebasedatabase.app",
	projectId: "fuel-consumption-742fd",
	storageBucket: "fuel-consumption-742fd.appspot.com",
	messagingSenderId: "934877344407",
	appId: "1:934877344407:web:9c628e5af1af11c4c52fd2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const rtdb = getDatabase(app);

interface Data {
	id: number,
	vehicle_id: string;
	vehicle_brand: string;
	consumption_day: number;
	total_consumption: number;
}

function createData(
	id: number,
	vehicle_id: string,
	vehicle_brand: string,
	consumption_day: number,
	total_consumption: number
): Data {
	return {
		id,
		vehicle_id,
		vehicle_brand,
		consumption_day,
		total_consumption
	};
}
export const columns: GridColDef[] = [
	{ field: 'vehicle_id', headerName: "Vehicle ID", width: 200 },
	{ field: 'vehicle_brand', headerName: "Vehicle Brand", flex:1 },
	{ field: 'consumption_day', headerName: "Consumption Day (L)", width: 200 },
	{ field: 'total_consumption', headerName: "Total Consumption (L)", width: 200 },
]


export async function getData(path: string): Promise<Array<Data>> {
	const datasnap = (await get(ref(rtdb, path))).toJSON();
	if (datasnap === null) {
		return [];
	}
	else {
		let id = -1;

		const rows = Object.entries(datasnap).map((entry) => 
		{
			const [key, value] = entry;
			id += 1;
			return createData(id, key, value[0], value[2], value[3]);
		})

		return rows
	}
	return [];

}
