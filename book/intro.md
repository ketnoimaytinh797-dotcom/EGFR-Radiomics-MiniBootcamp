# EGFR Radiomics — Mini Bootcamp (5 buổi)

Website này được xây dựng như một course website theo phong cách Jupyter Book cho học sinh THPT. Mục tiêu là giữ đúng flow phân tích của báo cáo EGFR radiomics, nhưng rút toàn bộ nội dung về 5 buổi học có thể tự học trên Google Colab.

## Mục tiêu học tập

Sau khi hoàn thành mini bootcamp, học sinh cần làm được các việc sau:

- đọc dữ liệu cohort 200 bệnh nhân và lập được bảng thống kê mô tả cơ bản
- hiểu đầu vào và đầu ra của bài toán dự đoán EGFR bằng radiomics
- chạy được pipeline train/test, ROC AUC, confusion matrix trên Colab
- hiểu vì sao cần cross-validation, bootstrap và vì sao phải tránh leakage
- tính và diễn giải được delta mean P, delta median P theo pathway trong subset NGS 64 bệnh nhân
- ghép toàn bộ quy trình thành một notebook tổng hợp để xuất bảng, hình và ghi chú giải thích

## Đối tượng và yêu cầu đầu vào

Đối tượng phù hợp:

- học sinh THPT đang chuẩn bị dự án KHKT hoặc ISEF liên quan đến radiomics, ML y sinh, thống kê mô tả
- học sinh chưa biết Python vẫn có thể học nếu đi theo đúng thứ tự của website

Yêu cầu đầu vào tối thiểu:

- biết mở GitHub repo và Google Colab
- hiểu các khái niệm cơ bản như biến số, trung bình, trung vị, tỉ lệ, biểu đồ cột
- sẵn sàng đọc giải thích trong markdown trước khi chạy code

## Cấu trúc chương trình

Mini bootcamp gồm 5 buổi chính:

1. **Day 01 — Descriptive statistics**  
   Cohort 200 bệnh nhân, Table 1, boxplot, histogram, so sánh EGFR dương tính và âm tính.
2. **Day 02 — ML performance**  
   Train/test split, ROC AUC, confusion matrix, so sánh intra và ring1/ring3/ring5.
3. **Day 03 — Stability analysis**  
   Cross-validation, bootstrap CI, leakage demonstration.
4. **Day 04 — NGS pathway delta P**  
   Predicted probability, merge bảng pathway 64 bệnh nhân, delta mean P, delta median P.
5. **Day 05 — Capstone**  
   Ghép toàn bộ flow và xuất output cuối cùng bằng code.

## Sản phẩm học tập

Mỗi buổi không chia thành bài tập về nhà riêng. Thay vào đó, mỗi buổi học phải tạo được sản phẩm sau bài học:

- file bảng `.csv`
- hình `.png`
- ghi chú giải thích ngắn 3–5 dòng
- thư mục output riêng cho từng ngày

## Dữ liệu và đạo đức

Website này dùng **dữ liệu demo công khai trong repo** để học flow phân tích. Khi chuyển sang dữ liệu thật:

- không đưa dữ liệu bệnh nhân thật lên repo public
- không công khai file gốc có thông tin nhận dạng
- chỉ thay file đầu vào, không thay logic bài học

## Cách sử dụng website

- đọc **Setup** trước khi học Day 01
- đọc **Syllabus** để thấy mỗi buổi nối với phần nào trong bộ 20 buổi
- học theo thứ tự Day 01 → Day 05
- ở cuối mỗi trang sẽ có điều hướng **Previous / Next** khi website được build đúng bằng Jupyter Book

## Slide và tài liệu tham khảo

- Gói slide gốc 20 buổi: [day01_day20_slides_pack.zip](_static/slides/day01_day20_slides_pack.zip)
- Mỗi ngày có thêm một gói slide tham khảo riêng ở đầu notebook
- Tài liệu giáo viên: [teacher_solutions.zip](_static/teacher_solutions.zip)
