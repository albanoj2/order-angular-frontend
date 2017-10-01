import { Link } from './links';

class OrderLinks {
    self: Link;
    update: Link;
    delete: Link;
}

export class Order {

    id: number; 
    description: string;
    private costInCents: number; 
    isComplete: boolean;
    links: OrderLinks;

	public constructor() {}

    public static fromJson(json: any): Order {
        const order = new Order();
        order.deserialize(json);
        return order;
    }

	public deserialize(json: any) {
		this.id = json.id;
		this.description = json.description;
		this.costInCents = json.costInCents;
		this.isComplete = json.complete;
		this.links = json._links;
	}

    public serialize(): any {
        return {
            'id': this.id,
            'description': this.description,
            'costInCents': this.costInCents,
            'complete': this.isComplete
        };
    }

    set cost(cost: number) {
        this.costInCents = cost * 100.0;
    }

    public toggleComplete() {
        this.isComplete = !this.isComplete;
    }

    get isIncomplete(): boolean {
        return !this.isComplete;
    }
  
    get cost(): number {
        
        if (this.costInCents === 0) {
            return 0.0;
        }
        else {
            return this.costInCents / 100.0;
        }
    }
  
    get costString(): string {
        return `\$${this.cost.toFixed(2)}`;
    }
}
