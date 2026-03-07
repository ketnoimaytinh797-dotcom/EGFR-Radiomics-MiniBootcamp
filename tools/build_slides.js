const pptxgen = require('pptxgenjs');
const { codeToRuns, imageSizingContain, safeOuterShadow } = require('/home/oai/skills/slides/pptxgenjs_helpers');
const fs = require('fs');
const path = require('path');

const repo = '/mnt/data/final_repo';
const slideDir = path.join(repo, 'book', '_static', 'slides');
const figDir = path.join(repo, 'book', '_static', 'figures');
const metrics = JSON.parse(fs.readFileSync(path.join(repo, 'book', '_static', 'downloads', 'demo_metrics.json'), 'utf8'));

const COLORS = {
  navy: '1F2937',
  blue: '2E64D1',
  slate: '667085',
  light: 'F5F7FB',
  line: 'D6DCE8',
  card: 'EEF2F8',
  white: 'FFFFFF',
  green: '0F766E',
  amber: 'B45309',
  red: 'B42318',
};

function createDeck() {
  const pptx = new pptxgen();
  pptx.layout = 'LAYOUT_WIDE';
  pptx.author = 'OpenAI';
  pptx.company = 'OpenAI';
  pptx.subject = 'EGFR Radiomics Mini Bootcamp';
  pptx.title = 'EGFR Radiomics Mini Bootcamp';
  pptx.lang = 'vi-VN';
  pptx.theme = {
    headFontFace: 'Arial',
    bodyFontFace: 'Arial',
    lang: 'vi-VN'
  };
  return pptx;
}

function addChrome(slide, dayLabel, smallTitle='') {
  slide.background = { color: COLORS.white };
  slide.addShape('rect', { x: 0, y: 0, w: 13.333, h: 0.42, fill: { color: 'F2F4F7' }, line: { color: 'F2F4F7' } });
  slide.addShape('rect', { x: 0.05, y: 0, w: 0.07, h: 7.5, fill: { color: COLORS.blue }, line: { color: COLORS.blue } });
  slide.addText(dayLabel, { x: 0.18, y: 0.1, w: 1.0, h: 0.2, fontFace: 'Arial', fontSize: 9, color: COLORS.blue, bold: true, margin: 0 });
  if (smallTitle) {
    slide.addText(smallTitle, { x: 1.2, y: 0.1, w: 6.5, h: 0.2, fontFace: 'Arial', fontSize: 9, color: COLORS.navy, margin: 0 });
  }
}

function addTitle(slide, title, subtitle='') {
  slide.addText(title, { x: 0.55, y: 0.75, w: 7.7, h: 1.25, fontFace: 'Arial', fontSize: 26, bold: true, color: COLORS.navy, margin: 0 });
  if (subtitle) {
    slide.addText(subtitle, { x: 0.58, y: 2.0, w: 6.8, h: 0.45, fontFace: 'Arial', fontSize: 12.5, color: COLORS.slate, margin: 0 });
  }
}

function addRoundedCard(slide, x, y, w, h, title='', body='', opts={}) {
  slide.addShape('roundRect', { x, y, w, h, rectRadius: 0.1, fill: { color: opts.fill || COLORS.light }, line: { color: opts.line || COLORS.line, width: 1 }, shadow: safeOuterShadow('000000', 0.12, 45, 1, 1) });
  if (title) {
    slide.addText(title, { x: x+0.18, y: y+0.16, w: w-0.36, h: 0.24, fontFace: 'Arial', fontSize: 14, bold: true, color: COLORS.navy, margin: 0 });
  }
  if (body) {
    slide.addText(body, { x: x+0.18, y: y+0.5, w: w-0.36, h: h-0.64, fontFace: 'Arial', fontSize: 12, color: COLORS.navy, valign: 'top', breakLine: false, bullet: { indent: 12 }, margin: 0.04 });
  }
}

function addBulletList(slide, x, y, w, h, items, opts={}) {
  const runs = [];
  items.forEach((item) => {
    runs.push({ text: item, options: { bullet: { indent: 14 }, breakLine: true } });
  });
  slide.addText(runs, { x, y, w, h, fontFace: 'Arial', fontSize: opts.fontSize || 13, color: opts.color || COLORS.navy, valign: 'top', margin: 0.02 });
}

function addCodeCard(slide, x, y, w, h, code, lang='python', title='Code chính') {
  slide.addShape('roundRect', { x, y, w, h, rectRadius: 0.08, fill: { color: '0B1736' }, line: { color: '0B1736' } });
  slide.addText(title, { x: x+0.2, y: y+0.12, w: w-0.4, h: 0.2, fontFace: 'Arial', fontSize: 11, color: 'D4E1FF', bold: true, margin: 0 });
  const runs = codeToRuns(code, lang);
  slide.addText(runs, { x: x+0.18, y: y+0.42, w: w-0.36, h: h-0.55, fontFace: 'Courier New', fontSize: 11, color: 'F8FAFC', margin: 0.03, valign: 'top' });
}

function addImageCard(slide, imgPath, x, y, w, h, title='') {
  slide.addShape('roundRect', { x, y, w, h, rectRadius: 0.08, fill: { color: COLORS.white }, line: { color: COLORS.line, width: 1 }, shadow: safeOuterShadow('000000', 0.1, 45, 1, 1) });
  if (title) {
    slide.addText(title, { x: x+0.15, y: y+0.12, w: w-0.3, h: 0.22, fontFace: 'Arial', fontSize: 12, bold: true, color: COLORS.navy, margin: 0 });
    slide.addImage({ path: imgPath, ...imageSizingContain(imgPath, x+0.15, y+0.45, w-0.3, h-0.55) });
  } else {
    slide.addImage({ path: imgPath, ...imageSizingContain(imgPath, x+0.1, y+0.1, w-0.2, h-0.2) });
  }
}

function addMetricPill(slide, x, y, w, h, label, value, fill=COLORS.card) {
  slide.addShape('roundRect', { x, y, w, h, rectRadius: 0.08, fill: { color: fill }, line: { color: fill } });
  slide.addText(label, { x: x+0.12, y: y+0.09, w: w-0.24, h: 0.16, fontFace: 'Arial', fontSize: 9.5, color: COLORS.slate, bold: true, margin: 0 });
  slide.addText(String(value), { x: x+0.12, y: y+0.27, w: w-0.24, h: 0.22, fontFace: 'Arial', fontSize: 16, color: COLORS.navy, bold: true, margin: 0 });
}

function addFooterNext(slide, text) {
  slide.addShape('rect', { x: 0.4, y: 7.18, w: 12.45, h: 0.18, fill: { color: COLORS.blue }, line: { color: COLORS.blue } });
  slide.addText(text, { x: 0.55, y: 7.0, w: 4.8, h: 0.15, fontFace: 'Arial', fontSize: 9, color: COLORS.white, margin: 0, align: 'left' });
}

function buildDay01() {
  const pptx = createDeck();
  let slide = pptx.addSlide();
  addChrome(slide, 'Day 01', 'Mô tả dữ liệu');
  addTitle(slide, 'Day 01 — Mô tả dữ liệu và đọc Table 1', 'Từ cohort demo đến ba hình cơ bản');
  addRoundedCard(slide, 0.55, 2.45, 5.0, 2.1, 'Buổi này làm gì', '', { fill: COLORS.light });
  addBulletList(slide, 0.8, 2.95, 4.4, 1.3, [
    'Đọc cohort và chia nhóm biến',
    'Tạo Table 1 đủ ngắn để đọc nhanh',
    'Vẽ ba hình cơ bản trước khi sang phần model'
  ]);
  addMetricPill(slide, 6.0, 2.55, 1.65, 0.6, 'Cohort', metrics.cohort_n);
  addMetricPill(slide, 7.85, 2.55, 1.9, 0.6, 'EGFR dương', metrics.egfr_positive_pct + ' %');
  addMetricPill(slide, 9.95, 2.55, 1.7, 0.6, 'Tuổi TB', metrics.age_mean);
  addMetricPill(slide, 6.0, 3.35, 2.2, 0.6, 'Kích thước u', metrics.tumor_size_median + ' mm');
  addImageCard(slide, path.join(figDir, 'day01_age_hist.png'), 8.35, 3.3, 4.3, 3.2, 'Một hình để nhớ');
  addFooterNext(slide, 'Sang slide 2 để đọc khung lý thuyết của buổi đầu');

  slide = pptx.addSlide();
  addChrome(slide, 'Day 01', 'Lý thuyết ngắn');
  addTitle(slide, 'Nội dung', 'Đích của Day 01 là hiểu dữ liệu trước khi chạy model');
  addRoundedCard(slide, 0.6, 2.0, 4.15, 3.9, 'Nhóm biến cần nhớ', '', {});
  addBulletList(slide, 0.85, 2.55, 3.7, 2.9, [
    'egfr_mutation là biến đích',
    'age và tumor_size_mm là biến liên tục',
    'sex, smoking_status, histology, stage là biến phân loại',
    'intra, ring1, ring3, ring5 là bốn nhóm radiomics'
  ]);
  addRoundedCard(slide, 4.95, 2.0, 3.45, 3.9, 'Câu hỏi phải trả lời', '', {});
  addBulletList(slide, 5.2, 2.55, 3.0, 2.9, [
    'Cohort có bao nhiêu ca',
    'Tỉ lệ EGFR dương ra sao',
    'Biến nào nên đưa vào Table 1',
    'Hình nào đủ để đọc phân bố dữ liệu'
  ]);
  addImageCard(slide, path.join(figDir, 'day01_plot_montage.png'), 8.6, 2.0, 4.1, 3.95, 'Ba hình của buổi đầu');
  addFooterNext(slide, 'Slide 3 bắt đầu đi thẳng vào code');

  slide = pptx.addSlide();
  addChrome(slide, 'Day 01', 'Code đọc dữ liệu');
  addTitle(slide, 'Bước 1 — Đọc cohort', 'Không cần học nhiều lệnh. Chỉ cần hiểu từng dòng đang làm gì');
  addCodeCard(slide, 0.7, 1.95, 6.15, 4.8, `df = load_csv('data/nsclc_egfr_radiomics_simplified.csv')\ndictionary = load_csv('data/data_dictionary_nsclc_egfr_radiomics_simplified.csv')\n\nprint(df.shape)\ndisplay(df.head())\ndisplay(dictionary.head(12))`, 'python', 'Code dùng trong notebook');
  addRoundedCard(slide, 7.05, 1.95, 5.55, 2.1, 'Khi chạy xong sẽ thấy', '', {});
  addBulletList(slide, 7.3, 2.45, 5.0, 1.2, [
    'Bảng chính có 200 dòng và 32 cột',
    'Data dictionary giúp đọc tên cột nhanh hơn',
    'Học sinh cần biết đâu là biến đích và đâu là nhóm radiomics'
  ], { fontSize: 12.5 });
  addRoundedCard(slide, 7.05, 4.25, 5.55, 2.05, 'Đọc kết quả ra sao', '', {});
  addBulletList(slide, 7.3, 4.75, 5.0, 1.05, [
    'Không vội chạy model khi còn chưa hiểu cohort',
    'Mỗi cột phải được xếp vào đúng nhóm',
    'Day 01 là nền cho bốn buổi sau'
  ], { fontSize: 12.5 });
  addFooterNext(slide, 'Slide 4 dùng code để tạo Table 1');

  slide = pptx.addSlide();
  addChrome(slide, 'Day 01', 'Code tạo Table 1');
  addTitle(slide, 'Bước 2 — Tạo Table 1', 'Chọn ít biến nhưng đủ để đọc xu hướng');
  addCodeCard(slide, 0.7, 1.95, 6.1, 4.95, `table1 = (\n    df.groupby('egfr_mutation')\n      .agg(\n          age_mean = ('age', 'mean'),\n          age_sd = ('age', 'std'),\n          tumor_size_median = ('tumor_size_mm', 'median'),\n          female_pct = ('sex', lambda s: (s == 'F').mean()*100),\n          never_smoker_pct = ('smoking_status', lambda s: (s == 'Never').mean()*100)\n      )\n      .round(1)\n)\ndisplay(table1)`, 'python', 'Code chính của phần Table 1');
  addRoundedCard(slide, 7.0, 1.95, 5.6, 4.95, 'Điểm học sinh phải hiểu', '', {});
  addBulletList(slide, 7.25, 2.45, 5.1, 4.0, [
    'Table 1 không phải bảng liệt kê cho đủ số lượng cột',
    'Buổi này chỉ giữ những biến có ích cho phần mô tả cohort',
    'Khi chia theo EGFR, học sinh phải nhìn được nhóm nào lớn hơn hay nhỏ hơn',
    'Không cần suy diễn sâu ở Day 01. Chỉ cần đọc đúng dữ liệu'
  ], { fontSize: 12.3 });
  addFooterNext(slide, 'Slide 5 cho ra ba hình minh họa');

  slide = pptx.addSlide();
  addChrome(slide, 'Day 01', 'Kết quả demo');
  addTitle(slide, 'Bước 3 — Đọc ba hình cơ bản', 'Mỗi hình trả lời một câu hỏi khác nhau');
  addImageCard(slide, path.join(figDir, 'day01_plot_montage.png'), 0.65, 2.0, 8.15, 4.9, 'Kết quả demo');
  addRoundedCard(slide, 9.0, 2.0, 3.7, 4.9, 'Cách đọc hình', '', {});
  addBulletList(slide, 9.22, 2.55, 3.3, 4.0, [
    'Histogram cho biết cohort tập trung ở nhóm tuổi nào',
    'Bar chart cho biết phân bố giới giữa hai nhóm EGFR',
    'Boxplot cho biết kích thước u có lệch nhiều hay không',
    'Ba hình này đủ để viết hai đến ba câu mô tả ngắn'
  ], { fontSize: 12.1 });
  addFooterNext(slide, 'Slide 6 chốt sản phẩm của buổi học');

  slide = pptx.addSlide();
  addChrome(slide, 'Day 01', 'Chốt buổi học');
  addTitle(slide, 'Sản phẩm sau bài học', 'Mục tiêu là có thể viết được phần đầu của báo cáo');
  addRoundedCard(slide, 0.75, 2.15, 5.4, 3.9, 'Phải có sau Day 01', '', {});
  addBulletList(slide, 1.0, 2.7, 4.9, 3.0, [
    'Một Table 1 gọn',
    'Ba hình mô tả dữ liệu',
    'Hai đến ba câu nhận xét ngắn',
    'Một thư mục output lưu bảng và hình'
  ]);
  addRoundedCard(slide, 6.45, 2.15, 5.9, 3.9, 'Nối sang Day 02', '', {});
  addBulletList(slide, 6.7, 2.7, 5.4, 3.0, [
    'Day 02 dùng chính cohort này để so sánh intra, ring1, ring3, ring5',
    'Buổi sau sẽ có ROC, AUC và confusion matrix',
    'Chỉ sau khi xong Day 02 mới biết ROI nào đáng mang sang Day 03'
  ]);
  addFooterNext(slide, 'Next  Day 02 — Hiệu năng mô hình và so sánh ROI');

  return pptx;
}

function buildDay02() {
  const pptx = createDeck();
  let slide = pptx.addSlide();
  addChrome(slide, 'Day 02', 'Hiệu năng mô hình');
  addTitle(slide, 'Day 02 — Hiệu năng mô hình và so sánh ROI', 'Cùng một pipeline, bốn ROI, một cách đọc kết quả');
  addRoundedCard(slide, 0.6, 2.35, 5.4, 2.3, 'Mục tiêu', '', {});
  addBulletList(slide, 0.9, 2.95, 4.8, 1.4, [
    'So sánh intra, ring1, ring3, ring5 bằng cùng một mô hình',
    'Đọc ROC, AUC và confusion matrix',
    'Chọn ROI chính để dùng tiếp ở Day 03'
  ]);
  addMetricPill(slide, 6.3, 2.45, 1.9, 0.62, 'AUC intra', metrics.roi_results.intra.auc);
  addMetricPill(slide, 8.45, 2.45, 1.9, 0.62, 'AUC ring1', metrics.roi_results.ring1.auc, 'E6F4EA');
  addMetricPill(slide, 10.6, 2.45, 1.9, 0.62, 'AUC ring3', metrics.roi_results.ring3.auc);
  addMetricPill(slide, 7.35, 3.3, 1.9, 0.62, 'AUC ring5', metrics.roi_results.ring5.auc);
  addImageCard(slide, path.join(figDir, 'day02_auc_bar.png'), 6.2, 4.15, 6.15, 2.45, 'Một bảng số nhìn nhanh');
  addFooterNext(slide, 'Slide 2 giải thích vì sao phải giữ cùng một pipeline');

  slide = pptx.addSlide();
  addChrome(slide, 'Day 02', 'Lý thuyết ngắn');
  addTitle(slide, 'Nội dung', 'Nếu thay nhiều thứ cùng lúc thì không đọc được ROI nào tốt hơn');
  addRoundedCard(slide, 0.65, 2.0, 4.2, 4.5, 'Nguyên tắc phải giữ', '', {});
  addBulletList(slide, 0.9, 2.55, 3.7, 3.6, [
    'Cùng train test split cho mọi ROI',
    'Cùng bước imputer, scaler, one hot',
    'Cùng một classifier',
    'Cùng cách tính ROC và AUC'
  ]);
  addRoundedCard(slide, 5.05, 2.0, 3.45, 4.5, 'Input của Day 02', '', {});
  addBulletList(slide, 5.3, 2.55, 3.0, 3.6, [
    'Clinical features luôn giữ nguyên',
    'Chỉ thay nhóm radiomics',
    'Mỗi lần chạy lấy ra pred_prob và AUC'
  ]);
  addImageCard(slide, path.join(figDir, 'day05_pipeline_flow.png'), 8.75, 2.0, 3.9, 4.5, 'Flow đang học');
  addFooterNext(slide, 'Slide 3 bắt đầu từ phần code');

  slide = pptx.addSlide();
  addChrome(slide, 'Day 02', 'Code nhóm biến và pipeline');
  addTitle(slide, 'Bước 1 — Gom biến và dựng pipeline', 'Phần code này quyết định tính công bằng của so sánh');
  addCodeCard(slide, 0.65, 1.95, 6.2, 4.95, `clinical = ['age', 'sex', 'smoking_status', 'histology', 'stage',\n            'tumor_size_mm', 'tumor_volume_cm3', 'tp53_mutation']\ncat_cols = ['sex', 'smoking_status', 'histology', 'stage']\n\nroi_groups = {\n    'intra': [c for c in df.columns if c.startswith('intra_')],\n    'ring1': [c for c in df.columns if c.startswith('ring1_')],\n    'ring3': [c for c in df.columns if c.startswith('ring3_')],\n    'ring5': [c for c in df.columns if c.startswith('ring5_')],\n}\n\npipe = build_lr_pipeline(feature_list, cat_cols)`, 'python', 'Code chuẩn bị');
  addRoundedCard(slide, 7.05, 1.95, 5.55, 4.95, 'Ý phải nắm', '', {});
  addBulletList(slide, 7.3, 2.45, 5.1, 4.0, [
    'Clinical luôn đi cùng mọi ROI',
    'Ring chỉ đổi phần radiomics',
    'Imputer đặt trong pipeline để tránh lỗi và tránh làm bẩn split',
    'Logistic regression là đủ tốt cho bộ demo này'
  ], { fontSize: 12.2 });
  addFooterNext(slide, 'Slide 4 là vòng lặp tính AUC cho từng ROI');

  slide = pptx.addSlide();
  addChrome(slide, 'Day 02', 'Code đánh giá ROI');
  addTitle(slide, 'Bước 2 — Chạy cùng một hàm cho bốn ROI', 'Mỗi ROI trả ra AUC, Brier, threshold, sensitivity, specificity');
  addCodeCard(slide, 0.65, 1.95, 6.3, 5.0, `def evaluate_roi(df, roi_name):\n    feature_list = clinical + roi_groups[roi_name]\n    pipe = build_lr_pipeline(feature_list, cat_cols)\n    pipe.fit(df.loc[idx_train, feature_list], y_train)\n\n    pred_prob = pipe.predict_proba(df.loc[idx_test, feature_list])[:, 1]\n    auc = roc_auc_score(y_test, pred_prob)\n    fpr, tpr, thr = roc_curve(y_test, pred_prob)\n\n    return auc, pred_prob, fpr, tpr\n\nresults = [evaluate_roi(df, roi) for roi in roi_groups]`, 'python', 'Code đánh giá');
  addRoundedCard(slide, 7.2, 2.1, 5.25, 4.8, 'Khi chạy xong', '', {});
  addBulletList(slide, 7.45, 2.65, 4.8, 3.9, [
    'Có một bảng số để xếp hạng ROI',
    'Có pred_prob cho từng ROI',
    'Có đường ROC để nhìn trực quan',
    'Có threshold tốt nhất theo Youden'
  ], { fontSize: 12.3 });
  addFooterNext(slide, 'Slide 5 hiển thị ROC và AUC của bộ demo');

  slide = pptx.addSlide();
  addChrome(slide, 'Day 02', 'Kết quả demo');
  addTitle(slide, 'Kết quả demo — ROC và AUC', 'Mục tiêu của slide này là nhìn ra ring1 đang tốt hơn');
  addImageCard(slide, path.join(figDir, 'day02_result_montage.png'), 0.65, 1.95, 8.35, 5.0, 'ROC và confusion matrix');
  addRoundedCard(slide, 9.25, 1.95, 3.45, 5.0, 'Đọc kết quả', '', {});
  addBulletList(slide, 9.45, 2.45, 3.05, 4.1, [
    `AUC ring1 là ${metrics.roi_results.ring1.auc}`.replace('$',''),
    `AUC intra là ${metrics.roi_results.intra.auc}`.replace('$',''),
    'Khoảng cách giữa ring1 và intra đủ rõ để mang ring1 sang Day 03',
    'Confusion matrix giúp nhìn độ nhạy và độ đặc hiệu tại threshold đã chọn'
  ], { fontSize: 12.0 });
  addFooterNext(slide, 'Slide 6 chốt cách viết kết quả');

  slide = pptx.addSlide();
  addChrome(slide, 'Day 02', 'Chốt buổi học');
  addTitle(slide, 'Sản phẩm sau bài học', 'Sau Day 02 học sinh phải có cả số và hình');
  addRoundedCard(slide, 0.75, 2.15, 5.3, 3.9, 'Phải có sau Day 02', '', {});
  addBulletList(slide, 1.0, 2.7, 4.8, 3.0, [
    'Bảng so sánh AUC của bốn ROI',
    'Một hình ROC',
    'Một confusion matrix cho ROI tốt nhất',
    'Ba câu ngắn giải thích vì sao chọn ring1'
  ]);
  addRoundedCard(slide, 6.35, 2.15, 5.95, 3.9, 'Nối sang Day 03', '', {});
  addBulletList(slide, 6.6, 2.7, 5.45, 3.0, [
    'Day 03 sẽ trả lời câu hỏi kết quả ring1 có ổn định hay không',
    'Buổi sau học sinh sẽ gặp CV, bootstrap và leakage',
    'Đó mới là phần khiến kết quả đáng tin hơn'
  ]);
  addFooterNext(slide, 'Next  Day 03 — Độ ổn định của mô hình');

  return pptx;
}

function buildDay03() {
  const pptx = createDeck();
  let slide = pptx.addSlide();
  addChrome(slide, 'Day 03', 'Độ ổn định');
  addTitle(slide, 'Day 03 — Độ ổn định của mô hình', 'AUC đẹp chưa đủ. Cần biết mô hình dao động ra sao');
  addRoundedCard(slide, 0.6, 2.35, 5.2, 2.3, 'Buổi này làm gì', '', {});
  addBulletList(slide, 0.9, 2.95, 4.7, 1.4, [
    'Chạy 5 fold CV cho ring1',
    'Dùng bootstrap để có khoảng tin cậy cho AUC',
    'Xem một ví dụ leakage rất ngắn'
  ]);
  addMetricPill(slide, 6.1, 2.45, 2.2, 0.62, 'Mean CV AUC', metrics.cv_auc_mean);
  addMetricPill(slide, 8.55, 2.45, 2.2, 0.62, 'CV SD', metrics.cv_auc_sd);
  addMetricPill(slide, 6.75, 3.3, 4.0, 0.62, 'Bootstrap CI', metrics.bootstrap_ci[0] + ' đến ' + metrics.bootstrap_ci[1]);
  addImageCard(slide, path.join(figDir, 'day03_cv_auc.png'), 8.9, 4.1, 3.5, 2.4, 'Một hình để nhớ');
  addFooterNext(slide, 'Slide 2 giải thích vai trò của CV và bootstrap');

  slide = pptx.addSlide();
  addChrome(slide, 'Day 03', 'Lý thuyết ngắn');
  addTitle(slide, 'Nội dung', 'Day 03 tập trung vào độ tin cậy của kết quả');
  addRoundedCard(slide, 0.65, 2.0, 4.1, 4.45, 'Cross validation', '', {});
  addBulletList(slide, 0.9, 2.55, 3.6, 3.5, [
    'Chia dữ liệu thành nhiều fold',
    'Mỗi fold cho một lần kiểm tra',
    'Nhìn độ dao động giữa các fold'
  ]);
  addRoundedCard(slide, 4.95, 2.0, 3.4, 4.45, 'Bootstrap', '', {});
  addBulletList(slide, 5.2, 2.55, 2.95, 3.5, [
    'Lấy mẫu lại nhiều lần',
    'Tính AUC cho từng lần lặp',
    'Tạo khoảng tin cậy cho AUC'
  ]);
  addRoundedCard(slide, 8.55, 2.0, 4.05, 4.45, 'Leakage', '', {});
  addBulletList(slide, 8.8, 2.55, 3.55, 3.5, [
    'Xuất hiện khi thông tin test lọt vào train',
    'Hay gặp ở bước scaler và feature selection',
    'Làm AUC đẹp giả'
  ]);
  addFooterNext(slide, 'Slide 3 chạy code của phần CV');

  slide = pptx.addSlide();
  addChrome(slide, 'Day 03', 'Code CV');
  addTitle(slide, 'Bước 1 — 5 fold CV', 'Học sinh chỉ cần hiểu vòng lặp CV đang trả ra một dãy AUC');
  addCodeCard(slide, 0.65, 1.95, 6.3, 4.95, `cv = StratifiedKFold(n_splits=5, shuffle=True, random_state=42)\n\ncv_result = cross_validate(\n    pipe,\n    df[feature_list],\n    y,\n    cv=cv,\n    scoring=['roc_auc', 'accuracy'],\n    return_train_score=False\n)\n\ncv_table = pd.DataFrame({\n    'fold': [1, 2, 3, 4, 5],\n    'auc': cv_result['test_roc_auc'].round(3)\n})\ndisplay(cv_table)`, 'python', 'Code CV');
  addRoundedCard(slide, 7.15, 1.95, 5.45, 4.95, 'Cần đọc ra điều gì', '', {});
  addBulletList(slide, 7.4, 2.45, 4.95, 4.0, [
    'Nếu các fold dao động quá mạnh thì mô hình không ổn định',
    'Nếu mean AUC và từng fold đều giữ khá tốt thì có thể yên tâm hơn',
    'CV không thay thế test set nhưng giúp nhìn sâu hơn vào độ ổn định'
  ], { fontSize: 12.1 });
  addFooterNext(slide, 'Slide 4 hiển thị CV và bootstrap của bộ demo');

  slide = pptx.addSlide();
  addChrome(slide, 'Day 03', 'Kết quả CV và bootstrap');
  addTitle(slide, 'Kết quả demo — CV và bootstrap', 'Hai hình này đủ để viết phần ổn định của mô hình');
  addImageCard(slide, path.join(figDir, 'day03_plot_montage.png'), 0.65, 1.95, 8.45, 5.05, 'Ba hình của Day 03');
  addRoundedCard(slide, 9.35, 1.95, 3.35, 5.05, 'Điểm cần chốt', '', {});
  addBulletList(slide, 9.55, 2.45, 2.95, 4.1, [
    `Mean CV AUC là ${metrics.cv_auc_mean}`.replace('$',''),
    `Bootstrap mean AUC là ${metrics.bootstrap_auc_mean}`.replace('$',''),
    `Bootstrap CI chạy từ ${metrics.bootstrap_ci[0]} đến ${metrics.bootstrap_ci[1]}`.replace('$',''),
    'Ví dụ leakage cho thấy làm sai có thể khiến AUC cao giả'
  ], { fontSize: 11.8 });
  addFooterNext(slide, 'Slide 5 chốt sản phẩm của Day 03');

  slide = pptx.addSlide();
  addChrome(slide, 'Day 03', 'Chốt buổi học');
  addTitle(slide, 'Sản phẩm sau bài học', 'Day 03 giúp kết quả của Day 02 đáng tin hơn');
  addRoundedCard(slide, 0.75, 2.15, 5.3, 3.9, 'Phải có sau Day 03', '', {});
  addBulletList(slide, 1.0, 2.7, 4.8, 3.0, [
    'Bảng AUC của 5 fold',
    'Histogram bootstrap',
    'Một ví dụ leakage rất ngắn',
    'Ba câu nhận xét về độ ổn định'
  ]);
  addRoundedCard(slide, 6.35, 2.15, 5.95, 3.9, 'Nối sang Day 04', '', {});
  addBulletList(slide, 6.6, 2.7, 5.45, 3.0, [
    'Day 04 sẽ lấy pred_prob của ring1 để nối sang bảng pathway',
    'Từ đây học sinh sẽ thấy AI và NGS gặp nhau ở đâu',
    'Đó là phần radiogenomics của mini bootcamp'
  ]);
  addFooterNext(slide, 'Next  Day 04 — Delta P theo pathway');

  return pptx;
}

function buildDay04() {
  const pptx = createDeck();
  let slide = pptx.addSlide();
  addChrome(slide, 'Day 04', 'Delta P theo pathway');
  addTitle(slide, 'Day 04 — Delta P theo pathway', 'Từ pred_prob của mô hình sang cách đọc pathway');
  addRoundedCard(slide, 0.6, 2.35, 5.25, 2.3, 'Buổi này làm gì', '', {});
  addBulletList(slide, 0.9, 2.95, 4.75, 1.4, [
    'Tạo pred_prob từ ring1',
    'Ghép với subset NGS gồm 64 ca',
    'Tính delta mean P và delta median P cho từng pathway'
  ]);
  addMetricPill(slide, 6.2, 2.45, 2.0, 0.62, 'Top pathway', metrics.top_pathway, 'E6F4EA');
  addMetricPill(slide, 8.45, 2.45, 2.2, 0.62, 'Delta median', metrics.pathway_table[0].delta_median_p);
  addMetricPill(slide, 10.9, 2.45, 1.4, 0.62, 'n', 64);
  addImageCard(slide, path.join(figDir, 'day04_delta_median_bar.png'), 6.05, 3.35, 6.3, 3.1, 'Một biểu đồ nhìn nhanh');
  addFooterNext(slide, 'Slide 2 giải thích vì sao dùng xác suất dự đoán');

  slide = pptx.addSlide();
  addChrome(slide, 'Day 04', 'Lý thuyết ngắn');
  addTitle(slide, 'Nội dung', 'Day 04 không dùng nhãn cứng. Day 04 dùng xác suất dự đoán');
  addRoundedCard(slide, 0.65, 2.0, 4.15, 4.5, 'Vì sao dùng pred_prob', '', {});
  addBulletList(slide, 0.9, 2.55, 3.65, 3.55, [
    'Xác suất giữ lại nhiều thông tin hơn nhãn 0 và 1',
    'Dễ so sánh mutated với WT theo trung vị và trung bình',
    'Phù hợp với ý tưởng delta P'
  ]);
  addRoundedCard(slide, 5.0, 2.0, 3.45, 4.5, 'Công thức đọc nhanh', '', {});
  addBulletList(slide, 5.25, 2.55, 3.0, 3.55, [
    'Delta median P bằng median mutated trừ median WT',
    'Delta mean P bằng mean mutated trừ mean WT',
    'Giá trị dương nghĩa là nhóm mutated có xác suất cao hơn'
  ]);
  addImageCard(slide, path.join(figDir, 'day04_top_pathway_box.png'), 8.65, 2.0, 3.95, 4.5, 'Boxplot pathway đứng đầu');
  addFooterNext(slide, 'Slide 3 bắt đầu từ code merge và tính delta P');

  slide = pptx.addSlide();
  addChrome(slide, 'Day 04', 'Code merge');
  addTitle(slide, 'Bước 1 — Lấy pred_prob và ghép với NGS', 'Đây là phần nối machine learning với pathway analysis');
  addCodeCard(slide, 0.65, 1.95, 6.35, 5.0, `pred_prob_cv = cross_val_predict(\n    pipe,\n    df[feature_list],\n    df[target],\n    cv=cv,\n    method='predict_proba'\n)[:, 1]\n\npred_df = df[['patient_id', 'egfr_mutation']].copy()\npred_df['pred_prob_egfr'] = pred_prob_cv\n\nmerged = ngs.merge(pred_df, on=['patient_id', 'egfr_mutation'], how='left')`, 'python', 'Code merge');
  addRoundedCard(slide, 7.2, 1.95, 5.3, 5.0, 'Điểm cần hiểu', '', {});
  addBulletList(slide, 7.45, 2.45, 4.85, 4.0, [
    'cross_val_predict giúp lấy xác suất dự đoán cho toàn cohort',
    'merge phải đi theo patient_id',
    'Subset NGS chỉ có 64 ca nên phải đọc kết quả một cách vừa phải'
  ], { fontSize: 12.2 });
  addFooterNext(slide, 'Slide 4 cho ra bar chart và boxplot');

  slide = pptx.addSlide();
  addChrome(slide, 'Day 04', 'Kết quả demo');
  addTitle(slide, 'Kết quả demo — pathway và delta P', 'Bộ demo này cho PI3K đứng đầu');
  addImageCard(slide, path.join(figDir, 'day04_result_montage.png'), 0.65, 1.95, 8.45, 5.0, 'Hai hình quan trọng của Day 04');
  addRoundedCard(slide, 9.35, 1.95, 3.35, 5.0, 'Cách đọc', '', {});
  addBulletList(slide, 9.55, 2.45, 2.95, 4.0, [
    `Top pathway là ${metrics.top_pathway}`.replace('$',''),
    `Delta median P là ${metrics.pathway_table[0].delta_median_p}`.replace('$',''),
    `Delta mean P là ${metrics.pathway_table[0].delta_mean_p}`.replace('$',''),
    'Boxplot cho thấy nhóm mutated lệch lên phía xác suất cao hơn'
  ], { fontSize: 11.8 });
  addFooterNext(slide, 'Slide 5 chốt sản phẩm của Day 04');

  slide = pptx.addSlide();
  addChrome(slide, 'Day 04', 'Chốt buổi học');
  addTitle(slide, 'Sản phẩm sau bài học', 'Day 04 biến pred_prob thành một câu chuyện pathway');
  addRoundedCard(slide, 0.75, 2.15, 5.3, 3.9, 'Phải có sau Day 04', '', {});
  addBulletList(slide, 1.0, 2.7, 4.8, 3.0, [
    'Bảng pathway đầy đủ',
    'Bar chart của delta median P',
    'Boxplot của pathway đứng đầu',
    'Hai đến ba câu diễn giải ngắn'
  ]);
  addRoundedCard(slide, 6.35, 2.15, 5.95, 3.9, 'Nối sang Day 05', '', {});
  addBulletList(slide, 6.6, 2.7, 5.45, 3.0, [
    'Day 05 không thêm chỉ số mới',
    'Buổi cuối chỉ gom bảng, hình, câu văn vào một thư mục output rõ ràng',
    'Đó là bước gần nhất với viết báo cáo'
  ]);
  addFooterNext(slide, 'Next  Day 05 — Ghép toàn bộ pipeline thành báo cáo phân tích');

  return pptx;
}

function buildDay05() {
  const pptx = createDeck();
  let slide = pptx.addSlide();
  addChrome(slide, 'Day 05', 'Tổng hợp báo cáo');
  addTitle(slide, 'Day 05 — Ghép toàn bộ pipeline thành báo cáo phân tích', 'Buổi cuối gom số, hình và câu văn vào một output rõ ràng');
  addRoundedCard(slide, 0.6, 2.35, 5.4, 2.4, 'Buổi này làm gì', '', {});
  addBulletList(slide, 0.9, 2.95, 4.8, 1.5, [
    'Gom các bảng chính',
    'Gom các hình chính',
    'Viết một đoạn tóm tắt ngắn đủ để đưa vào báo cáo'
  ]);
  addImageCard(slide, path.join(figDir, 'day05_pipeline_flow.png'), 6.2, 2.3, 6.15, 3.9, 'Toàn bộ flow trong 5 buổi');
  addFooterNext(slide, 'Slide 2 đi vào code xuất output');

  slide = pptx.addSlide();
  addChrome(slide, 'Day 05', 'Code xuất bảng');
  addTitle(slide, 'Bước 1 — Xuất bảng chính', 'Mỗi file output phải có tên rõ ràng để dùng lại cho báo cáo');
  addCodeCard(slide, 0.65, 1.95, 6.3, 5.0, `output_dir = Path('output/day05')\noutput_dir.mkdir(parents=True, exist_ok=True)\n\nroi_results = pd.read_csv('_static/downloads/day02_roi_results.csv')\ncv_results = pd.read_csv('_static/downloads/day03_cv_auc.csv')\npathway_results = pd.read_csv('_static/downloads/day04_pathway_delta_p.csv')\n\nroi_results.to_csv(output_dir / 'roi_results.csv', index=False)\ncv_results.to_csv(output_dir / 'cv_results.csv', index=False)\npathway_results.to_csv(output_dir / 'pathway_results.csv', index=False)`, 'python', 'Code xuất bảng');
  addRoundedCard(slide, 7.15, 1.95, 5.4, 5.0, 'Cách đặt tên file', '', {});
  addBulletList(slide, 7.4, 2.45, 4.9, 4.0, [
    'Tên file phải gợi ngay nội dung',
    'Không dùng tên kiểu final cuối cùng mới',
    'Bảng nào phục vụ slide thì lưu ngay dưới dạng csv',
    'Ngày cuối chỉ gom và chuẩn hóa output'
  ], { fontSize: 12.1 });
  addFooterNext(slide, 'Slide 3 xuất hình và summary note');

  slide = pptx.addSlide();
  addChrome(slide, 'Day 05', 'Code xuất hình và đoạn tóm tắt');
  addTitle(slide, 'Bước 2 — Xuất hình và summary note', 'Đây là phần giúp học sinh chuyển từ code sang câu văn');
  addCodeCard(slide, 0.65, 1.95, 6.3, 5.0, `figure_files = [\n    '_static/figures/day02_roc_compare.png',\n    '_static/figures/day03_cv_auc.png',\n    '_static/figures/day03_bootstrap_auc.png',\n    '_static/figures/day04_delta_median_bar.png'\n]\n\nfor fp in figure_files:\n    img = Image.open(fp)\n    img.save(output_dir / Path(fp).name)\n\nsummary_text = f'''\nCohort demo gồm {metrics.cohort_n} bệnh nhân.\nRing1 cho AUC cao nhất là {metrics.roi_results.ring1.auc}.\nMean CV AUC là {metrics.cv_auc_mean}.\nPathway đứng đầu là {metrics.top_pathway}.\n'''`, 'python', 'Code xuất hình và summary');
  addRoundedCard(slide, 7.2, 1.95, 5.3, 5.0, 'Khi chạy xong', '', {});
  addBulletList(slide, 7.45, 2.45, 4.85, 4.0, [
    'Có thư mục output đủ sạch để dùng lại',
    'Có summary note cho phần kết quả',
    'Học sinh không phải lục lại notebook cũ để tìm hình'
  ], { fontSize: 12.2 });
  addFooterNext(slide, 'Slide 4 cho thấy output cuối cùng nên trông ra sao');

  slide = pptx.addSlide();
  addChrome(slide, 'Day 05', 'Output cuối cùng');
  addTitle(slide, 'Output nên có gì', 'Mục tiêu của Day 05 là làm ra bộ file dùng lại được');
  addRoundedCard(slide, 0.75, 1.95, 5.2, 4.95, 'Thư mục output/day05', '', {});
  addBulletList(slide, 1.05, 2.45, 4.6, 4.0, [
    'roi_results.csv',
    'cv_results.csv',
    'pathway_results.csv',
    'day02_roc_compare.png',
    'day03_cv_auc.png',
    'day03_bootstrap_auc.png',
    'day04_delta_median_bar.png',
    'summary_note.txt'
  ], { fontSize: 12.4 });
  addRoundedCard(slide, 6.3, 1.95, 6.0, 4.95, 'Cách dùng bộ output này', '', {});
  addBulletList(slide, 6.6, 2.45, 5.4, 4.0, [
    'Lấy bảng số cho phần kết quả',
    'Lấy hình ROC và bootstrap cho poster',
    'Lấy summary note để viết nháp phần kết quả',
    'Nếu đổi model, chỉ cần chạy lại một chỗ rồi xuất lại'
  ], { fontSize: 12.2 });
  addFooterNext(slide, 'Slide 5 chốt toàn bộ mini bootcamp');

  slide = pptx.addSlide();
  addChrome(slide, 'Day 05', 'Chốt khóa học');
  addTitle(slide, 'Sau 5 buổi học sinh đã đi hết một vòng phân tích', 'Từ cohort demo đến báo cáo ngắn bằng code');
  addRoundedCard(slide, 0.75, 2.15, 5.3, 3.95, 'Điều quan trọng nhất', '', {});
  addBulletList(slide, 1.0, 2.7, 4.8, 3.0, [
    'Biết dữ liệu đang có gì',
    'Biết mô hình nào tốt hơn trong cùng một điều kiện',
    'Biết kiểm tra độ ổn định',
    'Biết nối xác suất dự đoán với pathway',
    'Biết gom sản phẩm thành output rõ ràng'
  ]);
  addRoundedCard(slide, 6.35, 2.15, 5.95, 3.95, 'Sau khóa học có thể làm gì', '', {});
  addBulletList(slide, 6.6, 2.7, 5.45, 3.0, [
    'Đọc tốt hơn phần kết quả của báo cáo',
    'Chạy lại demo trên Colab mà không quá sợ code',
    'Biết phải hỏi gì khi xem một mô hình ML trong nghiên cứu y sinh'
  ]);
  addFooterNext(slide, 'Kết thúc mini bootcamp');

  return pptx;
}

async function main() {
  const decks = [
    ['day01_slides.pptx', buildDay01()],
    ['day02_slides.pptx', buildDay02()],
    ['day03_slides.pptx', buildDay03()],
    ['day04_slides.pptx', buildDay04()],
    ['day05_slides.pptx', buildDay05()],
  ];
  for (const [name, pptx] of decks) {
    await pptx.writeFile({ fileName: path.join(slideDir, name) });
  }
}
main().catch(err => { console.error(err); process.exit(1); });
