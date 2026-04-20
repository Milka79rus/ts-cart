import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        const exists = this._items.find(i => i.id === item.id);

        if (exists && !item.canCount) {
            return;
        }

        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items];
    }

    getTotalPrice(): number {
        return this._items.reduce((sum, item) => sum + item.price, 0);
    }

    getTotalPriceWithDiscount(discount: number): number {
        const total = this.getTotalPrice();
        return total - (total * discount / 100);
    }

    removeById(id: number): void {
        this._items = this._items.filter((item: Buyable) => item.id !== id);
    }

    // Уменьшение количества (для задачи со звездочкой)
    decrease(id: number): void {
        const index = this._items.findIndex(item => item.id === id);
        if (index !== -1) {
            this._items.splice(index, 1);
        }
    }
}