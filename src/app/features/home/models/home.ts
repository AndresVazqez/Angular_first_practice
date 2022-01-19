import { Image } from '../../../shared/models/Shared';

export interface Header {
    imgLogo: Image;
    name: string;
    img: Image;
}

export interface Hero {
    img: Image;
    title : string;
    description: string;

}

export interface Main {
    title: string;
    img: Image;
    text: string;
}

export interface Gallery {
    title: string;
    imageGallery : Image []
}

export interface Footer {
    description : string;
}