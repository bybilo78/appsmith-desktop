export default {
	loadSelectedRowToForm () {
		const row = TableShopProducts.triggeredRow;

		InputProductTitle.setValue(row.title || "");

		InputProductBarcodes.setValue(
			Array.isArray(row.barcodes)
				? row.barcodes.join(", ")
				: row.barcodes || ""
		);

		InputProductContent.setValue(row.content || "");
	}
}