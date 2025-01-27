
export interface adminDipertmentsType {
    result: { id: number, name: string }[]
}

export interface createUserResType {
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

export interface userResponseI extends createUserResType {
    user_address: string,
    dealer_address: {
        "city": string | null,
        "country": string | null,
        "vat_id": string | null,
        "post_code": string | null,
        "street": string | null
    }
    isApproved : boolean
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

export type packageType = {
    "_id": string,
    "title": string,
    "shortTitle": string,
    "shortDescription": string,
    "price": number,
    "carCreateLimit": number,
    "durationDay": number,
    "isDeleted": boolean,
    "createdAt": string,
    "updatedAt": string
}

export type subscriptionResType = {
    "_id": string,
    "user": string,
    "package": string,
    "isPaid": boolean,
    "trnId": string | null,
    "amount": number,
    "expiredAt": string | null,
    "isExpired": boolean,
    "isDeleted": boolean,
    "createdAt": string,
    "updatedAt": string,
    "__v": 0
}

export type myBillsType = {
    "_id": string,
    "user": string,
    "subscription": {
        "_id": string,
        "user": string,
        "package": {
            "_id": string,
            "title": string,
            "shortTitle": string,
            "shortDescription": string,
            "price": number,
            "carCreateLimit": number,
            "durationDay": number,
            "isDeleted": boolean,
            "createdAt": string,
            "updatedAt": string,
            "__v": 0
        },
        "isPaid": boolean,
        "trnId": string,
        "amount": number,
        "expiredAt": string,
        "isExpired": boolean,
        "isDeleted": boolean,
        "createdAt": string,
        "updatedAt": string,
        "__v": 0
    },
    "vatAmount": number,
    "vatParcentage": number,
    "amount": number,
    "isPaid": boolean,
    "isDeleted": boolean,
    "tranId": string,
    "createdAt": string,
    "updatedAt": string,
    "__v": 0
}

export type currentSubscription = {
    "_id": "677e3972bd50d607f1894df4",
    "user": {
        "verification": {
            "otp": 0,
            "expiresAt": "2025-01-08T06:44:14.669Z",
            "status": true
        },
        "_id": "677e1dd530ddaf750989abd6",
        "status": "active",
        "name": "Plabon",
        "email": "alamin.biswas.cse@ulab.edu.bd",
        "phoneNumber": "+1234567890",
        "password": "$2b$12$6c93YTUE19UJZ7hdlXADFeUQwTc3H2uvpHZquu53YHHjVCVmK7CC6",
        "gender": "Male",
        "dateOfBirth": "1994-05-01",
        "isGoogleLogin": false,
        "image": null,
        "role": "dealer",
        "companyName": "ToTo",
        "dealership": "Nai",
        "address": "456 Elm Street, Springfield",
        "isDeleted": false,
        "isApproved": true,
        "createdAt": "2025-01-08T06:40:21.139Z",
        "updatedAt": "2025-01-08T06:42:03.328Z",
        "__v": 0
    },
    "package": {
        "_id": "67737d6cec34de80ec82ad27",
        "title": "Premium Package",
        "shortTitle": "Premium",
        "shortDescription": "Access to premium features, including unlimited car creation and extended support.",
        "price": 199.99,
        "carCreateLimit": 50,
        "durationDay": 30,
        "isDeleted": false,
        "createdAt": "2024-12-31T05:13:16.313Z",
        "updatedAt": "2025-01-09T05:14:51.812Z",
        "__v": 0
    },
    "isPaid": true,
    "trnId": "WNOqWFr23J",
    "amount": 199.99,
    "expiredAt": "2025-02-07T08:39:32.013Z",
    "isExpired": true,
    "isDeleted": false,
    "createdAt": "2025-01-08T08:38:10.219Z",
    "updatedAt": "2025-01-09T05:14:51.564Z",
    "__v": 0
}

export type metaType = {
    "page": number,
    "limit": number,
    "total": number,
    "totalPage": number
}

export type PaymentInvoiceType = {
    _id: string;
    paymentId: {
        _id: string;
        user: {
            dealer_address: {
                city: string | null;
                country: string | null;
                post_code: string | null;
                street: string | null;
                vat_id: string;
            };
            verification: {
                otp: number;
                status: boolean;
            };
            user_address: string | null;
            _id: string;
            status: string;
            name: string;
            email: string;
            phoneNumber: string;
            password: string;
            gender: string;
            dateOfBirth: string;
            isGoogleLogin: boolean;
            image: string;
            role: string;
            companyName: string;
            dealership: string;
            address: string;
            isDeleted: boolean;
            isApproved: boolean;
            createdAt: string;
            updatedAt: string;
            __v: number;
            passwordChangedAt: string;
            freeExpairDate: string;
            freeLimit: number;
            vat_status: string;
            vat_type: string;
        };
        subscription: {
            _id: string;
            user: string;
            package: {
                _id: string;
                title: string;
                shortTitle: string;
                shortDescription: string;
                price: number;
                carCreateLimit: number;
                durationDay: number;
                isDeleted: boolean;
                createdAt: string;
                updatedAt: string;
                __v: number;
            };
            isPaid: boolean;
            trnId: string;
            amount: number;
            expiredAt: string;
            isExpired: boolean;
            isDeleted: boolean;
            createdAt: string;
            updatedAt: string;
            __v: number;
        };
        "vatAmount": number,
        "vatParcentage": number,
        amount: number;
        isPaid: boolean;
        isDeleted: boolean;
        tranId: string;
        createdAt: string;
        updatedAt: string;
        __v: number;
    };
    invoiceDate: string;
    invoiceNumber: string;
    totalAmount: string;

    createdAt: string;
    updatedAt: string;
    __v: number;
};

