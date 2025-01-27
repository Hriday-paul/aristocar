export const bodyStyles = ['Suv', 'Coupe', 'Pickup', 'Sedan', "Cabriolet", 'Race car', 'Hot rod', "Limousine", 'Roadster', "Rv", "Convertible"]
export const colors = ['Black', 'White', 'Blue', 'Gray', 'Green', 'Red', 'Yellow', 'Orange', 'Gold', "Purple", "Pink", "Brown", "Silver"]
export const countries = [
    "Germany", "Romania", "Austria", "Italy", "France", "United Kingdom",
    "Switzerland", "Belgium", "Denmark", "Finland", "Greece", "Ireland",
    "Croatia", "Liechtenstein", "Luxembourg", "Monaco", "Netherlands",
    "Norway", "Poland", "Portugal", "San Marino", "Sweden", "Slovakia",
    "Spain", "Czech Republic", "Hungary"
]

export const years = (): number[] => {
    const years = [];
    const currentYear = new Date().getFullYear();
    for (let year = currentYear; year >= 1850; year--) {
        if (year > 2005 || [2000, 1990, 1980, 1970, 1960, 1950, 1900, 1850].includes(year)) {
            years.push(year);
        }
    }
    return years;
}

export const car_card_image_err = 'https://cdn.presslabs.com/wp-content/uploads/2018/10/upload-error.png'
export const car_card_image_blur = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAA1BMVEWnpaaXiDhOAAAAR0lEQVR4nO3BAQEAAACCIP+vbkhAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO8GxYgAAb0jQ/cAAAAASUVORK5CYII='