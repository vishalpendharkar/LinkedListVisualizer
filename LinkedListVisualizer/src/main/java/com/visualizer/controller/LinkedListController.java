package com.visualizer.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.visualizer.service.LinkedListService;

@RestController
@RequestMapping("/api/linkedlist")
@CrossOrigin(origins = "*")
public class LinkedListController {

	
	private final LinkedListService  service;
	
	public LinkedListController(LinkedListService service) {
		this.service = service;
	}
	
	@PostMapping("insert/beginning/{data}")
	public String insertAtBeginning(@PathVariable int data) {
		service.insertAtBeginning(data);
		return "Node insert at beginning";
	}
	
	@PostMapping("/insert/end/{data}")
    public String insertEnd(@PathVariable int data) {
        service.insertAtEnd(data);
        return "Node inserted at end";
    }
	
	@PostMapping("/insert/position/{data}/{position}")
    public String insertPosition(
            @PathVariable int data,
            @PathVariable int position) {
        service.insertAtPosition(data, position);
        return "Node inserted at position " + position;
    }
	
	 // Delete from beginning
    @DeleteMapping("/delete/beginning")
    public String deleteBeginning() {
        service.deleteFromBeginning();
        return "First node deleted";
    }

    // Delete from end
    @DeleteMapping("/delete/end")
    public String deleteEnd() {
        service.deleteFromEnd();
        return "Last node deleted";
    }
    
 // Delete by value
    @DeleteMapping("/delete/{value}")
    public String deleteValue(@PathVariable int value) {
        service.deleteByValue(value);
        return "Node deleted";
    }

    // Search
    @GetMapping("/search/{value}")
    public boolean search(@PathVariable int value) {
        return service.search(value);
    }

    // Display
    @GetMapping("/display")
    public String display() {
        return service.display();
    }
}
