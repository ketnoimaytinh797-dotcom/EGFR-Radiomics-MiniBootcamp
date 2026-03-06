# Setup

## Mục tiêu của trang này

Trang này giúp học sinh mở đúng notebook trên Colab, tải đúng dữ liệu demo và biết phải lưu sản phẩm ở đâu sau mỗi buổi.

## Chuẩn bị trước khi học

Cần có:

- tài khoản Google để mở Colab
- tài khoản GitHub để xem repository
- kết nối Internet ổn định

## Cách mở notebook trên Colab

Có thể dùng một trong hai cách:

### Cách 1. Mở trực tiếp từ GitHub

- vào repository
- mở file notebook cần học
- chọn Open in Colab nếu nút này đã được bật

### Cách 2. Mở bằng Colab thủ công

- vào Colab
- chọn GitHub
- dán link repository
- chọn notebook đúng ngày học

## Cách chạy notebook

Trong mỗi notebook:

- chạy từ trên xuống dưới
- không bỏ qua cell markdown vì phần giải thích nằm ở đó
- nếu đang dùng Colab, ưu tiên chọn Runtime mặc định CPU là đủ

## Cách tải dữ liệu demo

Các notebook trong bootcamp được viết để tự tìm file theo thứ tự:

1. tìm file ngay trong repository nếu chạy cục bộ
2. thử tải file từ GitHub raw nếu đang chạy trên Colab
3. nếu không thành công thì upload thủ công file CSV demo

## Cách lưu sản phẩm sau mỗi buổi

Mỗi buổi nên tạo một thư mục output riêng, ví dụ:

- `outputs/day01_table1/`
- `outputs/day02_ml/`
- `outputs/day03_stability/`
- `outputs/day04_pathway/`
- `outputs/day05_capstone/`

Trong đó lưu:

- file csv của bảng kết quả
- file png của hình
- ghi chú ngắn 3–5 dòng về ý nghĩa kết quả

## Lỗi thường gặp

### Không đọc được file CSV

- kiểm tra đúng tên file trong thư mục `data/`
- nếu chạy trên Colab, chỉnh lại `GITHUB_USER` và `REPO_NAME` trong notebook cho đúng repository

### Chạy được nhưng không thấy biểu đồ

- kiểm tra đã chạy cell import `matplotlib.pyplot` hay chưa
- chạy lại cell vẽ hình và cell lưu hình

### Tên repository đã đổi nhưng notebook vẫn tải sai link

- sửa 2 biến ở đầu notebook: `GITHUB_USER` và `REPO_NAME`

## Cách dùng dữ liệu thật

Website này dùng dữ liệu demo để học flow. Khi chuyển sang dữ liệu thật:

- giữ nguyên logic code
- thay file input bằng file thật
- kiểm tra lại tên cột
- tuyệt đối không đưa dữ liệu bệnh nhân thật lên repository public
