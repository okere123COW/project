// Change this to your Python backend address
const API_BASE_URL = "http://192.168.100.205:8000";

async function registerBusiness(data) {
    try {
        const response = await fetch(`${API_BASE_URL}/api/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        return {
            success: response.ok,
            data: result
        };
    } catch (error) {
        return {
            success: false,
            data: {
                message: "Unable to connect to the server."
            }
        };
    }
}