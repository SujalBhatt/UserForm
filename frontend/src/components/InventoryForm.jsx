import { useState } from "react";

export default function InventoryForm() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    quantity: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
        name: formData.name,
        description: formData.description,
        price: formData.price,
        quantity: formData.quantity
    };

    console.log("Form data:", formData);
    try {
        const response = await fetch("http://localhost:8000/inventory", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            alert("Product added successfully!");
            // Reset form
            setFormData({
                name: '',
                description: '',
                price: '',
                quantity: ""
            });
        } else {
            const errorData = await response.json();
            console.error("Error response:", errorData);
            alert(errorData.message);
        }
    } catch (error) {
        console.error("Error:", error.message);
        alert(error.message);
    }
};

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "0 auto", padding: "20px", border: "1px solid #ccc", borderRadius: "8px", backgroundColor: "#f9f9f9" }}>
      <div style={{ marginBottom: "10px" }}>
        <label>Name:</label>
        <input 
          type="text" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
          style={{ width: "100%", padding: "8px", border: "1px solid #ccc", borderRadius: "4px" }}
          required 
        />
      </div>
      
      <div style={{ marginBottom: "10px" }}>
        <label>Description:</label>
        <textarea 
          name="description" 
          value={formData.description} 
          onChange={handleChange} 
          style={{ width: "100%", padding: "8px", border: "1px solid #ccc", borderRadius: "4px" }}
          required 
        />
      </div>
      
      <div style={{ marginBottom: "10px" }}>
        <label>Price:</label>
        <input 
          type="number" 
          name="price" 
          value={formData.price} 
          onChange={handleChange} 
          style={{ width: "100%", padding: "8px", border: "1px solid #ccc", borderRadius: "4px" }}
          required 
        />
      </div>
      
      <div style={{ marginBottom: "10px" }}>
        <label>Quantity:</label>
        <input 
          type="number" 
          name="quantity" 
          value={formData.quantity} 
          onChange={handleChange} 
          style={{ width: "100%", padding: "8px", border: "1px solid #ccc", borderRadius: "4px" }}
          required 
        />
      </div>
      
      <button type="submit" style={{ width: "100%", padding: "10px", backgroundColor: "blue", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}>
        Submit
      </button>
    </form>
  );
}
