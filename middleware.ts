import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res }); //lấy session người dùng từ Supabase

  await supabase.auth.getSession();
  return res;
}
// Cách hoạt động
// Khi người dùng gửi request, middleware sẽ chạy trước.
// Middleware tạo Supabase client và lấy session của người dùng.
// Có thể thêm logic kiểm tra nếu người dùng chưa đăng nhập, chuyển hướng họ.
// Middleware trả về res, cho phép request tiếp tục đến Next.js.
