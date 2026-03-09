# EGFR Radiomics — Mini Bootcamp 5 buổi

Website này dùng cho học sinh THPT tự học trên Colab theo đúng luồng phân tích của báo cáo.
## Mở notebook trên Colab

Day01  
https://colab.research.google.com/github/ketnoimaytinh797-dotcom/EGFR-Radiomics-MiniBootcamp/blob/main/book/day01.ipynb

Day02  
https://colab.research.google.com/github/ketnoimaytinh797-dotcom/EGFR-Radiomics-MiniBootcamp/blob/main/book/day02.ipynb

Day03  
https://colab.research.google.com/github/ketnoimaytinh797-dotcom/EGFR-Radiomics-MiniBootcamp/blob/main/book/day03.ipynb

Day04  
https://colab.research.google.com/github/ketnoimaytinh797-dotcom/EGFR-Radiomics-MiniBootcamp/blob/main/book/day04.ipynb

Day05  
https://colab.research.google.com/github/ketnoimaytinh797-dotcom/EGFR-Radiomics-MiniBootcamp/blob/main/book/day05.ipynb

## Mục tiêu học tập

Sau 5 buổi, học sinh cần làm được 4 việc.

- Đọc đúng dữ liệu cohort và viết được phần mô tả dữ liệu
- Chạy được một mô hình logistic regression theo quy trình sạch
- Kiểm tra được độ ổn định bằng cross validation và bootstrap
- Nối được xác suất dự đoán với phân tích pathway để đọc delta P

## Đầu vào cần có

- Biết mở notebook trên Colab
- Biết bấm chạy từng ô lệnh
- Biết lưu file kết quả ra thư mục output
- Không cần học trước Python nâng cao

## Cấu trúc chương trình

| Buổi | Trọng tâm | Sản phẩm chính |
|---|---|---|
| Day 01 | Mô tả dữ liệu | Table 1 và 3 biểu đồ cơ bản |
| Day 02 | Hiệu năng mô hình | Bảng AUC theo ROI và ROC |
| Day 03 | Độ ổn định | 5 fold CV, bootstrap CI, ví dụ leakage |
| Day 04 | Delta P theo pathway | Bảng pathway và 2 biểu đồ |
| Day 05 | Ghép báo cáo | Một notebook tổng hợp và thư mục output |

## Dữ liệu dùng trong khóa học

Khóa học dùng bộ dữ liệu demo đã rút gọn.

- Cohort demo có 200 bệnh nhân
- Tỉ lệ EGFR dương là 45.5 phần trăm
- Có đủ nhóm intra, ring1, ring3, ring5 để so sánh
- Có subset NGS gồm 64 bệnh nhân để làm phần pathway

## Cách học

- Mỗi buổi gồm lý thuyết ngắn, code, kết quả demo, cách đọc kết quả
- Học sinh nên chạy notebook theo đúng thứ tự Day 01 đến Day 05
- Sau mỗi buổi phải lưu hình, bảng, nhận xét ngắn vào thư mục output riêng

## Tài liệu tải nhanh

- [Slide Day 01](_static/slides/day01_slides.pptx)
- [Slide Day 02](_static/slides/day02_slides.pptx)
- [Slide Day 03](_static/slides/day03_slides.pptx)
- [Slide Day 04](_static/slides/day04_slides.pptx)
- [Slide Day 05](_static/slides/day05_slides.pptx)
- [Teacher solutions](_static/teacher_solutions.zip)
