package com.visualizer.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.visualizer.model.DoublyNode;

@Service
public class DoublyLinkedListService {

	private DoublyNode head = null;
	private DoublyNode tail = null;

	// insert at beginning
	public void insertAtBeginning(int data) {
		DoublyNode newNode = new DoublyNode(data);
		if (head == null) {
			head = tail = newNode;
		} else {
			newNode.next = head;
			head.prev = newNode;
			head = newNode;
		}
	}

	// insert at end
	public void insertAtEnd(int data) {
		DoublyNode newNode = new DoublyNode(data);
		if (head == null) {
			head = tail = newNode;
		} else {
			tail.next = newNode;
			newNode.prev = tail;
			tail = newNode;
		}
	}

	// insert at position
	public void insertAtPosition(int data, int position) {
		if (position < 1) {
			throw new IllegalArgumentException("Invalid position");
		}
		if (position == 1) {
			insertAtBeginning(data);
			return;
		}
		DoublyNode temp = head;
		for (int i = 1; i < position - 1 && temp != null; i++) {
			temp = temp.next;
		}
		if (temp == null) {
			throw new IllegalArgumentException("Invalid position");
		}
		if (temp == tail) {
			insertAtEnd(data);
			return;
		}
		DoublyNode newNode = new DoublyNode(data);
		newNode.next = temp.next;
		newNode.prev = temp;
		temp.next.prev = newNode;
		temp.next = newNode;
	}

	// delete beginningfrom
	public void deleteFromBeginning() {
		if (head == null) {
			throw new IllegalStateException("List is empty");
		}
		if (head == tail) {
			head = tail = null;
		} else {
			head = head.next;
			head.prev = null;
		}
	}

	public void deleteFromEnd() {
		if (head == null) {
			throw new IllegalStateException("List is empty");
		}
		if (head == tail) {
			head = tail = null;
		} else {
			tail = tail.prev;
			tail.next = null;
		}
	}

	public void deleteAtPosition(int position) {
		if (position < 1 || head == null) {
			throw new IllegalArgumentException("Invalid position or empty list");
		}
		if (position == 1) {
			deleteFromBeginning();
			return;
		}
		DoublyNode temp = head;
		for (int i = 1; i < position && temp != null; i++) {
			temp = temp.next;
		}
		if (temp == null) {
			throw new IllegalArgumentException("Invalid position");
		}
		if (temp == tail) {
			deleteFromEnd();
			return;
		}
		temp.prev.next = temp.next;
		temp.next.prev = temp.prev;
	}

	public int search(int data) {
		DoublyNode temp = head;
		int position = 1;
		while (temp != null) {
			if (temp.data == data) {
				return position;
			}
			temp = temp.next;
			position++;
		}
		return -1;
	}

	public List<Integer> displayForward() {
		List<Integer> list = new ArrayList<>();
		DoublyNode temp = head;
		while (temp != null) {
			list.add(temp.data);
			temp = temp.next;
		}
		return list;
	}

	public List<Integer> displayBackward() {
		List<Integer> list = new ArrayList<>();
		DoublyNode temp = tail;
		while (temp != null) {
			list.add(temp.data);
			temp = temp.prev;
		}
		return list;
	}

	public void reverse() {
		DoublyNode current = head;
		DoublyNode temp = null;
		while (current != null) {
			temp = current.prev;
			current.prev = current.next;
			current.next = temp;
			current = current.prev;
		}
		if (temp != null) {
			tail = head;
			head = temp.prev;
		}
	}

}
