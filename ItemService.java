package org.generation.todolist.service;

import org.generation.todolist.repository.entity.Item;


import java.util.ArrayList;
import java.util.List;


public interface ItemService {


    //save method is for 2 purposes - Create new item & Update existing item
    Item save(Item item);


    //Delete item from database - based on item Id
    void delete(int itemId);


    //Read all item from database
    ArrayList<Item> all();


    //Read an item from database - based on item Id
    Item findById(int itemId);
}


