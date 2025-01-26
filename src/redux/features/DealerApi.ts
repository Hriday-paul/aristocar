import { carDetailsI } from "@/app/[locale]/(main)/details/[id]/@cardetails/page";
import baseApi from "./Api";
import { contactType, currentSubscription, metaType, myBillsType, packageType, PaymentInvoiceType, subscriptionResType } from "./types";

export interface dealerCarType extends carDetailsI {
    view_count: number
}

const DealerApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        dealerContacts: builder.query<{ message: string, data: { data: contactType[], meta: metaType } }, { page: number }>({
            query: ({ page }) => ({
                url: `/dealercontact/get-dealerContact?page=${page}`,
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
        dealer_listings: builder.query<{ message: string, data: { createdCarCount: number, carsRemaining: number, allCars: dealerCarType[] } }, {}>({
            query: () => ({
                url: `/cars/count`,
            }),
            providesTags: ['cars']
        }),
        deleteCar: builder.mutation<{ message: string }, { id: string }>({
            query: ({ id }) => ({
                url: `/cars/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['cars']
        }),
        packages: builder.query<{ message: string, data: { data: packageType[] } }, void>({
            query: () => ({
                url: `/packages`,
            })
        }),
        createSubscription: builder.mutation<{ message: string, data: subscriptionResType }, { packageId: string }>({
            query: ({ packageId }) => ({
                url: `/subscriptions`,
                method: 'POST',
                body: { package: packageId }
            }),
        }),
        createCheckout: builder.mutation<{ message: string, data: string }, { subscriptionId: string }>({
            query: ({ subscriptionId }) => ({
                url: `/payments/checkout`,
                method: 'POST',
                body: { subscription: subscriptionId }
            }),
        }),
        recentBills: builder.query<{ message: string, data: { data: myBillsType[], meta: metaType } }, { page: number }>({
            query: () => ({
                url: `/payments/userpayment`,
            })
        }),
        runningPackages: builder.query<{ message: string, data: currentSubscription[] }, void>({
            query: () => ({
                url: `/subscriptions/personalsubscription`,
            })
        }),
        createCar: builder.mutation<{ message: string, data: string }, { data: any }>({
            query: ({ data }) => ({
                url: `/cars/create`,
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['cars']
        }),
        updateCar: builder.mutation<{ message: string, data: string }, { data: any, id: string }>({
            query: ({ data, id }) => ({
                url: `/cars/update/${id}`,
                method: 'PATCH',
                body: data
            }),
            invalidatesTags: ['cars']
        }),

        invoice: builder.query<{ message: string, data: PaymentInvoiceType }, { id: string }>({
            query: ({ id }) => ({
                url: `/payments/invoices/${id}`,
            })
        }),

        confirm_payment: builder.query<{ message: string, data: PaymentInvoiceType }, { paymentId: string, sessionId: string }>({
            query: ({ paymentId, sessionId }) => ({
                url: `/payments/confirm-payment?paymentId=${paymentId}&sessionId=${sessionId}`,
            }),
            providesTags: ['payments']
        }),

    })

})


export const { useDealerContactsQuery, useDealerCarViewsQuery, useContact_with_dealerMutation, useDealer_listingsQuery, usePackagesQuery, useCreateSubscriptionMutation, useCreateCheckoutMutation, useRecentBillsQuery, useRunningPackagesQuery, useDeleteCarMutation, useCreateCarMutation, useUpdateCarMutation, useInvoiceQuery, useConfirm_paymentQuery } = DealerApi;