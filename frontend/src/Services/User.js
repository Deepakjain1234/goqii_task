export async function fatchAll(){
    try {
        const response = await fetch('https://goqii-task.onrender.com/api/user/getall');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        return jsonData
      } catch (error) {
          console.log(error)
        // setError(error);
      } finally {
        // setLoading(false);
      }

}


export async function addUser(data){
    try {
        const response = await fetch('https://goqii-task.onrender.com/api/user/createUser', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json', 
          },
          body: JSON.stringify(data), 
        });
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
    
        const responseData = await response.json(); 
        console.log('Response:', responseData);
      } catch (error) {
        console.error('Error:', error);
        // Handle errors
      }
}

export async function deleteUser(body){
    try {
        const response = await fetch('https://goqii-task.onrender.com/api/user/deleteUser', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json', // Specify content type as JSON
            // You can add more headers if required
          },
          body: JSON.stringify(body), // Convert data to JSON string
        });
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
    
        const responseData = await response.json(); // Parse response JSON
        console.log('Response:', responseData);
        // Do something with the response data
      } catch (error) {
        console.error('Error:', error);
        // Handle errors
      }

}

export async function editUser(body){
    try {
        const response = await fetch('https://goqii-task.onrender.com/api/user/editUser', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json', // Specify content type as JSON
            // You can add more headers if required
          },
          body: JSON.stringify(body), // Convert data to JSON string
        });
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
    
        const responseData = await response.json(); // Parse response JSON
        console.log('Response:', responseData);
        // Do something with the response data
      } catch (error) {
        console.error('Error:', error);
        // Handle errors
      }

}