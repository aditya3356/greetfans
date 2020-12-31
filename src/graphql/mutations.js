/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createPlatform = /* GraphQL */ `
  mutation CreatePlatform(
    $input: CreatePlatformInput!
    $condition: ModelPlatformConditionInput
  ) {
    createPlatform(input: $input, condition: $condition) {
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
export const updatePlatform = /* GraphQL */ `
  mutation UpdatePlatform(
    $input: UpdatePlatformInput!
    $condition: ModelPlatformConditionInput
  ) {
    updatePlatform(input: $input, condition: $condition) {
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
export const deletePlatform = /* GraphQL */ `
  mutation DeletePlatform(
    $input: DeletePlatformInput!
    $condition: ModelPlatformConditionInput
  ) {
    deletePlatform(input: $input, condition: $condition) {
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
