# Test Multiple Choice Questions

## Cách test câu hỏi nhiều lựa chọn

### 1. Test với de7.json - Câu hỏi 3

1. Mở ứng dụng và chọn "Luyện tập" với đề số 7
2. Đi đến câu hỏi 3
3. Kiểm tra xem có hiển thị badge "Chọn nhiều đáp án" không
4. Chọn đáp án A - kiểm tra xem có hiển thị nút "Kiểm tra đáp án" không
5. Chọn thêm đáp án D - kiểm tra xem cả A và D đều được highlight
6. Ấn nút "Kiểm tra đáp án" - kiểm tra xem có hiển thị kết quả đúng không
7. Kiểm tra xem có thể chuyển sang câu tiếp theo không

### 2. Test với câu hỏi đơn lựa chọn

1. Đi đến câu hỏi 1 hoặc 2
2. Chọn một đáp án
3. Kiểm tra xem có tự động hiển thị kết quả ngay lập tức không
4. Kiểm tra xem không có nút "Kiểm tra đáp án" cho câu hỏi đơn lựa chọn

### 3. Test UI indicators

1. Kiểm tra xem câu hỏi nhiều lựa chọn có hiển thị màu vàng trong bản đồ câu hỏi khi đã chọn nhưng chưa check
2. Kiểm tra xem câu hỏi đơn lựa chọn có hiển thị màu xanh/đỏ ngay khi chọn
3. Kiểm tra xem tiến độ có được tính đúng cho cả hai loại câu hỏi

### 4. Test Exam mode

1. Chọn "Thi" với đề số 7
2. Đi đến câu hỏi 3
3. Kiểm tra xem có hiển thị badge "Chọn nhiều đáp án" không
4. Chọn nhiều đáp án và kiểm tra xem có được lưu đúng không
5. Nộp bài và kiểm tra kết quả

## Expected Behavior

- Câu hỏi nhiều lựa chọn: Chỉ check khi ấn nút "Kiểm tra đáp án"
- Câu hỏi đơn lựa chọn: Tự động check ngay khi chọn
- UI hiển thị rõ ràng loại câu hỏi
- Tiến độ tính đúng cho cả hai loại
- Kết quả được lưu và hiển thị đúng 