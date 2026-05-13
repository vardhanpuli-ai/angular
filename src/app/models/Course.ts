export class Course {
    title: string;
    date: string;
    description: string;
    duration: string;
    price: number;
    constructor(title: string, date: string, description: string, duration: string, price: number) {
        this.title = title;
        this.date = date;
        this.description = description;
        this.duration = duration;
        this.price = price;
    }
}