export default {
	loadCurrentRowToForm () {
		const row = TableShopProducts.triggeredRow;

		InputClipboard.setValue(row.title || "");

		InputProductBarcodes.setValue(
			Array.isArray(row.barcodes)
				? row.barcodes.join(", ")
				: row.barcodes || ""
		);

		InputProductContent.setValue(row.content || "");
	},
	
	resetForm () {	
		InputClipboard.setValue("");
		InputProductBarcodes.setValue("");		
		InputProductContent.setValue("");
	},
	
	filterCurrentRowToSupplierProducts () {
		const row = TableShopProducts.triggeredRow;

		this.loadCurrentRowToForm();

		const barcodes = Array.isArray(row.barcodes)
			? row.barcodes.filter(Boolean)
			: [row.barcodes].filter(Boolean);

		storeValue("supplierBarcodes", barcodes);
	}
}