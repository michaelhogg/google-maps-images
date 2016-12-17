// @flow

/** @see developers.google.com/maps/documentation/static-maps/intro#Locations */
export default class StaticMapLocation {

    location: string;

    constructor(location: string) {
        this.location = location;
    }

    toString(): string {
        return this.location;
    }

    static fromLatLng(lat: number, lng: number): StaticMapLocation {
        return new StaticMapLocation(lat + ',' + lng);
    }

    static fromAddress(address: string): StaticMapLocation {
        return new StaticMapLocation(address);
    }

}

export function makeStaticMapLocation(location: string): StaticMapLocation {

    return new StaticMapLocation(location);

}