# Theory-Practice-Exam-Test

A comprehensive web-based platform for practicing theoretical subjects in Information Technology (IT), featuring interactive quizzes, detailed explanations, and progress tracking.

## English Version

### Overview

Theory-Practice-Exam-Test is a modern web application built with Next.js 15, React 19, and TypeScript, designed to help students practice and prepare for IT theory exams. The platform provides an interactive learning experience with immediate feedback, detailed explanations, and progress tracking.

### Features

#### 🎯 Core Functionality
- **Interactive Practice Sessions**: Engage with questions in real-time with immediate feedback
- **Multiple Exam Sets**: Access various exam collections with different difficulty levels
- **Detailed Explanations**: Each question includes comprehensive explanations and hints
- **Progress Tracking**: Monitor your performance and completion status
- **Timer Support**: Practice with time constraints to simulate real exam conditions
- **Keyboard Shortcuts**: Navigate efficiently using keyboard controls

#### 🎨 User Interface
- **Modern Design**: Clean, responsive interface built with Tailwind CSS
- **Dark/Light Theme**: Toggle between themes for comfortable studying
- **Smooth Animations**: Engaging user experience with Framer Motion
- **Mobile Responsive**: Optimized for all device sizes
- **Accessibility**: Built with accessibility best practices

#### 📊 Advanced Features
- **Math Rendering**: Support for mathematical expressions using MathJax
- **Confetti Effects**: Visual feedback for correct answers
- **Study Tips**: Random motivational tips during practice sessions
- **Export Results**: Download your practice results for offline review
- **Session Persistence**: Resume practice sessions with saved progress

### Technology Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui components
- **Animations**: Framer Motion
- **Math Rendering**: MathJax 3
- **State Management**: React hooks and localStorage
- **Build Tool**: Vite (via Next.js)

### Project Structure

```
Theory-Practice-Exam-Test/
├── app/                          # Next.js app directory
│   ├── exam/[id]/               # Exam mode pages
│   ├── practice/[id]/           # Practice mode pages
│   ├── results/[id]/            # Results display pages
│   ├── select-exam/             # Exam selection page
│   └── globals.css              # Global styles
├── components/                   # Reusable components
│   ├── ui/                      # shadcn/ui components
│   ├── MathRenderer.tsx         # Math expression renderer
│   ├── SimpleMath.tsx           # Simple math component
│   └── theme-toggle.tsx         # Theme switcher
├── public/                      # Static assets
│   ├── data/                    # Exam data (JSON files)
│   └── images/                  # Question images
└── lib/                         # Utility functions
```

### Getting Started

#### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

#### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/Theory-Practice-Exam-Test.git
cd Theory-Practice-Exam-Test
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Usage

1. **Start Practice**: Enter your name (optional) and begin your learning journey
2. **Select Exam**: Choose from available exam sets based on your needs
3. **Practice Mode**: Work through questions with hints and explanations
4. **Exam Mode**: Simulate real exam conditions with timers
5. **Review Results**: Analyze your performance and review answers
6. **Export Data**: Download your results for offline review

### Data Format

Exam data is stored in JSON format in the `public/data/` directory:

```json
{
  "examId": "csi1",
  "title": "Đề 1 CSI",
  "description": "AI hints and explanations",
  "questions": [
    {
      "id": 1,
      "question": "Question text here",
      "image": null,
      "options": ["A. Option 1", "B. Option 2", "C. Option 3", "D. Option 4"],
      "correctAnswer": "C",
      "explanation": "Detailed explanation with HTML formatting",
      "difficulty": "easy",
      "topic": "Computer Architecture",
      "hints": ["Hint 1", "Hint 2", "Hint 3"]
    }
  ]
}
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## Vietnamese Version

### Tổng quan

Theory-Practice-Exam-Test là một ứng dụng web hiện đại được xây dựng bằng Next.js 15, React 19 và TypeScript, được thiết kế để giúp sinh viên luyện tập và chuẩn bị cho các kỳ thi lý thuyết CNTT. Nền tảng cung cấp trải nghiệm học tập tương tác với phản hồi tức thì, giải thích chi tiết và theo dõi tiến độ.

### Tính năng

#### 🎯 Chức năng cốt lõi
- **Phiên luyện tập tương tác**: Tương tác với câu hỏi theo thời gian thực với phản hồi tức thì
- **Nhiều bộ đề thi**: Truy cập các bộ sưu tập đề thi khác nhau với các mức độ khó khác nhau
- **Giải thích chi tiết**: Mỗi câu hỏi bao gồm giải thích toàn diện và gợi ý
- **Theo dõi tiến độ**: Giám sát hiệu suất và trạng thái hoàn thành của bạn
- **Hỗ trợ bộ đếm thời gian**: Luyện tập với ràng buộc thời gian để mô phỏng điều kiện thi thực tế
- **Phím tắt**: Điều hướng hiệu quả bằng các điều khiển bàn phím

#### 🎨 Giao diện người dùng
- **Thiết kế hiện đại**: Giao diện sạch sẽ, đáp ứng được xây dựng bằng Tailwind CSS
- **Chủ đề tối/sáng**: Chuyển đổi giữa các chủ đề để học tập thoải mái
- **Hoạt ảnh mượt mà**: Trải nghiệm người dùng hấp dẫn với Framer Motion
- **Đáp ứng di động**: Tối ưu hóa cho tất cả kích thước thiết bị
- **Khả năng tiếp cận**: Được xây dựng với các phương pháp hay nhất về khả năng tiếp cận

#### 📊 Tính năng nâng cao
- **Kết xuất toán học**: Hỗ trợ biểu thức toán học bằng MathJax
- **Hiệu ứng confetti**: Phản hồi trực quan cho câu trả lời đúng
- **Mẹo học tập**: Mẹo động viên ngẫu nhiên trong các phiên luyện tập
- **Xuất kết quả**: Tải xuống kết quả luyện tập để xem lại ngoại tuyến
- **Duy trì phiên**: Tiếp tục các phiên luyện tập với tiến độ đã lưu

### Stack công nghệ

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui components
- **Animations**: Framer Motion
- **Math Rendering**: MathJax 3
- **State Management**: React hooks và localStorage
- **Build Tool**: Vite (thông qua Next.js)

### Cấu trúc dự án

```
Theory-Practice-Exam-Test/
├── app/                          # Thư mục app Next.js
│   ├── exam/[id]/               # Trang chế độ thi
│   ├── practice/[id]/           # Trang chế độ luyện tập
│   ├── results/[id]/            # Trang hiển thị kết quả
│   ├── select-exam/             # Trang chọn đề thi
│   └── globals.css              # CSS toàn cục
├── components/                   # Các component có thể tái sử dụng
│   ├── ui/                      # shadcn/ui components
│   ├── MathRenderer.tsx         # Trình kết xuất biểu thức toán học
│   ├── SimpleMath.tsx           # Component toán học đơn giản
│   └── theme-toggle.tsx         # Công tắc chủ đề
├── public/                      # Tài sản tĩnh
│   ├── data/                    # Dữ liệu đề thi (file JSON)
│   └── images/                  # Hình ảnh câu hỏi
└── lib/                         # Các hàm tiện ích
```

### Bắt đầu

#### Yêu cầu hệ thống
- Node.js 18+
- npm, yarn, hoặc pnpm

#### Cài đặt

1. Clone repository:
```bash
git clone https://github.com/your-username/Theory-Practice-Exam-Test.git
cd Theory-Practice-Exam-Test
```

2. Cài đặt dependencies:
```bash
npm install
# hoặc
yarn install
# hoặc
pnpm install
```

3. Chạy development server:
```bash
npm run dev
# hoặc
yarn dev
# hoặc
pnpm dev
```

4. Mở [http://localhost:3000](http://localhost:3000) trong trình duyệt.

### Cách sử dụng

1. **Bắt đầu luyện tập**: Nhập tên của bạn (tùy chọn) và bắt đầu hành trình học tập
2. **Chọn đề thi**: Chọn từ các bộ đề thi có sẵn dựa trên nhu cầu của bạn
3. **Chế độ luyện tập**: Làm việc với các câu hỏi có gợi ý và giải thích
4. **Chế độ thi**: Mô phỏng điều kiện thi thực tế với bộ đếm thời gian
5. **Xem lại kết quả**: Phân tích hiệu suất và xem lại câu trả lời
6. **Xuất dữ liệu**: Tải xuống kết quả để xem lại ngoại tuyến

### Định dạng dữ liệu

Dữ liệu đề thi được lưu trữ ở định dạng JSON trong thư mục `public/data/`:

```json
{
  "examId": "csi1",
  "title": "Đề 1 CSI",
  "description": "AI hints and explanations",
  "questions": [
    {
      "id": 1,
      "question": "Nội dung câu hỏi ở đây",
      "image": null,
      "options": ["A. Lựa chọn 1", "B. Lựa chọn 2", "C. Lựa chọn 3", "D. Lựa chọn 4"],
      "correctAnswer": "C",
      "explanation": "Giải thích chi tiết với định dạng HTML",
      "difficulty": "easy",
      "topic": "Computer Architecture",
      "hints": ["Gợi ý 1", "Gợi ý 2", "Gợi ý 3"]
    }
  ]
}
```

### Scripts có sẵn

- `npm run dev` - Khởi động development server
- `npm run build` - Build cho production
- `npm run start` - Khởi động production server
- `npm run lint` - Chạy ESLint

### Đóng góp

1. Fork repository
2. Tạo feature branch (`git checkout -b feature/amazing-feature`)
3. Commit thay đổi (`git commit -m 'Add amazing feature'`)
4. Push lên branch (`git push origin feature/amazing-feature`)
5. Mở Pull Request

### Giấy phép

Dự án này được cấp phép theo MIT License - xem file LICENSE để biết chi tiết.