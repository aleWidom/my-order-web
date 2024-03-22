export interface TableRestaurant {
	TableID: string;
	table_number: string | undefined;
	table_active: string | undefined;
	table_call: string | undefined;
}

export interface PlateRestaurant {
	ItemID: string;
	title: string;
	photo: string;
	description: string;
	price: string;
	id_category?: string;
}

export interface CardsCategoryMainPlates {
	header: string;
	plates: PlateRestaurant[]
}

export interface CategoryRestaurant {
	CategoryID: string;
	name: string;
	photo: string;
}


export interface ItemPeopleInTable {
	orderNumber: string,
	idPeopleInTable: string,
	numberTable: string | undefined,
	quantity: number,
	id_item: string,
}



export interface PlateSelected {
	title: string;
	quantity: number;
	price: string;
	id_item: string;
	state?: string
}

export interface ModalPlate {
	ItemID: string,
	title: string;
	description: string;
	price: string;
	quantity: number;
	stateModal?: boolean,
	modalType?: 'main' | 'required',
	stateOrder?: 'temporary' | 'edit' | 'delete' | 'orderConfirmed' | 'orderError',
	headerModalRequest?: string,
	index?: number
}

export interface ModalInfoInterface {
	description: string;
	state: boolean;
	section: string;
}


export interface Order {
	ItemID: string,
	title: string,
	orderNumberID: string,
	numberTable: string,
	quantity: string,
	price: number,
	state: string,
	date: string
}

