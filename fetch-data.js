// 1. Define the async function
async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users'; // 2. API URL
    const dataContainer = document.getElementById('api-data');    // 3. Get the container

    try {
        // 4. Fetch data
        const response = await fetch(apiUrl);
        const users = await response.json();

        // 5. Clear the loading message
        dataContainer.innerHTML = '';

        // 6. Create a list
        const userList = document.createElement('ul');

        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        // 7. Append list to container
        dataContainer.appendChild(userList);

    } catch (error) {
        // 8. Handle errors
        dataContainer.innerHTML = 'Failed to load user data.';
        console.error('Error fetching user data:', error);
    }
}

// 9. Run function on page load
document.addEventListener('DOMContentLoaded', fetchUserData);
