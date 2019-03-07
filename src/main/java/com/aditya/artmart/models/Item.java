package com.aditya.artmart.models;

public class Item {
	
	private int itemId;
	private String name;
	private float price;
	private String description;
	private int sellerId;
	
	public Item() {
	}

	public Item(String name, float price, String description, int sellerId) {
		this.name = name;
		this.price = price;
		this.description = description;
		this.sellerId = sellerId;
	}

	public int getItemId() {
		return itemId;
	}

	public void setItemId(int itemId) {
		this.itemId = itemId;
	}

	public int getSellerId() {
		return sellerId;
	}

	public void setSellerId(int sellerId) {
		this.sellerId = sellerId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public float getPrice() {
		return price;
	}

	public void setPrice(float price) {
		this.price = price;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	@Override
	public String toString() {
		return "Item [itemId=" + itemId + ", name=" + name + ", price=" + price + ", description=" + description
				+ ", sellerId=" + sellerId + "]";
	}
}
