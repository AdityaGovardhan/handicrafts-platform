package com.aditya.artmart.dao.items;

import java.util.List;

import com.aditya.artmart.models.Item;

public interface IItemDao {
	
	public void addNewItem(Item newItem);
	
	public List<Item> listAllItems();
	
	public List<Item> getSellerItems(int sellerId);
	
	public List<Item> getBuyerItems(int buyerId);
}
