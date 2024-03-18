/**
 *
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

exports.handler = async (event) => {
	let mysql = require('mysql');

	let connection;

	let result;

	let body = JSON.parse(event.body);

	try {
		connection = mysql.createConnection({
			host: 'myorderdatabase.cluster-ctulrcqrkejd.us-east-1.rds.amazonaws.com',
			user: 'admin',
			password: 'admin123456',
			database: 'myorder',
		});

		let queryMySql = `select * from Table_`;

		if (event.queryStringParameters?.active !== undefined) {
			queryMySql = `SELECT PeopleInTable.PeopleInTableID, PeopleInTable.id_table, Table_.table_active, Table_.table_call, Table_.table_number 
FROM PeopleInTable
JOIN Table_ ON PeopleInTable.id_table = Table_.TableID
WHERE Table_.table_active = '1' AND PeopleInTable.discharge = '-'`;
		} else if (event.queryStringParameters?.activeCall !== undefined) {
			queryMySql = `select * from Table_ Where table_call = 1   ORDER BY dateCall desc`;
		} else if (event.queryStringParameters?.resetAllTables !== undefined) {
			queryMySql = `UPDATE Table_ set table_call = 0, table_active = 0`;
		} else if (event.queryStringParameters?.itemPeopleInTableJoin !== undefined) {
			queryMySql = `select ItemPeopleInTableID, orderNumberID, numberTable, quantity, title, id_item, state from PeopleInTable, Item_peopleInTable , Item
        where  Item_peopleInTable.id_peopleInTable = PeopleInTable.PeopleInTableID AND  Item_peopleInTable.id_item= Item.ItemID AND state != "delivered" order by date DESC, numberTable ASC;`;
		} else if (event.queryStringParameters?.peopleInTable !== undefined) {
			queryMySql = `INSERT INTO PeopleInTable (PeopleInTableID, id_table)
        VALUES ( ${JSON.stringify(event.pathParameters.proxy.slice(0, 36))}, ${JSON.stringify(event.pathParameters.proxy.slice(37, 73))});`;
		} else if (event.queryStringParameters?.peopleInTableSearch !== undefined) {
			queryMySql = `Select * from PeopleInTable Where id_table = ${JSON.stringify(
				event.queryStringParameters.peopleInTableSearch
			)} Order by entry Desc`;
		} else if (event.queryStringParameters?.searchTable !== undefined) {
			queryMySql = `Select * from Table_ Where TableID = ${JSON.stringify(event.queryStringParameters.searchTable)}`;
		} else if (event.queryStringParameters?.activate !== undefined) {
			queryMySql = `UPDATE Table_ Set table_active = 1 Where tableID = ${JSON.stringify(event.queryStringParameters.activate)}`;
		} else if (event.queryStringParameters?.desactivate !== undefined) {
			queryMySql = `UPDATE Item_peopleInTable INNER JOIN PeopleInTable ON Item_peopleInTable.id_peopleInTable = PeopleInTable.PeopleInTableID
            INNER JOIN Table_  ON PeopleInTable.id_table = Table_.TableID set Item_peopleInTable.state = "registered", Table_.table_active = '0', Table_.table_call = '0', PeopleInTable.discharge = CURRENT_TIMESTAMP()
WHERE Item_peopleInTable.id_peopleInTable = ${JSON.stringify(event.pathParameters.proxy.slice(0, 36))}`
		} else if (event.queryStringParameters?.desactivateWihtOutOrder !== undefined) {
			queryMySql = `UPDATE PeopleInTable
INNER JOIN Table_  ON PeopleInTable.id_table = Table_.TableID 
set Table_.table_active = '0', Table_.table_call = '0', PeopleInTable.discharge = CURRENT_TIMESTAMP()
WHERE PeopleInTable.PeopleInTableID = ${JSON.stringify(event.pathParameters.proxy.slice(0, 36))}`
		}
		else if (event.queryStringParameters?.call !== undefined) {
			queryMySql = `UPDATE Table_ Set table_call= 1 Where tableID = ${JSON.stringify(event.queryStringParameters.call)}`;
		} else if (event.queryStringParameters?.notCall !== undefined) {
			queryMySql = `UPDATE Table_ Set table_call= 0 Where tableID = ${JSON.stringify(event.queryStringParameters.notCall)}`;
		} else if (event.queryStringParameters?.itemPeopleInTable !== undefined) {
			queryMySql = `INSERT INTO Item_peopleInTable (OrderNumberID, id_peopleInTable, numberTable, quantity, id_item, state) VALUES (${JSON.stringify(body.orderNumber)}, ${JSON.stringify(body.idPeopleInTable)}, ${JSON.stringify(body.numberTable)}, 
			  ${JSON.stringify(body.quantity)}, ${JSON.stringify(body.id_item)}, 'in process')`;
		}
		else if (event.queryStringParameters?.deleteOrder !== undefined) {
			queryMySql = `DELETE FROM Item_peopleInTable WHERE OrderNumberID = ${JSON.stringify(event.queryStringParameters.deleteOrder)}`;
		}
		else if (event.queryStringParameters?.allOrdersInProcess !== undefined) {
			queryMySql = `Select OrderNumberID, id_peopleInTable, numberTable, quantity, state, date, title  from Item_peopleInTable, Item where Item_peopleInTable.id_item = Item.ItemID AND state = "in process" order by date asc `;
		}
		else if (event.queryStringParameters?.peopleInTableDischarge !== undefined) {
			queryMySql = `UPDATE PeopleInTable SET discharge = CURRENT_TIMESTAMP() WHERE PeopleInTableID = ${JSON.stringify(event.queryStringParameters.peopleInTableDischarge)}`;
		}


		const promiseQuery = new Promise((resolve) => {
			connection.query(`${queryMySql}`, function (error, results, fields) {
				resolve(results);
			});
		});
		result = await promiseQuery;
	} catch (err) {
		return err;
	} finally {
		if (connection) await connection.end();
	}

	return {
		statusCode: 200,
		headers: {
			'Access-Control-Allow-Headers': 'Content-Type',
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'OPTIONS,POST,GET,PUT,PATCH',
		},
		body: JSON.stringify(result),
	};
};
