# 아이파킹 (I PARKING) 디자인 시스템

## 프로젝트 정보
- **출처 웹사이트**: 아이파킹 (I PARKING) 공식 웹사이트
- **분석 날짜**: 2026-06-22
- **적용 프로젝트**: 아이파킹 랜딩 페이지 클론

---

## 1. 타이포그래피

### CSS 변수 정의

```css
:root {
  /* Font Size */
  --font-display: 3rem;        /* 48px — 히어로 메인 슬로건 */
  --font-h1: 2.25rem;          /* 36px — 섹션 대표 제목 */
  --font-h2: 1.75rem;          /* 28px — 섹션 부 제목 */
  --font-h3: 1.25rem;          /* 20px — 카드 제목, 소항목 제목 */
  --font-body-lg: 1rem;        /* 16px — 주요 본문, 설명 텍스트 */
  --font-body: 0.875rem;       /* 14px — 일반 본문, 레이블 */
  --font-caption: 0.75rem;     /* 12px — 부가 정보, 메타 텍스트 */
  --font-stat: 2.75rem;        /* 44px — 통계 숫자 강조 */

  /* Font Weight */
  --font-weight-bold: 700;     /* 제목, 강조, 통계 숫자 */
  --font-weight-semibold: 600; /* 카드 제목, 탭 레이블 */
  --font-weight-regular: 400;  /* 본문, 설명 텍스트 */

  /* Line Height */
  --line-height-tight: 1.2;    /* Display, 히어로 제목 */
  --line-height-heading: 1.3;  /* H1, H2 */
  --line-height-body: 1.6;     /* 본문, 설명 텍스트 */
  --line-height-caption: 1.5;  /* Caption, 메타 정보 */
}
```

### 타이포그래피 사용 가이드

| 변수 | 크기 | 굵기 | 용도 |
|------|------|------|------|
| `--font-display` | 48px | 700 | 히어로 슬로건 "똑똑한 주차 관리 파트너" |
| `--font-h1` | 36px | 700 | 섹션 대표 제목 (예: "주차의 모든 순간") |
| `--font-h2` | 28px | 700 | 섹션 부 제목, 강조 키워드 포함 제목 |
| `--font-h3` | 20px | 600 | 카드 제목, 기능명 |
| `--font-body-lg` | 16px | 400 | 섹션 설명, 주요 안내 문구 |
| `--font-body` | 14px | 400 | 일반 본문, 네비게이션, 레이블 |
| `--font-caption` | 12px | 400 | 부가 정보, 날짜, 태그 |
| `--font-stat` | 44px | 700 | 통계 수치 "1,734,592", "10,769" |

#### 특이 패턴: 혼합 강조 제목
섹션 제목에서 특정 키워드만 브랜드 레드(#E8001D)로 강조하는 패턴 사용.
```jsx
/* 예: "주차의 새로운 기준, 365 렌탈 서비스" → "365 렌탈 서비스" 강조 */
/* 예: "사업자 환경에 최적화된 비즈니스 모델" → "사업자 환경에 최적화된" 강조 */
```

---

## 2. 여백 시스템

### CSS 변수 정의

```css
:root {
  /* Section Spacing — 섹션 간 수직 여백 */
  --spacing-section-xl: 120px;  /* 섹션 간 최대 여백 (데스크톱) */
  --spacing-section-lg: 80px;   /* 섹션 내부 상하 패딩 (데스크톱) */
  --spacing-section-md: 48px;   /* 섹션 내부 상하 패딩 (태블릿) */
  --spacing-section-sm: 32px;   /* 섹션 내부 상하 패딩 (모바일) */

  /* Container Padding — 좌우 여백 */
  --spacing-container-lg: 40px; /* 컨테이너 좌우 패딩 (데스크톱) */
  --spacing-container-sm: 20px; /* 컨테이너 좌우 패딩 (모바일) */

  /* Component Gap — 컴포넌트 간 간격 */
  --spacing-gap-xl: 32px;       /* 대형 카드 간격 */
  --spacing-gap-lg: 24px;       /* 일반 카드 간격, 아이템 간격 */
  --spacing-gap-md: 16px;       /* 소형 아이템 간격 */
  --spacing-gap-sm: 8px;        /* 텍스트 요소 간 간격 */
  --spacing-gap-xs: 4px;        /* 아이콘-텍스트 간 간격 */

  /* Card Padding — 카드 내부 여백 */
  --spacing-card-lg: 32px;      /* 대형 카드 내부 패딩 */
  --spacing-card-md: 24px;      /* 중형 카드 내부 패딩 */
  --spacing-card-sm: 16px;      /* 소형 카드 내부 패딩 */

  /* Section Title Gap — 제목과 본문 사이 여백 */
  --spacing-title-gap: 48px;    /* 섹션 제목 ~ 콘텐츠 간 여백 */
  --spacing-subtitle-gap: 16px; /* 제목 ~ 서브 텍스트 간 여백 */
}
```

### 여백 사용 가이드

#### 섹션 구조 패턴
```
[섹션 상단 padding: 80px]
  [섹션 제목 영역]
    섹션 제목 (H1)
    [margin-bottom: 16px]
    섹션 설명 텍스트 (body)
  [margin-bottom: 48px]
  [카드 그리드 / 콘텐츠 영역]
    카드들 (gap: 24px)
[섹션 하단 padding: 80px]
```

#### 반응형 여백 축소 비율
| 구분 | 데스크톱 | 태블릿 | 모바일 |
|------|---------|--------|--------|
| 섹션 패딩 | 80px | 48px | 32px |
| 카드 gap | 24px | 16px | 12px |
| 카드 내부 패딩 | 32px | 24px | 16px |

---

## 3. 레이아웃 시스템

### CSS 변수 정의

```css
:root {
  /* Container */
  --layout-container-max: 1200px; /* 콘텐츠 최대 너비 */
  --layout-container-wide: 1440px;/* 풀 섹션 최대 너비 */

  /* Grid */
  --layout-col-4: 4;  /* 데스크톱 4열 그리드 */
  --layout-col-3: 3;  /* 데스크톱 3열 그리드 */
  --layout-col-2: 2;  /* 태블릿 2열 그리드 */
  --layout-col-1: 1;  /* 모바일 1열 그리드 */

  /* Header */
  --layout-header-height: 64px;   /* 네비게이션 헤더 높이 */
  --layout-topbar-height: 36px;   /* 상단 유틸리티 바 높이 */
}
```

### 레이아웃 섹션별 구조

| 섹션 | 데스크톱 열 수 | 태블릿 열 수 | 모바일 열 수 |
|------|--------------|------------|------------|
| 서비스 카드 (스마트 솔루션) | 5열 | 3열 | 1열 |
| 선택 이유 (아이콘 + 텍스트) | 2열 | 2열 | 1열 |
| 비즈니스 모델 카드 | 3열 | 2열 | 1열 |
| 레퍼런스 사진 갤러리 | 4열 | 3열 | 2열 |
| 통계 수치 | 3열 | 3열 | 1열 |
| 푸터 링크 | 5열 | 3열 | 2열 |

---

## 4. 컴포넌트 스타일

### 4-1. 버튼

```css
:root {
  /* Button Size */
  --btn-height-lg: 52px;       /* 히어로 CTA 버튼 */
  --btn-height-md: 44px;       /* 일반 CTA 버튼 */
  --btn-height-sm: 36px;       /* 소형 버튼, 태그 버튼 */

  --btn-padding-lg: 0 32px;    /* 히어로 CTA 버튼 패딩 */
  --btn-padding-md: 0 24px;    /* 일반 버튼 패딩 */
  --btn-padding-sm: 0 16px;    /* 소형 버튼 패딩 */

  /* Button Border Radius */
  --btn-radius: 4px;           /* 기본 버튼 모서리 */
  --btn-radius-pill: 100px;    /* 필 형태 버튼 (태그/배지) */

  /* Button Font */
  --btn-font-size: 0.875rem;   /* 14px */
  --btn-font-weight: 600;      /* Semi-bold */
}
```

#### 버튼 종류
| 종류 | 배경 | 텍스트 | 테두리 | 사용처 |
|------|------|--------|--------|--------|
| Primary | `#E8001D` | `#FFFFFF` | 없음 | 히어로 CTA, 주요 액션 |
| Outline Dark | 투명 | `#1A1A1A` | 1px `#1A1A1A` | 다크 배경 외 보조 액션 |
| Outline Light | 투명 | `#FFFFFF` | 1px `#FFFFFF` | 다크 배경 위 보조 버튼 |
| Text Link | 투명 | `#E8001D` | 없음 | "자세히 알아보기" 등 |

---

### 4-2. 카드

```css
:root {
  /* Card Border Radius */
  --card-radius-lg: 12px;      /* 대형 피처 카드 */
  --card-radius-md: 8px;       /* 일반 콘텐츠 카드 */
  --card-radius-sm: 4px;       /* 소형 태그, 배지 */

  /* Card Shadow */
  --card-shadow-default: 0 2px 8px rgba(0, 0, 0, 0.08);
  --card-shadow-hover: 0 8px 24px rgba(0, 0, 0, 0.12);

  /* Card Background */
  --card-bg-light: #FFFFFF;    /* 일반 카드 배경 */
  --card-bg-gray: #F5F5F5;     /* 보조 카드 배경 */
  --card-bg-dark: #1A1A1A;     /* 다크 테마 카드 (365 렌탈 등) */
  --card-bg-accent: #E8001D;   /* 강조 통계 카드 */
}
```

#### 카드 종류
| 종류 | 배경 | 텍스트 | 특이사항 |
|------|------|--------|---------|
| 서비스 카드 | `#FFFFFF` | `#1A1A1A` | 상단 이미지 + 하단 텍스트 |
| 다크 피처 카드 | `#1A1A1A` | `#FFFFFF` | 365 렌탈 섹션 |
| 통계 강조 카드 | `#E8001D` | `#FFFFFF` | 숫자 + 설명 레이아웃 |
| 통계 일반 카드 | `#F5F5F5` | `#1A1A1A` | 숫자 + 설명 레이아웃 |
| 레퍼런스 카드 | 이미지 | `#FFFFFF` (오버레이) | 호버 시 오버레이 표시 |

---

### 4-3. 배지 / 태그

```css
:root {
  --badge-padding: 6px 14px;
  --badge-radius: 100px;         /* 필 형태 */
  --badge-font-size: 0.8125rem;  /* 13px */
  --badge-font-weight: 500;

  /* 활성 탭 배지 */
  --badge-active-bg: #E8001D;
  --badge-active-text: #FFFFFF;

  /* 비활성 탭 배지 */
  --badge-inactive-bg: #F0F0F0;
  --badge-inactive-text: #555555;
}
```

---

### 4-4. 네비게이션 헤더

```css
:root {
  /* Top Utility Bar */
  --topbar-bg: #1A1A1A;
  --topbar-text: #AAAAAA;
  --topbar-font-size: 0.75rem;   /* 12px */
  --topbar-height: 36px;

  /* Main Navigation */
  --nav-bg: #FFFFFF;
  --nav-text: #1A1A1A;
  --nav-text-hover: #E8001D;
  --nav-font-size: 0.875rem;     /* 14px */
  --nav-font-weight: 500;
  --nav-height: 64px;
  --nav-border-bottom: 1px solid #E0E0E0;
}
```

---

### 4-5. 히어로 섹션

```css
:root {
  --hero-min-height: 600px;
  --hero-overlay: rgba(0, 0, 0, 0.5);   /* 배경 이미지 어두운 오버레이 */
  --hero-text-color: #FFFFFF;
  --hero-subtitle-color: rgba(255, 255, 255, 0.8);
}
```

---

### 4-6. 섹션 구분

```css
:root {
  --section-bg-white: #FFFFFF;   /* 기본 섹션 배경 */
  --section-bg-gray: #F5F5F5;    /* 구분 섹션 배경 (선택 이유 등) */
  --section-bg-dark: #1A1A1A;    /* 다크 섹션 배경 (푸터 등) */
}
```

---

## 5. MUI 적용 변수 예시

```jsx
// theme.js 참고용
const theme = createTheme({
  typography: {
    fontFamily: '"Noto Sans KR", "Apple SD Gothic Neo", sans-serif',
    h1: { fontSize: '2.25rem', fontWeight: 700, lineHeight: 1.3 },
    h2: { fontSize: '1.75rem', fontWeight: 700, lineHeight: 1.3 },
    h3: { fontSize: '1.25rem', fontWeight: 600, lineHeight: 1.4 },
    body1: { fontSize: '1rem', fontWeight: 400, lineHeight: 1.6 },
    body2: { fontSize: '0.875rem', fontWeight: 400, lineHeight: 1.6 },
    caption: { fontSize: '0.75rem', fontWeight: 400, lineHeight: 1.5 },
  },
  spacing: 8, // 기본 단위 8px (MUI 기본값 유지)
  // spacing(1) = 8px, spacing(2) = 16px, spacing(3) = 24px ...
  components: {
    MuiContainer: {
      defaultProps: { maxWidth: 'lg' }, // 1200px
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '4px',
          fontWeight: 600,
          fontSize: '0.875rem',
          textTransform: 'none',
          height: '44px',
          padding: '0 24px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
        },
      },
    },
  },
});
```

---

## 6. 반응형 Breakpoint

| 이름 | 범위 | 주요 변화 |
|------|------|---------|
| xs | 0 ~ 599px | 1열, 섹션 패딩 32px, 히어로 폰트 2rem |
| sm | 600 ~ 899px | 2열, 섹션 패딩 48px, 히어로 폰트 2.5rem |
| md | 900 ~ 1199px | 3열, 섹션 패딩 64px, 히어로 폰트 3rem |
| lg | 1200px~ | 4-5열, 섹션 패딩 80px, 히어로 폰트 3rem |
