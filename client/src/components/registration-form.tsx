import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertRegistrationSchema } from "@shared/schema";
import type { InsertRegistration } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function RegistrationForm() {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<InsertRegistration>({
    resolver: zodResolver(insertRegistrationSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      package: "",
      notes: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: InsertRegistration) => {
      const response = await apiRequest("POST", "/api/registrations", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Đăng ký thành công!",
        description: "Chúng tôi sẽ liên hệ với bạn trong 24h.",
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/registrations"] });
    },
    onError: () => {
      toast({
        title: "Có lỗi xảy ra",
        description: "Vui lòng thử lại sau.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertRegistration) => {
    mutation.mutate(data);
  };

  return (
    <section id="dang-ky" className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Đăng ký nhận ưu đãi
              </h2>
              <p className="text-slate-600">
                Điền thông tin để nhận tư vấn và ưu đãi đặc biệt
              </p>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Họ và tên *</FormLabel>
                        <FormControl>
                          <Input placeholder="Nhập họ và tên của bạn" {...field} value={field.value || ''} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Số điện thoại *</FormLabel>
                        <FormControl>
                          <Input placeholder="Nhập số điện thoại" {...field} value={field.value || ''} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email *</FormLabel>
                      <FormControl>
                        <Input placeholder="Nhập địa chỉ email" type="email" {...field} value={field.value || ''} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="package"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Chọn gói học *</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value || ''}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="-- Chọn gói học --" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="ai-master">PHẦN I – AI MASTER - 3.000K VNĐ</SelectItem>
                          <SelectItem value="ai-automation">PHẦN II – AI AUTOMATION - 3.000K VNĐ</SelectItem>
                          <SelectItem value="ai-real-work">PHẦN III – AI IN REAL WORK - 4.000K VNĐ</SelectItem>
                          <SelectItem value="full-combo">Full combo + 365 ngày support - 9.000K VNĐ</SelectItem>
                          <SelectItem value="khoa-hoc-online">Khóa học Online - 9 triệu VNĐ</SelectItem>
                          <SelectItem value="dao-tao-online">Đào tạo Online theo giáo trình - 15 triệu VNĐ</SelectItem>
                          <SelectItem value="dao-tao-tai-cong-ty">Đào tạo trực tiếp tại công ty - 16 triệu VNĐ</SelectItem>
                          <SelectItem value="dao-tao-tai-nha">Đào tạo tại nhà học sinh - 20 triệu VNĐ</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="notes"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Ghi chú</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Có câu hỏi gì không? (không bắt buộc)" 
                          rows={3}
                          {...field} value={field.value || ''} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  disabled={mutation.isPending}
                  className="w-full bg-primary-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-primary-700 transition-colors"
                >
                  {mutation.isPending ? (
                    "Đang xử lý..."
                  ) : (
                    <>
                      <i className="fas fa-paper-plane mr-2"></i>
                      Đăng ký gói học
                    </>
                  )}
                </Button>

                <p className="text-sm text-slate-600 text-center">
                  Bằng việc đăng ký, bạn đồng ý với 
                  <a href="#" className="text-primary-600 hover:underline"> điều khoản sử dụng</a> và 
                  <a href="#" className="text-primary-600 hover:underline"> chính sách bảo mật</a> của chúng tôi.
                </p>
              </form>
            </Form>
          </div>

          {/* Payment Info */}
          <div className="mt-8 bg-blue-50 rounded-xl p-6">
            <h3 className="font-bold text-slate-900 mb-4">💳 Thông tin chuyển khoản</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p><strong>Ngân hàng:</strong> Techcombank</p>
                <p><strong>Chủ tài khoản:</strong> Hoang Anh Tu</p>
                <p><strong>Số tài khoản:</strong> 88043333333</p>
              </div>
              <div className="text-slate-600">
                <p><strong>Lưu ý quan trọng:</strong></p>
                <ul className="list-disc list-inside space-y-1 text-xs">
                  <li>Chỉ chuyển khoản sau khi đã đăng ký gói</li>
                  <li>Ghi rõ HỌ TÊN + SỐ ĐIỆN THOẠI khi chuyển khoản</li>
                  <li>Giữ lại biên lai để đối chiếu</li>
                  <li>Nhân viên sẽ liên hệ trong 24h sau thanh toán</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
