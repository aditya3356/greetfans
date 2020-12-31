# Greetfans Interview - Mini take-home project

This sample shows how to build a coffee roastery themed SaaS platform using [Stripe Checkout](http://stripe.com/checkout) and [Stripe Connect](https://stripe.com/connect), where coffee roasteries can signup to get their website and wholesale shop with just a few clicks. The Roastery platform takes an application fee for every transaction happening on the platform.

Platform owners are on-boarded using [Stripe Connect Standard](https://stripe.com/connect) where they connect their existing Stripe account. When the marketplace accepts funds via card payments, the funds are routed to the seller's Stripe accounts as a part of each marketplace transaction.

See a hosted version of the [https://roastery.stripe.dev](https://roastery.stripe.dev)

Join [Google meet](https://meet.google.com/jbi-jmpx-yap)

<img src="./demo.png" alt="Preview of recipe" align="center">

## Features

- Basic user authentication system.
- Stripe onboarding using Stripe Connect Standard.
- Payments via Stripe Checkout.
- Basic platform website for each seller.
- Custom platform dashboard.

## Architecture

The marketplace is implemented as full-stack application powered by [Next.js](https://nextjs.org/) and contains a React front-end, and a Node.js REST API.

The app renders its React components as both the server and client-side using [isomorphic rendering](https://matwrites.com/universal-react-apps-start-with-next-js/).

![](https://matwrites.com/wp-content/uploads/2017/06/Isomorphic-web-apps.png)

### Technical features

- Authentication system using [JWT tokens](https://jwt.io/) with login and signup pages.
- Storage using [LowDB](https://github.com/typicode/lowdb) to provide a basic local JSON database.
- REST API scaffolding with authentication endpoints for resources like `listings`, `login`, `payouts`, `profile`, `signup`, `transactions`, and `users`.
- Card payments are accepted via [Payment Intents API](https://stripe.com/docs/payments/payment-intents) + [Stripe Elements](https://stripe.com/payments/elements) and is integrated via [`react-stripe-elements`](https://github.com/stripe/react-stripe-elements)

## Getting started

To run this sample locally all you need is checkout the repo and run the app.

You will need a Stripe account with its own set of [API keys](https://stripe.com/docs/development#api-keys), and enable a few features for your Stripe Account.

Don't worry, just follow the steps in this guide.

**1. Clone and configure the sample**

```
git clone https://github.com/sivakoneti/greetfans.git

OR

git clone https://github.com/stripe/stripe-demo-connect-roastery-saas-platform.git
```

**2. Configure Stripe**

The first thing you need to do is to Create a Connect platform. You do that by going to https://dashboard.stripe.com/test/connect/overview.

Once you have registered your Connect platform, you can now generate a Connect User Id. You need this together with your Stripe API keys.

**2. Get Stripe API keys and configure environment variables**

Go to the Stripe [developer dashboard](https://dashboard.stripe.com/apikeys) to find your API keys (developer settings), and your Connect User Id (Connect settings).

Copy the .env.example file into a file named .env in the folder of the server you want to use. For example:

```
cp .env.example .env
```

Now copy your Stripe API keys and Connect User id into your `.env` file:

```
STRIPE_PUBLIC_KEY=<replace-with-your-publishable-key>
STRIPE_SECRET_KEY=<replace-with-your-secret-key>
STRIPE_CLIENT_ID=<replace-with-your-connect-client-id>
```

Save the `.env` file and you should be good.

**3. Set A Redirect URI for Stripe Onboarding**

Go to your [connect settings](https://dashboard.stripe.com/settings/applications) to add a redirect uri for Stripe to call back to after a seller onboards with Stripe.

The URI this app uses is [http://localhost:3000/stripe/callback](http://localhost:3000/stripe/callback) 

### Using the sample app

1. Run `npm install`
1. Run `npm run dev`
1. You are now ready to use the app running in [http://localhost:3000](http://localhost:3000).
1. The marketplace should be available, and if you go to `/login` you should be able to login as both buyers and sellers using the demo buttons.

## Problem sets

1. Currently, this project has a Basic Authentication system with [JWT tokens](https://jwt.io/) and new users and Platforms are stored in [LowDB](https://github.com/typicode/lowdb) in a basic local JSON (/db/database.json).
 
P: Change Data Storage to [AWS dynamodb using amplify with GraphQL](https://aws.amazon.com/blogs/mobile/amplify-framework-adds-support-for-aws-lambda-functions-and-amazon-dynamodb-custom-indexes-in-graphql-schemas/) and implement [Firebase Authentication](https://firebase.google.com/docs/auth). 


```
Hint1: You are free to use code samples from [Next.js +Firebase authentication](https://github.com/vercel/next.js/tree/canary/examples/with-firebase-authentication).
 
Hint2: Any two Authentication APIs [Providers integration](https://firebase.google.com/docs/auth) with Google, Facebook, or Twitter.

Note: No duplicate email accounts should be allowed in the platform
```



2. Currently "User Platform settings" [http://localhost:3000/dashboard/settings](http://localhost:3000/dashboard/settings) are disabled to modify.
 
P: A. Enable "Update settings" Button and add extra fields to change TEL, availble Timings, Support email, Platform logo, Cover picture, and Tag line.

   B. In User "Profile" [http://localhost:3000/profile](http://localhost:3000/profile) add functionality to change Name, and Profile Picture of the User.

Platform logo, Cover picture, Tag line will be displayed in Platform Public URL [http://localhost:3000/p/mission-coffee-co](http://localhost:3000/p/mission-coffee-co)

TEL, Availble Timings, Support email will be displayed in Platform Public URL [http://localhost:3000/p/mission-coffeee-co/contact](http://localhost:3000/p/mission-coffeee-co/contact)

Both "Platform settings" and "Profile" data should be stored in [AWS dynamodb using amplify with GraphQL](https://aws.amazon.com/blogs/mobile/amplify-framework-adds-support-for-aws-lambda-functions-and-amazon-dynamodb-custom-indexes-in-graphql-schemas/)
 
```
Hint1: To Enable Platform settings -> Update settings Button
Modify: 'publicRuntimeConfig' In next.config.js 

    isTestMode:
      // process.env.STRIPE_PUBLIC_KEY &&
      // process.env.STRIPE_PUBLIC_KEY.indexOf('pk') > -1
      false,
    }

Hint2: Data structure and fields same as database.json in /db/database.json from root folder.
```
3. Change Product design template in [http://localhost:3000/p/mission-coffee-co/products](http://localhost:3000/p/mission-coffee-co/products) 

- From this design
![image](https://user-images.githubusercontent.com/41994167/103122719-76b52d80-46a7-11eb-8c77-f3d7a45b086a.png)

- To this Design  ( https://github.com/stripe-samples/payment-form-modal )
![image](https://user-images.githubusercontent.com/41994167/103122646-17571d80-46a7-11eb-8646-1fa33378de98.png)


4. Push code to your private repo and deploy in [vercel](https://vercel.com/)

######
Samples fom nextjs https://github.com/vercel/next.js/tree/canary/examples
###### Optional
4. Documentation for each problem set implementation. 
5. Fix potential security vulnerabilities in this repository dependencies.


## Project contributor(s)

[@auchenberg-stripe](https://twitter.com/auchenberg)
# greetfans
