import { IAccomodation } from './../models/Accomodation';
import accomodation from '../assets/json/accomodations.json'

export function getAccomodations(filter: any):IAccomodation[] {
    if (filter) return accomodation.filter((a: IAccomodation) => {
        const filtersKeys = Object.keys(filter);
        const match: Array<boolean> = []
        filtersKeys.forEach((element: string) => {
            //@ts-ignore
            match.push(a[element] === filter[element])
        });
        return !match.includes(false)
    })
    return accomodation
}