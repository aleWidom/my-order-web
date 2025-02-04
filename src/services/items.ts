import { PlateRestaurant } from '@/interfaces';
import axios from 'axios';


async function fetchItemsRestaurant() {
	try {
		const allItems = await axios.get(`https://s7y0zpjbs6.execute-api.us-east-1.amazonaws.com/develop/items`);
		return allItems.data;
	} catch (err) {
		console.log(err);
	}
}


async function getAllCategoriesIdRestaurant1() {
	try {
		const allCategories = await axios.get(`https://s7y0zpjbs6.execute-api.us-east-1.amazonaws.com/develop/items?categories`);
		return allCategories.data;
	} catch (err) {
		console.log(err);
	}
}


async function getItemsResults(valueInput: string, categoryID: string) {
	try {
		const searchResults = await axios.get(`https://s7y0zpjbs6.execute-api.us-east-1.amazonaws.com/develop/items?search=${valueInput}`);
		if (categoryID !== "0") {
			const platesByCategory = searchResults.data.filter((plate: PlateRestaurant) => {
				return plate.id_category === categoryID
			})
			return platesByCategory
		} else {
			return searchResults.data
		}
	} catch (err) {
		console.log(err);
	}
}


async function fetchItemPeopleInTable(id_peopleInTable: string) {
	try {
		const fetchItemPeopleInTable = await fetch(`https://s7y0zpjbs6.execute-api.us-east-1.amazonaws.com/develop/items?fetchItemPeopleInTable=${id_peopleInTable}`,
			{ cache: 'no-store' });
		const data = await fetchItemPeopleInTable.json()
		return data
	} catch (err) {
		console.log(err);
	}
}

async function deleteItem(orderId: string) {
	try {
		const deleteItem = await axios.delete(`https://s7y0zpjbs6.execute-api.us-east-1.amazonaws.com/develop/items?deleteItem=${orderId}`);
		return deleteItem
	} catch (err) {
		console.log(err);
	}
}


export {
	fetchItemsRestaurant,
	getAllCategoriesIdRestaurant1,
	getItemsResults,
	fetchItemPeopleInTable,
	deleteItem
};



