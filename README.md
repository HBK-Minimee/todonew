
# Todo App with Authentication

A simple and intuitive Todo List application built with React. Users can manage their tasks by adding, deleting, and prioritizing them. Authentication is implemented using **Auth0**, and the user interface is enhanced with **Material UI**, **React Icons**, and **Styled Components**.

### Features

* **Add Tasks:** Users can add tasks to the todo list with a specified priority (Urgent, Important, Should do).
* **Delete Tasks:** Individual tasks can be deleted with a single click.
* **Remove All Tasks:** Users can remove all tasks at once, providing a clean slate.
* **Priority Sorting:** Tasks are automatically sorted based on their priority (Urgent > Important > Should do).

### Authentication

The project implements authentication using **Auth0**. Users can securely log in, allowing for personalized task management.

### Technologies Used

* **React:** Frontend library for building user interfaces.
* **Auth0:** Authentication and authorization platform.
* **Material UI:** React component library for a consistent and responsive UI design.
* **React Icons:** Library for popular icons as React components.
* **Styled Components:** CSS-in-JS library for styling React components with scoped styles.

### Installation and Setup

1. **Clone the repository:**
    ```
    git clone https://github.com/HBK-Minimee/todonew.git
    ```

2. **Navigate to the project directory:**
    ```
    cd todo-list-with-authentication
    ```

3. **Install dependencies:**
    ```
    npm install
    ```

4. **Create a .env file in the project root and add your Auth0 credentials:**
    ```
    REACT_APP_DOMAIN=<your-auth0-domain>
    REACT_APP_CLIENT_ID=<your-auth0-client-id>
    ```

5. **Start the development server:**
    ```
    npm start
    ```

6. **Open your browser and access the application at `http://localhost:3000.`**
### Usage

* **Login:** Click on the login button to authenticate using Auth0.
* **Add Task:** Enter a task description and select its priority, then click the "Add Task" button.
* **Delete Task:** Click on the delete icon next to a task to remove it individually.
* **Remove All Tasks:** Click the "Remove All Tasks" button to clear the entire list.
* **Logout:** Click on the logout button to securely log out of the application.

### Contributing

Contributions are welcome! Fork the repository and submit a pull request to contribute.