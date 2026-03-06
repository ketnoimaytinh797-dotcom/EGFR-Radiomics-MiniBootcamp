# Setup

## Mục tiêu của trang này

Trang này hướng dẫn cách mở notebook đúng trên Colab, đọc dữ liệu demo đúng cách và lưu sản phẩm sau bài học theo cùng một cấu trúc thư mục.

## Chuẩn bị trước khi học

Cần có:

- tài khoản Google để dùng Colab
- tài khoản GitHub để mở repo
- kết nối Internet ổn định
- thư mục Google Drive hoặc thư mục cục bộ để lưu output

## Cách mở notebook trên Colab

### Cách 1 — từ GitHub repository

- mở file notebook trong repo
- chọn nút Open in Colab nếu nút này đã hiện trên giao diện website

### Cách 2 — từ Google Colab

- mở Colab
- chọn tab `GitHub`
- dán link repo
- chọn đúng notebook của ngày học

## Cách chạy notebook

- chạy từ trên xuống dưới
- không bỏ qua markdown cell vì phần giải thích nằm ở đó
- với mini bootcamp này, runtime CPU là đủ
- nếu gặp lỗi vì mất biến, chọn `Runtime → Restart and run all`

## Cách đọc dữ liệu demo

Website được viết để dùng dữ liệu demo trước. Trình tự tìm dữ liệu trong notebook là:

1. tìm file trong repo nếu chạy cục bộ
2. thử tải file từ GitHub raw nếu đang chạy trên Colab
3. nếu vẫn không được, upload file CSV thủ công

## Cách lưu sản phẩm sau bài học

Khuyến nghị cấu trúc thư mục:

- `outputs/day01_table1/`
- `outputs/day02_ml/`
- `outputs/day03_stability/`
- `outputs/day04_pathway/`
- `outputs/day05_capstone/`

Mỗi thư mục nên chứa:

- bảng `.csv`
- hình `.png`
- 1 file text hoặc markdown giải thích ngắn

## Lỗi thường gặp

### Không đọc được CSV

- kiểm tra tên file trong thư mục `data/`
- nếu chạy trên Colab, sửa đúng `GITHUB_USER` và `REPO_NAME` ở đầu notebook

### Không ra biểu đồ

- kiểm tra đã chạy cell import `matplotlib` hay chưa
- chạy lại cell vẽ hình và cell `savefig`

### Đổi tên repo nhưng link tải vẫn sai

- sửa trong `book/_config.yml`
- sửa các biến `GITHUB_USER`, `REPO_NAME` ở notebook

## Dùng dữ liệu thật như thế nào

Website này chỉ dạy flow code. Khi chuyển sang dữ liệu thật:

- thay file input nhưng giữ nguyên cấu trúc bước phân tích
- kiểm tra tên cột
- không upload dữ liệu bệnh nhân thật lên repo public
