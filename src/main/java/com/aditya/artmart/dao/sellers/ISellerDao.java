package com.aditya.artmart.dao.sellers;

import java.util.List;

import com.aditya.artmart.models.Seller;

public interface ISellerDao {
	
	public void addNewSeller(Seller newSeller);
	
	public List<Seller> listAllSellers();
	
	public Seller getSellerByEmail(String email);

}
