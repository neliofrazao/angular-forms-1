import { Check } from '.';

describe('RobustForms :: Question :: Check', () => {

    it('should be instantiable', () => {
        expect(new Check('A simple question', '', 'check', [], false)).toBeTruthy();
    });

})