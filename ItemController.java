package org.generation.todolist.controller;

import org.generation.todolist.service.ItemService;
import org.generation.todolist.repository.entity.Item;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import org.springframework.beans.factory.annotation.Value;
import org.generation.todolist.component.FileUploadUtil;
import org.generation.todolist.controller.dto.ItemDTO;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;
import java.io.IOException;
import java.sql.Date;
import java.time.LocalDate;


@RestController
@RequestMapping("/item")
public class ItemController {


    @Value("${image.folder}")
    private String imageFolder;


    private final ItemService itemService;


    public ItemController( @Autowired ItemService itemService )
    {
        this.itemService = itemService;
    }


    @CrossOrigin
    @GetMapping( "/all" )
    public Iterable<Item> getItems()
    {
        return itemService.all();
    }

    @CrossOrigin
    @PostMapping("/add")
    public void save(@RequestParam(name = "title", required = true) String title,
                     @RequestParam(name = "description", required = true) String description,
                     @RequestParam(name = "date", required = true) Date targetDate)

     {

        ItemDTO itemDTO = new ItemDTO(title, description, targetDate);
        Item item = new Item(itemDTO);
        this.itemService.save(item);

    }



}

