import baseApi from "./Api";
import { brandType, modelType } from "./types";

const CarsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        allbrands: builder.query<{ message: string, data: {data : brandType[]} }, void>({
            query: () => ({
                url: '/brands',
            }),
        }),
        models_by_brand: builder.query<{ message: string, data: { models: modelType[] } }, { id: string | null }>({
            query: ({ id }) => ({
                url: `/models/${id}`,
            }),
        }),
    })

})


export const { useAllbrandsQuery, useModels_by_brandQuery } = CarsApi;