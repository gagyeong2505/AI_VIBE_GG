# 대시보드 (eCoursie) 디자인 시스템

## 프로젝트 정보
- **출처 레퍼런스**: eCoursie — 온라인 학습 플랫폼 대시보드 UI
- **분석 날짜**: 2026-06-24
- **적용 프로젝트**: 대시보드 UI 클론

---

## 1. 타이포그래피

### CSS 변수 정의

```css
:root {
  /* Font Size */
  --font-page-title: 1.625rem;    /* 26px — 페이지 제목 "My Courses" */
  --font-h2: 1.125rem;            /* 18px — 카드 제목 (코스명) */
  --font-h3: 1rem;                /* 16px — 위젯 섹션 제목 (Online Users 등) */
  --font-body: 0.8125rem;         /* 13px — 카드 설명, 일반 본문 */
  --font-label: 0.875rem;         /* 14px — 사이드바 메뉴, 필터 레이블 */
  --font-caption: 0.75rem;        /* 12px — Created by, 달력 날짜 숫자 */
  --font-caption-sm: 0.6875rem;   /* 11px — 사용자 ID, 보조 메타 텍스트 */

  /* Font Weight */
  --font-weight-bold: 700;        /* 페이지 제목, 카드 제목, 달력 헤더 */
  --font-weight-semibold: 600;    /* 사용자 이름 강조, 메뉴 활성 텍스트 */
  --font-weight-medium: 500;      /* 사이드바 메뉴 레이블, 필터 텍스트 */
  --font-weight-regular: 400;     /* 카드 설명, 달력 날짜, 부가 텍스트 */

  /* Line Height */
  --line-height-tight: 1.2;       /* 페이지 제목, 카드 제목 */
  --line-height-body: 1.5;        /* 카드 설명, 일반 본문 */
  --line-height-caption: 1.4;     /* 캡션, 메타 정보 */
}
```

### 타이포그래피 사용 가이드

| 변수 | 크기 | 굵기 | 용도 |
|------|------|------|------|
| `--font-page-title` | 26px | 700 | 페이지 대표 제목 "My Courses" |
| `--font-h2` | 18px | 700 | 코스 카드 제목 (Operating System 등) |
| `--font-h3` | 16px | 700 | 위젯 영역 제목 (Online Users, 달력 월/년) |
| `--font-body` | 13px | 400 | 코스 설명 텍스트 |
| `--font-label` | 14px | 500 | 사이드바 메뉴, 필터 드롭다운 텍스트 |
| `--font-caption` | 12px | 400 | "Created by", 달력 날짜 숫자 |
| `--font-caption-sm` | 11px | 400 | 사용자 ID, 부가 메타 정보 |

---

## 2. 여백 시스템

### CSS 변수 정의

```css
:root {
  /* App Shell Spacing — 앱 외곽 여백 */
  --spacing-app-padding: 24px;    /* 앱 컨테이너 외부 배경 패딩 */

  /* Sidebar Spacing */
  --spacing-sidebar-py: 24px;     /* 사이드바 상하 패딩 */
  --spacing-sidebar-px: 20px;     /* 사이드바 좌우 패딩 */
  --spacing-sidebar-gap: 8px;     /* 사이드바 메뉴 아이템 간격 */

  /* Main Content Spacing */
  --spacing-main-py: 28px;        /* 메인 콘텐츠 상하 패딩 */
  --spacing-main-px: 28px;        /* 메인 콘텐츠 좌우 패딩 */

  /* Component Gap — 컴포넌트 간 간격 */
  --spacing-gap-lg: 24px;         /* 섹션 간 간격, 위젯 간 간격 */
  --spacing-gap-md: 16px;         /* 카드 간 세로 간격 */
  --spacing-gap-sm: 12px;         /* 필터 항목 간격 */
  --spacing-gap-xs: 8px;          /* 아이콘-텍스트 간격, 메뉴 아이템 상하 */

  /* Card Padding — 카드 내부 여백 */
  --spacing-card-py: 20px;        /* 카드 내부 상하 패딩 */
  --spacing-card-px: 20px;        /* 카드 내부 좌우 패딩 */

  /* Widget Spacing — 우측 위젯 패널 */
  --spacing-widget-py: 20px;      /* 위젯 패널 상하 패딩 */
  --spacing-widget-px: 16px;      /* 위젯 패널 좌우 패딩 */
  --spacing-widget-gap: 20px;     /* 위젯 섹션 간 여백 */

  /* User List Item */
  --spacing-user-item-py: 10px;   /* 온라인 유저 아이템 상하 패딩 */
}
```

### 여백 사용 가이드

#### 3패널 레이아웃 구조
```
[앱 배경 padding: 24px]
  ┌─────────────────────────────────────────────┐
  │ [사이드바 180px]  [메인 콘텐츠]  [위젯 220px] │
  │   px: 20px         px: 28px       px: 16px  │
  │   py: 24px         py: 28px       py: 20px  │
  └─────────────────────────────────────────────┘
```

#### 카드 내부 구조 패턴
```
[카드 padding: 20px]
  [좌측 일러스트 이미지 (약 120px 폭)]
  [gap: 16px]
  [우측 텍스트 영역]
    코스 제목 (H2)
    [margin-bottom: 8px]
    설명 텍스트 (body, 3줄 clamp)
    [margin-bottom: 12px]
    "Created by [이름]"
  [우측 끝 화살표 버튼]
```

#### 여백 단계 정리

| 변수 | 크기 | 용도 |
|------|------|------|
| `--spacing-app-padding` | 24px | 앱 최외곽 여백 |
| `--spacing-main-py/px` | 28px | 메인 영역 내부 패딩 |
| `--spacing-card-py/px` | 20px | 카드 내부 패딩 |
| `--spacing-gap-lg` | 24px | 섹션·위젯 간 간격 |
| `--spacing-gap-md` | 16px | 카드 간 간격 |
| `--spacing-gap-sm` | 12px | 필터 항목 간격 |
| `--spacing-gap-xs` | 8px | 아이콘-텍스트 간격 |
| `--spacing-user-item-py` | 10px | 유저 리스트 아이템 패딩 |

---

## 3. 레이아웃 시스템

### CSS 변수 정의

```css
:root {
  /* App Shell */
  --layout-sidebar-width: 180px;  /* 좌측 사이드바 너비 */
  --layout-widget-width: 220px;   /* 우측 위젯 패널 너비 */
  --layout-app-radius: 20px;      /* 앱 전체 컨테이너 모서리 */

  /* Header */
  --layout-header-height: 60px;   /* 메인 콘텐츠 헤더 영역 높이 */

  /* Sidebar Menu Item */
  --layout-menu-height: 40px;     /* 사이드바 메뉴 아이템 높이 */
  --layout-menu-icon-size: 18px;  /* 사이드바 아이콘 크기 */
  --layout-menu-icon-gap: 10px;   /* 아이콘-레이블 간격 */
  --layout-menu-radius: 10px;     /* 활성 메뉴 박스 모서리 */
  --layout-sidebar-divider-gap: 24px; /* 상단·하단 메뉴 그룹 간격 */

  /* Calendar */
  --layout-calendar-cell: 32px;   /* 달력 날짜 셀 크기 (정사각형) */

  /* Card */
  --layout-card-radius: 16px;     /* 코스 카드 모서리 */
  --layout-card-img-width: 120px; /* 카드 좌측 일러스트 영역 너비 */

  /* Button */
  --layout-btn-circle: 36px;      /* 원형 화살표 버튼 직경 */
  --layout-btn-filter-height: 32px;   /* 필터 드롭다운 버튼 높이 */
  --layout-btn-filter-radius: 8px;    /* 필터 드롭다운 버튼 모서리 */
  --layout-btn-filter-px: 12px;       /* 필터 드롭다운 버튼 좌우 패딩 */

  /* Avatar / Status */
  --layout-avatar-size: 36px;         /* 프로필·유저 아바타 크기 */
  --layout-status-dot-size: 8px;      /* 온라인 상태 표시 점 크기 */
}
```

### 레이아웃 영역별 구조

| 영역 | 너비 | 역할 |
|------|------|------|
| 좌측 사이드바 | 180px (고정) | 로고 + 네비게이션 메뉴 |
| 중앙 메인 콘텐츠 | flex-grow: 1 | 페이지 제목 + 필터 + 카드 목록 |
| 우측 위젯 패널 | 220px (고정) | 프로필 + 달력 + 온라인 유저 |

### 사이드바 메뉴 구조

```
[상단 그룹]
  Dashboard    ← 활성 (박스 모서리 10px)
  All Courses
  Messages
  Friends
  Schedule

[하단 그룹 (하단 고정, gap: 24px)]
  Settings
  Directory
```

---

## 4. MUI 적용 변수 예시

```jsx
// theme.js 참고용
const theme = createTheme({
  typography: {
    fontFamily: '"Inter", "Noto Sans KR", sans-serif',
    h1: { fontSize: '1.625rem', fontWeight: 700, lineHeight: 1.2 },
    h2: { fontSize: '1.125rem', fontWeight: 700, lineHeight: 1.3 },
    h3: { fontSize: '1rem',     fontWeight: 700, lineHeight: 1.3 },
    body1: { fontSize: '0.8125rem', fontWeight: 400, lineHeight: 1.5 },
    body2: { fontSize: '0.875rem',  fontWeight: 500, lineHeight: 1.5 },
    caption: { fontSize: '0.75rem', fontWeight: 400, lineHeight: 1.4 },
  },
  shape: {
    borderRadius: 16,           // 기본 카드 모서리
  },
  spacing: 8,                   // 기본 단위 8px (spacing(1)=8px, spacing(3)=24px)
  components: {
    MuiCard: {
      styleOverrides: {
        root: { borderRadius: '16px' },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          textTransform: 'none',
          fontWeight: 500,
          fontSize: '0.8125rem',
        },
      },
    },
  },
});
```

---

## 5. 반응형 Breakpoint

| 이름 | 범위 | 주요 변화 |
|------|------|---------|
| xs | 0 ~ 599px | 사이드바 숨김, 1열 카드, 바텀 네비 전환 |
| sm | 600 ~ 899px | 사이드바 아이콘만 표시 (56px), 카드 목록 유지 |
| md | 900 ~ 1199px | 사이드바 전체 표시 (180px), 우측 위젯 숨김 |
| lg | 1200px~ | 3패널 풀 레이아웃 (사이드바 + 메인 + 위젯) |
