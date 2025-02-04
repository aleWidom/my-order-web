import axios from 'axios';
import { ItemPeopleInTable, TableRestaurant } from '../interfaces';



async function fetchTables() {
	try {
		const response = await axios.get(`https://s7y0zpjbs6.execute-api.us-east-1.amazonaws.com/develop/tables`);
		return response.data;
	} catch (err) {
		console.log(err);
	}
}

async function fetchTablesActive() {
	try {
		const response = await axios.get(`https://s7y0zpjbs6.execute-api.us-east-1.amazonaws.com/develop/tables?active`);
		return response.data;
	} catch (err) {
		console.log(err);
	}
}

async function fetchTablesActiveCall() {
	try {
		const response = await axios.get(`https://s7y0zpjbs6.execute-api.us-east-1.amazonaws.com/develop/tables?activeCall `);
		return response.data;
	} catch (err) {
		console.log(err);
	}
}


async function fetchTableActiveCall(tableID: string) {
	try {
		const response = await await fetch(`https://s7y0zpjbs6.execute-api.us-east-1.amazonaws.com/develop/tables?searchTableCall=${tableID}`,
			{ cache: 'no-store' });
		const data: TableRestaurant[] = await response.json()
		return data[0]
	} catch (err) {
		console.log(err);
	}
}


async function fetchTable(tableID: string) {
	try {
		const response = await axios.get(`https://s7y0zpjbs6.execute-api.us-east-1.amazonaws.com/develop/tables?searchTable=${tableID}`);
		const data: TableRestaurant[] = response.data;
		return data[0]
	} catch (err) {
		console.log(err);
	}
}



async function updateTableNumberDesactive(tableID: string) {
	try {
		const response = await axios.put(
			/*or get*/ `https://s7y0zpjbs6.execute-api.us-east-1.amazonaws.com/develop/tables/?desactivate=${tableID}`
		);
		return response.data;
	} catch (err) {
		console.log(err);
	}
}

async function updateTableNumberCall(tableID: string) {
	try {
		const response = await axios.put(
			/*or get*/ `https://s7y0zpjbs6.execute-api.us-east-1.amazonaws.com/develop/tables/?call=${tableID}`
		);
		return response.data;
	} catch (err) {
		console.log(err);
	}
}

async function updateTableNumberNotCall(tableID: string | undefined) {
	try {
		const response = await axios.put(
			/*or get*/ `https://s7y0zpjbs6.execute-api.us-east-1.amazonaws.com/develop/tables/?notCall=${tableID}`
		);
		return response.data;
	} catch (err) {
		console.log(err);
	}
}


async function updateTableNumberActive(tableID: string) {
	try {
		const response = await axios.put(
			/*or get*/ `https://s7y0zpjbs6.execute-api.us-east-1.amazonaws.com/develop/tables/?activate=${tableID}`
		);
		return response.data;
	} catch (err) {
		console.log(err);
	}
}


async function peopleInTableFetch(tableID: string) {
	try {
		const response = await axios.get(`https://s7y0zpjbs6.execute-api.us-east-1.amazonaws.com/develop/tables/?peopleInTableSearch=${tableID}`);
		return response.data;
	} catch (err) {
		console.log(err);
	}
}


async function fetchOrderItem() {
	try {
		const response = await axios.get(`https://s7y0zpjbs6.execute-api.us-east-1.amazonaws.com/develop/tables?itemPeopleInTableJoin`);
		return response.data;

	} catch (err) {
		console.log(err);
	}
}

async function peopleInTable(idPeopleInTable: string, tableId: string) {
	try {
		const response = await axios.post(`https://s7y0zpjbs6.execute-api.us-east-1.amazonaws.com/develop/tables/${idPeopleInTable}/${tableId}?peopleInTable`);
		return response.data;
	} catch (err) {
		console.log(err);
	}
}


async function itemPeopleInTable(body: ItemPeopleInTable) {
	try {
		const response = await axios.post(`https://s7y0zpjbs6.execute-api.us-east-1.amazonaws.com/develop/tables?itemPeopleInTable`, body);
		return response;
	} catch (err) {
		console.log(err);
	}
}

async function deleteOrder(orderID: string) {
	try {
		const response = await axios.delete(`https://s7y0zpjbs6.execute-api.us-east-1.amazonaws.com/develop/tables?deleteOrder=${orderID}`);
		return response;
	} catch (err) {
		console.log(err);
	}
}



export {
	fetchTables,
	fetchTablesActive,
	fetchTablesActiveCall,
	fetchTable,
	fetchOrderItem,
	updateTableNumberActive,
	updateTableNumberDesactive,
	updateTableNumberCall,
	updateTableNumberNotCall,
	peopleInTableFetch,
	peopleInTable,
	itemPeopleInTable,
	deleteOrder,
	fetchTableActiveCall
};



/* async function itemPeopleInTable2(idItemPeopleInTable: string, orderNumber: string,  idPeopleInTable: string, numberTable: string, quantity: string, idItem: string) {
	
	INSERT INTO Item_peopleInTable (ItemPeopleInTableID, orderNumberID, id_peopleInTable, numberTable, quantity, id_item, state) VALUES(${JSON.stringify(event.body.data.idItemPeopleInTable)}, ${JSON.stringify(event.body.data.orderNumber)}, ${JSON.stringify(event.body.data.idPeopleInTable)}, ${JSON.stringify(event.body.data.numberTable)}, ${JSON.stringify(event.body.data.quantity)},  ${JSON.stringify(event.body.data.idItem)} , 'in process')
	
		try {
			const response = await axios.post(`https://wt15fjaub7.execute-api.us-east-1.amazonaws.com/dev/tables?itemPeopleInTable2`, {
				idItemPeopleInTable,
				orderNumber,
				idPeopleInTable,
				numberTable,
				quantity,
				idItem
			});
		
			return response;
		} catch (err) {
			console.log("error")
			console.log(err);
		}
	} */