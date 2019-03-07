package com.aditya.artmart.dao.buyers;

import java.util.List;

import com.aditya.artmart.models.Buyer;

public interface IBuyerDao {
	
	public void addNewBuyer(Buyer newBuyer);
	
	public List<Buyer> listAllBuyers();
	
	public Buyer getBuyerByEmail(String email);
	
	public void addBoughtItem(int buyerId, int itemId);
	
	public List<Buyer> getItemBuyers(int itemId);
}
