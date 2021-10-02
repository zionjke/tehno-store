import {$authHost, $host} from "./index";
import {DeviceType, TypeBrandType} from "../../types";


type DeviceResponseType = {
    count:number
    rows: DeviceType[]
}

type DeviceInfoType = {
    id:number
    title:string
    description: string
}

export type OneDeviceType = DeviceType & {
    info: DeviceInfoType[]
}

export const deviceApi = {
    async fetchTypes() {
        return await $host.get<TypeBrandType[]>('/api/type',)
    },
    async createType(typeName: string) {
        return await $authHost.post<TypeBrandType>('/api/type', typeName)
    },
    async fetchBrands() {
        return await $host.get<TypeBrandType[]>('/api/brand',)
    },
    async createBrand(brandName: string) {
        return await $authHost.post<TypeBrandType>('/api/brand', brandName)
    },
    async fetchDevices() {
        return await $host.get<DeviceResponseType>('/api/device',)
    },
    async fetchOneDevice(id:string) {
        return await $host.get<OneDeviceType>(`/api/device/${id}`,)
    },
}