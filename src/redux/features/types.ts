
export interface adminDipertmentsType {
    result: { id: number, name: string }[]
}

export type createUserResType = {
    name: string,
    email: string,
    password: string,
    phoneNumber: string | null,
    status: boolean,
    gender: string | null,
    isGoogleLogin: boolean,
    image: string | null,
    role: 'user' | 'dealer',
    address: string | null,
    verification: {
        status: boolean,
    }
}

export type contactType = {
    "_id": string,
    "firstName": string,
    "lastName": string,
    "email": string,
    phone: string,
    "description": string,
    "carId": {
        "_id": string,
        "name": string
    },
    "createdAt": string,
    "updatedAt": string,
    "__v": 0
}

export type brandType = {
    "_id": string,
    "brandName": string,
}

export type modelType = {
    "_id": string,
    "modelName": string,
}