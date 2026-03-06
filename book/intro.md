# EGFR Radiomics — Mini Bootcamp 5 buổi

Website này được xây dựng như một chương trình học rút gọn cho học sinh THPT chuẩn bị dự án EGFR radiomics. Nội dung vẫn đi theo đúng logic của bộ 20 buổi, nhưng được gói lại thành 5 chặng lớn bám sát flow của báo cáo nghiên cứu.

## Mục tiêu học tập

Sau khi hoàn thành chương trình, học sinh cần làm được các việc sau:

- đọc được dữ liệu cohort và tóm tắt được đặc điểm mẫu nghiên cứu
- chạy được các notebook trên Google Colab và lưu sản phẩm sau mỗi buổi
- hiểu vì sao cần train test split, cross validation, bootstrap và cách tránh leakage
- so sánh được hiệu năng của các feature sets intra, ring1, ring3, ring5
- tính và diễn giải được delta mean P, delta median P theo pathway trong subset NGS 64 bệnh nhân
- ghép toàn bộ flow phân tích thành một notebook capstone tạo được bảng và hình cho báo cáo

## Đối tượng và yêu cầu đầu vào

Đối tượng phù hợp là học sinh đang chuẩn bị dự án KHKT liên quan đến radiomics, AI y sinh hoặc thống kê y sinh cơ bản.

Yêu cầu đầu vào tối thiểu:

- biết mở GitHub repository và chạy notebook trên Colab
- hiểu khái niệm cơ bản về biến số, trung bình, trung vị và tỉ lệ
- không cần biết Python trước, nhưng cần kiên nhẫn đọc giải thích ở từng cell

## Cấu trúc chương trình

Chương trình được chia thành 5 buổi lớn:

1. **Day 01 — Descriptive statistics**  
   Tập trung vào cohort 200 bệnh nhân, Table 1, biểu đồ mô tả và so sánh EGFR dương tính với EGFR âm tính.
2. **Day 02 — ML performance**  
   Tập trung vào train test split, ROC AUC, confusion matrix và so sánh các vùng ROI.
3. **Day 03 — Stability analysis**  
   Tập trung vào 5-fold CV, bootstrap CI, leakage và cách đọc độ ổn định của mô hình.
4. **Day 04 — NGS pathway delta P**  
   Tập trung vào subset 64 bệnh nhân có pathway, so sánh delta mean P và delta median P.
5. **Day 05 — Capstone**  
   Ghép toàn bộ pipeline, tạo output hoàn chỉnh và viết diễn giải ngắn gọn bằng code.

## Sản phẩm học tập

Mỗi buổi không có bài tập về nhà riêng. Thay vào đó, mỗi buổi phải tạo ra sản phẩm cuối buổi, ví dụ:

- bảng Table 1
- hình ROC hoặc confusion matrix
- bảng CV và bootstrap CI
- bảng pathway delta P và biểu đồ boxplot
- thư mục output hoàn chỉnh cho capstone

## Liên hệ với bộ 20 buổi

Phiên bản 5 buổi này không thay nội dung cốt lõi của bộ 20 buổi. Cách làm là gom nhiều bài nhỏ lại thành một chặng lớn:

- Day 01 của bootcamp tương ứng chủ yếu với Day 01–04 của bộ 20 buổi
- Day 02 tương ứng với các bài về hiệu năng mô hình, ROC AUC, confusion matrix và so sánh ROI
- Day 03 tương ứng với các bài về CV, bootstrap, leakage, calibration
- Day 04 tương ứng với phần kiểm định, pathway, diễn giải theo nhóm NGS
- Day 05 tương ứng với phần tổng hợp kết quả, export output, viết báo cáo bằng code

## Cách sử dụng website

- đọc trang **Setup** trước khi mở notebook
- học theo thứ tự **Syllabus → Day 01 → Day 05**
- dùng liên kết **Previous / Next** ở cuối trang để đi tiếp, giống website 20 bài
- mỗi notebook có mục **Sản phẩm sau bài học** và **Tự kiểm tra** ở cuối

## Slide tham khảo

Để giữ độ chi tiết như bộ 20 buổi, website này đi kèm:

- gói slide gốc 20 buổi: [day01_day20_slides_pack.zip](_static/slides/day01_day20_slides_pack.zip)
- mỗi buổi trong bootcamp đều có gói slide tham khảo riêng ngay đầu notebook
