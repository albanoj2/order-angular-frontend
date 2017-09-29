import { Href } from './links';

class OrderLinks {
    self: Href;
    update: Href;
    delete: Href;
}

export class Order {

    id: number; 
    description: string;
    costInCents: number; 
    isComplete: boolean;
    links: OrderLinks;

	public constructor(json: any) {
		this.deserialize(json);
	}

	public deserialize(json: any) {
		this.id = json.id;
		this.description = json.description;
		this.costInCents = json.costInCents;
		this.isComplete = json.complete;
		this.links = json._links;
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
