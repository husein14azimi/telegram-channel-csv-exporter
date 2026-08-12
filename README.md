# Telegram Channel CSV Exporter & Web UI

ابزار ساده و کاربردی برای استخراج پست‌های کانال‌های عمومی تلگرام در یک بازهٔ تاریخی مشخص و ذخیرهٔ خروجی به‌صورت فایل CSV یا استفاده از رابط وب مدرن، بدون نیاز به Telegram API.

---

## قابلیت‌ها

- استخراج پست‌های کانال عمومی تلگرام بدون API رسمی تلگرام
- **رابط وب مدرن و ایستا (Next.js)** با امکان اجرا بدون نیاز به Python یا نصب وابستگی‌های آن
- خروجی CSV با پشتیبانی مناسب از متن فارسی در Excel (انکودینگ UTF-8 با BOM)
- پشتیبانی از تاریخ شمسی و میلادی
- پشتیبانی از اعداد فارسی، عربی و انگلیسی در ورودی تاریخ
- سه‌حالت استفاده:
  - **رابط وب (Next.js)**: مناسب برای مرورگرها و میزبان‌های رایگان مانند GitHub Pages
  - **رابط گرافیکی (Tkinter)** و خط فرمان (CLI)
- فال‌بک خودکار به پیش‌نمایش وب تلگرام `t.me/s/` و پشتیبانی از پروکسی CORS در نسخهٔ وب

---

## ساختار پروژه

```text
.
├── tg_channel_export.py   # نسخه CLI و منطق اصلی استخراج
├── tg_export_gui.py       # رابط گرافیکی Tkinter
├── requirements.txt       # وابستگی‌های پایتون
├── web/                   # رابط وب مدرن (Next.js + TypeScript + Tailwind)
│   ├── package.json
│   ├── next.config.ts
│   ├── src/
│   └── public/
└── README.md              # توضیحات پروژه
```

---

## 🚀 روش اول: استفاده از رابط وب (Web UI)

برای استفاده از نسخهٔ وب نیازی به نصب پایتون ندارید. کافی است Node.js را نصب داشته باشید:

```bash
cd web
npm install
npm run dev
```

سپس مرورگر را باز کرده و به آدرس `http://localhost:3000` بروید.

### ساخت خروجی استاتیک (Static Export) برای هاستینگ رایگان
می‌توانید نسخهٔ وب را به‌صورت فایل‌های ایستا (Static HTML/JS) خروجی بگیرید و روی GitHub Pages یا سایر هاست‌های رایگان مستقر کنید:

```bash
cd web
npm run build
```
فایل‌های خروجی در پوشهٔ `web/out` قرار می‌گیرند.

---

## 🐍 روش دوم: استفاده از ابزار پایتون (CLI / GUI)

### ۱. نصب وابستگی‌ها

```bash
python -m venv .venv
source .venv/bin/activate  # در ویندوز: .venv\Scripts\activate
pip install -r requirements.txt
```

### ۲. اجرا با رابط گرافیکی
```bash
python tg_export_gui.py
```

### ۳. اجرا از طریق خط فرمان (CLI)
```bash
python tg_channel_export.py irancurrency --from 1405-03-11 --to 1405-04-09
```

---

## License

MIT License