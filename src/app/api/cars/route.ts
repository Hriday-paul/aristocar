import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
    try {
        console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++api called');

        const cars = [
            {
                "_id": "677390f97aa025f5ff4d34ea",
                "name": "Toyota Corolla 2024",
                "details": "Brand new Toyota Corolla with advanced features.",
                "images": [
                    "https://example.com/car1.jpg",
                    "https://example.com/car2.jpg"
                ],
                "brand": {
                    "_id": "676ce3be3520e776d3735293",
                    "brandName": "Toyota",
                    "createdAt": "2024-12-26T05:03:58.643Z",
                    "updatedAt": "2024-12-26T05:03:58.643Z",
                    "__v": 0
                },
                "model": {
                    "_id": "676ce5fdd88a29042098e218",
                    "modelName": "Corolla",
                    "brandId": "676ce3be3520e776d3735293",
                    "__v": 0
                },
                "country": "Japan",
                "price": 25000,
                "power": 150,
                "powerUnit": "Horsepower",
                "mileage": 20000,
                "mileageUnit": "KM",
                "vin": "1234567890ABCDEFGH",
                "bodyStyle": [
                    "Sedan"
                ],
                "interiorColor": [
                    "Black",
                    "Gray"
                ],
                "exteriorColor": [
                    "White"
                ],
                "fuelType": [
                    "Petrol"
                ],
                "creatorID": "67737a8bec34de80ec82acf3",
                "view_count": 1,
                "createdAt": "2024-12-31T06:36:41.363Z",
                "updatedAt": "2024-12-31T06:52:23.027Z",
                "__v": 0
            }
        ];

        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(cars)
            }, 5000)
        });

        const data = await promise;
        return NextResponse.json({ data: { cars: { data } } });



    } catch (err) {
        return NextResponse.json({ isOk: false, message: 'Internal Server Error' }, { status: 500 });
    }
}

export const POST = async (req: NextRequest, res: NextResponse) => {
    const body = await req.json();
    console.log(body);
    return NextResponse.json({ error: 'invalid rout' }, { status: 500 });
}