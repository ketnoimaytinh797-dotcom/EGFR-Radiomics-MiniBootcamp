# EGFR Radiomics — Mini Bootcamp 5 buổi

Repository này là website học tập dạng Jupyter Book phục vụ nhóm học sinh THPT chuẩn bị dự án EGFR radiomics.

Mục tiêu của phiên bản 5 buổi:
- đi đúng flow của báo cáo nghiên cứu
- giữ phần code ở mức học sinh có thể hiểu và chạy trên Colab
- mỗi buổi đều có sản phẩm cụ thể sau khi chạy notebook
- vẫn giữ độ chi tiết của bộ 20 bài, nhưng gói lại theo 5 chặng rõ ràng

## Cấu trúc học tập

1. Day 01 — Descriptive statistics cho cohort 200 bệnh nhân
2. Day 02 — ML performance: ROC AUC, confusion matrix, so sánh intra và ring
3. Day 03 — Stability analysis: CV, bootstrap, leakage
4. Day 04 — NGS pathway delta P: mean, median, p value theo pathway
5. Day 05 — Capstone: ghép toàn bộ flow, tạo bảng và hình cuối cùng bằng code

## Dữ liệu trong repo

- `data/nsclc_egfr_radiomics_simplified.csv`: cohort demo 200 bệnh nhân
- `data/ngs_pathway_demo_64.csv`: subset demo 64 bệnh nhân cho phân tích pathway
- dữ liệu demo được dùng để học luồng code; khi áp dụng dữ liệu thật thì thay file nhưng giữ cùng logic

## Mở website

Sau khi bật GitHub Pages bằng GitHub Actions, website sẽ có giao diện Jupyter Book và tự có liên kết Previous / Next ở cuối trang.
