const UseGetAllCars = async ({
    brand,
    model,
    country,
    min_price,
    max_price,
    min_mileage,
    max_mileage,
    min_year,
    max_year,
    drive,
    body,
    exterior_color,
    interior_color,
    fuel_type,
    sort,
    page,
    search
}: {
    brand?: string | undefined,
    model?: string | undefined,
    country?: string | undefined,
    min_price?: string | undefined,
    max_price?: string | undefined,
    min_mileage?: string | undefined,
    max_mileage?: string | undefined,
    min_year?: string | undefined,
    max_year?: string | undefined,
    drive?: string | undefined,
    body?: string | undefined,
    exterior_color?: string | undefined,
    interior_color?: string | undefined,
    fuel_type?: string | undefined,
    sort?: string | undefined
    page?: string | undefined,
    search ?: string | undefined
}) => {
    try {
        // Build query string from valid parameters
        const queryParams = new URLSearchParams();

        if (brand) queryParams.append('brand', brand);
        if (model) queryParams.append('model', model);
        if (country) queryParams.append('country', country);
        // if (min_price) queryParams.append('min_price', min_price);
        // if (max_price) queryParams.append('max_price', max_price);
        if (min_price || max_price) queryParams.append('price', `${min_price || 0}-${max_price || 100000000}`);
        // if (min_mileage) queryParams.append('min_mileage', min_mileage);
        // if (max_mileage) queryParams.append('max_mileage', max_mileage);
        if (min_mileage || max_mileage) queryParams.append('mileage', `${min_mileage || 0}-${max_mileage || 1000000}`);
        if (min_year || max_year) queryParams.append('YearOfManufactureRange', `${min_year || 0}-${max_year || 1000000}`);
        if (drive) queryParams.append('drive', JSON.stringify([drive]));
        if (body) queryParams.append('bodyStyle', JSON.stringify(body.split(',')));
        if (exterior_color) queryParams.append('exteriorColor', JSON.stringify(exterior_color.split(',')));
        if (interior_color) queryParams.append('interiorColor', JSON.stringify(interior_color.split(',')));
        if (fuel_type) queryParams.append('fuelType', JSON.stringify(fuel_type.split(',')));
        if (sort) queryParams.append('sort', sort);
        if (page) queryParams.append('page', page);
        if (search) queryParams.append('searchTerm', search);
        queryParams.append('limit', '20');

        const queryString = queryParams.toString();
        const url = process.env.BASE_API + `/cars` + (queryString ? `?${queryString}` : '');

        const response = await fetch(url, {
            next: { revalidate: 5 }
        });

        if (!response.ok) {
            // This will activate the closest `error.js` Error Boundary
            throw new Error('Failed to fetch data');
        }

        const res = await response.json();
        return res;
    } catch (err) {
        console.error(err);
        throw new Error('fetching error');
    }
};

export default UseGetAllCars;