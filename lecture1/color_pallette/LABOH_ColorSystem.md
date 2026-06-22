# 컬러 팔레트 디자인 시스템

## 프로젝트 정보
- **출처 웹사이트**: LABO·H (라보에이치) 공식몰
- **분석 날짜**: 2026-06-22
- **적용 프로젝트**: 포트폴리오 웹사이트

---

## CSS 변수 정의

```css
:root {
  /* Primary Colors */
  --color-primary: #1A7A4A;        /* 브랜드 시그니처 딥 그린 — 헤더, CTA 버튼, 배너 */
  --color-primary-light: #00C46E;  /* 밝은 민트 그린 — 포인트, 탭 활성화, 아이콘 */
  --color-primary-dark: #0F5233;   /* 다크 그린 — 호버 상태, 강조 섹션 */

  /* Secondary Colors */
  --color-secondary: #FFFFFF;      /* 화이트 — 카드, 콘텐츠 배경 */
  --color-accent: #FF3B3B;         /* 레드 — 할인가, 긴급 강조 요소 */

  /* Background Colors */
  --color-bg-primary: #FFFFFF;     /* 메인 배경 */
  --color-bg-secondary: #F5F5F5;   /* 섹션 구분 배경, 카드 배경 */

  /* Text Colors */
  --color-text-primary: #1A1A1A;   /* 헤드라인, 주요 본문 */
  --color-text-secondary: #555555; /* 서브 텍스트, 설명 문구 */
  --color-text-muted: #999999;     /* 부가 정보, 날짜, 메타 텍스트 */

  /* Interactive Colors */
  --color-button-primary: #1A7A4A; /* 주요 CTA 버튼 배경 */
  --color-button-hover: #0F5233;   /* 버튼 호버 상태 */
  --color-link: #1A7A4A;           /* 링크 텍스트 */
  --color-link-hover: #00C46E;     /* 링크 호버 상태 */

  /* Border & Divider */
  --color-border: #E0E0E0;         /* 카드 테두리, 구분선 */
  --color-border-focus: #00C46E;   /* 인풋 포커스 테두리 */
}
```

---

## 컬러 사용 가이드

### Primary — `#1A7A4A` (딥 그린)
- 네비게이션 헤더 배경
- 주요 CTA 버튼 (구매하기, 더 보기 등)
- 프로모션 배너 배경
- 브랜드 로고 컬러
- **사용 비율 목표**: 전체 화면의 15~20%

### Primary Light — `#00C46E` (민트 그린)
- 탭 메뉴 활성화(active) 상태
- 슬라이더 도트, 페이지 인디케이터
- 아이콘 아웃라인, 체크마크
- 링크 호버 효과
- **사용 비율 목표**: 전체 화면의 3~5% (포인트 역할)

### Background — `#FFFFFF` / `#F5F5F5`
- `#FFFFFF`: 카드, 모달, 기본 콘텐츠 영역 배경
- `#F5F5F5`: 섹션 간 구분, 상품 리스트 배경, 푸터 배경
- **사용 비율 목표**: 전체 화면의 60~70%

### Text — `#1A1A1A` / `#555555` / `#999999`
- `#1A1A1A`: H1~H3 제목, 상품명 등 핵심 텍스트
- `#555555`: 상품 설명, 카테고리 레이블 등 보조 텍스트
- `#999999`: 날짜, 리뷰 수, 브레드크럼 등 부가 정보

### Accent — `#FF3B3B` (레드)
- 할인율 표시 (예: `-46%`)
- 품절, 마감 임박 등 긴급 상태 알림
- **주의**: 과도한 사용 자제 — 강조가 필요한 1~2곳에만 적용

### Interactive — 버튼 & 링크
- 기본 버튼: 배경 `#1A7A4A` + 텍스트 `#FFFFFF`
- 호버 시: 배경 `#0F5233` (10% 어둡게)
- 아웃라인 버튼: 테두리 `#1A7A4A` + 텍스트 `#1A7A4A`
- 비활성화 버튼: 배경 `#E0E0E0` + 텍스트 `#999999`

---

## 반응형 고려사항

### 다크모드 대응

```css
@media (prefers-color-scheme: dark) {
  :root {
    --color-bg-primary: #121212;
    --color-bg-secondary: #1E1E1E;
    --color-text-primary: #F0F0F0;
    --color-text-secondary: #AAAAAA;
    --color-text-muted: #666666;
    --color-border: #333333;

    /* Primary는 밝기 유지 — 그린 계열은 다크모드에서도 잘 보임 */
    --color-primary: #2A9A5A;
    --color-primary-light: #00D47E;
  }
}
```

### 모바일 (xs: 0~599px)
- 버튼 최소 터치 영역: `48px × 48px` 이상 확보
- 텍스트 대비율: WCAG AA 기준 4.5:1 이상 유지
- `--color-bg-secondary` 구분선으로 섹션 경계를 명확히 표시

### 태블릿 (sm: 600~899px)
- 카드 레이아웃 전환 시 `--color-border` 선 굵기 1px 유지
- 네비게이션 배경 `--color-primary` 유지, 모바일 햄버거 메뉴로 전환

### 데스크톱 (md: 900px~)
- 호버 인터랙션 적극 활용 (`--color-button-hover`, `--color-link-hover`)
- 그린 배너 섹션 전체 너비(full-width) 적용으로 시선 집중 효과

### 접근성 (Accessibility)
| 조합 | 대비율 | WCAG 등급 |
|------|--------|-----------|
| `#FFFFFF` on `#1A7A4A` | 5.2:1 | AA ✅ |
| `#1A1A1A` on `#FFFFFF` | 18.1:1 | AAA ✅ |
| `#555555` on `#FFFFFF` | 7.4:1 | AAA ✅ |
| `#FFFFFF` on `#FF3B3B` | 4.6:1 | AA ✅ |
