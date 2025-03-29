import Message from "../models/messageModel.js";

export const sendMessage = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    console.log("Request Body:", req.body);

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newMessage = new Message({ name, email, subject, message });

    console.log("New Message:", newMessage);

    await newMessage.save(); // Save to MongoDB

    console.log("Message saved successfully");

    return res.status(201).json({ message: "Message sent successfully" });
  } catch (error) {
    console.error("Error saving message:", error);
    return res.status(500).json({ error: "Failed to save message" });
  }
};
