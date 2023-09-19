/**
 *
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */


exports.handler = async (event) => {

    let mysql = require('mysql');

    let connection;

    let result;

    
 try {
     
     connection= mysql.createConnection({
        host: 'myorderdatabase.cluster-ctulrcqrkejd.us-east-1.rds.amazonaws.com',
        user: 'admin',
        password: 'admin123456',
        database: 'myorder'
     })
     
    let queryMySql = `select * from Table_`
    
    if (event.queryStringParameters?.active !== undefined) {
        queryMySql = `select * from Table_ Where table_active = 1`
    }
    else if (event.queryStringParameters?.activeCall !== undefined) {
        queryMySql = `select * from Table_ Where table_call = 1`
    }
    else if (event.queryStringParameters?.searchTable !== undefined) {
       queryMySql = `select * from Table_ Where table_number = ${event.pathParameters.proxy}`
    }
    else if (event.queryStringParameters?.activate !== undefined) {
        if (event.queryStringParameters.activate === "activate") {
            queryMySql = `UPDATE Table_ Set table_active = 1 Where table_number = ${event.pathParameters.proxy}`
        }
    }
    else if (event.queryStringParameters?.desactivate !== undefined) {
        if (event.queryStringParameters?.desactivate === "desactivate") {
            queryMySql = `UPDATE Table_ Set table_active=0, table_call=0  Where table_number = ${event.pathParameters.proxy}`
        }
    }
    else if (event.queryStringParameters?.call !== undefined) {
        if (event.queryStringParameters?.call === "call") {
           queryMySql = `UPDATE Table_ Set table_call= 1 Where table_number = ${event.pathParameters.proxy}`
        }
        else if (event.queryStringParameters?.call === "notCall") {
           queryMySql = `UPDATE Table_ Set table_call= 0 Where table_number = ${event.pathParameters.proxy}`
        }
        else if (event.queryStringParameters?.ordersCreate !== undefined) {
           queryMySql = `INSERT INTO Order_ (id_table) VALUES (${event.pathParameters.proxy});`
        }
    }


    const promiseQuery = new Promise((resolve) => {
        connection.query(`${queryMySql}`, function (error, results, fields) {
            resolve(results)
        });
    })
    result = await promiseQuery
}
  catch (err) {
    return err
  } finally {
    if (connection) await connection.end() 
  }




    return {
        statusCode: 200,
        headers: {
            /* "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*" */
        },
        body: JSON.stringify(result),
    };
};