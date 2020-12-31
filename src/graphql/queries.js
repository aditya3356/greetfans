/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      userId
      platformId
      firstName
      lastName
      email
      password
      avatar
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        platformId
        firstName
        lastName
        email
        password
        avatar
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPlatform = /* GraphQL */ `
  query GetPlatform($id: ID!) {
    getPlatform(id: $id) {
      id
      address
      city
      description
      email
      name
      ownerUserId
      phone
      platformId
      slug
      state
      stripeUserId
      zip
      createdAt
      updatedAt
    }
  }
`;
export const listPlatforms = /* GraphQL */ `
  query ListPlatforms(
    $filter: ModelPlatformFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlatforms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        address
        city
        description
        email
        name
        ownerUserId
        phone
        platformId
        slug
        state
        stripeUserId
        zip
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
