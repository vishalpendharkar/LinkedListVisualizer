package com.visualizer.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.visualizer.service.DoublyLinkedListService;

@RestController
@RequestMapping("/api/doubly")
@CrossOrigin(origins = "*")
public class DoublyLinkedListController {

	private final DoublyLinkedListService service;

	public DoublyLinkedListController(DoublyLinkedListService service) {
		this.service = service;
	}

	@PostMapping("/insert/beginning")
	public String insertAtBeginning(@RequestParam int data) {
		service.insertAtBeginning(data);
		return "Node inserted at beginning";
	}

	@PostMapping("/insert/end")
	public String insertAtEnd(@RequestParam int data) {
		service.insertAtEnd(data);
		return "Node insert at end";
	}

	@PostMapping("/insert/position")
	public String insertAtPosition(@RequestParam int data, @RequestParam int position) {
		service.insertAtPosition(data, position);
		return "Node insert at postion";
	}

	@DeleteMapping("/delete/beginning")
	public String deleteFromBeginning() {
		service.deleteFromBeginning();
		return "First node deleted";
	}

	@DeleteMapping("/delete/end")
	public String deleteFromEnd() {
		service.deleteFromEnd();
		return "Last node deleted";
	}

	@DeleteMapping("/delete/position")
	public String deleteAtPosition(@RequestParam int position) {
		service.deleteAtPosition(position);
		return "Node deleted from position " + position;
	}

	@GetMapping("/search/{data}")
	public String search(@PathVariable int data) {
		int position = service.search(data);
		if (position == -1) {
			return "Element not found";
		}
		return "Element found at position " + position;
	}

	@GetMapping("/display/forward")
	public List<Integer> displayForward() {
		return service.displayForward();
	}

	@GetMapping("/display/backward")
	public List<Integer> displayBackward() {
		return service.displayBackward();
	}

	@PostMapping("/reverse")
	public String reverse() {
		service.reverse();
		return "Doubly Linked List reversed successfully";
	}
}
