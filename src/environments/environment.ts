// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

const BASE_URL = "https://app.core-uat.paykit.africa:30122/ledgers-core/v2";

export const environment = {
  production: true,
  baseUrl: BASE_URL,
  endpoints: {
    account: {},
    transactions: {},
    organization: {},
    merchant: {},
    company: {},
    customers: {
      getAll: "/customers/listAllCustomers",
      getById: "/customers/listAllCustomersById",
      create: "/customers/CreateCustomer",
      update: "/customers/UpdateCustomer",
      delete: "/customers/DeleteCustomer",
    },
  },
};
