package com.aditya.artmart.test;

import java.util.Arrays;
import java.util.List;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import com.aditya.artmart.dao.buyers.IBuyerDao;
import com.aditya.artmart.dao.items.IItemDao;
import com.aditya.artmart.dao.items.ItemDaoImpl;
import com.aditya.artmart.dao.sellers.ISellerDao;
import com.aditya.artmart.dao.sellers.SellerDaoImpl;
import com.aditya.artmart.dao.buyers.BuyerDaoImpl;
import com.aditya.artmart.models.Buyer;
import com.aditya.artmart.models.Item;
import com.aditya.artmart.models.Seller;

public class MainClass {

	public static void main(String[] args) {

		ApplicationContext context = new ClassPathXmlApplicationContext("application-context.xml");
		
		ISellerDao sellerDao = (SellerDaoImpl) context.getBean("sellerDaoImpl");
		IBuyerDao buyerDao = (BuyerDaoImpl) context.getBean("buyerDaoImpl");
		IItemDao itemDao = (ItemDaoImpl) context.getBean("itemDaoImpl");
		
		Seller seller1 = new Seller("Aditya", "Govardhan", "aditya@gmail.com", "adi123");
		Seller seller2 = new Seller("Sakshi", "Govardhan", "sakshi@gmail.com", "sak456");
		
		Buyer buyer1 = new Buyer("Nagesh", "Govardhan", "nagesh@gmail.com", "nag123");
		Buyer buyer2 = new Buyer("Aparna", "Govardhan", "aparna@gmail.com", "apa456");
		
		sellerDao.addNewSeller(seller1);
		sellerDao.addNewSeller(seller2);
		buyerDao.addNewBuyer(buyer1);
		buyerDao.addNewBuyer(buyer2);
		
		seller1 = sellerDao.getSellerByEmail("aditya@gmail.com");
		seller2 = sellerDao.getSellerByEmail("sakshi@gmail.com");
		buyer1 = buyerDao.getBuyerByEmail("nagesh@gmail.com");
		buyer2 = buyerDao.getBuyerByEmail("aparna@gmail.com");
		
		Item item1 = new Item("Red Glass", 0.99f, "A red color glass", seller1.getSellerId());
		Item item2 = new Item("Green Glass", 0.99f, "A green color glass", seller2.getSellerId());
		
		itemDao.addNewItem(item1);
		itemDao.addNewItem(item2);
		
		buyerDao.addBoughtItem(buyer1.getBuyerId(), 1);
		buyerDao.addBoughtItem(buyer2.getBuyerId(), 1);
		buyerDao.addBoughtItem(buyer2.getBuyerId(), 2);
		
		List<Item> buyer1items = itemDao.getBuyerItems(buyer1.getBuyerId());
		System.out.println(Arrays.toString(buyer1items.toArray()));
		
		List<Item> buyer2items = itemDao.getBuyerItems(buyer2.getBuyerId());
		System.out.println(Arrays.toString(buyer2items.toArray()));
		
		List<Buyer> item1buyers = buyerDao.getItemBuyers(1);
		System.out.println(Arrays.toString(item1buyers.toArray()));
		
		List<Buyer> item2buyers = buyerDao.getItemBuyers(2);
		System.out.println(Arrays.toString(item2buyers.toArray()));

		((ClassPathXmlApplicationContext) context).close();
	}

}
