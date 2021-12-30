# Learning basic cloud

## Understanding serverless
Building and deploying web application has been based on HTTP requests sent to server. The application runs on server and developers have had to cover certain tasks to maintain the server. For example,

- Keeping the server up
- Responsible for uptime(a time that is in operation)
- Server security

and so on. And the need to minimize and address them more effiecently has been growing fast. This is where serverless concept comes into a play. 

## Serverless computing
<p>
Basically, serverless means that cloud provider will execute code and allocate resources. And this is done based on the only amount of resources needed to run the codes. 
</p>

<p>
The codes run on, mostly, inside stateless container dealing with many events such as HTTP requests, database, file upload, and so on. Cloud provider takes the codes in the format of function - that is why it is sometimes called a Functions as a Service(FaaS). Types of FaaS providers are as follows :  
</p>

- AWS : AWS lambda
- Microsoft Azure : Azure Functions
- Google Cloud : Cloud Functions

## Reference
- [Cloud Run QuickStart - Docker to Serverless](https://youtu.be/3OP-q55hOUI)
- [What is serverless?](https://serverless-stack.com/chapters/what-is-serverless.html)
