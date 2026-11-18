"use client";

import React from 'react';
export default function MyFooter(){

  const today = new Date();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* ส่วนเนื้อหาหลัก 4 คอลัมน์ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* คอลัมน์ที่ 1: โลโก้และคำอธิบายแบรนด์ */}
          <div className="space-y-4">
            <a href="#" className="text-2xl font-bold text-blue-500">
              Brand<span className="text-white">Logo</span>
            </a>
            <p className="text-sm text-gray-400 leading-relaxed">
              สร้างสรรค์โซลูชันดิจิทัลที่ทันสมัย ใช้งานง่าย และตอบโจทย์ทุกธุรกิจของคุณด้วยเทคโนโลยีล่าสุด
            </p>
            {/* Social Media Icons */}
            <div className="flex space-x-4 pt-2">
              <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-white transition duration-200">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-white transition duration-200">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
              <a href="#" aria-label="GitHub" className="text-gray-400 hover:text-white transition duration-200">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* คอลัมน์ที่ 2: เมนูลัด */}
          <div>
            <h3 className="text-white font-semibold uppercase tracking-wider text-sm mb-4">
              เมนูหลัก
            </h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:text-blue-400 transition duration-200">หน้าแรก</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition duration-200">บริการของเรา</a></li>
              <li><a href="#about" className="hover:text-blue-400 transition duration-200">เกี่ยวกับเรา</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition duration-200">ติดต่อเรา</a></li>
            </ul>
          </div>

          {/* คอลัมน์ที่ 3: บริการและช่วยเหลือ */}
          <div>
            <h3 className="text-white font-semibold uppercase tracking-wider text-sm mb-4">
              ช่วยเหลือ
            </h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#faq" className="hover:text-blue-400 transition duration-200">คำถามที่พบบ่อย (FAQ)</a></li>
              <li><a href="#privacy" className="hover:text-blue-400 transition duration-200">นโยบายความเป็นส่วนตัว</a></li>
              <li><a href="#terms" className="hover:text-blue-400 transition duration-200">เงื่อนไขการใช้งาน</a></li>
              <li><a href="#support" className="hover:text-blue-400 transition duration-200">ศูนย์ช่วยเหลือ</a></li>
            </ul>
          </div>

          {/* คอลัมน์ที่ 4: รับข่าวสาร (Newsletter) */}
          <div>
            <h3 className="text-white font-semibold uppercase tracking-wider text-sm mb-4">
              รับข่าวสารอัปเดต
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              สมัครรับข่าวสารและโปรโมชันพิเศษส่งตรงถึงอีเมลของคุณ
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="กรอกอีเมลของคุณ"
                required
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition duration-200 whitespace-nowrap"
              >
                สมัคร
              </button>
            </form>
          </div>

        </div>

        {/* เส้นคั่นและส่วน Copyright ด้านล่างสุด */}
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; {today.getFullYear()} BrandLogo. สงวนลิขสิทธิ์ทั้งหมด.</p>
          <p className="mt-2 sm:mt-0">ออกแบบด้วย React &amp; Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};
