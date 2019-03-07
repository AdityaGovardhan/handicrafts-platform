package com.aditya.artmart.dao.buyers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import com.aditya.artmart.models.Buyer;

@Component
public class BuyerDaoImpl implements IBuyerDao {
	
	private JdbcTemplate jdbcTemplate;
	
	@Autowired
	public BuyerDaoImpl(JdbcTemplate jdbcTemplate) {
		this.jdbcTemplate = jdbcTemplate;
	}

	@Override
	public void addNewBuyer(Buyer newBuyer) {
		jdbcTemplate.update("INSERT INTO buyers VALUES (NULL, ?, ?, ?, ?)", newBuyer.getFirstName(), newBuyer.getLastName(),
				newBuyer.getEmail(), newBuyer.getPassword());
	}

	@Override
	public List<Buyer> listAllBuyers() {
		List <Buyer> buyers = jdbcTemplate.query("SELECT * FROM buyers", new BeanPropertyRowMapper<Buyer>(Buyer.class));
		return buyers;
	}

	@Override
	public Buyer getBuyerByEmail(String email) {
		Buyer buyer = jdbcTemplate.queryForObject("SELECT * FROM buyers WHERE email = ?", new BeanPropertyRowMapper<Buyer>(Buyer.class), email);
		return buyer;
	}



	@Override
	public void addBoughtItem(int buyerId, int itemId) {
		jdbcTemplate.update("INSERT INTO buyer_items VALUES (?, ?)", buyerId, itemId);
	}
	
	@Override
	public List<Buyer> getItemBuyers(int itemId) {
		List<Buyer> buyers= jdbcTemplate.query("SELECT buyers.* FROM (buyers INNER JOIN buyer_items ON buyers.buyer_id = buyer_items.buyer_id) WHERE buyer_items.item_id = ?", new BeanPropertyRowMapper<Buyer>(Buyer.class), itemId);
		return buyers;
	}
}
