import { apiSlice } from "../slices/apiSlice";

const SUPER_ADMIN = "/superAdmin";

export const superAdminApiSlice = apiSlice.injectEndpoints({
    overrideExisting: true,
    endpoints: (builder) => ({
        superAdminLogin: builder.mutation({
            query: (data) => ({
                url: `${SUPER_ADMIN}/auth`,
                method: 'POST',
                body: data
            })
        }),
        superAdminRegister: builder.mutation({
            query: (data) => ({
                url: `${SUPER_ADMIN}/`,
                method: 'POST',
                body: data
            })
        })
    })
})

export const { useSuperAdminLoginMutation, useSuperAdminRegisterMutation } = superAdminApiSlice
