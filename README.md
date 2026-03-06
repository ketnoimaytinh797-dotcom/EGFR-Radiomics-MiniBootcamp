# EGFR Radiomics — Mini Bootcamp (5 buổi)

Repository này là website học tập (Jupyter Book) cho học sinh THPT, chạy trên Google Colab.

Mục tiêu của chương trình rút gọn:
- Hiểu luồng phân tích của báo cáo theo đúng 5 bước: mô tả dữ liệu, hiệu năng ML, độ ổn định, NGS delta P, tổng hợp báo cáo bằng code.
- Mỗi buổi chạy 1 notebook, tạo ra sản phẩm cuối buổi (bảng và hình) để kiểm tra và nộp.

Dữ liệu trong khoá là dữ liệu demo, không phải dữ liệu bệnh nhân thật.

## Cách publish website (GitHub Pages)
1. Upload repo lên GitHub
2. Settings → Pages
3. Source: GitHub Actions
4. Chờ link website

## Cấu hình một lần để nút Open in Colab hoạt động
Sửa file `book/_config.yml` và thay:
- YOUR_GITHUB_USERNAME
- YOUR_REPO_NAME

Trong các notebook cũng có biến:
- GITHUB_USER
- REPO_NAME

Cần sửa đúng để notebook tự tải được file CSV demo từ GitHub.

## Thư mục quan trọng
- `book/` nội dung website và notebook
- `book/_static/slides/` slide từng buổi
- `data/` dữ liệu demo (CSV)
- `book/_static/data/` dữ liệu demo để website hiển thị

## Lưu ý khi dùng Colab
Trong mỗi notebook, phần cuối sẽ tạo thư mục `outputs/` và nén thành file zip để tải về.
