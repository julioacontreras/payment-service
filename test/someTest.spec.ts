/*

import { isEnableToGetSolarRoof } from '../src/domain/solarRoof/services/isEnableToGetSolarRoof';

describe('isEnableToGetSolarRoof', () => {
    it('Shold be result true', () => {
        const client = {
            full_name: '',
            address: '',
            cups: '654321',
            role: '',
            building_type: 'house',
            email: '',
            password: ''
        };

        const point = {
            cups: '654321',
            tariff: '',
            invoiced_amount: '',
            power: {
                p1: '',
                p2: '',
            },
            neighbors: ['123456']
        };

        expect(isEnableToGetSolarRoof(client, point)).toBe(true);
    });


    it('Shold be detect error because is not a house', () => {
        const client = {
            full_name: '',
            address: '',
            cups: '654321',
            role: '',
            building_type: 'apartment',
            email: '',
            password: ''
        };

        const point = {
            cups: '654321',
            tariff: '',
            invoiced_amount: '',
            power: {
                p1: '',
                p2: '',
            },
            neighbors: ['123456']
        };

        expect(isEnableToGetSolarRoof(client, point)).toBe(false);
    });

});
*/
