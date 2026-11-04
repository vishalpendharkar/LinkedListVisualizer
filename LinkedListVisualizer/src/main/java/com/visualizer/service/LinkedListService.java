package com.visualizer.service;

import org.springframework.stereotype.Service;

import com.visualizer.model.Node;


@Service
public class LinkedListService {

	private Node head = null;

	// Insert node at beginning

	public void insertAtBeginning(int data) {

		Node newNode = new Node(data);

		newNode.setNext(head);

		head = newNode;
	}

	public String display() {

		StringBuilder result = new StringBuilder();

		Node temp = head;

		while (temp != null) {
			result.append(temp.getData()).append("->");
			temp = temp.getNext();
		}

		result.append("NULL");

		return result.toString();
	}

	// insert for end
	public void insertAtEnd(int data) {
		Node newNode = new Node(data);

		if (head == null) {
			head = newNode;
			return;
		}

		Node temp = head;

		while (temp.getNext() != null) {
			temp = temp.getNext();
		}
		temp.setNext(newNode);
	}

	public void deleteFromBeginning() {

		if (head == null) {
			throw new RuntimeException("Linked List is empty");
		}

		head = head.getNext();
	}

	public void deleteFromEnd() {

		if (head == null) {
			throw new RuntimeException("Linked List is empty");
		}

		// Only one node
		if (head.getNext() == null) {
			head = null;
			return;
		}

		Node temp = head;

		// Find second-last node
		while (temp.getNext().getNext() != null) {
			temp = temp.getNext();
		}

		// Remove last node
		temp.setNext(null);
	}

	public void deleteByValue(int value) {

		if (head == null) {
			throw new RuntimeException("Linked List is empty");
		}

		// If first node contains the value
		if (head.getData() == value) {
			head = head.getNext();
			return;
		}

		Node temp = head;

		// Find the node before the target
		while (temp.getNext() != null && temp.getNext().getData() != value) {

			temp = temp.getNext();
		}

		// Value not found
		if (temp.getNext() == null) {
			throw new RuntimeException("Value not found");
		}

		// Remove target node
		temp.setNext(temp.getNext().getNext());
	}

	public boolean search(int value) {

		Node temp = head;

		while (temp != null) {

			if (temp.getData() == value) {
				return true;
			}

			temp = temp.getNext();
		}

		return false;
	}

	public void insertAtPosition(int data, int position) {

		if (position < 1) {
			throw new IllegalArgumentException("Invalid position");
		}

		Node newNode = new Node(data);

		// Insert at beginning
		if (position == 1) {
			newNode.setNext(head);
			head = newNode;
			return;
		}

		Node temp = head;

		// Move to the previous position
		for (int i = 1; i < position - 1; i++) {

			if (temp == null) {
				throw new IndexOutOfBoundsException("Invalid position");
			}

			temp = temp.getNext();
		}

		if (temp == null) {
			throw new IndexOutOfBoundsException("Invalid position");
		}

		newNode.setNext(temp.getNext());
		temp.setNext(newNode);
	}

}
