export interface IData<DataType> {
    status: number;
    data?: DataType;
    error?: object;
}
