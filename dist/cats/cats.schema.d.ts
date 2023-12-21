import { Document } from 'mongoose';
export declare class Cat extends Document {
    email: string;
    name: string;
    password: string;
    imgUrl: string;
    readonly readOnlyData: {
        id: string;
        email: string;
        name: string;
        imgUrl: string;
    };
}
export declare const CatSchema: import("mongoose").Schema<Cat, import("mongoose").Model<any, any, any>, undefined, any>;
