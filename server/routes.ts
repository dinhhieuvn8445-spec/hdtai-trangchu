import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertRegistrationSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Registration endpoint
  app.post("/api/registrations", async (req, res) => {
    try {
      const validatedData = insertRegistrationSchema.parse(req.body);
      const registration = await storage.createRegistration(validatedData);
      
      // Here you would integrate with Google Sheets API
      // For now, we'll just store in memory and log
      console.log("New registration:", registration);
      
      res.json({ 
        success: true, 
        message: "Đăng ký thành công! Chúng tôi sẽ liên hệ với bạn trong 24h.",
        registration 
      });
    } catch (error) {
      console.error("Registration error:", error);
      res.status(400).json({ 
        success: false, 
        message: "Có lỗi xảy ra khi đăng ký. Vui lòng thử lại." 
      });
    }
  });

  // Get all registrations (admin endpoint)
  app.get("/api/registrations", async (req, res) => {
    try {
      const registrations = await storage.getRegistrations();
      res.json(registrations);
    } catch (error) {
      console.error("Get registrations error:", error);
      res.status(500).json({ message: "Lỗi server" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
