import baseApi from "./Api";
import { contactType } from "./types";

const DealerApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        dealerContacts: builder.query<{ message: string, data: contactType[] }, void>({
            query: () => ({
                url: '/dealercontact',
            }),
        }),
    })

})


export const { useDealerContactsQuery } = DealerApi;