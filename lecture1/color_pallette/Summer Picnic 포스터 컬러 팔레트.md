# 컬러 팔레트 디자인 시스템

## 프로젝트 정보
- **출처**: Pinterest 핀 "Идея для пригласительного на пикник" (Summer Picnic 초대장 포스터, 작성자 lizzi_in_moscow)
- **핀 링크**: https://kr.pinterest.com/pin/754845587583633366/
- **분석 날짜**: 2026-07-06
- **적용 프로젝트**: 미정 (레퍼런스 분석용)

---

## CSS 변수 정의

```css
:root {
  /* Primary Colors */
  --color-primary: #3E4D2E;        /* 딥 포레스트 그린 — 배경 전면(나무숲) */
  --color-primary-light: #6B8E4E;  /* 밝은 잔디 그린 — 햇빛 받은 잔디, 하이라이트 */
  --color-primary-dark: #2A3620;   /* 다크 그린 — 그림자, 배경 하단부 */

  /* Secondary Colors */
  --color-secondary: #D4E8A8;      /* 파스텔 옐로우그린 — 메인 카피 "Summer Picnic" */
  --color-accent: #B8825A;         /* 웜 탄(피크닉 바구니) — 소품 포인트 컬러 */

  /* Background Colors */
  --color-bg-primary: #3E4D2E;     /* 메인 배경 (숲 그린) */
  --color-bg-secondary: #2A3620;   /* 하단 배경 (다크 그린, 정보 영역) */

  /* Text Colors */
  --color-text-primary: #D4E8A8;   /* 헤드라인 "Summer Picnic" (파스텔 옐로우그린) */
  --color-text-secondary: #F5F2E8; /* 본문 카피 (크림 화이트) */
  --color-text-muted: #A8C888;     /* 날짜·장소 등 메타 정보 (뮤트 그린) */

  /* Interactive Colors */
  --color-button-primary: #D4E8A8; /* CTA 버튼 배경 (파스텔 옐로우그린) */
  --color-button-hover: #C4D890;   /* 버튼 호버 상태 (10% 어둡게) */
  --color-link: #F5F2E8;           /* 링크 텍스트 (크림 화이트) */
  --color-link-hover: #D4E8A8;     /* 링크 호버 (파스텔 옐로우그린) */

  /* Border & Divider */
  --color-border: #D4E8A8;         /* 카드·배지 테두리 (파스텔 옐로우그린) */
  --color-border-accent: #B8825A;  /* 포인트 테두리 (웜 탄) */
}
```

---

## 컬러 사용 가이드

### Primary — `#3E4D2E` (딥 포레스트 그린)
- 전체 페이지 배경 또는 히어로 섹션 배경 (블러 처리된 숲 이미지 톤)
- 차분하고 자연친화적인 무드가 필요한 아웃도어/피크닉/여름 테마 배너
- **사용 비율 목표**: 전체 화면의 50~60%

### Primary Light — `#6B8E4E` (밝은 잔디 그린)
- 햇빛이 비치는 잔디 영역, 이미지 하이라이트
- 카드 배경 그러데이션의 밝은 쪽 포인트
- **사용 비율 목표**: 전체 화면의 15~20%

### Primary Dark — `#2A3620` (다크 그린)
- 하단 정보 영역(날짜·장소·드레스코드) 배경
- 섹션 경계, 그림자 처리로 깊이감 연출
- **사용 비율 목표**: 전체 화면의 10~15%

### Secondary — `#D4E8A8` (파스텔 옐로우그린)
- 필기체 메인 헤드라인 "Summer Picnic" (숲 배경 위 최고 대비)
- CTA 버튼 배경, 카드·배지 테두리
- **사용 비율 목표**: 전체 화면의 10~15%

### Accent — `#B8825A` (웜 탄 / 피크닉 바구니 컬러)
- 피크닉 바구니, 소품 등 따뜻한 톤의 포인트 오브젝트
- 뱃지, 태그 등 소형 강조 요소
- **주의**: 숲 그린 배경 위에서 텍스트 컬러로는 대비가 부족해 사용 지양

### Text — `#D4E8A8` / `#F5F2E8` / `#A8C888`
- `#D4E8A8`: 메인 헤드라인(필기체 타이틀) — 숲 배경 위 최우선 가독성
- `#F5F2E8`: 서브 카피, 본문 문구 ("Будем рисовать, кушать и болтать" 등)
- `#A8C888`: 날짜·장소·드레스코드 등 부가 메타 정보

### Interactive — 버튼 & 링크
- 기본 CTA 버튼: 배경 `#D4E8A8` + 텍스트 `#3E4D2E` (숲 배경 위 최고 대비)
- 호버 시: 배경 `#C4D890` (파스텔 옐로우그린 10% 어둡게)
- 아웃라인 버튼: 테두리 `#F5F2E8` + 텍스트 `#F5F2E8`
- 링크 텍스트: `#F5F2E8` → 호버 시 `#D4E8A8`으로 전환

---

## 반응형 고려사항

### 다크모드 대응

```css
@media (prefers-color-scheme: dark) {
  :root {
    /* 포레스트 그린 계열은 다크모드에서도 유지 — 자연 감성 보존 */
    --color-primary: #3E4D2E;
    --color-primary-dark: #1C2415;   /* 다크모드에서 더 깊은 그린 */

    /* 배경은 그린 계열 유지하되 명도를 낮춤 */
    --color-bg-primary: #2E3A22;
    --color-bg-secondary: #1C2415;

    /* 텍스트는 밝기 유지 */
    --color-text-primary: #D4E8A8;
    --color-text-secondary: #F5F2E8;
    --color-text-muted: #8FAE70;

    --color-border: #D4E8A8;
    --color-border-accent: #B8825A;
  }
}
```

### 모바일 (xs: 0~599px)
- 히어로 배경 `#3E4D2E` 전면 적용, 필기체 헤드라인 최소 크기 `2rem` 유지
- CTA 버튼 최소 터치 영역: `48px × 48px` 이상
- WCAG AA 기준: `#D4E8A8` on `#3E4D2E` 대비율 **6.9:1** → 일반 텍스트 AA 충족
- 소형 메타 텍스트(`#A8C888`)는 대비율 **4.89:1**로 AA 기준 충족, 14px 이하는 `#F5F2E8` 권장

### 태블릿 (sm: 600~899px)
- 배경 그린 유지, 콘텐츠 좌우 패딩 `px: 3` 이상
- 카드 테두리 `--color-border` 1px 유지
- 버튼 폰트 사이즈 `1rem` → `1.1rem` 확대

### 데스크톱 (md: 900px~)
- 풀블리드 히어로 섹션에서 숲 배경의 자연스러운 깊이감 극대화
- 호버 인터랙션 적극 활용: `--color-button-hover`, `--color-link-hover`
- 필기체 헤드라인 크기 `clamp(2.5rem, 7vw, 6rem)` 적용으로 포스터 감성 유지

### 접근성 (Accessibility)

| 조합 | 대비율 | WCAG 등급 |
|------|--------|-----------|
| `#F5F2E8` on `#3E4D2E` | 8.12:1 | AAA ✅ |
| `#D4E8A8` on `#3E4D2E` | 6.90:1 | AA ✅ (AAA 근접) |
| `#A8C888` on `#3E4D2E` | 4.89:1 | AA ✅ |

> ⚠️ `#A8C888` on `#3E4D2E` 조합은 소형(14px 이하) 본문 텍스트에는 사용하지 않는다.
> 소형 텍스트는 반드시 `#F5F2E8`를 사용하여 가독성을 확보한다.
