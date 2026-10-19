// Numbers transcribed from the final SenseGuard paper (Tables III–VIII).
// Keep this file as the single source for every figure shown on the page.

export const links = {
  appendix: 'https://docs.google.com/document/d/1nBlfMJam7dIFd-WN8--bOoTcUOgZdPDv/edit?usp=sharing&rtpof=true&sd=true',
  demoEmbed: 'https://drive.google.com/file/d/1XRWZCU3bLo7atJKiWdfUJJ3iqj1ZRmAv/preview',
  demoView: 'https://drive.google.com/file/d/1XRWZCU3bLo7atJKiWdfUJJ3iqj1ZRmAv/view?usp=sharing',
  outdoorRun: 'https://drive.google.com/file/d/1XJ6RTKSLHpggS11d33h5RUC6NltZzXkD/preview',
};

// Chapter marks for the demo video (seconds).
export const chapters = [
  { t: 0, label: 'Title' },
  { t: 4, label: 'Benchmarks versus the field' },
  { t: 7, label: 'The 0.44 staleness gap' },
  { t: 12, label: 'Where the gap comes from' },
  { t: 24, label: 'Sensor-to-Decision pipeline' },
  { t: 28, label: 'Research questions' },
  { t: 31, label: 'Visual versus semantic retention' },
  { t: 52, label: 'Real-world deployment' },
  { t: 64, label: 'Redundancy removal in action' },
  { t: 70, label: 'Perception gains' },
  { t: 75, label: 'LiDAR localization and detection' },
  { t: 78, label: 'Failure-driven learning' },
  { t: 86, label: 'Accuracy–latency trade-off' },
];

export type Stage = 'Baseline' | 'FD' | 'DS' | 'FD+DS';
export const stages: Stage[] = ['Baseline', 'FD', 'DS', 'FD+DS'];

// Table III, robotic vehicle (RovaX) rows.
export const cameraRovax = {
  'RF-DETR': {
    Baseline: { map50: 52.81, precision: 69.38, recall: 63.42, f1: 66.33, latency: 10.27, data: 2.21 },
    FD: { map50: 66.74, precision: 82.67, recall: 77.18, f1: 79.88, latency: 7.82, data: 1.88 },
    DS: { map50: 68.42, precision: 83.92, recall: 78.53, f1: 81.18, latency: 7.04, data: 1.98 },
    'FD+DS': { map50: 72.89, precision: 87.45, recall: 82.16, f1: 84.77, latency: 6.74, data: 1.79 },
  },
  'YOLOv10-M': {
    Baseline: { map50: 47.26, precision: 64.51, recall: 59.87, f1: 62.11, latency: 14.84, data: 2.82 },
    FD: { map50: 61.53, precision: 78.24, recall: 73.56, f1: 75.83, latency: 10.71, data: 1.97 },
    DS: { map50: 63.18, precision: 79.63, recall: 74.81, f1: 77.16, latency: 9.58, data: 2.09 },
    'FD+DS': { map50: 68.45, precision: 83.17, recall: 78.39, f1: 80.73, latency: 9.43, data: 1.88 },
  },
} as const;

// Table III, open-source benchmark rows.
export const cameraOpen = {
  'RF-DETR': {
    Baseline: { confidence: 72.1, latency: 17.4, accuracy: 69.8, fpr: 12.6, recall: 69.3, data: 4.82 },
    FD: { confidence: 84.3, latency: 14.7, accuracy: 80.8, fpr: 6.8, recall: 82.2, data: 3.25 },
    DS: { confidence: 85.8, latency: 16.4, accuracy: 81.27, fpr: 5.6, recall: 83.0, data: 3.92 },
    'FD+DS': { confidence: 87.1, latency: 12.0, accuracy: 84.9, fpr: 5.0, recall: 85.7, data: 3.89 },
  },
  'YOLOv10-M': {
    Baseline: { confidence: 68.5, latency: 19.2, accuracy: 65.3, fpr: 15.4, recall: 65.0, data: 4.15 },
    FD: { confidence: 80.9, latency: 17.6, accuracy: 77.2, fpr: 6.5, recall: 81.1, data: 3.03 },
    DS: { confidence: 84.0, latency: 18.1, accuracy: 77.8, fpr: 7.8, recall: 82.5, data: 3.47 },
    'FD+DS': { confidence: 83.8, latency: 13.5, accuracy: 79.7, fpr: 6.9, recall: 82.8, data: 3.64 },
  },
} as const;

// Table V: LiDAR localization and efficiency.
export const lidarLocalization = {
  open: {
    Baseline: { ate: 3.45, are: 0.072, rpe: 0.138, rte: 2.85, rre: 1.24, latency: 98, data: 48.5 },
    FD: { ate: 1.65, are: 0.058, rpe: 0.122, rte: 1.72, rre: 0.96, latency: 38, data: 36.2 },
    DS: { ate: 1.9, are: 0.043, rpe: 0.108, rte: 1.36, rre: 0.77, latency: 42, data: 38.6 },
    'FD+DS': { ate: 0.87, are: 0.034, rpe: 0.102, rte: 0.73, rre: 0.58, latency: 22, data: 35.8 },
  },
  rovax: {
    Baseline: { ate: 0.69, are: 0.0193, rpe: 0.079, rte: 1.97, rre: 0.59, latency: 13.72, data: 2.31 },
    FD: { ate: 0.51, are: 0.0074, rpe: 0.048, rte: 1.52, rre: 0.43, latency: 10.65, data: 1.76 },
    DS: { ate: 0.47, are: 0.0062, rpe: 0.043, rte: 1.37, rre: 0.41, latency: 11.23, data: 1.64 },
    'FD+DS': { ate: 0.36, are: 0.0047, rpe: 0.032, rte: 1.03, rre: 0.37, latency: 9.34, data: 1.58 },
  },
} as const;

// Table VI: LiDAR detection of critical objects on RovaX (CenterPoint).
export const lidarDetection = {
  Baseline: { map25: 68.42, map50: 50.87, precision: 76.38, recall: 68.25, latency: 16.92 },
  FD: { map25: 74.19, map50: 59.64, precision: 81.52, recall: 76.83, latency: 10.23 },
  DS: { map25: 76.53, map50: 62.31, precision: 83.74, recall: 78.91, latency: 11.03 },
  'FD+DS': { map25: 81.27, map50: 68.95, precision: 88.16, recall: 83.47, latency: 10.54 },
} as const;

// Table IV: admission-control ablation (open-source benchmark).
export const admission = [
  { variant: 'Fixed threshold', map: 74.9, recall: 76.2, criticalKeep: 91.8, decisionAge: 136, latency: 10.1, vlmRate: null },
  { variant: 'Visual only', map: 76.8, recall: 78.6, criticalKeep: 94.1, decisionAge: 118, latency: 10.7, vlmRate: null },
  { variant: 'Visual + semantic', map: 81.2, recall: 82.9, criticalKeep: 96.6, decisionAge: 84, latency: 12.4, vlmRate: 12.8 },
  { variant: 'Semantic + RL', map: 84.4, recall: 86.7, criticalKeep: 98.3, decisionAge: 63, latency: 14.3, vlmRate: 9.6, ours: true },
];

// Table VII: post-retraining perception, routine logging (r) vs adaptive training (a).
type Pair = [number, number];
export interface RetrainRow {
  scenario: string;
  confidence: Pair;
  latency: Pair;
  accuracy: Pair;
  fpr: Pair;
  recall: Pair;
}
export const retraining: Record<'RF-DETR' | 'YOLOv10-M', RetrainRow[]> = {
  'RF-DETR': [
    { scenario: 'Clear day', confidence: [89.2, 93.5], latency: [12.8, 9.2], accuracy: [88.4, 92.6], fpr: [6.1, 3.8], recall: [90.3, 94.2] },
    { scenario: 'Rainy', confidence: [74.4, 84.1], latency: [14.6, 11.1], accuracy: [71.2, 80.8], fpr: [13.3, 9.4], recall: [74.5, 81.9] },
    { scenario: 'Foggy', confidence: [72.6, 77.4], latency: [15.8, 11.9], accuracy: [70.8, 74.2], fpr: [14.7, 11.2], recall: [73.4, 78.1] },
    { scenario: 'Night', confidence: [69.1, 75.2], latency: [16.5, 12.3], accuracy: [64.3, 71.2], fpr: [18.8, 14.6], recall: [66.1, 71.4] },
    { scenario: 'Snowy', confidence: [74.5, 80.1], latency: [15.1, 11.2], accuracy: [72.9, 77.3], fpr: [13.4, 9.2], recall: [75.3, 81.6] },
    { scenario: 'Sun glare', confidence: [71.3, 77.6], latency: [13.2, 10.9], accuracy: [69.5, 75.7], fpr: [14.1, 10.3], recall: [72.6, 79.4] },
    { scenario: 'Dust storm', confidence: [70.3, 76.1], latency: [12.6, 11.1], accuracy: [68.2, 74.1], fpr: [16.3, 12.4], recall: [71.5, 77.8] },
    { scenario: 'High motion', confidence: [73.2, 81.3], latency: [16.7, 12.2], accuracy: [68.5, 77.1], fpr: [17.9, 11.6], recall: [70.8, 82.4] },
  ],
  'YOLOv10-M': [
    { scenario: 'Clear day', confidence: [87.7, 91.0], latency: [15.4, 11.4], accuracy: [83.9, 87.7], fpr: [8.4, 5.9], recall: [86.1, 90.4] },
    { scenario: 'Rainy', confidence: [78.1, 86.2], latency: [17.3, 12.7], accuracy: [76.5, 83.6], fpr: [11.6, 7.8], recall: [79.3, 84.7] },
    { scenario: 'Foggy', confidence: [68.3, 73.6], latency: [18.7, 16.3], accuracy: [65.4, 70.4], fpr: [17.2, 13.6], recall: [69.2, 74.5] },
    { scenario: 'Night', confidence: [73.8, 77.2], latency: [16.9, 13.4], accuracy: [66.7, 74.4], fpr: [14.9, 12.3], recall: [70.8, 76.5] },
    { scenario: 'Snowy', confidence: [70.2, 74.1], latency: [17.8, 14.7], accuracy: [67.8, 72.4], fpr: [15.9, 12.3], recall: [71.2, 76.8] },
    { scenario: 'Sun glare', confidence: [67.1, 73.4], latency: [15.1, 12.5], accuracy: [64.2, 70.8], fpr: [16.7, 12.8], recall: [68.9, 74.6] },
    { scenario: 'Dust storm', confidence: [68.7, 72.4], latency: [14.2, 12.2], accuracy: [65.1, 71.2], fpr: [17.5, 14.1], recall: [69.3, 74.9] },
    { scenario: 'High motion', confidence: [66.7, 76.1], latency: [18.6, 14.5], accuracy: [62.7, 73.9], fpr: [19.4, 13.7], recall: [65.9, 78.6] },
  ],
};

// Table VIII: pipeline-level comparison, scenario-averaged.
export interface Strategy {
  name: string;
  map: number;
  latency: number;
  ref?: string;
  ours?: boolean;
}
export const comparison: { camera: Strategy[]; lidar: Strategy[] } = {
  camera: [
    { name: 'Full processing', map: 68.52, latency: 21.7 },
    { name: 'Fixed FD+DS', map: 70.9, latency: 14.1 },
    { name: 'OneAdapt', map: 76.43, latency: 15.42, ref: '[14]' },
    { name: 'SmartAdapt', map: 71.79, latency: 12.16, ref: '[13]' },
    { name: 'SenseGuard', map: 84.4, latency: 14.31, ours: true },
  ],
  lidar: [
    { name: 'Full processing', map: 67.87, latency: 18.02 },
    { name: 'Fixed FD+DS', map: 71.45, latency: 13.21 },
    { name: 'VALO', map: 70.64, latency: 10.23, ref: '[15]' },
    { name: 'MURAL', map: 73.31, latency: 12.47, ref: '[16]' },
    { name: 'SenseGuard', map: 79.65, latency: 10.54, ours: true },
  ],
};
