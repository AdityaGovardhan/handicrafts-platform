package com.aditya.artmart.dao.sellers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import com.aditya.artmart.models.Seller;

@Component
public class SellerDaoImpl implements ISellerDao {

	private JdbcTemplate jdbcTemplate;
	
	@Autowired
	public SellerDaoImpl(JdbcTemplate jdbcTemplate) {
		this.jdbcTemplate = jdbcTemplate;
	}

	@Override
	public void addNewSeller(Seller newSeller) {
		jdbcTemplate.update("INSERT INTO sellers VALUES(NULL, ?, ?, ?, ?)", newSeller.getFirstName(), newSeller.getLastName(),
				newSeller.getEmail(), newSeller.getPassword());
	}

	@Override
	public List<Seller> listAllSellers() {
		List<Seller> sellers = jdbcTemplate.query("SELECT * FROM sellers", new BeanPropertyRowMapper<Seller>(Seller.class));
		return sellers;
	}

	@Override
	public Seller getSellerByEmail(String email) {
		Seller seller = jdbcTemplate.queryForObject("SELECT * FROM sellers WHERE email = ?", new BeanPropertyRowMapper<Seller>(Seller.class), email);
		return seller;
	}

}
