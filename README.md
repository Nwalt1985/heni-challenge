# Overview

This service is a microservice that utilises AWS Lambda & API Gateway. It provides a GraphQL endpoint that can be queried to return data from https://api.harvardartmuseums.org/object API.

The data contains publicly accessible information on items classified as 'Prints', the data is ordered by rank in descending order, contains images and verified by the 'Best' standard.

# Local development

Clone the repo and run

```
npm i
```

You will need the serverless framework installed globally

```
$ npm i serverless -g
```

**Make sure you create a .env and add a value to API_KEY**

In order to run the service locally run one of the following commands:

```
$ serverless offline
```

```
$ sls offline
```

```
$ npm run dev
```

After running you should see an output similar to the following:

```bash
Starting Offline at stage dev (us-east-1)

Offline [http for lambda] listening on http://localhost:3002
Function names exposed for local invocation by aws-sdk:
           * graphql: heni-dev-graphql

   ┌───────────────────────────────────────────────────────────────────────────┐
   │                                                                           │
   │   ANY | http://localhost:3000/dev/graphql                                 │
   │   POST | http://localhost:3000/2015-03-31/functions/graphql/invocations   │
   │                                                                           │
   └───────────────────────────────────────────────────────────────────────────┘

Server ready: http://localhost:3000 🚀

Enter "rp" to replay the last request
```

### Jest tests

To run the tests run the following

```
npm run test
```

You should see the following output if tests run successfully

```bash
> heni@1.0.0 test
> jest

 PASS  src/test/graphql.test.ts (5.156 s)
 PASS  src/test/integration/graphql.integration.test.ts (5.936 s)

Test Suites: 2 passed, 2 total
Tests:       3 passed, 3 total
Snapshots:   0 total
Time:        6.466 s
Ran all test suites.
```

# GraphQL

A graphQL playground is available locally by navigating to:

- http://localhost:3000/dev/graphql

The deployed graphQL playground can be accessed by navigating to:

- https://5m1eti5xcd.execute-api.us-east-1.amazonaws.com/dev/graphql

### Example query

```
getPrints(page: 1) {
    info {
      page
      totalrecords
      pages
    }
    records {
      id
      rank
      description
      title
      images {

      }
    }
  }
}
```

# Notes

## Improvements

- Could make the graphql endpoint private by adding an api key. This would allow a usage plan to be created (if needed).
- If the service was to be scaled up and more resolver functions added I would be more strict with naming conventions and adding comments to functions that are complex
- More unit & integrations tests (if scaled up)
- Add a service schema to the documentation
- CI/CD pipeline
- Could add a VPC to add an extra layer of security
- If the API being called was rate limited, I would use a timed lambda to fetch data and store in a NoSQL database. GraphQL would query the DB instead of hitting the API directly.
