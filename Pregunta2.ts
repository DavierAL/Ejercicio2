class Conversion {
    toMiles(km: number): number {
        return km * 0.621371;
    }
}

const conversion = new Conversion();

const km1 = 10;
const km2 = 20;

const millas1 = conversion.toMiles(km1);
const millas2 = conversion.toMiles(km2);

console.log(`${km1} kilómetros son equivalentes a ${millas1} millas.`);
console.log(`${km2} kilómetros son equivalentes a ${millas2} millas.`);
