import baseApi from "./Api";
import { brandType, modelType } from "./types";

const CarsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        allbrands: builder.query<{ message: string, data: {data : brandType[]} }, void>({
            query: () => ({
                url: '/brands?sort=brandName&limit=99999999999999999999999',
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