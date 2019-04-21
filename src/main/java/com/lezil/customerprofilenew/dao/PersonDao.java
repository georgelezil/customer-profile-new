package com.lezil.customerprofilenew.dao;

import java.util.List;

import com.lezil.customerprofilenew.entity.Person;

public interface PersonDao {
	
	public List<Person> findAll();

	public Person findById(int id);

	public Person update(Person person);

	public Person insert(Person person);

	public void deleteById(int id);

}
