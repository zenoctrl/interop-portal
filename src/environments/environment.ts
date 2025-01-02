// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.


export const KEYCLOAK_URL: string = "https://iam-uat.paykit.africa"; // https://iam-uat.paykit.africa | http://localhost:8080
export const KEYCLOAK_REALM: string = "paykit-uat"; // paykit-uat | interop-portal
export const KEYCLOAK_CLIENT_ID: string = "paykit-core"; // paykit-core | angular-web-client
export const REDIRECT_URI: string = "http://localhost:4040";

const BASE_URL = "https://app.core-uat.paykit.africa:30122/ledgers-core/v2";

export const environment = {
  production: true,
  baseUrl: BASE_URL,
  endpoints: {
    accounting: {
      create: {
        account: "/accounting/CreateAccount",
        transaction: "/accounting/CreateTransaction",
      },
      inquiry: "/accounting/AccountInquiry",
      transactions: {
        create: "/accounting/CreateTransaction",
        getAll: "/accounting/listAllTransactions",
        getAllByPostingReference: "/accounting/listTransactionsByPostingReference",
        getAllByUniqueReference: "/accounting/listTransactionsByUniqueReference",
        getAllyDateRange: "/accounting/listTransactionsByDateRange",
      },
      ledgerEntries: {
        getAll: "/accounting/ListEntries",
        getById: "/accounting/ListEntriesById",
      },
    },
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
