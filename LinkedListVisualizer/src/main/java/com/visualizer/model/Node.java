package com.visualizer.model;

public class Node {

	private int data;
	private Node next;
	
	//constructor 
	public Node(int data){
		this.data = data;
		this.next = null;
	}
	
	//Getter
	public int getData() {
		return data;
	}
	
	//setter
	public void setData(int data) {
		this.data = data;
	}
	
	//Getter for next node 
	public Node getNext() {
		return next;
	}
	
	//setter 
	public void setNext(Node next) {
		this.next = next;
	}
	
}
