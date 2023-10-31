import axios from 'axios';


async function fetchItemsRestaurant() {
	try {
		const allItems= await axios.get(`https://wt15fjaub7.execute-api.us-east-1.amazonaws.com/dev/items`);
		return allItems.data;
	} catch (err) {
		console.log(err);
	}
}


async function getAllCategoriesIdRestaurant1() {
	try {
		const allCategories = await axios.get(`https://wt15fjaub7.execute-api.us-east-1.amazonaws.com/dev/items?categories`);
		return allCategories.data;
	} catch (err) {
		console.log(err);
	}
}


async function getItemsResults(valueInput: string) {
	try {
		const searchResults = await axios.get(`https://wt15fjaub7.execute-api.us-east-1.amazonaws.com/dev/items?search=${valueInput}`);
		return searchResults;
	} catch (err) {
		console.log(err);
	}
}


async function fetchItemPeopleInTable(id_peopleInTable: string) {
	try {
		const fetchItemPeopleInTable = await axios.get(`https://wt15fjaub7.execute-api.us-east-1.amazonaws.com/dev/items?fetchItemPeopleInTable=${id_peopleInTable}`);
		return fetchItemPeopleInTable.data;
	} catch (err) {
		console.log(err);
	}
}


export {
	fetchItemsRestaurant,
	getAllCategoriesIdRestaurant1,
	getItemsResults,
	fetchItemPeopleInTable,
};

	

