# Setup

## Cách mở notebook trên Colab

1. Vào website của khóa học
2. Chọn buổi đang học ở menu bên trái
3. Bấm link Open in Colab của buổi đó
4. Chọn File rồi lưu một bản vào Google Drive
5. Chạy lần lượt từ trên xuống

## Link mở trực tiếp trên Colab

- Day 01  [Open in Colab](https://colab.research.google.com/github/ketnoimaytinh797-dotcom/EGFR-Radiomics-MiniBootcamp/blob/main/book/day01.ipynb)
- Day 02  [Open in Colab](https://colab.research.google.com/github/ketnoimaytinh797-dotcom/EGFR-Radiomics-MiniBootcamp/blob/main/book/day02.ipynb)
- Day 03  [Open in Colab](https://colab.research.google.com/github/ketnoimaytinh797-dotcom/EGFR-Radiomics-MiniBootcamp/blob/main/book/day03.ipynb)
- Day 04  [Open in Colab](https://colab.research.google.com/github/ketnoimaytinh797-dotcom/EGFR-Radiomics-MiniBootcamp/blob/main/book/day04.ipynb)
- Day 05  [Open in Colab](https://colab.research.google.com/github/ketnoimaytinh797-dotcom/EGFR-Radiomics-MiniBootcamp/blob/main/book/day05.ipynb)
- Appendix  [Open in Colab](https://colab.research.google.com/github/ketnoimaytinh797-dotcom/EGFR-Radiomics-MiniBootcamp/blob/main/book/radiomics_pipeline_demo.ipynb)

## Cách chạy một buổi

- chạy cell import và cell đọc dữ liệu trước
- sau đó chạy lần lượt từng bước từ trên xuống
- với cell vẽ hình thì chờ hình hiện ra rồi mới chuyển tiếp
- cuối buổi đọc phần kết quả và sản phẩm sau bài học

## Cấu trúc thư mục chính

- data chứa CSV demo
- book chứa nội dung Jupyter Book
- book/_static/slides chứa slide từng buổi
- book/_static/results chứa kết quả demo đã tạo sẵn

## Khi học sinh chạy trên Colab

Notebook sẽ tự đọc CSV demo từ GitHub raw link. Không cần tải dữ liệu về máy.

## Nếu Colab báo thiếu thư viện

Chạy cell này trước rồi chạy lại notebook.

```python
!pip install pandas numpy matplotlib seaborn scikit-learn openpyxl
```
