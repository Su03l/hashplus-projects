
import java.util.Scanner;

class Student {
    String name;
    int id;
    double[] grades;

    public Student(String name, int id, int numGrades) {
        this.name = name;
        this.id = id;
        this.grades = new double[numGrades];
    }

    public double calculateAverage() {
        double sum = 0;
        for (double grade : grades) {
            sum += grade;
        }
        return sum / grades.length;
    }

    public void displayStudentInfo() {
        System.out.println("Student ID: " + id);
        System.out.println("Student Name: " + name);
        System.out.print("Grades: ");
        for (int i = 0; i < grades.length; i++) {
            System.out.print(grades[i] + " ");
        }
        System.out.println();
        System.out.println("Average Grade: " + calculateAverage());
    }
}
// -----------------------------------------------------------------

public class StudentManagementSystem {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter the number of students to manage: ");
        int numStudents = scanner.nextInt();
        scanner.nextLine();

        Student[] students = new Student[numStudents];
        int studentCount = 0;

        while (true) {
            System.out.println("\nStudent Management System Menu:");
            System.out.println("1. Add a new student");
            System.out.println("2. Display all students");
            System.out.println("3. Find a student by ID");
            System.out.println("4. Exit");
            System.out.print("Enter your choice: ");
            int choice = scanner.nextInt();
            scanner.nextLine();

            if (choice == 1) {
                if (studentCount < numStudents) {
                    System.out.print("Enter student name: ");
                    String name = scanner.nextLine();
                    System.out.print("Enter student ID: ");
                    int id = scanner.nextInt();
                    System.out.print("Enter number of grades: ");
                    int numGrades = scanner.nextInt();
                    scanner.nextLine();

                    Student newStudent = new Student(name, id, numGrades);
                    for (int i = 0; i < numGrades; i++) {
                        System.out.print("Enter grade " + (i + 1) + ": ");
                        newStudent.grades[i] = scanner.nextDouble();
                    }
                    students[studentCount] = newStudent;
                    studentCount++;
                    System.out.println("Student added successfully.");
                } else {
                    System.out.println("Cannot add more students. The system is full.");
                }
            } else if (choice == 2) {
                if (studentCount == 0) {
                    System.out.println("No students to display.");
                } else {
                    System.out.println("\n--- All Students ---");
                    for (int i = 0; i < studentCount; i++) {
                        students[i].displayStudentInfo();
                        System.out.println("--------------------");
                    }
                }
            } else if (choice == 3) {
                System.out.print("Enter student ID to find: ");
                int searchId = scanner.nextInt();
                boolean found = false;
                for (int i = 0; i < studentCount; i++) {
                    if (students[i].id == searchId) {
                        System.out.println("\n--- Student Found ---");
                        students[i].displayStudentInfo();
                        found = true;
                        break;
                    }
                }
                if (!found) {
                    System.out.println("Student with ID " + searchId + " not found.");
                }
            } else if (choice == 4) {
                System.out.println("Exiting the program.");
                break;
            } else {
                System.out.println("Invalid choice. Please try again.");
            }
        }
        scanner.close();
    }
}
