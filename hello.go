package main

import (
	"bufio"
	"fmt"
	"os"
)

var tasks []string

func main() {
	scanner := bufio.NewScanner(os.Stdin)
	for {
		fmt.Println("To-Do List App")
		fmt.Println("1. Add Task")
		fmt.Println("2. View Tasks")
		fmt.Println("3. Remove Task")
		fmt.Println("4. Exit")
		fmt.Print("Choose an option: ")

		scanner.Scan()
		option := scanner.Text()

		switch option {
		case "1":
			addTask(scanner)
		case "2":
			viewTasks()
		case "3":
			removeTask(scanner)
		case "4":
			fmt.Println("Exiting...")
			return
		default:
			fmt.Println("Invalid option. Please try again.")
		}
	}
}

func addTask(scanner *bufio.Scanner) {
	fmt.Print("Enter a task: ")
	scanner.Scan()
	task := scanner.Text()
	tasks = append(tasks, task)
	fmt.Println("Task added.")
}

func viewTasks() {
	if len(tasks) == 0 {
		fmt.Println("No tasks available.")
		return
	}
	fmt.Println("Tasks:")
	for i, task := range tasks {
		fmt.Printf("%d: %s\n", i+1, task)
	}
}

func removeTask(scanner *bufio.Scanner) {
	viewTasks()
	if len(tasks) == 0 {
		return
	}
	fmt.Print("Enter the task number to remove: ")
	scanner.Scan()
	var index int
	fmt.Sscanf(scanner.Text(), "%d", &index)
	if index < 1 || index > len(tasks) {
		fmt.Println("Invalid task number.")
		return
	}
	tasks = append(tasks[:index-1], tasks[index:]...)
	fmt.Println("Task removed.")
}