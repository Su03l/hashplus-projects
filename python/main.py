tasks = []

def add_task():
    task = input("Enter a task: ")
    tasks.append(task)
    print(f"Task added: {task}")

def remove_task():
    view_tasks()
    if not tasks:
        return
    try:
        task_num = int(input("Enter the task number to remove: "))
        if 1 <= task_num <= len(tasks):
            removed_task = tasks.pop(task_num - 1)
            print(f"Task removed: {removed_task}")
        else:
            print("Invalid task number.")
    except ValueError:
        print("Please enter a valid number.")

def view_tasks():
    if not tasks:
        print("No tasks to show.")
    else:
        print("Task List:")
        for i, task in enumerate(tasks, 1):
            print(f"{i}. {task}")

while True:
    print("\n--- Options Menu ---")
    print("1. Add a task")
    print("2. Remove a task")
    print("3. View tasks")
    print("4. Exit")

    choice = input("Choose an option (1-4): ")

    if choice == '1':
        add_task()
    elif choice == '2':
        remove_task()
    elif choice == '3':
        view_tasks()
    elif choice == '4':
        print("Thank you for using the task management system!")
        break
    else:
        print("Invalid option. Please try again.")