
"use client";

import React, { useState } from 'react';
export default function Mymenu(){
  
  // State สำหรับควบคุมการเปิด-ปิดเมนูบนมือถือ
  const [isOpen, setIsOpen] = useState(false);

  // รายการเมนู (สามารถเพิ่มหรือแก้ไขได้ตามต้องการ)
  const navLinks = [
    { name: 'หน้าแรก', href: '#home' },
    { name: 'บริการของเรา', href: '#services' },
    { name: 'เกี่ยวกับเรา', href: '#about' },
    { name: 'ติดต่อเรา', href: '#contact' },
  ];

  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="text-2xl font-bold text-blue-600">
              Brand<span className="text-gray-800">Logo</span>
            </a>
          </div>

          {/* Desktop Menu (ซ่อนบนมือถือ แสดงบนจอขนาด md ขึ้นไป) */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-blue-600 font-medium transition duration-200"
              >
                {link.name}
              </a>
            ))}
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition duration-200">
              เข้าสู่ระบบ
            </button>
          </div>

          {/* Mobile Hamburger Button (แสดงเฉพาะบนมือถือ) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-gray-600 hover:text-blue-600 focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              {/* สลับไอคอนระหว่าง Hamburger กับ กากบาท (X) */}
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Dropdown Menu (จะแสดงเมื่อ isOpen เป็น true) */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pt-2 pb-4 space-y-2 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)} // ปิดเมนูอัตโนมัติเมื่อกดลิงก์
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition duration-200"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition duration-200">
              เข้าสู่ระบบ
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};



