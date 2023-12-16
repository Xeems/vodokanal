export type User = {
    user_id?: number
    family_name: string;
    first_name: string;
    middle_name?: string;
    login: string;
    password?: string;
    roles: UserRole[] 
}

export enum UserRole {
    USER = "USER",
    ADMIN = "ADMIN"
}

export type Address = {
    address_id?: number
    city: string
    street: string
    house: string
    appartment: string
    meter_readings?: Meter_readings[]	
}

export type Meter_readings = {
    meter_readings_id?: number
    excel_document_id?: number
    address_id: number
    address?: Address
    hot_water: number
    cold_water: number
}

export type ExcelFile = {
    fileId: number
    fileName: string
    uploadDate: string
    meter_readings?: Meter_readings[]
    erors?: Error[]
}

export type Document_data = {
    document: ExcelFile,
    meter_readings: Meter_readings[],
    errors: Error_row[]
}

export type Error_row = {
    error_id?: number
    address?: Address
    error_content: string
    excel_document_id: number
    excel_document?: ExcelFile
    document_row: number
}