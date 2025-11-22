export class Items{
    id!: number;
    product!: string;
    price!: number;
    quiantity!: number;

    Total(): number {
        return this.price * this.quiantity;
    }
}