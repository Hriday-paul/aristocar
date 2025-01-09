import { carDetailsI } from "@/app/[locale]/(main)/details/[id]/@cardetails/page";
import baseApi from "./Api";
import { contactType } from "./types";

export interface dealerCarType extends carDetailsI{
    view_count : number
}

const DealerApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        dealerContacts: builder.query<{ message: string, data: contactType[] }, void>({
            query: () => ({
                url: '/dealercontact',
            }),
        }),
        dealerCarViews: builder.query<{ message: string, data: { month: string, totalViews: number }[] }, { year: string | number }>({
            query: ({ year }) => ({
                url: `/cars/views-for-user?year=${year}`,
            }),
        }),
        contact_with_dealer: builder.mutation<{ message: string }, {
            "firstName": string,
            "lastName"?: string,
            phone: string,
            "email": string,
            "description": string,
            "carId"?: string
        }>({
            query: (data) => ({
                url: `/dealercontact/create-dealerContact`,
                method: 'POST',
                body: data
            }),
        }),
        dealer_listings: builder.query<{ message: string, data: { count: number, allCars: dealerCarType[] } }, void>({
            query: () => ({
                url: `/cars/count`,
            }),
        })
    })

})


export const { useDealerContactsQuery, useDealerCarViewsQuery, useContact_with_dealerMutation, useDealer_listingsQuery } = DealerApi;