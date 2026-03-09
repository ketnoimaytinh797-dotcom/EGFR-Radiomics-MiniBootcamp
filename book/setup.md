# Setup

Trang này hướng dẫn mở notebook trên Colab và đọc đúng cấu trúc repo.

## Cách mở notebook trên Colab

1. Vào website của khóa học
2. Chọn buổi đang học
3. Mở link Colab tương ứng
4. Chạy lần lượt từ trên xuống dưới

## Link mở trực tiếp trên Colab

- Day 01: [Open in Colab](https://colab.research.google.com/github/ketnoimaytinh797-dotcom/EGFR-Radiomics-MiniBootcamp/blob/main/book/day01.ipynb)
- Day 02: [Open in Colab](https://colab.research.google.com/github/ketnoimaytinh797-dotcom/EGFR-Radiomics-MiniBootcamp/blob/main/book/day02.ipynb)
- Day 03: [Open in Colab](https://colab.research.google.com/github/ketnoimaytinh797-dotcom/EGFR-Radiomics-MiniBootcamp/blob/main/book/day03.ipynb)
- Day 04: [Open in Colab](https://colab.research.google.com/github/ketnoimaytinh797-dotcom/EGFR-Radiomics-MiniBootcamp/blob/main/book/day04.ipynb)
- Day 05: [Open in Colab](https://colab.research.google.com/github/ketnoimaytinh797-dotcom/EGFR-Radiomics-MiniBootcamp/blob/main/book/day05.ipynb)
- Appendix: [Open in Colab](https://colab.research.google.com/github/ketnoimaytinh797-dotcom/EGFR-Radiomics-MiniBootcamp/blob/main/book/radiomics_pipeline_demo.ipynb)

## Cấu trúc repo

- `book/` chứa toàn bộ nội dung website
- `data/` chứa dữ liệu demo
- `book/_static/slides/` chứa slide của từng buổi
- `teacher_solutions.zip` là tài liệu nội bộ cho giáo viên

## Cách lưu sản phẩm sau mỗi buổi

- Lưu một bản notebook trên Google Drive
- Xuất hình và bảng nếu buổi học yêu cầu
- Ghi lại 3 ý chính sau mỗi buổi

## Mẹo khi học

- Không cần tải dữ liệu về máy
- Nếu Colab báo thiếu thư viện, thêm một cell đầu và chạy:

```python
!pip install pandas numpy matplotlib seaborn scikit-learn openpyxl
