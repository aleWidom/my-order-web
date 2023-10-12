export interface TableRestaurant {
	TableID: string | undefined;
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
	numberTable: string | undefined,
	orderNumber: string,
	idPeopleInTable: string,
	detail: PlateSelected[]
}

export interface PlateSelected {
	ItemPeopleInTableID: string,
	title: string;
	quantity: number;
	price: string;
	id_item: string;
}

export interface ModalPlate {
	ItemID: string,
	title: string;
	description: string;
	price: string;
	quantity: number;
	stateModal?: boolean,
	modalType?: 'main' | 'required',
	modalEditOrDeleteOrConfirm?: 'temporary' | 'edit'| 'delete' | 'confirm',
	index?: number
}

export interface ModalInfo {
	description: string;
	state: boolean;
	section: string;
}

