---
name: supabase
description: >
  Supabase MCP 도구를 활용해 프로젝트 관리, 데이터베이스 스키마 조회/변경, SQL 실행, 마이그레이션 적용,
  Edge Function 배포, 브랜치 관리, 로그 확인 등 모든 Supabase 작업을 수행한다.
  사용자가 "Supabase", "DB 테이블", "마이그레이션", "Edge Function", "Supabase 프로젝트" 등을
  언급하면 이 스킬을 사용한다.
---

# Supabase MCP 스킬

Supabase MCP 서버를 통해 Supabase 플랫폼의 모든 기능을 CLI 없이 직접 제어한다.

## 기본 원칙

- 스키마 변경 전에는 반드시 `list_tables` 로 현재 구조를 파악한다.
- 문제 디버깅 시 `get_logs` 와 `get_advisors` 를 먼저 확인한다.
- 비용이 발생하는 작업(`create_project`, `create_branch` 등)은 `get_cost` 로 먼저 확인하고 `confirm_cost` 로 승인한다.
- 마이그레이션은 `apply_migration` 을 사용하고, 직접 DDL 실행은 `execute_sql` 로 한다.
- 클라이언트 설정이 필요할 때는 `get_project_url` 과 `get_publishable_keys` 를 사용한다.

---

## 프로젝트 관리

```
list_organizations        → 조직 목록 조회
get_organization          → 조직 상세 정보
list_projects             → 프로젝트 목록 조회
get_project               → 프로젝트 상세 정보
get_project_url           → 프로젝트 API URL 조회
get_publishable_keys      → anon/service_role 키 조회
create_project            → 신규 프로젝트 생성 (비용 발생)
pause_project             → 프로젝트 일시 중지
restore_project           → 프로젝트 재개
```

---

## 데이터베이스

```
list_tables               → 테이블 목록 조회
execute_sql               → SQL 직접 실행 (조회/삽입/수정)
list_extensions           → 설치된 PostgreSQL 확장 목록
generate_typescript_types → TypeScript 타입 자동 생성
```

---

## 마이그레이션

```
list_migrations           → 마이그레이션 이력 조회
apply_migration           → 새 마이그레이션 적용 (DDL 변경)
```

---

## 브랜치 (미리보기 환경)

```
list_branches             → 브랜치 목록 조회
create_branch             → 새 브랜치 생성 (비용 발생)
delete_branch             → 브랜치 삭제
reset_branch              → 브랜치 초기화
rebase_branch             → 브랜치 리베이스
merge_branch              → 브랜치를 메인으로 병합
```

---

## Edge Functions

```
list_edge_functions       → Edge Function 목록 조회
get_edge_function         → Edge Function 상세 정보
deploy_edge_function      → Edge Function 배포
```

---

## 모니터링 & 진단

```
get_logs                  → 프로젝트 로그 조회 (api/postgres/edge-runtime 등)
get_advisors              → 성능·보안 권고사항 확인
search_docs               → Supabase 공식 문서 검색
```

---

## 비용 관련 작업 흐름

```
1. get_cost               → 예상 비용 확인
2. confirm_cost           → 비용 승인
3. create_project / create_branch 등 실행
```

---

## 자주 쓰는 작업 예시

### 테이블 구조 파악 후 SQL 실행
1. `list_tables` 로 현재 테이블 확인
2. `execute_sql` 로 SELECT/INSERT/UPDATE 실행

### 마이그레이션으로 스키마 변경
1. `list_migrations` 로 이력 확인
2. `apply_migration` 으로 DDL 적용

### 클라이언트 연동 설정
1. `get_project_url` 로 API URL 확인
2. `get_publishable_keys` 로 anon key 확인
3. 환경변수 또는 클라이언트 코드에 설정

### 문제 발생 시 디버깅
1. `get_logs` 로 최근 에러 로그 확인
2. `get_advisors` 로 권고사항 확인
