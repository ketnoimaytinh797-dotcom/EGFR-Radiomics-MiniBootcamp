# Syllabus

## Cấu trúc chương trình 5 buổi

| Day | Trọng tâm | Kỹ năng code chính | Sản phẩm sau bài học |
|---|---|---|---|
| Day 01 | Descriptive statistics cho cohort 200 bệnh nhân | đọc CSV, Table 1, boxplot, histogram, kiểm định mô tả cơ bản | Table 1, bảng tóm tắt nhóm, 3 biểu đồ |
| Day 02 | ML performance | train/test split, pipeline, ROC AUC, confusion matrix, so sánh ROI | bảng hiệu năng và hình ROC |
| Day 03 | Stability analysis | 5-fold CV, bootstrap CI, leakage demo | bảng CV, bảng bootstrap, file giải thích leakage |
| Day 04 | NGS pathway delta P | predicted probability, merge pathway, delta mean P, delta median P | bảng pathway, bar chart, boxplot |
| Day 05 | Capstone | ghép toàn bộ flow, export output, ghi chú giải thích | thư mục output hoàn chỉnh |

## Mapping từ bộ 20 buổi sang 5 buổi

### Day 01
Gom các bài về đọc dữ liệu, phân loại biến, thống kê mô tả, biểu đồ mô tả, Table 1.

### Day 02
Gom các bài về train/test split, ROC AUC, confusion matrix, threshold cơ bản và so sánh intra / ring.

### Day 03
Gom các bài về cross-validation, bootstrap, leakage và cách diễn giải độ ổn định.

### Day 04
Gom các bài về subgroup comparison, pathway-level summary, mean/median difference và diễn giải sinh học thận trọng.

### Day 05
Gom các bài về tổng hợp báo cáo, export output, viết ghi chú giải thích và kiểm tra lại toàn bộ flow.

## Cách đọc một buổi học

Mỗi notebook đều đi theo cùng một cấu trúc:

1. Mục tiêu bài học
2. Nội dung và liên hệ với báo cáo
3. Code thực hành từng bước
4. Sản phẩm sau bài học
5. Tự kiểm tra
6. Điều hướng sang buổi tiếp theo

## Slide tham khảo theo từng buổi

- Day 01: [day01_reference_pack.zip](_static/slides/day01_reference_pack.zip)
- Day 02: [day02_reference_pack.zip](_static/slides/day02_reference_pack.zip)
- Day 03: [day03_reference_pack.zip](_static/slides/day03_reference_pack.zip)
- Day 04: [day04_reference_pack.zip](_static/slides/day04_reference_pack.zip)
- Day 05: [day05_reference_pack.zip](_static/slides/day05_reference_pack.zip)

## Chuẩn hoàn thành tối thiểu

Học sinh được xem là hoàn thành mini bootcamp khi có đủ:

- bảng thống kê mô tả cohort
- bảng hiệu năng mô hình ở ít nhất 4 ROI sets
- bảng CV và bootstrap CI cho mô hình chính
- bảng delta P theo pathway trong subset NGS
- thư mục output capstone có bảng, hình và ghi chú ngắn
