import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form API endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, phone, message } = req.body;

      // Validate required fields
      if (!name || !email || !message) {
        return res.status(400).json({ message: "Missing required fields" });
      }

      // Here you would typically store the contact message or send an email
      // For this demo, we'll just return a success response
      
      return res.status(200).json({ 
        success: true,
        message: "Contact form submitted successfully" 
      });
    } catch (error) {
      console.error("Error processing contact form:", error);
      return res.status(500).json({ 
        success: false,
        message: "An error occurred while processing your request" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
