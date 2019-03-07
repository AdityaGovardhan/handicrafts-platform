package com.aditya.artmart.dao.items;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import com.aditya.artmart.models.Item;

@Component
public class ItemDaoImpl implements IItemDao {

	private JdbcTemplate jdbcTemplate;

	@Autowired
	public ItemDaoImpl(JdbcTemplate jdbcTemplate) {
		this.jdbcTemplate = jdbcTemplate;
	}

	@Override
	public void addNewItem(Item newItem) {
		jdbcTemplate.update("INSERT INTO items VALUES (NULL, ?, ?, ?, ?)", newItem.getName(), newItem.getPrice(),
				newItem.getDescription(), newItem.getSellerId());
	}

	@Override
	public List<Item> listAllItems() {
		List<Item> items = jdbcTemplate.query("SELECT * FROM items", new BeanPropertyRowMapper<Item>(Item.class));
		return items;
	}

	@Override
	public List<Item> getSellerItems(int sellerId) {
		List<Item> items = jdbcTemplate.query("SELECT * FROM items WHERE seller_id = ?", new BeanPropertyRowMapper<Item>(Item.class), sellerId);
		return items;
	}
	
	@Override
	public List<Item> getBuyerItems(int buyerId) {
		List<Item> items = jdbcTemplate.query("SELECT items.* FROM (items INNER JOIN buyer_items ON items.item_id = buyer_items.item_id) WHERE buyer_items.buyer_id = ?", new BeanPropertyRowMapper<Item>(Item.class), buyerId);
		return items;
	}
}
