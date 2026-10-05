export default {
	loadCurrentRowToForm () {
		const row = TableShopProducts.triggeredRow;

		InputProductTitle.setValue(row.title || "");

		InputProductBarcodes.setValue(
			Array.isArray(row.barcodes)
				? row.barcodes.join(", ")
				: row.barcodes || ""
		);

		InputProductContent.setValue(row.content || "");
	},
	
	resetForm () {	
		InputProductTitle.setValue("");
		InputProductBarcodes.setValue("");		
		InputProductContent.setValue("");
	},
	
	filterCurrentRowToMatchScores () {
		const row = TableShopProducts.triggeredRow;

		this.loadCurrentRowToForm();

		storeValue("matchScoreVariantId", row.variant_id);
	}
}