import {DynamoDBClient} from "@aws-sdk/client-dynamodb";
const client = new DynamoDBClient({});
import { DynamoDBDocumentClient, PutCommand, ScanCommand, DeleteCommand, UpdateCommand, GetCommand } from "@aws-sdk/lib-dynamodb";
export const dynamo = DynamoDBDocumentClient.from(client);
export const TableName = "TimmyTable";

export const handler = async (event : any, context : any) => {
    let body;
    let statusCode = '200';
    const headers = {
        'Content-Type': 'application/json',
    };

    try {
        switch (event.httpMethod) {
            case 'DELETE':
                body = await dynamo.send(new DeleteCommand({TableName : TableName, Key : JSON.parse(event.body) }));
                break;
            case 'GET':
                if(event.body){
                    body = await dynamo.send( new GetCommand({ TableName: TableName, Key : JSON.parse(event.body) }) );
                }
                else{
                    body = await dynamo.send( new ScanCommand({ TableName: TableName }) );
                }
                break;
            case 'POST':
                body = await dynamo.send( new PutCommand({TableName : TableName, Item : JSON.parse(event.body) }) );
                break;
            default:
                throw new Error(`Unsupported method "${event.httpMethod}"`);
        }
    } catch (err : any) {
        statusCode = '400';
        body = err.message;
    } finally {
        body = JSON.stringify(body);
    }

    return {
        statusCode,
        body,
        headers,
    };
};