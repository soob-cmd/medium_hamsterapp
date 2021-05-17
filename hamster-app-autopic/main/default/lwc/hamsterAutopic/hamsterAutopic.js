import { LightningElement, api, wire } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import HAMSTER_BREED_FIELD from '@salesforce/schema/Hamster__c.Breed__c';
import HAMSTER_IMGS from '@salesforce/resourceUrl/hamster_images';

export default class HamsterAutopic extends LightningElement {
    @api recordId;
    @wire(getRecord, { recordId: '$recordId', fields: [HAMSTER_BREED_FIELD] }) 
    fetchedHamster;

    get breed() {
        return getFieldValue(this.fetchedHamster.data, HAMSTER_BREED_FIELD);
    }

    get hamsterImage() {
        //Images are preview images from https://www.istockphoto.com/
        return HAMSTER_IMGS + '/' + this.breed.substring(0,2).toLowerCase() + '.jpg';
    }


}