import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertRegistrationSchema } from "@shared/schema";
import { googleSheetsService } from "./google-sheets";

export async function registerRoutes(app: Express): Promise<Server> {
  // Registration endpoint
  app.post("/api/registrations", async (req, res) => {
    try {
      const validatedData = insertRegistrationSchema.parse(req.body);
      const registration = await storage.createRegistration(validatedData);
      
      console.log("New registration:", registration);
      
      // Try to add to Google Sheets
      try {
        const sheetsSuccess = await googleSheetsService.addRegistration(registration);
        if (sheetsSuccess) {
          console.log("✅ Successfully added to Google Sheets");
        } else {
          console.log("⚠️ Google Sheets not configured, data stored locally only");
        }
      } catch (sheetsError) {
        console.error("❌ Google Sheets error:", sheetsError);
        // Continue even if Sheets fails - data is still stored locally
      }
      
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
