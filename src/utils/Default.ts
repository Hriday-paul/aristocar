export const bodyStyles = ['sedan', 'SUV', 'Coupe', 'BMW', 'Akij']
export const exteriorColor = ['Black', 'White', 'Blue', 'Gray', 'Green', 'Olive']
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