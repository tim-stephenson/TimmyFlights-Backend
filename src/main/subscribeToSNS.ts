import { SNSClient, SubscribeCommand } from "@aws-sdk/client-sns";

export default async function subscribeToSNS(email : string){
    const client = new SNSClient({});
    const command = new SubscribeCommand({Endpoint : email, Protocol : "email", TopicArn : "arn:aws:sns:us-east-1:026628599557:TimmyFlights"});
    const response = await client.send(command);
    console.log("response from subscription to SNS command",response);
    return response;
}