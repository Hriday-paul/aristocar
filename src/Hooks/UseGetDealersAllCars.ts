const UseGetDealersAllCars = async (id: string) => {
    try {
        const response = await fetch(process.env.BASE_API + `/cars/creator/${id}`,
            {
                next:
                    { revalidate: 5 }
            });
        if (!response.ok) {
            // This will activate the closest `error.js` Error Boundary
            throw new Error('Failed to fetch data')
        }
        const res = response.json();
        return res
    } catch (err) {
        console.log(err);
        throw new Error('fetching error')
    }
}


export default UseGetDealersAllCars;